// React Native
import { Text, View, StyleSheet, TextInput } from "react-native";

// React COmponents
import { Input } from "../../../components/Input/Input";
import { Email } from "../../../components/Email/Email";
import { Button } from "../../../components/Button/Button";

// Colors
import { reng } from "../../../colors";

export const SignUpScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.skipContainer}>
          <Text style={styles.skip}>Skip</Text>
        </View>
        <View>
          <Text style={styles.account}>Create your account</Text>
        </View>
        <View style={styles.accountContainer}>
          <View style={styles.inputs}>
            <Email info="Email" text="example@gmail.com" />
          </View>
          <View style={styles.inputs}>
            <Email info="First Name" text="Enter First Name" />
          </View>
          <View style={styles.inputs}>
            <Email info="Last Name" text="Enter Last Name" />
          </View>
          <View>
            <Text style={styles.email}>
              Phone Number <Text style={{ color: "#ec221f" }}>*</Text>
            </Text>
            <View style={[styles.numbers, styles.inputs]}>
              <View style={{width:"25%"}}>
                <TextInput
                  style={[styles.emailInput, styles.number]}
                  value="+994"
                />
              </View>
              <View style={{width:"73%"}}>
                {" "}
                <TextInput
                  style={[styles.emailInput, styles.numberInput]}
                  placeholder="Enter Phone Number"
                />
              </View>
            </View>
            <View>
              <Email info="Password" text="Enter Password" />
            </View>
            <View style={{ marginTop: 24 }}>
              <Button text="Create Account" />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: 60,
    backgroundColor:"#fff"
  },
  skipContainer: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  skip: {
    color: reng.secondaryColor,
    fontWeight: 500,
    fontSize: 18,
  },
  accountContainer: {
    paddingHorizontal: 24,
    display: "flex",
  },
  account: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: 32,
    color: reng.primaryText,
    marginBottom: 64,
  },
  inputs: {
    marginBottom: 24,
  },
  numbers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    gap: 8,
  },
  number: {
    textAlign: "center",
    fontSize: 16,
  },

  emailInput: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    marginTop: 8,
    height:48
  },
  email: {
    color: "#616161",
    fontSize: 18,
    marginRight: 4,
  },
});
