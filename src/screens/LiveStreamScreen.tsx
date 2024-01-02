import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LiveStream'>;
}

export default function LiveStreamScreen({}: NavigationProps) {
  return (
    <View>
      <Text>LiveStreamScreen</Text>
    </View>
  );
}
