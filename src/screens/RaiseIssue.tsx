import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Surface,
  IconButton,
  Button,
  Text,
  TextInput,
  Icon,
  TouchableRipple,
} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';

export default function RaiseIssue() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [issue, setIssue] = useState<string>('');
  return (
    <Surface style={styles.container}>
      <View className="p-2">
        <Text className="p-5 text-2xl font-bold text-blue">Ward 111</Text>
        <View className="flex-row items-center my-[5vh]">
          <Icon source="chevron-left" size={32} color="#241F61" />
          <Text className="text-2xl font-bold text-blue">Raise Issue</Text>
        </View>
        <View className="flex-col gap-5 px-3">
          <View className="my-1">
            <DropDown
              label={'Type Of Issue'}
              mode={'outlined'}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={issue}
              setValue={setIssue}
              list={dropdownList}
            />
          </View>

          <TouchableRipple className="border p-3 rounded-2xl">
            <View className="">
              <Text>Enter the Location of the Incident</Text>
            </View>
          </TouchableRipple>

          <TextInput
            placeholder="Write about the incident here"
            label="Additional Info"
            mode="outlined"
            className="rounded-lg"
          />
        </View>

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

const dropdownList = [
  {
    label: 'Road/Payment Issue',
    value: 'road-payment-issue',
  },
  {
    label: 'Street Lighting',
    value: 'street-lighting',
  },
  {
    label: 'Electricity Issue',
    value: 'electricity-issue',
  },
  {
    label: 'Trimming Trees',
    value: 'trimming-trees',
  },
  {
    label: 'Sewerage',
    value: 'sewerage',
  },
  {
    label: 'Water',
    value: 'water-issue',
  },
  {
    label: 'Health',
    value: 'health-issue',
  },
  {
    label: 'Other',
    value: 'other-issue',
  },
];
