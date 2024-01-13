import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Surface,
  IconButton,
  Button,
  Text,
  TouchableRipple,
  Portal,
  Modal,
} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import RaiseIssueTopAppBar from '../components/RaiseIssueTopAppBar';
import RaiseIssueModalHeading from '../components/ModalHeading';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface RaiseIssueProp {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RaiseIssue'>;
}

export default function RaiseIssue({navigation}: RaiseIssueProp) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [fullScreenModalVisible, setFullScreenModalVisible] =
    React.useState(false);
  const [issue, setIssue] = useState<string>('');
  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (fullScreenModalVisible) {
      timerId = setTimeout(() => {
        setFullScreenModalVisible(prev => !prev);
        navigation.pop();
      }, 3000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [fullScreenModalVisible, navigation]);
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
            <TouchableRipple>
              <View className="pl-4 border flex-row justify-between items-center rounded-xl">
                <Text>Upload Form Gallary</Text>
                <IconButton icon="camera" />
              </View>
            </TouchableRipple>
            <TouchableRipple>
              <View className="pl-4 border flex-row justify-between items-center rounded-xl">
                <Text>Take a Picture</Text>
                <IconButton icon="image-size-select-actual" />
              </View>
            </TouchableRipple>
          </View>
        </Modal>
      </Portal>

      <Portal>
        <Modal
          visible={fullScreenModalVisible}
          onDismiss={() => setFullScreenModalVisible(false)}
          contentContainerStyle={styles.fullScreenModalContainerStyle}>
          <View className="bg-blue h-[1000px] justify-center items-center">
            <View className="bg-white p-4 m-4 rounded-full">
              <Icon name="check" color="#241F61" size={130} />
            </View>
            <Text className="text-white text-xl text-center">
              Your Issue has been submitted for verification
            </Text>
          </View>
        </Modal>
      </Portal>

      <RaiseIssueTopAppBar />
      <View className="p-2">
        <View className="flex-row items-center my-[5vh]">
          {/* <Icon source="chevron-left" size={32} color="#241F61" /> */}
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

          <TouchableRipple
            className="border p-3 rounded-2xl"
            onPress={() => navigation.navigate('RaiseIssueMapSelector')}>
            <View className="">
              <Text>Enter the Location of the Incident</Text>
            </View>
          </TouchableRipple>

          <Input
            placeholder="Write about the incident here"
            label="Additional Info"
            value=""
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
          onPress={() => setFullScreenModalVisible(true)}
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
  fullScreenModalContainerStyle: {},
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
