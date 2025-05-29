import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View,Text } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent'; // Componente del encabezado
import SwipeProfiles from '../../components/SwipeProfiles'; // Componente tipo carrusel
//import PubliImagen from '../../components/PubliImagen'; // Componente de publicaciones
import { getProductsByPage } from '../../actions/auth/products/get-products-by-page';
import { useQuery } from '@tanstack/react-query';


const App = () => {
  
  const{ isLoading, data: products = []} =useQuery({
    queryKey: ['products','infinite' ],
    staleTime: 1000 * 60 * 60,              // 1 hora
    queryFn: () => getProductsByPage(0),
  });
  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado */}
      <HeaderComponent />

      {/* Carrusel con imágenes de perfiles */}
      <View style={styles.swipeProfilesContainer}>
        <SwipeProfiles />
      </View>

       {/* Contenedor de publicaciones */}
    
      
      <Text > { JSON.stringify( products, null, 2)} </Text>
    



    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1', // Fondo claro general
  },
  swipeProfilesContainer: {
    height: 120, // Altura fija para el carrusel
    backgroundColor: '#FFE4E1', // Fondo blanco para resaltar el carrusel
    marginTop: 10, // Separación del encabezado
    paddingHorizontal: 10, // Margen interno para contenido del carrusel
    justifyContent: 'center',
  },
  publiImagenContainer: {
    flex: 1, // Ocupa el espacio restante
    backgroundColor: '#FFE4E1', // Fondo blanco para publicaciones
    marginTop: 10, // Separación del carrusel
    padding: 10, // Margen interno para publicaciones
  },
});

export default App;