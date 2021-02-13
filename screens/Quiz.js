import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { connect } from "react-redux";
import Message from "../components/Message";
import { main, white, red, green } from "../utils/colors";
import TouchButton from "../components/TouchButton";
import { setLocalNotification, clearLocalNotification } from "../utils/helpers";

class Quiz extends Component {
	state = {
		questionNumber: 0,
		score: 0,
		isFinished: false,
	};
	componentDidMount() {
		clearLocalNotification().then(setLocalNotification);
	}
	handleAnswer(isCorrect) {
		const { questionNumber, isFinished } = this.state;
		const { deck_length } = this.props;
		if (isCorrect) {
			this.setState((state) => {
				return {
					...state,
					["score"]: state["score"] + 10,
				};
			});
		}
		if (questionNumber + 1 === deck_length) {
			this.setState((state) => {
				return {
					...state,
					["isFinished"]: true,
				};
			});
		} else {
			this.setState((state) => {
				return {
					...state,
					["questionNumber"]: state["questionNumber"] + 1,
				};
			});
		}
		this.flipCard()

	}
	handleRestart = () => {
		this.setState(() => ({
			questionNumber: 0,
			score: 0,
			isFinished: false,
		}));
		this.flipCard()

	};
	UNSAFE_componentWillMount() {
		this.animatedValue = new Animated.Value(0);
		this.value = 0;
		this.animatedValue.addListener(({ value }) => {
			this.value = value;
		});
		this.frontInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ["0deg", "180deg"],
		});
		this.backInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ["180deg", "360deg"],
		});
	}

	flipCard = () => {
		if (this.value > 90) {
			Animated.spring(this.animatedValue, {
				toValue: 0,
				friction: 8,
				tension: 10,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.spring(this.animatedValue, {
				toValue: 180,
				friction: 8,
				tension: 10,
				useNativeDriver: true,
			}).start();
		}
	};

	render() {
		const frontAnimatedStyle = {
			transform: [{ rotateY: this.frontInterpolate }],
		};
		const backAnimatedStyle = {
			transform: [{ rotateY: this.backInterpolate }],
		};

		const { deck, deck_length, navigation } = this.props;
		const { questionNumber, score, isFinished } = this.state;
		const { question, answer } = deck.questions[questionNumber]
			? deck.questions[questionNumber]
			: {};
		return (
			<View style={styles.container}>
				{deck_length !== 0 ? (
					<React.Fragment>
						<View style={styles.header}>
							<Text style={styles.text}>
								{`${questionNumber + 1}/${deck_length}`}
							</Text>
							<Text style={styles.text}>{`Score: ${score}`}</Text>
						</View>
						<View style={styles.body}>
							{isFinished ? (
								<React.Fragment>
									<Message
										message={`Your score is ${score}`}
									/>
									<TouchButton
										onPress={() => {
											this.handleRestart();
										}}
									>
										Restart
									</TouchButton>
									<TouchButton
										btnStyle={{
											backgroundColor: white,
											borderColor: main,
										}}
										txtStyle={{ color: main }}
										onPress={() => {
											this.handleRestart();
											navigation.goBack();
										}}
									>
										Back To Deck
									</TouchButton>
								</React.Fragment>
							) : (
								<View style={styles.container}>
									<View>
										<Animated.View
											style={[
												styles.flipCard,
												frontAnimatedStyle,
											]}
										>
											<Message message={question} />
										</Animated.View>
										<Animated.View
											style={[
												styles.flipCard,
												backAnimatedStyle,
												styles.flipCardBack,
											]}
										>
											<Message message={answer} />
											<TouchButton
												btnStyle={{
													backgroundColor: green,
												}}
												onPress={() => {
													this.handleAnswer(true);
												}}
											>
												Correct
											</TouchButton>
											<TouchButton
												btnStyle={{
													backgroundColor: red,
												}}
												onPress={() => {
													this.handleAnswer(false);
												}}
											>
												Incorrect
											</TouchButton>
										</Animated.View>
									</View>
									<TouchButton
										onPress={() => this.flipCard()}
									>
										Flip
									</TouchButton>
								</View>
							)}
						</View>
					</React.Fragment>
				) : (
					<Message message="YOU DON'T HAVE ANY CARDS." />
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	flipCard: {
		width: 400,
		height: 600,
		alignItems: "center",
		justifyContent: "center",
		backfaceVisibility: "hidden",
	},
	flipCardBack: {
		position: "absolute",
		top: 0,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 15,
	},

	text: {
		fontSize: 22,
	},
	body: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingBottom: 80,
	},
});

const mapStateToProps = (state, ownProps) => {
	const title = ownProps.route.params.title;
	const deck = state[title];
	const deck_length = Object.values(deck.questions).length;
	return {
		deck,
		deck_length,
	};
};

export default connect(mapStateToProps)(Quiz);
