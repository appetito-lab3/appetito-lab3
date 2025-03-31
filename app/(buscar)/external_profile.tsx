import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const mutualFriends = [
  { id: '1', name: 'Amigo 1' },
  { id: '2', name: 'Amigo 2' },
  { id: '3', name: 'Amigo 3' },
];

const posts = [
  { id: '1', title: 'Cómo mantenerse enfocado', time: '2h', content: 'Explorando formas de mantener la productividad durante el día.' },
  { id: '2', title: 'Rutina Matutina', time: '1d', content: 'Un vistazo a mi rutina de ejercicio matutina.' },
];

export default function ProfileScreen() {
  const renderMutualFriend = ({ item }: { item: typeof mutualFriends[0] }) => (
    <View style={styles.friendItem}>
      <View style={styles.friendCircle}></View>
      <Text style={styles.friendName}>{item.name}</Text>
    </View>
  );

  const renderPost = ({ item }: { item: typeof posts[0] }) => (
    <View style={styles.postItem}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postTime}>{item.time}</Text>
      <Text style={styles.postContent}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Sección de Perfil */}
      <View style={styles.profileHeader}>
        <View style={styles.profileCircle}></View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Anaya Mehra</Text>
          <Text style={styles.profilePronouns}>She / Her</Text>
          <Text style={styles.profileFollowers}>500+ Seguidores</Text>
          <Text style={styles.profileDescription}>
            Strategic Marketing Professional | Brand Enthusiast | Driving Success through Creativity & Analytics
          </Text>
          <Text style={styles.profileLocation}>📍 Mumbai, India</Text>
        </View>
      </View>

      {/* Área de Trabajo */}
      <View style={styles.workArea}>
        <Text style={styles.workTitle}>Área de Trabajo</Text>
        <Text style={styles.workDescription}>Marketing Manager @ Pixar</Text>
      </View>

      {/* Información de Amigos */}
      <View style={styles.friendsArea}>
        <Text style={styles.sectionTitle}>Amigos en Común</Text>
        <FlatList
          horizontal
          data={mutualFriends}
          renderItem={renderMutualFriend}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.friendActions}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Seguir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.buttonText}>Mensaje</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sección de Actividades */}
      <Text style={styles.sectionTitle}>Actividad</Text>
      <FlatList
        data={posts}
        renderItem={renderPost}
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
    backgroundColor: '#D3D3D3', // Fondo gris
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
  },
  profileFollowers: {
    fontSize: 14,
    color: '#FF4500',
    marginVertical: 5,
  },
  profileDescription: {
    fontSize: 14,
    color: '#666',
  },
  profileLocation: {
    fontSize: 14,
    color: '#666',
  },
  workArea: {
    marginBottom: 20,
  },
  workTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  workDescription: {
    fontSize: 14,
    color: '#666',
  },
  friendsArea: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  friendItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  friendCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D3D3D3',
    marginBottom: 5,
  },
  friendName: {
    fontSize: 14,
    color: '#333',
  },
  friendActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  followButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 10,
  },
  messageButton: {
    backgroundColor: '#FFB2D1',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  postItem: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postTime: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  postContent: {
    fontSize: 14,
    color: '#666',
  },
});