import React from 'react';
import { View, StyleSheet } from 'react-native';

import Letter from './Letter';

const Word = ({word}) => {
  const wordToLetters = () => {
    const returnable = [];

    for (let i = 0; i < word.length; i += 1) {
      returnable.push(<Letter key={i} letter={word[i]} />);
    }

    return returnable;
  };

  return (
    <View style={styles.word}>{wordToLetters()}</View>
  );
};

const styles = StyleSheet.create({
  word: {
    display: 'flex',
    flexDirection: 'row'
  },
})

export default Word;
