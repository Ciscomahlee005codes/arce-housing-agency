import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import "./AgentMessages.css";

const AgentMessages = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const messages = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hi, I’m interested in the 2-bedroom apartment.",
      time: "10:45 AM",
      avatar: "https://i.pravatar.cc/40?img=1",
      chat: [
        { sender: "John Doe", text: "Hi, I’m interested in the 2-bedroom apartment.", time: "10:45 AM" },
        { sender: "You", text: "Hello John, the apartment is still available. Would you like a tour?", time: "10:50 AM" },
      ],
    },
    {
      id: 2,
      name: "Sarah James",
      lastMessage: "Is the price negotiable?",
      time: "Yesterday",
      avatar: "https://i.pravatar.cc/40?img=2",
      chat: [
        { sender: "Sarah James", text: "Is the price negotiable?", time: "Yesterday" },
        { sender: "You", text: "Yes, it is. What’s your offer?", time: "Yesterday" },
      ],
    },
    {
      id: 3,
      name: "Michael Brown",
      lastMessage: "When is the move-in date?",
      time: "2 days ago",
      avatar: "https://i.pravatar.cc/40?img=3",
      chat: [
        { sender: "Michael Brown", text: "When is the move-in date?", time: "2 days ago" },
        { sender: "You", text: "Move-in date is flexible, usually 1st of next month.", time: "2 days ago" },
      ],
    },
  ];

  return (
    <div className="messages-container">
      {/* Sidebar with messages list */}
      <div className={`messages-sidebar ${selectedChat ? "hide-on-mobile" : ""}`}>
        <h2>Messages</h2>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-preview ${selectedChat?.id === msg.id ? "active" : ""}`}
            onClick={() => setSelectedChat(msg)}
          >
            <img src={msg.avatar} alt={msg.name} className="avatar" />
            <div className="msg-info">
              <h4>{msg.name}</h4>
              <p>{msg.lastMessage}</p>
            </div>
            <span className="time">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Chat window */}
      <div className={`chat-window ${!selectedChat ? "hide-on-mobile" : ""}`}>
        {selectedChat ? (
          <>
            <div className="chat-header">
              {/* Back button (mobile only) */}
              <button className="back-btn" onClick={() => setSelectedChat(null)}>
                <FiArrowLeft className="shift"/>
              </button>
              <img src={selectedChat.avatar} alt={selectedChat.name} className="avatar" />
              <h3>{selectedChat.name}</h3>
            </div>
            <div className="chat-body">
              {selectedChat.chat.map((c, index) => (
                <div
                  key={index}
                  className={`chat-message ${c.sender === "You" ? "sent" : "received"}`}
                >
                  <p>{c.text}</p>
                  <span className="chat-time">{c.time}</span>
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input type="text" placeholder="Type a message..." />
              <button>Send</button>
            </div>
          </>
        ) : (
          <div className="empty-chat">
            <p>Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentMessages;
