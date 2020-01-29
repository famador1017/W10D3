import React from 'react';
import * as Minesweeper from '../minesweeper';

export default class Tile extends React.Component {
  constructor(props) {
    
    super(props);
    
    this.state = {
      bombed: this.props.bombed,
      explored: this.props.explored,
      flagged: this.props.flagged
    };
    this.handleClick = this.handleClick().bind(this);
    debugger;
    
  }
  
  
  setExplored(tilePos) {
    const currentExploredState = this.state.explored;
    
    if (!currentExploredState) {
      
      this.setState({ explored: true});
      
      tilePos.classList.remove('unexplored');
      tilePos.classList.add('explored');
    }
  }

  setFlagged(tilePos){
    const currentFlaggedState = this.state.flagged;
    
    if (!currentFlaggedState) {
      this.setState({ flagged: true });
      
      tilePos.classList.remove('unexplored');
      tilePos.classList.add('flagged');
    } else {
      this.setState({ flagged: false });
      
      tilePos.classList.remove('flagged');
      tilePos.classList.add('unexplored');
    }
  }

  handleClick(tilePos) {
    if(!this.state.explored) {
      
      this.setExplored();
      this.props.updateGame();
    
    } else if (instanceofMouseEvent.altKey && !this.state.explored) {
      
      this.setFlagged();
      this.props.updateGame();
    
    } else if (this.state.bombed) {
      
      tilePos.classList.remove('unexplored');
      tilePos.classList.add('bombed');
      this.props.updateGame();
    }
  }

  render () {
    const posKey = document.getElementById(this.props.tile.pos);
    return (
      <div className='tile unexplored' onClick={() => this.handleClick(posKey)} key={this.props.tile.pos} id={this.props.tile.pos}>
        T
      </div>
    );
  }

}