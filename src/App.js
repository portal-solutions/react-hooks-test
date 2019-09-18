import React, { createContext, useContext, useState } from 'react';
import './App.css';

const GreetingContext = createContext();
const MessageContext = createContext();

function App() {
  const [ greeting, setGreeting ] = useState();
  const [ message, setMessage ] = useState();
  const [ salutation, setSalutation ] = useState();
  const [ title, setTitle ] = useState();

  const greetingContext = {
    greeting, setGreeting,
    salutation, setSalutation
  };

  const messageContext = {
    message, setMessage,
    title, setTitle,
  };

  return (
    <MessageContext.Provider value={ messageContext }>
      <GreetingContext.Provider value={ greetingContext }>
        <div className="App">
          <Greeting></Greeting>
          <Message></Message>
        </div>
      </GreetingContext.Provider>
    </MessageContext.Provider>
  );
}

function Greeting() {
  const { greeting, salutation } = useContext(GreetingContext);
  const { setMessage, setTitle } = useContext(MessageContext);

  setMessage('message');
  setTitle('title');

  return (<p>Greeting: { greeting } { salutation }</p>);
}

function Message() {
  const { setGreeting, setSalutation } = useContext(GreetingContext);
  const { message, title } = useContext(MessageContext);

  setGreeting('greeting');
  setSalutation('salutation');

  return (<p>Message: { message } { title }</p>);
}

export default App;
