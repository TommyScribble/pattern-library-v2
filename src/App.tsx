import React from "react";

import styles from "./App.module.scss";

function App() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1 className={styles.title}>React and Typescript Starter</h1>
				<p className={styles.para}>
					This project includes all the basics to get up and running in
					minutes
				</p>
				<a
					className={styles.link}
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Download the Biolerplate
				</a>
			</header>

		</div>
	);
}

export default App;
