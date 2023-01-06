import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Logo from "../Logo";
import Pic from "../static/images/pic.png";
import Introduce from "./Introduce";
import Contact from "../Contact";

function Modal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          <div className="modalNameBox">
            <div className="nameBox">
              <p>Front End</p>
              <p>DEVELOPER</p>
              <p className="Korean">민현진</p>
            </div>
            <div>
              {closable && (
                <div className="modal-close" onClick={close}>
                  <Logo />
                </div>
              )}
              {children}
            </div>
            <div className="nameBox">
              <img src={Pic} alt="" />
            </div>
            <Introduce />
          </div>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  // background-color: rgba(0, 0, 0, 1);
  z-index: 999;
  
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  background-color: rgb(255, 253, 243);
  width: 60%;
  height: 90%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 0px 20px;
  border: ridge 10px rgb(255, 253, 243);
  display: flex;
  flex-flow: column;
  min-width:325px;
  overflow-y: auto;

`;

export default Modal;
