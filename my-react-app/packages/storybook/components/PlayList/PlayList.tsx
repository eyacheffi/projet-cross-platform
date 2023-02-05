import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
interface PlayListProps {
    title: string;
    description: string;
    backgroundColor:string;
    color:string;
    image:string;
}
 
const PlayList = ({ title,description,backgroundColor,color, image }: PlayListProps) => {
  return (
    <View style={[styles.container,{backgroundColor}]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={[styles.title,{color}]}>{title}</Text>
        <Text style={[styles.description,{color}]}>{description}</Text>
      </View>
    </View>
  )
}

export default PlayList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
      },
      image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
      },
      textContainer: {
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