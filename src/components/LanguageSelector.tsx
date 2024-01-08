import React, {useState} from 'react';
import {Modal, Portal, Text, TouchableRipple} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ModalHeading from './ModalHeading';

const languages = [
  {languageName: 'English', label: ''},
  {languageName: 'Bengali', label: 'বাংলা'},
  {languageName: 'Hindi', label: 'हिन्दी'},
];

export default function LanguageSelector() {
  const [modalVisible, setModalVisible] = useState(false);
  const [defualtLanguage, setDefaultLanguage] = useState(
    languages[0].languageName,
  );

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleChange = (langName: string) => {
    setDefaultLanguage(langName);
    hideModal();
  };

  return (
    <>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}>
          <View className="pl-4">
            <ModalHeading onClick={hideModal} heading="Select a Language" />
          </View>
          {languages.map((item, index) => {
            return (
              <TouchableRipple
                key={index}
                className="border m-3 p-4 rounded-2xl"
                onPress={() => handleChange(item.languageName)}>
                <View className="flex-row">
                  <Text>{item.languageName}</Text>
                  {item.label !== '' && <Text>{item.label}</Text>}
                </View>
              </TouchableRipple>
            );
          })}
        </Modal>
      </Portal>
      <TouchableRipple
        className="m-2 rounded-2xl border w-[120px] items-center"
        onPress={showModal}>
        <View className="p-3 items-center flex-row">
          <Icon name="language" size={20} />
          <Text className="px-2">{defualtLanguage}</Text>
        </View>
      </TouchableRipple>
    </>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    margin: 20,
    borderRadius: 11,
    backgroundColor: 'white',
    padding: 20,
  },
});
