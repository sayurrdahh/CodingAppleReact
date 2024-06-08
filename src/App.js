/* eslint-disable */ 
//lint 끄는 기능 (warning 메세지 없애기)

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = 'ydh react blog'; //변수 var let const
  //일반 변수는 갑자기 변경되면 html에 자동으로 반영 안됨.

  let [글제목,글제목변경] = useState(['여자 코트 추천','남자 코트 추천','아이 신발 추천']); //보관할 자료  
  // state는 재랜더링이 자동으로 된다.
  //let [logo, setLogo] = useState('react blog'); //보관할 자료  

  let [좋아요,좋아요변경] = useState(0);

  let [modal, setModal] = useState(false); //ui의 현재 상태를 state로 저장 
  
  //destructuring 문법
  let[a, c] = [1,2]; //a =1 c=2 


  return (
    <div className="App">
      
      <div className="black-nav">
        <h4>{post}</h4>
      </div>
      
      <button onClick={() => {
        let copy = [...글제목]; //state가 array/object면 독립적 카피본을 만들어서 수정해야 함
        copy[0] = '여자 신발 추천';
        글제목변경(copy);
      }}>글수정</button>

      <div className="list">
        <h4 >{글제목[0]} <span onClick={() => { 좋아요변경(좋아요+1) }}>🩷</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>

      <button onClick={() => {modal == true ? setModal(false) : setModal(true)}} > 열림/닫흼</button>

      {
        //if는 안됨. 삼항연산자로 써야함
        modal == true ? <Modal></Modal> : '' 
  
      }
    </div>
  );
}

  //컴포넌트 만드는 법
  //1.function만들기
  //2.return()안에 html담기
  //<함수명></함수명>쓰기 
  //의미없는 div로 감싸기 대신 <> </> 로 감싸도 된다
  //컴퍼넌트 쓰일때 3가지 
  //1. 반복적인 html 축약할 때 
  //2. 큰 페이지들  
  //3.자주 변경되는 것들 
function Modal(){
  return (
  <> 
  <div className='Modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  <div>작성자</div>
  </>
  )

  const Modal2 = () => {};
}

export default App;
