// React Native
import {
  Pressable,
  Text,
  Image,
  TextInput,
  StyleSheet,
  View,
} from "react-native";

// Componenets
import { Input } from "../../../components/Input/Input";

// Colors
import { reng } from "../../../constants/colors";
import { Button } from "../../../components/Button/Button";

// Images

export const LoginScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.skipContainer}>
          <Text style={styles.skip}>Skip</Text>
        </View>
        <View>
          <Text style={styles.login}>Login</Text>
          <Text style={styles.loginText}>
            Hi! Welcome back, you’ve been missed
          </Text>
        </View>
        <View style={styles.googleContainer}>
          <Pressable style={styles.googleButton}>
            <Image
              source={require("../../../assets/images/google.png")}
              style={{ marginRight: "8" }}
            ></Image>
            <Text style={{ color: "#757575", fontWeight: 600, fontSize: 20 }}>
              Continue with Google
            </Text>
          </Pressable>
        </View>
        <View style={styles.lines}>
          <View style={styles.line}></View>
          <Text style={{ color: "#212121", fontWeight: 700, fontSize: 20 }}>
            Or
          </Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.inputContainers}>
          <View>
            <Text style={styles.email}>Email <Text style={{color:"#ec221f"}}>*</Text></Text>
            <Input text="example@gmail.com" />
          </View>
          <View>
            <Text style={styles.email}>Password <Text style={{color:"#ec221f"}}>*</Text></Text>
            <Input text="Enter password" />
          </View>
          <View style={{display:"flex",alignItems:"flex-end"}}>
            <Text>Forgot password?</Text>
          </View>
        </View>
        <View style={{paddingHorizontal:16,marginTop:48}}>
            <Button text="Log in"/>
        </View>
        <View style={{marginTop:24}}>
            <Text style={{textAlign:"center"}}>Don't have an account? Sign up</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  skipContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  skip: {
    paddingVertical: 15,
    paddingRight: 16,
    color: reng.secondaryColor,
    fontSize: 18,
    fontWeight: 500,
  },
  login: {
    fontSize: 32,
    fontWeight: 700,
    textAlign: "center",
    color: reng.primaryText,
  },
  loginText: {
    textAlign: "center",
    fontSize: 16,
    color: "#616161",
    marginTop: 12,
  },
  googleButton: {
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#fafafa",
    paddingHorizontal: 66,
    borderRadius: 8,
    borderColor: "#e0e0e0",
    height: 48,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  googleContainer: {
    paddingHorizontal: 16,
    width: "100%",
    marginTop: 64,
  },
  lines: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 24,
  },
  line: {
    height: 1,
    width: 159,
    backgroundColor: "#e0e0e0",
  },
  inputContainers:{
    paddingHorizontal:24,
    marginTop:17,
    display:"flex",
    gap:24
  },
   email:{
    color:"#616161",
    fontSize:18,
    marginRight:4,
  },
});
