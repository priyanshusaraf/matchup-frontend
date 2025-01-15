import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Switch, ScrollView } from 'react-native';

const Profile = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);
  const toggleDarkMode = () => setDarkModeEnabled(!darkModeEnabled);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.header}>User Profile</Text>

      {/* Profile Information */}
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual profile image URL
        style={styles.profileImage}
      />
      <Text style={styles.name}>Alex Johnson</Text>
      <Text style={styles.email}>alex.johnson@example.com</Text>

      {/* Profile Actions */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>

      {/* Settings Section */}
      <Text style={styles.sectionHeader}>Settings</Text>
      <View style={styles.settingsRow}>
        <Text style={styles.settingsText}>Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>
      <View style={styles.settingsRow}>
        <Text style={styles.settingsText}>Dark Mode</Text>
        <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#7d7d7d',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8FCB81',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  settingsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  settingsText: {
    fontSize: 16,
    color: '#000000',
  },
});

export default Profile;
