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
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
}
