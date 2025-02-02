import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyBookings = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Bookings</Text>
      </View>

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
        <View style={styles.cardHeader}>
          <Icon name="calendar" size={20} color="#4CAF50" />
          <Text style={styles.bookingText}>Booking #12345</Text>
        </View>
        <Text style={styles.bookingDetails}>📅 Date: 2023-09-12</Text>
        <Text style={styles.bookingDetails}>⏰ Time: 2:00 PM</Text>
        <Text style={styles.bookingDetails}>📍 Location: Green Park</Text>
      </View>
      <View style={styles.bookingCard}>
        <View style={styles.cardHeader}>
          <Icon name="calendar" size={20} color="#4CAF50" />
          <Text style={styles.bookingText}>Booking #12346</Text>
        </View>
        <Text style={styles.bookingDetails}>📅 Date: 2023-09-05</Text>
        <Text style={styles.bookingDetails}>⏰ Time: 11:00 AM</Text>
        <Text style={styles.bookingDetails}>📍 Location: City Gardens</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3E82FC',
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  backButton: {
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 20,
    marginRight: 15,
    elevation: 3,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#3E82FC',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 16,
    color: '#777',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    marginHorizontal: 20,
  },
  bookingCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 15,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bookingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  bookingDetails: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
  },
});

export default MyBookings;
