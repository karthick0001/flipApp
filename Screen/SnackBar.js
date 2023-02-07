import { View } from "react-native";
import Snackbar from "react-native-snackbar";

const ShowSnackMsg = ({msg}) =>{
    return(
        Snackbar.show({
            text:msg,
            duration: Snackbar.LENGTH_SHORT,
            action: {
              text: 'UNDO',
              textColor: 'green',
              onPress: () => { /* Do something. */ },
            },
          })
    );
}

export default ShowSnackMsg;
