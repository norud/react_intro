import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
	return (
		<View>
			<Text>{color}</Text>
			<Button onPress={() => onIncrease()} title={`Increase ${color}`} />
			<Button onPress={() => onDecrease()} title={`Decrease Red ${color}`} />
		</View>
	);
};

export default ColorCounter;

const styles = StyleSheet.create({});
