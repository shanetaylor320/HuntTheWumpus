import React from 'react';
import styled from "styled-components";


const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 25px;
`

const Button = styled.div`
  text-align: center;
  font-size: ${props => props.fontSize}em;
  border-radius: 10px;
  :hover {
    background-color: rgba(0, 100, 0, .8);
  }
  cursor: pointer;
`

export class Controls extends React.Component {
  render() {
    return (
      <>
        <Row>
          <div>Move</div>
          <div>Shoot</div>
        </Row>
        <Row>
          <Button fontSize={2} onClick={() => this.props.onClick("move", "up")}>↑</Button>
          <Button fontSize={2} onClick={() => this.props.onClick("shoot", "up")}>↑</Button>
        </Row>
        <Row>
            <Button fontSize={2} onClick={() => this.props.onClick("move", "left")}>←</Button>
            <Button fontSize={2} onClick={() => this.props.onClick("move", "right")}>→</Button>
            <Button fontSize={2} onClick={() => this.props.onClick("shoot", "left")}>←</Button>
            <Button fontSize={2} onClick={() => this.props.onClick("shoot", "right")}>→</Button>
        </Row>
        <Row>
          <Button fontSize={2} onClick={() => this.props.onClick("move", "down")}>↓</Button>
          <Button fontSize={2} onClick={() => this.props.onClick("shoot", "down")}>↓</Button>
        </Row>
        <Row>
          <Button fontSize={1} onClick={() => this.props.onClick("restart", "")}>restart</Button>
        </Row>
      </>
    )
  }
}
// ↑ ↓ → ←