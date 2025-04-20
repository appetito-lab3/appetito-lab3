import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet } from 'react-native';

const profiles = [
  { id: 1, name: 'Janvi Purav', description: 'Digital Marketing Specialist | SEO Strategist' },
  { id: 2, name: 'Neeti Mohan', description: 'Educational Psychologist | Student Success Advocate' },
  { id: 3, name: 'Akash Pandey', description: 'Software Engineer | AI Enthusiast' },
  { id: 4, name: 'Angela Joshi', description: 'Strategic Marketing Professional | Brand Enthusiast' },
  { id: 5, name: 'Chris Froster', description: 'Creative UX/UI Designer | Crafting Exceptional User Experiences' },
];

const ProfileList = () => {
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Seguidores</Text>

      {/* Barra de búsqueda */}
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar seguidores"
        placeholderTextColor="#999"
      />

      {/* Listado de perfiles */}
      <ScrollView style={styles.listContainer}>
        {profiles.map((profile) => (
          <View key={profile.id} style={styles.profileCard}>
            {/* Imagen de perfil */}
            <Image
              source={require('../../assets/images/perfil.png')} // Asegúrate de que perfil.png esté en la ruta correcta
              style={styles.profileImage}
            />

            {/* Información del usuario */}
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{profile.name}</Text>
              <Text style={styles.profileDescription}>{profile.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1', // Fondo rosado claro
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4081', // Texto destacado
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
    borderColor: '#FF4081',
    borderWidth: 1,
  },
  listContainer: {
    flex: 1,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // Círculo perfecto
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileDescription: {
    fontSize: 14,
    color: '#777',
  },
});

export default ProfileList;