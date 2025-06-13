import { Express } from "express";

export const initRoutes = (baseUrl: string, app: Express) => {
	// import all routes
	app.use(`${baseUrl}`, async (req, res) => {
		res.status(200).json({
			success: true,
			message: "API is running",
			baseUrl: baseUrl,
		});
	});
};
