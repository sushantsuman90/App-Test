import {Surface, Text, Button, IconButton, Icon} from 'react-native-paper';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RaisedIssueView'>;
}

const RaisedIssues = ({navigation}: NavigationProps) => {
  return (
    <Surface style={styles.container}>
      <View className="flex-row items-center my-4">
        <IconButton icon={'chevron-left'} onPress={() => navigation.pop()} />
        <Text className="text-xl">Raise Issue History</Text>
      </View>
      <View className="flex-row items-center justify-center my-6">
        <Text className="text-xl">The Issue is being verified</Text>
        <View className="bg-blue items-center justify-center rounded p-1 mx-2">
          <Icon size={20} source="information-variant" color="#fff" />
        </View>
      </View>

      <View className="rounded-2xl border border-gray-400 p-4 m-4">
        <View className="flex-row justify-between">
          <Text className="font-bold text-blue">ID NO: XXXXXX</Text>
          <Text>DD/MM/YY</Text>
        </View>
        <View>
          <View className="flex-row">
            <Text className="font-bold text-blue">Issue Type: </Text>
            <Text>Street Lighting</Text>
          </View>

          <View className="flex-row">
            <Text className="font-bold text-blue">Location: </Text>
            <Text>Sector 1, 1858/1, Rajdanga Main</Text>
          </View>

          <View className="flex-row">
            <Text className="font-bold text-blue">Additional Info: </Text>
            <Text>Street Lighting</Text>
          </View>
        </View>
      </View>
      <Button mode="contained" className="rounded-md m-4" buttonColor="#241F61">
        Return
      </Button>

      <Text className="self-center underline">See Chat History</Text>
    </Surface>
  );
};

export default RaisedIssues;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
