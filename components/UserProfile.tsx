import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router"; // Importa el hook de enrutamiento

/**
 * User Profile Component
 * Displays a profile page matching the provided design with:
 * - Circular profile image from the imagenes folder
 * - User name, pronouns, and followers count
 * - Edit and more options buttons
 * - Bio information
 * - Location with icon
 * - Work information
 * - About section
 */
export default function UserProfile() {
  // This data would typically come from an API or state
  const profileData = {
    name: "Jose Asuaje",
    pronouns: "She / Her",
    followers: 500,
    bio: "UX Designer | Crafting Intuitive Experiences for Seamless User Journeys | Bridging Design and Functionality for Digital Excellence 💻🎨",
    location: "Mumbai, India",
    jobTitle: "Product Designer",
    company: "Apple",
    about: "Passionate and results-driven Strategic Marketing Professional with a keen eye for brand development and a penchant for blending creativity with data-driven strategies."
  };

  const handleProfileImagePress = () => {
    console.log("Profile image clicked");
    // Aquí puedes agregar lógica adicional, como abrir un modal o redirigir a otra pantalla
  };

  const handleEditPress = () => {
    console.log("Edit profile pressed");
    // Add your edit profile logic here
  };

  const handleMoreOptions = () => {
    console.log("More options pressed");
    // Add your more options menu logic here
  };
// Inicializa el router
  const router = useRouter();

  // Función para manejar la navegación al perfil
  const handleNavigateRrofile = () => {
    router.push("/(profile)"); // Redirige a la ruta del perfil
  };
  const handleNavigateEditar= () => {
    router.push("/EdiProfile"); // Redirige a la ruta del perfil
  };
 
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Profile Header with Image, Name, and Action Buttons */}
        <View style={styles.headerContainer}>
          <View style={styles.profileInfoContainer}>
            {/* Profile Image (Clickable) */}
            <TouchableOpacity onPress={handleNavigateRrofile}  style={styles.imageContainer}>
              <Image 
                source={require('../assets/images/perfil.png')}
                style={styles.profileImage}
                resizeMode="cover"
              />
            </TouchableOpacity>
            
            {/* Name Section */}
            <View style={styles.nameSection}>
              <Text style={styles.nameText}>{profileData.name}</Text>
              <Text style={styles.pronounsText}>{profileData.pronouns}</Text>
              <Text style={styles.followersText}>{profileData.followers} Seguidores</Text>
            </View>
          </View>
          
          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={handleNavigateEditar} style={styles.iconButton}>
              <Feather name="edit-2" size={20} color="#E74C3C" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleMoreOptions} style={styles.iconButton}>
              <Feather name="more-vertical" size={20} color="#333333" />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Bio Section */}
        <View style={styles.bioSection}>
          <Text style={styles.bioText}>{profileData.bio}</Text>
        </View>
        
        {/* Location Section */}
        <View style={styles.locationContainer}>
          <MaterialIcons name="location-on" size={16} color="#E74C3C" />
          <Text style={styles.locationText}>{profileData.location}</Text>
        </View>
        
        {/* Work Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Trabajo</Text>
          <Text style={styles.sectionContent}>{profileData.jobTitle} @ {profileData.company}</Text>
        </View>
        
        {/* About Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Acerca de</Text>
          <Text style={styles.sectionContent}>{profileData.about}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFE4E1',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  profileInfoContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  imageContainer: {
    marginRight: 12,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  nameSection: {
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 2,
  },
  pronounsText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 2,
  },
  followersText: {
    fontSize: 14,
    color: '#666666',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconButton: {
    padding: 4,
    marginLeft: 8,
  },
  bioSection: {
    marginBottom: 12,
  },
  bioText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666666',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E74C3C',
    marginBottom: 6,
  },
  sectionContent: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333333',
  },
});