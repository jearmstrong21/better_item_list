const data = require("./data");
const weapons = require("./weapons");
const classes = require("./classes");

function assetsUrl(e, a, t) {
    return !a && e.startsWith("/") && (e = e.slice(1)), (t ? "/" + e : "https://assets.krunker.io/" + e)
}

module.exports.preview = function (a) {
    return assetsUrl("/textures/" + (a.type && 4 == a.type && !a.is3D ? "sprays/" + a.id : "previews/" + (a.type && 3 != a.type ? "cosmetics/" + a.type + "_" + a.id + (a.tex ? "_" + a.tex : "") : data.types[a.type || 0] + (a.type && 3 == a.type ? a.id + (null == a.pat ? null == a.tex ? "" : "_" + a.tex : "_c" + a.pat) : (a.weapon || 0) + "_" + (null == a.mid ? null == a.pat ? a.tex ? a.tex : a.id : "c" + a.pat : "m" + a.mid + (null == a.midT ? "" : "_" + a.midT))))) + ".png", !1, a.local)
}

module.exports.price = function (item) {
    return `https://krunker.io/social.html?p=itemsales&i=${item.index}`
}

module.exports.listing = function (item) {
    return `https://krunker.io/social.html?p=market&i=${item.index}`
}

module.exports.viewer = function (item) {
    let e = item.index;
    if (1 == item.type) return "https://krunker.io/viewer.html?class=9&hat=" + e; else if (2 == item.type) return "https://krunker.io/viewer.html?class=9&back=" + e; else if (3 == item.type) return "https://krunker.io/viewer.html?class=9&hidePlayer&melee=" + e; else if (5 == item.type) return "https://krunker.io/viewer.html?class=9&dye=" + e; else if (6 == item.type) return "https://krunker.io/viewer.html?class=9&waist=" + e; else if (7 == item.type) return "https://krunker.io/viewer.html?class=9&face=" + e; else if (null != item.weapon) if (weapons[item.weapon - 1].secondary) return "https://krunker.io/viewer.html?hidePlayer&swap=-1&nosup&skinIdS=" + e + "&secIndex=" + (item.weapon - 1); else {
        for (var t = null, n = 0; n < classes.length; n++) if (classes[n].loadout[0] == item.weapon - 1) {
            t = n;
            break
        }
        if (null != t) return "https://krunker.io/viewer.html?class=" + t + "&hidePlayer&nosup&skinIdP=" + e;
    }
}