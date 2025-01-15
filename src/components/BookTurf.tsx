import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const BookTurf = ({ route, navigation }: any) => {
  const { turfName, turfLocation } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Map Section */}
      <View style={styles.mapContainer}>
        <Image
          source={require('../assets/images/download2.png')} // Replace with a real map or placeholder
          style={styles.map}
        />
        <View style={styles.mapDetails}>
          <Text style={styles.mapText}>{turfLocation}</Text>
        </View>
      </View>

      {/* Turf Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.turfName}>{turfName}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>★ 4.8</Text>
        </View>

        <Text style={styles.description}>
          With a perfect view around the city, this squash court is the ideal
          destination for any fan of this sport. Imagine yourself playing at the
          last floor of a gym, enjoying a panoramic view across the entire city
          while playing.
        </Text>

        {/* Features Section */}
        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <Text style={styles.featureTitle}>Courts</Text>
            <Text style={styles.featureValue}>5 courts</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureTitle}>Open Until</Text>
            <Text style={styles.featureValue}>22:00 PM</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureTitle}>Shower Area</Text>
            <Text style={styles.featureValue}>Yes</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureTitle}>Parking</Text>
            <Text style={styles.featureValue}>6 spots</Text>
          </View>
        </View>
      </View>

      {/* Pricing and Book Button */}
      <View style={styles.footer}>
        <Text style={styles.price}>$20 / hour</Text>
        <TouchableOpacity
  style={styles.bookButton}
  onPress={() =>
    navigation.navigate('SelectDateTime', {
      turfName, // Pass the turf name to the next screen
    })
  }
>
  <Text style={styles.bookButtonText}>Book Court</Text>
</TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mapContainer: {
    position: 'relative',
    height: 200,
  },
  map: {
    width: '100%',
    height: '150%',
  },
  mapDetails: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  mapText: {
    fontSize: 14,
    color: '#333333',
  },
  infoContainer: {
    padding: 20,
  },
  turfName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  ratingContainer: {
    backgroundColor: '#8FCB81',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    marginVertical: 60,
  },
  rating: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555555',
    marginVertical: 20,
    lineHeight: 20,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  feature: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
  },
  featureTitle: {
    fontSize: 12,
    color: '#888888',
    marginBottom: 5,
  },
  featureValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#eeeeee',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  bookButton: {
    backgroundColor: '#8FCB81',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  bookButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookTurf;
