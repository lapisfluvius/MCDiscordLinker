import MinecraftPlugin from "../../MinecraftPlugin";
import MCDLLocalizableString from "../../MCDLLocalizableString";

export default class MinecraftDeathAttackLava extends MinecraftPlugin {
    public readonly matcher: RegExp = /\[..:..:..\] \[Server thread\/INFO\]: (.+) tried to swim in lava\n/ ;
    protected matched(match: string[]): void {
        this.discordClient.sendf(this.localizable, match);
    }
    private localizable: MCDLLocalizableString = {
        'ja_JP': '`%s は溶岩遊泳を試みた`',
        'en_US': '`%s tried to swim in lava`',
    }
}