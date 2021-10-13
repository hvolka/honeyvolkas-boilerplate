import { h, Component, Fragment } from "preact"
import { Router, Route } from "preact-router"
import "./App.css"

import Home from "../Routes/Home"
import Page from "../Routes/Page"

export default class App extends Component
{
	render() {
		return <>
			<Router>
				<Route path="/" component={Home} />
				<Route path="/page" component={Page} />
			</Router>
		</>
	}
}
