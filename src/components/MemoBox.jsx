import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;

  border-radius: 10px;
  box-shadow: 3px 3px 9px #999;

  word-break: break-all;
`;

class MemoBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Box>MemoBoxMemoBoxMemoBoxMemoBoxMemoBoxMemoBoxMemo</Box>;
  }
}

export default MemoBox;
