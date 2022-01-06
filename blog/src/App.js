/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //ES6 destructuring
  // var [a,b] = [10, 100];
  // a = 10, b = 100 이렇게 저장됨
  let [글제목,글제목변경] = useState(['리액트 공부','자바스크립트 공부','노드js 공부']); 
  let [글제목2,글제목변경2] = useState('여자 코트 추천2'); 

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } </h3>
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
