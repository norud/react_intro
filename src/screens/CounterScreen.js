import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
/**
 *
 * @param { counter: 0 } state
 * @param {type: 'change_increase' || 'change_decrease', payload: 1} action
 * @returns
 */
const reducer = (state, action) => {
	switch (action.type) {
		case 'change_increment':
			return { ...state, counter: state.counter + action.payload };
		case 'change_decrement':
			return { ...state, counter: state.counter - action.payload };
		default:
			return state;
	}
};

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, { counter: 0 });
	//destructuring
	const { counter } = state;
	return (
		<View>
			<Button
				title="Increase"
				onPress={() => {
					//Don't do this
					//counter++;
					dispatch({ type: 'change_increment', payload: 1 });
					//setCounter(counter + 1);
				}}
			/>
			<Button
				title="Decrease"
				onPress={() => {
					dispatch({ type: 'change_decrement', payload: 1 });
					//setCounter(counter - 1);
				}}
			/>
			<Text> Counter Screen {counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;
