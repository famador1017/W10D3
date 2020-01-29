// const MineSweeper = import { Board, Title } from './minesweeper';

import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../components/game';

const boardProps = {boardSize: 9, bombNum: 10};

function App() {
  return(
    <div>
    <Game boardparams={boardProps} />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(<App/>, document.getElementById('root'));
});