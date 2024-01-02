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
  Portal,
  Modal,
} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import RaiseIssueTopAppBar from '../components/RaiseIssueTopAppBar';
import RaiseIssueModalHeading from '../components/RaiseIssueModalHeading';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

interface RaiseIssueProp {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RaiseIssue'>;
}

export default function RaiseIssue({}: RaiseIssueProp) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [issue, setIssue] = useState<string>('');
  return (
    <Surface style={styles.container}>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          contentContainerStyle={styles.modalContainerStyle}>
          <RaiseIssueModalHeading
            heading="Choose An Option"
            onClick={() => setModalVisible(false)}
          />
          <View className="flex-col gap-2">
            <View className="pl-4 border flex-row justify-between items-center rounded-xl">
              <Text>Upload Form Gallary</Text>
              <IconButton icon="camera" />
            </View>
            <View className="pl-4 border flex-row justify-between items-center rounded-xl">
              <Text>Take a Picture</Text>
              <IconButton icon="image-size-select-actual" />
            </View>
          </View>
        </Modal>
      </Portal>

      <RaiseIssueTopAppBar />
      <View className="p-2">
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

        <View className="self-center m-4">
          <IconButton
            mode="contained"
            icon="camera"
            className="m-2 w-[200px]"
            iconColor="#fff"
            containerColor="#241F61"
            onPress={() => setModalVisible(true)}
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
  modalContainerStyle: {
    backgroundColor: 'white',
    padding: 30,
    margin: 20,
    flexDirection: 'column',
    gap: 12,
    borderRadius: 17,
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
