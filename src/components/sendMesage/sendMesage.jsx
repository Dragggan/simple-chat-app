import React, { useState } from 'react';
import axios from 'axios';
import './sendMesage.css';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import {TOKEN_KEY} from '../../constant/tokenKey';

function SendMesage() {
  const [currentmesage, sendMesage] = useState('');

  const sendingMesage = (val) => {
    sendMesage(val);
  };

  const options = {
    headers: {
      'Content-Type': 'application/json',
      'token': `${TOKEN_KEY}`
    }
  };

  const sendMsage = () => {
    axios.post(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0`,
      { message: currentmesage, author: "Dragan" },
      options)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };


  return (
    <div className="send-section-container" >
      <InputGroup className="mb-3">
        <FormControl aria-describedby="basic-addon1" className="input-text" onChange={(e) => sendingMesage(e.target.value)} />
          <Button variant="warning"  className="send-button" onClick={sendMsage}>Send</Button>
      </InputGroup>
    </div>
  );
}

export default SendMesage;

