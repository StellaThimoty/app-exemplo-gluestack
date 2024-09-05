import { StyleSheet, View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { router } from 'expo-router'

export default function Login() {
    const [user, setUser] = useState({email: '', password:''})
    const loginFunc = () => {
        if(user.email == "email@mail" && user.password == '123'){
            router.navigate('./home')
        }
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center'
    }
})