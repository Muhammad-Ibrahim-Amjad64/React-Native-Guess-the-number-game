
import React from "react";
import {Text , View , StyleSheet} from "react-native";
const Card =(props)=>{
// ...styles.card (contains all the key value pairs) ...styles.props (contains all the key value of the styles from the outsouce outside of the card coponents) then final styles will be the merge of both 
    return(
     <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )

}

const styles = StyleSheet.create({
 card:{
    backgroundColor:"white",
    borderRadius:10,
    margin:30,
    alignItems:"center",
    width:300,
    padding:20,
    maxWidth:"80%",  // for responsivness
    // height:400,
    // justifyContent:"center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,  // ye agar 0 ho ga tou vertical shadow gone in ios android ke lia sirf elevation ah

    elevation: 5,
}

})

export default Card;