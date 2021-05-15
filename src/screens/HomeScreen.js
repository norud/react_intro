import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
//props.navigation('Components')
const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Home From New tuto</Text>
			<Button
				onPress={() => {
					navigation.navigate('Components');
				}}
				title="Component Demo"
			/>
			<Button
				onPress={() => {
					navigation.navigate('ListScreen');
				}}
				title="Go List"
			/>
			<Button
				onPress={() => {
					navigation.navigate('ImageScreen');
				}}
				title="IMG Screen"
			/>
			<Button
				onPress={() => {
					navigation.navigate('CounterScreen');
				}}
				title="Counter  Screen"
			/>
			<Button
				onPress={() => {
					navigation.navigate('ColorScreen');
				}}
				title="Go to color"
			/>
			<Button
				onPress={() => {
					navigation.navigate('SquareScreen');
				}}
				title="Go to Square Demo"
			/>
			<Button
				onPress={() => {
					navigation.navigate('TextScreen');
				}}
				title="Go to text Demo"
			/>
			<Button
				onPress={() => {
					navigation.navigate('BoxScreen');
				}}
				title="Go to Box Demo"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
