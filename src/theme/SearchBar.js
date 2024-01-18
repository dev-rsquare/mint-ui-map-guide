// import SearchBar from '@theme-original/SearchBar';
import React from 'react';
import Hangul from 'hangul-js';
import { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import data from '../../output/search-index.json'
import { useHistory } from 'react-router-dom';
import './styles.css';

export default function SearchBarWrapper() {
  const [searchText, setSearchText] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  const modalRef = useRef(null);
  const recentRef = useRef(null);
  const favoriteRef = useRef(null);

  useEffect(() => {
    // Use useEffect to set the initial state based on the browser environment
    const initializeState = () => {
      const storedSearchList = localStorage.getItem('searchList');
      const storedFavoriteList = localStorage.getItem('favoriteList');

      setSearchList(JSON.parse(storedSearchList) || []);
      setFavoriteList(JSON.parse(storedFavoriteList) || []);
    };

    initializeState();
  }, []);

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

    recentRef.current && (recentRef.current.scrollTop = 0)
    favoriteRef.current && (favoriteRef.current.scrollTop = 0)

    if (isSearchOpen) {
      document.body.classList.add('dialog-open');
      document.documentElement.classList.add('dialog-open');
    } else {
      document.body.classList.remove('dialog-open');
      document.documentElement.classList.remove('dialog-open');
    }

    return () => {
      document.body.classList.remove('dialog-open');
      document.documentElement.classList.remove('dialog-open');
    };
  }, [isSearchOpen])

  return (
    <>
      <button className='search-button' onClick={() => setIsSearchOpen(true)}>검색</button>
      <SearchModal recentRef={recentRef} favoriteRef={favoriteRef} favoriteList={favoriteList} setFavoriteList={setFavoriteList} searchList={searchList} setSearchList={setSearchList} searchText={searchText} setSearchText={setSearchText} isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} modalRef={modalRef} searchData={data} />
    </>
  );
}

function SearchModal({ recentRef, favoriteRef, favoriteList, setFavoriteList, searchList, setSearchList, isSearchOpen, searchText, setSearchText, setIsSearchOpen, modalRef, searchData }) {
  const filteredData = filterData(searchText, searchData);
  const resultsRef = useRef(null);
  const inputRef = useRef(null);
  const [composeEnd, setComposeEnd] = useState(true);

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
          setIsSearchOpen(false);
          emptyInput();
        }
      }}>
        <div className='input-div'>
          <input
            ref={inputRef}
            placeholder='검색'
            value={searchText}
            onCompositionStart={() => setComposeEnd(false)}
            onCompositionEnd={() => setComposeEnd(true)}
            onChange={handleInputChange}
          />
        </div>
        <div ref={resultsRef} className='results-div'>
          {searchText === '' ? (
            <SearchHistory inputRef={inputRef} recentRef={recentRef} favoriteRef={favoriteRef} favoriteList={favoriteList} setFavoriteList={setFavoriteList} searchList={searchList} setSearchList={setSearchList} isSearchOpen={isSearchOpen} setSearchText={setSearchText} setIsSearchOpen={setIsSearchOpen} modalRef={modalRef} />
          ) : (
            <SearchResult composeEnd={composeEnd} favoriteList={favoriteList} searchList={searchList} setSearchList={setSearchList} isSearchOpen={isSearchOpen} setSearchText={setSearchText} setIsSearchOpen={setIsSearchOpen} modalRef={modalRef} searchText={searchText} data={filteredData} />
          )}
        </div>
      </dialog>
    </>
  )
}

