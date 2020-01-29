import React from 'react';
import * as Minesweeper from '../minesweeper';
import Tile from './tile';

  export default class Board extends React.Component {
    constructor(props) {
      super(props);
      // debugger
      this.state = {
      };
      this.rows = this.rows.bind(this);
      // this.getTiles = this.getTiles.bind(this);
      // const makeRow = rows();
      // makeRow;

    }

  
  rows() {
    // debugger
    // const func = this.getTiles
    return this.props.board.grid.map((row, rowIdx) => {
      return (
        <div className="row" id={rowIdx} key={rowIdx}>

            {this.getTiles(row)}

        </div>
      )
    })
  }
  
  getTiles(row) {
    return row.map((tile, idx) => {
      // debugger
      return (
          <Tile tile= {tile} updateGame={this.props.updateGame}/>
      )
    })
  }

  render(){
    // const allTiles =
    // debugger
    return (
      <div className="board">
      {this.rows()}
      </div>
    )
  }
}