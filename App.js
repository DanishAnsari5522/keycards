import { StyleSheet, View } from 'react-native';
import BottomNavigation from './src/Navigation/BottomNavigation';
import RootNavigator from './src/Navigation/RootNavigator';
import Login from './src/screen/Login';
import Test from './src/Navigation/Test'

export default function App() {
  return (
    <>
      <RootNavigator />
      {/* <BottomNavigation /> */}
    </>
  );
}

