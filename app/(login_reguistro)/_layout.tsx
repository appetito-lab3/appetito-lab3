import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function LoginRouter () {
    const colorScheme = useColorScheme();
    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="index"  />
                <Stack.Screen name="recuperar" />
                <Stack.Screen name="reguistro" />
            </Stack>
        </ThemeProvider>
    );
}

