type Recipe = {
	craftType: string;
	averageCost: number;
	successRate: number;
	averageAttempts: number;
	costPerTry: number;
};

type RecipeArray = {
	recipes: Recipe[];
};

const chromatic: Recipe = {
	craftType: "Chromatic",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 1,
};
const voriciOneRed: Recipe = {
	craftType: "Vorici 1R",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 4,
};
const voriciTwoRed: Recipe = {
	craftType: "Vorici 2R",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 25,
};
const voriciThreeRed: Recipe = {
	craftType: "Vorici 3R",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 120,
};
const voriciOneBlue: Recipe = {
	craftType: "Vorici 1B",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 4,
};
const voriciTwoBlue: Recipe = {
	craftType: "Vorici 2B",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 25,
};
const voriciThreeBlue: Recipe = {
	craftType: "Vorici 3B",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 120,
};

const voriciOneGreen: Recipe = {
	craftType: "Vorici 1G",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 4,
};
const voriciTwoGreen: Recipe = {
	craftType: "Vorici 2G",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 25,
};
const voriciThreeGreen: Recipe = {
	craftType: "Vorici 3G",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 120,
};

const voriciOneRedOneBlue: Recipe = {
	craftType: "Vorici 1R1B",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 15,
};
const voriciTwoRedOneBlue: Recipe = {
	craftType: "Vorici 2R1B",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 100,
};

const voriciTwoBlueOneRed: Recipe = {
	craftType: "Vorici 2B1R",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 100,
};
const voriciOneRedOneGreen: Recipe = {
	craftType: "Vorici 1R1G",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 15,
};
const voriciTwoRedOneGreen: Recipe = {
	craftType: "Vorici 2R1G",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 100,
};
const voriciTwoGreenOneRed: Recipe = {
	craftType: "Vorici 2G1R",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 100,
};
const voriciOneBlueOneGreen: Recipe = {
	craftType: "Vorici 1B1G",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 15,
};
const voriciTwoBlueOneGreen: Recipe = {
	craftType: "Vorici 2B1G",
	averageCost: 0,
	successRate: 0,
	averageAttempts: 0,
	costPerTry: 100,
};

export const arrayOfRecipe: RecipeArray = {
	recipes: [
		chromatic,
		voriciOneRed,
		voriciOneBlue,
		voriciOneGreen,
		voriciOneRedOneBlue,
		voriciOneBlueOneGreen,
		voriciOneRedOneGreen,
		voriciTwoRed,
		voriciTwoBlue,
		voriciTwoGreen,
		voriciTwoRedOneBlue,
		voriciTwoBlueOneRed,
		voriciTwoRedOneGreen,
		voriciTwoGreenOneRed,
		voriciTwoBlueOneGreen,
		voriciThreeGreen,
		voriciThreeBlue,
		voriciThreeRed,
	],
};
