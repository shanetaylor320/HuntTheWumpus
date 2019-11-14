import React from 'react';
import styled from "styled-components";

const Heading = styled.div`
  padding: 2em 0em 1em 0em;
`

const CenterHeading = styled(Heading)`
  display: block;
  text-align: center;
`

const ListSection = styled.div`
  min-height: 50px;
`

export class TextOutput extends React.Component {
  render() {
    return (
      <>
        <Heading>Surroundings:</Heading>
        <ListSection>
          {
            (this.props.surroundings !== undefined) ? (
              this.props.surroundings.map((sense) => (
                <div>{sense}</div>
              ))
            ) : (null)
          }
        </ListSection>
        <CenterHeading>{this.props.current}</CenterHeading>
      </>
    )
  }
}