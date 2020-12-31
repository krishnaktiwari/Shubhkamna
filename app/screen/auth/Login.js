import React from 'react';
import { StyleSheet, View, StatusBar , Text, Button, TextInput, Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../../context/AuthContext';

import {Config, Theme} from '../../constants/';

export default function Login({navigation}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const [authContext, setAuthContext] = React.useContext(AuthContext); 
    
    const loginAction = () =>{
        console.log("HI");
        if(email.length >= 5)
        {
            fetch(Config.url+'authenticate',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            })
            .then((response) => response.json())
            .then((responseJson) =>{
                if(responseJson.hasOwnProperty('auth_token'))
                {
                    
                    AsyncStorage.setItem('loggedUser', JSON.stringify(responseJson));
                    AsyncStorage.setItem('auth_token', responseJson.auth_token)
                    
                    setAuthContext(responseJson);
                    navigation.navigate('AppStack');
                }
                else
                {
                    Alert.alert('Invalid','Invalid Credentials');
                }
            }).catch((error) => {Alert.alert('Error',error);});
        }
        else
        {
            Alert.alert('Invalid','Please enter valid username and password');
        }
    }

        
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor = {Theme.colors.primary} hidden = {false} translucent = {true}/>
            <TextInput placeholder = "Email Id" onChangeText ={text => setEmail(text)} ></TextInput>        
            <TextInput placeholder = "Password" onChangeText ={text => setPassword(text)} ></TextInput>   
            <Button title="Login" onPress = {()=>loginAction()}></Button>
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
