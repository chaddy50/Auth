import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, buttonText }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{buttonText}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007AFF',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},

	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#FFF',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007AFF',
		marginLeft: 5,
		marginRight: 5
	}
};

export { Button };
