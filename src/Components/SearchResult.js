import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function SearchResult({ data, onClickHandler }) {
  const handleClick = () => {
    onClickHandler(data.location);
  };
  const [open, setOpen]=useState(false);

  const onOpenModal=()=>setOpen(true);
  const onCloseModal=()=>setOpen(false);

  return (
    <div style={styles.searchresult}>
      <h2>{data.name}</h2>
      <h3>{data.contact}</h3>
      <div style={styles.buttons}>
        <h4 onClick={handleClick}>view path</h4>
        <button onClick={onOpenModal}>See details</button>
        <Modal open={open} onClose={onCloseModal} center>
          <h2>{data.name}</h2>
          <h3>{data.contact}</h3>
        </Modal>
      </div>
    </div>
  );
}

const styles = {
  searchresult: {
    width: '20vw',
    height: '200px',
    backgroundColor: '#ebebeb',
    marginTop: '20px',
    borderRadius: '10px',
    padding: '10px',
    boxSizing: 'border-box',
    cursor: 'pointer',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
};
