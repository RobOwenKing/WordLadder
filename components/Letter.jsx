import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Letter = ({letter}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{letter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 36,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    margin: 2
  },
  text: {
    margin: 0,
    textAlign: 'center',
    fontSize: 32,
    textTransform: 'uppercase'
  },
})

export default Letter;
