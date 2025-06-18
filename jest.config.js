module.exports = {
	preset: 'jest-preset-angular',
	setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
	testMatch: ['**/+(*.)+(spec).+(ts)'],
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageReporters: ['json', 'lcov', 'text', 'html', 'text-summary'],
	collectCoverageFrom: [
		'src/**/*.ts',
		'!src/**/*.module.ts', // ⬅ Exclude Angular modules
		'!src/main.ts',
	],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
};
