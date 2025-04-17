import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router"; // Importa el hook de enrutamiento

export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberUser, setRememberUser] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Error states
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateName = (text: string) => {
    setName(text);
    if (text.trim().length < 3) {
      setNameError('El nombre debe tener al menos 3 caracteres');
    } else if (!/^[a-zA-Z\s]+$/.test(text)) {
      setNameError('El nombre solo puede contener letras y espacios');
    } else {
      setNameError('');
    }
  };

  const validateEmail = (text: string) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setEmailError('Ingrese un correo electrónico válido');
    } else {
      setEmailError('');
    }
  };

  const validateUsername = (text: string) => {
    setUsername(text);
    if (text.trim().length < 4) {
      setUsernameError('El nombre de usuario debe tener al menos 4 caracteres');
    } else if (!/^[a-zA-Z0-9]+$/.test(text)) {
      setUsernameError('El nombre de usuario solo puede contener letras y números');
    } else {
      setUsernameError('');
    }
  };

  const validatePassword = (text: string) => {
    setPassword(text);
    if (text.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
    } else if (!/(?=.*[A-Z])/.test(text)) {
      setPasswordError('La contraseña debe incluir al menos una letra mayúscula');
    } else if (!/(?=.*[0-9])/.test(text)) {
      setPasswordError('La contraseña debe incluir al menos un número');
    } else {
      setPasswordError('');
    }
    
    // Update confirm password validation when password changes
    if (confirmPassword && text !== confirmPassword) {
      setConfirmPasswordError('Las contraseñas no coinciden');
    } else {
      setConfirmPasswordError('');
    }
  };

  const validateConfirmPassword = (text: string) => {
    setConfirmPassword(text);
    if (text !== password) {
      setConfirmPasswordError('Las contraseñas no coinciden');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = () => {
    // Re-validate all fields
    validateName(name);
    validateEmail(email);
    validateUsername(username);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);
    
    // Check if there are any validation errors
    if (!name || !email || !username || !password || !confirmPassword ||
        nameError || emailError || usernameError || passwordError || confirmPasswordError) {
      Alert.alert('Error', 'Por favor, complete todos los campos correctamente');
    } else {
      // Navigate to next screen or perform registration action
      Alert.alert('Éxito', 'Registro completado con éxito');
      // Here you would typically navigate to the next screen or login
      // navigation.navigate('Home');
    }
  };
  const router = useRouter(); // Inicializa el router
  
    const handleNavigateloguin = () => {
      router.push("/(login_reguistro)"); // Redirige a (login)
    };
    const handleNavigaterecord = () => {
      router.push("/recover"); // Redirige a (login)
    };

  const toggleRememberUser = () => {
    setRememberUser(!rememberUser);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Registrate aquí</Text>
          
          {/* Name Field */}
          <Text style={styles.label}>Nombre</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#FF4081" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Nombre completo"
              value={name}
              onChangeText={validateName}
            />
          </View>
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
          
          {/* Email Field */}
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#FF4081" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={validateEmail}
            />
          </View>
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
          
          {/* Username Field */}
          <Text style={styles.label}>Usuario</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#FF4081" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Nombre de usuario"
              autoCapitalize="none"
              value={username}
              onChangeText={validateUsername}
            />
          </View>
          {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
          
          {/* Password Field */}
          <Text style={styles.label}>Contraseña</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#FF4081" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={validatePassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#888" />
            </TouchableOpacity>
          </View>
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
          
          {/* Confirm Password Field */}
          <Text style={styles.label}>Confirma tu contraseña</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#FF4081" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirmar contraseña"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={validateConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
              <Ionicons name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#888" />
            </TouchableOpacity>
          </View>
          {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
          
          {/* Remember User Checkbox */}
          <View style={styles.checkboxContainer}>
            <TouchableOpacity 
              style={[styles.checkbox, rememberUser && styles.checkboxChecked]}
              onPress={toggleRememberUser}
            >
              {rememberUser && <Ionicons name="checkmark" size={16} color="white" />}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>Recordar usuario</Text>
            
            <TouchableOpacity style={styles.forgotPasswordLink} onPress={handleNavigaterecord} >
              <Text style={styles.forgotPasswordText}>Olvidé mi contraseña</Text>
            </TouchableOpacity>
          </View>
          
          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleNavigateloguin} >
            <Text style={styles.submitButtonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF7043',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  eyeIcon: {
    padding: 5,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 15,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: '#FF4081',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#FF4081',
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  forgotPasswordLink: {
    marginLeft: 'auto',
  },
  forgotPasswordText: {
    color: '#333',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  submitButton: {
    backgroundColor: '#FFCB05',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FF4081',
    fontSize: 18,
    fontWeight: '600',
  },
});