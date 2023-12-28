import {Text, IconButton} from 'react-native-paper';
import {View} from 'react-native';
import React from 'react';

interface Props {
  onClick: () => void;
  heading: string;
}

export default function RaiseIssueModalHeading(props: Props) {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-xl text-blue">{props.heading}</Text>
      <IconButton icon="close" onTouchStart={props.onClick} />
    </View>
  );
}
