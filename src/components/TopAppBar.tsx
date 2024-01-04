import {View} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import React from 'react';
import {HomeScreenProp} from '../screens/HomeScreen';

export default function TopAppBar({navigation}: HomeScreenProp) {
  return (
    <View className="h-[7vh] flex-row justify-between items-center bg-blue">
      <IconButton
        icon="account-circle"
        iconColor="#fff"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <Text className="text-white">KMC</Text>
      <IconButton
        icon="magnify"
        iconColor="#fff"
        onPress={() => navigation.navigate('HomeScreenSearch')}
      />
    </View>
  );
}
