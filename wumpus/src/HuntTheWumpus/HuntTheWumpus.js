import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from "../layout/Wrapper";
import { GameScreen } from "../layout/GameScreen";
import { Board } from "./Board";
import { TextOutput } from "./TextOutput";
import { Controls } from "./Controls";

const api = "http://localhost:3000/api/HuntTheWumpus"

export class HuntTheWumpus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: {},
      current_message: "",
      surroundings: [],
    }
  }

  componentDidMount() {
    this.startGame();
  }

  startGame() {
    fetch(api + "/start")
      .then(response => response.json())
      .then(data => {
        this.setState({ current_message: data.msg });
        this.getGame();
        this.getSurroundings();
      });
  }

  getGame() {
    fetch(api + "/game")
      .then(response => response.json())
      .then(data => this.setState({ game: data.body }))
  }

  getSurroundings() {
    fetch(api + "/surroundings")
      .then(response => response.json())
      .then(data => this.setState({ surroundings: data.msgs }))
  }

  move(dir) {
    let body = {
      direction: dir,
    };
    fetch(api + "/move", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(response => response.json())
      .then(data => {
        this.setState({ current_message: data.msg });
        this.getGame();
        this.getSurroundings();
      })
  }

  restart() {
    this.startGame();
  }

  shoot(dir) {
    fetch(api + "/shoot", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({direction: dir})
    }).then(response => response.json())
      .then(data => {
        this.setState({ current_message: data.msg });
        this.getGame();
        this.getSurroundings();
      })
  }

  render() {
    if (this.state.game.cave == null) {
      return null;
    }
    return (
      <GameScreen>
        <Wrapper>
          <Board game={this.state.game} />
          <TextOutput surroundings={this.state.surroundings} current={this.state.current_message}></TextOutput>
          <Controls 
            onClick={ (type, dir) => {
              switch(type) {
                case "restart":
                  this.restart();
                  break;
                case "move":
                  this.move(dir);
                  break;
                case "shoot":
                  this.shoot(dir);
                  break;
                default:
                  break;
              }
            }
            }
          >
          </Controls>
        </Wrapper>
      </GameScreen>
    )
  }
}