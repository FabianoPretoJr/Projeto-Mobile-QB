import React from 'react';
import { Text, ImageBackground, View, TextInput, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import BgLogin from '../../assets/img/bgLogin.png';
import bgLogo from '../../assets/img/bgLogo.png';

import styles from './styles';

function Login() {
    return (
      <View style={styles.container}>
        <ImageBackground resizeMode="contain" source={BgLogin} style={styles.bgImage}>
          <Image style={styles.logo} source={bgLogo} />
          <Text style={styles.text}>Seja bem-vindo.</Text>
            <TextInput style={styles.input} placeholder="Email"/>
            <TextInput style={styles.input} placeholder="Senha"/>
          <RectButton style={styles.button}> 
            <Text style={styles.textButton}>
              ENTRAR
            </Text>
          </RectButton>
        </ImageBackground>
      </View>
    );
}

export default Login;