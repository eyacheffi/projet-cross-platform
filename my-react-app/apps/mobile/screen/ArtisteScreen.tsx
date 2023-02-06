import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState ,useEffect } from 'react'
import { Card } from '@my-workspace/my-ui'
import { Search } from "@my-workspace/my-ui";
import data from '../assets/Artiste.json';


const ArtisteScreen = (navigation) => {
  const [listArtiste, setListArtiste] = useState([]);

    useEffect(() => {
      setListArtiste(data);
    }, []);

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const handleSearch = (text) => {
        setSearch(text);
        setFilteredData(
        data.filter((item) => {
            return item.name.toLowerCase().includes(text.toLowerCase());
        })
        );
       
    };

  return (
    <View  style={{backgroundColor: '#1F1D2B' ,flexWrap: 'wrap', flexShrink: 1 }}>
         <View>
        <Search
            backgroundColor="#252836"
            testColor="#FFFFFF"
            borderColor="transparent"
            handleSearch={(text) => handleSearch(text)}
            placeholder="search"
            value={search}
            />
            </View> 
            <View style={{flexDirection: 'row',flexWrap: 'wrap' }}>
          {filteredData.map(item=>{return(
                <View  style={{width:'50%' }}>
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
    </View>
  )
}

export default ArtisteScreen

const styles = StyleSheet.create({})