import { StyleSheet, Text, View ,TextInput , TouchableOpacity} from 'react-native';

import * as Animatable from "react-native-animatable"

export default function SingIn (){
    return(
    <View style={style.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={style.containerHeader}>
       <Text style={style.message}>Welcome</Text> 
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={style.containerForm}>

        <Text  style={style.title}>email</Text> 
         <TextInput
         placeholder='write your email'
         style={style.input}
         />

         <Text style={style.title} >password</Text> 
         <TextInput
         placeholder='write your password'
         style={style.input}
         />

         <TouchableOpacity style={style.button}>
         <Text style={style.buttonText} >login</Text> 
         </TouchableOpacity>

         <TouchableOpacity style={style.buttonRegister}>
         <Text style={style.registerText} >to do register</Text> 
         </TouchableOpacity>
         

        </Animatable.View>
    </View>
    )
}





const style = StyleSheet.create({
   
    container:{
flex:1,
backgroundColor:"#38a69d"
    },
    containerHeader:{
       marginTop:"14%",
       marginBottom:"8%",
       paddingStart:"5%"
            },
            containerForm:{
                flex:1,
                backgroundColor:"#fff",
                borderTopLeftRadius:25,
                borderTopRightRadius:25,
                paddingStart:"5%",
                paddingEnd:"5%"
                    },
                    title:{
                        fontSize:20,
                       marginTop:28
                            },
                            message:{
                                fontSize:28,
                               fontWeight:"bold",
                               color:"#fff"
                                    },  
                                         input:{
                                        fontSize:16,
                                        borderBottomWidth:1,
                                        height:40,
                                        marginBottom:12
                                            }, 
                                            
                                            
                                            button:{
                                                backgroundColor:"#38a69d",
                                               width:"100%",
                                               borderRadius:4,
                                               paddingVertical:8,
                                               marginTop:14,
                                               justifyContent:"center",
                                               alignItems:"center"
                                               
                                                    },  
                                                    
                                                    buttonText:{
                                                        color:"#fff",
                                                        fontSize:18,
                                                        fontWeight:"bold"
                                                       
                                                            }, 
                                                            buttonRegister:{
                                                                marginTop:14,
                                                                alignSelf:"center"
                                                               
                                                                    },
                                                                    registerText:{
                                                                        color:"#a1a1a1"
                                                                        
                                                                       
                                                                            },             
})
