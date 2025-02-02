import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({ navigation }: any) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  // Fade-in animation
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);
  const toggleDarkMode = () => setDarkModeEnabled(!darkModeEnabled);

  return (
    <Animated.ScrollView style={[styles.container, { opacity: fadeAnim }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Profile Information */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual profile image URL
          style={styles.profileImage}
        />
        <Text style={styles.name}>Alex Johnson</Text>
        <Text style={styles.email}>alex.johnson@example.com</Text>
      </View>

      {/* Profile Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Icon name="edit" size={16} color="#fff" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="lock" size={16} color="#fff" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="sign-out" size={16} color="#fff" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>

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
    </Animated.ScrollView>
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
    padding: 10,
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
    marginVertical: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#3E82FC',
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#777',
  },
  actions: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3E82FC',
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 15,
    elevation: 5,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    marginLeft: 20,
    color: '#333',
  },
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    elevation: 3,
  },
  settingsText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Profile;
