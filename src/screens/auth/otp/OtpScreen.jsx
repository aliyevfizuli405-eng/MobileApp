import {
  Text,
  Image,
  Pressable,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import { Button } from "../../../components/Button/Button";

export const OtpScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <View
            style={{ paddingVertical: 20, paddingLeft: 16, marginBottom: 40 }}
          >
            <Image
              style={{ marginTop: 16 }}
              source={require("./../../../../assets/images/leftArrow.png")}
            />
          </View>
          <View>
            <Text style={styles.verify}>Verify Code</Text>
            <Text style={styles.verifyText}>
              Please enter the code we just sent to email example@gmail.com
            </Text>
          </View>
          <View style={styles.otpInputContainer}>
            <TextInput placeholder="-" style={styles.otpInput} />
            <TextInput placeholder="-" style={styles.otpInput} />
            <TextInput placeholder="-" style={styles.otpInput} />
            <TextInput placeholder="-" style={styles.otpInput} />
          </View>
        </View>
        <View>
          <Text style={[styles.verifyText,{marginTop:24}]}>Don't receive OTP?</Text>
          <Text style={{fontSize:16,fontWeight:700,color:"#616161",textAlign:"center",marginTop:8}}>Resend code</Text>
        </View>
        <View style={{ paddingHorizontal: 16, paddingVertical: 44 }}>
          <Button text="Verify" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 62,
    backgroundColor: "#fff",
  },
  verify: {
    fontSize: 32,
    fontWeight: 700,
    textAlign: "center",
    color: "#212121",
  },
  verifyText: {
    color: "#616161",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 26.5,
    marginTop: 12.5,
    fontWeight: 300,
  },
  otpInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop: 64,
  },
  otpInput: {
    width: 64,
    height: 64,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 25,
  },
});
