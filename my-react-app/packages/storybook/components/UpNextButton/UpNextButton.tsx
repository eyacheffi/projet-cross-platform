import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React from 'react'

type UpNextButtonProps = {
    backgroundColor: string
    textColor: string
    borderRadius: number
    text: string
    type: 'link' | 'button'
}

const UpNextButton: React.FC<UpNextButtonProps> = (props) => {
    const { backgroundColor, textColor, borderRadius, text, type } = props

    const styleComponent = {
       container : type =='link' ? {} : { backgroundColor : backgroundColor  },
       text: type =='link' ? {  borderBottomColor : backgroundColor , borderBottomWidth : 2 } :{}

    }
    return (
        <View  style={{  alignItems: 'center'}} >
            <Image style={{ width: 10, height: 5 , marginBottom : 8 }} source={require('./../assets/up.png') } />
            {/* <Image style={{ width: 10, height: 5 , marginBottom : 8 }} source={require('../../assets/up.png') } /> */}

            <TouchableOpacity style={[styleComponent.container,{paddingTop: 10, paddingRight: 20, paddingBottom: 10, paddingLeft: 20 , borderRadius : borderRadius} ]}>
                <Text style={[styleComponent.text , { color : textColor ,  borderRadius : borderRadius  } ]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UpNextButton

const styles = StyleSheet.create({})