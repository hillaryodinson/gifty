import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import { logger } from "./services/logger";

export const initApp = () => {
	const app = express();

	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(express.static("public"));
	app.use(logger);
	app.use(
		cors({
			methods: ["GET", "POST", "PUT", "DELETE"],
			allowedHeaders: ["Content-Type", "Authorization"],
		})
	);

	return app;
};
