import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  ViewToken,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

// Get screen dimensions
const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;
const ITEM_SPACING = width * 0.1;

// Define profile data structure
interface Profile {
  id: string;
  name: string;
  verified: boolean;
  rating: number;
  ingredients?: string;
  date: string;
  description: string;
  imagePath: any; // Changed type to `any` for `require()` compatibility
}

// Sample data
const profilesData: Profile[] = [
  {
    id: '1',
    name: 'Cult.fit',
    verified: true,
    rating: 4.5,
    ingredients: '8 ingredientes',
    date: 'Nueva',
    description: 'Elevate Your Fitness Goal with Cult.fit.',
    imagePath: require('../assets/images/china.jpg'),
  },
  {
    id: '2',
    name: 'Galletas Sin grasa',
    verified: true,
    rating: 4.8,
    date: 'Nueva',
    description: 'Empowering Financial Futures.',
    imagePath: require('../assets/images/china.jpg'),
  },
  {
    id: '3',
    name: 'Ensalada Verde',
    verified: true,
    rating: 4.7,
    ingredients: '5 ingredientes',
    date: 'Nueva',
    description: 'Fresh green salads.',
    imagePath: require('../assets/images/china.jpg'),
  },
  {
    id: '4',
    name: 'Pizza Casera',
    verified: true,
    rating: 4.9,
    ingredients: '7 ingredientes',
    date: 'Popular',
    description: 'Homemade pizza.',
    imagePath: require('../assets/images/china.jpg'),
  },
  {
    id: '5',
    name: 'Smoothie Bowl',
    verified: true,
    rating: 4.6,
    ingredients: '4 ingredientes',
    date: 'Tendencia',
    description: 'Nutrient-rich smoothie bowls.',
    imagePath: require('../assets/images/china.jpg'),
  },
];

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <View style={styles.ratingContainer}>
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Ionicons key={i} name="star" size={14} color="#FF9500" />;
        } else if (i === fullStars && hasHalfStar) {
          return <Ionicons key={i} name="star-half" size={14} color="#FF9500" />;
        } else {
          return <Ionicons key={i} name="star-outline" size={14} color="#FF9500" />;
        }
      })}
      <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
    </View>
  );
};

interface ProfileCardProps {
  profile: Profile;
  index: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, index }) => {
  return (
    <View
      style={[
        styles.cardContainer,
        { marginLeft: index === 0 ? ITEM_SPACING / 2 : 0 },
      ]}
    >
      <View style={styles.cardHeader}>
        <Image source={profile.imagePath} style={styles.cardImage} />
      </View>

      <View style={styles.cardContent}>
        <View style={styles.cardTitleRow}>
          <Text style={styles.profileName}>{profile.name}</Text>
          {profile.verified && (
            <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
          )}
        </View>

        <RatingStars rating={profile.rating} />

        <View style={styles.infoRow}>
          {profile.ingredients && <Text style={styles.infoText}>{profile.ingredients}</Text>}
          <Text style={[styles.infoText, styles.dateText]}>{profile.date}</Text>
        </View>

        <Text style={styles.description} numberOfLines={3}>
          {profile.description}
        </Text>
      </View>
    </View>
  );
};

export default function FoodProfileCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    }
  ).current;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <FlatList
        ref={flatListRef}
        data={profilesData}
        renderItem={({ item, index }) => (
          <ProfileCard profile={item} index={index} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + 10}
        decelerationRate="fast"
        contentContainerStyle={styles.carouselContent}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      <View style={styles.paginationContainer}>
        {profilesData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              currentIndex === index ? styles.paginationDotActive : {},
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCDC7',
    paddingVertical: 20,
  },
  carouselContent: {
    paddingRight: ITEM_SPACING / 2,
  },
  cardContainer: {
    width: ITEM_WIDTH,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: { // Corrección: Añadido `cardHeader` a los estilos
    position: 'relative',
    width: '100%',
    height: 150, // Ajusta el alto según necesites
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 12,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4,
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
  },
  dateText: {
    color: '#E47575',
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    color: '#333',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#E47575',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});