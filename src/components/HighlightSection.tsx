import {View, ScrollView} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import ImageCard from './ImageCard';

interface Data {
  imageSrc: string;
  label: string;
}

interface Props {
  heading: string;
  data: Data[];
}

export default function HighlightSection(props: Props) {
  return (
    <View className="p-4 pt-0">
      <Text variant="headlineSmall" className="p-[8px]">
        {props.heading}
      </Text>
      <ScrollView
        className="flex-row overflow-x-scroll p-2"
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {props.data.map((item, index) => (
          <ImageCard label={item.label} imageSrc={item.imageSrc} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
