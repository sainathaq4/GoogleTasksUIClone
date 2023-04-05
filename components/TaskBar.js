import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import AddTask from './Modals/AddTask';
import IconComponent from './IconComponent';

const TaskBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {visible ? (
        <>
          <AddTask visible={visible} setVisible={setVisible} />
        </>
      ) : (
        <View style={styles.container}>
          <View style={styles.iconOuterContainer}>
            <IconComponent name="th-list" size={25} />
            <IconComponent name="sort" size={25} />
            <IconComponent name="ellipsis-h" size={25} />
          </View>
          <View style={styles.addTaskView}>
            <View style={styles.addTaskInnerView}>
              <Pressable
                style={({pressed}) => (pressed ? [styles.pressed] : null)}
                onPress={() => {
                  setVisible(!visible);
                }}>
                <Icon name="plus" size={25} color="#4d4d4d" />
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '14%',
    backgroundColor: '#b3b3b3',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  iconOuterContainer: {
    margin: 12,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
  },
  pressed: {
    opacity: 0.7,
  },
  iconInnerContainer: {
    margin: 10,
    padding: 4,
  },
  addTaskView: {
    margin: 25,
    width: '30%',
    height: '30%',
    alignItems: 'flex-end',
  },
  addTaskInnerView: {
    backgroundColor: '#999999',
    borderRadius: 5,
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TaskBar;
