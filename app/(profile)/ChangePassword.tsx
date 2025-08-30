import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ChangePasswordScreen() {
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Cambia tu Contraseña</Text>

      {/* Campo de Contraseña Actual */}
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="#FFB2D1" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Escribe tu contraseña actual"
          placeholderTextColor="#FF4500"
        />
      </View>
      <View style={styles.line}></View>

      {/* Campo de Nueva Contraseña */}
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="#FFB2D1" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Escribe tu nueva contraseña"
          placeholderTextColor="#FF4500"
        />
      </View>
      <View style={styles.line}></View>

      {/* Campo de Confirmación de Contraseña */}
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="#FFB2D1" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Escribe nuevamente tu contraseña"
          placeholderTextColor="#FF4500"
        />
      </View>
      <View style={styles.line}></View>

      {/* Botón */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cambiar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4e1',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4500', // Color naranja del título
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  line: {
    height: 2,
    backgroundColor: '#FF4500', // Línea roja debajo del campo
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFD700', // Botón amarillo
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFB2D1', // Texto rosa
  },
});