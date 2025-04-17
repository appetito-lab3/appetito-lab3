import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from "expo-router";

export default function PasswordRecovery() {
  const [emailOrUsername, setEmailOrUsername] = useState('');

  const handleRecover = () => {
    // Lógica para recuperación de contraseña
    console.log('Recuperar contraseña para:', emailOrUsername);
  };
  const router = useRouter(); // Inicializa el router
  
    const handleNavigateloguin = () => {
      router.push("/(login_reguistro)"); // Redirige a (tabs)
    };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <Text style={styles.header}>Recupera tu Contraseña</Text>

      {/* Campo de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Escribe tu usuario o correo electrónico"
        placeholderTextColor="#888"
        value={emailOrUsername}
        onChangeText={setEmailOrUsername}
      />

      {/* Botón de Recuperar */}
      <TouchableOpacity style={styles.button} onPress={handleNavigateloguin} >
        <Text  style={styles.buttonText} >Recuperar</Text>
      
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1', // Fondo similar al mostrado en la imagen
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF7043',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FF4500',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    marginBottom: 20,
    color: '#000',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FFCB05',
    padding: 12,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});