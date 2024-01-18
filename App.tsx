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
import LiveStreamScreen from './src/screens/LiveStreamScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import MeetAndGreetScreen from './src/screens/MeetAndGreetScreen';
import ConfirmOtp from './src/screens/ConfirmOtp';
import OnboardingScreen from './src/screens/OnboardingScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SavedItems from './src/screens/SavedItems';
import RaisedIssues from './src/screens/RaisedIssues';
import CustomDrawer from './src/components/CustomDrawer';
import BookedAppointments from './src/screens/BookedAppointments';
import RaiseIssueHistoryList from './src/screens/RaisedIssueHistoryList';
import RatingsAndReviews from './src/screens/RatingsAndReviews';
import BugsReviews from './src/screens/BugsReviews';
import AttractionMoreDetails from './src/screens/AttractionsMoreDetails';
import SchemeMoreDetails from './src/screens/SchemeMoreDetails';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export type RootStackParamList = {
  HomeScreen: undefined;
  RaiseIssue: undefined;
  RaiseIssueMapSelector: undefined;
  HomeScreenSearch: undefined;
  EditProfile: undefined;
  LiveStream: undefined;
  Services: undefined;
  MeetAndGreetScreen: undefined;
  ConfirmOtp: undefined;
  OnboardingScreen: undefined;
  SavedItems: undefined;
  RaisedIssues: undefined;
  BookmarkedAppointments: undefined;
  RaiseIssueHistoryList: undefined;
  RaisedIssueView: undefined;
  RatingsAndReviews: undefined;
  BugsReviews: undefined;
  SchemeMoreDetails: undefined;
  AttractionMoreDetails: undefined;
};

function App(): React.JSX.Element {
  return (
    <Provider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="HomeScreen"
          drawerContent={props => <CustomDrawer {...props} />}
          screenOptions={{
            drawerActiveBackgroundColor: '#231E60',
            drawerInactiveBackgroundColor: '#231E60',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
            drawerStyle: {
              width: 300,
            },
          }}>
          <Drawer.Screen
            name="Home"
            component={Root}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function Root() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OnboardingScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RaiseIssue" component={RaiseIssue} />
      <Stack.Screen
        name="RaiseIssueMapSelector"
        component={RaiseIssueMapSelector}
      />
      <Stack.Screen
        name="SavedItems"
        component={SavedItems}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RaisedIssueHistoryList"
        component={RaiseIssueHistoryList}
      />
      <Stack.Screen
        name="RaisedIssueView"
        component={RaisedIssues}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookedAppointments"
        component={BookedAppointments}
        options={{headerShown: false}}
      />
      <Stack.Screen name="HomeScreenSearch" component={HomeScreenSearch} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="LiveStream" component={LiveStreamScreen} />
      <Stack.Screen name="Services" component={ServicesScreen} />
      <Stack.Screen name="MeetAndGreetScreen" component={MeetAndGreetScreen} />
      <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="RatingsAndReviews" component={RatingsAndReviews} />
      <Stack.Screen name="BugsReviews" component={BugsReviews} />
      <Stack.Screen
        name="AttractionMoreDetails"
        component={AttractionMoreDetails}
      />
      <Stack.Screen name="SchemeMoreDetails" component={SchemeMoreDetails} />
    </Stack.Navigator>
  );
}

export default App;
