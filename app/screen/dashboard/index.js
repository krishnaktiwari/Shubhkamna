import React from 'react';
import { StyleSheet, View, StatusBar , Text, Button} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../../context/AuthContext';

import {Config, Theme} from '../../constants/';

export default function Dashboard() {
        
  return (
        <View style={styles.container}>
            <StatusBar backgroundColor = {Theme.colors.primary} hidden = {false} translucent = {true}/>

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
});
