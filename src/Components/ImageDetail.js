import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
	return (
		<View>
			<Image source={props.imgPath} />
			<Text style={styles.titleText}> {props.title} </Text>
			<Text>Img Score {props.score} </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	titleText: {
		fontSize: 25,
		alignItems: 'center',
	},
});

export default ImageDetail;
