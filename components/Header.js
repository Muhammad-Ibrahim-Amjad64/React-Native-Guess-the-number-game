import React from "react";
import colors from "../constants/colors";
import {Text , View , StyleSheet} from "react-native";
const Header =(props)=>{

    return(
        <View style={styles.Header}>
            <Text style={styles.HeaderTitle} >{props.title}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    Header:{
        margin:0,
        width:'100%',
        backgroundColor:colors.primary,
        // height:'10%',
        height:90,
        paddingTop:36,
        justifyContent:"center",
        alignItems:"center"



    },

    HeaderTitle:{
        color:'black',
        fontSize:18,
        // fontWeight:13,

    }


})

export default Header;