import React from 'react';
import {Text, Avatar} from 'react-native-paper';
import {View} from 'react-native';

export default function RaiseIssueTopAppBar() {
  return (
    <View className="p-5 flex-row gap-4 items-center">
      <Avatar.Image
        size={36}
        source={require('../image/kmc_logo.png')}
        className="rounded-none"
      />
      <Text className="text-2xl font-bold text-blue">Ward 111</Text>
    </View>
  );
}