function SearchHistory({ inputRef, recentRef, favoriteRef, favoriteList, setFavoriteList, searchList, setSearchList, setSearchText, isSearchOpen, setIsSearchOpen, modalRef }) {
  const history = useHistory();
  const [lastHovered, setLastHovered] = useState(0);
  const [deletedIdx, setDeletedIdx] = useState(0);
  const [hoveredFavorite, setHoveredFavorite] = useState(-1);
  const [modifiedList, setModifiedList] = useState(null);

  useEffect(() => {
    const scrollDown = () => {
      const totalLength = searchList.length + favoriteList.length;
      const currentIndex = lastHovered + 1 === totalLength ? 0 : lastHovered + 1;

      if (totalLength !== 0) {
        if (currentIndex < searchList.length) {
          if (currentIndex === 0) {
            recentRef.current.scrollTop = 0;
          }
          if ((currentIndex + 1) * 60 - 240 > recentRef.current.scrollTop) {
            recentRef.current.scrollBy(0, 60);
          } else if (recentRef.current.scrollTop > currentIndex * 60) {
            recentRef.current.scrollTop = currentIndex * 60;
          }
        } else {
          if (currentIndex - searchList.length === 0) {
            favoriteRef.current.scrollTop = 0;
          }
          if ((currentIndex + 1 - searchList.length) * 60 - 240 > favoriteRef.current.scrollTop) {
            favoriteRef.current.scrollBy(0, 60);
          } else if (favoriteRef.current.scrollTop > (currentIndex - searchList.length) * 60) {
            favoriteRef.current.scrollTop = (currentIndex - searchList.length) * 60;
          }
        }
      }
    }

    const scrollUp = () => {
      const lastIndex = searchList.length + favoriteList.length - 1;
      const currentIndex = lastHovered - 1 < 0 ? lastIndex : lastHovered - 1;

      if (lastIndex !== -1) {
        if (currentIndex < searchList.length) {
          if (currentIndex === searchList.length - 1) {
            recentRef.current.scrollTop = recentRef.current.scrollHeight - recentRef.current.clientHeight;
          }
          if (currentIndex * 60 < recentRef.current.scrollTop) {
            recentRef.current.scrollBy(0, -60);
          } else if (recentRef.current.scrollTop + 240 < (currentIndex + 1) * 60) {
            recentRef.current.scrollTop = currentIndex * 60 - 180;
          }
        } else {
          if (currentIndex - searchList.length === favoriteList.length - 1) {
            favoriteRef.current.scrollTop = favoriteRef.current.scrollHeight - favoriteRef.current.clientHeight;
          }
          if ((currentIndex - searchList.length) * 60 < favoriteRef.current.scrollTop) {
            favoriteRef.current.scrollBy(0, -60);
          } else if (favoriteRef.current.scrollTop + 240 < (currentIndex - searchList.length + 1) * 60) {
            favoriteRef.current.scrollTop = (currentIndex - searchList.length) * 60 - 180;
          }
        }
      }
    }

    const handleKeyPress = (event) => {
      const totalLength = searchList.length + favoriteList.length;

      if (isSearchOpen && (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Tab')) {
        event.preventDefault();
      }
      if (event.key === 'Enter') {
        event.preventDefault();
      }

      if (totalLength !== 0 && isSearchOpen) {
        if (event.key === 'ArrowUp') {
          setLastHovered((prevHovered) => (prevHovered - 1 + totalLength) % totalLength);
          scrollUp();
        } else if (event.key === 'ArrowDown') {
          setLastHovered((prevHovered) => (prevHovered + 1) % totalLength);
          scrollDown();
        } else if (event.key === 'Enter') {
          let pathName = '/mint-ui-map-guide';
          let item;
          if (lastHovered < searchList.length) {
            item = searchList[lastHovered]
          } else {
            item = favoriteList[lastHovered - searchList.length];
          }
          pathName = pathName + item.pathName;
          history.push(pathName);
          handleSearchClick(favoriteList, searchList, setSearchList, setSearchText, setIsSearchOpen, modalRef, item);
        } else if (event.key === 'Tab') {
          if (lastHovered < searchList.length && favoriteList.length !== 0) {
            setLastHovered(searchList.length);
            favoriteRef.current.scrollTop = 0;
          } else if (searchList.length !== 0 && lastHovered < totalLength) {
            setLastHovered(0);
            recentRef.current.scrollTop = 0;
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [searchList, favoriteList, lastHovered, setLastHovered, isSearchOpen]);

  useEffect(() => {
    setLastHovered(0);
  }, [isSearchOpen]);

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
      } else if (modifiedList === 'favoriteList' && favoriteList.length === 0 && searchList.length > 4) {
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

  const deleteHistory = (index, list, setList, storageKey) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    storageKey === 'favoriteList' ? setDeletedIdx(index + searchList.length) : setDeletedIdx(index);
    localStorage.setItem(storageKey, JSON.stringify(updatedList));
    setList(updatedList);
    setModifiedList(storageKey);

    inputRef.current.focus();
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
          <h3>최근</h3>
          <ul className='history-container' ref={recentRef}>
            {searchList.map((item, index) => (
              <li key={item.pathName} className={index === lastHovered ? 'hovered' : ''} onMouseMove={() => handleMouseEnter(index)}>
                <Link to={item.pathName} onClick={() => handleSearchClick(favoriteList, searchList, setSearchList, setSearchText, setIsSearchOpen, modalRef, item)}>
                  {item.type === 'page' ? (
                    <TextBox history>{item.pageName}</TextBox>
                  ) : (
                    <>
                      <TextBox history>{item.type === 'heading' ? item.heading : processLongText(item.text)}</TextBox>
                      <TextBox history>{item.pageName}</TextBox>
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
          <h3>즐겨찾기</h3>
          <ul className='history-container' ref={favoriteRef}>
            {favoriteList.map((item, index) => (
              <li key={item.pathName} className={index + searchList.length === lastHovered ? 'hovered' : ''} onMouseMove={() => handleMouseEnter(index + searchList.length)}>
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

function SearchResult({ composeEnd, favoriteList, searchList, setSearchList, isSearchOpen, searchText, setSearchText, setIsSearchOpen, modalRef, data }) {
  const history = useHistory();

  const pageData = data.pageData;
  const headingData = data.headingData;
  const contentData = data.contentData;

  const pageRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  const [lastHovered, setLastHovered] = useState(0);

  const handleMouseMove = (index) => {
    setLastHovered(index);
  }

  const scrollDown = () => {
    const totalLength = pageData.length + headingData.length + contentData.length;
    const currentIndex = lastHovered + 1 === totalLength ? 0 : lastHovered + 1;

    let containerHeight;
    containerClass === 'history-container' ? containerHeight = 240 : containerHeight = 180;

    if (totalLength !== 0) {
      if (currentIndex < pageData.length) {
        if (currentIndex === 0) {
          pageRef.current.scrollTop = 0;
        }
        if ((currentIndex + 1) * 60 - containerHeight > pageRef.current.scrollTop) {
          pageRef.current.scrollBy(0, 60);
        }
      } else if (currentIndex < pageData.length + headingData.length) {
        if (currentIndex - pageData.length === 0) {
          headingRef.current.scrollTop = 0;
        }
        if ((currentIndex + 1 - pageData.length) * 60 - containerHeight > headingRef.current.scrollTop) {
          headingRef.current.scrollBy(0, 60);
        }
      } else {
        if (currentIndex - pageData.length - headingData.length === 0) {
          contentRef.current.scrollTop = 0;
        }
        if ((currentIndex + 1 - pageData.length - headingData.length) * 60 - containerHeight > contentRef.current.scrollTop) {
          contentRef.current.scrollBy(0, 60);
        }
      }
    }
  }


  const scrollUp = () => {
    const lastIndex = pageData.length + headingData.length + contentData.length - 1;
    const currentIndex = lastHovered - 1 < 0 ? lastIndex : lastHovered - 1;

    if (lastIndex !== -1) {
      if (currentIndex < pageData.length) {
        if (currentIndex === pageData.length - 1) {
          pageRef.current.scrollTop = pageRef.current.scrollHeight - pageRef.current.clientHeight;
        }
        if (currentIndex * 60 < pageRef.current.scrollTop) {
          pageRef.current.scrollBy(0, -60);
        }
      } else if (currentIndex < pageData.length + headingData.length) {
        if (currentIndex - pageData.length === headingData.length - 1) {
          headingRef.current.scrollTop = headingRef.current.scrollHeight - headingRef.current.clientHeight;
        }
        if ((currentIndex - pageData.length) * 60 < headingRef.current.scrollTop) {
          headingRef.current.scrollBy(0, -60);
        }
      } else {
        if (currentIndex - pageData.length - headingData.length === contentData.length - 1) {
          contentRef.current.scrollTop = contentRef.current.scrollHeight - contentRef.current.clientHeight;
        }
        if ((currentIndex - pageData.length - headingData.length) * 60 < contentRef.current.scrollTop) {
          contentRef.current.scrollBy(0, -60);
        }
      }
    }
  }

  const handleKeyPress = (event) => {
    const totalLength = pageData.length + headingData.length + contentData.length;

    if (isSearchOpen && (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Tab')) {
      event.preventDefault();
    }
    if (event.key === 'Enter') {
      event.preventDefault();
    }

    if (totalLength !== 0 && isSearchOpen) {
      if (event.key === 'ArrowUp' && composeEnd) {
        setLastHovered((lastHovered - 1 + totalLength) % totalLength);
        scrollUp();
      } else if (event.key === 'ArrowDown' && composeEnd) {
        setLastHovered((lastHovered + 1) % totalLength);
        scrollDown();
      } else if (event.key === 'Enter') {
        let pathName = '/mint-ui-map-guide';
        let item;
        if (lastHovered < pageData.length) {
          item = pageData[lastHovered]
        } else if (lastHovered < pageData.length + headingData.length) {
          item = headingData[lastHovered - pageData.length];
        } else {
          item = contentData[lastHovered - pageData.length - headingData.length];
        }
        pathName = pathName + item.pathName
        history.push(pathName);
        handleSearchClick(favoriteList, searchList, setSearchList, setSearchText, setIsSearchOpen, modalRef, item);
      } else if (event.key === 'Tab' && composeEnd) {
        if (totalLength !== pageData.length && totalLength !== headingData.length && totalLength !== contentData.length) {
          if (pageData.length !== 0 && headingData.length !== 0 && contentData.length !== 0) {
            if (lastHovered < pageData.length) {
              setLastHovered(pageData.length);
              headingRef.current.scrollTop = 0;
            } else if (lastHovered < pageData.length + headingData.length) {
              setLastHovered(pageData.length + headingData.length);
              contentRef.current.scrollTop = 0;
            } else {
              setLastHovered(0);
              pageRef.current.scrollTop = 0;
            }
          } else if (pageData.length === 0) {
            if (lastHovered < headingData.length) {
              setLastHovered(headingData.length);
              contentRef.current.scrollTop = 0;
            } else {
              setLastHovered(0);
              headingRef.current.scrollTop = 0;
            }
          } else if (headingData.length === 0) {
            if (lastHovered < pageData.length) {
              setLastHovered(pageData.length);
              contentRef.current.scrollTop = 0;
            } else {
              setLastHovered(0);
              pageRef.current.scrollTop = 0;
            }
          } else if (contentData.length === 0) {
            if (lastHovered < pageData.length) {
              setLastHovered(pageData.length);
              headingRef.current.scrollTop = 0;
            } else {
              setLastHovered(0);
              pageRef.current.scrollTop = 0;
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [pageData, headingData, contentData, lastHovered, setLastHovered, isSearchOpen, composeEnd]);

  useEffect(() => {
    setLastHovered(0);
    pageRef.current && (pageRef.current.scrollTop = 0);
    headingRef.current && (headingRef.current.scrollTop = 0);
    contentRef.current && (contentRef.current.scrollTop = 0);
  }, [isSearchOpen, searchText])

  let containerClass;
  if (pageData.length >= 3 && headingData.length >= 3 && contentData.length >= 3) {
    containerClass = 'results-container'
  } else {
    containerClass = 'history-container'
  }

  return (
    pageData.length === 0 && headingData.length === 0 && contentData.length === 0 ?
      (<div className='no-result'>'{searchText}'에 대한 검색 결과가 없습니다.</div>) :
      (
        <div>
          {pageData.length !== 0 && (
            <>
              <h3>
                페이지
              </h3>
              <ul className={containerClass} ref={pageRef}>
                {pageData.map((item, index) => (
                  <li key={index} onMouseMove={() => { handleMouseMove(index) }}
                    className={lastHovered === index ? 'hovered' : ''}
                  >
                    <Link to={item.pathName} onClick={() => handleSearchClick(favoriteList, searchList, setSearchList, setSearchText, setIsSearchOpen, modalRef, item)}>
                      <ProcessText text={item.pageName} userInput={searchText} />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          {headingData.length !== 0 && (
            <>
              <h3>
                # 헤더
              </h3>
              <ul className={containerClass} ref={headingRef}>
                {headingData.map((item, index) => (
                  <li key={index} onMouseMove={() => { handleMouseMove(index + pageData.length) }}
                    className={lastHovered === index + pageData.length ? 'hovered' : ''}
                  >
                    <Link to={item.pathName} onClick={() => handleSearchClick(favoriteList, searchList, setSearchList, setSearchText, setIsSearchOpen, modalRef, item)}>
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
          {contentData.length !== 0 && (
            <>
              <h3>
                내용
              </h3>
              <ul className={containerClass} ref={contentRef}>
                {contentData.map((item, index) => (
                  <li key={index} onMouseMove={() => { handleMouseMove(index + pageData.length + headingData.length) }}
                    className={lastHovered === index + pageData.length + headingData.length ? 'hovered' : ''}
                  >
                    <Link to={item.pathName} onClick={() => handleSearchClick(favoriteList, searchList, setSearchList, setSearchText, setIsSearchOpen, modalRef, item)}>
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
      newHeading = item.heading.toLowerCase().replace(/['?!]/g, '').replace(/ /g, '-');
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
          itemList[index].frequency++;
        } else {
          itemList.push(newItem);
        }
      } else if (item.type === 'heading') {
        const index = itemList.findIndex(existingItem => existingItem.type === 'heading' && existingItem.heading === item.heading);

        if (index === -1) {
          newItem.frequency = 1;
          itemList.push(newItem);
        } else {
          itemList[index].frequency++;
        }
      } else {
        const index = itemList.findIndex(existingItem => existingItem.type === 'page' && existingItem.pageName === item.pageName);

        if (index === -1) {
          newItem.frequency = 1;
          itemList.push(newItem);
        } else {
          itemList[index].frequency++;
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
  let lastMatch = text.length - 1;
  matchingIdxArray.forEach((array) => {
    firstMatch = Math.min(firstMatch, array[0])
    lastMatch = Math.max(lastMatch, array[1])
  })

  let textStartIdx = 0;
  if (firstMatch > 10) {
    textStartIdx = firstMatch - 5;
  }

  let textBeforeMatch = matchingIdxArray[0][0];
  let textAfterMatch = matchingIdxArray[0][1] + 1;

  let textEndIdx = text.length;
  if (lastMatch + 10 < text.length) {
    textEndIdx = lastMatch + 5;
  }

  let text1 = text.substring(textStartIdx, textBeforeMatch);
  let matchedText = text.substring(textBeforeMatch, textAfterMatch);
  let text2 = text.substring(textAfterMatch, textEndIdx);

  const truncatedText = (
    <>
      <TextBox>
        {textStartIdx > 0 && '...'}
        {text1}
        <span className='matched-text'>{matchedText}</span>
        {text2}
      </TextBox>
    </>
  );

  return <>{truncatedText}</>;
}

function TextBox({ children, history = false }) {
  return <div className={`text-for-search ${history ? 'text-container-history' : 'text-container'}`}
  >{children}</div>
}