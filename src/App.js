import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SendMesage from './components/sendMesage/sendMesage.jsx';
import MesageList from './components/mesageList/mesageList.jsx';
import './components/mesageList/mesageList.css';
import Websocket from 'react-websocket';
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';

function App() {

  const TOKEN_KEY = "UQngykNP5WHC";

  const [messages, setMesages] = useState([]);
  const [recivedMesages, setRecivedMesagesMesages] = useState([]);

  useEffect(() => {
    // const ws = new SockJS('http://localhost:3000'); //Websocket Endpoint (getting session)
    const ws = new SockJS(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?
    since=1521096352339&limit=10&token=${TOKEN_KEY}`);
    const stompClient = Stomp.over(ws);
    stompClient.connect({},
      frame => {
        console.log(frame);
      }
    );

    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    };

    ws.onmessage = evt => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data);
      debugger;
      setMesages({ dataFromServer: message });
      console.log(message);
    };

    ws.onclose = () => {
      console.log('disconnected');
      // automatically try to reconnect on connection loss

    };


    axios.get(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=
${TOKEN_KEY}`)
      .then(response => setMesages(response.data))
      .catch(err => console.log(err));

    return () => {
      console.log("cleanup");
    };
  }, []);



  // const handleData = (data) => {
  //  debugger;
  //   // this.setState({count: this.state.count + result.movement});
  // }

  return (
    <div className="App">
      <MesageList messages={messages} recivedMesages={recivedMesages} />
      <SendMesage />
      {/* <Websocket url='ws://localhost:3000'
              onMessage={(data)=>handleData(data)}/> */}
    </div>
  );
}

export default App;
