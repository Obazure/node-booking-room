module.exports = {
    moduleNameMapper: {},
    moduleFileExtensions: ['ts', 'js', 'json'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
    },
    collectCoverageFrom: ['<rootDir>/**/*.ts'],
    coverageReporters: ['text'],
    collectCoverage: false,
    moduleDirectories: ['node_modules', '.'],
    setupFiles: ['./jest.setup.js'],
    clearMocks: true,
    coverageThreshold: {
        global: {
            statements: 49,
            branches: 75,
            functions: 45,
            lines: 47,
        },
    },
}
