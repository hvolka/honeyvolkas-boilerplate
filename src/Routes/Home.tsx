import { h, Fragment } from "preact"
import { Link } from "preact-router"

export default function Home ()
{
	return <>
		<h1>Honeyvolka's Boilerplate</h1>
		<p>Preact + Typescript + Webpack = 🤤</p>
		<Link class="btn" href="/page">sample page</Link>
	</>
}
