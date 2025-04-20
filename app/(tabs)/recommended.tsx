import HeaderComponent from '../../components/HeaderComponent'; // Ajusta la ruta según la ubicación del archivo
import Carrusel from '../../components/Carrusel'; // Ajusta la ruta según la ubicación del archivo

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Recommended = () => {
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <HeaderComponent />

      {/* Texto Inspirado en la Imagen */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          ¡Aún no te has unido a ningún foodie! Explora nuestras opciones recomendadas o ve a la pestaña explorar para buscar restaurantes o recetas.
        </Text>
      </View>

      {/* Cuerpo con el carrusel */}
      <Carrusel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCDC7',
  },
  textContainer: {
    
 
    padding: 15,
    backgroundColor: '#FFCDC7', // Fondo rosado similar al de la imagen
    
    
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Sombra en Android
  },
  text: {
    fontSize: 16,
    fontWeight: '600', // Más énfasis en el texto
    color: '#E47575', // Color rojo como en la imagen
    textAlign: 'center',
    lineHeight: 24, // Mayor legibilidad
  },
});

export default Recommended;