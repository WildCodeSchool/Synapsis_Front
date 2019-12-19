import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'

const ModalDistinction = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [createDistinction, setcreateDistinction] = useState({
    name: '',
    date: '',
  })

  const createDataDistinction = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/distinction', createDistinction)
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Distinctions personnelles</ModalHeader>
        <ModalBody>
          <p>Distinction :</p>
          <input id="name" name="name" value={createDistinction.name} required type="text"
            onChange={(e) => { setcreateDistinction({ ...createDistinction, name: e.target.value }) }} />
          <p>Saison :</p>
          <input id="date" name="date" value={createDistinction.description} required type="text"
            onChange={(e) => { setcreateDistinction({ ...createDistinction, date: e.target.value }) }} />
        </ModalBody>
        <ModalFooter >
          <form onSubmit={createDataDistinction}>
            <Button type="submit" onClick={toggle}>Enregistrer</Button>{' '}
            <Button onClick={toggle}>Fermer</Button>
          </form>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalDistinction;