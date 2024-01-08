import {Surface, Text, Button as PaperButton} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {StyleSheet, View} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import Button from '../components/Button';

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ConfirmOtp'>;
}

export default function ConfirmOtp({}: NavigationProps) {
  const [otp, setOtp] = useState('');
  const [seconds, setSeconds] = useState<number>(90);

  const handleTimerEnd = () => {};

  const secondsToMinute = (sec: number): string => {
    const minuteString = `00${Math.floor(sec / 60)}`.slice(-2);
    const secondString = `00${Math.floor(sec % 60)}`.slice(-2);
    return `${minuteString}:${secondString}`;
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
      if (seconds === 0) {
        clearInterval(timeInterval);
        handleTimerEnd();
      }
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [seconds]);

  function handleTextChange(text: string): void {
    setOtp(text);
    console.log(otp)
  }

  return (
    <Surface style={styles.container}>
      <View className="w-[350px] py-3">
        <Text variant="headlineSmall" className="text-blue py-3">Confirm OTP</Text>
        <Text>Enter the 4 digit OTP sent for +91 XXXXXXXXXX</Text>
      </View>
      <OTPTextView
        handleCellTextChange={handleTextChange}
        containerStyle={styles.topContainerStyle}
        textInputStyle={styles.textInputStyle}
        tintColor="#241F61"
        offTintColor="#fff"
        autoFocus
      />
      <Button onPress={() => {}} style={styles.buttonStyle}>
        Confirm
      </Button>
      <View className="flex-row justify-center items-center">
        <Text>Did Not recieved OTP</Text>
        <PaperButton>Resend</PaperButton>
      </View>

      <Text>{`${secondsToMinute(seconds)} Seconds`}</Text>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  topContainerStyle: {
    padding: 10,
    paddingStart: 50,
    paddingEnd: 50,
  },
  textInputStyle: {
    borderColor: '#241F61',
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonStyle: {
    width: 350,
  },
});
