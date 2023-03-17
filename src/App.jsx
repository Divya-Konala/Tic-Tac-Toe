import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icons from './components/Icons'
import './App.css'


let gameArr=new Array(9).fill("");

function App() {
  let [noOfClicks,setNoOfClicks]=useState(0);
  let [isCross,setCross]=useState(true);
  let [winner,setWinner]=useState("");

  //reset
  function reset(){
    gameArr.fill("");
    setCross(true);
    setWinner("");
    setNoOfClicks(0);
  }

  //winner
  function winnerFunction(){
    if(gameArr[0]!=="" && gameArr[0]===gameArr[1] && gameArr[0]===gameArr[2]){
      setWinner(gameArr[0]);
    }else if(gameArr[3]!=="" && gameArr[3]===gameArr[4] && gameArr[3]===gameArr[5]){
      setWinner(gameArr[3]);
    }
    else if(gameArr[6]!=="" && gameArr[6]===gameArr[7] && gameArr[6]===gameArr[8]){
      setWinner(gameArr[6]);
    }else if(gameArr[0]!=="" && gameArr[0]===gameArr[3] && gameArr[0]===gameArr[6]){
      setWinner(gameArr[0]);
    }else if(gameArr[1]!=="" && gameArr[1]===gameArr[4] && gameArr[1]===gameArr[7]){
      setWinner(gameArr[1]);
    }else if(gameArr[2]!=="" && gameArr[2]===gameArr[5] && gameArr[2]===gameArr[8]){
      setWinner(gameArr[2]);
    }else if(gameArr[0]!=="" && gameArr[0]===gameArr[4] && gameArr[0]===gameArr[8]){
      setWinner(gameArr[0]);
    }else if(gameArr[2]!=="" && gameArr[2]===gameArr[4] && gameArr[2]===gameArr[6]){
      setWinner(gameArr[2]);
    }
  }


  //onChange
  function handleClick(index){
    if(winner!==""){
      toast("Winner Already Declared")
    }else if(gameArr[index]===""){
      setNoOfClicks(noOfClicks+1)
      gameArr[index]=(isCross)?"cross":"circle";
      setCross(!isCross);
      winnerFunction();
    }else{
      toast("Already Clicked!!!")
    }
  }


  return (
    <div className="App">
      <ToastContainer position="bottom-center"/>
      <div id="heading"><h1>TIC - TAC - TOE</h1></div>
      {(winner==="" && noOfClicks!==9)
      ?<div className='turn'>Your Turn: {(isCross)?<Icons input={"cross"}/>:<Icons input={"circle"}/>}</div>
      :<div className='winnerDiv'>{(winner!=="")?<div className='winner'>Winner: {<Icons input={winner}/>}</div>:<div>
        Draw</div>}
      <button onClick={reset}>Play Again</button></div>
    }
    <div className="grid">
      {
        gameArr.map((value,index)=>{
          return (<div key={index} onClick={()=>handleClick(index)} className="box">
            <Icons className="icons" input={value} />        
          </div>)
        })
      }
    </div>
    </div>
  )
}

export default App
