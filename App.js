import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Constants } from 'expo'
import { createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

import MenuItem from './components/MenuItem'
import items from './data/items'

import BancoSangreScreen from './screens/BancoSangreScreen'
import ContactoScreen from './screens/ContactoScreen'
import HomeScreen from './screens/HomeScreen'

const RootStack = createStackNavigator (
  {
    Home: HomeScreen,
    BancoSangre: BancoSangreScreen
  },
  {
    InitialRouteName: 'Home'
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack/>
  }
}


