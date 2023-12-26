import {View} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import React from 'react';

export default function TopAppBar() {
  return (
    <View className="h-[7vh] flex-row justify-between items-center bg-blue">
      <IconButton icon="account-circle" iconColor="#fff" />
      <Text className="text-white">KMC</Text>
      <IconButton icon="magnify" iconColor="#fff" />
    </View>
  );
}
