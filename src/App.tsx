import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import { Layout } from "./components";
import { Event, Home, NotFound } from "./pages";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="event" element={<Event />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
