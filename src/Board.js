
import { useState } from 'react'
import Square from './Square'

function Board() {
    const rowStyle = {
        display: 'flex'
      }
      
    const containerStyle = {
        'display': 'flex',
        'alignItems': 'center',
        'flexDirection': 'column'
    }

      const messageStyle = {
        'marginTop': '5px',
        'marginBottom': '5px',
        'fontWeight': 'bold',
        'fontSize': '16px',
    }
    
    const buttonStyle = {
        'marginTop': '15px',
        'marginBottom': '16px',
        'width': '80px',
        'height': '40px',
        'backgroundColor': '#8acaca',
        'color': 'white',
        'fontSize': '16px',
      }

      const boardStyle = {
        'backgroundColor': '#eee',
        'width': '208px',
        'alignItems': 'center',
        'justifyContent': 'center',
        'display': 'flex',
        'flexDirection': 'column',
        'border': '3px #eee solid'
      }
      
      
      let XPlayer = 'X'
      let OPlayer = 'O'
      let empty = ''
      let boardSize = 9
      let mainHeader = 'TicTacToe'
      let resetButtonTxt = 'Reset'
      let winnerTxt = 'Winner:'

      const [board, setBoard] = useState(Array(boardSize).fill(empty));
      const [currentPlayer, setCurrentPlayer] = useState(XPlayer);
      const [winner, setWinner] = useState(null);
      const [tie, setTie] = useState(false);
      
      
      let TieNoneMessage = tie ? 'Tie' : 'None'
      let gameOverMessage = 'Game Over!\n Click the Reset Button to play again'
      let currentPlayerMessage = 'Current player:' +  currentPlayer
      let status =  winner || tie ? gameOverMessage : currentPlayerMessage
      
    const checkBoardFull=(board) =>{
        for(const cell of board)
            if(cell === empty)
                return false
        return true
    }
    
    const markSquare = (i)=> {
        
        if(board[i] || winner)
            return
         
        board[i] = currentPlayer;
        setCurrentPlayer(currentPlayer === XPlayer ? OPlayer:XPlayer)

        if(checkForWinner(board))
            setWinner(currentPlayer)
        
        if(checkBoardFull(board) && !winner)
            setTie(true)
                        
    }

    const checkForWinner = (board)=>{
        const winningStates = [
            [0, 1, 2], //horizontal line
            [3, 4, 5], //horizontal line
            [6, 7, 8], //horizontal line
            [0, 3, 6], //vertical line
            [1, 4, 7], //vertical line
            [2, 5, 8], //vertical line
            [0, 4, 8], //main diagonal
            [2, 4, 6]  //secondary diagonal
            ];

       
    for (const condition of winningStates) {
        
        const[a,b,c] = condition

        if (board[a] && board[a] === board[b] && board[a] === board[c])    
            return true                    
    }

    // If no winner were found, return false
    return false;
    
  }
        

    const reset=()=>{
        setBoard(Array(boardSize).fill(empty))
        setCurrentPlayer(XPlayer)
        setWinner(null)
        setTie(false) 
        
    }

   
  
    return (
      
      <div style={containerStyle} className="tttBoard">
        <h1>{mainHeader}</h1>
        <div id="statusArea" className="status" style={messageStyle}> <span>{status}</span></div>
        <div id="winnerArea" className="winner" style={messageStyle}>{winnerTxt} <span>{winner || TieNoneMessage}</span></div>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square value = {board[0]} onClick={() => markSquare(0)}/>
            <Square value = {board[1]} onClick={() => markSquare(1)} />
            <Square value = {board[2]} onClick={() => markSquare(2)} />
          </div>
        <div className="board-row" style={rowStyle}>
            <Square value = {board[3]} onClick={() => markSquare(3)} />
            <Square value = {board[4]} onClick={() => markSquare(4)}/>
            <Square value = {board[5]} onClick={() => markSquare(5)} />
          </div>
           <div className="board-row" style={rowStyle}>
            <Square value = {board[6]} onClick={() => markSquare(6)} />
            <Square value = {board[7]} onClick={() => markSquare(7)} />
            <Square value = {board[8]} onClick={() => markSquare(8)}/>
          </div>
         
        </div>
        <button style={buttonStyle} onClick = {reset}>{resetButtonTxt}</button>
  
      </div>
    );
  }
  
  export default Board