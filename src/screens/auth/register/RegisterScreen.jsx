
// React Native
import { View,StyleSheet,Text,Pressable,TextInput,Image, } from "react-native"

// React components
import { Button } from "../../../components/Button/Button";


import { fonts } from "../../../constants/fonts";

import { SignUpScreen } from "../SignUp/SignUpScreen";

//Color Values 
import { reng } from "../../../constants/colors";
import { useNavigation } from "@react-navigation/native";





export const RegisterScreen = ()=>{
  const navigation=useNavigation()
    return(
        <View style={styles.container}>
                <View style={styles.pageNav}>
                  <Pressable>
                    <Image
                      source={require("../../../assets/images/leftArrow.png")}
                      style={styles.Arrow}
                    ></Image>
                  </Pressable>
                  <Pressable>
                    <Text style={styles.skip}>Skip</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 24,
                    marginBottom: 40,
                  }}
                >
                  <Image source={require("../../../assets/images/logo.png")}></Image>
                  <Text
                    style={{
                      fontSize: 32,
                      fontFamily:fonts.dmSans,
                      fontWeight:500,
                      color: "#212121",
                      marginTop: 12.5,
                    }}
                  >
                    Welcome to Yumio
                  </Text>
                </View>
                <View style={styles.googleContainer}>
                <Pressable style={styles.googleButton}>
                  <Image source={require("../../../assets/images/google.png")} style={{marginRight:"8"}}></Image>
                  <Text style={{color:"#757575",fontWeight:600,fontSize:20}}>Continue with Google</Text>
                </Pressable>
                </View>
                <View style={styles.lines}>
                  <View style={styles.line}></View>
                  <Text style={{color:"#212121",fontWeight:700,fontSize:20}}>Or</Text>
                  <View style={styles.line}></View>
                </View>
                <View style={styles.inputContainer}>
                  <View>
                    <Text style={styles.email}>
                      Email <Text style={{color:"#ec221f"}}>*</Text>
                    </Text>
                  </View>
                  <View>
                    <TextInput style={styles.emailInput} placeholder="example@gmail.com"/>
                  </View>
                  <View style={styles.conditions}>
                    <Image source={require("../../../assets/images/checkBox.png")}/>
                    <Text style={styles.conditionsText}>By continuing, you agree to our <Text style={styles.privacy}>Privacy Policy.</Text></Text>
                  </View>
                </View>
                <View style={{paddingHorizontal:16,marginTop:60,}}>
                    <Pressable style={styles.button} onPress={()=>{navigation.navigate("SignUp")}}>
                            <Text
                              style={{
                                color: "#fff",
                                textAlign: "center",
                                fontWeight: 600,
                                fontSize: 20,
                              }}
                            >
                              Continue With Email
                            </Text>
                          </Pressable>
                    <Text style={{textAlign:"center",fontWeight:500,fontFamily:fonts.jakarta,color:"#666666",marginTop:48,fontSize:20}}>Already have an account? <Text style={{color:"#212121"}}>Log in</Text></Text>
                </View>
              </View>
              
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: reng.primaryColor,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  timeText: {
    color: "#fff",
    fontSize: 64,
  },
  skip: {
    color: reng.secondaryColor,
    fontSize: 18,
    fontWeight: 400,
    fontFamily:fonts.jakarta,
    
  },
  pageNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 16,
    paddingVertical: 16,
  },
  googleButton:{
    backgroundColor:"#fafafa",
    borderWidth:1,
    borderColor:"#fafafa",
    paddingHorizontal:66,
    borderRadius:8,
    borderColor:"#e0e0e0",
    height:48,
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  googleContainer:{
    paddingHorizontal:16,
    width:"100%"
  },
  lines:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:8,
    marginTop:24,
  },
  line:{
    height:1,
    width:159,
    backgroundColor:"#e0e0e0"
  },
  inputContainer:{
    paddingHorizontal:24,
    marginTop:24,
  },
  email:{
    color:"#616161",
    fontSize:18,
    marginRight:4,
  },
  emailInput:{
    paddingVertical:14,
    paddingLeft:16,
    backgroundColor:"#fafafa",
    borderWidth:1,
    borderColor:"#e0e0e0",
    borderRadius:8,
    marginTop:8
  },
  conditions:{
    marginTop:12.5,
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    gap:19.5
  },
  conditionsText:{
    color:"#666666",
    fontSize:16,
  },
  privacy:{
    color:"#212121",
    fontSize:16,
  }
});
