import { useState } from "react";
import { eventsData } from "./utils/data";

const Event = () => {
	const categories = ["All", "Religious", "Social", "Charity"];

	const [events, setEvents] = useState<
		{
			title: string;
			description: string;
			location: string;
			date: string;
			category: string;
		}[]
	>(eventsData);
	const [cat, setCat] = useState<string>("All");

	const filteredEvents = cat === "All" ? events : events.filter((e) => e.category === cat);

	const submit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const title = formData.get("title") as string;
		const description = formData.get("description") as string;
		const location = formData.get("location") as string;
		const date = formData.get("date") as string;
		const category = formData.get("category") as string;

		setEvents((prevEvents) => [{ title, description, location, date, category }, ...prevEvents]);
	};

	return (
		<article className="flex flex-col justify-center items-center p-8">
			{/* Add event */}
			<form
				onSubmit={submit}
				className="mt-10 rounded-md flex flex-wrap justify-center items-center gap-2"
			>
				<input
					className="outline-none border-2 border-blue-400 pl-2 rounded-sm flex-1"
					type="text"
					name="title"
					placeholder="Title: "
					required
				/>
				<input
					className="outline-none border-2 border-blue-400 pl-2 rounded-sm flex-1"
					type="text"
					name="description"
					placeholder="Description: "
				></input>
				<input
					className="outline-none border-2 border-blue-400 pl-2 rounded-sm flex-1"
					type="text"
					name="location"
					placeholder="Location: "
				/>
				<input
					className="outline-none border-2 border-blue-400 pl-2 rounded-sm flex-1"
					type="date"
					name="date"
				/>
				<select
					className="outline-none border-2 border-blue-400 pl-2 rounded-sm flex-1"
					defaultValue="Select Category"
					name="category"
					id="select-category"
					required
				>
					<option value="Select Category" disabled>
						Select Category
					</option>
					{categories.map((cat) => (
						<option key={cat} value={cat}>
							{cat}
						</option>
					))}
				</select>

				<button
					className="flex-1 bg-blue-500 text-xs font-bold px-4 py-2 text-white rounded-sm"
					type="submit"
				>
					Add Event
				</button>
			</form>

			{/* filter by category */}
			<section className="self-baseline mt-4">
				{categories.map((c) => (
					<button
						className={`${
							c === cat
								? "bg-white text-gray-900 border-2 border-gray-900"
								: "bg-gray-900 text-white"
						} hover:bg-white hover:text-gray-900 border-2 px-6 py-2 rounded-2xl mr-4 cursor-pointer`}
						key={c + 1}
						onClick={() => setCat(c)}
					>
						{c}
					</button>
				))}
			</section>
			{/* Event list */}
			<section className="w-full grid grid-cols-(--card-cols) gap-2 mt-6">
				{filteredEvents.map((eventItem, i) => (
					<section className="bg-cyan-200 p-6 rounded-md leading-8 flex flex-col gap-2" key={i}>
						<p className="flex text-gray-800 text-lg font-bold">{eventItem.title}</p>
						<p className="flex text-gray-600 font-semibold">{eventItem.description}</p>
						<p className="flex text-xs text-gray-600 font-semibold">
							Location: <span className="ml-auto">{eventItem.location}</span>
						</p>
						<p className="flex text-xs text-gray-600 font-semibold">
							<span>{eventItem.date}</span>{" "}
							<span className="ml-auto">Category: {eventItem.category}</span>
						</p>
					</section>
				))}
			</section>
		</article>
	);
};

export default Event;
