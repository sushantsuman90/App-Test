import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import logo1 from '../../assets/fav-4.png'
// import bg from '../assets/menu-bg.jpeg'
// import logo from '../assets/checkin.png'
import {Modal, Portal} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

type DrawerProps = {};

const CustomDrawer = (props: DrawerProps) => {
  const navigator = useNavigation();

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 20,
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const menuItems = [
    {
      title: 'Ratings and Reviews',
      icon: 'bookmark-outline',
      navigateTo: 'RatingsAndReviews',
    },
    {
      title: 'Raised Issues History',
      icon: 'history',
      navigateTo: 'RaisedIssueHistoryList',
    },
    {title: 'Saved Items', icon: 'bookmark-outline', navigateTo: 'SavedItems'},
    {
      title: 'Bugs and Feedback',
      icon: 'bug-outline',
      navigateTo: 'BugsReviews',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#fff'}}>
        <View className="p-5 flex flex-row items-baseline">
          <Text className="text-2xl text-[#231E60] font-bold">KMC </Text>
          <Text className="text-[#231E60] font-bold"> WARD 111</Text>
        </View>

        <View className="ml-10 mr-10">
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}>
              <View className="flex flex-row justify-between items-center">
                <Text className="p-2 text-[#231E60] font-bold text-base">
                  Are you sure you want to log out?
                </Text>
                <TouchableOpacity onPress={hideModal}>
                  <Text className="text-[#231E60]">
                    <Icon name="close" size={18} />
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="p-5 mt-5">
                <TouchableOpacity>
                  <View className="bg-[#231E60] p-3 rounded-lg">
                    <Text className="text-white ml-auto mr-auto text-base">
                      Yes
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{paddingVertical: 15}}>
                  <View className="border border-[#231E60] rounded-lg p-2">
                    <Text className="text-[#231E60] ml-auto mr-auto text-base">
                      No
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Modal>
          </Portal>
        </View>

        <View className="px-4 py-7">
          <View className=" w-full border rounded-2xl border-[#B6B6B6]">
            <View className="p-10">
              <View className="border rounded-full border-[#B6B6B6] ml-auto mr-auto mt-auto mb-auto p-5">
                <Text className="text-[#231E60] font-extrabold">
                  <Ionicons name="person-outline" size={30} />
                </Text>
              </View>

              <View className="ml-auto mr-auto mt-3 flex flex-col items-center">
                <Text className="py-3 font-bold text-[#231E60] text-base">
                  Suvankar Malakar
                </Text>
                <Text className="text-[#231E60] text-base mb-4">
                  +91 xxxxxxxxxxx
                </Text>
                <TouchableOpacity
                  onPress={() => navigator.navigate('EditProfile')}>
                  <View className="bg-[#231E60] p-3 rounded-lg">
                    <Text className="text-white">Edit Profile</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{backgroundColor: '#fff', paddingTop: 10}}
          className="px-5 flex flex-col justify-between">
          {/* <DrawerItemList {...props} /> */}
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigator.navigate(item.navigateTo)}
              className="rounded-xl my-2">
              <View className="bg-blue p-3 rounded-xl flex flex-row justify-between">
                <Text className="text-white">{item.title}</Text>
                <Text className="text-white">
                  {item.icon.startsWith('ion') ? (
                    <Ionicons name={item.icon} size={22} />
                  ) : (
                    <Icon name={item.icon} size={22} />
                  )}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </DrawerContentScrollView>

      <View style={{padding: 10, borderTopWidth: 0, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={showModal} style={{paddingVertical: 15}}>
          <View className="border border-[#231E60] rounded-lg ml-auto mr-auto p-2 px-4">
            <Text className="text-[#231E60]">Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
