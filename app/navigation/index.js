import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawerContent from './Menu';

import {AuthContext} from '../context/AuthContext';
import {Config, Theme } from '../constants/';

import Onboarding from '../screen/Onboarding';
import Login from '../screen/auth/Login';
import Dashboard from '../screen/dashboard/';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

export default function Navigation() {
    const [authContext, setAuthContext] = React.useState(null);    
    return (
        <AuthContext.Provider value={[authContext, setAuthContext]}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="AuthStack" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="AuthStack" component={AuthStack} />
                    <Stack.Screen name="AppStack" component={AppStack} />        
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

function AuthStack()
{
    return(
        <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />        
        </Stack.Navigator>
    );
}

function AppStack()
{
    return(
        <Stack.Navigator initialRouteName="MainDrawer" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainDrawer" component={MainDrawer} />
        </Stack.Navigator>
    );
}

function MainDrawer()
{
    return(
        <Drawer.Navigator 
            initialRouteName="Dashboard"
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerStyle ={{
                width: Theme.window.width * 0.8,
                backgroundColor : Theme.colors.white
            }}
            drawerContentOptions={{
                activeBackgroundColor: Theme.colors.primary,
                activeTintColor: Theme.colors.white,
                inactiveTintColor: Theme.colors.primary,
                itemStyle: {
                    width: Theme.window.width * 0.75,
                    marginVertical:4
                },
                labelStyle: {
                    fontSize: 16,
                    marginLeft: 12,
                    fontWeight: "normal",
                    fontFamily: 'Voltaire-Regular',
                }
            }}

        >
            <Drawer.Screen name="DashboardStack" component={DashboardStack} options={{ title: 'Dashboard' }}/>

        </Drawer.Navigator>
    );
}

function DashboardStack(props){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} 
            options={{ 
                title: 'Dashboard' ,
                headerTintColor: Theme.colors.primary,
                headerStyle: {
                    backgroundColor: Theme.colors.white,
                },
                headerTitleStyle: {
                    fontFamily: 'Voltaire-Regular',
                },
                headerLeft: ()=> <Ionicons name="md-menu" size={25} color={Theme.colors.primary} style={{ width: 25, height: 25, marginLeft: 10 }} onPress = {() => props.navigation.toggleDrawer() }/>,
                
                
            }}
            
            />
        </Stack.Navigator>
    );
}
