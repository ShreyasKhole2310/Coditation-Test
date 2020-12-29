import React from "react";

import {
	Text,
	Thumbnail,
	Body,
	List,
	ListItem,
	Right,
	Icon,
} from "native-base";

const UserItem = ({ data, onPress }) => {
	return (
		<List>
			<ListItem onPress={() => onPress()}>
				<Thumbnail source={{ uri: data.avatar_url }} />
				<Body>
					<Text>{data.login}</Text>
					<Text note>{data.type}</Text>
				</Body>
				<Right>
					<Icon name="right" type="AntDesign" style={{ color: "black" }} />
				</Right>
			</ListItem>
		</List>
	);
}; // Users Portlet View

export default UserItem;
