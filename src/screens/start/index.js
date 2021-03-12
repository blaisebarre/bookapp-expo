import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function index({navigation}) {
    return (
        <View style={styles.container}>
            {<Button onPress={() => navigation.navigate('index', {button: 'ok'})} title={"Ok !"} />}
            {<Button onPress={() => navigation.navigate('index', {button: 'pas ok'})} title={"Pas Ok !"} />}
            <StatusBar style="auto" />
        </View>
    );
}
