/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남우동 맛집';
  let [글제목,b] = useState(['남자 코트 추천','강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let [정렬, 정렬함수] = useState('data')
  
 //왼쪽(따봉)은 변수명 , 오른쪽(c)는 실행시킬 함수
  return (
    <div className="App">
    <button onClick={ () =>{
      let copy = [...글제목];
      copy.sort();
      글제목변경(copy)
    }}> </button>
    <div className="black-nav">
    <h4>ReactBlog</h4>
    </div>
    <div className='list'>
      
      <h4>{ 글제목[0] } <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
      <p>2월 17일 발행</p>
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        b(copy);
      }}>추천변경</button>
    </div>
    <div className='list'>
      <h4>{ 글제목[1] }</h4>
      <p>2월 17일 발행</p>
    </div>
    <div className='list'>
      <h4>{ 글제목[2] }</h4>
      <p>2월 17일 발행</p>
    </div>
    </div>
  );
}

export default App;
