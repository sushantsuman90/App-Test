import React, {useState} from 'react';
import Input from '../components/Input';
import {Surface, Appbar, Portal, Dialog, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Button from '../components/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  
  ImageBackground,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

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

        <View className='px-4 py-7'>

<View className=' w-2/3 border rounded-2xl border-[#B6B6B6] ml-auto mr-auto'>
  <View className='p-10'>

  <View className='border rounded-full border-[#B6B6B6] ml-auto mr-auto mt-auto mb-auto p-5'>
  <Text className='text-[#231E60] font-extrabold'><Ionicons name="person-outline" size={30} /></Text>
  </View>

  <View className='ml-auto mr-auto mt-3 flex flex-col items-center'>
  <Text className='py-3 font-bold text-[#231E60] text-base'>Suvankar Malakar</Text>
  {/* <Text className='text-[#231E60] text-base mb-4'>+91 xxxxxxxxxxx</Text> */}
  {/* <TouchableOpacity onPress={()=>navigator.navigate("EditProfile")}><View className='bg-[#231E60] p-3 rounded-lg'><Text className='text-white'>Edit Profile</Text></View></TouchableOpacity> */}
  </View>

  </View>
</View>

</View>

        <Input
          label="Name"
          value={value.name}
          onChangeText={e => handleChange(e, 'name')}
        />
        <Input
          label="Mobile No."
          value={value.mobile.toString()}
          onChangeText={e => handleChange(Number(e), 'mobile')}
        />
        <Input
          label="Address"
          value={value.address}
          onChangeText={e => handleChange(e, 'address')}
        />
        <Input
          label="Part No."
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
    marginTop:20,
  },
  dialogButtons: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
});
