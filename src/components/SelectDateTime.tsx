import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Animated,
  Easing,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';

const SelectDateTime = ({ route, navigation }: any) => {
  const { turfName } = route.params;

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableSlots, setAvailableSlots] = useState([
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
  ]);

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

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time to proceed.');
      return;
    }

    console.log(
      `Booking confirmed for ${turfName} on ${selectedDate} at ${selectedTime}`
    );
    navigation.navigate('MyBookings'); // Navigate back or to a confirmation page
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Book {turfName}</Text>
      </View>

      {/* Calendar */}
      <Calendar
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          console.log('Selected date:', day.dateString);
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#3E82FC',
          },
        }}
        theme={{
          todayTextColor: '#3E82FC',
          arrowColor: '#3E82FC',
          textDayFontWeight: 'bold',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: 'bold',
        }}
        style={styles.calendar}
      />

      {/* Available Time Slots */}
      {selectedDate ? (
        <>
          <Text style={styles.timeSlotsHeader}>Available Time Slots</Text>
          <FlatList
            data={availableSlots}
            keyExtractor={(item) => item}
            numColumns={3}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.timeSlot,
                  selectedTime === item && styles.timeSlotSelected,
                ]}
                onPress={() => {
                  setSelectedTime(item);
                  console.log('Selected time:', item);
                }}
              >
                <Text
                  style={[
                    styles.timeSlotText,
                    selectedTime === item && styles.timeSlotTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </>
      ) : (
        <Text style={styles.selectDateMessage}>
          Please select a date to see available time slots.
        </Text>
      )}

      {/* Confirm Button */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmBooking}
      >
        <Text style={styles.confirmButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </Animated.View>
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
  header: {
    padding: 20,
    backgroundColor: '#3E82FC',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  calendar: {
    margin: 20,
    borderRadius: 10,
    elevation: 3,
  },
  timeSlotsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 20,
    marginTop: 20,
  },
  timeSlot: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    elevation: 3,
  },
  timeSlotSelected: {
    backgroundColor: '#3E82FC',
  },
  timeSlotText: {
    fontSize: 16,
    color: '#333',
  },
  timeSlotTextSelected: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#3E82FC',
    borderRadius: 25,
    paddingVertical: 15,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  selectDateMessage: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default SelectDateTime;
