import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DetailScreen from './Detail';
import HomeScreen from './Home';
import AboutScreen from './About';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
const Stack = createNativeStackNavigator();
function Navi() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{}} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Detail" component={DetailScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}
const BottomTab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image
              style={{width: 25, height: 25}}
              source={require('./user.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={Navi}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image
              style={{width: 25, height: 25}}
              source={require('./home.png')}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}
export default App;
