import React, { Component } from 'react';
import { Button, View, Text, Alert, StyleSheet, TouchableOpacity,  } from 'react-native';

class AnyButton extends Component {
  render() {
    return <Button title={this.props.myTitle} color={this.props.myColor} />;
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={() => alert('Play Sound 1')} style={{backgroundColor:'#09F1C0', margin:'7.5px', padding:'7.5px'}}>
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Play Sound 2')} style={{backgroundColor:'#718391', margin:'7.5px', padding:'7.5px'}}>
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Play Sound 3')} style={{backgroundColor:'#3A8774', margin:'7.5px', padding:'7.5px'}}>
        <Text style={styles.buttonText}>Button 3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Play Sound 4')} style={{backgroundColor:'#0982DB', margin:'7.5px', padding:'7.5px'}}>
        <Text style={styles.buttonText}>Button 4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Play Sound 5')} style={{backgroundColor:'#21098A', margin:'7.5px', padding:'7.5px'}}>
        <Text style={styles.buttonText}>Button 5</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A8A8A8',
    display: 'flex',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Bell MT',
    fontSize: '20px',
  },
});
