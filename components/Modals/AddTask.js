import React from 'react';
import {
  StyleSheet,
  Modal,
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Title from '../Title';
import IconComponent from '../IconComponent';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const AddTask = ({visible, setVisible}) => {
  const [starred, setStarred] = React.useState(false);
  const [isExpanded, setExpanded] = React.useState(false);
  const [calendar, showCalendar] = React.useState(false);
  const showDatePicker = () => {
    showCalendar(true);
  };
  const hideDatePicker = () => {
    showCalendar(false);
  };
  const handleExpanded = () => {
    setExpanded(!isExpanded);
  };
  const handleStarred = () => {
    setStarred(!starred);
  };

  const close = () => {
    setVisible(false);
  };
  return (
    <>
      <Modal onRequestClose={close} visible={visible} transparent={true}>
        <DateTimePickerModal
          isVisible={calendar}
          mode="datetime"
          onConfirm={() => {}}
          onCancel={hideDatePicker}
        />

        <KeyboardAvoidingView
          style={styles.keyBoardView}
          keyboardVerticalOffset={60}
          behavior="padding">
          <View style={styles.container}>
            <View
              style={
                isExpanded
                  ? [
                      styles.innerContainer,
                      {height: Platform.OS === 'android' ? '30%' : '25%'},
                    ]
                  : styles.innerContainer
              }>
              <View style={styles.marginContainer}>
                <View style={styles.title}>
                  <Title title="My Tasks" fontSize={23} />
                </View>
                <View style={styles.textInput}>
                  <TextInput placeholder="New Task" style={styles.textInput} />
                  {isExpanded ? (
                    <TextInput
                      placeholder="Add Details"
                      style={styles.textInput}
                    />
                  ) : null}
                </View>
                <View style={styles.iconContainer}>
                  <IconComponent
                    name="expand"
                    size={25}
                    onPress={handleExpanded}
                  />
                  <IconComponent
                    name="calendar"
                    size={21}
                    onPress={showDatePicker}
                  />
                  {starred ? (
                    <IconComponent
                      name="star"
                      size={25}
                      onPress={handleStarred}
                    />
                  ) : (
                    <IconComponent
                      name="star-o"
                      size={25}
                      onPress={handleStarred}
                    />
                  )}
                  <View style={styles.closeSaveButtons}>
                    <IconComponent name="close" size={25} onPress={close} />
                    <Pressable
                      style={({pressed}) => (pressed ? styles.pressed : null)}>
                      <Text style={styles.saveButton}>Save</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  keyBoardView: {
    flex: 1,
    backgroundColor: '#b3b3b3',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  marginContainer: {
    margin: 20,
  },
  innerContainer: {
    width: '100%',
    height: Platform.OS === 'android' ? '30%' : '20%',
    backgroundColor: '#b3b3b3',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  title: {
    alignItems: 'flex-start',
  },
  textInput: {
    paddingTop: 10,
    fontSize: 20,
  },
  iconContainer: {
    margin: 12,
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'flex-start',
  },
  pressed: {
    opacity: 0.7,
  },
  closeSaveButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  saveButton: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default AddTask;
