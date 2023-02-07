import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UpNextButton, RoundButtonMusic, Cover , Card } from '@my-workspace/my-ui'
import { AntDesign, Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { FontAwesome } from '@expo/vector-icons';


import { Video, AVPlaybackStatus } from 'expo-av';


const HomeScreen = ({ navigation, route }) => {
    console.log(route)
    const video = React.useRef(null);

    const [dataPlayer, setDataPlayer] = useState(route.params)
    const [currentDuration, setCurrentDuration] = useState(0)
    const [maxDuration, setMaxDuration] = useState(dataPlayer.duration)
    const [isPlaying, setIsPlaying] = useState(false)
    let interval;
    console.log(dataPlayer)
    console.log(dataPlayer.id)


    const convertSecondToHHMMSS = (seconds) => {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;

        let timeString = '';
        if (hours !== 0) {
            timeString += `${hours.toString().padStart(2, '0')}:`;
        }
        timeString += `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        return timeString;
    }
    const handlePlay = (isPlaying) => {
        setIsPlaying(isPlaying)
        if (isPlaying) {
            video.current.playAsync()
        } else {

           
            video.current.pauseAsync()


        }


    }
    useEffect(() => {

        if (currentDuration >= maxDuration) {
            setIsPlaying(false)
            setCurrentDuration(maxDuration)
        }
        if (currentDuration < 0) {
            setCurrentDuration(0)
        }

    }, [currentDuration])
    useEffect(() => {

        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentDuration(oldValue => oldValue + 1)

            }, 1000)
        }

        return () => clearInterval(interval)

    }, [isPlaying])

    return (
        <View style={{ flex: 1, width: 640, backgroundColor: "#B20A33", justifyContent: 'center', alignItems: 'center' }} key={dataPlayer.id}>
            <Video
                ref={video}
                source={{
                    uri: dataPlayer.urlMp4,
                }}
                useNativeControls
                isLooping
            />

            <View style={{ flex: 1,  width: 240 ,alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>

                <RoundButtonMusic
                    backgroundColor="transparent"
                    size={70}
                    icon={<AntDesign name="left" size={24} color="white" />}
                    onClickButton={() => { navigation.goBack() }}
                />
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingLeft: 10 }}>Now Playing</Text>
            </View>
            <View style={{ flex: 6 }}>
               
                <Card
                    color="#FFFFFF"
                    description={dataPlayer.artiste}
                    borderRadius={150}
                    image={dataPlayer.poster}
                    title={dataPlayer.name}
                    />


            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

               
                <Slider
                    value={currentDuration}
                    onValueChange={(value) => { setCurrentDuration(value) }}
                    style={{ width: 290, height: 40 }}
                    minimumValue={0}
                    step={1}
                    maximumValue={maxDuration}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor='rgba(255, 255, 255, 0.5)'
                    thumbTintColor="#B20A33"
                />
                 <View style={{ flex: 1, minWidth: 300, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white' , fontSize: 14 }}>{convertSecondToHHMMSS(currentDuration)}</Text>
                    <Text style={{ color: 'white', fontSize: 14  }}>{convertSecondToHHMMSS(maxDuration - currentDuration)}</Text>


                </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                <RoundButtonMusic
                    backgroundColor="transparent"
                    icon={<Feather name="chevrons-left" size={18} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue - 10) }}
                    size={50}
                />

                <RoundButtonMusic
                    backgroundColor="transparent"
                    icon={<Feather name="chevron-left" size={18} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue - 2) }}
                    size={50}
                /> <RoundButtonMusic
                    backgroundColor="#BCBCBC"
                    icon={isPlaying ? <FontAwesome name="pause" size={18} color="#B20A33" /> : <FontAwesome name="play" size={24} color="#B20A33" />}
                    onClickButton={() => { handlePlay(!isPlaying) }}
                    size={50}
                /> <RoundButtonMusic
                    backgroundColor="transparent"
                    icon={<Feather name="chevron-right" size={18} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue + 2) }}

                    size={50}
                /> <RoundButtonMusic
                    backgroundColor="transparent"
                    icon={<Feather name="chevrons-right" size={18} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue + 10) }}

                    size={50}
                />

            </View>
            <View style={{ flex: 1 , marginTop:26 }}>
                <UpNextButton
                    backgroundColor="#B20A33"
                    borderRadius={30}
                    text="Up Next"
                    textColor="#C4C4C4"
                    type="button"
                    />
            </View>

            {/* <Text>HomeScreen</Text> */}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})