import { configDotenv } from "dotenv";
import { initApp } from "./server";
import { initRoutes } from "./routes";

// constants
const PORT = process.env.PORT || 3000;

configDotenv();
const app = initApp();

// Initialize routes
initRoutes("/api", app);

app.listen(PORT, function (err) {
	if (err) {
		console.error("Error starting server:", err);
	} else {
		console.log(`Server is running on http://localhost:${PORT}`);
	}
});
