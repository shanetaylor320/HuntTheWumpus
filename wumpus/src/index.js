import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HuntTheWumpus } from './HuntTheWumpus/HuntTheWumpus';

class Game extends React.Component {
  render() {
    return (
      <HuntTheWumpus></HuntTheWumpus>
    )
  }
}

// =====================================
ReactDOM.render(
  <Game />,
  document.getElementById("root")
);