import {StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {Surface} from 'react-native-paper';
import Input from '../components/Input';
import LanguageSelector from '../components/LanguageSelector';
import Button from '../components/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'OnboardingScreen'>;
}

interface Profile {
  name: string;
  mobile: string;
  address: string;
  partNo: string;
}

const initState: Profile = {
  name: 'Suvankar Malakar',
  mobile: '9876543210',
  address: 'XXXXXXXXXXXX',
  partNo: 'XXXX-XXXX-XX',
};

export default function OnboardingScreen({navigation}: NavigationProps) {
  const [value, setValue] = useState<Profile>(initState);
  const handleChange = (newValue: string, key: string) => {
    setValue({
      ...value,
      [key]: newValue,
    });
  };
  return (
    <Surface style={styles.container}>
      <LanguageSelector />
      <Image
        source={require('../assets/poster-image.jpg')}
        style={styles.image}
      />
      <Input
        label="Enter Name"
        value={value.name}
        onChangeText={newVal => handleChange(newVal, 'name')}
      />
      <Input
        label="Address"
        value={value.address}
        onChangeText={newVal => handleChange(newVal, 'address')}
      />
      <Input
        label="Mobile No."
        value={value.mobile}
        onChangeText={newVal => handleChange(newVal, 'mobile')}
      />
      <Input
        label="Part No."
        value={value.partNo}
        onChangeText={newVal => handleChange(newVal, 'partNo')}
      />
      <Button
        onPress={() => navigation.navigate('ConfirmOtp')}
        style={styles.button}>
        Register
      </Button>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    margin: 18,
    marginTop: 30,
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
    width: 350,
  },
});
