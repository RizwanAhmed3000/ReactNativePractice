import { View } from 'react-native';
import SignUp from './Screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <GestureHandlerRootView style={{ flex: 1 }}>
        <Ca />
      </GestureHandlerRootView> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignUp' screenOptions={{
          animation: "flip"
        }}>
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='Login' component={Login} />
          {/* <SignUp /> */}
        </Stack.Navigator>
      </NavigationContainer >
    </>
  );
}


