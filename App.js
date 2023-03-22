import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartMenuScreen  from './screens/StartMenuScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const[userNumber, setUserNumber] = useState();
  const[gameIsOver, setGameIsOver] = useState(true);
  const[guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function choosenNumberHandler(chosenNumber) {
    setUserNumber(chosenNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() { //set these states once user pressed New Game
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartMenuScreen onChooseNumber={choosenNumberHandler}/>;

  if (userNumber) {
    screen = (<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) { //shows Game Over screen if condition is true
    screen = (
      <GameOverScreen 
              userNumber={userNumber} 
              roundsNumber={guessRounds} 
              onStartNewGame={startNewGameHandler} 
              />
    );
  }

  return (
    <LinearGradient 
      colors={['rgb(206,26,15)', 'rgb(255,255,255)', 'rgb(15,17,206)']} 
      style={styles.rootScreen}
     >
      <ImageBackground 
        source={require('./assets/images/background.jpg')} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
