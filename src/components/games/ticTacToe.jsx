import React, { Component } from "react";

class Square extends React.Component {
  render() {
    console.log("Square Index", this.props.index);
    return (
      <button
        className="square"
        onClick={() => this.props.onClick(this.props.index)}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state.boardState = [];
    this.state.currentPlayer = "X";
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(squareClicked) {
    const boardState = this.state.boardState;
    boardState[squareClicked] = this.state.currentPlayer;
    const currentPlayer = this.state.currentPlayer === "O" ? "X" : "O";
    this.setState({ boardState, currentPlayer });
  }

  renderSquare(squareState, squareIndex) {
    return (
      <Square
        value={squareState}
        index={squareIndex}
        onClick={this.handleClick}
      />
    );
  }

  render() {
    const status = "Next player: " + this.state.currentPlayer;
    const { boardState } = this.state;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(boardState[0], 0)}
          {this.renderSquare(boardState[1], 1)}
          {this.renderSquare(boardState[2], 2)}
        </div>
        <div className="board-row">
          {this.renderSquare(boardState[3], 3)}
          {this.renderSquare(boardState[4], 4)}
          {this.renderSquare(boardState[5], 5)}
        </div>
        <div className="board-row">
          {this.renderSquare(boardState[6], 6)}
          {this.renderSquare(boardState[7], 7)}
          {this.renderSquare(boardState[8], 8)}
        </div>
      </div>
    );
  }
}

class TicTacToe extends Component {
  state = {};
  render() {
    return (
      <div className="tic-tac-toe-game">
        <div className="tic-tac-toe-game-board">
          <Board />
        </div>
        <div classname="tic-tac-toe-game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default TicTacToe;
