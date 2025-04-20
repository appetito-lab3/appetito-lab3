import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent'; // Componente del encabezado
import SwipeProfiles from '../../components/SwipeProfiles'; // Componente tipo carrusel
import PubliImagen from '../../components/PubliImagen'; // Componente de publicaciones

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado */}
      <HeaderComponent />

      {/* Carrusel con imágenes de perfiles */}
      <View style={styles.swipeProfilesContainer}>
        <SwipeProfiles />
      </View>

      {/* Contenedor de publicaciones */}
      <View style={styles.publiImagenContainer}>
        {/* Llamada al componente PubliImagen con las propiedades necesarias */}
        <PubliImagen
          username="Jose Asuaje" // Nombre del usuario
          timeAgo="2h" // Tiempo desde la publicación
          postContent="Durante user research, the main problem of that user group should be found out." // Contenido del post
          initialLikesCount={14} // Cantidad inicial de "Me gusta"
          commentsCount={4} // Cantidad inicial de comentarios
          onProfilePress={() => console.log('Navegar al perfil')} // Acción al presionar el perfil
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1', // Fondo claro general
  },
  swipeProfilesContainer: {
    height: 120, // Altura fija para el carrusel
    backgroundColor: '#FFE4E1', // Fondo blanco para resaltar el carrusel
    marginTop: 10, // Separación del encabezado
    paddingHorizontal: 10, // Margen interno para contenido del carrusel
    justifyContent: 'center',
  },
  publiImagenContainer: {
    flex: 1, // Ocupa el espacio restante
    backgroundColor: '#FFE4E1', // Fondo blanco para publicaciones
    marginTop: 10, // Separación del carrusel
    padding: 10, // Margen interno para publicaciones
  },
});

export default App;