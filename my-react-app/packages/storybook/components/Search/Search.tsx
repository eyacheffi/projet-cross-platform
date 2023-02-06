import { StyleSheet, TextInput, View  } from 'react-native';

import React from 'react';
interface SearchProps {
    handleSearch: () => void;
    value: string;
    placeholder: string;
    borderColor : string;
    backgroundColor : string;
    testColor: string;
  }
const Search = ({ value,  handleSearch ,placeholder,borderColor,backgroundColor,testColor }: SearchProps) => {
    return (
      <View  style={[styles.backgroundStyle , { borderColor : borderColor ,  backgroundColor : backgroundColor  } ]} >
        <TextInput style={[styles.inputStyle , { color: testColor}]}
        placeholder={placeholder}
        value={value}
        onChangeText={handleSearch}
      />
    
      </View>
    );
};

export default Search

const styles = StyleSheet.create({
    backgroundStyle: {
        height: 50,
        borderRadius: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 35,
        alignItems: 'center',
        borderWidth : 2
      },
      inputStyle: {
        flex: 1,
        paddingLeft: 10,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 13,
        lineHeight: 21,
        letterSpacing: 0.5,
        opacity: 0.5,
        borderColor: 'transparent'
      },
})