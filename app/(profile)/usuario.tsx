import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const favorites = [
  { id: '1', title: 'Writer of the Month', description: 'UX Rescues | Miembro desde Julio 2022' },
  { id: '2', title: 'Top Contributor', description: 'Fitness Folks | Miembro desde Julio 2022' },
  { id: '3', title: 'Favorite Writer', description: 'Mind Valley | Miembro desde Julio 2022' },
];

const activities = [
  { id: '1', title: 'Publicación sobre UX', description: 'Hablando sobre diseño intuitivo.' },
  { id: '2', title: 'Entrenamiento Matutino', description: 'Comparto mi rutina diaria de fitness.' },
];

const followedPeople = [
  { 
    id: '1', 
    name: 'Arvind Mishra', 
    pronouns: 'He / His', 
    connections: '500+ Connections', 
    description: 'Software Engineer | AI Enthusiast | Transfor...' 
  },
  { 
    id: '2', 
    name: 'Angela Joshi', 
    pronouns: 'She / Her', 
    connections: '500+ Connections', 
    description: 'Strategic Marketing Professional | Brand...' 
  },
  { 
    id: '3', 
    name: 'Arvind Mishra', 
    pronouns: 'He / His', 
    connections: '500+ Connections', 
    description: 'Software Engineer | AI' 
  },
  { 
    id: '4', 
    name: 'Suhana Khan', 
    pronouns: 'She / Her', 
    connections: '500+ Connections', 
    description: 'Dedicated Healthcare' 
  },
];

export default function UserProfile() {
  const renderFavorite = ({ item }: { item: typeof favorites[0] }) => (
    <View style={styles.favoriteItem}>
      <View style={styles.favoriteCircle}></View>
      <View style={styles.favoriteInfo}>
        <Text style={styles.favoriteTitle}>{item.title}</Text>
        <Text style={styles.favoriteDescription}>{item.description}</Text>
      </View>
    </View>
  );

  const renderActivity = ({ item }: { item: typeof activities[0] }) => (
    <View style={styles.activityItem}>
      <View style={styles.activityInfo}>
        <Text style={styles.activityTitle}>{item.title}</Text>
        <Text style={styles.activityDescription}>{item.description}</Text>
      </View>
    </View>
  );

  const renderFollowedPerson = ({ item }: { item: typeof followedPeople[0] }) => (
    <View style={styles.followedPerson}>
      <View style={styles.personCircle}></View>
      <View style={styles.personInfo}>
        <Text style={styles.personName}>{item.name}</Text>
        <Text style={styles.personPronouns}>{item.pronouns}</Text>
        <Text style={styles.personConnections}>{item.connections}</Text>
        <Text style={styles.personDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Parte superior - Perfil del usuario */}
      <View style={styles.profileHeader}>
        <View style={styles.profileCircle}></View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Sarah Johnson</Text>
          <Text style={styles.profilePronouns}>She / Her</Text>
          <Text style={styles.profileFollowers}>500 Seguidores</Text>
          <Text style={styles.profileDescription}>
            UX Designer | Creando Experiencias Intuitivas y Funcionales | Digital Excellence 🌐📱
          </Text>
          <Text style={styles.profileLocation}>📍 Mumbai, India</Text>
        </View>
      </View>

      {/* Sección de Favoritos */}
      <Text style={styles.sectionTitle}>Favoritos</Text>
      <FlatList
        data={favorites}
        renderItem={renderFavorite}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
      
      {/* Botón de "Ver más favoritos" */}
      <TouchableOpacity style={styles.loadMoreButton}>
        <Text style={styles.loadMoreText}>Ver más favoritos</Text>
      </TouchableOpacity>

      {/* Sección de Actividades */}
      <Text style={styles.sectionTitle}>Actividades</Text>
      <FlatList
        data={activities}
        renderItem={renderActivity}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
      
      {/* Botón de "Ver más actividades" */}
      <TouchableOpacity style={styles.loadMoreButton}>
        <Text style={styles.loadMoreText}>Ver más actividades</Text>
      </TouchableOpacity>

      {/* Sección de Mis seguidos */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Mis seguidos</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>Ver Todo</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={followedPeople}
        renderItem={renderFollowedPerson}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4e1',
    padding: 15,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffe4e1',
    borderRadius: 10,
  },
  profileCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#DDD',
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
    fontSize: 14,
    color: '#888',
    marginVertical: 2,
  },
  profileFollowers: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF4500',
    marginVertical: 2,
  },
  profileDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  profileLocation: {
    fontSize: 14,
    color: '#666',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllText: {
    color: '#FF4500',
    fontWeight: 'bold',
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffe4e1',
    borderRadius: 10,
    marginBottom: 10,
  },
  favoriteCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DDD',
    marginRight: 15,
  },
  favoriteInfo: {
    flex: 1,
  },
  favoriteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  favoriteDescription: {
    fontSize: 14,
    color: '#666',
  },
  loadMoreButton: {
    backgroundColor: '#FFB2D1',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  loadMoreText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  activityItem: {
    padding: 10,
    backgroundColor: '#ffe4e1',
    borderRadius: 10,
    marginBottom: 10,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  activityDescription: {
    fontSize: 14,
    color: '#666',
  },
  followedPerson: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#ffe4e1',
    borderRadius: 10,
    marginBottom: 10,
  },
  personCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DDD',
    marginRight: 15,
  },
  personInfo: {
    flex: 1,
  },
  personName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  personPronouns: {
    fontSize: 14,
    color: '#888',
  },
  personConnections: {
    fontSize: 14,
    color: '#666',
    marginVertical: 2,
  },
  personDescription: {
    fontSize: 14,
    color: '#666',
  }, activityInfo: {
    flex: 1,  // Ocupa todo el espacio disponible
    marginRight: 10,  // Espacio entre el texto y los botones
  },
});