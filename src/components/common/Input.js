import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, onChangeText }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={{ height: 20, width: 100 }}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export { Input };
