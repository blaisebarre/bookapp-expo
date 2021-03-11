import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function start({navigation}) {
    return (
        <View style={styles.container}>
            {<Button onPress={() => navigation.navigate('home', {button: 'ok'})} title={"Ok !"} />}
            {<Button onPress={() => navigation.navigate('home', {button: 'pas ok'})} title={"Pas Ok !"} />}
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
