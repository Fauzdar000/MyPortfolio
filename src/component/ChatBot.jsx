import React ,{useState} from 'react'
import { botData } from '../data/BotData.js'
import './ChatBot.css'
const ChatBot = () => {

  const [open , setOpen] = useState(false);
  const[input , setInput] = useState("");
  const[messages , setMessages] = useState([
    {sender:"bot" , text : "Hi 👋 Ask me about Hiro!"}
  ]);

  const sendMessage = () => {
    if(!input.trim()) return;

    setMessages(prev=>[...prev , {sender:"user" , text: input}]);

    const msg= input.toLowerCase();
    const reply =
      botData.find(item=>
        item.keywords.some(key=> msg.includes(key))
      )?.response || "Sorry, I don't understand that. Can you ask something else?";

      setTimeout(() => {
        setMessages(prev=>[...prev , {sender:"bot" , text: reply}]);
      }, 500);

      setInput("");
  }



  return (
    <div>

        
 {/* Floating Icon */}
      <div className="chat-icon" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            Hiro's Assistant
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.sender}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}



      
    </div>
  )
}

export default ChatBot







