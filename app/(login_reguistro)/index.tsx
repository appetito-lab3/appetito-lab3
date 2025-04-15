import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CheckBox from 'expo-checkbox'; // Importando la librería
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from "expo-router"; // Importa el hook de enrutamiento

export default function App() {
  const [isSelected, setSelection] = useState<boolean>(false);
  const router = useRouter(); // Inicializa el router

  const handleNavigateToTabs = () => {
    router.push("/(tabs)"); // Redirige a (tabs)
  };

  const handleNavigateToRegister = () => {
    router.push("/record"); // Redirige a reguistro
  };

  const handleNavigateToRecover = () => {
    router.push("/recover"); // Redirige a recuperar
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>¡Conecta con Foodies como tú!</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="#FF4500" />
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="#FF4500" />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#888"
          secureTextEntry
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          color={isSelected ? '#FF4500' : undefined}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Recordar Usuario</Text>
        <TouchableOpacity onPress={handleNavigateToRecover}>
          <Text style={styles.link}>Olvidé mi contraseña</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNavigateToTabs}>
        <Text style={styles.buttonText}>entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNavigateToRegister}>
        <Text style={styles.createAccountText}>crear cuenta</Text>
      </TouchableOpacity>

      <Text style={styles.or}>o</Text>

      <View style={styles.socialLoginContainer}>
        <FontAwesome name="google" size={32} color="#4285F4" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4500',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FF4500',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    color: '#000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  checkbox: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    marginRight: 20,
  },
  link: {
    color: '#FF4500',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountText: { // Estilo para el texto de "crear cuenta"
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  or: {
    color: '#888',
    marginBottom: 20,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%',
  },
});