import React from 'react';
import {Surface} from 'react-native-paper';
import HighlightSection from '../../components/HighlightSection';
import {ScrollView} from 'react-native';

export default function HighlightScreen() {
  return (
    <Surface style={{flex: 1}}>
      <ScrollView>
        {sampleDataArr.map((item, index) => {
          return (
            <HighlightSection
              heading={item.heading}
              data={item.data}
              key={index}
            />
          );
        })}
      </ScrollView>
    </Surface>
  );
}

const sampleData = [
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Majestic snow-capped peaks under a clear blue sky',
  },
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Vibrant cityscape with modern skyscrapers and city lights',
  },
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Enchanting forest filled with diverse flora and fauna',
  },
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Colorful hot air balloons floating over a scenic countryside',
  },
  {
    imageSrc: '../assets/image-sample.jpg',
    label: 'Tranquil beach with golden sands and rolling ocean waves',
  },
];

const sampleDataArr = [
  {data: sampleData, heading: 'Announcements'},
  {data: sampleData, heading: 'Inaugaration'},
  {data: sampleData, heading: 'Upcoming Events'},
];
