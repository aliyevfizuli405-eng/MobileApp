import { TextInput,StyleSheet } from "react-native"
export const Input = ({text}) =>{
    return(
        <TextInput style={styles.emailInput} placeholder={text}/>
    )
}

const styles=StyleSheet.create({
  emailInput:{
    paddingVertical:14,
    paddingLeft:16,
    backgroundColor:"#fafafa",
    borderWidth:1,
    borderColor:"#e0e0e0",
    borderRadius:8,
    marginTop:8,
  },
})