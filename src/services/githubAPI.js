class GithubAPI {
	_apiBase = 'https://api.github.com/users';
	getUser = async (login) => {
		const res = await fetch(`${this._apiBase}/${login}`);
		const body = await res.json();
		return this._transformData(body);
	};
	_transformData = (user) => {
		return {
			login: user.login,
			avatar: user.avatar_url,
		};
	};
}
export default GithubAPI;
