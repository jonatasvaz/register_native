import {createNativeStackNavigator} from "@react-navigation/native-stack"


import SingIn from "../page/SingIn/SingIn"
import Welcome from "../page/welcome/Welcome"

const stack = createNativeStackNavigator()

export default function Routes (){
    return(
        <stack.Navigator>
        
             <stack.Screen
            name="welcome"
            component={Welcome}
            options={{headerShown:false}}
            />
                <stack.Screen
            name="singin"
            component={SingIn}
            options={{headerShown:false}}
            />
        </stack.Navigator>
    )
}