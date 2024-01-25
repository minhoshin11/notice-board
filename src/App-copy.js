/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남우동 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false); 
  
  return (
    <div className="App">
    <div className="black-nav">
    <h4>ReactBlog</h4>
    </div>
    <div className='list'>
    <button onClick={ () =>{
      let copy = [...글제목];
      copy.sort();
      글제목변경(copy)
    }}>정렬버튼</button>
    </div> 
    


      {
        modal == true ? <Modal></Modal> : null
      }
      
      
      {      
        글제목.map(function(a, i){
          return(
      <div className='list' key={i}>
      <h4 onClick={()=>{setModal(!modal)}}> { 글제목[i] } </h4>
      <span onClick={()=>{ 
      let copy = [...따봉];
      copy[i] = copy[i] + 1;
      따봉변경(copy)  
   }}>👍</span> {따봉[i]} 
      
      <p>2월 17일 발행</p>
    </div> )})
      }
      
    </div>
  )





function Modal(){
    return(
      <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    )
}


}

export default App;