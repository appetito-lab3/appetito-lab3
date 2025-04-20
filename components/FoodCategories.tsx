import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FoodCategories = [
  { name: 'Fitness', image: require('../assets/images/fitness.png') },
  { name: 'Recetas', image: require('../assets/images/recetas.png') },
  { name: 'Hamburguesas', image: require('../assets/images/hamburgesas.png') },
  { name: 'Quesos y Embutidos', image: require('../assets/images/quesos_enbutidos.png') },
  { name: 'China', image: require('../assets/images/china.png') },
  { name: 'Ensaladas', image: require('../assets/images/ensaladas.png') },
  { name: 'Italiana', image: require('../assets/images/italiana.png') },
  { name: 'Empanadas', image: require('../assets/images/empanadas.png') },
  { name: 'Japonesa', image: require('../assets/images/japonesa.png') },
  { name: 'Pasapalos', image: require('../assets/images/pasapalos.png') },
  { name: 'Postres', image: require('../assets/images/postres.png') },
  { name: 'Arepas', image: require('../assets/images/arepas.png') },
];

const MenuGrid = () => {
  // Función para manejar la selección de una categoría
  const handlePress = (category: string) => {
    console.log(`Seleccionaste la categoría: ${category}`);
  };

  return (
    <View style={styles.container}>
      {/* Encabezado de texto */}
      <Text style={styles.title}>Categorías</Text>

      {/* Cuadrícula de categorías */}
      <View style={styles.grid}>
        {FoodCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handlePress(item.name)}
          >
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0ED',
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15, // Espacio entre el título y la cuadrícula
    textAlign: 'center', // Centra el texto
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', // Ajusta el tamaño para mantener dos elementos por fila
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    elevation: 2, // Sombra para el efecto visual
  },
  image: {
    width: '100%',
    height: 100,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
});

export default MenuGrid;