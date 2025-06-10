import React from "react";
import "./App.css";
import logo from "./chatvn.´jpg"; 

function App() {
  return (
    <div className="chatContainer">
      <header className="chatHeader">
        <img src={logo} alt="vn chat logo" className="chatLogo" />
        <h1 className="chatTitle">vn chat</h1>
      </header>

      <aside className="sidebar">
        <div className="currentUser">
          <div className="avatar">👩</div>
          <span>Usuario</span>
        </div>
        <ul className="chatList">
          <li className="chatItem active">General</li>
          <li className="chatItem">Amigos</li>
          <li className="chatItem">Grupo</li>
        </ul>
      </aside>

      <main className="chatArea">
        <div className="messages">
          <div className="message incoming">¡Hola! ¿Cómo estás?</div>
          <div className="message outgoing">¡Hola! Todo bien, ¿y tú?</div>
        </div>

        <div className="messageInput">
          <input type="text" placeholder="Escribe un mensaje..." />
          <button>Enviar</button>
        </div>
      </main>
    </div>
  );
}

export default App;
