/* eslint-disable */ 
//lint 끄는 기능 (warning 메세지 없애기)

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  let post = 'ydh react blog'; //변수 var let const
  //일반 변수는 갑자기 변경되면 html에 자동으로 반영 안됨.

  let [글제목,글제목변경] = useState(['여자 코트 추천','남자 코트 추천','아이 신발 추천']); //보관할 자료  
  // state는 재랜더링이 자동으로 된다.
  //let [logo, setLogo] = useState('react blog'); //보관할 자료  

  let [좋아요,좋아요변경] = useState([0,0,0]);

  let [modal, setModal] = useState(false); //ui의 현재 상태를 state로 저장 

  let[title,setTitle] = useState(0);

  let [입력값, 입력값변경] = useState(''); 

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

    {/*반복 하고싶을 때 map함수 쓰기 */}
      {
         글제목.map(function(a, i){
          return (
          <div className="list" key={i}>
            <h4 onClick={()=>{setModal(true); setTitle(i)}}>
              {글제목[i]} 
            {/* <span onClick={(e) => {
              e.stopPropagation(); //상위html로 퍼지는 이벤트 버블링을 막을 때 
              let copy2 = [...좋아요];
              copy2[i] =  copy2[i] + 1;
              좋아요변경(copy2)
              }}>🩷</span> {좋아요[i]} </h4> */}
               <span onClick={() => { 좋아요변경(좋아요+1) }}>🩷</span> 
               {좋아요} 
              </h4>
            <p>2월 17 일 발행</p>
            <button onClick={() => {
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy);
            }}> 삭제 </button>
          </div>
          )
        })
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value);
      }} />

        <button onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값); //copy맨 처음에 유저가 입력한 글 추가 
          글제목변경(copy);
        }}>글발행</button>

      {
        modal == true ? 
        <Modal title={title} 글제목={글제목} /> 
        : null
      }

      <Modal2></Modal2>


      {/* <div className="list">
        <h4 >{글제목[0]} <span onClick={() => { 좋아요변경(좋아요+1) }}>🩷</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div> */}

 {/* <button onClick={() => {modal == true ? setModal(false) : setModal(true)}} > 열림/닫흼</button> */}

            {/* {
        //if는 안됨. 삼항연산자로 써야함
        modal == true ? <Modal 글제목수정={() => {
          let copy = [...글제목]; //state가 array/object면 독립적 카피본을 만들어서 수정해야 함
          copy[0] = '여자 신발 추천';
          글제목변경(copy);
        } } color={'skyblue'} 
        title={title} 
        글제목={글제목}></Modal> : null
      } */}
    </div>
  );
}

  // 컴포넌트 만드는 법
  // 1.function만들기
  // 2.return()안에 html담기
  // <함수명></함수명>쓰기 
  // 의미없는 div로 감싸기 대신 <> </> 로 감싸도 된다
  // 컴퍼넌트 쓰일때 3가지 
  // 1. 반복적인 html 축약할 때 
  // 2. 큰 페이지들  
  // 3.자주 변경되는 것들 
  //부모 컨퍼넌트가 가지고 있는 state를 자식한테 전송할때는 props를 사용
  //  1. <자식컴포넌트 작명 = {state이름}>
 // 2.props 파라미터 등록 후 props.작명 사용
  function Modal(props){
    return (
    <> 
    <div className='Modal' style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.글제목수정}>글수정</button>
    </div>
    </>
    )

  const Modal2 = () => {};
}

/*
class로 컴포넌트 만드는 법
변수, 함수 보관함임 
대문자로 시작
하나의 태그로 감싸기 (div)
*/ 

class Modal2 extends React.Component {
  constructor(){
    super();
    this.state = {
      name : 'kim',
      age : 20
    }
  }

  render(){
    return (
      <div>html 어쩌고 {this.state.name}
      <button onClick={()=>{
        this.setState({name : 'yoon'})
      }}>버튼</button>
      </div>
    )    
  }
}

export default App;
