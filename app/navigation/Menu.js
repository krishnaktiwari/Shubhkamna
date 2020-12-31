import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import {AuthContext} from '../context/AuthContext';
import {Config, Theme } from '../constants/';

export default function CustomDrawerContent(props) {
    const [authContext, setAuthContext] = React.useContext(AuthContext);     
    return (
            <View style={styles.container}> 
                <View style={{backgroundColor: Theme.colors.primary, paddingTop : 50,paddingBottom:30}}>
                    <Text style={{fontFamily: 'Poppins-Medium',fontSize:25,color:Theme.colors.white}} >{authContext.user.name}</Text>
                    <Text style={{fontFamily: 'Poppins-Medium',fontSize:15,color:Theme.colors.white}} >{authContext.user.email}</Text>
                </View>
                
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    
                    
                    <DrawerItem labelStyle ={{color: Theme.colors.primary,fontSize: 16, marginLeft: 12,fontFamily: 'Voltaire-Regular'}} label="About Us" onPress={() => props.navigation.navigate('AboutStack')} />
                    
                </DrawerContentScrollView>
                
                <View style={{height: 30, backgroundColor: Theme.colors.primary, alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'Voltaire-Regular',fontSize:10,color:Theme.colors.white}} >All right reserved</Text>
                </View>

            </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
