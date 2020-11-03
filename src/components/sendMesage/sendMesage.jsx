import React from 'react'
import axios from 'axios';

function SendMesage() {

const TOKEN_KEY = "UQngykNP5WHC"

    const options = {
        headers: {
          'Content-Type': 'application/json',
          'token': `${TOKEN_KEY}`
        }
    
      };
    
      const sendMsage = () => {
        axios.post(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0`,
          {message:"dragan fe test",author:"Dragan "},
          options);
      };


    return (
        <div>
             <button onClick={sendMsage}>Send</button>
        </div>
    )
}


export default SendMesage

