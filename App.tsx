/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Test from './src/screens/Test';
import Icon from 'react-native-vector-icons/FontAwesome'
// import Icon1 from 'react-native-vector-icons/AntDesign'

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  
const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
    <View >
    
    <View className='mt-10 ml-auto mr-auto bg-slate-300'><Text className='text-2xl'>Hello World <Icon name="bell" size={20} color="#3E3E3E"/></Text></View>
    
    <View className='h-[20vh]'>
    <Tab.Navigator>
      <Tab.Screen name="Home" 
      options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" size={20} color="#3E3E3E"/>
          ),
        }} 
        component={Home} />
      <Tab.Screen name="Settings" component={Test}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" size={20} color="#3E3E3E"/>
        ),
      }} 
      />
    </Tab.Navigator>
    </View>
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
