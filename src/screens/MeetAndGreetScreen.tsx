import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {Surface, Appbar, Button, TouchableRipple} from 'react-native-paper';

interface NavigationProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'MeetAndGreetScreen'
  >;
}

export default function MeetAndGreetScreen({navigation}: NavigationProps) {
  return (
    <Surface style={styles.container}>
      <Appbar className="">
        <Appbar.Action icon="chevron-left" onPress={() => {}} />
        <Appbar.Content title="Edit Profile" />
      </Appbar>

      <Text className="text-2xl m-4">Schedule</Text>
      <ScrollView>
        {scheduleData.map((item, index) => (
          <TouchableRipple key={index} className="mx-4 my-2">
            <View className="border justify-between flex-row p-3 rounded-2xl bg-white">
              <View>
                <View>
                  <Text>{item.name}</Text>
                </View>
                <View className="flex-row justify-between w-[150px]">
                  <Text>{item.times}</Text>
                  <Text>{item.day}</Text>
                </View>
              </View>
              <Button mode="contained" className="rounded-2xl">
                View Details
              </Button>
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

const scheduleData = [
  {
    name: 'Lorem Ipsum',
    times: '18:00 - 19:00',
    day: 'Sunday',
  },
  {
    name: 'Lorem Ipsum',
    times: '18:00 - 19:00',
    day: 'Sunday',
  },
  {
    name: 'Lorem Ipsum',
    times: '18:00 - 19:00',
    day: 'Sunday',
  },
  {
    name: 'Lorem Ipsum',
    times: '18:00 - 19:00',
    day: 'Sunday',
  },
  {
    name: 'Lorem Ipsum',
    times: '18:00 - 19:00',
    day: 'Sunday',
  },
  {
    name: 'Lorem Ipsum',
    times: '18:00 - 19:00',
    day: 'Sunday',
  },
];
