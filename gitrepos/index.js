import {
	Container,
	Content,
	CardItem,
	Card,
	Left,
	Thumbnail,
	Right,
	Body,
	Button,
	Icon,
	View,
} from "native-base";
import React, { useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FetchRepoDetails from "./FetchRepoDetails";

function RepoView({ item }) {
	return (
		<Card>
			<CardItem>
				<Left>
					<Body>
						<Text style={{ color: "black" }}>{item.name}</Text>
						<Text note>{item.description}</Text>
					</Body>
				</Left>
			</CardItem>

			<CardItem>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Icon active name="fork" type="AntDesign" style={{ fontSize: 20 }} />
					<Text style={{ marginLeft: 6, fontWeight: "bold" }}>
						{item.forks}
					</Text>

					<Icon
						active
						name="staro"
						type="AntDesign"
						style={{ marginLeft: 6, fontSize: 20 }}
					/>
					<Text style={{ marginLeft: 6, fontWeight: "bold" }}>
						{item.stargazers_count}
					</Text>
				</View>
			</CardItem>
		</Card>
	);
} // Repo Details View

export default class GitRepos extends React.Component {
	state = {
		values: [],
		isLoading: true,
	};

	componentDidMount() {
		FetchRepoDetails(this.props.route.params)
			.then((res) => {
				this.setState({
					values: res,
					isLoading: false,
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		if (this.state.isLoading)
			return (
				<ActivityIndicator
					style={{ width: 100, height: 100, alignSelf: "center" }}
				/>
			);
		else
			return (
				<Container>
					<Content contentContainerStyle={{ flex: 1 }}>
						<ScrollView>
							{this.state.values.map((item) => (
								<RepoView item={item} />
							))}
						</ScrollView>
					</Content>
				</Container>
			);
	}
}
