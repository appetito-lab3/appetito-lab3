import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';

interface MediaItem {
  id: string;
  uri: string;
  duration?: string;
}

const PostScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Post' | 'Carousel' | 'Imagenes'>('Post');
  const [caption, setCaption] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [uploading, setUploading] = useState(false);

  // Media items de ejemplo
  const recentMedia: MediaItem[] = [
    { id: '1', uri: 'https://picsum.photos/id/10/200/300', duration: '1:18' },
    { id: '2', uri: 'https://picsum.photos/id/11/200/300', duration: '0:09' },
    { id: '3', uri: 'https://picsum.photos/id/12/200/300' },
    { id: '4', uri: 'https://picsum.photos/id/13/200/300', duration: '2:07' },
    { id: '5', uri: 'https://picsum.photos/id/14/200/300', duration: '1:33' },
    { id: '6', uri: 'https://picsum.photos/id/15/200/300', duration: '1:24' },
  ];

  const selectMediaItem = (item: MediaItem) => {
    setSelectedMedia(item);
  };

  // Simular envío de publicación
  const handlePost = async () => {
    if (!selectedMedia) {
      alert('Por favor selecciona una imagen.');
      return;
    }

    setUploading(true);
    try {
      // Simular carga
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      alert('¡Publicación realizada con éxito!');
      // Limpiar el estado
      setSelectedMedia(null);
      setCaption('');
    } catch (error) {
      console.error('Error al publicar:', error);
      alert('Hubo un problema al realizar la publicación. Intenta de nuevo.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Publicación</Text>
        <TouchableOpacity style={styles.closeButton}>
          <Ionicons name="close" size={24} color="#ff6666" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'Post' && styles.activeTab]} 
          onPress={() => setActiveTab('Post')}
        >
          <Text style={styles.tabText}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'Carousel' && styles.activeTab]} 
          onPress={() => setActiveTab('Carousel')}
        >
          <Text style={styles.tabText}>Carousel</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'Imagenes' && styles.activeTab]} 
          onPress={() => setActiveTab('Imagenes')}
        >
          <Text style={styles.tabText}>Imágenes</Text>
        </TouchableOpacity>
      </View>

      {/* Área de vista previa de imagen */}
      <View style={styles.previewContainer}>
        {selectedMedia ? (
          <Image source={{ uri: selectedMedia.uri }} style={styles.previewImage} />
        ) : (
          <View style={styles.placeholderContainer}>
            <FontAwesome5 name="images" size={60} color="#aaa" />
            <Text style={styles.placeholderText}>Selecciona una imagen de la galería</Text>
          </View>
        )}
      </View>

      {/* Campo de entrada para el comentario */}
      <TextInput
        style={styles.captionInput}
        placeholder="Escribe un comentario..."
        multiline
        value={caption}
        onChangeText={setCaption}
      />

      {/* Sección de selección de medios recientes */}
      <View style={styles.recentSection}>
        <View style={styles.recentHeader}>
          <Text style={styles.recentTitle}>Videos</Text>
          <TouchableOpacity>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#ff6666" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.recentGrid}>
            {recentMedia.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.mediaItem}
                onPress={() => selectMediaItem(item)}
              >
                <Image source={{ uri: item.uri }} style={styles.mediaItemImage} />
                {item.duration && (
                  <View style={styles.durationBadge}>
                    <Text style={styles.durationText}>{item.duration}</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Botón de acción */}
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={styles.postButton}
          onPress={handlePost}
          disabled={uploading || !selectedMedia}
        >
          {uploading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <>
              <Text style={styles.postButtonText}>Siguiente</Text>
              <MaterialIcons name="arrow-forward" size={20} color="#fff" />
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const mediaItemWidth = (width - 40) / 3; // 3 items per row with margins

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebeb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6666',
  },
  closeButton: {
    padding: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  tabButton: {
    flex: 1,
    backgroundColor: '#ffdd57',
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#ffcc00',
  },
  tabText: {
    fontWeight: 'bold',
  },
  previewContainer: {
    height: 300,
    margin: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  placeholderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    marginTop: 10,
    color: '#999',
    textAlign: 'center',
  },
  captionInput: {
    margin: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 80,
    textAlignVertical: 'top',
  },
  recentSection: {
    margin: 15,
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  recentTitle: {
    color: '#ff6666',
    fontWeight: 'bold',
  },
  recentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mediaItem: {
    width: mediaItemWidth,
    height: mediaItemWidth,
    margin: 2,
    position: 'relative',
  },
  mediaItemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  durationBadge: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  durationText: {
    color: '#fff',
    fontSize: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    marginTop: 'auto',
  },
  postButton: {
    flexDirection: 'row',
    backgroundColor: '#ffcc00',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default PostScreen;