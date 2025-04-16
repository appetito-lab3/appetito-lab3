import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent'; // Importar el componente HeaderComponent
import SwipeProfiles from '../../components/SwipeProfiles'; // Importar el componente SwipeProfiles

const App = () => {
  return (
    <View style={styles.container}>
      {/* Llamar el componente HeaderComponent */}
      <HeaderComponent />

      {/* Componente SwipeProfiles debajo del HeaderComponent */}
      <View style={styles.swipeProfilesContainer}>
        <SwipeProfiles />
      </View>

      {/* Ejemplo de contenido adicional */}
      <View style={styles.content}>
        <Text style={styles.text}>Bienvenido a la app!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0ED',
  },
  swipeProfilesContainer: {
    flex: 1, // Ocupa espacio proporcional
    backgroundColor: '#FFF', // Color de fondo claro para SwipeProfiles
    marginVertical: 10, // Espaciado para separar del HeaderComponent
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default App;