import express from "express";
import cors from "cors";
import { logger } from "./services/logger";

export const initApp = () => {
	const app = express();

	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(express.static("public"));
	if (
		process.env.NODE_ENV === "production" &&
		process.env.LOGGING === "true"
	) {
		app.use(logger);
	}
	app.use(
		cors({
			methods: ["GET", "POST", "PUT", "DELETE"],
			allowedHeaders: ["Content-Type", "Authorization"],
		})
	);

	return app;
};
