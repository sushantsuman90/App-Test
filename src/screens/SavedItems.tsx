import {Surface} from 'react-native-paper';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import TopBar from '../components/TopBar';

interface NavigationProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'SavedItems'
  >;
}

export default function SavedItems({navigation}: NavigationProps) {
  return (
    <Surface style={styles.container}>
      <TopBar navigation={navigation} title="Saved Items" />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
