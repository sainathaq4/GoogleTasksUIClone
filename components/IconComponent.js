import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconComponent = ({name, size, onPress}) => {
  return (
    <View style={styles.iconInnerContainer}>
      <Pressable
        style={({pressed}) => (pressed ? [styles.pressed] : null)}
        onPress={onPress}>
        <Icon name={name} size={size} color="#4d4d4d" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  iconInnerContainer: {
    margin: 10,
    padding: 4,
  },
});

export default IconComponent;
