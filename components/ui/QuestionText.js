import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function QuestionText({ children, style }) {
    return <Text style={[styles.questionText, style]}>{children}</Text>;
}

export default QuestionText;

const styles = StyleSheet.create({
    questionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24,
    },
});