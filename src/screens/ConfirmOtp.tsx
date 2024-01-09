import {Surface, Text, Button as PaperButton} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import OtpInputs from 'react-native-otp-inputs';

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ConfirmOtp'>;
}

export default function ConfirmOtp({navigation}: NavigationProps) {
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
    console.log(otp);
  }

  return (
    <Surface style={styles.container}>
      <View className="w-[350px] py-3">
        <Text variant="headlineSmall" className="text-blue py-3">
          Confirm OTP
        </Text>
        <Text>Enter the 4 digit OTP sent for +91 XXXXXXXXXX</Text>
      </View>
      <OtpInputs
        handleChange={handleTextChange}
        autofillFromClipboard={true}
        numberOfInputs={4}
        style={styles.otpContainerStyle}
        inputStyles={styles.otpInputStyle}
        focusStyles={styles.otpFocusStyle}
        // containerStyle={styles.topContainerStyle}
        // textInputStyle={styles.textInputStyle}
        // tintColor="#241F61"
        // offTintColor="#fff"
        autoFocus
      />
      <Button
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.buttonStyle}>
        Confirm
      </Button>
      <View className="flex-row justify-center items-center">
        <Text>Did Not recieved OTP</Text>
        <PaperButton onPress={() => {}}>Resend</PaperButton>
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
  otpContainerStyle: {
    flexDirection: 'row',
  },
  otpInputStyle: {
    borderColor: '#000',
    borderRadius: 1,
    padding: 12,
  },
  otpFocusStyle: {
    borderColor: '#000',
    borderRadius: 1,
  },
  buttonStyle: {
    width: 350,
  },
});
