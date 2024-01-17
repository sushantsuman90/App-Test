import {Surface, Text, TouchableRipple, IconButton} from 'react-native-paper';
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

interface NavigationProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'RaiseIssueHistoryList'
  >;
}

interface Issues {
  issueName: string;
  status: 'resolved' | 'pending' | 'cancel';
  date: string;
}

export default function RaisedIssueHistory({navigation}: NavigationProps) {
  const capitalizeFirstWord = (str: any) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <Surface style={styles.container}>
      <View className="flex-row items-center my-4">
        <IconButton icon="chevron-left" />
        <Text className="text-xl">Raised Issue History</Text>
      </View>
      <ScrollView>
        {municipalityIssues.map((item, index) => (
          <TouchableRipple
            className="m-2 mx-4 rounded-2xl"
            onPress={() => navigation.navigate('RaisedIssueView')}>
            <View
              key={index}
              className="flex-row justify-between border p-4 rounded-2xl">
              <View className="flex-col justify-between">
                <Text>{item.issueName}</Text>
                <Text>{`${capitalizeFirstWord(item.status)} - ${
                  item.date
                }`}</Text>
              </View>
              <IconButton icon="chevron-right" />
            </View>
          </TouchableRipple>
        ))}
      </ScrollView>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const municipalityIssues: Issues[] = [
  {
    issueName: 'Potholes on Main Street',
    status: 'pending',
    date: '2024-01-17',
  },
  {
    issueName: 'Broken Streetlight on Elm Avenue',
    status: 'resolved',
    date: '2024-01-15',
  },
  {
    issueName: 'Garbage Collection Delay on Oak Lane',
    status: 'cancel',
    date: '2024-01-16',
  },
  {
    issueName: 'Water Leak on Maple Drive',
    status: 'pending',
    date: '2024-01-14',
  },
  {
    issueName: 'Overgrown Trees Blocking Road on Pine Street',
    status: 'pending',
    date: '2024-01-13',
  },
  {
    issueName: 'Traffic Signal Malfunction at Rose Avenue',
    status: 'resolved',
    date: '2024-01-12',
  },
  {
    issueName: 'Illegal Dumping Near City Park',
    status: 'cancel',
    date: '2024-01-11',
  },
  {
    issueName: 'Sidewalk Repair Needed on Birch Lane',
    status: 'pending',
    date: '2024-01-10',
  },
  {
    issueName: 'Noise Complaints from Construction Site on Willow Street',
    status: 'pending',
    date: '2024-01-09',
  },
  {
    issueName: 'Vandalism at City Hall',
    status: 'resolved',
    date: '2024-01-08',
  },
];
