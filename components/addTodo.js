import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function AddTodo( { submitHandler }){
    const [ text , setText ] = useState('')
    
    const changeHandler = (val) => {
            setText(val);
    }
    return (
        <View>
            <TextInput 
              style={styles.input}
              placeholder='new todo...'
              value={text}
              onChangeText={(val) => changeHandler(val)}/>
            <Button 
              color='coral'
              title='Add Todo'
              onPress={() => {
                if(text.length < 3){
                    Alert.alert('Invalid input','Todo shoulds be has atleat 4 chars.!!',[
                      {text: 'Ok',onPress: () => {console.log('alert done');}}
                    ])
                    return;
                  }
                  submitHandler(text);
                  setText( (prevText) => {
                      return '';
                  })
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: 'coral',
        marginHorizontal: 30,
        borderBottomWidth: 1
    },
    button: {
        color: 'coral'
    }
})