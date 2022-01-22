import React from "react";
import Header from "./components/Header";
import MemoBox from "./components/MemoBox";
import styled from "styled-components";
import { Button, Modal, message } from "antd";

const MemoWrapper = styled.div`
  width: 100%;
  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const AddButton = styled(Button)`
  position: absolute;
  bottom: 9px;
  right: 9px;
  border-radius: 100%;

  width: 50px;
  height: 50px;

  font-size: 24px;

  box-shadow: 3px 3px 3px #999;
`;

const AddInput = styled.input`
  width: 100%;
  border: 1px solid skyblue;
  border-radius: 6px;

  box-shadow: 3px 3px 3px #999;

  outline: none;
  background: none;

  padding: 0px 5px;

  transition: 0.5s;

  &:focus {
    border: 1px solid blue;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addModal: false,
      addValue: "",
      memos: [],
    };
  }

  _openModal = () => {
    this.setState((prev) => {
      return {
        addModal: true,
      };
    });
  };

  _closeModal = () => {
    this.setState((prev) => {
      return {
        addModal: false,
        addValue: "",
      };
    });
  };

  _onChangeInput = (event) => {
    const v = event.target.value;

    this.setState((prev) => {
      return {
        addValue: v,
      };
    });
  };

  _onAddMemo = () => {
    const arr = JSON.parse(localStorage.getItem("memos")) || [];

    arr.push(this.state.addValue);

    localStorage.setItem("memos", JSON.stringify(arr));

    this.setState((prev) => {
      return {
        memos: arr,
      };
    });

    this._closeModal();
    message.success("새로운 메모가 등록되었습니다.");
  };

  componentDidMount() {
    const prevMemo = JSON.parse(localStorage.getItem("memos"));

    if (prevMemo === null) {
      return;
    }

    this.setState((prev) => {
      return {
        memos: prevMemo,
      };
    });
  }

  render() {
    return (
      <div>
        <Header />

        <MemoWrapper>
          {this.state.memos.map((m) => {
            return <MemoBox value={m} />;
          })}
        </MemoWrapper>

        <AddButton onClick={() => this._openModal()} type="primary">
          +
        </AddButton>

        <Modal
          title="ADD MEMO"
          visible={this.state.addModal}
          onCancel={() => this._closeModal()}
          onOk={() => this._onAddMemo()}
        >
          <AddInput
            type="text"
            value={this.state.addValue}
            onChange={this._onChangeInput}
          />
        </Modal>
      </div>
    );
  }
}

export default App;
