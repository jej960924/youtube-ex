import React from "react";
import './searchbar.css';
import { useRef } from "react";

function Searchbar(props) {
    const inputRef = useRef();

    /* enter 클릭시 호출공통 함수 */
    const searchFnc = () => {
        const value = inputRef.current.value; //.current.value 을 입력해야 가져올 수 있음 . 정해져있는 문법같은 것. input의 value 값을 가져온다.
        props.searchResult(value);
    }
    /* 서치버튼 클릭 시 호출될 함수 */
    const inputclick = () => {
        searchFnc();
    }
    /* 인풋박스에 enter 시 호출될 함수 */
    const inputEnter = (e) => {
        if(e.key === 'Enter') {
            searchFnc();
        }
    }
    return (
        <div className="searchArea">
            <div className="logoarea">
                <h1><img src="/images/logo.png" alt="youtube" className="logoimg" /></h1>
            </div> {/* 왼쪽 */}
            <div className="searchInputArea">
                <input type="search" placeholder="검색" className="searchInput" onKeyPress={inputEnter} ref={inputRef} />
                <button className="searchbtn" onClick={inputclick}>
                    <img src="/images/searchicon.png" alt="search" />
                </button>
            </div> {/* 가운데 */}
            <div className="topMenuarea">
                <button className="gridmenubtn">
                    <img src="/images/gridmenuicon.png" alt="topmenu버튼"/>
                </button>
            </div> {/* 오른쪽 */}
        </div>
    )
}

export default Searchbar