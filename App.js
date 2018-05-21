import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Constants } from 'expo'

import MenuItem from './components/MenuItem'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {items.map((item, index) => (
          <MenuItem {...item} key={index}/>
        ))}
      </ScrollView>
    );
  }
}

const items = [
  {
    title: 'Banco de Sangr',
    description: 'Lorem ipsum dolor sit amet',
    path: require('./assets/img/logo-banco-sangre.png')
  },
  {
    title: 'Emergencia Hospitalaria',
    description: 'Lorem ipsum dolor sit amet',
    path: require('./assets/img/logo-banco-sangre.png')    
  },
  {
    title: 'Emergencia Hospitalaria',
    description: 'Lorem ipsum dolor sit amet',
    path: require('./assets/img/logo-banco-sangre.png')    
  },
  {
    title: 'Emergencia Hospitalaria',
    description: 'Lorem ipsum dolor sit amet',
    path: require('./assets/img/logo-banco-sangre.png')    
  },
  {
    title: 'Emergencia Hospitalaria',
    description: 'Lorem ipsum dolor sit amet',
    path: require('./assets/img/logo-banco-sangre.png')    
  }
]


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    marginTop: Constants.statusBarHeight
  },
});
