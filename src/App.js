import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SendMesage from './components/sendMesage/sendMesage.jsx';
import MesageList from './components/mesageList/mesageList.jsx';
import './components/mesageList/mesageList.css';
import { TOKEN_KEY } from './constant/tokenKey';


function App() {

  const [messages, setMesages] = useState([]);


  useEffect(() => {

    axios.get(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=
${TOKEN_KEY}`)
      .then(response => setMesages(response.data))
      .catch(err => console.log(err));
  }, []);

  const sendDataToParent = (data) => {
    // console.log(data); 
    //MESAGES FROM CHILD COMPONENT, REPLACMENT FOR WEB SOCKET ? 
  };

  return (
    <div className="App">
      <MesageList messages={messages} />
      <SendMesage sendDataToParent={(data) => sendDataToParent(data)} />
    </div>
  );
}

export default App;
