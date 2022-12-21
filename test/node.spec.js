/**
 * @jest-environment node
 */

import Analyzer from "../src";

describe("kuroshiro-analyzer-kuromoji Node Test", () => {
    const EXAMPLE_TEXT = "すもももももも";

    let analyzer;

    it("Initialization", async (done) => {
        analyzer = new Analyzer({
            dictPath: "node_modules/kuromoji/dict/"
        });
        await analyzer.init();
        done();
    });

    it("Repeated Initialization", async (done) => {
        analyzer = new Analyzer({
            dictPath: "node_modules/kuromoji/dict/"
        });
        try {
            await analyzer.init();
            await analyzer.init();
            done("SHOULD NOT BE HERE");
        }
        catch (err) {
            done();
        }
    });

    it("Kuromoji Build Failed", async (done) => {
        analyzer = new Analyzer({
            dictPath: "node_modules/foo/bar"
        });
        try {
            await analyzer.init();
            done("SHOULD NOT BE HERE");
        }
        catch (err) {
            done();
        }
    });

    it("Parse Sentence", async (done) => {
        analyzer = new Analyzer();
        await analyzer.init();

        const result = analyzer.parse(EXAMPLE_TEXT);
        // console.debug(result);
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(4);
        done();
    });

    it("Parse Null", async (done) => {
        analyzer = new Analyzer();
        await analyzer.init();

        const result = analyzer.parse();
        // console.debug(result);
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(0);
        done();
    });

    it("Parse Blank Sentence", async (done) => {
        analyzer = new Analyzer();
        await analyzer.init();

        const ori = "";
        const result = analyzer.parse(ori);
        // console.debug(result);
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(0);
        done();
    });
});
