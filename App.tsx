/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import RaiseIssue from './src/screens/RaiseIssue';
import RaiseIssueMapSelector from './src/screens/RaiseIssueMapSelector';
import HomeScreenSearch from './src/screens/HomeScreenSearch';
import EditProfile from './src/screens/ProfileEditScreen';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  HomeScreen: undefined;
  RaiseIssue: undefined;
  RaiseIssueMapSelector: undefined;
  HomeScreenSearch: undefined;
  EditProfile: undefined;
};

function App(): React.JSX.Element {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="RaiseIssue" component={RaiseIssue} />
          <Stack.Screen
            name="RaiseIssueMapSelector"
            component={RaiseIssueMapSelector}
          />
          <Stack.Screen
            name="HomeScreenSearch"
            component={HomeScreenSearch}
          />
          <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
