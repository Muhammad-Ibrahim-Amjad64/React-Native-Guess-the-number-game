import React, { useState } from "react";
import {Text , View , StyleSheet, TextInput, Button, Alert, Keyboard } from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
const StartScreenGame =(props)=>{
    // const nayaReset = (val) =>{
        //        setText('');
        //    }
        
        //  const changeHandler = value=>{
            //     setText(value.replace(/[^0-9]/g),''); 
            // //    setText(value)
    // }
    
    
    
    
    // const [text,setText]= useState('');
    const [text, setText] = useState('');
    const [selectedNumber, setSelectedNumber ]= useState('');
    // aik extra state use kr rhy hain to verfy that if the use confirmed or not his choice then we will display the button to the user to start the game 
    const [flag, setflag ]= useState(false);

    const resetInputHandler=()=>{
        // props.onAddingGoal(goal);
        setText('');
        // console.log(text)
        // setText(null);
        
        setflag(false);
    
    
      }
     

    const InputNumberHandler = enteredtext=>{
     // Now we want to make sure that the input should only be a number so we use
    //  (VALIDATING USING REGULR EXPRESSION  )
        setText(enteredtext.replace(/[^0-9]/g),'');  // this regular expression will replace any characer other than 0 to 9 number value with a blank '' space (in case if in some android device user have a decimal so he will not be able to do that )

    }



    // We can show alert messages by using the react native alert api 
    //  Alert.alert(title, message)
    const confirmInputHandler = ()=>{
        // Alert.alert("Invalid Input!", "The number should be between 1 & 99 :)" , [{text:"Ok", style:"destructive",onPress:{resetInputHandler}}] );
      const   userInput = parseInt(text)
        if (isNaN(userInput) || userInput<=0 || userInput> 99) {
            Alert.alert("Invalid Input!", "The number should be between 1 & 99 :)" , [{text:"Ok", style:"destructive",onPress:resetInputHandler}] );
            return;

        }

        setSelectedNumber(userInput);
        setText('');
        setflag(true);
        Keyboard.dismiss;

//it does not matters
        // setText('');
        // setSelectedNumber(userInput);
        // setflag(true);

    


    }

    // WE CAN MAKE TO DISPLAY CERTAIN ELEMENTS LIKE THIS AND THEN USE INTO OUR REACT LIKE {confirmedNumber}//-------------

    let confirmedNumber;

    if (flag) {
        confirmedNumber=  <Card style={styles.confirmedNumber}>
            <Text style={{fontSize:20}}>You selected :P</Text>
            <NumberContainer>
                {selectedNumber}
            </NumberContainer>
            
            <Button onPress={props.onChosen.bind(this,selectedNumber)} title="Start the game" color={colors.secondary}/>
            </Card>


        
    }


    return(

        <View style={styles.screen}>

            
    {/* <View> */}
    {/* <Input 
     autoCorrect={false}
     keyboardType={"number-pad"}
     maxLength={2} 
     blurOnSubmit 
     autoCapitalize="none" 
     style={styles.textInput}

    // style={{margin:30}}
    value ={text}
    onChangeText ={changeHandler}
    placeholder = 'Add '
   /> */}
  

  {/* </View> */}
            
       
        <Text style={styles.title}>Let's start the game</Text>
        {/* replacing view container with card layout  */}
        <Card style={styles.container}>
            <Text>Select a number</Text>
            <Input 
     autoCorrect={false}
     keyboardType={"number-pad"}
     maxLength={2} 
     blurOnSubmit 
     autoCapitalize="none" 
     style={styles.textInput}
    value ={text}        // AAAAAAAAHHHHHH PUCK THIS WAS AN ERROR 
    onChangeText ={InputNumberHandler}
    placeholder = 'Add '
   />
            {/* we will replace TextInput with our input component  */}
            {/* jb hm value daaal kr done py click krty hain tou bluronsubmit AUTOMATICALLY keyboard andar kr daita ha  */}
        {/* <Input autoCorrect={false}
        keyboardType={"number-pad"}
        maxLength={2} 
        blurOnSubmit 
        autoCapitalize="none" 
        style={styles.textInput}
        onChangeText={InputNumberHandler}
        /> */}
        <View style={styles.buttons}>
        <View style={styles.button}>
        <Button 
    title = "RESET"
    onPress = {resetInputHandler}
    // onPress = {()=>  { nayaReset(text)}}
    color={colors.secondary}
    />
        {/* <Button onPress={resetInputHandler} color={colors.secondary} title="RESET"/> */}
        
        </View>
        <View style={styles.button}>
        <Button   onPress = {confirmInputHandler} color={colors.primary} title="CONFIRM" />
        </View>
        </View>
        </Card>
        {confirmedNumber}

        
     </View>
    )

}

const styles = StyleSheet.create({

    confirmedNumber:{
        height:220,
        width:220,
        
        // backgroundColor:',
        // borderColor:'black',
        // borderWidth:2,


    },

    textInput:{
        textAlign:'center',
        width:50,
        // width:'100%',
        // //  width:'100%',
        // marginVertical:30,
        // backgroundColor:'white',
        // borderColor:'black',
        // borderWidth:1,
        // padding:5,
        // borderRadius:10,

    },

    container:{
        // working verified
        // backgroundColor:"black"
    },

    title:{
        fontSize:20,

    },
 
    screen:{
        // backgroundColor:"red",
        flex:1,
        // padding:30,
        padding:16,
        alignItems:'center'
    },


    buttons:{
        // backgroundColor:'red',

        flexDirection:'row',
        // neechay wali 2 lines ke ilawa ye bhi sai ha
         justifyContent:'space-around',
        // paddingHorizontal:15,
        // justifyContent:'space-between',
        width:'90%',
        // margin:10,

    },

    button:{
        width:100,
        maxWidth:90,   // ye check 
        marginHorizontal:40,

        // paddingHorizontal:
        
    }

})

export default StartScreenGame;