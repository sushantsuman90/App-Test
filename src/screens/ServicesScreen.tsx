import {Surface, TouchableRipple, Appbar, Text, Icon} from 'react-native-paper';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {StyleSheet, View} from 'react-native';
import ServicesImageCard from '../components/ServicesImageCard';
import {FlatList} from 'react-native';

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Services'>;
}

export default function ServicesScreen({navigation}: NavigationProps) {
  const renderItem = ({item}: any) => (
    <View style={styles.item}>
      <ServicesImageCard
        imageSrc={item.imageSrc}
        label={item.label}
        key={item.key}
      />
    </View>
  );
  return (
    <Surface style={styles.container}>
      <Appbar>
        <Appbar.Action icon="chevron-left" onPress={() => {}} />
        <Appbar.Content title="Edit Profile" />
      </Appbar>
      <TouchableRipple
        className="m-3 rounded-2xl"
        onPress={() => navigation.navigate('MeetAndGreetScreen')}>
        <View className="flex-row justify-between border p-3 rounded-2xl">
          <View className="flex-row">
            <Icon size={20} source="handshake" />
            <Text className="mx-2">Meet And Greet</Text>
          </View>
          <Icon size={20} source="arrow-right" />
        </View>
      </TouchableRipple>
      <FlatList
        data={sampleData}
        renderItem={renderItem}
        keyExtractor={item => item.label}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    paddingHorizontal: 16, // Add horizontal padding to the flat list content
    paddingTop: 8, // Add top padding to the flat list content
  },
  item: {
    margin: 8,
    borderRadius: 8,
  },
});

const sampleData = [
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Majestic snow-capped',
  },
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Vibrant cityscape',
  },
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Enchanting forest',
  },
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Colorful hot',
  },
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Tranquil beach',
  },
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Tranquil beach',
  },
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Tranquil beach',
  },
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Tranquil beach',
  },
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Tranquil beach',
  },
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Tranquil beach',
  },
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Tranquil beach',
  },
];
