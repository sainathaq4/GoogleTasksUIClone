import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './screens/Home';
import Star from './screens/Star';
import Icon from 'react-native-vector-icons/Ionicons';
import Title from './components/Title';
import TaskBar from './components/TaskBar';

const Tab = createMaterialTopTabNavigator();
function App() {
  return (
    <SafeAreaView style={styles.view}>
      <Title title="Tasks" fontSize={22} />
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Star">
          <Tab.Screen
            name="Star"
            component={Star}
            options={{title: () => <Icon name="star" size={16} />}}
          />
          <Tab.Screen
            name="Home"
            component={Home}
            options={{title: () => <Title title="My Tasks" fontSize={18} />}}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <TaskBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default App;
