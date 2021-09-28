const Header = () => {
	const view = `
		<header class="Header-main">
			<div class="Header-logo">
				<h1>
					<a href="/"> Hello </a>
				</h1>
			</div>
			<div class="Header-nav">
				<ul>
					<li><a href="#/">Home</a></li>
					<li><a href="#/about/">About</a></li>
				</ul>
			</div>
		</header>
	`;

	return view;
};
export default Header;