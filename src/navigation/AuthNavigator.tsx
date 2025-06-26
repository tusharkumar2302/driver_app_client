import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/Login Screen/LoginScreen';
import SignUpScreen from '../screens/auth/SignUp Screen/SignUpScreen';
import ForgotPassword1 from '../screens/auth/Forget Password Screen/ForgotPassword-1';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'fade' }}
      initialRouteName="Login"
    >
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='SignUp' component={SignUpScreen}/>
      <Stack.Screen name='ForgetPassword' component={ForgotPassword1}/>
    </Stack.Navigator>
  );
}
