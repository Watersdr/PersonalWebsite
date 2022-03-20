import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function PhoneHeader(props) {
  return (
    <View style={styles.background}>
      <Text>Donnie Waters</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  }
});
