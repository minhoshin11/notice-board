/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남우동 맛집';
  let [글제목,글제목변경] = useState(['남자코트 추천','강남 우동맛집', '파이썬독학']);
  let [modal, setModal] = useState(false);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [title, setTitle] = useState(1);
  let [입력값,입력값변경] = useState('');
  
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
      <h4 onClick={()=>{setModal(!modal); setTitle(i)}}> { 글제목[i] }
      <span onClick={(e)=>{ e.stopPropagation(); 
      let copy = [...따봉];
      copy[i] = copy[i] + 1;
      따봉변경(copy)
   }}>👍</span> {따봉[i]} 
   </h4>
      <p>2월 17일 발행</p>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.splice(i, 1);
        글제목변경(copy);
      }}>삭제</button>
    </div> )})
      }

<input onChange={(e)=>{
  입력값변경(e.target.value);
  console.log(입력값)  
  }}/>
<button onClick={()=>{
  let copy = [...글제목];
  copy.unshift(입력값);
  글제목변경(copy)
}}>글발행</button>


{
        modal == true ? <Modal title={title} color="skyblue" 글제목={글제목}/> : null
      }
      </div>
  )

  function Modal(props){
    return(
      <div className="modal" style={{backgroundColor : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
    )
} //가독성을 위해서 따로 빼놓은 함수임.
//리턴을 만들 때 하나의 div만 만들어야함. 두개이상 존재하면 오류뜸
}

export default App;