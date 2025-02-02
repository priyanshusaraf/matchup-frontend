import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookTurf = ({ route, navigation }: any) => {
  const { turfName, turfLocation } = route.params;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  // Fade-in animation for the page
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.ScrollView style={[styles.container, { opacity: fadeAnim }]}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Map Section */}
      <View style={styles.mapContainer}>
        <Image
          source={require('../assets/images/download2.png')}
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
              turfName,
            })
          }
        >
          <Text style={styles.bookButtonText}>Book Court</Text>
        </TouchableOpacity>
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: '#3E82FC',
    padding: 10,
    borderRadius: 20,
    elevation: 5,
  },
  mapContainer: {
    height: 250,
  },
  map: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  mapDetails: {
    position: 'absolute',
    bottom: 20,
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3E82FC',
    marginBottom: 10,
  },
  ratingContainer: {
    backgroundColor: '#FFD700',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  rating: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 20,
    lineHeight: 22,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  feature: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 3,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  bookButton: {
    backgroundColor: '#3E82FC',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 5,
  },
  bookButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookTurf;
