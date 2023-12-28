import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Surface, Text, IconButton, Button} from 'react-native-paper';
import RaiseIssueTopAppBar from '../components/RaiseIssueTopAppBar';

export default function RaiseIssueMapSelector() {
  return (
    <Surface style={styles.container}>
      <RaiseIssueTopAppBar />
      {/* <TextInput
        mode="outlined"
        right={<TextInput.Icon icon="magnify" />}
        className="m-4"
        label="Search Area, Street name"
      /> */}

      <View className="border rounded-2xl px-4 mx-4 flex-row justify-between items-center">
        <Text>Search for Area, Street Name</Text>
        <IconButton icon="magnify" size={20} />
      </View>

      <View className="border w-[85%] m-5 self-center h-[350px]" />

      <View className="flex-col overflow-hidden rounded-2xl border gap-0 mx-4">
        <View className="flex-row items-center justify-center border">
          <Text className="text-md">Use my Current Location</Text>
          <IconButton icon="map-marker" size={20} />
        </View>

        <View className="flex-row items-center justify-center border">
          <Text className="text-md">Enter Address Manually</Text>
          <IconButton icon="circle-edit-outline" size={20} />
        </View>
      </View>

      <Button className="bg-blue rounded-lg m-4" textColor="#fff">
        Confirm Location
      </Button>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
