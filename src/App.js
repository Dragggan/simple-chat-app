import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SendMesage from './components/sendMesage/sendMesage.jsx';
import MesageList from './components/mesageList/mesageList.jsx';
import './components/mesageList/mesageList.css';
import { TOKEN_KEY } from './constant/tokenKey';


function App() {

  const [messages, setMesages] = useState([]);
  const [open, isOpen] = useState(false);
  const [connected, isConnected] = useState(false);


  const ws = new WebSocket(`ws://localhost:3000`);

  useEffect(() => {

    axios.get(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=
${TOKEN_KEY}`)
      .then(response => setMesages(response.data))
      .catch(err => console.log(err));

    return () => {
      console.log("cleanup code");
    };
  }, []);

  const sendDataToParent = (data) => {
    setMesages(data);
  };


  // const handleData = (data) => {
  //  debugger;
  //   // this.setState({count: this.state.count + result.movement});
  // }

  return (
    <div className="App">
      <MesageList messages={messages} />
      <SendMesage sendDataToParent={(data) => sendDataToParent(data)} />
      {/* <Websocket url='ws://localhost:3000'
              onMessage={(data)=>handleData(data)}/> */}
    </div>
  );
}

export default App;
