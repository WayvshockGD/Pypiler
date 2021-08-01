export = class Parser {
    static parse(data: string) {
        let s: string;

        let splitString = data.split(" ");

        let rules = [
            {
                before: /^[A-Za-z.\s_-]+$()/,
                after: (afterData: string) => `def ${afterData}`
            }
        ];

        for (let rule of rules) {
            for (let d of splitString) {
                s = d.replace(rule.before, rule.after(d.replace("()", "").replace("static", "")));
            }
        }

        // @ts-ignore
        console.log(s)
    }
}