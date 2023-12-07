import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react'
import { auth, createUserWithEmailAndPassword } from '../FirebaseConfig/Config.js';

const SignUp = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function siguUpHandler() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                if (user) {
                    navigation.navigate('Login')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }

    function navigateTo(){
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Sign In Form</Text>
            {/* <StatusBar style="auto" /> */}
            <TextInput placeholder='first name' style={styles.inputField} onChangeText={setFirstName} />
            <TextInput placeholder='last name' style={styles.inputField} onChangeText={setLastName} />
            <TextInput placeholder='Email' keyboardType='email-address' style={styles.inputField} onChangeText={setEmail} />
            <TextInput placeholder='Password' secureTextEntry={true} style={styles.inputField} onChangeText={setPassword} />
            <Button title='sign up' style={styles.btn} onPress={siguUpHandler} />
            <Button title='Log in' style={styles.btn} onPress={navigateTo} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputField: {
        marginVertical: 10,
        borderWidth: 1,
        width: "50%",
        padding: 5,
        borderRadius: 5,
    },
    btn: {
        width: "50%",
        marginTop: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    heading: {
        fontWeight: "900",
    }
});


export default SignUp