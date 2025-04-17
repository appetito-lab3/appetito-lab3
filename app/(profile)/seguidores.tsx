import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

const followers = [
  { id: '1', name: 'Neeti Mohan', isFollowing: true },
  { id: '2', name: 'John Doe', isFollowing: false },
  { id: '3', name: 'Jane Smith', isFollowing: true },
  { id: '4', name: 'Chris Frost', isFollowing: false },
  { id: '5', name: 'Angela Joshi', isFollowing: true },
];

export default function FollowersScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const renderFollower = ({ item }: { item: typeof followers[0] }) => (
    <View style={styles.followerItem}>
      {/* Círculo sin imagen */}
      <View style={styles.profileCircle}></View>

      {/* Información del seguidor */}
      <View style={styles.followerInfo}>
        <Text style={styles.followerName}>{item.name}</Text>
      </View>

      {/* Botón para agregar o siguiendo */}
      <TouchableOpacity
        style={[
          styles.actionButton,
          item.isFollowing ? styles.followingButton : styles.followButton,
        ]}
      >
        <Text style={styles.actionText}>
          {item.isFollowing ? 'Siguiendo' : 'Agregar'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Parte superior */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Seguidores</Text>
        <Text style={styles.headerFollowers}>853 Seguidores</Text>
      </View>

      {/* Barra de búsqueda */}
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar seguidores"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Lista de seguidores */}
      <FlatList
        data={followers.filter((follower) =>
          follower.name.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        renderItem={renderFollower}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4e1',
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFB2D1', // Color rosado claro
  },
  headerFollowers: {
    fontSize: 18,
    color: '#888',
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#ffe4e1',
  },
  followerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DDD', // Fondo gris
    marginRight: 15,
  },
  followerInfo: {
    flex: 1,
  },
  followerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  actionButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  followButton: {
    backgroundColor: '#FFB2D1', // Color rosado claro para "Agregar"
  },
  followingButton: {
    backgroundColor: '#28A745', // Color verde para "Siguiendo"
  },
  actionText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
});