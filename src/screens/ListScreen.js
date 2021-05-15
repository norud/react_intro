import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListScreen = () => {
	/**
	 * two different to get key
	 * 1=ad key string to our object
	 * 2=keyExtractor={(item, index) => index.toString()}, just to be unic
	 * keyExtractor={friend => friend.name}
	 */
	const friends = [
		{ name: 'friend 1', age: '25' },
		{ name: 'friend 2', age: '22' },
		{ name: 'friend 3', age: '20' },
		{ name: 'friend 4', age: '40' },
		{ name: 'friend 5', age: '36' },
		{ name: 'friend 6', age: '42' },
		{ name: 'friend 7', age: '23' },
		{ name: 'friend 8', age: '30' },
		{ name: 'friend 9', age: '27' },
	];
	return (
		<FlatList
			data={friends}
			keyExtractor={(friend) => friend.name}
			renderItem={({ item }) => {
				return (
					<Text style={styles.textStyle}>
						{item.name} - Age {item.age}
					</Text>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 10,
	},
});

export default ListScreen;
