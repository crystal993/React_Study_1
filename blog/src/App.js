/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //ES6 destructuring
  // var [a,b] = [10, 100];
  // a = 10, b = 100 이렇게 저장됨
  let [글제목,글제목변경] = useState(['리액트 공부','자바스크립트 공부','노드js 공부']); 
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    // <Array,Object state 데이터 수정 방법 > : immutable data-리액트 원칙
    // 
	  // - 1. 기존 state 카피본 만들기
	  // - 2. 카피본에 수정사항 반영
	  // - 3. 변경함수()에 집어넣기
    //
    var newArray = [...글제목]; //1.(deep copy를 사용) state의 복사본을 만든다.
    newArray[0] = '여자 코트 추천'; //2.0번째 인덱스의 내용을 바꾼다.
    글제목변경(newArray);//3.변경함수에 저장
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
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
    </div>
  );
}

export default App;
