import { Link } from "react-router";

const Home = () => {
	return (
		<article className="w-full min-h-screen text-center flex flex-col items-center justify-center px-8 bg-cover bg-no-repeat">
			<h1 className="text-2xl font-bold">Welcome to the most trusted event list app</h1>
			<p className="max-w-96 text-gray-900 text-xl mt-4">
				Connecting people of all faiths through events and community support
			</p>
			<Link to="event" className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold mt-6">
				Explore Event
			</Link>
		</article>
	);
};

export default Home;
