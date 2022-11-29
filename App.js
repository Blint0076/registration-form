//import React from "react";
//import React, { Component } from 'react';
//import { Alert, Button, ImageBackground, Text, TextInput, StyleSheet, SafeAreaView, UIManager, View } from 'react-native';

import React from 'react';
import { Alert, Image, ImageBackground, StyleSheet, ScrollView, SafeAreaView, Text, } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import UserForm from './UserForm';


SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);


<ImageBackground
source = {require("./assets/foodBackground.jpg")}
style = {{width: '100%', height: '100%' }}>
</ImageBackground>

const App = () => (
  <SafeAreaView style={styles.main}>
    <Text style={styles.toolbar}>
    <Image source={require('./assets/chef.png')}
           style={{ width: 60, height: 60 }}/>
          {'  '}Cookin' 4 Urself!</Text>
    <ScrollView style={styles.content}>
      <UserForm />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    color: '#f2f4f3',
    backgroundColor: '#a9927d',
    padding: 20,
  },
  toolbar: {
    backgroundColor: '#0a0908',
    padding: 25,
    color: '#f2f4f3',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
    textShadowRadius: 20,
    textShadowColor: '#a9927d',
    textShadowOffset: {width: 2, height: 2},
    marginBottom: 10,
    paddingBottom: 10,
  },
  content: {
    backgoundcolor: '#f2f4f3',
    padding: 10,
    color: '#000000',
  },
});

export default App;
