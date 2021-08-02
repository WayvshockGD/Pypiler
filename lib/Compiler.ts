import { readdirSync, writeFile } from "fs";
import { ICompilerOptions } from "./Context";
import Parser from "./Parser";
import Util from "./Util";

export = class Compiler {
    options: ICompilerOptions;

    constructor(options: ICompilerOptions) {
        this.options = options;
    }

    public init() {
        let folder = this.options.puts.input;
        let output = this.options.puts.output;

        readdirSync(folder).forEach(file => {
            let jsFile = require(`${this.options.basePath}/${file}`).toString();
            let data = Parser.parse(jsFile);

            writeFile(`${output}/${file.replace(".js", ".py")}`, data.join("\n"), function (err) {
                console.log(err || "");
            });
        })
    }
}