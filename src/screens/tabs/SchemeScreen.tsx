import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Surface} from 'react-native-paper';
import PosterCard from '../../components/PosterCard';
import {RootStackParamList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
}

export default function SchemeScreen({navigation}: Props) {
  return (
    <Surface style={styles.container}>
      <ScrollView horizontal={true}>
        {schemeCardData.map((item, index) => (
          <PosterCard
            heading={item.heading}
            text={item.text}
            icon="language"
            key={index}
            buttonName="Visit Website"
            onMoreDetailsPress={() => {
              navigation.navigate('SchemeMoreDetails');
            }}
            onButtonPress={() => {}}
          />
        ))}
      </ScrollView>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const schemeCardData = [
  {
    heading: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis optio nihil inventore enim sapiente ea.',
  },
  {
    heading: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis optio nihil inventore enim sapiente ea.',
  },
  {
    heading: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis optio nihil inventore enim sapiente ea.',
  },
  {
    heading: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis optio nihil inventore enim sapiente ea.',
  },
  {
    heading: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis optio nihil inventore enim sapiente ea.',
  },
  {
    heading: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis optio nihil inventore enim sapiente ea.',
  },
];
