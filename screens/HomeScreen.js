import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

import items from './../data/items'
import MenuItem from './../components/MenuItem'

export default class HomeScreen extends React.Component {
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
      // marginTop: Constants.statusBarHeight
    },
  });