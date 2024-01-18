import {Surface} from 'react-native-paper';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import TopBar from '../components/TopBar';

interface NavigationProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'SchemeMoreDetails'
  >;
}

export default function SchemeMoreDetails({navigation}: NavigationProps) {
  return (
    <Surface style={styles.container}>
      <TopBar navigation={navigation} title="More Details" />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
