import React from 'react';
import { Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import Navigation from './navigation/';

import {Images} from './constants/';

const assetImages = [
    Images.logo,
    Images.Onboarding,
    
];

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } 
        else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

export default class Main extends React.Component 
{
    state = {
        isLoadingComplete: false,
        fontLoaded: false
    };

    render() {
        if (!this.state.isLoadingComplete) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } 
        else {
            return (
                <Navigation/>
            );
        }
    }
    
    _loadResourcesAsync = async () => {
        await Font.loadAsync({
            'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
            'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
            'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
            'Voltaire-Regular': require('./assets/fonts/Voltaire-Regular.ttf'),
        });

        this.setState({ fontLoaded: true });
        return Promise.all([...cacheImages(assetImages)]);
    };

    _handleLoadingError = error => {
        console.warn(error);
    };

    _handleFinishLoading = () => {
        if (this.state.fontLoaded) {
            this.setState({ isLoadingComplete: true });
        }
    };
}