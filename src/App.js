import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header, Spinner, Button, CardSection } from './components/common';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBKQMl46H_Cp7EusdrxZixGcfcdYiQnAAE',
			authDomain: 'authentication-fbecf.firebaseapp.com',
			databaseURL: 'https://authentication-fbecf.firebaseio.com',
			projectId: 'authentication-fbecf',
			storageBucket: 'authentication-fbecf.appspot.com',
			messagingSenderId: '990608474317'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button buttonText='Log Out' onPress={() => firebase.auth().signOut()} />
					</CardSection>
				);
			case false: 
				return <LoginForm />;
			default: 
				return (
					<CardSection>
						<Spinner size='large' />
					</CardSection>
				);
		}
	}

	render() {
		return (
			<View>
				<Header headerText='Authentication' />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
