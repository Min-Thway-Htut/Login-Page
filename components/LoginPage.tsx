import React from "react";
import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";

const LoginPage: React.FC = () => {
  return (
  <View style={styles.container}>
    <Text style={styles.headerText}>Welcome to Little Lemon</Text>
    <Text style={styles.regularText}>Login to continue</Text>
    <TextInput style={styles.input} placeholder='Email'/>
    <TextInput style={styles.input} secureTextEntry={true} placeholder='Password'/>
  </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#edefee',
    textAlign: 'center',
  },
  regularText:{
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    textAlign: 'center',
    color: '#edefee',
  },
  input:{
    backgroundColor: '#fff',
    padding: 20,
    margin: 40,
  }

})
