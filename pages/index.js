import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>require podcast radio - beats to write code to</title>
				<meta
					name="title"
					content="require podcast radio - beats to write code to"
				/>
				<meta name="description" content="npx create-next-app" />
				<link rel="icon" href="/favicon.svg" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://radio.podcast.gq/" />
				<meta
					property="og:title"
					content="require podcast radio - beats to write code to"
				/>
				<meta property="og:description" content="npx create-next-app" />
				<meta property="og:image" content="https://i.imgur.com/DPRsBVX.png" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://radio.podcast.gq/" />
				<meta
					property="twitter:title"
					content="require podcast radio - beats to write code to"
				/>
				<meta property="twitter:description" content="npx create-next-app" />
				<meta
					property="twitter:image"
					content="https://i.imgur.com/DPRsBVX.png"
				/>
			</Head>

			<main className={styles.main}>
				<iframe
					src="https://open.spotify.com/embed/playlist/3tJ7YBGjwsnEChW5nunt96"
					width="300"
					height="380"
					frameborder="0"
					allowtransparency="true"
					allow="encrypted-media"
				></iframe>
			</main>

			<footer className={styles.footer}>
				<a href="https://require.podcast.gq">
					Copyright &copy; {new Date().getFullYear()}{" "}
					<img
						src="/favicon.svg"
						alt="Require Podcast"
						className={styles.logo}
					/>
				</a>
			</footer>
		</div>
	);
}
