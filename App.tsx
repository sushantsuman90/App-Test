/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopAppBar from './src/components/TopAppBar';

import HomeScreen from './src/screens/HomeScreen';
import AttractionScreen from './src/screens/AttractionScreen';
import HighlightScreen from './src/screens/HighlightScreen';
import SchemeScreen from './src/screens/SchemeScreen';

import RaiseIssue from './src/screens/RaiseIssue';
import RaiseIssueMapSelector from './src/screens/RaiseIssueMapSelector';
import HomeScreenSearch from './src/screens/HomeScreenSearch';
import EditProfile from './src/screens/ProfileEditScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// import Icon1 from 'react-native-vector-icons/AntDesign'

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="home">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="raise-issue" component={RaiseIssue} />
          <Stack.Screen
            name="raise-issue-map-selector"
            component={RaiseIssueMapSelector}
          />
          <Stack.Screen
            name="home-screen-search"
            component={HomeScreenSearch}
          />
          <Stack.Screen name="edit-profile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const Home = () => {
  return (
    <View>
      <TopAppBar />
      <View className="h-[93vh]">
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: () => <Icon name="bell" color="#3E3E3E" size={20} />,
            }}
          />
          <Tab.Screen
            name="Highlights"
            component={HighlightScreen}
            options={{
              tabBarIcon: () => <Icon name="home" size={20} color="#3E3E3E" />,
            }}
          />

          <Tab.Screen
            name="Scheme"
            component={SchemeScreen}
            options={{
              tabBarIcon: () => <Icon name="home" size={20} color="#3E3E3E" />,
            }}
          />

          <Tab.Screen
            name="Attraction"
            component={AttractionScreen}
            options={{
              tabBarIcon: () => <Icon name="home" size={20} color="#3E3E3E" />,
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   // sectionContainer: {
//   //   marginTop: 32,
//   //   paddingHorizontal: 24,
//   // },
//   // sectionTitle: {
//   //   fontSize: 24,
//   //   fontWeight: '600',
//   // },
//   // sectionDescription: {
//   //   marginTop: 8,
//   //   fontSize: 18,
//   //   fontWeight: '400',
//   // },
//   // highlight: {
//   //   fontWeight: '700',
//   // },
// });

export default App;
