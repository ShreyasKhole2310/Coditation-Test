import { Container, Content, List, ListItem, Text } from "native-base";
import React from "react";
import { ActivityIndicator, FlatList, ScrollView } from "react-native";
import FetchUsersAPi from "./FetchUsersAPi";
import UserItem from "./UserItem";

export default class Users extends React.Component {
	state = {
		data: [],
		isLoading: true,
	};

	componentDidMount() {
		FetchUsersAPi()
			.then((res) => {
				this.setState({ data: res, isLoading: false });
			})
			.catch((err) => {
				console.log(err);
			});
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
				<Container style={{ flex: 1 }}>
					<Content contentContainerStyle={{ flex: 1 }}>
						<ScrollView>
							<FlatList
								data={this.state.data}
								renderItem={({ item }) => (
									<UserItem
										data={item}
										key={item.id}
										onPress={() => {
											this.props.navigation.navigate("RepoList", {
												username: item.login,
											});
										}}
									/>
								)}
							/>
						</ScrollView>
					</Content>
				</Container>
			);
	}
}
