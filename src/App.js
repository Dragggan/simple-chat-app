import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Title from './components/title/title.jsx';
import SendMesage from './components/sendMesage/sendMesage.jsx';
import MesageList from './components/mesageList/mesageList.jsx';
import './components/mesageList/mesageList.css';



function App() {

  const TOKEN_KEY = "UQngykNP5WHC";

  const [messages, setMesages] = useState([]);
  const [recivedMesages, setRecivedMesagesMesages] = useState([]);

  useEffect(() => {

    axios.get(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=
${TOKEN_KEY}`)
      .then(response => console.log(response))
      .catch(err => console.log(err));

    return () => {
      console.log("cleanup");
    };
  }, []);



  return (
    <div className="App">
      <Title />
      <MesageList messages={messages} recivedMesages={recivedMesages} />
      <SendMesage />
    </div>
  );
}

export default App;
