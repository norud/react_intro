import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_ICREMENT = 50;
/**
 * we cn use reducer or convetional programing
 * we using convetions
 * @param {red: 0, green: 0, blue: 0} state
 * @param {type: 'change_red' || 'change_green' 'change_blue', 'payload': 15 || -15} action
 * @returns
 */
const reducer = (state, action) => {
	// state === obeject -> {red: number, green: number, blue: number}
	//action === object {type: 'change_red' || 'change_green' 'change_blue', 'payload': 15 || -15}
	switch (action.type) {
		case 'change_red':
			//never make chanhe on state directly state.red = state.red - 15
			return state.red + action.payload > 255 || state.red + action.payload < 0
				? state
				: { ...state, red: state.red + action.payload };
		case 'change_green':
			return state.red + action.payload > 255 || state.red + action.payload < 0
				? state
				: { ...state, green: state.green + action.payload };
		case 'change_blue':
			return state.red + action.payload > 255 || state.red + action.payload < 0
				? state
				: { ...state, blue: state.blue + action.payload };

		default:
			return state;
	}
};

const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

	//destructuring
	const { red, green, blue } = state;
	return (
		<View>
			<ColorCounter
				onIncrease={() =>
					dispatch({ type: 'change_red', payload: COLOR_ICREMENT })
				}
				onDecrease={() =>
					dispatch({ type: 'change_red', payload: -1 * COLOR_ICREMENT })
				}
				color="Red"
			/>
			<ColorCounter
				onIncrease={() =>
					dispatch({ type: 'change_blue', payload: COLOR_ICREMENT })
				}
				onDecrease={() =>
					dispatch({ type: 'change_blue', payload: -1 * COLOR_ICREMENT })
				}
				color="Blue"
			/>
			<ColorCounter
				onIncrease={() =>
					dispatch({ type: 'change_green', payload: COLOR_ICREMENT })
				}
				onDecrease={() =>
					dispatch({ type: 'change_green', payload: -1 * COLOR_ICREMENT })
				}
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
