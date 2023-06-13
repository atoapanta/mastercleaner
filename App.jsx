import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Home from './src/screens/Home';
import Register from './src/screens/Register';

const App = () => {
  const [currentView, setCurrentView] = useState('register');
  const [currentScreen, setCurrentScreen] = useState('home');

  const goToHome = () => {
    setCurrentScreen('home');
  };

  const goToRegister = () => {
    setCurrentScreen('register');
  };

  const renderScreen = () => {
    if (currentScreen === 'home') {
      return <Home />;
    } else if (currentScreen === 'register') {
      return <Register />;
    }
  };

  return (
    <View>
      <Button title="Go to Home" onPress={goToHome} />
      <Button title="Go to Register" onPress={goToRegister} />
      {renderScreen()}
    </View>
  );
};

export default App;
