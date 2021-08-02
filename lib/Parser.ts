import prettier from "prettier";

export = class Parser {
    static parse(data: string) {
        let s: string[] = [];

        let prettierData = prettier.format(data);
        let splitString = prettierData.split(" ");

        let rules = [
            {
                before: /^(static)?[A-Za-z.\s_-]+\(\)$/,
                after: (afterData: string) => `def ${afterData}:`
            },
            {
                before: /(class {)/,
                after: (afterData: string) => `${afterData}:`
            }
        ];
        
        for (let d of splitString) {
            if (rules[0].before.test(d)) {
                s.push(d.replace(rules[0].before, rules[0].after(d).replace("static", "")));
            }
            if (rules[1].before.test(d)) {
                s.push(d.replace(rules[1].before, rules[1].after(d.replace("}", "").replace("{", ""))))
            }
        }

        console.log(prettierData);
        return s;
    }
}