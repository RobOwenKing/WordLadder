import React from 'react';
import { TextInput } from 'react-native';

import Word from './Word';

const Level = ({ start, target }) => {
  return (
    <>
      <Word word={start} />
      <Word word={target} />
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!" />
    </>
  );
};

export default Level;
