import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/Login Screen/LoginScreen';
import SignUpScreen from '../screens/auth/SignUp Screen/SignUpScreen';
import ForgotPassword1 from '../screens/auth/Forget Password Screen/ForgotPassword-1';
import ForgotPassword2 from '../screens/auth/Forget Password Screen/ForgotPassword-2';
import CreateNewPassword from '../screens/auth/Forget Password Screen/CreateNewPassword';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'fade' }}
      initialRouteName="Login"
    >
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='SignUp' component={SignUpScreen}/>
      <Stack.Screen name='ForgetPassword1' component={ForgotPassword1}/>
      <Stack.Screen name='ForgetPassword2' component={ForgotPassword2}/>
      <Stack.Screen name='CreateNewPassword' component={CreateNewPassword}/>
    </Stack.Navigator>
  );
}
