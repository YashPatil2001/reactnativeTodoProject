/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
 import { StyleSheet, Text, View, FlatList, Alert, Keyboard } from 'react-native';
 import Header from './components/header'
 import TodoItem from './components/todoItem';
 import AddTodo from './components/addTodo';
 import SandBox from './components/sandBox';


 export default function App() {

  const [todos,setTodos] = useState([
    { text: 'Make kawa sync',key: 1},
    { text: 'resolved neelam food land issue',key: 2},
    { text: 'learn react native',key: 3},
    { text: 'drink coffee',key: 4},
    { text: 'complete incomplete task',key: 5},
    { text: 'attend college practical',key: 6},
  ])
  
  const pressHandler = (key) => {
      setTodos((prevTodos) => {
          return prevTodos.filter((todo) => todo.key != key);
      })
  }

  const submitHandler = (text) => {
     setTodos((prevTodos) => {
       return [
         {text: text,key: Math.random().toString()},
         ...prevTodos
       ]
     })
     text = ''
     Keyboard.dismiss();
  }
   return (
    //  <SandBox />
     <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
              <FlatList 
                data={ todos }
                renderItem={({ item }) => (
                  <TodoItem  item={item} pressHandler={pressHandler} />
                )}
              />
          </View>
        </View>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
   },
   content: {
     padding: 20,
     flex: 1,
    //  backgroundColor: 'pink'
   },
   list: {
     marginTop: 20,
     marginBottom: 10,
     flex: 1,
    //  backgroundColor: 'yellow'
   }
   
 });