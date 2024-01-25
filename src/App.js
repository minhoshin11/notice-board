/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남우동 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  
 //왼쪽(따봉)은 변수명 , 오른쪽(c)는 실행시킬 함수
  return (
    <div className="App">
    <div className="black-nav">
    <h4>ReactBlog</h4>
    </div>
    <div className='list'>
      {/* 정렬버튼 만드는 것임. */}
    <button onClick={ () =>{
      let copy = [...글제목];
      copy.sort();
      글제목변경(copy)
    }}>정렬버튼</button>

      <h4>{ 글제목[0] } <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
      <p>2월 17일 발행</p>
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>추천변경</button>
    </div>
    <div className='list'>
      <h4>{ 글제목[1] }</h4>
      <p>2월 17일 발행</p>
    </div>
    <div className='list'>
      <h4 onClick={()=>{setModal(!modal)}}>{글제목[2]}
      </h4>
      <p>2월 17일 발행</p>
    </div>
      
      {
        modal == true ? <Modal/> : null
      }
      
    </div>
  );
}


function Modal(){
    return(
      <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    )
} //리턴을 만들 때 하나의 div만 만들어야함. 두개이상 존재하면 오류뜸

function ModalSwitch(){
  if(false){
    return setModal(true)
  }else{
    return setModal(false)
  }
}


export default App;
