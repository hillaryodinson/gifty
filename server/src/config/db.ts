import { PrismaClient } from "@prisma/client";

declare global {
	var prisma: PrismaClient | undefined;
}

let prisma =
	global.prisma ||
	new PrismaClient({
		log: [
			{
				level: "query",
				emit: "event",
			},
		],
	});

global.prisma = prisma;

export default prisma;
