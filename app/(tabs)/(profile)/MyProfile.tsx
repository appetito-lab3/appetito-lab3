import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';

import PubliImagen from '../../../components/PubliImagen'; // Componente de publicaciones
import UserProfile from '../../../components/UserProfile';

const App = () => {
  // Estado para controlar las publicaciones
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Jose Asuaje",
      timeAgo: "2h",
      postContent: "Durante user research, the main problem of that user group should be found out.",
      initialLikesCount: 14,
      commentsCount: 4,
    },
    {
      id: 2,
      username: "Maria Gonzalez",
      timeAgo: "4h",
      postContent: "Explorando nuevas técnicas de diseño para mejorar la experiencia del usuario.",
      initialLikesCount: 21,
      commentsCount: 6,
    },
    {
      id: 3,
      username: "Carlos Pérez",
      timeAgo: "8h",
      postContent: "Compartiendo mi última receta favorita para el éxito profesional.",
      initialLikesCount: 32,
      commentsCount: 12,
    },
  ]);

  // Función para eliminar una publicación por su id (corrección: tipo explícito para `postId`)
  const handleDeletePost = (postId: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
      {/* Perfil del usuario */}
      <UserProfile />

      {/* Contenedor de publicaciones */}
      <View style={styles.publiImagenContainer}>
        {posts.map((post) => (
          <View key={post.id}>
            <PubliImagen
              username={post.username}
              timeAgo={post.timeAgo}
              postContent={post.postContent}
              initialLikesCount={post.initialLikesCount}
              commentsCount={post.commentsCount}
              onProfilePress={() => console.log(`Navegar al perfil de ${post.username}`)}
            />

            {/* Botón para eliminar publicación */}
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeletePost(post.id)} // Acción de eliminación con el id de la publicación
            >
              <Text style={styles.deleteButtonText}>Eliminar Publicación</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFE4E1', // Fondo claro general
  },
  contentContainer: {
    padding: 10, // Asegura un margen interno para el contenido
  },
  publiImagenContainer: {
    marginTop: 10, // Separación desde el encabezado
    backgroundColor: '#FFE4E1', // Fondo blanco para publicaciones
    borderRadius: 8, // Bordes suaves
    padding: 10, // Margen interno para publicaciones
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#e74c3c', // Color rojo para indicar acción destructiva
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;