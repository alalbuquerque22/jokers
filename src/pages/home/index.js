import React, { createRef, useState } from "react";
import {
    View,
    Text,
    ImageBackground,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity,
    Platform,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image
} from "react-native";
import styles from "./styles";
import Smile from '../../../assets/smile.jpg';
import Logo from '../../assets/logo-wevond.png';
import {setUser} from '../../store';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useDispatch } from "react-redux";
const Home = () => {
const dispatch = useDispatch();

    const { navigate } = useNavigation();

    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const handleLogin = () => {
        axios.get(`http://192.168.1.12:3333/users?email=${data.email}`).
            then(res => {
                if (res.data.length > 0) {;
               let pass = res.data[0].password
                if(pass == data.password){
                    dispatch({type: 'SET_USER', user: res.data[0].name});
                    navigate('Main');
                }else{
                    alert('Senha incorreta');
                }
            }else{
                alert('Email incorreto');}
            })
    }
    const passwordRef = createRef();
    const login = () => { }
    return (
        <ImageBackground source={Smile} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}>

                    <ScrollView showsVerticalScrollIndicator={false}
                        style={{ marginTop: 0 }}>
                        <View style={styles.content}>
                            <View style={inline.logo}>
                                <Image source={Logo} resizeMode="center" />
                            </View>
                            <View style={{ marginTop: '35%' }}>
                                <TextInput
                                    style={[styles.button, { paddingLeft: 20 }]}
                                    placeholder="E-mail"
                                    value={data.email}
                                    onChangeText={(text) => setData({ ...data, email: text })}
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    onSubmitEditing={() =>
                                        passwordRef.current.focus()
                                    }></TextInput>
                                <TextInput
                                    style={[styles.button, { paddingLeft: 20 }]}
                                    placeholder="Senha"
                                    value={data.password}
                                    secureTextEntry
                                    onChangeText={(text) => setData({ ...data, password: text })}
                                    ref={passwordRef}
                                    returnKeyType="done"
                                    onSubmitEditing={() =>
                                        data.password.length >= 6 && login()
                                    }></TextInput>
                                <View style={{ marginTop: 25 }}>
                                    <TouchableOpacity
                                        onPress={
                                            handleLogin
                                        }>
                                        <View
                                            style={{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                            <Text
                                                style={[
                                                    styles.textButton,
                                                    { fontSize: 20 }
                                                ]}>
                                                Entrar
                                            </Text>

                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => navigate('Create')}
                                        style={{ marginTop: 20 }}>
                                        <View
                                            style={{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                            <Text
                                                style={[
                                                    styles.textButton,
                                                    { fontSize: 20 }
                                                ]}>
                                                Criar conta
                                            </Text>

                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigate('Initial')}
                                        style={{ marginTop: 20 }}>
                                        <View
                                            style={{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                            <Text
                                                style={[
                                                    styles.textButton,
                                                    { fontSize: 20, }
                                                ]}>
                                                Voltar
                                            </Text>

                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    );
}

const inline = StyleSheet.create({
    logo: {
        marginTop: '25%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: (Dimensions.get('window').width) * 0.7,
        height: 150,
        borderRadius: (Dimensions.get('window').width) * 0.05,
        justifyContent: 'center',
        alignItems: 'center'

    }
})
export default Home;