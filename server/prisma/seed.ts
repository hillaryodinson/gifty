import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
	const gifts = [
		{
			title: "Air Fryer",
			description: "A modern air fryer for healthy meals.",
			imageUrl: "https://example.com/images/airfryer.jpg",
			suggestedAmount: 75000,
		},
		{
			title: "Dinner Date",
			description: "A romantic dinner night out.",
			imageUrl: "https://example.com/images/dinner.jpg",
			suggestedAmount: 20000,
		},
		{
			title: "Trip to Zanzibar",
			description: "Contribute towards a dream honeymoon.",
			imageUrl: "https://example.com/images/zanzibar.jpg",
			suggestedAmount: 200000,
		},
		{
			title: "Bluetooth Speaker",
			description: "A compact wireless speaker.",
			imageUrl: "https://example.com/images/speaker.jpg",
			suggestedAmount: 25000,
		},
		{
			title: "Spa Treatment",
			description: "A relaxing day at the spa.",
			imageUrl: "https://example.com/images/spa.jpg",
			suggestedAmount: 30000,
		},
		{
			title: "Cash Gift",
			description: "Let them choose how to use the gift.",
			imageUrl: "https://example.com/images/cash.jpg",
			suggestedAmount: 10000,
		},
		{
			title: "Household Essentials",
			description: "Basic household tools and items.",
			imageUrl: "https://example.com/images/essentials.jpg",
			suggestedAmount: 40000,
		},
		{
			title: "Smartwatch",
			description: "Stylish and functional smartwatch.",
			imageUrl: "https://example.com/images/smartwatch.jpg",
			suggestedAmount: 55000,
		},
		{
			title: "TV",
			description: "Support their dream of a new television.",
			imageUrl: "https://example.com/images/tv.jpg",
			suggestedAmount: 150000,
		},
		{
			title: "Fridge",
			description: "A contribution to their kitchen appliance fund.",
			imageUrl: "https://example.com/images/fridge.jpg",
			suggestedAmount: 180000,
		},
	];

	for (const gift of gifts) {
		await prisma.giftTemplate.upsert({
			where: { title: gift.title },
			update: {},
			create: gift,
		});
	}

	console.log("✅ Gift templates seeded!");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(() => {
		prisma.$disconnect();
	});
