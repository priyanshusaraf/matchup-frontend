import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';

const Bookings = ({ navigation }: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // For fade-in animation

  // Fade-in animation for the page
  React.useEffect(() => {
    console.log('Bookings page loaded');
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, []);

  const turfs = [
    {
      id: 1,
      name: 'Greenfield Arena',
      location: 'Pitch 1 | 17/08/2023',
      image: require('../assets/images/download.jpg'),
    },
    {
      id: 2,
      name: 'Ace Courts',
      location: 'Court 3 | 19/09/2023',
      image: require('../assets/images/download1.jpg'),
    },
    {
      id: 3,
      name: 'Hoops Haven',
      location: 'Court 5 | 19/09/2023',
      image: require('../assets/images/images.jpg'),
    },
    {
      id: 4,
      name: 'Spike Beach',
      location: 'Court 2 | 22/09/2023',
      image: require('../assets/images/images1.jpg'),
    },
  ];

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcome}>Welcome, Player!</Text>
          <Text style={styles.title}>Find Turfs Near You</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a turf or location"
            placeholderTextColor="#A9A9A9"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>🔍</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Turfs */}
        <Text style={styles.sectionTitle}>Featured Turfs</Text>
        {turfs.slice(0, 2).map((turf) => (
          <TouchableOpacity
            key={turf.id}
            style={styles.featuredCard}
            onPress={() => {
              console.log(`Navigating to BookTurf with: ${turf.name}, ${turf.location}`);
              navigation.navigate('BookTurf', {
                turfName: turf.name,
                turfLocation: turf.location,
              });
            }}
          >
            <Image source={turf.image} style={styles.featuredImage} />
            <View style={styles.featuredInfo}>
              <Text style={styles.featuredTitle}>{turf.name}</Text>
              <Text style={styles.featuredDetails}>{turf.location}</Text>
              <View style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {/* Available Turfs */}
        <Text style={styles.sectionTitle}>Available Turfs</Text>
        <View style={styles.availableContainer}>
          {turfs.slice(2).map((turf) => (
            <TouchableOpacity
              key={turf.id}
              style={styles.availableCard}
              onPress={() => {
                console.log(`Navigating to BookTurf with: ${turf.name}, ${turf.location}`);
                navigation.navigate('BookTurf', {
                  turfName: turf.name,
                  turfLocation: turf.location,
                });
              }}
            >
              <Image source={turf.image} style={styles.availableImage} />
              <Text style={styles.availableTitle}>{turf.name}</Text>
              <Text style={styles.availableDetails}>{turf.location}</Text>
              <View style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Filter Section */}
        <Text style={styles.sectionTitle}>Filter by Sport</Text>
        <View style={styles.filterContainer}>
          {['Soccer', 'Tennis', 'Basketball', 'Volleyball', 'Cricket'].map(
            (sport, index) => (
              <TouchableOpacity
                key={index}
                style={styles.filterButton}
                onPress={() => console.log(`Filter by: ${sport}`)}
              >
                <Text style={styles.filterText}>{sport}</Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  header: {
    padding: 20,
    backgroundColor: '#8FCB81',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 16,
    color: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderWidth: 0,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    elevation: 5,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#8FCB81',
    padding: 15,
    borderRadius: 25,
    elevation: 5,
  },
  searchButtonText: {
    fontSize: 16,
    color: '#ffffff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  featuredCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    elevation: 5,
  },
  featuredImage: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  featuredInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  featuredDetails: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  bookButtonText: {
    fontSize: 14,
    color: '#ffffff',
  },
  availableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  availableCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 20,
    elevation: 5,
    alignItems: 'center',
    overflow: 'hidden',
  },
  availableImage: {
    width: '100%',
    height: 120,
  },
  availableTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  availableDetails: {
    fontSize: 12,
    color: '#777',
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  filterButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginRight: 10,
    marginBottom: 10,
    elevation: 5,
  },
  filterText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default Bookings;
