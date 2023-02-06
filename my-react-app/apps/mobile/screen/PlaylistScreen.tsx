import {  StyleSheet,  TouchableOpacity, View ,ScrollView ,FlatList ,Text ,TextInput} from 'react-native'
import React, { useState ,useEffect } from 'react'
import { PlayList } from "@my-workspace/my-ui";
import { MyButton } from "@my-workspace/my-ui";
import { Search } from "@my-workspace/my-ui";
import data from '../assets/Playlist.json';


const PlaylistScreen = ({ navigation }) => {
    const [playlist, setData] = useState([]);

    useEffect(() => {
        setData(data);
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
    <View>
        <View style={{ backgroundColor: '#1F1D2B' }}>
            <Search
            backgroundColor="#252836"
            testColor="#FFFFFF"
            borderColor="transparent"
            handleSearch={(text) => handleSearch(text)}
            placeholder="search"
            value={search}
            />
        </View>
        <View style={{ height: 400 }}>
            <ScrollView>
            {filteredData.map(item=>{return(
                <TouchableOpacity key={item.id} onPress={()=>navigation.navigate("Home", {...item})}>
                    <PlayList 
                        backgroundColor="#1F1D2B"
                        color="#FFFFFF"
                        description={item.artiste}
                        image={item.poster}
                        title={item.name}
                    />
                </TouchableOpacity>
                
            )})}
            </ScrollView>
        </View>
            

        <View  style={styles.container} >
            <MyButton
            backgroundColor="transparent"
            onPress={() => {navigation.navigate('Home')}}
            text="Welcome Page"
            />
            <MyButton
            backgroundColor="transparent"
            onPress={() => {navigation.navigate('Artiste')}}
            text="Artiste"
            />
        </View>
        
    </View>
)
}

export default PlaylistScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
      },
})