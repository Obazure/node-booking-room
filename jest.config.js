module.exports = {
    moduleNameMapper: {},
    moduleFileExtensions: ['ts', 'js', 'json'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
    },
    collectCoverageFrom: ['<rootDir>/**/*.vue'],
    coverageReporters: ['text'],
    collectCoverage: false,
    moduleDirectories: ['node_modules', '.'],
    setupFiles: ['./jest.setup.js'],
    clearMocks: true,
}
