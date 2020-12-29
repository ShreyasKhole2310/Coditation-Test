export default FetchUsersAPi = () => {
	return new Promise((resolve, reject) => {
		fetch("https://api.github.com/users", {
			method: "GET",
			Accept: "application/vnd.github.v3+json",
			headers: {
				Authorization: "Bearer 01643131a5b535b53c108fbf53bff23d4e86807d",
			},
		})
			.then((res) => res.json())
			.then((response) => resolve(response))
			.catch((err) => reject(err));
	});
};
