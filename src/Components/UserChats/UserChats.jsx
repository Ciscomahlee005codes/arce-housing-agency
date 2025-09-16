// src/pages/UserChats.jsx
import React, { useState } from "react";
import { agents_list } from "../../../User_Data";
import { IoArrowBack } from "react-icons/io5";
import "./UserChats.css";

const UserChats = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [chatMessages, setChatMessages] = useState({});
  const [chatInput, setChatInput] = useState("");

  const handleSelectAgent = (agent) => {
    setSelectedAgent(agent);
  };

  const handleBack = () => {
    setSelectedAgent(null);
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
    <div className="chat-wrapper">
      {/* LEFT - Agents List */}
      <div
        className={`chat-list-section ${
          selectedAgent ? "hide-on-mobile" : ""
        }`}
      >
        <div className="chat-list">
          <h3>Available Agents</h3>
          {agents_list.map((agent) => (
            <div
              key={agent.id}
              className={`chat-item ${
                selectedAgent?.id === agent.id ? "active" : ""
              }`}
              onClick={() => handleSelectAgent(agent)}
            >
              <img src={agent.image} alt={agent.name} className="chat-avatar" />
              <div className="chat-info">
                <h4>{agent.name}</h4>
                <p>{agent.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT - Chat Window */}
      <div className={`chat-window ${selectedAgent ? "active" : ""}`}>
  {selectedAgent && (
    <div className="chat-window-content">
      <div className="chat-window-header">
        {/* Back button visible on mobile */}
        <IoArrowBack className="back-btn" onClick={handleBack} />
        <img
          src={selectedAgent.image}
          alt={selectedAgent.name}
          className="chat-avatar"
        />
        <div>
          <h3>{selectedAgent.name}</h3>
          <p>{selectedAgent.location}</p>
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
    </div>
  )}
</div>

{/* Empty chat message only visible on desktop */}
{!selectedAgent && <div className="empty-chat">👈 Select an agent to start chatting</div>}
    </div>
  );
};

export default UserChats;
