import React, { useState } from 'react';
import Logo from '../Logo';
import Modal from './Modal';
import'./MainCard.css';
import Contact from '../Contact';


function MainCard(){
  const [modalVisible, setModalVisible] = useState(false)
  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }
    return(
    <div className="cardFrame">
      <Logo/>
      <div className="item-container">
        <p className="item" onClick={openModal}><a href="/" onClick={event=>{ event.preventDefault();}}>ABOUT</a></p>
        {modalVisible && <Modal visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal}></Modal>}
        <p className="item"><a href="/">Portfolio</a></p>
        <p className="item"><a href="https://livelikesloth.tistory.com/">BLOG</a></p>
        <p className="item"><a href="https://github.com/livelikesloth">GITHUB</a></p>
        <p className="item"><a href="https://instagram.com/livelikesloth_?igshid=YmMyMTA2M2Y=">INSTAGRAM</a></p>
        <Contact></Contact>                             
      </div>
    </div>
  );
}
export default MainCard;
