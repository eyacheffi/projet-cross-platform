import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View ,Text , Image  } from 'react-native';
import { MyButton } from "@my-workspace/my-ui";



const WelcomeComponent = ({navigation}) => {
    const animation = useRef(null);
    useEffect(() => {
      // You can control the ref programmatically, rather than using autoPlay
      // animation.current?.play();
    }, []);   
  
    return (
      <View style={styles.animationContainer}>
       <Text style={styles.titleContainer}>Shtify</Text>
       <Image
            style ={styles.imageContainer}
            source={require ( "../assets/giphy.gif")}
          />
        <View style={styles.buttonContainer}>
        
        <MyButton
          backgroundColor="transparent"
          onPress={() =>  navigation.navigate("Playlist")}
          text="Welcome"
        />
          
        </View>
      </View>
    );
}

export default WelcomeComponent


const styles = StyleSheet.create({
    animationContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    buttonContainer: {
      paddingTop: 20,
    },
    titleContainer:{
      marginBottom: '40px',
      fontFamily: 'Cochin',
      fontSize: 40,
      fontWeight: 'bold',
    },
    imageContainer:{
      width: "70%", 
      height:"70%",
      borderRadius:20,
    },
  });