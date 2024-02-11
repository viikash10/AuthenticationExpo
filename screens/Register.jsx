import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style.js'


import { ScrollView } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

const Register = () => {


    const [name,setName] = useState('') ;
    const [nameVerify,setNameVerify] = useState(false) ;
    const [email,setEmail] = useState('') ;
    const [emailVerify,setEmailVerify] = useState(false) ;
    const [mobile,setMobile] = useState('') ;
    const [mobileVerify,setMobileVerify] = useState(false) ;
    const [password,setPassword] = useState('') ;
    const [passwordVerify,setPasswordVerify] = useState(false) ;
    const [showPassword, setShowPassword] = useState(false);

// handle submit 
function handleSubmit()
{

    console.log("Register Button Clicked")
    const userData = {
        name: name,
        email:email,
        mobile:mobile,
        password:password
    }
    axios
         .post("http://192.168.1.3:3000/register" , userData)
         .then((res) => console.log(res.data))
         .catch(e=>console.log(e)) ;
}




//    handle name
    function handleName(e){
        //console.log(e.nativeEvent.text)
        var varName = e.nativeEvent.text;
        setName(varName) ;
        setNameVerify(false);
        if(varName.length > 1)
        {
            setNameVerify(true) ;
        }
        
    }

//    handle email
    function handleEmail(e){
        // console.log(e.nativeEvent.text)
        var varEmail = e.nativeEvent.text;
        setEmail(varEmail) ;
        setEmailVerify(false);
        if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(varEmail)) {
            setEmail(varEmail);
            setEmailVerify(true);
          }
    }
  
    // handle mobile
    function handleMobile(e) {
        const mobileVar = e.nativeEvent.text;
        setMobile(mobileVar);
        setMobileVerify(false);
        if (/[6-9]{1}[0-9]{9}/.test(mobileVar)) {
          setMobile(mobileVar);
          setMobileVerify(true);
        }
      }

      // handle password 
      function handlePassword(e) {
        const passwordVar = e.nativeEvent.text;
        setPassword(passwordVar);
        setPasswordVerify(false);
        if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
          setPassword(passwordVar);
          setPasswordVerify(true);
        }
      }




  return (
    <ScrollView
    contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps={'always'}>
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/Images/signUp.png')}
        />
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.text_header}>Register</Text> 

        {/* Name */}
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="#420475"
            style={styles.smallIcon}
          />
          <TextInput
            placeholder="Name"
            style={styles.textInput}
            onChange={(e)=>handleName(e)}
            //onChange={e => setEmail(e.nativeEvent.text)}
          />

          {name.length<1 ? null : nameVerify ? (<Feather name='check-circle' color={'green'} style={styles.smallIcon}/>) : (<MaterialIcons name='error-outline' color={'red'} style={styles.smallIcon}/>)}
        
        </View>
        {name.length<1 ? null : nameVerify ? null : 
       ( <Text style={{marginLeft: 20, color: 'red'}}>Name should be more than one character</Text>)
        }


        {/* email */}
        <View style={styles.action}>
          <Fontisto name="email" color="#420475" style={styles.smallIcon} />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            onChange={(e)=>handleEmail(e)}
          />
          {email.length<1 ? null : emailVerify ? (<Feather name='check-circle' color={'green'} style={styles.smallIcon}/>) : (<MaterialIcons name='error-outline' color={'red'} style={styles.smallIcon}/>)}
        </View>
        {email.length<1 ? null : emailVerify ? null : 
       ( <Text style={{marginLeft: 20, color: 'red'}}>Email should be more than one character</Text>)
        }

         {/* Mobile */}
        <View style={styles.action}>
          <FontAwesome6 name="mobile-screen" color="#420475" style={styles.smallIcon} />
          <TextInput
            placeholder="Mobile"
            style={styles.textInput}
            onChange={e => handleMobile(e)}
            // onChange={e => setPassword(e.nativeEvent.text)}
          />
          {mobile.length<1 ? null : mobileVerify ? (<Feather name='check-circle' color={'green'} style={styles.smallIcon}/>) : (<MaterialIcons name='error-outline' color={'red'} style={styles.smallIcon}/>)}
        </View>
        {mobile.length<1 ? null : mobileVerify ? null : 
       ( <Text style={{marginLeft: 20, color: 'red'}}>Mobile number should be 10 digits</Text>)
        }


        {/* Password */}
        <View style={styles.action}>
          <FontAwesome name="lock" color="#420475" style={styles.smallIcon} />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            onChange={e => handlePassword(e)}
            secureTextEntry={showPassword}
            // onChange={e => setPassword(e.nativeEvent.text)}
          />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {password.length < 1 ? null : !showPassword ? (
                <Feather
                  name="eye-off"
                  style={{marginRight: -10}}
                  color={passwordVerify ? 'green' : 'red'}
                  size={23}
                />
              ) : (
                <Feather
                  name="eye"
                  style={{marginRight: -10}}
                  color={passwordVerify ? 'green' : 'red'}
                  size={23}
                />
              )}
            </TouchableOpacity>
        </View>
        {password.length < 1 ? null : passwordVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Uppercase, Lowercase, Number and 6 or more characters.
            </Text>
          )}




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
            <Text style={styles.textSign}>Register</Text>
          </View>
        </TouchableOpacity>

        
      </View>
    </View>
  </ScrollView>
  )
}

export default Register ;
