import MinecraftPlugin from "../../MinecraftPlugin";
import MCDLLocalizableString from "../../MCDLLocalizableString";

export default class MinecraftDeathAttackDrownPlayer extends MinecraftPlugin {
    public readonly matcher: RegExp = /\[..:..:..\] \[Server thread\/INFO\]: (.+) drowned whilst trying to escape (.+)\n/ ;
    protected matched(match: string[]): void {
        this.discordClient.sendf(this.localizable, match);
    }
    private localizable: MCDLLocalizableString = {
        'ja_JP': '`%s は %s から逃れようとして溺れ死んだ`',
        'en_US': '`%s drowned whilst trying to escape %s`',
    }
}