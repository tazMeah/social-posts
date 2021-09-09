import "./PostForm.css";
import { useState } from "react";
import Post from "../models/Post";

export default function PostForm({
	onClose,
	onSubmit,
}: {
	onClose: () => void;
	onSubmit: ({ title, thought }: Post) => void;
}) {
	const [title, setTitle] = useState("");
	const [thought, setThought] = useState("");

	return (
		<div>
			<form
				className="PostForm"
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit({ title: title, thought: thought });
					onClose();
				}}
			>
				<i
					role="img"
					id="Close"
					className="fas fa-times-circle"
					onClick={() => {
						onClose();
					}}
				></i>
				<label htmlFor="title">Title</label>
				<input
					role="textbox"
					name="Title"
					required
					type="text"
					onChange={(event) => {
						setTitle(event.target.value);
					}}
				/>
				<label>Thought</label>
				<textarea
					role="textbox"
					name="thought"
					required
					rows={10}
					onChange={(event) => {
						setThought(event.target.value);
					}}
				></textarea>
				<button type="submit" role="button" name="Submit">
					Add Post
				</button>
			</form>
		</div>
	);
}
