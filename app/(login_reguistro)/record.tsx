import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, useWindowDimensions, SafeAreaView } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

export const RegisterScreen = () => {
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={{ paddingTop: height * 0.20, alignItems: 'center' }}>
          <Text style={styles.header}>Crear cuenta</Text>
          <Text style={styles.subText}>Por favor, crea una cuenta para continuar</Text>
        </View>

        {/* Inputs */}
        <View style={{ marginTop: 20 }}>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={24} color="#FF7043" />
            <TextInput placeholder="Nombre completo" style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={24} color="#34C759" />
            <TextInput placeholder="Correo electrónico" keyboardType="email-address" autoCapitalize="none" style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome name="lock" size={24} color="#FF4081" />
            <TextInput placeholder="Contraseña" secureTextEntry autoCapitalize="none" style={styles.input} />
          </View>
        </View>

        {/* Space */}
        <View style={{ height: 10 }} />

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Ionicons name="arrow-forward" size={24} color="white" />
          <Text style={styles.buttonText}>Crear</Text>
        </TouchableOpacity>

        {/* Información para crear cuenta */}
        <View style={{ height: 30 }} />

        <View style={styles.row}>
          <Text style={styles.label}>¿Ya tienes cuenta?</Text>
          <Text style={styles.link} onPress={() => {}}>Ingresar</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  scroll: {
    width: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF7043',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 15,
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#FFCB05',
    padding: 12,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FF4081',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  link: {
    fontSize: 16,
    color: '#FF4081',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RegisterScreen;