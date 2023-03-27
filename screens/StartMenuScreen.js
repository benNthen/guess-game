import { useState } from 'react';
import { 
    TextInput, 
    View, 
    StyleSheet, 
    Alert, 
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView 
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title.ios';
import Colors from '../constants/colors';
import Card  from '../components/ui/Card';
import QuestionText from '../components/ui/QuestionText';

function StartMenuScreen({onChooseNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
          Alert.alert(
            'Invalid number!', 
            'Number has to be a number between 1 and 99.',
             [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
          return;
        }

        onChooseNumber(chosenNumber);
    }

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
     <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">  
            <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}> 
                <Title>Guess Your Number</Title>  
                <Card>
                    <QuestionText>Enter a Number</QuestionText>
                    <TextInput 
                        style={styles.numberInput} 
                        maxLength={2} 
                        keyboardType="number-pad"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={numberInputHandler}
                        value={enteredNumber}
                    />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                        </View>    
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                        </View>    
                    </View>
                </Card>
            </View>
        </KeyboardAvoidingView> 
    </ScrollView>       
    );
}

export default StartMenuScreen;

//const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create ({
    rootContainer: {
        flex: 1,
        //marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});