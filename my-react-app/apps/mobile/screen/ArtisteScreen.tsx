import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState ,useEffect } from 'react'
import {  Card } from '@my-workspace/my-ui'
import data from '../assets/Artiste.json';


const ArtisteScreen = (navigation) => {
  const [listArtiste, setListArtiste] = useState([]);

    useEffect(() => {
      setListArtiste(data);
    }, []);

    // const listArtiste = [{
    //     name : "Jenny Wilson",
    //     followers : "694, 856 Followers",
    //     image : "-----.png"
    // }]
  return (
    <View  style={{backgroundColor: '#1F1D2B' ,flexWrap: 'wrap', flexShrink: 1 }}>

   {listArtiste.map(item=>{return(
        <View  style={{width:'40%' }}>
                   <Card key={item.id}
                    color="#FFFFFF"
                    description={item.followers}
                    borderRadius={10}
                    image={item.image}
                    title={item.name}
                    />
         </View>
      
            )})}
    </View>
  )
}

export default ArtisteScreen

const styles = StyleSheet.create({})