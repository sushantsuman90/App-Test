import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Button, Text, TouchableRipple} from 'react-native-paper';
import {BlurView} from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  heading: string;
  text: string;
  icon: string;
  buttonName: string;
  onButtonPress: () => void;
  onMoreDetailsPress: () => void;
}

export default function PosterCard(props: Props) {
  return (
    <View className="w-[350px] flex-col">
      <View className="m-4 rounded-3xl overflow-hidden">
        <Image source={require('../assets/image3.jpg')} />
        <View style={styles.overlay}>
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={50}
            reducedTransparencyFallbackColor="white"
          />
          <View className="flex-row items-center justify-between w-[250px] m-1">
            <Text>{props.heading}</Text>
            <TouchableRipple>
              <View className="px-1 bg-white flex-row justify-center items-center rounded">
                <Icon name="share" size={20} className="text-blue text-xs" />
                <Text className="m-1 text-blue text-xs">Share</Text>
              </View>
            </TouchableRipple>
          </View>
          <Text>{props.text}</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-2 justify-center">
        <Button
          mode="contained"
          className="bg-blue rounded-2xl items-center justify-center p-1 px-2"
          onPress={props.onButtonPress}
          icon={() => <Icon name={props.icon} size={20} color="white" />}>
          {props.buttonName}
        </Button>
        <Button
          mode="contained"
          className="bg-blue rounded-2xl p-1 px-2"
          onPress={props.onMoreDetailsPress}>
          More Details
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  absolute: {
    width: 500,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
});
