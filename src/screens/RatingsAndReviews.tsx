import {Surface, Text} from 'react-native-paper';
import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import TopBar from '../components/TopBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface NavigationProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'RatingsAndReviews'
  >;
}

export default function RatingsAndReviews({navigation}: NavigationProps) {
  return (
    <Surface style={styles.container}>
      <TopBar navigation={navigation} title="Rating and Reviews" />
      <View>
        <View className="my-8 justify-center items-center">
          <Icon name="party-popper" size={125} color={'#241F61'} />
          <Text className="text-blue font-bold text-xl">
            Here’s what our users have to say !
          </Text>
        </View>
        <ScrollView horizontal>
          {Array.from({length: 6}).map((_, key) => (
            <View
              className="border rounded-2xl border-gray-400 p-4 my-4 mx-2 w-[300px] h-[400px]"
              key={key}>
              <View className="flex-row items-center p-2">
                <Image
                  source={require('../assets/avatar.jpg')}
                  className="rounded-2xl"
                />
                <View className="m-4">
                  <Text className="font-bold text-xl">Arup Basak</Text>
                  <View className="flex-row">
                    {Array.from({length: 5}).map((__, index) => (
                      <View key={index}>
                        <Icon name="star" size={24} color={'#241F61'} />
                      </View>
                    ))}
                  </View>
                  <Text className="text-md">Street Lighting</Text>
                  <Text>Ref Id.: XXXXXXXX</Text>
                  <Text>Date: {'10/12/2023'}</Text>
                </View>
              </View>
              <Text className="text-justify">
                "The local issue reporting app offers an impressively
                user-friendly experience, ensuring seamless reporting with quick
                confirmations and prompt notifications to councilors. It
                efficiently fosters community responsibility, effortlessly
                connecting citizens with local government—a fantastic tool for
                streamlined civic engagement."
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
