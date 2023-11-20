// import SearchBar from '@theme-original/SearchBar';
import React from 'react';
import Hangul from 'hangul-js';
import { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import data from '../../output/search-index.json'
import './styles.css';

export default function SearchBarWrapper() {
  const [searchText, setSearchText] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const modalRef = useRef(null);
  const [searchList, setSearchList] = useState(JSON.parse(localStorage.getItem('searchList')) || []);
  const [favoriteList, setFavoriteList] = useState(JSON.parse(localStorage.getItem('favoriteList')) || []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (modalRef.current) {
      if (isSearchOpen) {
        modalRef.current.showModal();
        setSearchText('');
      } 
    }
  }, [isSearchOpen])

  return (
    <>
      <button className='search-button' onClick={ () => setIsSearchOpen(true) }>검색</button>
      <SearchModal favoriteList={favoriteList} setFavoriteList={setFavoriteList} searchList={searchList} setSearchList={setSearchList} searchText={searchText} setSearchText={setSearchText} isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} modalRef={modalRef} onClose={() => setIsSearchOpen(false)} searchData={data} />
    </>
  );
}

function SearchModal({ favoriteList, setFavoriteList, searchList, setSearchList, isSearchOpen, searchText, setSearchText, setIsSearchOpen, modalRef, onClose, searchData }) {
  const filteredData = filterData(searchText, searchData);
  const resultsRef = useRef(null);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const emptyInput = () => {
    setSearchText('');
  }

  return (
    <>
      <dialog ref={modalRef} onClick={(e) => {
        const dialogDimensions = e.currentTarget.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          e.currentTarget.close()
          onClose();
          emptyInput();
        }
      }}> 
        <div className='input-div'>
          <input 
            placeholder='검색'
            value={searchText}
            onChange={handleInputChange}
          />
        </div>
        <div ref={resultsRef} className='results-div'>
          {searchText === '' ? (
            <SearchHistory favoriteList={favoriteList} setFavoriteList={setFavoriteList} searchList={searchList} setSearchList={setSearchList} isSearchOpen={isSearchOpen} setSearchText={setSearchText} setIsSearchOpen={setIsSearchOpen} modalRef={modalRef} />
          ) : (
            <SearchResult favoriteList={favoriteList} searchList={searchList} setSearchList={setSearchList} isSearchOpen={isSearchOpen} setSearchText={setSearchText} setIsSearchOpen={setIsSearchOpen} modalRef={modalRef} searchText={searchText} data={filteredData} />
          )}
        </div>
      </dialog>
    </>
  )
}

