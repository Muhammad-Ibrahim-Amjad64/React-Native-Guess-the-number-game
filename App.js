import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
// import React, { useState } from "react";
import { StyleSheet, Text, View , TextInput, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/Header';
import StartScreenGame from './screens/StartScreenGame';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'

// const dismisser = ()=>{Keyboard.dismiss}

// const [active,setActive]=(true);



export default function App() {
  


      // useState undefined == false in if ---------------------------------------
    const [chosen, setchosen]= useState(); 
    const [totalNumberOfRounds,settotalNumberOfRounds]= useState(0);


    const againPlay= ()=>{
      setchosen();
      settotalNumberOfRounds(0);
      console.log("yaha aya")
      content = <StartScreenGame onChosen={chosenInputHandler}/>
    }

    
    
    const chosenInputHandler= (chosenNumber)=>{
      setchosen(chosenNumber);
    }
    let content =    <StartScreenGame onChosen={chosenInputHandler}/>

    
    const onEndingGameHandler = totalRounds=>{
      
      settotalNumberOfRounds(totalRounds);
      // setchosen(undefined)


    }

    if (chosen && totalNumberOfRounds<=0 ) {
      console.log(totalNumberOfRounds)
      content = <GameScreen userChoice={chosen} WhenCorrectGuessed={onEndingGameHandler}/> 
      // content= <StartScreenGame onChosen={chosenInputHandler}/>
      
    } 
    else if (totalNumberOfRounds>0){
      content = <GameOverScreen userchoice= {chosen} numberofrounds={totalNumberOfRounds} playAgain={againPlay}/>
      // content =<Text> hello
      {/* </Text> */}
      // trounds = totalNumberOfRounds;

    }


    // let trounds;
    
    // if (totalNumberOfRounds>0) {
    //   content = <GameOverScreen  />
    //    trounds = totalNumberOfRounds;
    // }


   
      return (

    
    // will act like a button but there is no visual like buttom
    // RECAP FROM INTRO 
    // TouchableOpacity 
    // TouchableHighlight (ye backgrounf colour change krta ha )
    // TouchableNativeFeedback (currently supporting on android (ye wo jo sadahara button mn hota ha ))
    // TouchableWithoutFeedback (ye kuch nai kry g bs make it touchable )
<TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    <View style={styles.screen}>

      <Header title={"The guess game"}/>
      {content}
      {/* <Text>
      {trounds}
      </Text> */}



    </View>
</TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    

  }
});
