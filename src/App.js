/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'; //css파일 import

// App - 부모 컴포넌트
function App() {

  let [글제목,글제목변경] = useState(['리액트 공부','자바스크립트 공부','노드js 공부']); 
  let [따봉, 따봉변경] = useState(0);
  let [modal,modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  // function 제목바꾸기() {
  //   var newArray = [...글제목]; //1.(deep copy를 사용) state의 복사본을 만든다.
  //   newArray[0] = '여자 코트 추천'; //2.0번째 인덱스의 내용을 바꾼다.
  //   글제목변경(newArray.sort());//3.변경함수에 저장
  // }
  
function onChange(e){
  입력값변경(e.target.value);
}

const addPost = (e) => {
  글제목.unshift(입력값);
  let 새글제목 = [...글제목];
  글제목변경(새글제목);
  입력값변경('');
}


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={ 제목바꾸기 }>버튼</button> */}

      {/* 블로그 리스트 map()이용해서 생성 */}
      {
        글제목.map((글, i)=>{
          return ( 
            <div className="list" key={i}>
              <h3 onClick={()=>{누른제목변경(i)}}> { 글 } <span onClick={ () => { 따봉변경(따봉+1);}}>👍</span> {따봉} </h3>
              <p> 1월 05일 발행</p>
              <hr/>
            </div>
         )
        })
      }



      <div className='publish'>
        <input onChange={onChange}/>
        <button onClick={addPost}>저장</button>
      </div>

      {/* {입력값}
      <input onChange={ (e)=>{입력값변경(e.target.value)} } /> */}

      {/* <button onClick={()=>{누른제목변경(0)}}>제목변경1</button>
      <button onClick={()=>{누른제목변경(1)}}>제목변경2</button>
      <button onClick={()=>{누른제목변경(2)}}>제목변경3</button> */}

       <button onClick={()=>{modal변경(!modal)}}>모달창 열고 닫기</button>

      {
        modal === true 
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }

    </div>
  );
}

// 모달 컴포넌트 - 자식 컴포넌트
function Modal(props){
  return (
    <div className='modal'>
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
