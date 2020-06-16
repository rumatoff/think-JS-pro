/*eslint strict: ["error", "global"]*/

"use strict";

describe("sumOfPositive", function () {
    it("array with positive and negative elements", function () {
        const result = sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]);
        assert.deepEqual(result, {count: 5, sum: 357});
    });
    it("array with positive elements", function () {
        const result = sumOfPositive([96, 40, 96, 58]);
        assert.deepEqual(result, {count: 4, sum: 290});
    });
    it("array with negative elements", function () {
        const result = sumOfPositive([-91, -93, -45, -34, -42]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
    it("array with zero", function () {
        const result = sumOfPositive([0]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
    it("array with zeroes elements", function () {
        const result = sumOfPositive([0, 0, 0, 0, 0]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
});
