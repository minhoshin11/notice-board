/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남우동 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
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
    </div> 
    

      {      
        글제목.map(function(a, i){
          return(
      <div className='list' key={i}>
      <span onClick={()=>{setModal(!modal)}}> { 글제목[i] } </span>
      <span onClick={()=>{ 
      let copy = [...따봉];
      copy[i] = copy[i] + 1;
      따봉변경(copy)  
   }}>👍</span> {따봉[i]} 
      
      <p>2월 17일 발행</p>
    </div> )})
      }

{
        modal == true ? <Modal color="skyblue" 글제목={글제목}/> : null
      }
      
      </div>
  )

  function Modal(props){
    return(
      <div className="modal" style={{backgroundColor : props.color}}>
      <h4>{props.글제목}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
    )
} //리턴을 만들 때 하나의 div만 만들어야함. 두개이상 존재하면 오류뜸

}

export default App;