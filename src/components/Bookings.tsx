import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Bookings = ({ navigation }: any) => {
  const turfs = [
    {
      id: 1,
      name: 'Greenfield Arena - Topsia',
      location: '34b topsia park, sky arena kolkata - 700012',
      reviews: '4.5/5',
      distance: '200m away',
      image: require('../assets/images/download.jpg'),
    },
    {
      id: 2,
      name: 'Greenfield Arena - Topsia',
      location: '34b topsia park, sky arena kolkata - 700012',
      reviews: '4.5/5',
      distance: '1km away',
      image: require('../assets/images/download1.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.name}>Adrian</Text>
          </View>
          <View style={styles.headerIcons}>
            <Icon name="bell" size={20} color="#fff" style={styles.icon} />
            <Icon name="bars" size={24} color="#fff" />
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a turf or location"
            placeholderTextColor="#A9A9A9"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="search" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Upcoming Tournaments */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Tournaments</Text>
          <View style={styles.tournamentCard}>
            <View style={styles.tournamentHeader}>
              <View style={styles.teamColors}>
                <View style={[styles.circle, { backgroundColor: '#E53935' }]} />
                <View style={[styles.circle, { backgroundColor: '#1E88E5' }]} />
              </View>
              <Text style={styles.tournamentText}>Red Devils vs V. Blues</Text>
              <Icon name="ellipsis-h" size={20} color="#777" />
            </View>
            <View style={styles.tournamentDetails}>
              <View style={styles.tournamentItem}>
                <Icon name="calendar" size={16} color="#777" />
                <Text style={styles.tournamentItemText}>9 May 2021</Text>
              </View>
              <View style={styles.tournamentItem}>
                <Icon name="trophy" size={16} color="#777" />
                <Text style={styles.tournamentItemText}>Champions League</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Turfs */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Turfs</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {turfs.map((turf) => (
              <View key={turf.id} style={styles.turfCard}>
                <Image source={turf.image} style={styles.turfImage} />
                <Text style={styles.turfTitle}>{turf.name}</Text>
                <Text style={styles.turfDetails}>{turf.location}</Text>
                <Text style={styles.turfDetails}>
                  Reviews: {turf.reviews} | {turf.distance}
                </Text>
                <TouchableOpacity
                  style={styles.bookButton}
                  onPress={() =>
                    navigation.navigate('BookTurf', {
                      turfName: turf.name,
                      turfLocation: turf.location,
                    })
                  }
                >
                  <Text style={styles.bookButtonText}>BOOK</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Games */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What do you feel like playing today?</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[{ id: 1, name: 'Cricket Smash', image: require('../assets/images/cricket.jpg') },
            { id: 2, name: 'Pickleball Madness', image: require('../assets/images/pickleball.jpeg') },
            { id: 3, name: 'Sweet Volley', image: require('../assets/images/volleyball.png') }].map((game) => (
              <View key={game.id} style={styles.gameCard}>
                <Image source={game.image} style={styles.gameImage} />
                <Text style={styles.gameTitle}>{game.name}</Text>
                <Text style={styles.gameDetails}>5 people interested near you</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3E82FC',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    color: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: -15,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    backgroundColor: '#3E82FC',
    padding: 10,
    borderRadius: 15,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tournamentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 5,
    marginBottom: 15,
  },
  tournamentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  teamColors: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  tournamentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tournamentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tournamentItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tournamentItemText: {
    marginLeft: 5,
    color: '#777',
  },
  turfCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    width: 200,
    elevation: 5,
  },
  turfImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  turfTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  turfDetails: {
    color: '#777',
    marginBottom: 5,
  },
  bookButton: {
    backgroundColor: '#3E82FC',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  gameCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: 150,
    elevation: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  gameImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  gameDetails: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
});

export default Bookings;
