import "./PostForm.css";
export default function PostForm({
	onClose,
	setTitle,
	setThought,
	onSubmit,
}: {
	onClose: () => void;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	setThought: React.Dispatch<React.SetStateAction<string>>;
	onSubmit: () => void;
}) {
	return (
		<div>
			<form
				className="PostForm"
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit();
					onClose();
				}}
			>
				<i
					className="fas fa-times-circle"
					onClick={() => {
						onClose();
					}}
				></i>
				<label>Title</label>
				<input
					required
					type="text"
					onChange={(event) => {
						setTitle(event.target.value);
					}}
				/>
				<label>Thought</label>
				<textarea
					required
					rows={10}
					onChange={(event) => {
						setThought(event.target.value);
					}}
				></textarea>
				<button type="submit">Add Post</button>
			</form>
		</div>
	);
}
