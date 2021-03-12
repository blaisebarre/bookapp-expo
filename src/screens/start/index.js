import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
import Header from "../../composants/header";

export default function index({navigation}) {
    return (
        <View style={styles.container}>
            <Header />
            {<Button onPress={() => navigation.navigate('index', {button: 'ok'})} title={"Ok !"} />}
            {<Button onPress={() => navigation.navigate('index', {button: 'pas ok'})} title={"Pas Ok !"} />}
            <StatusBar style="auto" />
        </View>
    );
}
