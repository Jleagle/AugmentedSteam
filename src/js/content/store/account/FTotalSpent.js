import {ASFeature} from "modules";
import {HTML, Localization} from "core";

export class FTotalSpent extends ASFeature {

    checkPrerequisites() {
        this._links = document.querySelectorAll(".account_setting_block:nth-child(2) .account_setting_sub_block:nth-child(2) .account_manage_link");
        return this._links && this._links.length > 0;
    }

    apply() {
        const lastLink = this._links[this._links.length - 1];
        HTML.afterEnd(lastLink.parentNode,
            `<div><a class="account_manage_link" href="https://help.steampowered.com/accountdata/AccountSpend">${Localization.str.external_funds}</a></div>`);
    }
}
