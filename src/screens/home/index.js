import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function index({route, navigation}) {
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
