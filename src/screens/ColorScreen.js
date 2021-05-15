import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';

const ColorScreen = () => {
	const [colors, setColors] = useState([]);

	return (
		<View>
			<Button
				title="Add a color"
				onPress={() => {
					setColors([...colors, randonRgb()]);
				}}
			/>
			<View
				style={{ height: 120, width: 120, backgroundColor: randonRgb() }}
			></View>
			<FlatList
				keyExtractor={(item) => item}
				data={colors}
				renderItem={({ item }) => {
					return (
						<View
							style={{ height: 120, width: 120, backgroundColor: item }}
						></View>
					);
				}}
			/>
		</View>
	);
};

const randonRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	return `rgb(${red}, ${green}, ${blue})`;
};
const styles = StyleSheet.create({});

export default ColorScreen;
