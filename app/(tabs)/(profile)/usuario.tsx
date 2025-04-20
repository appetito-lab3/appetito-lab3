import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

interface MyProfileProps {
  name: string;
  pronouns: string;
  followers: number;
  title: string;
  bio: string;
  location: string;
  company: string;
  jobTitle: string;
  aboutMe: string;
  profileImage: any; // Use the correct type for your image source
}

const MyProfile: React.FC<MyProfileProps> = ({
  name,
  pronouns,
  followers,
  title,
  bio,
  location,
  company,
  jobTitle,
  aboutMe,
  profileImage,
}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image 
            source={profileImage} 
            style={styles.profileImage}
            accessibilityLabel="perfil.png"
          />
        </View>
        
        <View style={styles.profileInfo}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.editButton}>
                <Feather name="edit-2" size={18} color="#e74c3c" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.moreButton}>
                <Feather name="more-vertical" size={18} color="#333" />
              </TouchableOpacity>
            </View>
          </View>
          
          <Text style={styles.pronouns}>{pronouns}</Text>
          <Text style={styles.followers}>{followers} Seguidores</Text>
        </View>
      </View>
      
      <View style={styles.bioSection}>
        <Text style={styles.bioText}>{title}</Text>
        <Text style={styles.bioDetails}>{bio}</Text>
      </View>
      
      <View style={styles.locationSection}>
        <MaterialIcons name="location-on" size={16} color="#e74c3c" />
        <Text style={styles.locationText}>{location}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trabajo</Text>
        <Text style={styles.jobText}>{jobTitle} @ {company}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acerca de</Text>
        <Text style={styles.aboutText}>{aboutMe}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdad6',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImageContainer: {
    marginRight: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#c4c4c4', // Placeholder color
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  actions: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 8,
  },
  moreButton: {},
  pronouns: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  followers: {
    fontSize: 14,
    color: '#666',
  },
  bioSection: {
    marginBottom: 16,
  },
  bioText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    marginBottom: 4,
  },
  bioDetails: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 8,
  },
  jobText: {
    fontSize: 14,
    color: '#333',
  },
  aboutText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default MyProfile;