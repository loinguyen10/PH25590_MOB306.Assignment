import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/homeData'
import Info from './src/infoData'
import User from './src/userData'
import SuaText from './src/userData/textInput'
import AddText from './src/userData/addText'

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="SuaText" component={SuaText} />
        <Stack.Screen name="AddText" component={AddText} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;