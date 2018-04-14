import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false };

	onButtonPress() {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFailure.bind(this));
			});
	}

	onLoginSuccess() {
		this.setState({ 
			loading: false,
			email: '',
			password: '',
			error: ''
		});
	}

	onLoginFailure() {
		this.setState({ 
			error: 'Authentication failed',
			loading: false
		});
	}

	renderButton() {
		if (this.state.loading) {
			return (
				<Spinner size='small' />
			);
		}
		return (
			<Button 
				buttonText="Log In" 
				onPress={this.onButtonPress.bind(this)}
			/>
		);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
						label="Email"
						placeholder="user@gmail.com"
					/>
				</CardSection>

				<CardSection>
					<Input
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
						label="Password"
						secureTextEntry
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
