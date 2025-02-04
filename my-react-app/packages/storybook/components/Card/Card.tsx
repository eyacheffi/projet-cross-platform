import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
interface CardProps {
    title: string;
    description: string;
    color:string;
    image:string;
    borderRadius: number;
}
const Card = ({ title,description,color, image,borderRadius }: CardProps) => {
  return (
    <View style={[styles.container]}>
      <Image source={{ uri: image }} style={[styles.image,{borderRadius}]}/>
      <View style={styles.textContainer}>
        <Text style={[styles.title,{color}]}>{title}</Text>
        <Text style={[styles.description,{color}]}>{description}</Text>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 15,
      },
      image: {
        width: 300,
        height: 300,
      },
      textContainer: {
        paddingTop: 22,
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 30,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: 0.3,
        flex: 1,
      },
      title: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      description: {
        fontSize: 14,
      },
})