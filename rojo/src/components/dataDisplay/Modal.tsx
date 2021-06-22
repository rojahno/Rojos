import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/**
 * @todo add props
 */
interface ModalProps {
  visible?: boolean;
  height?: string;
  width?: string;
  maxWidth?: string;
}
const ModalBackground = styled.div<ModalProps>`
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
`;

const ModalContainer = styled.div<ModalProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.7em;
  background-color: #fefefe;
  border: 1px solid lightgray;

  height: ${(props) => (props.height ? props.height : "50vh")};
  width: ${(props) => (props.width ? props.width : "")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "80vw")};
  overflow: auto;

  animation-name: grow-modal;
  animation-duration: 0.3s;
  animation-timing-function: ease;

  @keyframes grow-modal {
    0% {
      max-width: 80vw;
      height: 50px;
    }

    100% {
      height: 50vh;
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
  onOk: () => any;
  onCancel: () => any;
  children?: any;
  height?: string;
  width?: string;
  maxWidth?: string;
}

export const Modal = (props: NotificationProps) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>();

  useOnClickOutside(ref, () => closeOnClick());

  const closeOnClick = () => {
    if (isOpen) {
      props.onCancel();
    }
  };

  useEffect(() => {
    const setVisible = () => {
      setIsOpen(props.visible);
    };

    setVisible();
  });

  return (
    <ModalBackground visible={isOpen}>
      <ModalContainer ref={ref} height={props.height} width={props.width} maxWidth={props.maxWidth}>
        <ModalHeader>Header</ModalHeader>
        <ModalContent>{props.children}</ModalContent>
        <ModalFooter>
          <CancelButton onClick={props.onCancel}>Cancel </CancelButton>
          <OKButton onClick={props.onOk}>Ok</OKButton>
        </ModalFooter>
      </ModalContainer>
    </ModalBackground>
  );
};

// Hook
function useOnClickOutside(ref: any, handleOutsideClick: (event: Event) => any) {
  useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handleOutsideClick(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handleOutsideClick]);
}
