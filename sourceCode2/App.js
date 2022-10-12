import {useState, useCallback} from 'react';
import { Text, View, StyleSheet, FlatList, Image, Button, Pressable} from 'react-native';
import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lab01 from './components/Lab01';
import Lab02 from './components/Lab02';
// import { v4 } from 'uuid';

const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lab01"
        component={Lab01}
        options={{ title: 'ToDoApp', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
      <Stack.Screen
        name="Lab02"
        component={Lab02}
        options={{ title: 'Lab02 - MockAPI', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}