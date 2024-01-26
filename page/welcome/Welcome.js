import { 
    StyleSheet,
     Text, 
     View,
     Image,
     TouchableOpacity
     } from 'react-native';

     import * as Animatable from "react-native-animatable"
   import { useNavigation } from "@react-navigation/native"




export default function Welcome (){

    const navigate= useNavigation();

    return(
    <View style={style.container}>
      <View style={style.containerlogo}>
        <Animatable.Image
        animation="flipInY"
        source={require("../../assets/logo.png")}
        style={{width:"100%",
                 marginTop:"10%"
    }}
        resizeMode='contain'
        />
      </View>

    <Animatable.View style={style.containerform} 
    animation="fadeInUp"  
    delay={600}
    > 

          <Text style={style.title}>monitor and organize your spending anywhere</Text>
         <Text style={style.text}>Log in to continue</Text>
          <TouchableOpacity  style={style.button}
          onPress={()=>navigate.navigate("singin")}
          >
            <Text style={style.buttontext} >login</Text>
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
    containerlogo:{
        flex:2,
        backgroundColor:"#38a69d",
        justifyContent:"center",
        alignItems:"center"
            },
           containerform:{
              flex:1,
              backgroundColor: "#fff",
              borderTopLeftRadius:24,
              borderTopRightRadius:24,
              paddingStart:"5%",
              paddingBottom:"5%"
                    }  ,
                    title:{
                     fontSize:24,
                     fontWeight:"bold",
                     marginTop:28,
                     marginBottom:12,
              
                              } ,
                             
                     text:{
                        color:"#a1a1a1"
                         },
                         button:{
                        position:"absolute",
                        backgroundColor:"#38a69d",
                        borderRadius:50,
                        paddingVertical:8,
                        width:"60%",
                        alignSelf:"center",
                        bottom:"15%",
                    alignItems:"center",
                justifyContent:"center"                              }   ,
                
                text:{
                    color:"#a1a1a1"
                     },
                     buttontext:{
                         fontSize:18,
                         color:"#fff", 
                         fontWeight:"bold"                 
                    }   
})

