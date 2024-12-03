import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginPage from '@/components/LoginPage';

const Index: React.FC = () => {
  return(
    <>
    <View style={styles.container}>
      <LoginPage />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#333333',
  }
})

export default Index;