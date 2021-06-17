import styled from "styled-components";

const Modal = styled.div<NotificationProps>`
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  border: 1px solid lightgray;
  width: 520px;
  height: 250px;
  overflow: auto;

  animation-name: grow-modal;
  animation-duration: 0.2s;
  animation-timing-function: ease;

  @keyframes grow-modal {
    0% {
      max-width: 520px;
      height: 50px;
    }

    100% {
      max-width: 520px;
      height: 250px;
    }
  }
`;

const ModalHeader = styled.h3`
  width: 100%;
  height: 2em;
  padding: 0.5em;
  margin: 0;
  display: flex-start;
  justify-content: center;
  align-items: center;
  border-bottom: solid gray 0.5px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  border-top: solid gray 0.5px;
`;

const ModalButton = styled.button`
  font-size: 1rem;
  margin: 0.5em;
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(111, 117, 133, 0.14);
  transition: transform ease-in 0.1s;
  border-style: none;
  padding: 0.3em 1.3em;

  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px #0000000b;
  transition: all 0.3s;
`;

const OKButton = styled(ModalButton)`
  background-color: #1890ff;
  border-color: #1890ff;
  color: #fff;

  &:hover {
    background-color: #1890ff90;
    border-color: #1890ff90;
  }

  &:active {
    background-color: #1890ff;
    border-color: #1890ff;
  }
`;

const CancelButton = styled(ModalButton)`
  border: solid 0.5px #888;
  background-color: transparent;
  &:hover {
    border-color: #89cff0;
    color: #89cff0;
  }
  &:active {
    border-color: #1886ee;
    color: #1886ee;
  }
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
`;

interface NotificationProps {
  visible?: boolean;
  onOk?: () => any;
  onCancel?: () => any;
  children?: any;
}

export const Notifications = (props: NotificationProps) => {
  return (
    <Modal visible={props.visible}>
      <ModalContainer>
        <ModalHeader>Header</ModalHeader>

        <ModalContent>{props.children}</ModalContent>

        <ModalFooter>
          <CancelButton onClick={props.onCancel}>Cancel </CancelButton>
          <OKButton onClick={props.onOk}>Ok</OKButton>
        </ModalFooter>
      </ModalContainer>
    </Modal>
  );
};
