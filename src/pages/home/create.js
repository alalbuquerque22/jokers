import React, { createRef, useEffect, useState } from 'react';
import { View, KeyboardAvoidingView, ImageBackground, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Platform, Image, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Smile from '../../../assets/smile.jpg';
import styles from "./styles";
import api from 'axios';
import Logo from '../../assets/logo-wevond.png';
import { useDispatch } from 'react-redux';
import {setUser}from '../../store'
const Create = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });
    
    const passwordRef = createRef();
    const emailRef = createRef();
    const navigation = useNavigation();

    const validateForm = () => {
        if (data.name.length < 2) return false;
        if (
          data.email.length < 0 ||
          !data.email.includes('@') ||
          !data.email.includes('.')
        )
          return false;
    
        if (data.password.length < 6) return false;
       
        return true;
      };
    //function to validate data inputs and send to api
    const handleCreateUser = () => {
        let newEmail= data.email.trim().toLowerCase();
        setData({...data,email:newEmail})
        if (data.name == '' || data.email == '' || data.password == '') {
            alert('Preencha todos os campos para continuar!');
        } 
    
        else {
            //redirecionar para a localhost do backend
                api.post('http://192.168.1.12:3333/users',data).then(res => {
                console.log(res.data);  
           
                alert(`Usuário ${data.name} criado com sucesso!`); 
                navigation.navigate('Initial')
                }).catch(err => {
                    console.log('erro do api.post', err);
                })
           
        }
    }
    
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
                                <Image source={Logo} resizeMode="center"/>
                            </View>
                            <View style={{marginTop:'35%'}}>
                                <TextInput
                                    style={[styles.button, { paddingLeft: 20 }]}
                                    placeholder="Nome"
                                    value={data.name}
                                    onChangeText={(text) => setData({ ...data, name: text })}
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    onSubmitEditing={() =>
                                        emailRef.current.focus()
                                    } />
                                <TextInput
                                    style={[styles.button, { paddingLeft: 20 }]}
                                    placeholder="E-mail"
                                    ref={emailRef}
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
                                        data.password.length >= 6 && handleCreateUser()
                                    }></TextInput>
                                <View style={{ marginTop: 25 }}>
                                <TouchableOpacity disabled={!validateForm()}onPress={handleCreateUser }
                                style={{marginTop:20}}>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <Text
                                            style={[
                                                styles.textButton,
                                                {fontSize: 20,},
                                                validateForm?.() 
                                                ? {color:'white'} 
                                                : { color: '#999' },
                                            ]}>
                                            Cadastrar
                                        </Text>
                                       
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Initial')}
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
    logo:{
        marginTop:'25%',
        backgroundColor:'rgba(0,0,0,0.5)',
        width:(Dimensions.get('window').width)*0.7,
        height:150,
        borderRadius:(Dimensions.get('window').width)*0.05,
        justifyContent:'center',
    alignItems:'center'

}
})

export default Create;