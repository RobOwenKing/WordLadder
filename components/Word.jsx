import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    <View>{wordToLetters()}</View>
  );
};

export default Word;
