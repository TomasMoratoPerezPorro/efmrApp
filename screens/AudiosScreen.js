import React from 'react'
import { StyleSheet, Text, View, Settings } from 'react-native'
import { pageStyles } from '../styles';
import { Ionicons } from '@expo/vector-icons';

const AudiosScreen = () => {
  return (
    <View style={[pageStyles.screen, ]}>
      <Text>Audios</Text>
    </View>
  )
};

AudiosScreen.Icon = ({ color, size }) => (
  <Ionicons name="md-settings" color={color} size={size} />
);

export default AudiosScreen;

const styles = StyleSheet.create({
  red: {
    backgroundColor: '#33f'
  }
})
