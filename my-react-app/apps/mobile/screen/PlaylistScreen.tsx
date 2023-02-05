import {  StyleSheet,  TouchableOpacity, View ,ScrollView } from 'react-native'
import React, { useState ,useEffect } from 'react'
import { PlayList } from "@my-workspace/my-ui";
import { MyButton } from "@my-workspace/my-ui";
import data from '../assets/Playlist.json';


const PlaylistScreen = ({ navigation }) => {
    const [playlist, setData] = useState([]);

    useEffect(() => {
        setData(data);
    }, []);
    return (
        <View>
            <View style={{ height: 400 }}>
                <ScrollView>
                {playlist.map(item=>{return(
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
                onPress={() => {navigation.navigate('WelcomeComponent')}}
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