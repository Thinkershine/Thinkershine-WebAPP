import React, { Component } from "react";

class Square extends React.Component {
  render() {
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
    this.state.gameOver = false;
    this.state.gameStatus = "Current Player: " + this.state.currentPlayer;
    this.state.winner = "";
    this.handleClick = this.handleClick.bind(this);
    this.startPlaying = this.startPlaying.bind(this);
  }

  handleClick(squareClicked) {
    if (this.state.gameOver) {
      return;
    }

    const boardState = this.state.boardState;
    if (boardState[squareClicked] == null) {
      boardState[squareClicked] = this.state.currentPlayer;

      this.checkWin(this.state.currentPlayer);

      const nextPlayer = this.state.currentPlayer === "O" ? "X" : "O";
      this.setState({ boardState, currentPlayer: nextPlayer }, () => {
        const gameStatus = "Current Player: " + this.state.currentPlayer;
        this.setState({ gameStatus });
      });
    }
  }

  checkWin(player) {
    const winners = this.winningConfigurations;
    const board = this.state.boardState;
    console.log("CHECK WIN FOR ", player);

    for (let i = 0; i < winners.length; i += 1) {
      if (
        board[winners[i][0]] === player &&
        board[winners[i][1]] === player &&
        board[winners[i][2]] === player
      ) {
        this.setState({
          gameOver: true,
          winner: player
        });
      }
    }
  }

  winningConfigurations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  renderSquare(squareState, squareIndex) {
    return (
      <Square
        value={squareState}
        index={squareIndex}
        onClick={this.handleClick}
      />
    );
  }

  youWon() {
    // Run Confetti :)
  }

  startPlaying() {
    console.log("AGAIN");
    this.setState({
      boardState: [],
      currentPlayer: "X",
      gameOver: false,
      gameStatus: "Current Player: X",
      winner: ""
    });
  }

  render() {
    const { boardState, gameStatus } = this.state;

    return (
      <React.Fragment>
        <div>
          <div className="status">
            {!this.state.gameOver
              ? gameStatus
              : "Winner is " + this.state.winner}
          </div>
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

        <button onClick={this.startPlaying} className="btn btn-primary">
          PLAY from START
        </button>
      </React.Fragment>
    );
  }
}

class TicTacToe extends Component {
  state = {};
  render() {
    return (
      <div className="tic-tac-toe-game">
        <div className="tic-tac-toe-game-board">
          <Board onClick={this.startPlaying} />
        </div>
        <div className="tic-tac-toe-game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default TicTacToe;
