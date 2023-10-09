import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DetailScreen from './Detail';
import HomeScreen from './Home';
import AboutScreen from './About';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
function Navi() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
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
const BottomTab = createMaterialBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcon name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="About"
        component={Navi}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcon name="bell" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={MyDrawer}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcon name="account" color={color} size={26} />
          ),
          tabBarLabel: 'Profiles',
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
