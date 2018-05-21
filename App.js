import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Constants } from 'expo'
import { createStackNavigator } from 'react-navigation'

import MenuItem from './components/MenuItem'
import items from './data/items'

class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {items.map((item, index) => (
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('BancoSangre')}
            underlaycolor="white"
            style={{height:100}}
            key={index}
          >
            <MenuItem {...item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

class BancoSangreScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Banco de Sangre</Text>
      </View>
    )
  }
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    marginTop: Constants.statusBarHeight
  },
});
