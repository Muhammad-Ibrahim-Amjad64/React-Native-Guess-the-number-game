
import React from "react";
import {Text , View , StyleSheet} from "react-native";
import colors from "../constants/colors";
const NumberContainer =(props)=>{

    return(
        <View style={{...styles.container,...props.style}}>
        <Text style={styles.Textsettings} >{props.children}</Text>
    </View>
    )

}

const styles = StyleSheet.create({
    container:{
        // height:100,
        borderColor:colors.secondary,
        marginVertical:20,
        // margin:20,
        padding:20,
        borderWidth:2,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',

        
        
        // backgroundColour:'black',

    },

    Textsettings:{
        fontSize:22,
        color:colors.secondary
    }
   
 


})

export default NumberContainer;