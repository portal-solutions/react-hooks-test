import React, { createContext, useContext, useState } from 'react';
import './App.css';

const MessageContext = createContext();

function App() {
  const [ message, setMessage ] = useState();

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      <div className="App">
        <Header></Header>
        <Footer></Footer>
      </div>
    </MessageContext.Provider>
  );
}

function Header() {
  console.debug("<Header> rendering");

  const { message } = useContext(MessageContext);

  return (
    <p>Header: { message }</p>
  );
}

function Footer() {
  console.debug("<Footer> rendering");

  const { setMessage } = useContext(MessageContext);
  setMessage('foo');

  return (<p>Footer</p>);
}

export default App;
