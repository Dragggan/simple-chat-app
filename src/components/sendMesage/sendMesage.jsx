import React, { useState } from 'react';
import axios from 'axios';

function SendMesage() {
  const [currentmesage, sendMesage] = useState('');


  const sendingMesage = (val) => {
    sendMesage(val)
  };

  const TOKEN_KEY = "UQngykNP5WHC";

  const options = {
    headers: {
      'Content-Type': 'application/json',
      'token': `${TOKEN_KEY}`
    }
  };

  const sendMsage = () => {
    debugger;
    axios.post(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0`,
      { message: currentmesage, author: "Dragan" },
      options)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };


  return (
    <div style={{position:'absolute'}}>
      <input type='text'  onChange={(e) => sendingMesage(e.target.value)} placeholder="type mesage here" />
      <button onClick={sendMsage}>Send</button>
    </div>
  );
}


export default SendMesage;

