import {View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TopAppBar from '../components/TopAppBar';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreenTab from './tabs/HomeScreenTab';
import HighlightScreen from './tabs/HighlightScreen';
import SchemeScreen from './tabs/SchemeScreen';
import AttractionScreen from './tabs/AttractionScreen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

const Tab = createBottomTabNavigator();

export interface HomeScreenProp {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
}

const HomeScreen = ({navigation}: HomeScreenProp) => {
  return (
    <View>
      <TopAppBar navigation={navigation} />
      <View className="h-[93vh]">
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="Home"
            component={HomeScreenTab}
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

export default HomeScreen;
