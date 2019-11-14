import React from 'react';
import styled from "styled-components";

const width = (window.innerWidth < 480) ? "100%" : "480px";

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${width};
  height: ${window.innerHeight * .5}px;
  `
  const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  `
  
  const Box = styled.div`
  width: 25%;
  height: 100%;
  border-style: dotted;
  border-width: 3px;
  border-color: rgb(54, 182, 54);
  box-sizing: border-box;
  background_color: rgba(0, 100, 0, .8);
`

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: "black",
      flashing: true,
    }
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({flashing: !this.state.flashing});
      this.flash();
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  flash() {
    if (this.props.current && this.state.flashing) {
      this.setState({ bgColor: "rgba(0, 100, 0, .8" });
    } else {
      this.setState({ bgColor: "black" });
    }
  }

  render() {
    return (
      <Box style={{ backgroundColor: this.state.bgColor }}></Box>
    );
  }
}

export class Board extends React.Component {
  createBoard = () => {
    let board = [];
    for (var i = 0; i < 4; i++) {
      let row = [];
      for (var j = 0; j < 4; j++) {
        row.push(<Square current={this.props.game.x === j && this.props.game.y === i}></Square>);
      }
      board.push(<Row>{row}</Row>);
    }
    return board;
  }

  render() {
    return (
      <BoardContainer>
        {this.createBoard()}
      </BoardContainer>
    )
  }
}