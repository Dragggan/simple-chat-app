import React from 'react'
import  './mesageList.css'

function MesageList({messages,recivedMesages}) {
    return (
        <div>
           <div className="message-list">                 
            {messages.map(message => {
              return (
               <p className='containermesage' key={message.id}>
                 <div className="id">
                   {message.senderId}
                 </div>
                 <div className='mesagetext'>
                   {message.text}
                 </div>
                  <div  className="id"> {new Date().toLocaleDateString()}</div>
               </p>
             )
           })}
           {/* <p className='recivedMesages'>{recivedMesages[0].text}</p> */}
         </div>
        </div>
    )
}
export default MesageList

