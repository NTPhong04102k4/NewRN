import React, {useState} from 'react';
import {TouchableOpacity, View, ImageBackground, Text} from 'react-native';
import Icon from 'react-native-vector-icons';

function HomeScreen({navigation}: any) {
  const [state, setState] = useState(0);

  return (
    <ImageBackground
      source={require('./bgc.jpg')}
      style={{
        height: null,
        width: null,
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 50,
      }}>
      <View
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingBottom: 100,
        }}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'green',
            borderRadius: 30,
            alignItems: 'center',
            margin: 10,
          }}
          onPress={() => setState(state - 1)}>
          <Text style={{fontSize: 30}}>-</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 50, fontWeight: '100', marginBottom: 5}}>
          {state}
        </Text>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'green',
            borderRadius: 30,
            alignItems: 'center',
            marginLeft: 10,
            marginBottom: 10,
          }}
          onPress={() => {
            setState(state + 1);
          }}>
          <Text style={{fontSize: 30}}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          backgroundColor: 'green',
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        onPress={() =>
          navigation.navigate('Detail', {
            AB: setState,
            obj: {
              name: 'Phong',
              number: state,
            },
          })
        }>
        <Text>Bắt đầu</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
export default HomeScreen;
