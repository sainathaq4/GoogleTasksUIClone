import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
const TaskComponent = () => {
  const [check, setChecked] = useState(false);
  const [starred, setStarred] = useState(false);
  const handleStarred = () => {
    setStarred(!starred);
  };
  return (
    <View style={styles.view}>
      <View style={styles.checkboxView}>
        <BouncyCheckbox
          fillColor="black"
          innerIconStyle={styles.checkbox}
          isChecked={check}
          onPress={e => {
            setChecked(e);
          }}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}> More than Some text aaaaaaaaaaaa</Text>
      </View>
      <View style={styles.iconView}>
        <Pressable onPress={handleStarred}>
          {starred ? (
            <Icon name="star" size={18} />
          ) : (
            <Icon name="star-outline" size={18} />
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    // justifyContent: 'flex',
  },
  textView: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 16,
  },
  checkboxView: {
    // flex: 0.8,
    alignItems: 'flex-start',
  },
  iconView: {
    alignItems: 'flex-end',
    flex: 1,
  },
  checkbox: {borderColor: 'black'},
});

export default TaskComponent;
