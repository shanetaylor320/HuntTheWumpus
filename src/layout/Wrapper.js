import styled from "styled-components";

const width = (window.innerWidth < 480) ? "100%" : "480px";

export const Wrapper = styled.div`
  width: ${width};
  margin: 0 auto;
`