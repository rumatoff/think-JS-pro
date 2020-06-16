/*eslint strict: ["error", "global"]*/

"use strict";

describe("wordStat", function () {
    it("correct text", function () {
        const result = wordStat("Lorem ipsum dolor sit amet.");
        assert.deepEqual(result, [
            {word: "Lorem", sum: 511},
            {word: "ipsum", sum: 558},
            {word: "dolor", sum: 544},
            {word: "sit", sum: 336},
            {word: "amet.", sum: 469}
        ]);
    });
    it("one word", function () {
        const result = wordStat("Lorem");
        assert.deepEqual(result, [
            {word: "Lorem", sum: 511},
        ]);
    });
    it("one char", function () {
        const result = wordStat("L");
        assert.deepEqual(result, [
            {word: "L", sum: 76},
        ]);
    });
    it("empty string", function () {
        const result = wordStat("");
        assert.deepEqual(result, [{word: "", sum: 0}]);
    });
});
describe("charsSum", function () {
    it("correct chars", function () {
        const result = charsSum([100, 101, 102]);
        assert.deepEqual(result, 303);
    });
    it("one char", function () {
        const result = charsSum([100]);
        assert.deepEqual(result, 100);
    });
    it("zero char", function () {
        const result = charsSum([0]);
        assert.deepEqual(result, 0);
    });
    it("empty char", function () {
        const result = charsSum([]);
        assert.deepEqual(result, 0);
    });
});
