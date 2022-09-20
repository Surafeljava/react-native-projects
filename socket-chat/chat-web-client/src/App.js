import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:4000");

function App() {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);

  useEffect(() => {
    socket.on('message', (chat) => {
      console.log(chat);
      setChats([...chats, chat]);
    });
  });

  const onMessageSend = (e) => {
    // e.preventDefault();
    const msg = {
      name: 'name',
      message: message
    }
    socket.emit('message', msg);
  }

  return (
    <div className="flex w-full min-h-screen gap-6 justify-center items-center">
      {chats.length>0 && (
        <div className="flex flex-col gap-2">
          {chats.map((chat, index) => {
            return (
              <div className="p-6 bg-slate-200 rounded-lg" key={index}>
                <div className="text-xl"> {chat.message} </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="flex flex-col gap-4">
        <input type="text" className="py-4 px-6 bg-slate-200 rounded-xl border-1" onChange={(e) => setMessage(e.target.value)} value={message}/>
        <button className="py-4 px-10 rounded-xl bg-red-400 text-white" onClick={onMessageSend}> Send </button>
      </div>
    </div>
  );
}

export default App;
