import input from "./input.js";

// Parse the input into an array of arrays of numbers.
const lines = input.trim().split("\n");
const reports = lines.map((line) => line.split(" ").map(Number));


// Check if a report is safe (Part 1)
const isSafe = (report) => {
    let i = 0;

    // Try decreasing
    for (i = 0; i < report.length - 1; i++) {
        const diff = report[i] - report[i + 1];
        if (diff < 1 || diff > 3) break;
    }
    if (i === report.length - 1) return true;

    // Try increasing
    for (i = 0; i < report.length - 1; i++) {
        const diff = report[i + 1] - report[i];
        if (diff < 1 || diff > 3) break;
    }
    if (i === report.length - 1) return true;

	return false;
};


// Check if safe with the Problem Dampener (Part 2)
const problemDampener = (report) => {
    // Already safe
    if (isSafe(report)) return true;

    // Try removing each index
    for (let i = 0; i < report.length; i++) {
        const newReport = report.toSpliced(i, 1);
        if (isSafe(newReport)) return true;
    }

    return false;
};


// Count safe reports using the dampener
const analysis = (reports) => {
    let safeReports = 0;

    for (const report of reports) {
        if (problemDampener(report)) safeReports++;
    }

    return safeReports;
};


// Output the number of safe reports.
console.log(analysis(reports));
