/*
 * @Author: Rainy
 * @Date: 2020-01-30 11:42:57
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-01-30 13:49:59
 */

import { gcd_enumeration, gcd_division_recursive, gcd_sub_recursive, gcd_best, } from '.';

test('gcd_enumeration(5, 10) should be 5', () => {
  expect(gcd_enumeration(5, 10)).toEqual(5);
});

test('gcd_division_recursive(5, 10) should be 5', () => {
  expect(gcd_division_recursive(5, 10)).toEqual(5);
});

test('gcd_sub_recursive(5, 10) should be 5', () => {
  expect(gcd_sub_recursive(5, 10)).toEqual(5);
});

test('gcd_best(5, 10) should be 5', () => {
  expect(gcd_best(5, 10)).toEqual(5);
});
