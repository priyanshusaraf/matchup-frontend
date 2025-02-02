import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')} // Replace with your logo
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.appName}>MATCHUP</Text>
      <TouchableOpacity
        style={[styles.button, styles.emailButton]}
        onPress={() => navigation.navigate('Login')}
      >
        <Icon name="envelope" size={18} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Login With Email</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.facebookButton]}
        onPress={() => navigation.navigate('Login')}
      >
        <Icon name="facebook" size={18} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Login With Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.googleButton]}
        onPress={() => navigation.navigate('Login')}
      >
        <Icon name="google" size={18} color="#000" style={styles.icon} />
        <Text style={[styles.buttonText, styles.googleButtonText]}>
          Login With Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 18,
    color: '#7d7d7d',
    marginBottom: 5,
  },
  appName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 15,
  },
  emailButton: {
    backgroundColor: '#4CAF50',
  },
  facebookButton: {
    backgroundColor: '#3B5998',
  },
  googleButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  googleButtonText: {
    color: '#000',
  },
  icon: {
    marginRight: 10,
  },
});

export default Home;
