import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextScreen = () => {
	const [name, SetName] = useState('');
	return (
		<View>
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.textInputStyle}
				placeholder="enter a text"
				onChangeText={(text) => {
					SetName(text);
				}}
			/>
			{name.length < 5 ? (
				<Text>Input have to be greater than or iqueal 5</Text>
			) : (
				<Text>Imput value: {name}</Text>
			)}
		</View>
	);
};

export default TextScreen;

const styles = StyleSheet.create({
	textInputStyle: {
		fontSize: 20,
		margin: 15,
		borderColor: 'black',
		borderWidth: 1,
	},
});
