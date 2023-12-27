import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Surface,
  IconButton,
  Button,
  Text,
  TextInput,
  Icon,
} from 'react-native-paper';

export default function RaiseIssue() {
  return (
    <Surface style={styles.container}>
      <View className="p-2">
        <Text className="p-5 text-2xl font-bold text-blue">Ward 111</Text>
        <View className="flex-row items-center my-[5vh]">
          <Icon source="chevron-left" size={32} color="#241F61" />
          <Text className="text-2xl font-bold text-blue">Raise Issue</Text>
        </View>
        <TextInput
          placeholder="Write about the incident here"
          label="Additional Info"
          mode="outlined"
          className="m-3 rounded-lg"
          // style={styles.input}
        />
        <TextInput
          placeholder="Write about the incident here"
          label="Additional Info"
          mode="outlined"
          className="m-3 rounded-lg"
          // style={styles.input}
        />
        <TextInput
          placeholder="Write about the incident here"
          label="Additional Info"
          mode="outlined"
          className="m-3 rounded-lg"
          // style={styles.input}
        />
        <View className="self-center">
          <IconButton
            mode="contained"
            icon="camera"
            className="m-2 w-[200px]"
            iconColor="#fff"
            containerColor="#241F61"
          />
          <Text className="self-center">Click/Upload Picture</Text>
        </View>
        <Button
          className="mx-5 my-2 mt-7 rounded-lg"
          mode="contained"
          buttonColor="#241F61">
          Raise Issue
        </Button>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
