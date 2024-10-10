import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../review/home';
import DetailScreen from '../review/detail';
import AboutScreen from '../review/about';
import AppHeader from './app.header';


const HomeLayout = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='home' component={HomeScreen}
                options={{header: () => <AppHeader></AppHeader>}}>
            </Stack.Screen>
            <Stack.Screen 
                name='review-detail' component={DetailScreen}
                options={{title: 'Chi tiết Review'}}
            >
            </Stack.Screen>
      </Stack.Navigator>
    );
}

const AppNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            // screenOptions={{headerShown: false}}    
        >
            <Drawer.Screen 
                name='home1' 
                component={HomeLayout}
                options={{title: 'Trang chủ', header: () => <></>}}
                >
            </Drawer.Screen>
            <Drawer.Screen 
                name='about' 
                component={AboutScreen}
                options={{title: 'Thông tin', header: () => <AppHeader></AppHeader>}}
            ></Drawer.Screen>
      </Drawer.Navigator>
    )
}

export default AppNavigation;