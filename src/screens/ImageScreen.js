import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
	return (
		<View>
			<ImageDetail
				title="Forest"
				imgPath={require('../../assets/forest.jpg')}
				score="7"
			/>
			<ImageDetail
				title="Beach"
				imgPath={require('../../assets/beach.jpg')}
				score="6"
			/>
			<ImageDetail
				title="Mountain"
				imgPath={require('../../assets/mountain.jpg')}
				score="9"
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageScreen;
