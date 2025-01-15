import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Squash Court</Text>
      <Text style={styles.subtitle}>
        Challenge your friend and play together a game of squash.
      </Text>
      <Image
        source={require('../assets/images/squash-player.png')}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Sign up for an account</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Already a member?{' '}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}
        >
          Log in
        </Text>
      </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#7d7d7d',
  },
  image: {
    width: 250,
    height: 220,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#8FCB81',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: '#7d7d7d',
  },
  loginLink: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Home;
