import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screen/home';
import {NewTransaction} from '../screen/new-transaction';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: () => null}}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{presentation: 'transparentModal', header: () => null}}>
        <Stack.Screen
          options={{animation: 'slide_from_bottom'}}
          name="NewTransaction"
          component={NewTransaction}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Routes;
