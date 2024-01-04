import {Text, Surface, IconButton} from 'react-native-paper';
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';
import {Portal, Modal} from 'react-native-paper';
import ModalHeading from '../../components/ModalHeading';
import SocialIcon from '../../components/SocialIcon';

const socialLinkList = [
  {instagram: 'Lorem ipsum', twitter: 'Lorem ipsum', facebook: 'Lorem ipsum'},
  {instagram: 'Lorem ipsum', twitter: 'Lorem ipsum', facebook: 'Lorem ipsum'},
  {instagram: 'Lorem ipsum', twitter: 'Lorem ipsum', facebook: 'Lorem ipsum'},
];

export default function HomeScreenTab() {
  const [socialLinkVisible, setSocialLinkVisible] = React.useState(false);

  const handleToogleSocialLinkModal = () => {
    setSocialLinkVisible(!socialLinkVisible);
  };

  return (
    <Surface style={styles.container}>
      <Portal>
        <Modal
          visible={socialLinkVisible}
          onDismiss={handleToogleSocialLinkModal}
          contentContainerStyle={styles.modalContainer}>
          <ModalHeading
            onClick={handleToogleSocialLinkModal}
            heading="Given a Follow"
          />
          {socialLinkList.map((item, index) => (
            <View key={index} className="flex-row justify-between p-3">
              {Object.entries(item).map(([platform, link]) => (
                <SocialIcon icon={platform} text={link} key={platform}/>
              ))}
            </View>
          ))}
        </Modal>
      </Portal>
      <View style={styles.gridContainer}>
        <View
          style={[styles.quickSectionContainer, {backgroundColor: '#241F61'}]}>
          <Text style={[styles.quickSectionText, {color: '#fff'}]}>
            Get our E-paper
          </Text>
          <IconButton
            icon="arrow-right"
            iconColor="#241F61"
            containerColor="#fff"
            size={16}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <TouchableOpacity
          style={styles.quickSectionContainer}
          onPress={handleToogleSocialLinkModal}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <IconButton icon="facebook" size={20} />
            <IconButton icon="instagram" size={20} />
            <IconButton icon="twitter" size={20} />
          </View>
          <IconButton
            icon="arrow-right"
            size={16}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
        <View style={styles.quickSectionContainer}>
          <Text style={[styles.quickSectionText, {color: '#241F61'}]}>
            Service Offered
          </Text>
          <IconButton
            icon="arrow-right"
            onPress={() => console.log('Pressed')}
            containerColor="#241F61"
            size={16}
            iconColor="#fff"
          />
        </View>
        <View style={styles.quickSectionContainer}>
          <Text style={[styles.quickSectionText, {color: '#FF0000'}]}>
            Live Sports
          </Text>
          <IconButton
            icon="arrow-right"
            containerColor="#FF0000"
            iconColor="#fff"
            size={16}
            onPress={() => console.log('Pressed')}
          />
        </View>
      </View>
      <Text style={{color: '#231E60', padding: 12}} variant="titleLarge">
        Notice Board
      </Text>
      <View style={styles.noticeBoardContainer}>
        <View style={styles.noticeHeadingContainer}>
          <Text>ID Number</Text>
          <Text>19/12/2023</Text>
        </View>
        <View>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <Button onPress={() => {}} style={styles.raiseIssueButton}>
          Raise Issue
          {/*<IconButton*/}
          {/*  icon="information-variant"*/}
          {/*  iconColor="#fff"*/}
          {/*  style={{alignSelf: 'center'}}*/}
          {/*/>*/}
        </Button>
        <IconButton
          icon="android-messages"
          onPress={() => {}}
          containerColor="#231E60"
          iconColor="#fff"
          style={{borderRadius: 8, padding: 8}}
        />
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
  },
  quickSectionContainer: {
    width: '48%',
    marginBottom: 10,
    borderStyle: 'solid',
    borderRadius: 11,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
  },
  quickSectionText: {
    alignSelf: 'center',
    paddingLeft: 16,
  },
  noticeBoardContainer: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 14,
    margin: 8,
  },
  noticeHeadingContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 12,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  raiseIssueButton: {
    justifyContent: 'center',
    width: 150,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
});
