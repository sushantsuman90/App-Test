import {Surface, Text, TextInput} from 'react-native-paper';
import Input from '../components/Input';
import {StyleSheet, View} from 'react-native';
import React from 'react';

const mostUsedServices = [
  'Public Health',
  'Death Certificate',
  'Water Safety',
  'OBC Certificate',
];

const HomeScreenSearch: React.FC = () => {
  return (
    <Surface style={styles.container}>
      <Input
        value=""
        placeholder="How can I help you Today"
        right={<TextInput.Icon icon="magnify" />}
      />
      <View className="m-4 border rounded-2xl overflow-hidden">
        {mostUsedServices.map((item, index) => (
          <View className="border-b-[0.5px]" key={index}>
            <Text className="p-4">{item}</Text>
          </View>
        ))}
      </View>
    </Surface>
  );
};

export default HomeScreenSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
