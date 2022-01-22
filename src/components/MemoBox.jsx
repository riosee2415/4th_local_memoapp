import React from "react";
import styled from "styled-components";
import { Button } from "antd";

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

  _onDelete = (value) => {
    console.log(value);

    // 스토리지에 있는 memos에서 value를 제외한 값을
    // 다시 스토리지의 memos에 저장한다.
    // State memos에 스토리지의 memos를 저장한다.

    // 안됨.
  };

  render() {
    return (
      <Box>
        {this.props.value} &nbsp;&nbsp;
        <Button
          type="danger"
          size="small"
          onClick={() => this._onDelete(this.props.value)}
        >
          삭제
        </Button>
      </Box>
    );
  }
}

export default MemoBox;
