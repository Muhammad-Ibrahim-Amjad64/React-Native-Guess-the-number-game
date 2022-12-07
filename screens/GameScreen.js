
import React from "react";
import {Text , View , StyleSheet, Button , Alert} from "react-native";
import Card from "../components/Card";
import { useState, useRef , useEffect } from 'react';
import NumberContainer from "../components/NumberContainer";

const RandomNumberGenerator= (min,max,exclude)=>{
    min = Math.ceil(min)   // to round off the number to the integer if in case the float number is passed 
    max = Math.floor(max)  // if 99.0 then 99 so is lia floor
    const randomNumber = Math.floor(Math.random() *(max-min) + min)
    if (randomNumber===exclude) {
        RandomNumberGenerator(min,max,exclude);
        
    }
    else{
    return randomNumber;
    }
}




const GameScreen =(props)=>{
    const [generatedNumber,setGeneratedNumber] = useState(RandomNumberGenerator(1,100,props.userChoice));

    const [rounds,setRounds]= useState(0); 

    const lowerBound = useRef(1);
    const upperBound = useRef(100);

    // const 

    const otherthenfirstNumberguesser =(hint)=>{

        if (hint=='lower' && props.userChoice>generatedNumber ) {
            Alert.alert("Don't cheat ;)","Please don't cheat :') ",[{style:'destructive',text:'ok sir '}])
            return;        
        }
    
        if (hint=='greater' && props.userChoice<generatedNumber ) {
            Alert.alert("Don't cheat ;)","Please don't cheat :') ",[{style:'destructive',text:'ok sir '}])
            return;
        }
    
        if (hint=='lower') {
            // updating the lower ound to the generated number 
            upperBound.current= generatedNumber;

            
        } // agar the geenerated number is smaller than the to be guessed then else block runs  
        else{
            lowerBound.current= generatedNumber;

        }

        const nextGuess = RandomNumberGenerator(lowerBound.current,upperBound.current,generatedNumber);

        setGeneratedNumber(nextGuess);
        console.log(rounds)
// theyboth work         
        // setRounds(roundss=>roundss+1);
        setRounds(rounds+1);
        


    }

    // We can also set dependencies in useEffect  in which use effect only run when these values will be changed . by adding a second argument in the useEffect function 

    // Using advanced javascript to distruct props alag alag 
    const {WhenCorrectGuessed,userChoice} = props
    useEffect(()=>{
        if (generatedNumber==props.userChoice) {
            //  yaha pr hamain game over screen ko activate krna ho ga 
            // setRounds(rounds)
            props.WhenCorrectGuessed(rounds);
            
        }
    }, [generatedNumber,WhenCorrectGuessed,userChoice])
    

    return(

    
     <View style={styles.screen}>
        <Text>Opponent's guess</Text>
        <NumberContainer style={styles.Buttons}>
            {generatedNumber}
        </NumberContainer >
            <Card style={styles.Buttons}>
            <Button title="Lower?"  onPress={otherthenfirstNumberguesser.bind(this,'lower')}/>
            <Button title="Greater?" onPress={otherthenfirstNumberguesser.bind(this,'greater')}/>
            </Card>
        
     </View>
    
    //  <View>
    //     <Text>Opponent's guess</Text>
    //     <Card>
    //         {generatedNumber}
    //         <Card style={styles.Buttons}>
    //         <Button title="Lower?" />
    //         <Button title="Greater?"/>
    //         </Card>
    //     </Card>
    //  </View>
    )

}

const styles = StyleSheet.create({

    screen:{
        // backgroundColor:"red",
        flex:1,
        // padding:30,
        padding:16,
        alignItems:'center',
        // backgroundColor:'red'
        // justifyContent:'center'
    },

    Buttons:{
        flexDirection:"row",
        justifyContent:"space-around",
        // alignItems:'baseline'
        // width:"90%",
        // marginTop:20,
        // ma
    }
 


})

export default GameScreen;
