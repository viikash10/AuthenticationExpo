import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style.js'

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {

  
  const navigation = useNavigation() ;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(email,password) ;
    const userData = {
        email: email,
        password
    }
    axios.post("URL",userData).then((res)=>
    {
      console.log(res.data) ;
      if(res.status === "ok")
      {
      Alert.alert("Login Successful");
      AsyncStorage.setItem('token',res.data.data)
        navigation.navigate('Home') ;
      }
    }) ;
  }

  

  return (
    <ScrollView
    contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps={'always'}
    >
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/Images/mainLogo.png')}
        />
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.text_header}>Login</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="#420475"
            style={styles.smallIcon}
          />
          <TextInput
            placeholder="Mobile or Email"
            style={styles.textInput}
            onChange={e => setEmail(e.nativeEvent.text)}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#420475" style={styles.smallIcon} />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            onChange={e => setPassword(e.nativeEvent.text)}
          />
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 8,
            marginRight: 10,
          }}>
          <Text style={{color: '#420475', fontWeight: '700'}}>
            Forgot Password?
          </Text>
        </View>
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.inBut} onPress={() => handleSubmit()}>
          <View>
            <Text style={styles.textSign}>Log in</Text>
          </View>
        </TouchableOpacity>

        <View style={{padding: 15}}>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#919191'}}>
            ----Or Continue as----
          </Text>
        </View>
        <View style={styles.bottomButton}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity style={styles.inBut2}>
              <EvilIcons
                name="user"
                color="white"
                style={styles.smallIcon2}
              />
            </TouchableOpacity>
            <Text style={styles.bottomText}>Guest</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.inBut2}
              onPress={() => {
                navigation.navigate('Register');
              }}
            >
              <AntDesign
                name="adduser"
                color="white"
                style={[styles.smallIcon2, {fontSize: 30}]}
              />
            </TouchableOpacity>
            <Text style={styles.bottomText}>Sign Up</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.inBut2}
              onPress={() => alert('Coming Soon')}>
              <AntDesign
                name="google"
                color="white"
                style={[styles.smallIcon2, {fontSize: 30}]}
              />
            </TouchableOpacity>
            <Text style={styles.bottomText}>Google</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.inBut2}
              onPress={() => alert('Coming Soon')}>
              <FontAwesome
                name="facebook"
                color="white"
                style={[styles.smallIcon2, {fontSize: 30}]}
              />
            </TouchableOpacity>
            <Text style={styles.bottomText}>Facebook</Text>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
  )
}

export default Login ;
