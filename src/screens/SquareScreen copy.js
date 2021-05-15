import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_ICREMENT = 50;

const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	const setColor = (color, change) => {
		//color === 'red', 'green', 'blue'
		//change === +15 or -15
		switch (color) {
			case 'red':
				red + change > 255 || red + change < 0 ? null : setRed(red + change);
				return;
			case 'green':
				green + change > 255 || green + change < 0
					? null
					: setGreen(green + change);
				return;
			case 'blue':
				blue + change > 255 || blue + change < 0
					? null
					: setBlue(blue + change);
				return;
			default:
				return;
		}
	};
	return (
		<View>
			<ColorCounter
				onIncrease={() => setColor('red', COLOR_ICREMENT)}
				onDecrease={() => setColor('red', -1 * COLOR_ICREMENT)}
				color="Red"
			/>
			<ColorCounter
				onIncrease={() => setColor('blue', COLOR_ICREMENT)}
				onDecrease={() => setColor('blue', -1 * COLOR_ICREMENT)}
				color="Blue"
			/>
			<ColorCounter
				onIncrease={() => setColor('green', COLOR_ICREMENT)}
				onDecrease={() => setColor('green', -1 * COLOR_ICREMENT)}
				color="Green"
			/>
			<View
				style={{
					height: 150,
					width: 150,
					backgroundColor: `rgb(${red}, ${green}, ${blue})`,
				}}
			/>
		</View>
	);
};

export default SquareScreen;

const styles = StyleSheet.create({});
