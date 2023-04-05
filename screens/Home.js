/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet,View} from 'react-native';
import TaskComponent from '../components/TaskComponent';
const Home = () => {
    return (
        <View style={styles.view}>

        <ScrollView style={styles.view}>
           <TaskComponent/>
           <TaskComponent/>
           <TaskComponent/>
           <TaskComponent/>
           <TaskComponent/>
           <TaskComponent/>
           <TaskComponent/>
           <TaskComponent/>
           <TaskComponent/>
           <TaskComponent/>
           <TaskComponent/>
           <TaskComponent/>
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
});

export default Home;
