import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const suggestedProfiles = [
  {
    id: '1',
    name: 'Arvind Mishra',
    pronouns: 'He / His',
    connections: '500+ Connections',
    description: 'Software Engineer | AI Enthusiast | Transform...',
  },
  {
    id: '2',
    name: 'Angela Joshi',
    pronouns: 'She / Her',
    connections: '500+ Connections',
    description: 'Strategic Marketing Professional | Brand...',
  },
  {
    id: '3',
    name: 'Suhana Khan',
    pronouns: 'She / Her',
    connections: '500+ Connections',
    description: 'Dedicated Healthcare...',
  },
  {
    id: '4',
    name: 'Max Albino',
    pronouns: 'He / His',
    connections: '500+ Connections',
    description: 'Film Maker | Creative Thinker...',
  },
];

export default function UserProfile() {
  const renderSuggestedProfile = ({ item }: { item: typeof suggestedProfiles[0] }) => (
    <View style={styles.suggestedProfile}>
      <View style={styles.profileCircle}></View>
      <View style={styles.suggestedInfo}>
        <Text style={styles.suggestedName}>{item.name}</Text>
        <Text style={styles.suggestedPronouns}>{item.pronouns}</Text>
        <Text style={styles.suggestedConnections}>{item.connections}</Text>
        <Text style={styles.suggestedDescription}>{item.description}</Text>
      </View>
      {/* Icono para agregar amigos */}
      <TouchableOpacity style={styles.addFriendIcon}>
        <FontAwesome name="plus" size={16} color="#FFF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Parte superior - Perfil */}
      <View style={styles.profileHeader}>
        <View style={styles.profileCircle}></View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Anaya Mehra</Text>
          <Text style={styles.profilePronouns}>She / Her</Text>
          <Text style={styles.profileFollowers}>500+ Seguidores</Text>
          <Text style={styles.profileDescription}>
            Strategic Marketing Professional | Brand Enthusiast | Driving Success through Creativity & Analytics
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.profileButton}>
        <Text style={styles.profileButtonText}>Ver Perfil</Text>
      </TouchableOpacity>

      {/* Sección "Personas que quizás conozcas" */}
      <Text style={styles.sectionTitle}>Personas que quizás conozcas</Text>
      <FlatList
        data={suggestedProfiles}
        renderItem={renderSuggestedProfile}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#FFE4E1',
    borderRadius: 10,
  },
  profileCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D3D3D3', // Fondo gris para la foto
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profilePronouns: {
    fontSize: 16,
    color: '#666',
    marginVertical: 2,
  },
  profileFollowers: {
    fontSize: 16,
    color: '#FF4500',
    marginVertical: 5,
  },
  profileDescription: {
    fontSize: 14,
    color: '#666',
  },
  profileButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  profileButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4500',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  suggestedProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  
  suggestedInfo: {
    flex: 1,
  },
  suggestedName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  suggestedPronouns: {
    fontSize: 14,
    color: '#666',
  },
  suggestedConnections: {
    fontSize: 14,
    color: '#FF4500',
    marginVertical: 2,
  },
  suggestedDescription: {
    fontSize: 14,
    color: '#666',
  },
  addFriendIcon: {
    backgroundColor: '#FF4500',
    padding: 10,
    borderRadius: 20,
  },
});