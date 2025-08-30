import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import SearchBar from '../../components/LookFor'; // Importa el componente SearchBar
import FoodCategories from '../../components/FoodCategories'; // Importa el componente FoodCategories

const App = () => {
  return (
    <View style={styles.container}>
      {/* Barra de búsqueda en la parte superior  agregar una escroll */}
      <View style={styles.header}>
        <SearchBar />
      </View>

      {/* Categorías de comida en la parte inferior */}
      <View style={styles.content}>
        <FoodCategories />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0ED',
  },
  header: {
    padding: 10, // Espaciado interno
    backgroundColor: '#FFF0ED', // Fondo para destacar el área del header
    marginTop: StatusBar.currentHeight
  },
  content: {
    flex: 1, // Ocupa todo el espacio restante
    paddingHorizontal: 10, // Espaciado lateral
    paddingVertical: 20, // Espaciado vertical
  },
});

export default App;