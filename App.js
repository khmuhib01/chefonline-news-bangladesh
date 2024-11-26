import React, {useState, useEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from hiding automatically

export default function App() {
	const [loaded, setLoaded] = useState(false); // State to track loading
	const [error, setError] = useState(null); // State to track errors (if needed)

	useEffect(() => {
		// Simulate resource loading or initialization
		async function prepareApp() {
			try {
				// Simulate some async task (e.g., loading assets or data)
				await new Promise((resolve) => setTimeout(resolve, 2000));
				setLoaded(true); // Set loaded to true when ready
			} catch (e) {
				setError(e); // Handle errors
			} finally {
				SplashScreen.hideAsync(); // Hide the splash screen
			}
		}

		prepareApp();
	}, []);

	if (!loaded && !error) {
		// Return null while the app is loading
		return null;
	}

	return (
		<SafeAreaView style={styles.container}>
			{/* Set Status Bar Colour */}
			{/* <StatusBar backgroundColor="#ff0000" barStyle="light-content" /> */}

			{/* App Bar */}
			<View style={styles.appBar} />

			{/* WebView */}
			<WebView style={styles.webView} source={{uri: 'https://newsbangladesh.com/'}} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	appBar: {
		backgroundColor: '#ff0000', // App bar background colour
	},
	webView: {
		flex: 1,
	},
});
