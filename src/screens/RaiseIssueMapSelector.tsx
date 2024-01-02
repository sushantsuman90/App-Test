import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Surface,
  Text,
  IconButton,
  Button,
  Portal,
  Modal,
  TextInput,
} from 'react-native-paper';
import RaiseIssueTopAppBar from '../components/RaiseIssueTopAppBar';
import RaiseIssueModalHeading from '../components/RaiseIssueModalHeading';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

interface RaiseIssueMapSelectorProp {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'RaiseIssueMapSelector'
  >;
}

export default function RaiseIssueMapSelector({}: RaiseIssueMapSelectorProp) {
  const [manualAddressVisible, setManualAddressVisible] = React.useState(false);

  return (
    <Surface style={styles.container}>
      <Portal>
        <Modal
          visible={manualAddressVisible}
          onDismiss={() => setManualAddressVisible(false)}
          contentContainerStyle={styles.modalContainerStyle}>
          <RaiseIssueModalHeading
            onClick={() => setManualAddressVisible(false)}
            heading="Enter Address"
          />

          <TextInput
            mode="outlined"
            label="Area/ Sector/ Locality"
            placeholder=""
          />
          <TextInput
            mode="outlined"
            label="Nearby landmark"
            placeholder="Enter a nearby landmark"
          />
          <TextInput
            mode="outlined"
            label="Pincode"
            placeholder="Enter the pincode"
          />
          <TextInput
            mode="outlined"
            label="Full Address"
            placeholder="Write the full address"
          />

          <Button
            className="bg-blue rounded-lg m-4 w-[200px] self-center"
            textColor="#fff">
            Confirm
          </Button>
        </Modal>
      </Portal>

      <RaiseIssueTopAppBar />

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

        <View
          className="flex-row items-center justify-center border"
          onTouchStart={() => setManualAddressVisible(true)}>
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
  modalContainerStyle: {
    backgroundColor: 'white',
    padding: 30,
    margin: 20,
    flexDirection: 'column',
    gap: 12,
    borderRadius: 17,
  },
});
