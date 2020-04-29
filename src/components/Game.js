import React, { Component } from 'react';
import { Table, Container } from 'react-bootstrap';
import '../styles/Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill(null),
      flag: true,
      winner: '',
    };
  }

    win=() => {
      const winComb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      const { flag } = this.state;
      const { cells } = this.state;
      const value = (flag === true) ? 'X' : 'O';
      for (let i = 0; i < winComb.length; i += 1) {
        const comb = winComb[i];
        if (cells[comb[0]] === value
                && cells[comb[1]] === value
                && cells[comb[2]] === value) {
          this.setState({ winner: value });
        }
      }
    }

    changer = (event) => {
      const { id } = event.target;
      const { cells } = this.state;
      const { flag } = this.state;
      const { winner } = this.state;
      if (cells[id] === null && winner === '') {
        cells[id] = (flag === true) ? 'X' : 'O';
        this.setState((prevState) => ({
          cells: prevState.cells, flag: !prevState.flag,
        }));
      }
      this.win();
    }

    clean = () => {
      setTimeout(() => {
        this.setState({ cells: Array(9).fill(null), flag: true, winner: '' });
      }, 2500);
    }

    render() {
      let status;
      const { cells } = this.state;
      const draw = cells.some((check) => check === null);
      const { winner } = this.state;
      const { flag } = this.state;
      if (winner === 'X') {
        status = 'Победил O!';
        this.clean();
      } else if (winner === 'O') {
        status = 'Победил X!';
        this.clean();
      } else if (winner === '' && !draw) {
        status = 'Ничья!';
        this.clean();
      } else {
        status = `Кто сейчас играет: ${(flag === true) ? 'X' : 'O'}`;
      }
      return (
        <div>
          <h1 align="center">Tic tac toe</h1>
          <h1 id="status" align="center">{status}</h1>
          <Container>
            <Table striped bordered size="sm">
              <tr>
                <td><button type="button" id="0" onClick={this.changer} onKeyDown={this.changer}>{cells[0]}</button></td>
                <td><button type="button" id="1" onClick={this.changer} onKeyDown={this.changer}>{cells[1]}</button></td>
                <td><button type="button" id="2" onClick={this.changer} onKeyDown={this.changer}>{cells[2]}</button></td>
              </tr>
              <tr>
                <td><button type="button" id="3" onClick={this.changer} onKeyDown={this.changer}>{cells[3]}</button></td>
                <td><button type="button" id="4" onClick={this.changer} onKeyDown={this.changer}>{cells[4]}</button></td>
                <td><button type="button" id="5" onClick={this.changer} onKeyDown={this.changer}>{cells[5]}</button></td>
              </tr>
              <tr>
                <td><button type="button" id="6" onClick={this.changer} onKeyDown={this.changer}>{cells[6]}</button></td>
                <td><button type="button" id="7" onClick={this.changer} onKeyDown={this.changer}>{cells[7]}</button></td>
                <td><button type="button" id="8" onClick={this.changer} onKeyDown={this.changer}>{cells[8]}</button></td>
              </tr>
            </Table>

          </Container>
        </div>
      );
    }
}

export default Game;
