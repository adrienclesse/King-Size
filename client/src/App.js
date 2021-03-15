import React from 'react';
import LoginForm from './LoginForm';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import Navbar from './Components/Navbar/Navbar'
import './App.css';


class  App extends React.Component {
    

  render() {
    return (
    <div className="app">
      <Navbar />
      <h1>Language exchange app</h1>
      <p>Welcome to our website : here, people team up and make activites to learn a language toegether as a community.  People can meet toether to take an online quiz and meet in real live event"</p>
    </div>
  );
}
}

export default App;
