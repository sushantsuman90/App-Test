import {Surface, Text, Appbar} from 'react-native-paper';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {StyleSheet} from 'react-native';

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LiveStream'>;
}

export default function LiveStreamScreen({navigation}: NavigationProps) {
  return (
    <Surface style={styles.container}>
      <Appbar>
        <Appbar.Action icon="chevron-left" onPress={() => navigation.pop()} />
        <Appbar.Content title="Edit Profile" />
      </Appbar>
      <Text>LiveStreamScreen</Text>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
