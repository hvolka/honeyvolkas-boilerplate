import { h, Fragment } from "preact"
import { Link } from "preact-router"

export default function Page ()
{
	return <>
		<p>Page</p>
		<Link class="btn" href="/">go back</Link>
	</>
}
