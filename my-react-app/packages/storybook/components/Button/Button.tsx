import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
interface MyButtonProps {
  onPress: () => void;
  text: string;
  backgroundColor:string;
}

export const MyButton = ({ onPress, text,backgroundColor }: MyButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text
       style={[
        styles.text,
        {
          backgroundColor,
          
        },
      ]} >{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
   
  },
  text: { 
    color: "black" ,
    backgroundColor: "violet", 
    border:"1px solid",
    padding:8,
    width: "auto",
    borderRadius:10,
  },
});
