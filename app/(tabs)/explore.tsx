import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

interface PostProps {
  username: string;
  timeAgo: string;
  postContent: string;
  initialLikesCount: number;
  commentsCount: number;
  onProfilePress: () => void;
}

const Post: React.FC<PostProps> = ({
  username,
  timeAgo,
  postContent,
  initialLikesCount,
  commentsCount,
  onProfilePress,
}) => {
  const [likesCount, setLikesCount] = useState(initialLikesCount);
  const [liked, setLiked] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleLikePress = () => {
    if (!liked) {
      setLikesCount(likesCount + 1);
      setLiked(true);
    } else {
      setLikesCount(likesCount - 1);
      setLiked(false);
    }
  };

  const handleCommentPress = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleSubmitComment = () => {
    // Aquí iría la lógica para enviar el comentario
    console.log('Comentario enviado:', commentText);
    setCommentText('');
    setShowCommentInput(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onProfilePress} style={styles.profileSection}>
          <Image
            source={require('../../assets/images/perfil.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity onPress={onProfilePress}>
            <Text style={styles.username}>Jose Asuaje</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.timeAgo}>Publicado hace {timeAgo}</Text>
      </View>

      <Text style={styles.postText}>{postContent}</Text>
      
      <Image 
        source={require('../../assets/images/arepas.png')} 
        style={styles.postImage}
        resizeMode="cover"
      />
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <FontAwesome name="thumbs-up" size={20} color="#666" />
          <Text style={styles.statText}>{likesCount} Me gusta</Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="chatbubble-outline" size={20} color="#666" />
          <Text style={styles.statText}>{commentsCount} Comentarios</Text>
        </View>
      </View>
      
      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={[styles.actionButton, liked && styles.actionButtonActive]} 
          onPress={handleLikePress}
        >
          <FontAwesome 
            name={liked ? "thumbs-up" : "thumbs-o-up"} 
            size={22} 
            color={liked ? "#1877f2" : "#666"} 
          />
          <Text style={[styles.actionText, liked && styles.actionTextActive]}>Me gusta</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleCommentPress}>
          <Ionicons name="chatbubble-outline" size={22} color="#666" />
          <Text style={styles.actionText}>Comentar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="heart" size={22} color="#666" />
          <Text style={styles.actionText}>Me encanta</Text>
        </TouchableOpacity>
      </View>
      
      {showCommentInput && (
        <View style={styles.commentInputContainer}>
          <Image
            source={require('../../assets/images/perfil.png')}
            style={styles.commentProfileImage}
          />
          <TextInput
            style={styles.commentInput}
            placeholder="Escribe un comentario..."
            value={commentText}
            onChangeText={setCommentText}
            multiline
          />
          <TouchableOpacity onPress={handleSubmitComment} style={styles.sendButton}>
            <Ionicons name="send" size={24} color="#1877f2" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  timeAgo: {
    fontSize: 12,
    color: '#666',
    alignSelf: 'flex-end',
  },
  postText: {
    marginVertical: 10,
    fontSize: 14,
    lineHeight: 20,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginVertical: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  actionButtonActive: {
    opacity: 1,
  },
  actionText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  actionTextActive: {
    color: '#1877f2',
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  commentProfileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: 8,
    padding: 4,
  },
});

export default Post;

// Para usar este componente:
// import Post from './components/Post';
// 
// <Post
//   username="Jose Asuaje"
//   timeAgo="2h"
//   postContent="Durante user research, the main problem of that user group should be found out. While..."
//   initialLikesCount={14}
//   commentsCount={4}
//   onProfilePress={() => navigation.navigate('Profile')}
// />