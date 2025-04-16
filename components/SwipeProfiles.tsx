import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const stories = [
  { id: '1', title: 'UX Rescues' },
  { id: '2', title: 'Eco-Warriors' },
  { id: '3', title: 'Wanderlust' },
  { id: '4', title: 'Film Buffs' },
  { id: '5', title: 'Fitness' },
];

export default function StorySlider() {
  return (
    <View style={styles.container}>
      {/* Deslizador de historias */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storiesScroll}
      >
        {stories.map((item) => (
          <View key={item.id} style={styles.storyContainer}>
            <Image
              source={require('../assets/images/perfil.png')} // Imagen de historia
              style={styles.storyCircle}
            />
            <Text style={styles.storyText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4e1',
    paddingVertical: 10,
  },
  storiesScroll: {
    paddingHorizontal: 10,
  },
  storyContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyCircle: {
    width: 60,
    height: 60,
    borderRadius: 30, // Hace la imagen circular
    backgroundColor: '#F0F0F0',
    marginBottom: 5,
  },
  storyText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});