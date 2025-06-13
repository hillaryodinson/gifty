import morgan, { StreamOptions } from "morgan";
import fs from "fs";
import path from "path";
import { RequestHandler } from "express";

class LoggerService {
	private static instance: LoggerService;
	private logDirectory: string;
	private accessLogStream: fs.WriteStream;
	public logger: RequestHandler;

	private constructor() {
		this.logDirectory = path.join(__dirname, "../../logs");
		this.ensureLogDirectory();
		this.accessLogStream = fs.createWriteStream(
			path.join(this.logDirectory, "events.log"),
			{ flags: "a" }
		);
		this.logger = morgan("combined", {
			stream: this.accessLogStream as StreamOptions,
		});
	}

	private ensureLogDirectory() {
		if (!fs.existsSync(this.logDirectory)) {
			fs.mkdirSync(this.logDirectory, { recursive: true });
		}
	}

	public static getInstance(): LoggerService {
		if (!LoggerService.instance) {
			LoggerService.instance = new LoggerService();
		}
		return LoggerService.instance;
	}

	public getLogger(): RequestHandler {
		return this.logger;
	}
}

export default LoggerService;
export const logger = LoggerService.getInstance().getLogger();
