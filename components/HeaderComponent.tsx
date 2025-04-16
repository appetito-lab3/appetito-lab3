import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderComponent = () => {
  // Función para manejar la navegación a perfil
  const goToProfile = () => {
    console.log('Navegando a Perfil');
    // Aquí podrías llamar la función `perfil`
  };

  // Función para manejar la redirección a mensajería
  const goToMessaging = () => {
    console.log('Navegando a Mensajería');
    // Aquí podrías llamar la función `mensajeria`
  };

  return (
    <View style={styles.headerContainer}>
      {/* Imagen de perfil */}
      <TouchableOpacity onPress={goToProfile} style={styles.profileButton}>
        <Image
          source={require('../assets/images/perfil.png')} // Imagen de perfil
          style={styles.profileImage}
        />
      </TouchableOpacity>

      {/* Logo central */}
      <Image
        source={require('../assets/images/icon.png')} // Imagen del logo central
        style={styles.logoImage}
      />

      {/* Icono de mensajería */}
      <TouchableOpacity onPress={goToMessaging} style={styles.messageButton}>
        <Ionicons name="chatbubble-ellipses" size={28} color="#FF6B8A" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4A7B9',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  logoImage: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  messageButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HeaderComponent;