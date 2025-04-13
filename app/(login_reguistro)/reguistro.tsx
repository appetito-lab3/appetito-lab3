import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
 
} from 'react-native';
import  { Link } from "expo-router";


export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberUser, setRememberUser] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Regístrate aquí</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirma tu contraseña"
        placeholderTextColor="#888"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={styles.checkboxContainer}>
        
        <Text style={styles.label}>Recordar usuario</Text>
        <TouchableOpacity>
          <Link href={"/recuperar"} style={styles.link}>Olvidé mi contraseña</Link>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Link href={"/Loguin"} style={styles.buttonText}>Ingresar</Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF4500',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  label: {
    marginRight: 20,
  },
  link: {
    color: '#FF4500',
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
    backgroundColor: '#FF4500',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});