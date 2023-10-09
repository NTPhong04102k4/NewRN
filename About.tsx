import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function AboutScreen({navigation, route}: any) {
  console.log(route);

  return (
    <View style={styles.view}>
      <Text style={{fontSize: 20}}>Why</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AboutScreen;
