import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Surface} from 'react-native-paper';
import PosterCard from '../../components/PosterCard';

export default function SchemeScreen() {
  return (
    <Surface style={styles.container}>
      <ScrollView horizontal={true}>
        {schemeCardData.map((item, index) => (
          <PosterCard
            heading={item.heading}
            text={item.text}
            icon="language"
            key={index}
            buttonName='Visit Website'
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
