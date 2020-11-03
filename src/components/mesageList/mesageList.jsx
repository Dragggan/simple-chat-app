import React from 'react'
import  './mesageList.css'
import moment from 'moment';
moment().format();


function MesageList({messages,recivedMesages}) {
    return (
           <div className="message-list-container">                 
            {messages.slice(-5).map(message => {
              return (
               <div className={`mesage ${message.author==="Dragan" ? "containermesage-right" : "containermesage-left"}`}  
                key={message._id}>

                 <div className="id">
                   {message.author}
                 </div>
                 <div className='mesagetext'>
                   {message.message}
                 </div>
                  <div  className="time"> {moment().format('Do MMMM YYYY h:mm:ss')}</div>
               </div>
             )
           })}
           {/* <p className='recivedMesages'>{recivedMesages[0].text}</p> */}
         </div>
    )
}
export default MesageList

