import {View} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import React from 'react';

interface Props {
  navigation: any;
  title: string;
}

export default function TopBar({navigation, title}: Props) {
  return (
    <View className="flex-row items-center my-4">
      <IconButton icon="chevron-left" onPress={() => navigation.pop()} />
      <Text className="text-xl">{title}</Text>
    </View>
  );
}
