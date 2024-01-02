import React, {useState} from 'react';
import Input from '../components/Input';
import {Surface, Appbar, Portal, Dialog, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Button from '../components/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

interface Profile {
  name: string;
  mobile: number;
  address: string;
  partNo: string;
}

const initState: Profile = {
  name: 'Suvankar Malakar',
  mobile: 9876543210,
  address: 'XXXXXXXXXXXX',
  partNo: 'XXXX-XXXX-XX',
};

interface EditProfileProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EditProfile'>;
}

export default function EditProfile({}: EditProfileProps) {
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [value, setValue] = useState(initState);
  const handleChange = (e: string | number, key: string) => {
    setValue({
      ...value,
      [key]: e,
    });
  };

  return (
    <>
      <Portal>
        <Dialog
          visible={dialogVisible}
          onDismiss={() => setDialogVisible(false)}>
          <Dialog.Content>
            <Text variant="bodyMedium">
              Are you sure you want to edit your profile?
            </Text>
          </Dialog.Content>
          <Dialog.Actions style={styles.dialogButtons}>
            <Button onPress={() => {}} style={{width: '100%'}}>
              Yes
            </Button>
            <Button
              onPress={() => setDialogVisible(false)}
              backgroundColor="#fff"
              textColor="#000">
              No
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Surface style={styles.container}>
        <Appbar>
          <Appbar.Action icon="chevron-left" onPress={() => {}} />
          <Appbar.Content title="Edit Profile" />
        </Appbar>
        <Input
          placeholder="Name"
          value={value.name}
          onChangeText={e => handleChange(e, 'name')}
        />
        <Input
          placeholder="Mobile No."
          value={value.mobile.toString()}
          onChangeText={e => handleChange(Number(e), 'mobile')}
        />
        <Input
          placeholder="Address"
          value={value.address}
          onChangeText={e => handleChange(e, 'address')}
        />
        <Input
          placeholder="Part No."
          value={value.partNo}
          onChangeText={e => handleChange(e, 'partNo')}
        />

        <Button onPress={() => setDialogVisible(true)} style={styles.button}>
          Save Changes
        </Button>
      </Surface>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 200,
    alignSelf: 'center',
    borderRadius: 8,
  },
  dialogButtons: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
});
