import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

interface ITodo {
  id: number,
  name: string
}

export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);
  
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if(!todo) {
      Alert.alert("Lỗi  input todo", "Todo không được để trống",
        [
          {
            text: 'Hủy',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          {
            text: 'Xác nhận',
            onPress: () => console.log('OK Pressed')
          }
        ]
      );
      return;
    }
    setListTodo([...listTodo, {id: randomInteger(2, 2000000), name: todo}]);
    setTodo("");
  }

  const deleteTodo = (id: number) => {
    const newTodo = listTodo.filter(item => item.id !== id);
    setListTodo(newTodo);
  }

  return (
    <TouchableWithoutFeedback
      onPress={
        () => Keyboard.dismiss()
      }>
      <View style={styles.container}>
        <Text style={styles.header}>Todo App</Text>
        <View style={styles.body}>
          <TextInput 
            value={todo}
            style={styles.todoInput}
            onChangeText={(value) => { setTodo(value) }}
          >

          </TextInput>
          <Button 
            title='Add todo'
            onPress={handleAddTodo}
          >

          </Button>
        </View>
        <View style={styles.body}>
          <FlatList
            data={listTodo}
            keyExtractor={item => item.id + ""}
            renderItem={({item}) => {
              return (
                <Pressable
                  onPress={() => deleteTodo(item.id)}
                  style = {({pressed}) => ({opacity: pressed ? 0.5 : 1})}
                >
                  <Text 
                    style = {styles.toDoItem}
                  >{item.name}</Text>
                </Pressable>
                
              )
            }}
          >
          </FlatList>
        </View>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 50
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    padding: 5,
    margin: 15
  },
  toDoItem: {
    fontSize: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 20,
    padding: 10
  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20
  }
});
