
import React from "react";
import {Text , View , StyleSheet, Button} from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";
const GameOverScreen =(props)=>{

    return(
        <View style={styles.screen}>

     <Card  >
        <Text style={{fontSize:25,color:colors.primary}}>
            The game is over 

        </Text>
        <Text>Your choice is  { props.userchoice}</Text>
        <Text> Total number of rounds {props.numberofrounds}</Text>
        
        <Button title="want to play again :)" color={"#be0d54"} onPress={props.playAgain} />
     </Card>
        </View>
    )

}

const styles = StyleSheet.create({
 
    
        screen:{
            // backgroundColor:"red",
            flex:1,
            // padding:30,
            padding:16,
            alignItems:'center'
        },


})

export default GameOverScreen;