module.exports = {
	verbose: true,
	roots: [ './src/__test__' ],
	coverageReporters: [ 'html' ],
	collectCoverage: true,
	collectCoverageFrom: [ './src/routes/**.js', './src/index.js' ]
};
