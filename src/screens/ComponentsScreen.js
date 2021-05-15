import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const cool = <Text>Cool default</Text>;
	const name = 'Native tuto';
	return (
		<View>
			<Text style={styles.textStyle}>Getting start</Text>
			<Text style={styles.textSmall}>Small {name}</Text>
			{cool}
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 40,
	},
	textSmall: {
		fontSize: 30,
	},
});

export default ComponentsScreen;
