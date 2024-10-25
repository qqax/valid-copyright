import copyright from '../src';

test('adds two numbers correctly', () => {
    const result = copyright(2024);
    expect(result).toBe(`© 2020. All Right Reserved.`);
});