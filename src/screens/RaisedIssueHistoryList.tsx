import {Surface, Text, TouchableRipple} from 'react-native-paper';
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import TopBar from '../components/TopBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface NavigationProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'RaiseIssueHistoryList'
  >;
}

interface Issues {
  issueName: string;
  status: 'resolved' | 'pending';
  date: string;
}

export default function RaisedIssueHistory({navigation}: NavigationProps) {
  const capitalizeFirstWord = (str: any) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <Surface style={styles.container}>
      <TopBar title="Raise Issue History" navigation={navigation} />
      <ScrollView>
        {municipalityIssues.map((item, index) => (
          <TouchableRipple
            className="m-1 mx-4 rounded-2xl"
            key={index}
            onPress={() => navigation.navigate('RaisedIssueView')}>
            <View className="flex-row justify-between border border-gray-400 p-4 rounded-2xl">
              <View className="flex-col justify-between">
                <Text className="text-blue font-bold">{item.issueName}</Text>
                <Text className="text-blue">{`Issue ${capitalizeFirstWord(
                  item.status,
                )} - ${item.date}`}</Text>
              </View>
              <View className="w-12 flex-row justify-center items-center">
                <Icon
                  name={
                    item.status === 'resolved'
                      ? 'check-circle'
                      : 'alert-circle-outline'
                  }
                  size={24}
                  color={item.status === 'resolved' ? '#00BE41' : '#cf7a25'}
                />
                <Icon name="chevron-right" size={24} color="#241F61" />
              </View>
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
    status: 'resolved',
    date: '2024-01-16',
  },
  {
    issueName: 'Water Leak on Maple Drive',
    status: 'pending',
    date: '2024-01-14',
  },
  {
    issueName: 'Overgrown Trees Blocking Road',
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
    status: 'pending',
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
