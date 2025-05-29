import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { MyIcon } from '../ui/MyIcon';

interface Props {
  title: string;
  subTitle?: string;

  rightAction?: () => void;
  rightActionIcon?: string;

  children?: React.ReactNode;
}

export const MainLayout = ({
  title,
  subTitle,
  rightAction,
  rightActionIcon,
  children,
}: Props) => {
  const { top } = useSafeAreaInsets();
  const { canGoBack, goBack } = useNavigation();

  const renderBackAction = () =>
    canGoBack() ? (
      <TouchableOpacity onPress={goBack} style={styles.actionButton}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
    ) : null;

  const RenderRightAction = () => {
    if (!rightAction || !rightActionIcon) return null;

    return (
      <TouchableOpacity onPress={rightAction} style={styles.actionButton}>
        <Ionicons menu={rightActionIcon} size={24} color="black" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.topNavigation}>
        {renderBackAction()}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {subTitle && <Text style={styles.subtitle}>{subTitle}</Text>}
        </View>
        <RenderRightAction />
      </View>
      <View style={styles.divider} />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 56,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  actionButton: {
    padding: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
  },
  content: {
    flex: 1,
  },
});