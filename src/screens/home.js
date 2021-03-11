import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function home({route, navigation}) {
    const { button } = route.params ;
    return (
        <View style={styles.container}>
            <Text>Vous avez cliqué sur {button}</Text>
            <Button
                title="Retour au début"
                onPress={() => navigation.navigate('start')}
              />
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
