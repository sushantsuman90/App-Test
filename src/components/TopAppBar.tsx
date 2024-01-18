import {View} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import React, {useState, FC, PropsWithChildren} from 'react';
import {HomeScreenProp} from '../screens/HomeScreen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useNavigation} from '@react-navigation/native';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

export default function TopAppBar({navigation}: HomeScreenProp) {
  const navigator = useNavigation<HomeScreenNavigationProp>();

  const openDrawer1 = () => {
    navigator.openDrawer();
  };

  const DisplayDrawer = () => {
    // console.log("clicked");
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  const [display, setDisplay] = useState<boolean>(false);

  const handlePress = (screenName: string) => {
    DisplayDrawer();
    navigation.navigate(screenName); //
  };

  return (
    <View className="h-[7vh] flex-row justify-between items-center bg-blue">
      <IconButton
        icon="account-circle"
        iconColor="#fff"
        onPress={openDrawer1}
      />
      <Text className="text-white">KMC</Text>
      <IconButton
        icon="magnify"
        iconColor="#fff"
        onPress={() => navigation.navigate('HomeScreenSearch')}
      />
    </View>
  );
}
