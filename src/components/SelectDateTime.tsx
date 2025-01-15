import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Calendar } from 'react-native-calendars';

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

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time to proceed.');
      return;
    }

    console.log(
      `Booking confirmed for ${turfName} on ${selectedDate} at ${selectedTime}`
    );
    // Perform booking logic here
    navigation.goBack(); // Navigate back or to a confirmation page
  };

  return (
    <View style={styles.container}>
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
            selectedColor: '#8FCB81',
          },
        }}
        theme={{
          todayTextColor: '#8FCB81',
          arrowColor: '#8FCB81',
        }}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    backgroundColor: '#8FCB81',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  timeSlotsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 20,
    marginTop: 20,
  },
  timeSlot: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  timeSlotSelected: {
    backgroundColor: '#8FCB81',
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
    backgroundColor: '#8FCB81',
    borderRadius: 25,
    paddingVertical: 15,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
