import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Switch } from 'react-native';

const MyBookings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);
  const toggleDarkMode = () => setDarkModeEnabled(!darkModeEnabled);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/100', // Replace with profile picture URL
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Alex Johnson</Text>
        <Text style={styles.profileEmail}>alex.johnson@example.com</Text>
      </View>

      {/* Booking History */}
      <Text style={styles.sectionTitle}>Booking History</Text>
      <View style={styles.bookingCard}>
        <Text style={styles.bookingText}>Booking #12345</Text>
        <Text style={styles.bookingDetails}>Date: 2023-09-12</Text>
        <Text style={styles.bookingDetails}>Time: 2:00 PM</Text>
        <Text style={styles.bookingDetails}>Location: Green Park</Text>
      </View>
      <View style={styles.bookingCard}>
        <Text style={styles.bookingText}>Booking #12346</Text>
        <Text style={styles.bookingDetails}>Date: 2023-09-05</Text>
        <Text style={styles.bookingDetails}>Time: 11:00 AM</Text>
        <Text style={styles.bookingDetails}>Location: City Gardens</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F7E9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: '#7d7d7d',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  bookingCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookingText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bookingDetails: {
    fontSize: 14,
    color: '#7d7d7d',
  },
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  settingsText: {
    fontSize: 16,
  },
});

export default MyBookings;
