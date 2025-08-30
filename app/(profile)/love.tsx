import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importar íconos
import { useRouter } from 'expo-router'; // Hook para manejar la navegación
const followers = [
  { id: '1', name: 'Neeti Mohan', isFollowing: true },
  { id: '2', name: 'John Doe', isFollowing: false },
  { id: '3', name: 'Jane Smith', isFollowing: true },
  { id: '4', name: 'Chris Frost', isFollowing: false },
  { id: '5', name: 'Angela Joshi', isFollowing: true },
];

export default function FollowersScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  // Inicializa el router
  const router = useRouter();

  // Función para manejar la navegación al perfil
  const handleNavigateRrofile = () => {
    router.push("/(profile)"); // Redirige a la ruta del perfil
  };

  const renderFollower = ({ item }: { item: typeof followers[0] }) => (
    <View style={styles.followerItem}>
      {/* Círculo sin imagen */}
      <View style={styles.profileCircle}></View>

      {/* Información del seguidor */}
      <View style={styles.followerInfo}>
        <Text style={styles.followerName}>{item.name}</Text>
      </View>

      {/* Botón con iconos */}
      <TouchableOpacity style={styles.actionButton}>
        {item.isFollowing ? (
          <Ionicons name="checkmark-circle" size={24} color="#28A745" /> // Icono verde para "Siguiendo"
        ) : (
          <Ionicons name="person-add" size={24} color="#FFB2D1" /> // Icono rosado para "Agregar"
        )}
      </TouchableOpacity>
    </View>

  );

  return (
    <View style={styles.container}>
      {/* Botón de salir */}
      <TouchableOpacity style={styles.exitButton} onPress={handleNavigateRrofile}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      {/* Parte superior */}
      <View style={styles.header}>
        <Text style={styles.headerText}>lo que me gusta</Text>
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
  exitButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1, // Asegura que el botón esté encima de otros elementos
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40, // Ajusta el margen superior para evitar que se superponga con el botón de salir
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
    padding: 5, // Margen interno para los iconos
  },
});