import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { useRouter } from "expo-router"; // Importa el hook de enrutamiento

const ProfileMenu = () => {


  
    const router = useRouter(); // Inicializa el router
  
    const handleNavigateSalir = () => {
      router.push("/(login_reguistro)"); // Redirige a (tabs)
    };
  
    const handleNavigateToChagerPassword = () => {
      router.push("/ChangePassword"); // cambiar contraseña
    };
    const handleNavigateToChagerLove = () => {
      router.push("/love"); // cambiar contraseña
    };
  
    
  return (
  
    <View style={styles.container}>
      {/* Encabezado del Perfil */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/perfil.png')} // Ruta de la imagen de perfil
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Sarah Jhonson</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileButtonText}>Ver Perfil</Text>
        </TouchableOpacity>
      </View>
      

      {/* Opciones del Menú */}
      <ScrollView style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Mis Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} >
          <Text style={styles.menuItemText} onPress={handleNavigateToChagerLove}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Mis Seguidores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText} onPress={handleNavigateToChagerPassword}>Cambiar Contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Configuración</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Ayuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleNavigateSalir}>
          <Text style={styles.menuItemText}>Cerrar sesión</Text>
        </TouchableOpacity>

         
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC1C1', // Color rosado claro para el fondo
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Hace que la imagen sea circular
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  profileButton: {
    backgroundColor: '#FF8C8C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FF8C8C',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ProfileMenu;