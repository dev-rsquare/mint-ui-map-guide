const fs = require('fs');
const marked = require('marked');
const path = require('path');

const dataToWrite/* :Data */ = {};

/* interface DataInstance {
  type: 'heading' | 'paragraph' | 'list';
  heading: string;
  depth?: number;
  frequency?: number;
  dirName?: string;
  fileName: string;
  text?: string;
}

interface Data {
  [key: string]: DataInstance[];
} */

function readMarkdownFiles(dir, dirName) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // If it's a directory, recursively call readMarkdownFiles
      readMarkdownFiles(filePath, file);
    } else if (path.extname(file) === '.mdx' && file !== 'markdown-features.mdx') {
      // If it's a Markdown file, read its contents
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const fileName = path.parse(file).name;

      const tokens = marked.lexer(fileContents);
      tokensToData(tokens, dirName, fileName);
    }
  });
}

const rootFolder = './docs';
readMarkdownFiles(rootFolder);

const folderPath = './output'; // Replace with the desired folder path
const filePath = `${folderPath}/search-index.json`; // Specify the file path within the folder

// Create the folder if it doesn't exist
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true }); // The 'recursive' option creates parent directories if needed
}

// Write data to the file
fs.writeFile(filePath, JSON.stringify(dataToWrite, null, 2), (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
  } else {
    console.log('Data has been written to the file.');
  }
});

function tokensToData(tokens, dirName, fileName){
  let pageStart/* :boolean */ = false;
  let pageName;
  let currentHeading/* :string */;

  tokens.forEach((token) => {
    // mdx file에 첫 # Level-1 Header가 나오는 시점부터 web에 보이는 token
    if (token.type === 'heading' && token.depth === 1) {
      pageStart = true;
    }
  
    // web에 보이는 토큰만 
    if (pageStart) {
      // 토큰이 header인 경우 저장
      if (token.type === 'heading') {
        if (token.depth === 1) {
          pageName = token.text;
        } else {
          currentHeading = token.text;
        }
        const words = token.text.split(/\s+/);
        words.forEach((word) => {
          // key 있음
          if (dataToWrite[word]) {
            dataToWrite[word].push(
              { 
                type: token.depth === 1 ? 'page' : token.type, 
                depth: token.depth !== 1 ? token.depth : undefined, 
                dirName: dirName, 
                fileName: fileName, 
                heading: currentHeading, 
                pageName: pageName
              });
          } // key 없음
          else {
            dataToWrite[word] = [
              { 
                type: token.depth === 1 ? 'page' : token.type, 
                depth: token.depth !== 1 ? token.depth : undefined, 
                dirName: dirName, 
                fileName: fileName, 
                heading: currentHeading, 
                pageName: pageName 
              }
            ];
          }
        })
      } // 토큰이 list인 경우 저장
      else if (token.type === 'list') {
        const listTexts = cleanUpList(token);
        listTexts.forEach((listText) => {
          const words = listText.split(/\s+/);
          words.forEach((word) => {
          // key 있음
          if (dataToWrite[word]) {
            // Check if the object already exists with the same type and heading
            const existingObj = dataToWrite[word].find(obj => obj.type === 'content' && obj.heading === currentHeading);
            if (existingObj) {
              existingObj.frequency ++;
            } else {
              dataToWrite[word].push(
                { 
                  type: 'content',
                  frequency: 1, 
                  text: listText, 
                  dirName: dirName, 
                  fileName: fileName, 
                  heading: currentHeading, 
                  pageName: pageName 
                });
            }
          } // key 없음
          else {
            dataToWrite[word] = [
              { 
                type: 'content', 
                frequency: 1, 
                text: listText, 
                dirName: dirName, 
                fileName: fileName, 
                heading: currentHeading, 
                pageName: pageName 
              }
            ];
          }
          })
        })
      } // 토큰이 paragraph이고 component가 아닌 경우만 저장
      else if (token.type === 'paragraph' && token.tokens[0].type !== 'html') {
        const wholeText = token.text;
        const words = token.text.split(/\s+/);
        words.forEach((word) => {
          // key 있음
          if (dataToWrite[word]) {
            // Check if the object already exists with the same type and heading
            const existingObj = dataToWrite[word].find(obj => obj.type === 'content' && obj.heading === currentHeading);
            if (existingObj) {
              existingObj.frequency ++;
            } else {
              dataToWrite[word].push({ 
                type: 'content', 
                frequency: 1, 
                text: wholeText, 
                dirName: dirName, 
                fileName: fileName, 
                heading: currentHeading, 
                pageName: pageName 
              });
            }
          } // key 없음
          else {
            dataToWrite[word] = [
              { 
                type: 'content', 
                frequency: 1, 
                text: wholeText, 
                dirName: dirName, 
                fileName: fileName, 
                heading: currentHeading, 
                pageName: pageName 
              }
            ];
          }
        })
      } 
    } 
  });
}

// type이 list인 경우 listToken.items --> list_item
// type이 list_item인 경우 listToken.tokens --> text
// type이 text인 경우, return text
function cleanUpList(listToken) {
  const toReturn = [];

  if (listToken.type === 'list') {
    listToken.items.forEach((item) => {
      toReturn.push(...cleanUpList(item));
    });
  } else if (listToken.type === 'list_item') {
    listToken.tokens.forEach((token) => {
      toReturn.push(...cleanUpList(token));
    });
  } else if (listToken.type === 'text') {
    toReturn.push(listToken.text);
  }

  return toReturn;
}