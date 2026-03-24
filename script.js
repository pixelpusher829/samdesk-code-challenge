import input from "./input.js";

// Parse the input into an array of arrays of numbers.
const lines = input.trim().split("\n");
const reports = lines.map((line) => line.split(" ").map(Number));

// Analyze the reports to count how many are "safe".
const analysis = (reports) => {
	let safeReports = 0;

	for (const report of reports) {
		let i = 0;

		// Try decreasing
		for (i = 0; i < report.length - 1; i++) {
			const diff = (report[i]) - (report[i + 1]);
			if (diff < 1 || diff > 3) break;
		}
		if (i === report.length - 1) {
			safeReports++;
			continue;
		}

		// Try increasing
		for (i = 0; i < report.length - 1; i++) {
			const diff = (report[i + 1]) - (report[i]);
			if (diff < 1 || diff > 3) break;
		}
		if (i === report.length - 1) {
			safeReports++;
		}
	}

	return safeReports;
};

// Output the number of safe reports.
console.log(analysis(reports));
