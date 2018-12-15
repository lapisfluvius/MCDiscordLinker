const Plugin = require('../plugin');
module.exports = class extends Plugin {
    constructor(discord, minecraft, config) {
        super(discord, minecraft, config);
        this.minecraft = {
            ...this.minecraft,
            re: /\[..:..:..\] \[Server thread\/INFO\]: (.+) fell off some vines\n/ ,
            text: {
                ja_jp: '`%s はツタから滑り落ちた`',
                en_us: '`%s fell off some vines`',
            },
        };
    }
}