function SearchHistory({ favoriteList, setFavoriteList, searchList, setSearchList, setSearchText, isSearchOpen, setIsSearchOpen, modalRef }) {
  const [lastHovered, setLastHovered] = useState(0);
  const [deletedIdx, setDeletedIdx] = useState(0);
  const [hoveredFavorite, setHoveredFavorite] = useState(-1);
  const [modifiedList, setModifiedList] = useState(null);

  const handleMouseEnter = (index) => {
    setLastHovered(index);
  }
  
  const mouseOverFavorite = (index) => {
    if (index !== -1) {
      setHoveredFavorite(index);
    } else {
      setHoveredFavorite(-1);
    }
  };

  const processLongText = (text) => {
    const textToShow = text.length > 38 ? text.slice(0, 38) + '...' : text;
  
    return textToShow;
  }

  useEffect(() => {
    if (deletedIdx !== 0) {
      const lastIdx = searchList.length + favoriteList.length - 1;

      if (modifiedList === 'searchList' && deletedIdx - searchList.length === 0) {
        setLastHovered(deletedIdx - 1);
      } else if (modifiedList === 'favoriteList' && favoriteList.length===0 && searchList.length > 4) {
        setLastHovered(0);
      } else if (lastIdx < deletedIdx) {
        setLastHovered(lastIdx);
      } else {
        setLastHovered(deletedIdx);
      }

      setModifiedList(null);
    } else {
      setLastHovered(0);
    }
  }, [searchList, favoriteList]);

  useEffect(() => {
    setLastHovered(0);
  }, [isSearchOpen])

  const deleteHistory = (index, list, setList, storageKey) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    storageKey==='favoriteList' ? setDeletedIdx(index + searchList.length) : setDeletedIdx(index);
    localStorage.setItem(storageKey, JSON.stringify(updatedList));
    setList(updatedList);
    setModifiedList(storageKey); 
  };

  const handleFavorite = (item, index) => {
    const updatedList = [...favoriteList];
    const existingIndex = favoriteList.findIndex((existingItem) => existingItem.pathName === item.pathName);

    if (existingIndex === -1) {
      updatedList.unshift(item);
      setFavoriteList(updatedList);
      localStorage.setItem('favoriteList', JSON.stringify(updatedList));
    }

    deleteHistory(index, searchList, setSearchList, 'searchList');
  }

  const closeModal = (setSearchText, setIsSearchOpen, modalRef) => {
    setIsSearchOpen(false);
    modalRef.current.close();
    setSearchText('');
  }

  return (
    <div>
      {searchList.length !== 0 && (
        <div>
          <h3>Recent</h3>
          <ul className='history-container'>
            {searchList.map((item, index) => (
              <li key={item.pathName} className={index === lastHovered ? 'hovered' : ''} onMouseEnter={() => handleMouseEnter(index)}>
                <Link to={item.pathName} onClick={() => handleSearchClick(favoriteList, searchList, setSearchList, setSearchText, setIsSearchOpen, modalRef, item)}>
                  {item.type === 'page' ? (
                    <div>{item.pageName}</div>
                  ) : (
                    <>
                      <div>{item.type === 'heading' ? item.heading : processLongText(item.text)}</div>
                      <div>{item.pageName}</div>
                    </>
                  )}
                </Link>
                <button className='favorite' onMouseLeave={() => mouseOverFavorite()} onMouseEnter={() => mouseOverFavorite(index)} onClick={() => handleFavorite(item, index)}>
                  {index === hoveredFavorite ? '\u2605' : '\u2606'}
                </button>
                <button className='delete-history' onClick={() => deleteHistory(index, searchList, setSearchList, 'searchList')}>&#10005;</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {favoriteList.length !== 0 && (
        <div>
          <h3>Favorites</h3>
          <ul className='history-container'>
            {favoriteList.map((item, index) => (
              <li key={item.pathName} className={index + searchList.length === lastHovered ? 'hovered' : ''} onMouseEnter={() => handleMouseEnter(index + searchList.length)}>
                <span className='favorited'>&#9734;</span>
                <Link to={item.pathName} onClick={() => closeModal(setSearchText, setIsSearchOpen, modalRef)}>
                  {item.type === 'page' ? (
                    <div>{item.pageName}</div>
                  ) : (
                    <>
                      <div>{item.type === 'heading' ? item.heading : processLongText(item.text)}</div>
                      <div>{item.pageName}</div>
                    </>
                  )}
                </Link>
                <button className='delete-history' onClick={() => deleteHistory(index, favoriteList, setFavoriteList, 'favoriteList')}>&#10005;</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {(searchList.length === 0 && favoriteList.length === 0) && (
        <div className='no-result'>최근 검색이 없습니다.</div>
      )}
    </div>
  );
}

function SearchResult({ favoriteList, searchList, setSearchList, isSearchOpen, searchText, setSearchText, setIsSearchOpen, modalRef, data }) {
  const [lastHovered, setLastHovered] = useState({
    type: '',
    index: -1
  }); 

  const handleMouseMove = (type, index) => {
    setLastHovered({
      type,
      index
    });
  }

  useEffect(() => {
    setLastHovered({ type: '', index: -1 });
  }, [isSearchOpen, searchText])

  if (lastHovered.type === '') {
    if (data.pageData.length > 0) {
      setLastHovered({ type: 'page', index: 0 });
    } else if (data.headingData.length > 0) {
      setLastHovered({ type: 'heading', index: 0 });
    } else if (data.contentData.length > 0) {
      setLastHovered({ type: 'content', index: 0 });
    }
  }

  let containerClass;
  if (data.pageData.length >= 3 && data.headingData.length >= 3 && data.contentData.length >= 3) {
    containerClass = 'results-container'
  } else {
    containerClass = 'history-container'
  }

  return (
    data.pageData.length === 0 && data.headingData.length === 0 && data.contentData.length === 0 ? 
    (<div className='no-result'>'{searchText}'에 대한 검색 결과가 없습니다.</div>) : 
    (
      <div>
        {data.pageData.length !== 0 && (
          <>
            <h3>
              Page
            </h3>
            <ul className={containerClass}>
              {data.pageData.map((item, index) => (
                <li key={index} onMouseMove={() => {handleMouseMove('page', index)}} className={lastHovered.type==='page' && lastHovered.index===index ? 'hovered' : ''}>
                  <Link to={item.pathName} onClick={() => handleSearchClick(favoriteList, searchList, setSearchList, setSearchText, setIsSearchOpen, modalRef, item)}>
                    {/* {item.pageName} */}
                    <ProcessText text={item.pageName} userInput={searchText} />
                  </Link> 
                </li>
              ))}
            </ul>
          </>
        )}
        {data.headingData.length !== 0 && (
          <>
            <h3>
              # Heading
            </h3>
            <ul className={containerClass}>
              {data.headingData.map((item, index) => (
                <li key={index} onMouseMove={() => {handleMouseMove('heading', index)}} className={lastHovered.type==='heading' && lastHovered.index===index ? 'hovered' : ''}>
                  <Link to={item.pathName} onClick={() => handleSearchClick(favoriteList, searchList, setSearchList, setSearchText, setIsSearchOpen, modalRef, item)}>
                    {/* {item.heading} */}
                    <ProcessText text={item.heading} userInput={searchText} />  
                    <div>
                      {item.pageName}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
        {data.contentData.length !== 0 && (
          <>
            <h3>
              Content
            </h3>
            <ul className={containerClass}>
              {data.contentData.map((item, index) => (
                <li key={index} onMouseMove={() => {handleMouseMove('content', index)}} className={lastHovered.type==='content' && lastHovered.index===index ? 'hovered' : ''}>
                  <Link to={item.pathName} onClick={() => handleSearchClick(favoriteList, searchList, setSearchList, setSearchText, setIsSearchOpen, modalRef, item)}>
                    {/* {item.text} */}
                    <ProcessText text={item.text} userInput={searchText} />
                    <div>
                      {item.pageName}
                    </div> 
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    )
  )
}

function handleSearchClick(favoriteList, searchList, setSearchList, setSearchText, setIsSearchOpen, modalRef, item) {
  const updatedSearchList = [...searchList];

  const alreadyFavorite = favoriteList.findIndex((existingItem) => existingItem.pathName === item.pathName);
  const existingIndex = searchList.findIndex((existingItem) => existingItem.pathName === item.pathName);

  if (alreadyFavorite == -1) {
    if (existingIndex !== -1) {
      // If the item is already in the list, remove it from its current position in the copy
      updatedSearchList.splice(existingIndex, 1);
    }
  
    updatedSearchList.unshift(item);
  
    localStorage.setItem('searchList', JSON.stringify(updatedSearchList));
    setSearchList(updatedSearchList);
  }

  setIsSearchOpen(false);
  modalRef.current.close();
  setSearchText('');
}

function filterData(searchText, searchData) {
  const words = searchText.split(' ').filter((word) => word !== '');

  const keys = Object.keys(searchData);

  const filteredKeysList = [];
  words.forEach((word) => {
    const filteredKeys = keys.filter((key) => {
      const lowerKey = key.toLowerCase();
      
      return Hangul.search(lowerKey, word.toLowerCase()) >= 0;
    });

    filteredKeys.forEach((key) => {
      if (filteredKeysList.indexOf(key) === -1) {
        filteredKeysList.push(key);
      } 
    })
  })

  const newPath = (item) => {
    let newHeading = '';
    if (!item.heading) {

    } else {
      newHeading = item.heading.replace(/ /g, '-');
    }

    const pathName = item.dirName ? `/docs/${item.dirName}/${item.fileName}#${newHeading}` : 
    `/docs/${item.fileName}#${newHeading}`;
    
    return pathName;
  }

  const itemList = [];
  filteredKeysList.forEach((key) => {
    const items = searchData[key];
    items.forEach((item) => {
      const pathName = newPath(item);
      const newItem = { ...item, pathName };

      if (item.type === 'content') {
        const index = itemList.findIndex(existingItem => existingItem.text === item.text);

        if (index !== -1) {
          itemList[index].frequency ++;
        } else {
          itemList.push(newItem);
        }
      } else if (item.type === 'heading') {
        const index = itemList.findIndex(existingItem => existingItem.type === 'heading' && existingItem.heading === item.heading);

        if (index === -1) {
          newItem.frequency = 1;
          itemList.push(newItem);
        } else {
          itemList[index].frequency ++;
        }
      } else {
        const index = itemList.findIndex(existingItem => existingItem.type === 'page' && existingItem.pageName === item.pageName);

        if (index === -1){
          newItem.frequency = 1;
          itemList.push(newItem);
        } else {
          itemList[index].frequency ++;
        }
      }
    });
    });
    
  // Sort itemList
  itemList.sort((a, b) => {
    const typeOrder = { 'page': 1, 'heading': 2, 'content': 3 };
    const typeComparison = typeOrder[a.type] - typeOrder[b.type];

    if (typeComparison !== 0) {
      return typeComparison;
    }

    // For 'content', sort by frequency from highest to lowest
    if (a.type === 'content') {
      return b.frequency - a.frequency;
    }

    // For 'heading' or 'page', sort by frequency from highest to lowest
    if (a.frequency !== b.frequency) {
      return b.frequency - a.frequency;
    }

    // If frequencies are the same, and it's a 'heading', sort by depth from lowest to highest
    if (a.type === 'heading') {
      return a.depth - b.depth;
    }

    // For 'page', no specific sorting within the same frequency
    return 0;
  });
  
  // Filter the data into separate objects by 'type'
  const pageData = []; 
  const headingData = [];
  const contentData = [];
  const pathList = [];

  itemList.forEach((item) => {
    if (!pathList.includes(item.pathName)) {
      if (item.type === 'page') {
        pageData.push(item);
      } else if (item.type === 'heading') {
        headingData.push(item);
      } else {
        contentData.push(item);
      }
      pathList.push(item.pathName);
    } 
  });
  
  return {
    pageData,
    headingData,
    contentData,
  };
}

function ProcessText({ text, userInput }) {
  const words = userInput.split(' ').filter((word) => word != '');

  const matchingIdxArray = [];
  words.forEach((word) => {
    if (Hangul.search(text.toLowerCase(), word.toLowerCase()) >= 0) {
      Hangul.rangeSearch(text.toLowerCase(), word.toLowerCase()).forEach((array) => {
        matchingIdxArray.push(array);
      })
    }
  })

  let firstMatch = matchingIdxArray[0][0];
  matchingIdxArray.forEach((array) => {
    firstMatch = Math.min(firstMatch, array[0])
  })

  let charsBefore = 0;
  let charsAfter = 0;
  let startIdx = 0;
  let endIdx = text.length;

  if (text.length > 40) {
    // Number of characters to display before and after the highlighted part
    charsBefore = 20;
    charsAfter = 20;

    // Calculate the start and end indices for the truncated text
    startIdx = Math.max(0, firstMatch - charsBefore);
    endIdx = Math.min(text.length, firstMatch + charsAfter);

    if (endIdx - startIdx < 38) {
      if (startIdx === 0) {
        endIdx = Math.min(text.length, 38);
      } else if (endIdx === text.length) {
        startIdx = Math.max(0, text.length - 38)
      }
    }
  }

  const cleanUpRanges = (array) => {
    const sortedArr = array.sort((a, b) => a[0] - b[0]);
  
    const result = [sortedArr[0]];
  
    for (let i = 1; i < sortedArr.length; i++) {
      const current = sortedArr[i];
      const last = result[result.length - 1];
  
      if (current[0] <= last[1]) {
        if (current[1] > last[1]) {
          last[1] = current[1];
        }
      } else {
        current[0] < endIdx && result.push(current);
      }
    }
  
    return result;
  }

  const cleanIdxArray = cleanUpRanges(matchingIdxArray);

  const truncatedText = (
    <>
      {cleanIdxArray.map((match, index) => (
        <React.Fragment key={index}>
          {index === 0 && startIdx > 0 && '...'}
          {index === 0 && text.slice(startIdx, match[0])}

          <span className='matched-text'>
            {text.slice(match[0], match[1] + 1)}
          </span>

          {index < cleanIdxArray.length - 1 && (
            text.slice(match[1] + 1, cleanIdxArray[index + 1][0])
          )}

          {index === cleanIdxArray.length - 1 &&
            text.slice(match[1] + 1, endIdx)}
        </React.Fragment>
      ))}
      {endIdx < text.length - 1 && '...'}
    </>
  );

  return <div>{truncatedText}</div>;
}