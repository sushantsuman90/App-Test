import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

interface Props {
  imageSrc: string;
  label: string;
}
export default function ImageCard(props: Props) {
  const image = require('../assets/image2.jpg');
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.overlay}>
        <Text style={styles.text}>{props.label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 151,
    height: 151,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    marginRight: 16,
  },
  image: {
    flex: 1,
    resizeMode: 'cover', // This ensures that the image covers the entire component
    borderRadius: 12,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 12,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
});
