import {View} from 'react-native';
import React from 'react';
import {IconButton, Text, TouchableRipple} from 'react-native-paper';

interface SocialIconInterface {
  icon: string;
  text: string;
}

export default function SocialIcon(props: SocialIconInterface) {
  return (
    <TouchableRipple>
      <View className="flex justify-center items-center">
        <IconButton icon={props.icon} />
        <Text>{props.text}</Text>
      </View>
    </TouchableRipple>
  );
}
