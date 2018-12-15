const Plugin = require('../plugin');
module.exports = class extends Plugin {
    constructor(discord, minecraft, config) {
        super(discord, minecraft, config);
        this.minecraft = {
            ...this.minecraft,
            re: /\[..:..:..\] \[Server thread\/INFO\]: (.+) was roasted in dragon breath by (.+)\n/ ,
            text: {
                ja_jp: '`%s は %s のドラゴンの息で炙り焼きにされた`',
                en_us: '`%s was roasted in dragon breath by %s`',
            },
        };
    }
}