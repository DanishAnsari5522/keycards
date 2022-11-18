import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home1 from '../screen/Home'
import Login1 from '../screen/Login';
const Tab = createBottomTabNavigator();

function Test() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home1" component={Home1} />
      <Tab.Screen name="Loign1" component={Login1} />
    </Tab.Navigator>
  );
}
export default Test;