import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PhoneHeader from './PhoneHeader';

function PhoneBackground(props) {
  return (
    <View style={styles.background}>
      <PhoneHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '80%',
    width: '25%',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#2A323F'
  },
});

export default React.memo(PhoneBackground);
