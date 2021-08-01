import path from "path";
import Compiler from "../lib/Compiler";

new Compiler({
    basePath: path.join(__dirname, "input"),
    puts: {
        input: path.join(__dirname, "input"),
        output: path.join(__dirname, "output")
    }
}).init();