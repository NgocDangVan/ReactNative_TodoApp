import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import HomeScreen from './components/review/home';
import DetailScreen from './components/review/detail';
import AboutScreen from './components/review/about';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
interface ITodo {
  id: number,
  name: string
}

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { OPENSANS_REGULAR } from './utils/const';
import AppNavigation from './components/navigation/app.navigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [todo, setTodo] = useState("");
  // const [listTodo, setListTodo] = useState<ITodo[]>([]);
  
  // function randomInteger(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  // const handleAddTodo = () => {
  //   if(!todo) {
  //     Alert.alert("Lỗi  input todo", "Todo không được để trống",
  //       [
  //         {
  //           text: 'Hủy',
  //           onPress: () => console.log('Cancel Pressed'),
  //           style: 'cancel'
  //         },
  //         {
  //           text: 'Xác nhận',
  //           onPress: () => console.log('OK Pressed')
  //         }
  //       ]
  //     );
  //     return;
  //   }
  //   setListTodo([...listTodo, {id: randomInteger(2, 2000000), name: todo}]);
  //   setTodo("");
  // }

  // const deleteTodo = (id: number) => {
  //   const newTodo = listTodo.filter(item => item.id !== id);
  //   setListTodo(newTodo);
  // }

  // return (
  //   <TouchableWithoutFeedback
  //     onPress={
  //       () => Keyboard.dismiss()
  //     }>
  //     <View style={styles.container}>
  //       <Text style={styles.header}>Todo App</Text>
  //       <View style={styles.form}>
  //         <TextInput 
  //           value={todo}
  //           style={styles.todoInput}
  //           onChangeText={(value) => { setTodo(value) }}
  //         >

  //         </TextInput>
  //         <Button 
  //           title='Add todo'
  //           onPress={handleAddTodo}
  //         >

  //         </Button>
  //       </View>
  //       <View style={styles.todo}>
  //         <FlatList
  //           data={listTodo}
  //           keyExtractor={item => item.id + ""}
  //           renderItem={({item}) => {
  //             return (
  //               <Pressable
  //                 onPress={() => deleteTodo(item.id)}
  //                 style = {({pressed}) => ({opacity: pressed ? 0.5 : 1})}
  //               >
  //                 <View style={styles.groupTodo}>
  //                   <Text 
  //                     style = {styles.toDoItem}
  //                   >{item.name}</Text>
  //                   <AntDesign name='close' size={24} color="black"></AntDesign>
  //                 </View>
  //               </Pressable>
                
  //             )
  //           }}
  //         >
  //         </FlatList>
  //       </View>
  //     </View>
  //   </TouchableWithoutFeedback>
  // );
  const [loaded, error] = useFonts({
    [OPENSANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <AppNavigation></AppNavigation>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // groupTodo: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   borderWidth: 1,
  //   borderStyle: "dashed",
  //   marginBottom: 15,
  //   marginHorizontal: 10,
  //   padding: 10,
  // },
  // container: {
  //   paddingTop: 50,
  //   borderWidth: 1,
  //   borderColor: "red",
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
  // header: {
  //   backgroundColor: 'orange',
  //   paddingHorizontal: 20,
  //   textAlign: "center",
  //   fontSize: 50,
  //   flex: 1
  // },
  // form: {
  //   flex: 2,
  //   marginBottom: 20,
  // },
  // todo: {
  //   flex: 8,
  // },
  // todoInput: {
  //   borderBottomWidth: 1,
  //   borderBottomColor: "blue",
  //   padding: 5,
  //   margin: 15
  // },
  // toDoItem: {
  //   fontSize: 20,
  // },
  // body: {
  //   paddingHorizontal: 10,
  //   marginBottom: 20,
  //   flex: 1
  // }
});
