import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screen/home';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
