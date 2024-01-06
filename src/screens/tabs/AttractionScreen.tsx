import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Surface} from 'react-native-paper';
import PosterCard from '../../components/PosterCard';

export default function AttractionScreen() {
  return (
    <Surface style={styles.container}>
      <ScrollView horizontal={true}>
        {schemeCardData.map((item, index) => (
          <PosterCard
            heading={item.heading}
            text={item.text}
            icon="near-me"
            key={index}
            buttonName='Navigate'
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
