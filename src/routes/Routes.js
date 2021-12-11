import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import Create from '../pages/home/create.js';
import Smile from '../../assets/smile.jpg';
import Main from '../pages/main';
const {width,height} = Dimensions.get('window');
function HomeScreen() {
    const { navigate } = useNavigation();
    function handleNavigateToHome() {
        navigate('Home');
    }
    function handleNavigateToCreate() {
        navigate('Create');
    }
    return (
        <View style={{ flex: 1, }}>
            <ImageBackground source={Smile} resizeMode="cover" style={styles.image}>
                <TouchableOpacity onPress={handleNavigateToHome} style={[styles.button,{marginTop:'70%'}]}>
                    <Text style={styles.buttonText}>Risadas!</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToCreate} style={styles.button}>
                    <Text style={styles.buttonText}>Criar Conta!</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function Routes() {
    return (

        <Stack.Navigator screenOptions={{
            headerShown: false,
        }} initialRouteName="Initial">
            <Stack.Screen
                name="Initial"
                component={HomeScreen} />
            <Stack.Screen
                name="Home"
                component={Home} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Create" component={Create} />
        </Stack.Navigator>

    );
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    button:{
        width: (width *30)/100,
        height: (height *5)/100,
        marginTop: (height * 5)/100,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 8,
        backgroundColor:' rgba(255,255,255,0.5)',
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',

    }
})
export default Routes;