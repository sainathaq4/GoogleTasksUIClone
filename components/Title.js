import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Title = ({title, fontSize}) => {
  return (
    <View>
      <Text style={[styles.text, {fontSize: fontSize}]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Title;
