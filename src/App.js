import React, { createContext, useContext, useState } from 'react';
import './App.css';

const GreetingContext = createContext();
const MessageContext = createContext();

function App() {
  const [ greeting, setGreeting ] = useState();
  const [ message, setMessage ] = useState();
  const [ salutations, setSalutations ] = useState();
  const [ title, setTitle ] = useState();

  const greetingContext = {
    greeting, setGreeting,
    salutations, setSalutations
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
  const { greeting, salutations } = useContext(GreetingContext);
  const { setMessage, setTitle } = useContext(MessageContext);

  setMessage('message');
  setTitle('title');

  return (<p>Greeting: { greeting } { salutations }</p>);
}

function Message() {
  const { setGreeting, setSalutations } = useContext(GreetingContext);
  const { message, title } = useContext(MessageContext);

  setGreeting('greeting');
  setSalutations([ 'salutation' ]);

  return (<p>Message: { message } { title }</p>);
}

export default App;
