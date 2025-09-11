import React, { useState } from "react"
import "./AdminMessages.css"

const AdminMessages = () => {
  const [selectedChat, setSelectedChat] = useState(null)
  const [tickets, setTickets] = useState([
    { id: 1, user: "John Doe", issue: "Payment not reflecting", status: "Open" },
    { id: 2, user: "Agent Mike", issue: "Listing rejected", status: "In Progress" },
    { id: 3, user: "Sarah", issue: "Scam report", status: "Resolved" },
  ])

  const [faqs, setFaqs] = useState([
    { q: "How do I list a property?", a: "Go to 'Add Property' in dashboard." },
    { q: "How do I reset my password?", a: "Use the forgot password link on login page." },
  ])

  return (
    <div className="admin-messages-container">
      <h2>Messages & Support</h2>

      {/* Analytics Summary */}
      <div className="summary-cards">
        <div className="card">Open Tickets: 12</div>
        <div className="card">Resolved: 45</div>
        <div className="card">Avg Response: 2hrs</div>
      </div>

      <div className="messages-support-grid">
        {/* Chats */}
        <div className="chat-section">
          <h3>Agent-User Messages</h3>
          <div className="chat-list">
            <p onClick={() => setSelectedChat("Chat with John")}>Chat with John Doe</p>
            <p onClick={() => setSelectedChat("Chat with Agent Mike")}>Chat with Agent Mike</p>
          </div>
          <div className="chat-window">
            {selectedChat ? (
              <div>
                <h4>{selectedChat}</h4>
                <div className="chat-box">
                  <p><b>John:</b> Hello Admin!</p>
                  <p><b>Admin:</b> How can I assist you?</p>
                </div>
                <input type="text" placeholder="Type a reply..." />
              </div>
            ) : (
              <p>Select a chat to view messages</p>
            )}
          </div>
        </div>

        {/* Support Tickets */}
        <div className="ticket-section">
          <h3>Support Tickets</h3>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Issue</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((t) => (
                <tr key={t.id}>
                  <td>{t.user}</td>
                  <td>{t.issue}</td>
                  <td>
                    <span className={`status ${t.status.toLowerCase()}`}>{t.status}</span>
                  </td>
                  <td>
                    <button>View</button>
                    <button className="danger">Close</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQs */}
        <div className="faq-section">
          <h3>FAQs & Help</h3>
          <ul>
            {faqs.map((f, i) => (
              <li key={i}>
                <b>{f.q}</b>
                <p>{f.a}</p>
              </li>
            ))}
          </ul>
          <button>Add FAQ</button>
        </div>
      </div>
    </div>
  )
}

export default AdminMessages
