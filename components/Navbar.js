import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
    return (
      <View style={ styles.view }>
       <Text style={ styles.text }>Oline store</Text>
       </View>
    );
  }

  const styles = StyleSheet.create({
    view: {
      flex: 1,
   
      alignItems: 'center',
      marginTop: 80,
      justifyContent: 'center',
      width :300,
      height:"15%"
    },
    text: {
      
        backgroundColor: 'red',
        alignItems: 'center',
        marginTop: 80,
        color:"#fff",
        fontSize:20,
      
      },
  });