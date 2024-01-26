import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert, Image } from 'react-native';
import { signUpWithEmail } from './AuthFunctions'; // Import your signUpWithEmail function
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Signup({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onPressSignUp = async () => {
        try {
            await signUpWithEmail(email, password); // Call your signUpWithEmail function
            Alert.alert("Signup successful!");
            // Navigate to the login screen or show success message
        } catch (error) {
            Alert.alert("Signup failed:", error.message);
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('./sohaib.png')}
                style={styles.image}
            />
            <Text style={styles.title}>Welcome to Sohaib Zahid</Text>
            <Text style={styles.title}>Signup</Text>

            <TextInput
                placeholder="Email"
                style={styles.input}
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
            />
            
            <TextInput
                placeholder="Username"
                style={styles.input}
                keyboardType="username"
                // onChangeText={setEmail}
                // value={email}
            />

            <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />

            <View style={styles.buttonContainer}>
                <Button
                    title="Signup"
                    onPress={onPressSignUp}
                    color="#0077B6"
                />
            </View>

            <Text style={styles.linkText}>
                Already have an account?
                <Text style={styles.link} onPress={() => navigation.navigate('Login')}> Login</Text>
            </Text>

            <Text style={styles.linkText}>
                Go To the Chat Screen
                <Text style={styles.link} onPress={() => navigation.navigate('Chat')}> Chat </Text>
            </Text>

            <Text style={styles.linkText}>
                Go To the Movies Screen
                <Text style={styles.link} onPress={() => navigation.navigate('Movies')}> Movies </Text>
            </Text>
        </View>
    );
}

// Define your navigation stack
function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Signup">
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="NewScreen" component={NewScreen} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Books" component={Books} />
            <Stack.Screen name="movies" component={movies} />

            <Stack.Screen 
  name="Ali" 
  component={Chat}
  options={{
    headerShown:false
  }}
/>
        </Stack.Navigator>
    </NavigationContainer>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 75,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#444',
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    buttonContainer: {
        marginTop: 10,
        width: '100%',
    },
    linkText: {
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
    },
    link: {
        color: 'blue',
    },
});
