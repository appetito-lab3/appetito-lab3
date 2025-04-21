import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Edip from '../../components/Edip'; // Ajusta la ruta según la ubicación del archivo

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Renderizar el componente EditProfileForm */}
      <Edip />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // Fondo de la aplicación
  },
});