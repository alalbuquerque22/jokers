import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, FlatList, TextInput } from "react-native";
import { BorderlessButton, } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

import api from "../../services/api";
import styles from "./styles";

import { useSelector, useDispatch } from 'react-redux';
import PageHeader from "../../components/PageHeader";
import CardItem from "../../components/CardItem";
const Main = () => {
    const [jokes, setJokes] = useState([])
    const { user } = useSelector(state => state)
    useEffect(() => {
        handleJokes()
    }, [])
    const handleJokes = async () => {
        await api.get(`/joke/Any?amount=10&type=twopart`).then(response => {
            setJokes(response.data)
            setJokes([...jokes, ...response.data]);
        }).
            catch(error => console.log('error', error))
    }


    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <PageHeader
                        title={`Piadas \nDisponíveis`}
                        headerRight={(
                            <BorderlessButton onPress={()=>{}}>
                        <Text style={{color:'white',fontSize:20}}>Bem Vindo! {'\n'}{ user}</Text>
                            </BorderlessButton>
                        )}
                    >
                          
                   </PageHeader>
                </View>
                <View style={{}}>
                    <FlatList
                        data={jokes.jokes}
                        horizontal={false}
                        keyExtractor={(item) => String(item?.id)}
                        contentContainerStyle={{ paddingBottom: 200 }}
                        renderItem={({ item }) => (
                            <CardItem
                                category={item?.category}
                                joke={item?.joke}
                                setup={item?.setup}
                                delivery={item?.delivery}
                                language={item?.lang}
                                flag={item?.flags}
                            />)}
                        showsVerticalScrollIndicator={false}
                    />

                </View>

            </View>
        </SafeAreaView>
    )
}


export default Main;