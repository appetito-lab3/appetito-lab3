import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Type definitions
interface CalendarDay {
  date: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  hasEvent: boolean;
  isToday?: boolean;
  isSelected?: boolean;
}

interface Event {
  id: string;
  title: string;
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
}

export default function CalendarScreen() {
  // Current month/year state
  const [currentMonth, setCurrentMonth] = useState(11); // December (0-based)
  const [currentYear, setCurrentYear] = useState(2023);
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 11, 12)); // December 12, 2023

  // Events data
  const events: Event[] = [
    {
      id: '1',
      title: 'Navigating Dietary Trends: Keto, Paleo, Vegan, and More',
      date: new Date(2023, 11, 12),
      startTime: '7:00 PM',
      endTime: '8:30 PM',
      location: 'Live in Vaulture'
    },
    {
      id: '2',
      title: 'Cooking Workshop: Holiday Recipes',
      date: new Date(2023, 11, 21),
      startTime: '5:30 PM',
      endTime: '7:00 PM',
      location: 'Culinary Center'
    },
    {
      id: '3',
      title: 'Nutrition Seminar',
      date: new Date(2023, 11, 24),
      startTime: '3:00 PM',
      endTime: '4:30 PM',
      location: 'Health Hub'
    }
  ];

  // Get month name
  const getMonthName = (month: number) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month];
  };

  // Navigate to previous month
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Navigate to next month
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Generate calendar days for the current month
  const generateCalendarDays = (): CalendarDay[] => {
    const days: CalendarDay[] = [];
    
    // First day of the month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const startingDayOfWeek = firstDay.getDay();
    
    // Last day of the month
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    
    // Get last month's last days to fill the first week
    const lastMonthLastDate = new Date(currentYear, currentMonth, 0).getDate();
    
    // Add previous month's days to fill the first week
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      days.push({
        date: lastMonthLastDate - i,
        month: prevMonth,
        year: prevYear,
        isCurrentMonth: false,
        hasEvent: false
      });
    }
    
    // Add current month's days
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    
    for (let i = 1; i <= totalDays; i++) {
      // Check if this day has an event
      const hasEvent = events.some(event => {
        const eventDate = event.date;
        return eventDate.getDate() === i && 
               eventDate.getMonth() === currentMonth && 
               eventDate.getFullYear() === currentYear;
      });
      
      // Check if this is today
      const isToday = i === todayDate && 
                     currentMonth === todayMonth && 
                     currentYear === todayYear;
                     
      // Check if this is the selected date
      const isSelected = i === selectedDate.getDate() && 
                        currentMonth === selectedDate.getMonth() && 
                        currentYear === selectedDate.getFullYear();
      
      days.push({
        date: i,
        month: currentMonth,
        year: currentYear,
        isCurrentMonth: true,
        hasEvent,
        isToday,
        isSelected
      });
    }
    
    // Add next month's days to complete the calendar grid (42 days total - 6 rows of 7 days)
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
      days.push({
        date: i,
        month: nextMonth,
        year: nextYear,
        isCurrentMonth: false,
        hasEvent: false
      });
    }
    
    return days;
  };

  // Get events for the selected date
  const getEventsForSelectedDate = (): Event[] => {
    return events.filter(event => {
      const eventDate = event.date;
      return eventDate.getDate() === selectedDate.getDate() &&
             eventDate.getMonth() === selectedDate.getMonth() &&
             eventDate.getFullYear() === selectedDate.getFullYear();
    });
  };

  // Select a date
  const selectDate = (day: CalendarDay) => {
    setSelectedDate(new Date(day.year, day.month, day.date));
    
    // If selecting a day from a different month, navigate to that month
    if (!day.isCurrentMonth) {
      setCurrentMonth(day.month);
      setCurrentYear(day.year);
    }
  };

  // Generate day cells for rendering
  const calendarDays = generateCalendarDays();
  const selectedDateEvents = getEventsForSelectedDate();
  
  // Day of week headers
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF0ED" />
      
      {/* Header with search icon */}
      <View style={styles.header}>
        <View style={styles.profileIcon}>
          <Ionicons name="person" size={16} color="#FF6B8A" />
        </View>
        <Text style={styles.headerTitle}>Calendario</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color="#FF6B8A" />
        </TouchableOpacity>
      </View>
      
      {/* Events label */}
      <View style={styles.eventsLabelContainer}>
        <Text style={styles.eventsLabel}>Eventos</Text>
        <View style={styles.underline} />
      </View>
      
      {/* Calendar Container */}
      <View style={styles.calendarContainer}>
        {/* Date indicator ribbon */}
        <View style={styles.dateRibbon}>
          <Text style={styles.dateNumber}>{selectedDate.getDate()}</Text>
          <Text style={styles.dateText}>DIC</Text>
        </View>
        
        {/* Month navigation */}
        <View style={styles.monthNavigation}>
          <TouchableOpacity onPress={goToPreviousMonth}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.monthYearText}>
            {getMonthName(currentMonth)} {currentYear}
          </Text>
          <TouchableOpacity onPress={goToNextMonth}>
            <Ionicons name="chevron-forward" size={24} color="white" />
          </TouchableOpacity>
        </View>
        
        {/* Days of week header */}
        <View style={styles.daysOfWeekContainer}>
          {daysOfWeek.map((day, index) => (
            <Text key={index} style={styles.dayOfWeekText}>
              {day}
            </Text>
          ))}
        </View>
        
        {/* Calendar days grid */}
        <View style={styles.calendarGrid}>
          {calendarDays.map((day, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayCell,
                day.isSelected && styles.selectedDayCell,
                !day.isCurrentMonth && styles.inactiveDay
              ]}
              onPress={() => selectDate(day)}
            >
              <Text style={[
                styles.dayText,
                day.isSelected && styles.selectedDayText,
                day.isToday && styles.todayText,
                !day.isCurrentMonth && styles.inactiveDayText
              ]}>
                {day.date}
              </Text>
              {day.hasEvent && <View style={styles.eventDot} />}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      {/* Events List */}
      <ScrollView style={styles.eventsContainer}>
        {selectedDateEvents.map((event, index) => (
          <View key={index} style={styles.eventCard}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <View style={styles.eventDetails}>
              <Text style={styles.eventTime}>Today | {event.startTime} to {event.endTime}</Text>
              <View style={styles.locationContainer}>
                <Ionicons name="location-outline" size={16} color="#555" />
                <Text style={styles.eventLocation}>{event.location}</Text>
              </View>
            </View>
          </View>
        ))}
        
        {selectedDateEvents.length === 0 && (
          <View style={styles.noEventsContainer}>
            <Text style={styles.noEventsText}>No events for this date</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0ED',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FF6B8A',
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  searchButton: {
    padding: 5,
  },
  eventsLabelContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 5,
  },
  eventsLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B8A',
  },
  underline: {
    width: 60,
    height: 2,
    backgroundColor: '#FF6B8A',
    marginTop: 3,
  },
  calendarContainer: {
    margin: 15,
    backgroundColor: '#FF6B8A',
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  dateRibbon: {
    position: 'absolute',
    top: 0,
    left: 20,
    backgroundColor: '#FF4081',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    zIndex: 10,
  },
  dateNumber: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateText: {
    color: 'white',
    fontSize: 12,
  },
  monthNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)',
  },
  monthYearText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  daysOfWeekContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)',
  },
  dayOfWeekText: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  dayCell: {
    width: '14.28%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  selectedDayCell: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
  dayText: {
    color: 'white',
    fontSize: 14,
  },
  selectedDayText: {
    color: '#FF6B8A',
    fontWeight: 'bold',
  },
  todayText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  inactiveDay: {
    opacity: 0.5,
  },
  inactiveDayText: {
    color: 'rgba(255,255,255,0.6)',
  },
  eventDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 6,
  },
  eventsContainer: {
    flex: 1,
    padding: 15,
  },
  eventCard: {
    backgroundColor: '#FFD700', // Yellow color as in the image
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  eventDetails: {
    flexDirection: 'column',
  },
  eventTime: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventLocation: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,
  },
  noEventsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  noEventsText: {
    color: '#999',
    fontSize: 16,
  },
});