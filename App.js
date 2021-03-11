import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
    const [ isPressed, setIsPressed ] = useState(false);
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app! </Text>
            <Text>Hey je viens de changer ma page App.js !!</Text>
            {isPressed && <Text>Bouton enclenché !</Text>}
            {!isPressed && <Button onPress={() => setIsPressed(true)} title={"Appuyez !"} />}
            {isPressed && <TouchableOpacity onPress={() => setIsPressed(false)}><Text style={styles.button}>Réappuyez !!</Text></TouchableOpacity>}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        color: "#65abf6",
        fontSize: 20
    }
});
