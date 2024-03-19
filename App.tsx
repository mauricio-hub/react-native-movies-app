import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/presentation/navigations/Navigations';

export default function App() {
  return (
    <NavigationContainer>
       <Navigation />
    </NavigationContainer>
  
  );
}


