// src/pages/UserChats.jsx
import React, { useState } from "react";
import { agents_list } from "../../../User_Data";
import "./UserChats.css";

const UserChats = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [chatMessages, setChatMessages] = useState({});
  const [chatInput, setChatInput] = useState("");

  const handleSelectAgent = (agent) => {
    setSelectedAgent(agent);
  };

  const handleSendMessage = () => {
    if (!chatInput.trim() || !selectedAgent) return;

    const newMessage = { text: chatInput, sender: "user" };
    setChatMessages((prev) => ({
      ...prev,
      [selectedAgent.id]: [...(prev[selectedAgent.id] || []), newMessage],
    }));

    setChatInput("");
  };

  return (
    <div className="userchats-container">
      {/* LEFT PANEL - Agent List */}
      <div className="agents-list">
        <h3>Available Agents</h3>
        {agents_list.map((agent) => (
          <div
            key={agent.id}
            className={`agent-card ${
              selectedAgent?.id === agent.id ? "active" : ""
            }`}
            onClick={() => handleSelectAgent(agent)}
          >
            <img src={agent.image} alt={agent.name} />
            <div>
              <p className="agent-name">{agent.name}</p>
              <p className="agent-location">{agent.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT PANEL - Chat Area */}
      <div className="chat-area">
        {selectedAgent ? (
          <>
            <div className="chat-header">
              <img src={selectedAgent.image} alt={selectedAgent.name} />
              <div>
                <p className="agent-name">{selectedAgent.name}</p>
                <p className="agent-location">{selectedAgent.location}</p>
              </div>
            </div>

            <div className="chat-messages">
              {(chatMessages[selectedAgent.id] || []).map((msg, idx) => (
                <div key={idx} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </>
        ) : (
          <div className="no-chat">Select an agent to start chatting</div>
        )}
      </div>
    </div>
  );
};

export default UserChats;
