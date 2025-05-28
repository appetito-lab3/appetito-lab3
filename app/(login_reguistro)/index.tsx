import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,Alert
} from 'react-native';
import CheckBox from 'expo-checkbox'; // Importando la librería
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router"; // Importa el hook de enrutamiento
import { envs } from '../../core/constants/envs';
import { useAuthStore } from '@/auth/useAuthStore';


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
//console.log(`API URL Android: ${envs.EXPO_PUBLIC_API_URL_ANDROID}`);
const { login } =useAuthStore();
const [form, setForm] = useState({
  email: '',
  password: '',
})

const onLogin = async() => {
    if (form.email.length === 0 || form.password.length === 0) {
      return;
    }
    
    try {
      // Ahora podemos pasar apiUrl como tercer parámetro
      const wasSuccessful = await login(form.email, form.password);
      
      if (wasSuccessful) {
        // Navegar a tabs si el login fue exitoso
        router.push("/(tabs)");
        return;
      }
      
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'No se pudo conectar al servidor');
    }
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>¡Conecta con Foodies como tú!</Text>
     
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#FF4081" />
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          keyboardType='email-address'
          autoCapitalize='none'
          value={form.email}
          onChangeText={(email) => setForm({ ...form, email })}
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#FF4081" />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          autoCapitalize='none'
          value={form.password}
          onChangeText={(password) => setForm({ ...form, password })}
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

        <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNavigateToRegister}>
        <Text style={styles.createAccountText}>Crear cuenta</Text>
      </TouchableOpacity>

      

      <View style={styles.socialLoginContainer}>
        
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
    color: '#FF7043',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
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
    color: '#333',
    textDecorationLine: 'underline',
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
    color: '#FF4081',
    fontSize: 18,
    fontWeight: '500',
  },
  createAccountText: { // Estilo para el texto de "crear cuenta"
    color: '#FF4081',
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