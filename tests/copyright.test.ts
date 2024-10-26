import { copyright } from '../src';

const currentYear:number = new Date().getFullYear();

test('the first year is equal to the current year', () => {
    const result = copyright(currentYear);
    expect(result).toBe(`©${currentYear}.`);
});

test('the first year is greater than the current year', () => {
    const result = copyright(currentYear + 1);
    expect(result).toBe(`©${currentYear}.`);
});

test('the first year is greater than the current year; warning added', () => {
    const result = copyright(currentYear + 1, {warning: true});
    expect(result).toBe(`©${currentYear}. All Rights Reserved.`);
});

test('the first year is less than the current year', () => {
    const firstYear:number = currentYear - 1;
    const result = copyright(firstYear);
    expect(result).toBe(`©${firstYear}–${currentYear}.`);
});

test('the first year is less than the current year; owner added, dot at the end of the text', () => {
    const firstYear:number = currentYear - 1;
    const owner = "John Donne. England.";
    const result = copyright(firstYear, {owner});
    expect(result).toBe(`©${firstYear}–${currentYear} John Donne. England.`);
});

test('the first year is less than the current year; owner added, there is no dot at the end of the text', () => {
    const firstYear:number = currentYear - 1;
    const owner = "John Donne. England";
    const result = copyright(firstYear, {owner});
    expect(result).toBe(`©${firstYear}–${currentYear} John Donne. England.`);
});

test('the first year is less than the current year; owner added, there is no dot at the end of the text; warning added', () => {
    const firstYear:number = currentYear - 1;
    const owner = "John Donne. England";
    const result = copyright(firstYear, {owner, warning: true});
    expect(result).toBe(`©${firstYear}–${currentYear} John Donne. England. All Rights Reserved.`);
});
