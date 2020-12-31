import React from 'react';
import { StyleSheet, View, StatusBar , Text, Button} from 'react-native';



export default function Onboarding({navigation}) {
        
  return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Button title="GET STARTED" onPress = {() => navigation.navigate('Login')}></Button>
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
