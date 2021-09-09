import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("New Thought button text exists", () => {
	render(<App />);
	const linkElement = screen.getByText(/new thought/i);
	expect(linkElement).toBeInTheDocument();
});

test("My thoughts exist on the page.", () => {
	render(<App />);
	const heading = screen.getByText("My Thoughts");
	expect(heading).toBeInTheDocument();
});

test("Grand Circus is on the page. Should be the first default thought.", () => {
	render(<App />);
	const gcThought = screen.getByText("Grand Circus");
	expect(gcThought).toBeInTheDocument();
});

test("Beatrice is on the page", () => {
	render(<App />);

	const postWithBeat = screen.queryByText("Beatrice");
	expect(postWithBeat).toBeInTheDocument();
});
