import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importamos Ionicons para el icono de "X"
import { useRouter } from "expo-router"; // Importa el hook de enrutamiento
export default function EditProfileForm() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [pronoun, setPronoun] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [profession, setProfession] = useState('');
  const [interests, setInterests] = useState('');
  const [location, setLocation] = useState('');
  const [aboutMe, setAboutMe] = useState(''); // Estado para el nuevo campo

  const handleEdit = () => {
    console.log('Edición guardada');
    // Lógica adicional para guardar los cambios
  };

  const handleClose = () => {
    console.log('Cerrar formulario');
    // Lógica adicional para cerrar el formulario
  };
// Inicializa el router
  const router = useRouter();

  // Función para manejar la navegación al perfil
  const handleNavigateCeraEditar = () => {
    router.push("/(profile)"); // Redirige a la ruta del perfil
  };
  
  

  return (
    <View style={styles.container}>
      {/* Icono de cerrar */}
      <TouchableOpacity style={styles.closeButton} onPress={handleNavigateCeraEditar}>
        <Ionicons name="close-circle" size={28} color="#E74C3C" />
      </TouchableOpacity>

      {/* Imagen de perfil */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/perfil.png')} // Asegúrate de que la imagen esté en la ruta correcta
          style={styles.profileImage}
        />
      </View>

      {/* Título del formulario */}
      <Text style={styles.title}>Editar Perfil</Text>

      {/* Campos de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Género"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="Pronombre"
        value={pronoun}
        onChangeText={setPronoun}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        value={birthDate}
        onChangeText={setBirthDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Profesión"
        value={profession}
        onChangeText={setProfession}
      />
      <TextInput
        style={styles.input}
        placeholder="Intereses"
        value={interests}
        onChangeText={setInterests}
      />
      <TextInput
        style={styles.input}
        placeholder="Ubicación"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.inputMultiline} // Campo estilo multilinea
        placeholder="Acerca de mí"
        value={aboutMe}
        onChangeText={setAboutMe}
        multiline
        numberOfLines={4}
      />

      {/* Botón de editar */}
      <TouchableOpacity style={styles.editButton} onPress={handleNavigateCeraEditar}>
        <Text style={styles.editButtonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1', // Fondo rosado claro
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20, // Ubicado en la esquina superior derecha
    zIndex: 1, // Asegura que el botón esté encima de otros elementos
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100, // Tamaño del círculo
    height: 100,
    borderRadius: 50, // Hace que la imagen sea redonda
    borderWidth: 2,
    borderColor: '#DDD',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  inputMultiline: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    textAlignVertical: 'top', // Alinea el texto en la parte superior
  },
  editButton: {
    backgroundColor: '#F7CA18', // Cambiado a color amarillo
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  editButtonText: {
    color: '#333', // Texto de color oscuro
    fontWeight: 'bold',
    fontSize: 16,
  },
});