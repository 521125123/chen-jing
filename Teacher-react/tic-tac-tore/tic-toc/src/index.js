import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Square -----------------------
function Square(props) {
  return (
    <button className="square"
    onClick={props.onClick}
    >
    {props.value}
    </button>
  )
}
//  Board -----------------------
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
      />
    )
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [ //下棋历史
        {
          squares: Array(9).fill(null) 
        }
      ],
      stepNumber: 0, //当前第几步 
      xIsNext: true
    }
  }
  handleClick(i) {
    // 把当前的记录修改i null -> 1,2
    // 新加一个下棋记录  history push
    // current -> 新的值 history.length-1
    const history = this.state.history.slice(0,this.state.stepNumber + 1);
    // const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    console.log(squares);
    squares[i] = this.state.xIsNext?'X':'O'
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  render() {
    const history = this.state.history; 
    // 当前的数据 MVVM 响应式 current 会自动变
    const current = history[this.state.stepNumber];
    console.log(this.state.stepNumber,'--------------------');
    const status = [];// JSX 数组 组件 Square
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move:'Go to game start'
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })
    return (
      // 切整个页面
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>
            {moves}
          </ol>
        </div>
      </div>
    )
    
    // 细化组件
  }
}
// 组件化思维 
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
