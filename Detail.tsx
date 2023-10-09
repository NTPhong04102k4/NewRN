import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function DetailScreen({navigation, route}: any) {
  const [count, setCount] = useState(route?.params.obj.number);
  console.log(route?.params.obj.number);
  useEffect(() => {
    if (route?.params.obj.number != count) setCount(route?.params.obj.number);
  }, [route?.params.obj.number]);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>
        truyền từ home{JSON.stringify(route?.params.obj)}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={styles.btn}>Lưu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nut}
        onPress={() => {
          setCount(count + 1);
          route?.params.AB(count + 1);
        }}>
        <Text style={{fontSize: 30}}>+</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        {count}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    fontSize: 30,
    backgroundColor: 'yellow',
    width: 300,
    height: 50,
    borderRadius: 25,
    color: 'black',
    textAlign: 'center',
  },
  nut: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 30,
    alignItems: 'center',
  },
});
export default DetailScreen;
