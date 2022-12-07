
import React from "react";
import {TextInput, StyleSheet} from "react-native";
const Input  =(props)=>{

    
// iss ...props mn saari text input ki properties incluting style= wali bhi but the below style will override that style coming with ...props
    return(
     <TextInput {...props}  style={{...styles.input,...props.style}}/>
    )

}

const styles = StyleSheet.create({
    input:{

        // Secondary 

                // alignItems:"center",
                // textAlign:'center',
                // width:50,
               //  width:'100%',
               marginVertical:30,
               backgroundColor:'white',
               borderBottomColor:'red',
               // borderColor:'black',
               // borderWidth:1,
               borderBottomWidth:1,
               padding:5,
               // borderRadius:10,
       
            //    // // shadowColor: "#000",
            //    // // shadowOffset: {
            //    // // width: 0,
            //    // // height: 2,
            //    // //     },
            //    // // shadowOpacity: 0.25,
            //    // // shadowRadius: 3.84,
            //    // // elevation:3

        


        //primary 
        // textAlign:'center',
        //     width:'70%',
        // //  width:'100%',
        // marginVertical:30,
        // backgroundColor:'white',
        // borderColor:'grey',
        // borderWidth:1,
        // padding:5,
        // borderRadius:10,





    },



})

export default Input ;


