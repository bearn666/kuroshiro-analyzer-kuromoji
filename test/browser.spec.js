/**
 * @jest-environment jsdom
 */

import Analyzer from "../src";

describe("kuroshiro-analyzer-kuromoji Browser Test", () => {
    const EXAMPLE_TEXT = "すもももももも";

    let analyzer;

    beforeAll(async () => {
        analyzer = new Analyzer();
        await analyzer.init();
    });
    it("Parse Sentence", (done) => {
        const result = analyzer.parse(EXAMPLE_TEXT);
        // console.debug(result);
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(4);
        done();
    });
});
