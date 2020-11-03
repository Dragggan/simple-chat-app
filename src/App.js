import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SendMesage from './components/sendMesage/sendMesage.jsx';
import MesageList from './components/mesageList/mesageList.jsx';
import './components/mesageList/mesageList.css';
import {TOKEN_KEY} from './constant/tokenKey';


function App() {



  const [messages, setMesages] = useState([]);
  // const [recivedMesages, setRecivedMesagesMesages] = useState([]);
  const ws = new WebSocket("ws://localhost:3000")

  useEffect(() => {
    // const ws = new SockJS('http://localhost:3000'); //Websocket Endpoint (getting session)
    // const ws = new SockJS(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?
    // since=1521096352339&limit=10&token=${TOKEN_KEY}`);
    // const stompClient = Stomp.over(ws);
    // stompClient.connect({},
    //   frame => {
    //     console.log(frame);
    //   }
    // );


    
    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    };
 

       //save whatever response from client
       ws.onmessage = evt =>{
      //   this.setState({
      //    message:this.state.message.concat(evt.data)
      //  })
      console.log(evt);
     }

  //   ws.onopen = () =>{
  //     //send any msg from Client if needed
  //       ws.send(JSON.stringify(temp))
  //  }

   


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
      <MesageList messages={messages} />
      <SendMesage />
      {/* <Websocket url='ws://localhost:3000'
              onMessage={(data)=>handleData(data)}/> */}
    </div>
  );
}

export default App;
