import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LookFor = () => {
  const [query, setQuery] = useState<string>(''); // Estado para manejar el texto ingresado

  const handleSearch = (text: string) => {
    setQuery(text); // Actualiza el estado con el texto ingresado
    console.log(`Buscando: ${text}`); // Puedes reemplazar esto con tu lógica de búsqueda
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="#FF6F61" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Buscar"
        placeholderTextColor="#FF6F61"
        value={query}
        onChangeText={handleSearch} // Maneja cambios en el texto
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // Fondo de color durazno
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 3, // Sombra sutil
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginVertical: 10, // Separación vertical
  },
  icon: {
    marginRight: 10, // Espaciado entre el icono y el campo de texto
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333', // Texto principal en gris oscuro
    paddingVertical: 5,
  },
});

export default LookFor;