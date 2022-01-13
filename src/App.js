/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'; //css파일 import

function App() {

  let [글제목,글제목변경] = useState(['리액트 공부','자바스크립트 공부','노드js 공부']); 
  let [따봉, 따봉변경] = useState(0);
  let [modal,modal변경] = useState(false);

  // function 제목바꾸기() {
  //   var newArray = [...글제목]; //1.(deep copy를 사용) state의 복사본을 만든다.
  //   newArray[0] = '여자 코트 추천'; //2.0번째 인덱스의 내용을 바꾼다.
  //   글제목변경(newArray.sort());//3.변경함수에 저장
  // }


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={ 제목바꾸기 }>버튼</button> */}
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1);}}>👍</span> {따봉} </h3>
        <p> 1월 05일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p> 1월 06일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p> 1월 07일 발행</p>
        <hr/>
      </div>
       
       <button onClick={()=>{modal변경(!modal)}}>버튼</button>

      {
        modal === true 
        ? <Modal></Modal>
        : null
      }

    </div>
  );
}

// 모달 컴포넌트
function Modal(){
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
