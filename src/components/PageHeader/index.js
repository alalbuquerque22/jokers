import React, { useState } from 'react';


import { View, Image, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import backIcon from '../../assets/icons/back.png';
import logoImg from '../../assets/logo-wevond.png';
import styles from './styles';

const PageHeader = ({ title, headerRight, children }) => {

const { navigate } = useNavigation();

function handleGoBack() {
    navigate('Home');
  }
    return (

        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logoImg} style={{width:80,height:40}}resizeMode="contain" />
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>

            {children}
        </View>
    )
}


export default PageHeader;