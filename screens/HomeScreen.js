import React from 'react'
import { View, Text } from 'react-native'

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