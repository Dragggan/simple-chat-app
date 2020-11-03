import React from 'react'
import  './mesageList.css'

function MesageList({messages,recivedMesages}) {
    return (
        <div>
           <div className="message-list">                 
            {messages.slice(-3).map(message => {
              return (
               <div className={`${message.author==="Dragan" ? "containermesage-left" : "containermesage-right"}`}  
                key={message._id}>

                 <div className="id">
                   {message.author}
                 </div>
                 <div className='mesagetext'>
                   {message.message}
                 </div>
                  <div  className="id"> {new Date().toLocaleDateString()}</div>
               </div>
             )
           })}
           {/* <p className='recivedMesages'>{recivedMesages[0].text}</p> */}
         </div>
        </div>
    )
}
export default MesageList

