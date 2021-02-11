(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = [{
    name: "Triggerman",
    loadout: [1],
    secondary: !0,
    colors: [10975328, 4013373, 2302755, 2631720, 7098434, 12566463],
    health: 100,
    segs: 6,
    throwChrg: 800,
    speed: 1.05,
    regen: .1,
    wallJ: !1,
    leap: !1,
    asset: ""
}, {
    name: "Hunter",
    loadout: [0],
    secondary: !0,
    colors: [10975328, 8083261, 6506290, 2631720, 6506290, 4008733],
    health: 60,
    segs: 5,
    throwChrg: 800,
    speed: 1.05,
    regen: .1,
    wallJ: !1,
    leap: !1,
    asset: ""
}, {
    name: "Run N Gun",
    loadout: [3],
    secondary: !1,
    wallJ: !0,
    colors: [10975328, 4088706, 3099491, 2631720, 6506290, 1715002],
    health: 100,
    segs: 6,
    throwChrg: 800,
    speed: 1.18,
    regen: .1,
    leap: !1,
    asset: ""
}, {
    name: "Spray N Pray",
    loadout: [6],
    secondary: !1,
    txts: ["Calling in the Big Guns?", "Remember - No Russian.", "Pesky Snipers..."],
    colors: [10975328, 5793865, 4806204, 2631720, 2631720, 3160103],
    health: 170,
    segs: 7,
    throwChrg: 800,
    regen: .05,
    speed: .95,
    wallJ: !1,
    leap: !1,
    asset: ""
}, {
    name: "Vince",
    loadout: [5],
    txts: ["..."],
    secondary: !0,
    colors: [8412234, 5526119, 4144461, 2631720, 2631720, 2697267],
    health: 90,
    segs: 6,
    throwChrg: 800,
    speed: 1,
    regen: .1,
    wallJ: !1,
    leap: !1,
    asset: ""
}, {
    name: "Detective",
    loadout: [4],
    secondary: !1,
    txts: ["I'm onto something"],
    colors: [10975328, 7360054, 4410462, 2631720, 6506290, 4140062],
    health: 100,
    segs: 6,
    throwChrg: 800,
    speed: 1,
    regen: .1,
    wallJ: !1,
    leap: !1,
    asset: ""
}, {
    name: "Marksman",
    loadout: [7],
    secondary: !0,
    colors: [10975328, 5793865, 4806204, 2631720, 2631720, 2699298],
    health: 90,
    segs: 6,
    throwChrg: 800,
    speed: 1,
    regen: .1,
    wallJ: !1,
    leap: !1,
    asset: ""
}, {
    name: "Rocketeer",
    loadout: [8],
    txts: ["..."],
    secondary: !0,
    colors: [10975328, 5793865, 4806204, 2631720, 7098434, 2831140],
    health: 130,
    segs: 7,
    throwChrg: 800,
    speed: .86,
    regen: .1,
    wallJ: !1,
    leap: !1,
    asset: ""
}, {
    name: "Agent",
    loadout: [9],
    secondary: !1,
    wallJ: !0,
    colors: [10975328, 4013373, 2302755, 2631720, 2631720, 12566463],
    health: 100,
    segs: 6,
    throwChrg: 800,
    speed: 1.2,
    regen: .1,
    leap: !1,
    asset: ""
}, {
    name: "Runner",
    txts: ["You sure about this?", "...", "Oh boy", "I don't know about this...", "Not me again..."],
    loadout: [12],
    secondary: !1,
    wallJ: !0,
    colors: [10975328, 4013373, 2302755, 2631720, 2631720, 2302755],
    health: 120,
    segs: 6,
    throwChrg: 600,
    regen: .2,
    speed: 1,
    leap: !1,
    asset: ""
}, {
    name: "Deagler",
    hide: !0,
    loadout: [10],
    secondary: !1,
    colors: [10975328, 4013373, 2302755, 2631720, 2631720, 2302755],
    health: 60,
    segs: 5,
    throwChrg: 800,
    speed: 1,
    regen: .1,
    wallJ: !1,
    leap: !1,
    asset: ""
}, {
    name: "Bowman",
    loadout: [13],
    secondary: !0,
    colors: [10975328, 9530450, 6308654, 2631720, 2631720, 4666663],
    health: 100,
    segs: 6,
    throwChrg: 800,
    speed: 1,
    regen: .1,
    wallJ: !1,
    leap: !1,
    asset: ""
}, {
    name: "Commando",
    loadout: [14],
    secondary: !0,
    colors: [10975328, 4013373, 2302755, 2631720, 10050604, 1513239],
    health: 100,
    segs: 6,
    throwChrg: 800,
    speed: 1,
    regen: .1,
    wallJ: !1,
    leap: !1,
    asset: ""
}, {
    name: "Trooper",
    wallJ: !0,
    loadout: [18],
    secondary: !1,
    colors: [10975328, 12436169, 12436169, 3026478, 2631720, 3026478],
    health: 100,
    segs: 6,
    throwChrg: 800,
    speed: 1,
    regen: .1,
    leap: !1,
    asset: ""
}, {
    name: "Survivor",
    wallJ: !0,
    hide: !0,
    noSleeve: !0,
    loadout: [19],
    colors: [10975328, 10975328, 10975328, 10975328, 7098434, 10975328],
    health: 150,
    segs: 6,
    throwChrg: 800,
    speed: .8,
    regen: .1,
    leap: !1,
    asset: ""
}]
},{}],2:[function(require,module,exports){
module.exports.wheels = [
    {
        name: "Starter",
        primary: !0,
        headCol: "#b2f252",
        price: 50,
        icons: 2,
        rarities: [75, 22, 3, 0, 0, 0],
        getRarities: function () {
            return this.rarities
        }
    }, {
        name: "Elite",
        primary: !0,
        headCol: "#2196F3",
        price: 100,
        icons: 3,
        rarities: [50, 30, 15, 5, 0, 0],
        getRarities: function () {
            return this.rarities
        }
    }, {
        name: "Heroic",
        primary: !0,
        headCol: "#fc9803",
        price: 500,
        icons: 4,
        bigRar: 5,
        rarities: [0, 48, 35, 14, 2.49, .5, .01],
        getRarities: function () {
            return this.rarities
        }
    }, {
        name: "Free",
        headCol: "#ce504c",
        free: !0,
        hideMobile: !0,
        openURL: !0,
        minLvl: 5,
        price: 0,
        priceT: "Follow",
        priceCol: "#00eaff",
        icons: 3,
        rarities: [0, 48, 35, 14, 3, 0],
        getRarities: function () {
            return this.rarities
        }
    }, {
        name: "Free KR",
        headCol: "#00bcd4",
        free: !0,
        kr: !0,
        hideMobile: !0,
        minLvl: 1,
        price: 0,
        priceT: "Claim",
        priceCol: "#00eaff",
        adjRars: !0,
        icons: 0,
        rarities: [50, 39, 10, 1, 0, 0],
        getRarities: function () {
            return this.rarities
        }
    }, {
        name: "Valour",
        primary: !0,
        headCol: "#d073af",
        locked: !0,
        icons: 1,
        rarities: [43, 33, 16, 6, 2, 0],
        getRarities: function () {
            return this.rarities
        }
    }, {
        name: "Twitch",
        headCol: "#7a59b9",
        price: 0,
        hideMobile: !0,
        priceT: "Redeem",
        priceCol: "#00eaff",
        limType: "Charity",
        twitch: !0,
        icons: 0,
        getRarities: function () {
            return [0, 45, 35, 17, 3, 0]
        }
    }
], module.exports.events = {
    Debug: "#000000",
    Easter: null,
    "Twitch #1": "#6441a5",
    "Twitch #2": "#6441a5",
    "Twitch #3": "#6441a5",
    "Clan Wars": null,
    Charity: "#6441a5",
    Raid: "#eb347a",
    Canteen: "#fe4002",
    Gift: null,
    Free: null,
    Christmas: null
}, module.exports.types = ["weapons/weapon_", "hats/hat_", "body/body_", "melee/melee_", "sprays/", "dyes/", "waist/waist_", "faces/face_", "shoes/shoe_"], module.exports.purchases = [
    {
        val: 300,
        priceSale: .89,
        price: .99,
        col: "#888888"
    }, {val: 600, priceSale: 1.61, price: 1.79, col: "#b2f251"}, {
        val: 2600,
        priceSale: 6.74,
        price: 7.49,
        col: "#3696f3"
    }, {val: 7e3, priceSale: 14.39, price: 15.99, col: "#e040fb"}, {
        val: 2e4,
        priceSale: 31.49,
        price: 34.99,
        tag: "Popular!",
        tagCol: "#ed4242",
        col: "#fa9704"
    }, {val: 6e4, priceSale: 89.99, price: 99.99, tag: "Best Value!", tagCol: "#E040FB", col: "#ee5356"}
], module.exports.mobilePurchases = [
    {val: 300, price: .99, productId: "ch.yendis.krunkerhub.kr300"}, {
        val: 600,
        price: 1.79,
        productId: "ch.yendis.krunkerhub.kr600"
    }, {val: 2600, price: 7.49, productId: "ch.yendis.krunkerhub.kr2600"}, {
        val: 7e3,
        price: 15.99,
        productId: "ch.yendis.krunkerhub.kr7000"
    }, {val: 2e4, price: 34.99, productId: "ch.yendis.krunkerhub.kr20000", tag: "Popular!", tagCol: "#ed4242"}, {
        val: 6e4,
        price: 99.99,
        productId: "ch.yendis.krunkerhub.kr60000",
        tag: "Best Value!",
        tagCol: "#E040FB"
    }
], module.exports.premium = [
    {val: 7, price: 2e3, tag: "Starter", tagCol: "#42ed56", headCol: "#2196F3"}, {
        val: 30,
        price: 7500,
        tag: "Popular!",
        tagCol: "#ed4242",
        headCol: "#2196F3"
    }, {val: 60, price: 14e3, headCol: "#E040FB"}, {
        val: 90,
        price: 19e3,
        tag: "Best Value!",
        tagCol: "#E040FB",
        headCol: "#fc9803"
    }
], module.exports.lootRars = [0, 0, 70, 25.5, 4, .5, 0], module.exports.rarities = [
    {
        name: "Uncommon",
        rar: 60,
        color: "#b2f252",
        confC: 30,
        confCols: ["#b2f252", "#fff"],
        sell: 1,
        fee: 5
    }, {name: "Rare", rar: 40, color: "#2196F3", confC: 30, confCols: ["#2196F3", "#fff"], sell: 3, fee: 5}, {
        name: "Epic",
        rar: 25,
        color: "#E040FB",
        confC: 30,
        confCols: ["#E040FB", "#fff"],
        sell: 10,
        fee: 5
    }, {
        name: "Legendary",
        rar: 10,
        color: "#FBC02D",
        confC: 40,
        confCols: ["#FBC02D", "#fff"],
        sell: 100,
        fee: 10
    }, {
        name: "Relic",
        rar: 2.5,
        color: "#ed4242",
        confC: 50,
        confCols: ["#ed4242", "#fff"],
        sell: 500,
        fee: 10
    }, {
        name: "Contraband",
        rar: .5,
        color: "#292929",
        confC: 70,
        confCols: ["#292929", "#fff"],
        sell: 2500,
        fee: 25
    }, {
        name: "Unobtainable",
        rar: 0,
        color: "#fff53d",
        confC: 100,
        confCols: ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"],
        animate: !0,
        sell: 1e4,
        fee: 200
    }
], module.exports.getSpnItems = function (a, t, n, i, s) {
    t = t || 0;
    var r = [], o = a.itemTypes, l = a.limType, d = a.weaponType;
    if (a.itemIndexs) return a.itemIndexs;
    for (var c = 0; c < module.exports.skins.length; ++c) module.exports.skins[c] && !module.exports.skins[c].limited && !module.exports.skins[c].blocked && !module.exports.skins[c].noSpin && !module.exports.skins[c].blackM && (module.exports.skins[c].rarity == t || s && module.exports.skins[c].rarity >= s) && (!l || l == module.exports.skins[c].limT) && (l || !module.exports.skins[c].limT) && !(o && 0 > o.indexOf(module.exports.skins[c].type || 0)) && (!module.exports.skins[c].minRec || module.exports.skins[c].minRec && n && n.level < module.exports.skins[c].minRec) && (module.exports.skins[c].mSeas || (module.exports.skins[c].seas || 1) == i.currentSeason) && (null == d || d == module.exports.skins[c].weapon) && r.push(c);
    return r
}, module.exports.calcTradeFee = function (a) {
    for (var t, n = 0, i = 0; i < a.length; ++i) (t = module.exports.skins[a[i]]) && (n += module.exports.rarities[t.rarity].fee || 0);
    return n
}, module.exports.getFreeKR = function (a) {
    return {kr: module.exports.freeKR[a].kr[0], rarity: module.exports.freeKR[a].rarity}
}, module.exports.freeKR = [
    {kr: [5], rarity: 0}, {kr: [10], rarity: 1}, {kr: [20], rarity: 2}, {
        kr: [500],
        rarity: 3
    }
], module.exports.previews = {
    1: {xOff: -2, yOff: -2.6, zRota: .2, scl: .001376794727638135},
    2: {xOff: -1.4, yOff: -.8, scl: .001148941748743716},
    3: {xOff: 0, yOff: -.2, scl: .000676917226130652},
    4: {xOff: -1.5, yOff: .5, scl: .000940741507537686},
    5: {xOff: -.8, yOff: .5, scl: .00079312502512562},
    6: {xOff: -1, yOff: -1.1, scl: 1.2},
    7: {xOff: -1, yOff: -.9, scl: .001221518472361808},
    8: {xOff: -1, yOff: -.6, scl: .0012179208743718641},
    9: {xOff: -1.2, yOff: -1, scl: .0010676876984924638},
    10: {scl: 1.6},
    14: {yOff: -2.5, scl: .0007874150753768881},
    15: {scl: .00098426884422111},
    16: {scl: 1.4, yOff: 1, xOff: -1},
    17: {xOff: 0, yOff: -.2, scl: 3e-4},
    19: {xOff: -1.4, yOff: -.8, scl: .0009095788844221084}
}, module.exports.skins = [
    {name: "Arctic Hunt", id: 0, weapon: 1, rarity: 1}, {
        name: "Autumn Hunt",
        id: 1,
        weapon: 1,
        rarity: 1
    }, {name: "Reticle Blaze", id: 2, weapon: 1, rarity: 2}, {
        name: "Digital Hunt",
        id: 3,
        weapon: 1,
        rarity: 0
    }, {name: "Moon Dragon", id: 4, weapon: 1, rarity: 3}, {
        name: "Scharfschütze",
        id: 5,
        weapon: 1,
        rarity: 1
    }, {name: "Woodland Sniper", id: 6, weapon: 1, rarity: 0}, {
        name: "Hazard Reticle",
        id: 7,
        weapon: 1,
        rarity: 1
    }, {name: "Kodac Reticle", id: 8, weapon: 1, rarity: 1}, {
        name: "Seafarer",
        id: 9,
        weapon: 1,
        rarity: 0
    }, {name: "Acid Breath", glow: !0, id: 10, weapon: 1, rarity: 3}, {
        name: "Trail Scout",
        id: 11,
        weapon: 1,
        rarity: 0
    }, {name: "Arctic AK", id: 0, weapon: 2, rarity: 1}, {
        name: "Autumn AK",
        id: 1,
        weapon: 2,
        rarity: 1
    }, {name: "Blaze AK", id: 2, weapon: 2, rarity: 2}, {
        name: "Digital AK",
        id: 3,
        weapon: 2,
        rarity: 0
    }, {name: "Luna Dragon", id: 4, weapon: 2, rarity: 3}, {
        name: "Flecken AK",
        id: 5,
        weapon: 2,
        rarity: 1
    }, {name: "Woodland AK", id: 6, weapon: 2, rarity: 0}, {
        name: "Hazard AK",
        id: 7,
        weapon: 2,
        rarity: 1
    }, {name: "Kodac AK", id: 8, weapon: 2, rarity: 1}, {
        name: "Seafarer AK",
        id: 9,
        weapon: 2,
        rarity: 0
    }, {name: "Trail AK", id: 10, weapon: 2, rarity: 0}, {
        name: "SMG Arctic",
        id: 0,
        weapon: 4,
        rarity: 1
    }, {name: "SMG Autumn", id: 1, weapon: 4, rarity: 1}, {
        name: "SMG Blaze",
        id: 2,
        weapon: 4,
        rarity: 2
    }, {name: "SMG Digital", id: 3, weapon: 4, rarity: 0}, {
        name: "SMG Flecken",
        id: 4,
        weapon: 4,
        rarity: 1
    }, {name: "SMG Woodland", id: 5, weapon: 4, rarity: 0}, {
        name: "SMG Hazard",
        id: 6,
        weapon: 4,
        rarity: 1
    }, {name: "SMG Kodac", id: 7, weapon: 4, rarity: 1}, {
        name: "SMG Seafarer",
        id: 8,
        weapon: 4,
        rarity: 0
    }, {name: "SMG Trail", id: 9, weapon: 4, rarity: 0}, {
        name: "Arctic Python",
        id: 0,
        weapon: 5,
        rarity: 1
    }, {name: "Autumn Python", id: 1, weapon: 5, rarity: 1}, {
        name: "Blaze Python",
        id: 2,
        weapon: 5,
        rarity: 2
    }, {name: "Digital Python", id: 3, weapon: 5, rarity: 0}, {
        name: "Flecken Python",
        id: 4,
        weapon: 5,
        rarity: 1
    }, {name: "Woodland", id: 5, weapon: 5, rarity: 0}, {
        name: "Hazard Python",
        id: 6,
        weapon: 5,
        rarity: 1
    }, {name: "Kodac Python", id: 7, weapon: 5, rarity: 1}, {
        name: "Seafarer",
        id: 8,
        weapon: 5,
        rarity: 0
    }, {name: "Trail Python", id: 9, weapon: 5, rarity: 0}, {
        name: "Arctic Slug",
        id: 0,
        weapon: 6,
        rarity: 1
    }, {name: "Autumn Slug", id: 1, weapon: 6, rarity: 1}, {
        name: "Twin Blaze",
        id: 2,
        weapon: 6,
        rarity: 2
    }, {name: "SG Digital", id: 3, weapon: 6, rarity: 0}, {
        name: "Flecken",
        id: 4,
        weapon: 6,
        rarity: 1
    }, {name: "Woodland", id: 5, weapon: 6, rarity: 0}, {
        name: "Hazard Slug",
        id: 6,
        weapon: 6,
        rarity: 1
    }, {name: "Kodac Slug", id: 7, weapon: 6, rarity: 1}, {
        name: "Buccaneer",
        id: 8,
        weapon: 6,
        rarity: 0
    }, {name: "SG Trail", id: 9, weapon: 6, rarity: 0}, {
        name: "Arctic LMG",
        id: 0,
        weapon: 7,
        rarity: 1
    }, {name: "Autumn LMG", id: 1, weapon: 7, rarity: 1}, {
        name: "Blaze LMG",
        id: 2,
        weapon: 7,
        rarity: 2
    }, {name: "Digital LMG", id: 3, weapon: 7, rarity: 0}, {
        name: "Flecken LMG",
        id: 4,
        weapon: 7,
        rarity: 1
    }, {name: "Woodland LMG", id: 5, weapon: 7, rarity: 0}, {
        name: "Hazard LMG",
        id: 6,
        weapon: 7,
        rarity: 1
    }, {name: "Kodac LMG", id: 7, weapon: 7, rarity: 1}, {
        name: "Seafarer LMG",
        id: 8,
        weapon: 7,
        rarity: 0
    }, {name: "Trail LMG", id: 9, weapon: 7, rarity: 0}, {
        name: "Arctic Auto",
        id: 0,
        weapon: 8,
        rarity: 1
    }, {name: "Autumn Auto", id: 1, weapon: 8, rarity: 1}, {
        name: "Blaze Auto",
        id: 2,
        weapon: 8,
        rarity: 2
    }, {name: "Digital Auto", id: 3, weapon: 8, rarity: 0}, {
        name: "Flecken Auto",
        id: 4,
        weapon: 8,
        rarity: 1
    }, {name: "Woodland Auto", id: 5, weapon: 8, rarity: 0}, {
        name: "Hazard Auto",
        id: 6,
        weapon: 8,
        rarity: 1
    }, {name: "Kodac Auto", id: 7, weapon: 8, rarity: 1}, {
        name: "Seafarer Auto",
        id: 8,
        weapon: 8,
        rarity: 0
    }, {name: "Trail Auto", id: 9, weapon: 8, rarity: 0}, {
        name: "Mach Auto",
        id: 10,
        creator: "AtarSt",
        weapon: 8,
        rarity: 1
    }, {name: "Arctic RL", id: 0, weapon: 9, rarity: 1}, {
        name: "Autumn RL",
        id: 1,
        weapon: 9,
        rarity: 1
    }, {name: "Blaze RL", id: 2, weapon: 9, rarity: 2}, {
        name: "Digital RL",
        id: 3,
        weapon: 9,
        rarity: 0
    }, {name: "Flecken RL", id: 4, weapon: 9, rarity: 1}, {
        name: "Woodland RL",
        id: 5,
        weapon: 9,
        rarity: 0
    }, {name: "Hazard RL", id: 6, weapon: 9, rarity: 1}, {
        name: "Kodac RL",
        id: 7,
        weapon: 9,
        rarity: 1
    }, {name: "Seafarer RL", id: 8, weapon: 9, rarity: 0}, {
        name: "Trail RL",
        id: 9,
        weapon: 9,
        rarity: 0
    }, {name: "101 Skullbreaker", id: 12, weapon: 1, rarity: 3}, {
        name: "Reticle Faded",
        id: 13,
        weapon: 1,
        rarity: 0
    }, {name: "Puma Sniper", id: 14, weapon: 1, rarity: 0}, {
        name: "Scoped Elite",
        id: 15,
        weapon: 1,
        rarity: 2
    }, {name: "Faded AK", id: 11, weapon: 2, rarity: 0}, {
        name: "Puma AR",
        id: 12,
        weapon: 2,
        rarity: 1
    }, {name: "SMG Fade", id: 10, weapon: 4, rarity: 0}, {
        name: "SMG Puma",
        id: 11,
        weapon: 4,
        rarity: 1
    }, {name: "Faded Python", id: 10, weapon: 5, rarity: 0}, {
        name: "Puma Python",
        id: 11,
        weapon: 5,
        rarity: 1
    }, {name: "SG Fade", id: 10, weapon: 6, rarity: 0}, {
        name: "Slug Puma",
        id: 11,
        weapon: 6,
        rarity: 1
    }, {name: "Faded LMG", id: 10, weapon: 7, rarity: 0}, {
        name: "Puma LMG",
        id: 11,
        weapon: 7,
        rarity: 1
    }, {name: "Faded MMR", id: 11, weapon: 8, rarity: 0}, {
        name: "Puma MMR",
        id: 12,
        weapon: 8,
        rarity: 1
    }, {name: "Faded RTL", id: 10, weapon: 9, rarity: 0}, {
        name: "Puma RTL",
        id: 11,
        weapon: 9,
        rarity: 1
    }, {name: "Scoped Carbon", id: 16, weapon: 1, rarity: 0}, {
        name: "Carbon AK",
        id: 13,
        weapon: 2,
        rarity: 0
    }, {name: "SMG Carbon", id: 12, weapon: 4, rarity: 0}, {
        name: "Carbon Python",
        id: 12,
        weapon: 5,
        rarity: 0
    }, {name: "SG Carbon", id: 12, weapon: 6, rarity: 0}, {
        name: "Carbon LMG",
        id: 12,
        weapon: 7,
        rarity: 0
    }, {name: "Carbon MMR", id: 13, weapon: 8, rarity: 0}, {
        name: "Carbon RTL",
        id: 12,
        weapon: 9,
        rarity: 0
    }, {name: "Neon Ripper", id: 14, glow: !0, weapon: 2, rarity: 4}, {
        name: "Top Hat",
        type: 1,
        keyW: "Head",
        scl: 2.5,
        sitOff: .4,
        yOff: -4,
        id: 1,
        rarity: 2
    }, {name: "SMG Spitfire", id: 13, weapon: 4, rarity: 3}, {
        name: "Cowboy Hat",
        type: 1,
        keyW: "Head",
        scl: 2.5,
        sitOff: .4,
        yOff: -3,
        id: 0,
        rarity: 0
    }, {name: "Flame Tamer", id: 13, pulsT: .0015, weapon: 5, glow: !0, rarity: 5}, {
        name: "Cool Cap",
        type: 1,
        keyW: "Head",
        scl: 2.5,
        sitOff: .4,
        yOff: -3,
        xOff: 2,
        id: 2,
        rarity: 1
    }, {
        name: "Jack O' Lantern",
        type: 1,
        keyW: "Head",
        scl: 2.8,
        glow: !0,
        sclMlt: 1.4,
        sitOff: 2.05,
        yOff: -4,
        id: 3,
        rarity: 3
    }, {
        name: "Medic Helmet",
        type: 1,
        keyW: "Head",
        scl: 2.8,
        sclMlt: 1,
        sitOff: .65,
        yOff: -2.5,
        id: 4,
        rarity: 2
    }, {name: "Neon Reaver", creator: "Electrode_", id: 17, glow: !0, weapon: 1, rarity: 4}, {
        name: "Sun Glasses",
        type: 1,
        keyW: "Head",
        scl: 2.8,
        sclMlt: 1,
        sitOff: 2.3,
        yOff: -5,
        xOff: 2,
        id: 5,
        rarity: 0
    }, {
        name: "Afro",
        type: 1,
        keyW: "Head",
        scl: 2,
        sclMlt: .9,
        sitOff: 1.4,
        yOff: -4,
        id: 6,
        rarity: 0
    }, {name: "Hard Hat", type: 1, keyW: "Head", scl: 3, sitOff: .4, yOff: -3, id: 7, rarity: 0}, {
        name: "Zombie Head",
        type: 1,
        keyW: "Head",
        scl: 2.8,
        glow: !0,
        sclMlt: 1.2,
        sitOff: 2.05,
        yOff: -4,
        id: 8,
        rarity: 3
    }, {name: "Barbed Rifle", id: 18, weapon: 1, rarity: 2}, {
        name: "Blushed Sniper",
        id: 19,
        weapon: 1,
        rarity: 0
    }, {name: "AWP Mech", id: 20, weapon: 1, rarity: 1}, {
        name: "Olympus Rifle",
        id: 21,
        weapon: 1,
        rarity: 2
    }, {name: "Scoped Tuscan", id: 22, weapon: 1, rarity: 1}, {
        name: "AWP Pacemaker",
        id: 23,
        weapon: 1,
        rarity: 4,
        glow: !0
    }, {name: "AR Wired", id: 15, weapon: 2, rarity: 2}, {
        name: "Blushed AK",
        id: 16,
        weapon: 2,
        rarity: 0
    }, {name: "Mach Rifle", id: 17, weapon: 2, rarity: 1}, {
        name: "Olympus Rifle",
        id: 18,
        weapon: 2,
        rarity: 2
    }, {name: "AR Tuscan", id: 19, weapon: 2, rarity: 1}, {
        name: "SMG Barbed",
        id: 14,
        weapon: 4,
        rarity: 2
    }, {name: "SMG Blossom", id: 15, weapon: 4, rarity: 0}, {
        name: "SMG Machinist",
        id: 16,
        weapon: 4,
        rarity: 1
    }, {name: "SMG Lazarus", id: 17, weapon: 4, rarity: 2}, {
        name: "SMG Tuscan",
        id: 18,
        weapon: 4,
        rarity: 1
    }, {name: "Barbed Python", id: 14, weapon: 5, rarity: 2}, {
        name: "Blushed Revolver",
        id: 15,
        weapon: 5,
        rarity: 0
    }, {name: "Machinist Python", id: 16, weapon: 5, rarity: 1}, {
        name: "REV Olympus",
        id: 17,
        weapon: 5,
        rarity: 2
    }, {name: "Tuscan Revolver", id: 18, weapon: 5, rarity: 1}, {
        name: "Coach Barb",
        id: 13,
        weapon: 6,
        rarity: 2
    }, {name: "Blossom", id: 14, weapon: 6, rarity: 0}, {
        name: "MD Frag",
        id: 15,
        weapon: 6,
        rarity: 1
    }, {name: "SG Olympus", id: 16, weapon: 6, rarity: 2}, {
        name: "SG Tuscan",
        id: 17,
        weapon: 6,
        rarity: 1
    }, {name: "Blushed LMG", id: 13, weapon: 7, rarity: 0}, {
        name: "Machinist LMG",
        id: 14,
        weapon: 7,
        rarity: 1
    }, {name: "Olympus LMG", id: 15, weapon: 7, rarity: 2}, {
        name: "Tuscan LMG",
        id: 16,
        weapon: 7,
        rarity: 1
    }, {name: "Barbed Auto", id: 14, weapon: 8, rarity: 2}, {
        name: "Blushed MMA",
        id: 15,
        weapon: 8,
        rarity: 0
    }, {name: "Auto Machinist", id: 16, weapon: 8, rarity: 1}, {
        name: "Olympus MMA",
        id: 17,
        weapon: 8,
        rarity: 2
    }, {name: "Tuscan MMA", id: 18, weapon: 8, rarity: 1}, {
        name: "Barbed Launcher",
        id: 13,
        weapon: 9,
        rarity: 2
    }, {name: "Blushed Launcher", id: 14, weapon: 9, rarity: 0}, {
        name: "Machinist Launcher",
        id: 15,
        weapon: 9,
        rarity: 1
    }, {name: "Olympus Launcher", id: 16, weapon: 9, rarity: 2}, {
        name: "Tuscan Launcher",
        id: 17,
        weapon: 9,
        rarity: 1
    }, {name: "Omen", glow: !0, id: 24, creator: "Zino", weapon: 1, rarity: 3}, {
        name: "Scoped Moss",
        id: 25,
        weapon: 1,
        rarity: 0
    }, {name: "Swamped Scope", id: 26, weapon: 1, rarity: 0}, {
        name: "Tiger Bolt",
        id: 27,
        weapon: 1,
        rarity: 2
    }, {name: "Zebra Bolt", id: 28, weapon: 1, rarity: 2}, {
        name: "Necron Bolt",
        id: 29,
        weapon: 1,
        rarity: 4,
        glow: !0
    }, {name: "Lava Bolt", id: 30, weapon: 1, rarity: 3}, {
        name: "Sky Bolt",
        id: 31,
        weapon: 1,
        rarity: 2
    }, {name: "AWP Iris", id: 32, weapon: 1, rarity: 1}, {
        name: "Bolt Wanderer",
        id: 33,
        weapon: 1,
        rarity: 1
    }, {name: "Mossy Rifle", id: 20, weapon: 2, rarity: 1}, {
        name: "Swamped AK",
        id: 21,
        weapon: 2,
        rarity: 0
    }, {name: "Tiger Rifle", id: 22, weapon: 2, rarity: 2}, {
        name: "Zebra Rifle",
        id: 23,
        weapon: 2,
        rarity: 2
    }, {name: "Plasma Rifle", id: 24, weapon: 2, rarity: 4, glow: !0}, {
        name: "Lava Rifle",
        id: 25,
        weapon: 2,
        glow: !0,
        rarity: 3
    }, {name: "Sky Rifle", id: 26, weapon: 2, rarity: 2}, {
        name: "Bark AK",
        id: 27,
        weapon: 2,
        rarity: 0
    }, {name: "Rifle Wanderer", id: 28, weapon: 2, rarity: 0}, {
        name: "SMG Growth",
        id: 19,
        weapon: 4,
        rarity: 1
    }, {name: "SMG Marsh", id: 20, weapon: 4, rarity: 0}, {
        name: "SMG Tigris",
        id: 21,
        weapon: 4,
        rarity: 2
    }, {name: "SMG Safari", id: 22, weapon: 4, rarity: 2}, {
        name: "Rapid Plasma",
        id: 23,
        weapon: 4,
        rarity: 4,
        glow: !0
    }, {name: "Lava SMG", id: 24, weapon: 4, rarity: 3, glow: !0}, {
        name: "UMP Atmos",
        id: 25,
        weapon: 4,
        rarity: 2
    }, {name: "Birch SMG", id: 26, weapon: 4, rarity: 0}, {
        name: "SMG Wanderer",
        id: 27,
        weapon: 4,
        rarity: 0
    }, {name: "Mossy Python", id: 19, weapon: 5, rarity: 1}, {
        name: "Swamped Revolver",
        id: 20,
        weapon: 5,
        rarity: 0
    }, {name: "Tiger Python", id: 21, weapon: 5, rarity: 2}, {
        name: "Zebra Python",
        id: 22,
        weapon: 5,
        rarity: 2
    }, {name: "Venomous", creator: "Rengar", glow: !0, id: 23, weapon: 5, rarity: 3}, {
        name: "Lava Revolver",
        id: 24,
        weapon: 5,
        rarity: 3
    }, {name: "Sky Python", id: 25, weapon: 5, rarity: 2, glow: !0}, {
        name: "Bark Python",
        id: 26,
        weapon: 5,
        rarity: 0
    }, {name: "Wanderer Python", id: 27, weapon: 5, rarity: 0}, {
        name: "Gabrand",
        id: 19,
        weapon: 6,
        rarity: 1
    }, {name: "Tennessee", id: 20, weapon: 6, rarity: 0}, {
        name: "SG Tigris",
        id: 21,
        weapon: 6,
        rarity: 2
    }, {name: "Safaris", id: 22, weapon: 6, rarity: 2}, {
        name: "Neuromance",
        id: 23,
        weapon: 6,
        rarity: 4,
        glow: !0
    }, {name: "Anatomis", id: 24, weapon: 6, rarity: 3, glow: !0}, {
        name: "Sky Pump",
        id: 25,
        weapon: 6,
        rarity: 2
    }, {name: "Bark Slug", id: 26, weapon: 6, rarity: 0}, {
        name: "Slug Wanderer",
        id: 27,
        weapon: 6,
        rarity: 0
    }, {name: "Mossy LMG", id: 17, weapon: 7, rarity: 1}, {
        name: "Swamped LMG",
        id: 18,
        weapon: 7,
        rarity: 0
    }, {name: "Tiger LMG", id: 19, weapon: 7, rarity: 2}, {
        name: "Zebra LMG",
        id: 20,
        weapon: 7,
        rarity: 2
    }, {name: "Heavy Plasma", id: 21, weapon: 7, rarity: 4, glow: !0}, {
        name: "Lava LMG",
        id: 22,
        weapon: 7,
        rarity: 3
    }, {name: "Sky LMG", id: 23, weapon: 7, rarity: 2, glow: !0}, {
        name: "Bark LMG",
        id: 24,
        weapon: 7,
        rarity: 0
    }, {name: "LMG Wanderer", id: 25, weapon: 7, rarity: 0}, {
        name: "Overgrowth",
        id: 19,
        weapon: 8,
        rarity: 1
    }, {name: "Marshland", id: 20, weapon: 8, rarity: 0}, {
        name: "Tiger MMA",
        id: 21,
        weapon: 8,
        rarity: 2
    }, {name: "Zebra MMA", id: 22, weapon: 8, rarity: 2}, {
        name: "MMA Plasma",
        id: 23,
        weapon: 8,
        rarity: 4,
        glow: !0
    }, {name: "Magnis", id: 24, weapon: 8, rarity: 3, glow: !0}, {
        name: "Sky AUTO",
        id: 25,
        weapon: 8,
        rarity: 2
    }, {name: "Bark AUTO", id: 26, weapon: 8, rarity: 0}, {
        name: "MMA Wanderer",
        id: 27,
        weapon: 8,
        rarity: 0
    }, {name: "Mossy Rocket", id: 18, weapon: 9, rarity: 1}, {
        name: "Swamped Launcher",
        id: 19,
        weapon: 9,
        rarity: 0
    }, {name: "Tiger Rocket", id: 20, weapon: 9, rarity: 2}, {
        name: "Zebra Launcher",
        id: 21,
        weapon: 9,
        rarity: 2
    }, {name: "Plasma Nuke", id: 22, weapon: 9, rarity: 4, glow: !0}, {
        name: "Lava Rocket",
        id: 23,
        weapon: 9,
        rarity: 3
    }, {name: "Sky Launcher", id: 24, weapon: 9, rarity: 2}, {
        name: "Bark Launcher",
        id: 25,
        weapon: 9,
        rarity: 0
    }, {name: "Wanderer Rocket", id: 26, weapon: 9, rarity: 0}, {
        name: "Purple Cap",
        id: 2,
        tex: 1,
        type: 1,
        keyW: "Head",
        scl: 2.5,
        sitOff: .4,
        yOff: -3,
        xOff: 2,
        rarity: 0
    }, {
        name: "Bear Mask",
        id: 9,
        type: 1,
        keyW: "Head",
        scl: 2.5,
        sclMlt: 1.3,
        sitOff: 2.05,
        yOff: -4,
        xOff: 1,
        rarity: 2
    }, {
        name: "Panda Mask",
        id: 9,
        tex: 1,
        type: 1,
        keyW: "Head",
        scl: 2.5,
        sclMlt: 1.3,
        sitOff: 2.05,
        yOff: -4,
        xOff: 1,
        rarity: 2
    }, {
        name: "Brown Beard",
        id: 11,
        type: 1,
        keyW: "Head",
        scl: 2.8,
        sclMlt: .9,
        sitOff: 2,
        yOff: -3,
        rarity: 2
    }, {
        name: "Blonde Beard",
        id: 11,
        tex: 1,
        type: 1,
        keyW: "Head",
        scl: 2.8,
        sclMlt: .9,
        sitOff: 2,
        yOff: -3,
        rarity: 2
    }, {
        name: "Skull Mask",
        id: 12,
        type: 1,
        keyW: "Head",
        scl: 3,
        glow: !0,
        sclMlt: 1.05,
        sitOff: 2.5,
        sitOffZ: 1.1,
        yOff: -4.5,
        xOff: -3,
        tex: 0,
        rarity: 3
    }, {
        name: "Red Beanie",
        id: 13,
        type: 1,
        keyW: "Head",
        scl: 3,
        sclMlt: 1.1,
        sitOff: .4,
        yOff: -3,
        tex: 0,
        rarity: 0
    }, {
        name: "Blue Beanie",
        id: 13,
        type: 1,
        keyW: "Head",
        scl: 3,
        sclMlt: 1.1,
        sitOff: .4,
        yOff: -3,
        tex: 1,
        rarity: 0
    }, {
        name: "Krunk Headset",
        id: 14,
        type: 1,
        keyW: "Head",
        scl: 2,
        sclMlt: 1.1,
        sitOff: 1.4,
        yOff: -4,
        rarity: 2
    }, {
        name: "Cherry Headset",
        id: 14,
        type: 1,
        keyW: "Head",
        tex: 1,
        scl: 2,
        sclMlt: 1.1,
        sitOff: 1.4,
        yOff: -4,
        rarity: 2
    }, {
        name: "Demonic Wings",
        id: 0,
        type: 2,
        keyW: "Back",
        glow: !0,
        scl: 3.5,
        sclMlt: 3,
        xOff: -1.5,
        sitOff: -1.3,
        sitOffZ: -1.4,
        yOff: -2,
        rarity: 4
    }, {
        name: "Bass Guitar",
        id: 1,
        type: 2,
        keyW: "Back",
        scl: 4,
        sclMlt: 3.8,
        sitOff: -1.3,
        sitOffZ: -1,
        yOff: -2,
        rarity: 2
    }, {
        name: "Samurai Blades",
        id: 2,
        type: 2,
        keyW: "Back",
        glow: !0,
        scl: .00048112055276382,
        sclMlt: .000406279577889448,
        sitOff: -1.3,
        sitOffZ: -.95,
        yOff: -1,
        xOff: -.5,
        rarity: 3
    }, {
        name: "Blood Harvest",
        id: 3,
        type: 2,
        keyW: "Back",
        glow: !0,
        scl: 5.1,
        sclMlt: 5,
        sitOff: -1.3,
        sitOffZ: -.95,
        yOff: -1,
        rarity: 3
    }, {
        name: "Panda Body",
        id: 4,
        type: 2,
        keyW: "Back",
        scl: 2.1,
        sclMlt: 1.3,
        sitOff: 2.2,
        sitOffZ: 0,
        yOff: -5,
        rarity: 3
    }, {
        name: "Bear Body",
        id: 4,
        tex: 1,
        type: 2,
        keyW: "Back",
        scl: 2.1,
        sclMlt: 1.3,
        sitOff: 2.2,
        sitOffZ: 0,
        yOff: -5,
        rarity: 3
    }, {
        name: "Angelic Wings",
        id: 5,
        type: 2,
        keyW: "Back",
        glow: !0,
        scl: 3.5,
        sclMlt: 3.6,
        xOff: -1.5,
        sitOff: -1.3,
        sitOffZ: -1.4,
        yOff: -2,
        rarity: 4
    }, {
        name: "Ninja Mask",
        id: 15,
        glow: !0,
        type: 1,
        keyW: "Head",
        scl: 2.5,
        sclMlt: 1.1,
        sitOff: 2.05,
        yOff: -4,
        xOff: 0,
        rarity: 3
    }, {
        name: "Halo",
        id: 16,
        glow: !0,
        type: 1,
        keyW: "Head",
        scl: 3.5,
        sclMlt: 1.1,
        sitOff: -.65,
        yOff: -1,
        rarity: 3
    }, {
        name: "Welder Mask",
        type: 1,
        keyW: "Head",
        scl: 2.5,
        sitOff: 2.1,
        yOff: -3,
        xOff: 1,
        id: 17,
        rarity: 1
    }, {
        name: "Diver Goggles",
        type: 1,
        keyW: "Head",
        scl: 2.5,
        sclMlt: .9,
        sitOff: 1,
        yOff: -1,
        id: 18,
        rarity: 1
    }, {
        name: "Mad Cap",
        type: 1,
        keyW: "Head",
        tex: 2,
        scl: 2.5,
        sitOff: .4,
        yOff: -3,
        xOff: 2,
        id: 2,
        rarity: 1
    }, {
        name: "Ace Cap",
        type: 1,
        keyW: "Head",
        tex: 3,
        scl: 2.5,
        sitOff: .4,
        yOff: -3,
        xOff: 2,
        id: 2,
        rarity: 1
    }, {
        name: "Ice Cap",
        type: 1,
        keyW: "Head",
        tex: 4,
        scl: 2.5,
        sitOff: .4,
        yOff: -3,
        xOff: 2,
        id: 2,
        rarity: 1
    }, {
        name: "Soldier Pack",
        id: 6,
        type: 2,
        keyW: "Back",
        glow: !0,
        scl: 2.6,
        sclMlt: 1.8,
        xOff: 1,
        sitOff: 1.3,
        sitOffZ: -1.75,
        yOff: -5,
        rarity: 1
    }, {
        name: "Robo Wings",
        id: 7,
        type: 2,
        keyW: "Back",
        glow: !0,
        scl: 5,
        sclMlt: 3.9,
        xOff: -3.5,
        sitOff: -1.3,
        sitOffZ: -.75,
        yOff: -4,
        rarity: 4
    }, {
        name: "Basket",
        id: 8,
        type: 2,
        keyW: "Back",
        scl: 3.5,
        sclMlt: 2,
        xOff: -1.5,
        sitOff: .75,
        sitOffZ: -.8,
        yOff: -4,
        rarity: 1
    }, {
        name: "Baby Panda",
        id: 9,
        type: 2,
        keyW: "Back",
        scl: 3.5,
        sclMlt: 2,
        xOff: 1,
        sitOff: .75,
        sitOffZ: -.8,
        yOff: -5,
        xRot: Math.PI,
        rarity: 3
    }, {
        name: "Sturm Helmet",
        type: 1,
        keyW: "Head",
        tex: 1,
        scl: 2.8,
        sclMlt: 1,
        sitOff: .65,
        yOff: -2.5,
        id: 4,
        rarity: 1
    }, {
        name: "Brown Afro",
        type: 1,
        keyW: "Head",
        tex: 1,
        scl: 2,
        sclMlt: .9,
        sitOff: 1.4,
        yOff: -4,
        id: 6,
        rarity: 0
    }, {
        name: "Acid Skull",
        id: 12,
        type: 1,
        keyW: "Head",
        tex: 1,
        scl: 3,
        glow: !0,
        sclMlt: 1.05,
        sitOff: 2.5,
        sitOffZ: 1.1,
        yOff: -4.5,
        xOff: -3,
        rarity: 3
    }, {
        name: "Uranium",
        type: 1,
        keyW: "Head",
        tex: 1,
        scl: 2.5,
        sitOff: 2.1,
        yOff: -3,
        xOff: 1,
        id: 17,
        rarity: 2
    }, {
        name: "Panda King",
        id: 19,
        glow: !0,
        type: 1,
        keyW: "Head",
        scl: 2.5,
        sclMlt: 1.3,
        sitOff: 2.05,
        yOff: -4,
        xOff: 1,
        rarity: 3
    }, {name: "Kolt Rifle", creator: "iSpy", id: 35, weapon: 1, rarity: 3}, {
        name: "Pace Dore",
        id: 34,
        glow: !0,
        weapon: 1,
        rarity: 4
    }, {name: "Shot Element", creator: "Electrode_", glow: !0, id: 28, weapon: 6, rarity: 3}, {
        name: "Warp Sequence",
        creator: "Electrode_",
        id: 28,
        glow: !0,
        weapon: 4,
        rarity: 4
    }, {name: "Radioactive", creator: "Electrode_", glow: !0, id: 29, weapon: 5, rarity: 4}, {
        name: "Targeted",
        creator: "Subza",
        glow: !0,
        id: 28,
        weapon: 5,
        rarity: 3
    }, {
        name: "Robot Helmet",
        type: 1,
        keyW: "Head",
        glow: !0,
        scl: 2.4,
        sclMlt: 1,
        sitOff: 2,
        yOff: -3.4,
        id: 20,
        rarity: 3
    }, {
        name: "Knight Helmet",
        type: 1,
        keyW: "Head",
        scl: 2.3,
        sclMlt: 1,
        sitOff: 2,
        yOff: -3.2,
        id: 21,
        rarity: 3
    }, {
        name: "Cat Ears",
        type: 1,
        keyW: "Head",
        scl: 2.5,
        sclMlt: 1.2,
        sitOff: 1.65,
        yOff: -3.2,
        id: 22,
        rarity: 2
    }, {
        name: "Snowman",
        type: 1,
        keyW: "Head",
        scl: 2.2,
        sclMlt: 1,
        sitOff: 2.05,
        yOff: -3.2,
        id: 23,
        rarity: 2
    }, {
        name: "Trendy Biker",
        type: 1,
        keyW: "Head",
        scl: 2.2,
        sclMlt: 1,
        sitOff: 1.8,
        yOff: -3.2,
        id: 24,
        rarity: 3
    }, {
        name: "Golden Crown",
        type: 1,
        keyW: "Head",
        glow: !0,
        scl: 2.4,
        sclMlt: 1,
        sitOff: .65,
        yOff: -3.2,
        id: 25,
        rarity: 3
    }, {
        name: "Master Drinker",
        type: 1,
        keyW: "Head",
        scl: 2.4,
        sclMlt: 1,
        sitOff: .65,
        yOff: -2.7,
        id: 26,
        rarity: 3
    }, {
        name: "Pig Head",
        type: 1,
        keyW: "Head",
        scl: 2.5,
        sclMlt: 1,
        sitOff: 2.05,
        yOff: -3.2,
        id: 27,
        rarity: 3
    }, {
        name: "Red Bandana",
        type: 1,
        keyW: "Head",
        scl: 2.2,
        sclMlt: 1,
        sitOff: 1.6,
        yOff: -3.2,
        id: 28,
        rarity: 1
    }, {
        name: "Sheriff",
        type: 1,
        keyW: "Head",
        scl: 2.2,
        sclMlt: 1,
        sitOff: 2.05,
        yOff: -3.2,
        id: 29,
        rarity: 4
    }, {
        name: "Bandit",
        type: 1,
        keyW: "Head",
        glow: !0,
        scl: 2.2,
        sclMlt: 1,
        sitOff: 2.05,
        yOff: -3.2,
        id: 30,
        rarity: 4
    }, {name: "Vlaine", id: 36, weapon: 1, rarity: 1}, {
        name: "AWP Supersport",
        creator: "Kitter",
        id: 37,
        weapon: 1,
        rarity: 2
    }, {name: "Reine", id: 38, weapon: 1, rarity: 3}, {
        name: "Melted",
        glow: !0,
        id: 39,
        weapon: 1,
        rarity: 4
    }, {name: "Viper", glow: !0, id: 40, weapon: 1, rarity: 3}, {
        name: "Razor",
        glow: !0,
        id: 41,
        weapon: 1,
        rarity: 4
    }, {name: "Lazor", id: 29, glow: !0, weapon: 2, rarity: 4}, {
        name: "Uzera",
        id: 2,
        glow: !0,
        weapon: 10,
        rarity: 4
    }, {name: "Tazor", glow: !0, id: 7, weapon: 10, rarity: 3}, {
        name: "Dual Woodland",
        id: 0,
        weapon: 10,
        rarity: 1
    }, {name: "Flecken Uzi", id: 1, weapon: 10, rarity: 1}, {
        name: "Dual Seafarer",
        id: 3,
        weapon: 10,
        rarity: 2
    }, {name: "Rapid Digital", id: 4, weapon: 10, rarity: 1}, {
        name: "Sap Uzi",
        id: 5,
        weapon: 10,
        rarity: 0
    }, {name: "Torn Dual", id: 6, weapon: 10, rarity: 1}, {
        name: "Haste",
        glow: !0,
        id: 42,
        weapon: 1,
        rarity: 3
    }, {name: "Leine", id: 43, weapon: 1, rarity: 3}, {
        name: "Lore",
        glow: !0,
        id: 44,
        weapon: 1,
        rarity: 4
    }, {name: "Reaver", glow: !0, id: 45, weapon: 1, rarity: 4}, {
        name: "Splixen",
        glow: !0,
        id: 46,
        weapon: 1,
        rarity: 4
    }, {name: "AWP Stream", creator: "Electrode_", glow: !0, id: 47, weapon: 1, rarity: 4}, {
        name: "Circuit",
        creator: "Electrode_",
        glow: !0,
        id: 30,
        weapon: 2,
        rarity: 4
    }, {name: "SMG Iris", id: 29, weapon: 4, rarity: 2}, {
        name: "SMG Venom",
        id: 30,
        weapon: 4,
        rarity: 2,
        glow: !0
    }, {name: "SMG Wingman", id: 31, weapon: 4, rarity: 2}, {
        name: "x0n-voX",
        creator: "???",
        pat: 0,
        tex: "weapons/pat/0",
        sameGlow: !0,
        movT: 1e-4,
        weapon: 4,
        rarity: 5
    }, {
        name: "1Ad-dA0",
        creator: "???",
        pat: 0,
        tex: "weapons/pat/0",
        sameGlow: !0,
        movT: 1e-4,
        weapon: 2,
        rarity: 5
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        weapon: 2,
        rarity: 5
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        weapon: 4,
        rarity: 5
    }, {name: "UMP Saphire", id: 32, weapon: 4, rarity: 1}, {
        name: "UMP Jade",
        id: 33,
        weapon: 4,
        rarity: 1
    }, {name: "UMP Plexus", id: 34, weapon: 4, rarity: 1}, {
        name: "UMP Lapis",
        id: 35,
        weapon: 4,
        rarity: 0
    }, {name: "Perplex", id: 36, weapon: 4, rarity: 0}, {
        name: "UMP Torpe",
        id: 37,
        weapon: 4,
        rarity: 0
    }, {name: "SMG Como", id: 38, weapon: 4, rarity: 0}, {
        name: "SMG Liquid",
        id: 39,
        weapon: 4,
        rarity: 0
    }, {name: "Clementine", id: 40, weapon: 4, rarity: 1}, {
        name: "Dropper",
        id: 41,
        weapon: 4,
        rarity: 0
    }, {name: "SMG Auburn", id: 42, weapon: 4, rarity: 1}, {
        name: "UMP Laurel",
        id: 43,
        weapon: 4,
        rarity: 1
    }, {name: "UMP Crimson", id: 44, weapon: 4, rarity: 1}, {
        name: "UMP Azure",
        id: 45,
        weapon: 4,
        rarity: 1
    }, {name: "Laguna", id: 46, weapon: 4, rarity: 1}, {
        name: "UMP Cygenta",
        id: 47,
        weapon: 4,
        rarity: 1
    }, {name: "UMP Cygentro", id: 48, weapon: 4, rarity: 2}, {
        name: "Chartreuse",
        id: 49,
        weapon: 4,
        rarity: 2
    }, {name: "UMP Tortobe", id: 50, weapon: 4, rarity: 2}, {
        name: "UMP Octo",
        id: 51,
        weapon: 4,
        rarity: 2
    }, {name: "UMP Versate", id: 52, weapon: 4, rarity: 2}, {
        name: "SMG Purpur",
        id: 53,
        weapon: 4,
        rarity: 2
    }, {name: "Leaf", id: 54, weapon: 4, rarity: 0}, {name: "Flame", id: 55, weapon: 4, rarity: 0}, {
        name: "Aqua",
        id: 56,
        weapon: 4,
        rarity: 0
    }, {name: "Gravel", id: 57, weapon: 4, rarity: 0}, {
        name: "AR Saphire",
        id: 31,
        weapon: 2,
        rarity: 1
    }, {name: "AR Jade", id: 32, weapon: 2, rarity: 1}, {
        name: "AR Plexus",
        id: 33,
        weapon: 2,
        rarity: 1
    }, {name: "AR Lapis", id: 34, weapon: 2, rarity: 1}, {
        name: "Perplex",
        id: 35,
        weapon: 2,
        rarity: 0
    }, {name: "Trople", id: 36, weapon: 2, rarity: 0}, {
        name: "AR Altis",
        id: 37,
        weapon: 2,
        rarity: 1
    }, {name: "Liquid", id: 38, weapon: 2, rarity: 1}, {
        name: "Clementine",
        id: 39,
        weapon: 2,
        rarity: 1
    }, {name: "Dropper", id: 40, weapon: 2, rarity: 0}, {
        name: "Laurel",
        id: 41,
        weapon: 2,
        rarity: 1
    }, {name: "Crimson", id: 42, weapon: 2, rarity: 1}, {name: "Azure", id: 43, weapon: 2, rarity: 1}, {
        name: "Laguna",
        id: 44,
        weapon: 2,
        rarity: 1
    }, {name: "Cygenta", id: 45, weapon: 2, rarity: 1}, {
        name: "Cygento",
        id: 46,
        weapon: 2,
        rarity: 2
    }, {name: "Chartreuse", id: 47, weapon: 2, rarity: 2}, {
        name: "Tortobe",
        id: 48,
        weapon: 2,
        rarity: 2
    }, {name: "AK Octo", id: 49, weapon: 2, rarity: 2}, {
        name: "Versate",
        id: 50,
        weapon: 2,
        rarity: 2
    }, {name: "Purpur", id: 51, weapon: 2, rarity: 2}, {name: "Leaf", id: 52, weapon: 2, rarity: 0}, {
        name: "Flame",
        id: 53,
        weapon: 2,
        rarity: 0
    }, {name: "Aqua", id: 54, weapon: 2, rarity: 0}, {name: "Gravel", id: 55, weapon: 2, rarity: 0}, {
        name: "Saphire",
        id: 28,
        weapon: 8,
        rarity: 1
    }, {name: "Jade", id: 29, weapon: 8, rarity: 1}, {name: "Plexus", id: 30, weapon: 8, rarity: 1}, {
        name: "Lapis",
        id: 31,
        weapon: 8,
        rarity: 1
    }, {name: "Perplexum", id: 32, weapon: 8, rarity: 0}, {
        name: "Torped",
        id: 33,
        weapon: 8,
        rarity: 0
    }, {name: "Commo", id: 34, weapon: 8, rarity: 0}, {
        name: "MMA Liquid",
        id: 35,
        weapon: 8,
        rarity: 1
    }, {name: "Dropper", id: 36, weapon: 8, rarity: 0}, {
        name: "MMA Auburn",
        id: 37,
        weapon: 8,
        rarity: 1
    }, {name: "MMA Laurel", id: 38, weapon: 8, rarity: 1}, {
        name: "MMA Crimson",
        id: 39,
        weapon: 8,
        rarity: 1
    }, {name: "MMA Azure", id: 40, weapon: 8, rarity: 1}, {
        name: "MMA Laguna",
        id: 41,
        weapon: 8,
        rarity: 1
    }, {name: "MMA Cygneta", id: 42, weapon: 8, rarity: 1}, {
        name: "MMA Cygneto",
        id: 43,
        weapon: 8,
        rarity: 2
    }, {name: "M14 Chartreuse", id: 44, weapon: 8, rarity: 2}, {
        name: "MMA Tortobe",
        id: 45,
        weapon: 8,
        rarity: 2
    }, {name: "MMA Octo", id: 46, weapon: 8, rarity: 2}, {
        name: "MMA Versate",
        id: 47,
        weapon: 8,
        rarity: 2
    }, {name: "MMA Purpur", id: 48, weapon: 8, rarity: 2}, {
        name: "Nature",
        id: 49,
        weapon: 8,
        rarity: 0
    }, {name: "Flame", id: 50, weapon: 8, rarity: 0}, {name: "Aqua", id: 51, weapon: 8, rarity: 0}, {
        name: "Earth",
        id: 52,
        weapon: 8,
        rarity: 0
    }, {name: "Black Ice", creator: "Electrode_", id: 53, weapon: 8, rarity: 2}, {
        name: "Mach 3",
        creator: "Jytesh",
        id: 54,
        weapon: 8,
        rarity: 1
    }, {name: "Bloodripper", creator: "Jytesh", id: 55, weapon: 8, rarity: 1}, {
        name: "Theta",
        creator: "Floatingpoint",
        seas: 2,
        id: 48,
        weapon: 1,
        rarity: 3
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        weapon: 1,
        rarity: 5
    }, {
        name: "Diablo Wings",
        id: 10,
        type: 2,
        keyW: "Back",
        scl: .0005593478391959849,
        sclMlt: .0006552360402010109,
        xOff: -3,
        sitOff: -1.3,
        sitOffZ: -1.4,
        yOff: -2,
        rarity: 4
    }, {name: "AK Gold Rush", creator: "_irizu", id: 56, weapon: 2, rarity: 3, seas: 2}, {
        name: "AK Mortal",
        creator: "_irizu",
        glow: !0,
        id: 57,
        weapon: 2,
        rarity: 4
    }, {name: "nV Dragon", creator: "nightly-build7", id: 51, weapon: 1, rarity: 3}, {
        name: "Cherry Blossom",
        creator: "jonschmiddy",
        id: 50,
        weapon: 1,
        rarity: 2
    }, {name: "Vapormoon", creator: "jonschmiddy", id: 58, weapon: 2, rarity: 2}, {
        name: "Tesselate",
        creator: "jonschmiddy",
        id: 59,
        weapon: 2,
        rarity: 2
    }, {name: "Polydrive", creator: "Ziggy", id: 49, weapon: 1, rarity: 2}, {
        name: "Safran",
        id: 29,
        weapon: 6,
        rarity: 2
    }, {name: "Purple Rain", id: 30, weapon: 6, rarity: 2}, {
        name: "Cobra",
        id: 31,
        weapon: 6,
        rarity: 2
    }, {name: "Spectrum", id: 32, weapon: 6, rarity: 2}, {
        name: "Anodized",
        creator: "Blitz-.",
        id: 33,
        weapon: 6,
        rarity: 3
    }, {name: "Blunderbuss", creator: "Blitz-.", id: 34, weapon: 6, rarity: 2}, {
        name: "Tv Tron A",
        type: 1,
        keyW: "Head",
        glow: !0,
        scl: 1,
        sclMlt: .6,
        sitOff: 2.05,
        yOff: -3.2,
        id: 32,
        rarity: 4
    }, {
        name: "Tv Tron B",
        tex: 1,
        type: 1,
        keyW: "Head",
        glow: !0,
        scl: 1,
        sclMlt: .6,
        sitOff: 2.05,
        yOff: -3.2,
        id: 32,
        rarity: 4
    }, {
        name: "Hollow Fade",
        keyW: "Knife",
        animInd: 1,
        glow: !0,
        tex: 2,
        id: 0,
        type: 3,
        scl: 2,
        sclMlt: .9,
        yOff: -2,
        rarity: 5
    }, {
        name: "Tv Tron C",
        tex: 2,
        type: 1,
        keyW: "Head",
        glow: !0,
        scl: 1,
        sclMlt: .6,
        sitOff: 2.05,
        yOff: -3.2,
        id: 32,
        rarity: 4
    }, {
        name: "Tv Tron D",
        tex: 3,
        type: 1,
        keyW: "Head",
        glow: !0,
        scl: 1,
        sclMlt: .6,
        sitOff: 2.05,
        yOff: -3.2,
        id: 32,
        rarity: 4
    }, {name: "AWP Dazzle", glow: !0, id: 53, weapon: 1, rarity: 4}, {
        name: "Octodance",
        glow: !0,
        id: 54,
        weapon: 1,
        rarity: 4
    }, {name: "Ice Fade", glow: !0, id: 55, weapon: 1, rarity: 4}, {
        name: "Frostlance",
        keyW: "Knife",
        animInd: 1,
        glow: !0,
        tex: 3,
        id: 0,
        type: 3,
        scl: 2,
        sclMlt: .9,
        yOff: -2,
        rarity: 5
    }, {
        name: "Frostbite",
        limT: "Gift",
        keyW: "Axe",
        priceMlt: 4,
        animInd: 1,
        glow: !0,
        id: 1,
        type: 3,
        scl: 2,
        sclMlt: .9,
        yOff: -.5,
        rarity: 6
    }, {name: "Arctic", id: 0, weapon: 15, rarity: 1}, {
        name: "Autumn Burst",
        id: 1,
        weapon: 15,
        rarity: 1
    }, {name: "Reticle Burst", id: 2, weapon: 15, rarity: 2}, {
        name: "Digital Burst",
        id: 3,
        weapon: 15,
        rarity: 0
    }, {name: "Bushwalker", id: 4, weapon: 15, rarity: 1}, {
        name: "Woodland",
        id: 5,
        weapon: 15,
        rarity: 0
    }, {name: "Burst Hazard", id: 6, weapon: 15, rarity: 1}, {
        name: "Kodac Famas",
        id: 7,
        weapon: 15,
        rarity: 1
    }, {name: "Seafarer G2", id: 8, weapon: 15, rarity: 0}, {
        name: "G2 Trail",
        id: 9,
        weapon: 15,
        rarity: 0
    }, {name: "Burst Fade", id: 10, weapon: 15, rarity: 0}, {
        name: "G2 Puma",
        id: 11,
        weapon: 15,
        rarity: 0
    }, {name: "Burst Carbo", id: 12, weapon: 15, rarity: 0}, {
        name: "G2 Barb",
        id: 13,
        weapon: 15,
        rarity: 2
    }, {name: "F1 Blush", id: 14, weapon: 15, rarity: 0}, {
        name: "Machinist",
        id: 15,
        weapon: 15,
        rarity: 1
    }, {name: "Triple Olympus", id: 16, weapon: 15, rarity: 2}, {
        name: "Honey Badger",
        id: 17,
        weapon: 15,
        rarity: 1
    }, {name: "G2 Moss", id: 18, weapon: 15, rarity: 1}, {
        name: "F1 Marshland",
        id: 19,
        weapon: 15,
        rarity: 1
    }, {name: "G2 Tigris", id: 20, weapon: 15, rarity: 2}, {
        name: "Zebra Burst",
        id: 21,
        weapon: 15,
        rarity: 2
    }, {name: "Skyfarer", id: 22, weapon: 15, rarity: 2}, {
        name: "Commando Fade",
        id: 23,
        weapon: 15,
        rarity: 2
    }, {name: "Mindseeker", id: 24, glow: !0, weapon: 15, rarity: 4}, {
        name: "Intervention VI",
        mid: 0,
        glow: !0,
        pulsT: .0015,
        scl: .00094830394974876,
        mScl: .0010536710552764,
        zOff: -.25,
        seas: 2,
        yOff: .05,
        weapon: 1,
        rarity: 5
    }, {
        name: "Intervention XI",
        mid: 0,
        midT: 1,
        glow: !0,
        seas: 2,
        pulsT: .0015,
        scl: .00094830394974876,
        mScl: .0010536710552764,
        zOff: -.25,
        yOff: .05,
        weapon: 1,
        rarity: 5
    }, {
        name: "Soul Fang",
        keyW: "Knife",
        animInd: 1,
        glow: !0,
        pulsT: .1,
        id: 2,
        type: 3,
        scl: 3,
        seas: 2,
        sclMlt: .98,
        yOff: -2,
        rarity: 5
    }, {
        name: "Dusk Fang",
        keyW: "Knife",
        animInd: 1,
        glow: !0,
        tex: 4,
        id: 0,
        type: 3,
        scl: 2,
        sclMlt: .9,
        yOff: -2,
        rarity: 4
    }, {name: "Boneclaw", id: 56, weapon: 1, rarity: 2, seas: 2}, {
        name: "Blue Digital",
        id: 57,
        weapon: 1,
        rarity: 1,
        seas: 2
    }, {name: "Green Digital", id: 58, weapon: 1, rarity: 1, seas: 2}, {
        name: "Purple Digital",
        id: 59,
        weapon: 1,
        rarity: 1,
        seas: 2
    }, {name: "Red Digital", id: 60, weapon: 1, rarity: 1, seas: 2}, {
        name: "Cascade",
        id: 61,
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Pink Poly", id: 62, weapon: 1, rarity: 1, seas: 2}, {
        name: "Orange Poly",
        id: 63,
        weapon: 1,
        rarity: 1,
        seas: 2
    }, {name: "Green Poly", id: 64, weapon: 1, rarity: 1, seas: 2}, {
        name: "Blue Poly",
        id: 65,
        weapon: 1,
        rarity: 1,
        seas: 2
    }, {name: "War Torn", id: 66, weapon: 1, rarity: 2, seas: 2}, {
        name: "Spook",
        id: 67,
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {name: "Pink Drip", id: 68, weapon: 1, rarity: 1, seas: 2}, {
        name: "Blue Drip",
        id: 69,
        weapon: 1,
        rarity: 1,
        seas: 2
    }, {name: "Sepia", id: 70, weapon: 1, rarity: 0, seas: 2}, {
        name: "Olive",
        id: 71,
        weapon: 1,
        rarity: 0,
        seas: 2
    }, {name: "Spruce", id: 72, weapon: 1, rarity: 0, seas: 2}, {
        name: "Dijon",
        id: 73,
        weapon: 1,
        rarity: 0,
        seas: 2
    }, {name: "Red Splat", id: 74, weapon: 1, rarity: 1, seas: 2}, {
        name: "Purple Splat",
        id: 75,
        weapon: 1,
        rarity: 1,
        seas: 2
    }, {name: "Orange Splat", id: 76, weapon: 1, rarity: 1, seas: 2}, {
        name: "Green Splat",
        id: 77,
        weapon: 1,
        rarity: 1,
        seas: 2
    }, {name: "Yellow Poly", id: 78, weapon: 1, rarity: 1, seas: 2}, {
        name: "Red Poly",
        id: 79,
        weapon: 1,
        rarity: 1,
        seas: 2
    }, {name: "Green Poly", id: 80, weapon: 1, rarity: 1, seas: 2}, {
        name: "Blue Poly",
        id: 81,
        weapon: 1,
        rarity: 1,
        seas: 2
    }, {name: "Sandstorm", id: 82, weapon: 1, rarity: 0, seas: 2}, {
        name: "Fabrica",
        id: 83,
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Azazel", creator: "Lxckless", id: 84, weapon: 1, rarity: 2, seas: 2}, {
        name: "Picnic",
        id: 85,
        weapon: 1,
        rarity: 1,
        seas: 2
    }, {name: "Picasso", id: 86, weapon: 1, rarity: 0, seas: 2}, {
        name: "Cracked",
        id: 87,
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Fire Stream", id: 88, weapon: 1, rarity: 2, seas: 2}, {
        name: "Ripped Sun",
        id: 89,
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Bliss Flow", id: 90, weapon: 1, rarity: 2, seas: 2}, {
        name: "Kenzo",
        id: 91,
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {name: "Snowy", id: 92, weapon: 1, rarity: 0, seas: 2}, {
        name: "Galaxy",
        id: 93,
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Ducky", id: 94, weapon: 1, rarity: 0, seas: 2}, {
        name: "Graphite",
        id: 95,
        weapon: 1,
        rarity: 0,
        seas: 2
    }, {name: "Porcelain", id: 96, weapon: 1, rarity: 0, seas: 2}, {
        name: "Neon Spill",
        id: 97,
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {name: "Danger", id: 98, weapon: 1, rarity: 0, seas: 2}, {
        name: "Paint Spill",
        id: 99,
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Goop", id: 100, weapon: 1, rarity: 2, seas: 2}, {
        name: "Cerise",
        id: 101,
        weapon: 1,
        rarity: 0,
        seas: 2
    }, {name: "Orange Drip", id: 102, weapon: 1, rarity: 0, seas: 2}, {
        name: "Red Drip",
        id: 103,
        weapon: 1,
        rarity: 0,
        seas: 2
    }, {name: "Green Drip", id: 104, weapon: 1, rarity: 0, seas: 2}, {
        name: "Flame Viper",
        id: 105,
        weapon: 1,
        rarity: 4,
        glow: !0,
        seas: 2
    }, {name: "Red Phantom", id: 106, weapon: 1, rarity: 4, glow: !0, seas: 2}, {
        name: "Arctic",
        creator: "Blitz",
        id: 107,
        weapon: 1,
        rarity: 1,
        seas: 2
    }, {name: "Magma Core", id: 108, weapon: 1, rarity: 4, animInd: 1, pulsT: .1, glow: !0, seas: 2}, {
        name: "Wired",
        creator: "Floatingpoint",
        id: 109,
        weapon: 1,
        rarity: 3,
        seas: 2
    }, {name: "Kings", creator: "Floatingpoint", id: 110, weapon: 1, rarity: 3, seas: 2}, {
        name: "Tessalate",
        id: 111,
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Sunset", creator: "Graham", id: 112, weapon: 1, rarity: 3, glow: !0, seas: 2}, {
        name: "Poly Blush",
        id: 113,
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Cuircuitor", creator: "Gnnr", id: 114, weapon: 1, rarity: 3, glow: !0, seas: 2}, {
        name: "Marbled .50",
        creator: "Blitz",
        id: 115,
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Exoscarlet", creator: "CyAnIdE", id: 116, weapon: 1, rarity: 1, seas: 2}, {
        name: "Sorable V",
        creator: "Zino",
        id: 117,
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {name: "Boneclaw", id: 60, weapon: 2, rarity: 2, seas: 2}, {
        name: "Blue Digital",
        id: 61,
        weapon: 2,
        rarity: 1,
        seas: 2
    }, {name: "Green Digital", id: 62, weapon: 2, rarity: 1, seas: 2}, {
        name: "Purple Digital",
        id: 63,
        weapon: 2,
        rarity: 1,
        seas: 2
    }, {name: "Red Digital", id: 64, weapon: 2, rarity: 1, seas: 2}, {
        name: "Cascade",
        id: 65,
        weapon: 2,
        rarity: 2,
        seas: 2
    }, {name: "Pink Poly", id: 66, weapon: 2, rarity: 1, seas: 2}, {
        name: "Orange Poly",
        id: 67,
        weapon: 2,
        rarity: 1,
        seas: 2
    }, {name: "Green Poly", id: 68, weapon: 2, rarity: 1, seas: 2}, {
        name: "Blue Poly",
        id: 69,
        weapon: 2,
        rarity: 1,
        seas: 2
    }, {name: "War Torn", id: 70, weapon: 2, rarity: 2, seas: 2}, {
        name: "Phantasma",
        id: 72,
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {name: "Pink Drip", id: 73, weapon: 2, rarity: 1, seas: 2}, {
        name: "Blue Drip",
        id: 74,
        weapon: 2,
        rarity: 1,
        seas: 2
    }, {name: "Sepia", id: 75, weapon: 2, rarity: 0, seas: 2}, {
        name: "Olive",
        id: 76,
        weapon: 2,
        rarity: 0,
        seas: 2
    }, {name: "Spruce", id: 77, weapon: 2, rarity: 0, seas: 2}, {
        name: "Dijon",
        id: 78,
        weapon: 2,
        rarity: 0,
        seas: 2
    }, {name: "Red Splat", id: 79, weapon: 2, rarity: 1, seas: 2}, {
        name: "Purple Splat",
        id: 80,
        weapon: 2,
        rarity: 1,
        seas: 2
    }, {name: "Orange Splat", id: 81, weapon: 2, rarity: 1, seas: 2}, {
        name: "Green Splat",
        id: 82,
        weapon: 2,
        rarity: 1,
        seas: 2
    }, {name: "Yellow Poly", id: 83, weapon: 2, rarity: 1, seas: 2}, {
        name: "Red Poly",
        id: 84,
        weapon: 2,
        rarity: 1,
        seas: 2
    }, {name: "Green Poly", id: 85, weapon: 2, rarity: 1, seas: 2}, {
        name: "Blue Poly",
        id: 86,
        weapon: 2,
        rarity: 1,
        seas: 2
    }, {name: "Sandstorm", id: 87, weapon: 2, rarity: 0, seas: 2}, {
        name: "Fabrica",
        id: 88,
        weapon: 2,
        rarity: 2,
        seas: 2
    }, {name: "Zebrik", id: 89, weapon: 2, rarity: 3, glow: !0, seas: 2}, {
        name: "Picnic",
        id: 90,
        weapon: 2,
        rarity: 0,
        seas: 2
    }, {name: "Picasso", id: 91, weapon: 2, rarity: 0, seas: 2}, {
        name: "Cracked",
        id: 92,
        weapon: 2,
        rarity: 2,
        seas: 2
    }, {name: "Fire Stream", id: 93, weapon: 2, rarity: 2, seas: 2}, {
        name: "Ripped Sun",
        id: 94,
        weapon: 2,
        rarity: 2,
        seas: 2
    }, {name: "Bliss Flow", id: 95, weapon: 2, rarity: 2, seas: 2}, {
        name: "Snowy",
        id: 96,
        weapon: 2,
        rarity: 0,
        seas: 2
    }, {name: "Ducky", id: 97, weapon: 2, rarity: 0, seas: 2}, {
        name: "Graphite",
        id: 98,
        weapon: 2,
        rarity: 0,
        seas: 2
    }, {name: "Porcelain", id: 99, weapon: 2, rarity: 0, seas: 2}, {
        name: "Danger",
        id: 100,
        weapon: 2,
        rarity: 0,
        seas: 2
    }, {name: "Paint Spill", id: 101, weapon: 2, rarity: 2, seas: 2}, {
        name: "Goop",
        id: 102,
        weapon: 2,
        rarity: 2,
        seas: 2
    }, {name: "Cerise", id: 103, weapon: 2, rarity: 0, seas: 2}, {
        name: "Orange Drip",
        id: 104,
        weapon: 2,
        rarity: 0,
        seas: 2
    }, {name: "Red Drip", id: 105, weapon: 2, rarity: 0, seas: 2}, {
        name: "Green Drip",
        id: 106,
        weapon: 2,
        rarity: 0,
        seas: 2
    }, {name: "Void", id: 107, weapon: 2, rarity: 4, glow: !0, seas: 2}, {
        name: "Lightning Storm",
        id: 108,
        weapon: 2,
        rarity: 4,
        glow: !0,
        seas: 2
    }, {name: "Scribbler", id: 109, weapon: 2, rarity: 3, seas: 2}, {
        name: "Scorched",
        creator: "0mar",
        id: 110,
        weapon: 2,
        rarity: 4,
        glow: !0,
        seas: 2
    }, {name: "Heat-Tint", creator: "Leaaf", id: 111, weapon: 2, rarity: 2, seas: 2}, {
        name: "Welded",
        id: 112,
        weapon: 2,
        rarity: 2,
        seas: 2
    }, {name: "Acid Howler", id: 113, weapon: 2, rarity: 5, glow: !0, seas: 2}, {
        name: "Boneclaw",
        id: 58,
        weapon: 4,
        rarity: 2,
        seas: 2
    }, {name: "Blue Digital", id: 59, weapon: 4, rarity: 1, seas: 2}, {
        name: "Green Digital",
        id: 60,
        weapon: 4,
        rarity: 1,
        seas: 2
    }, {name: "Purple Digital", id: 61, weapon: 4, rarity: 1, seas: 2}, {
        name: "Red Digital",
        id: 62,
        weapon: 4,
        rarity: 1,
        seas: 2
    }, {name: "Cascade", id: 63, weapon: 4, rarity: 2, seas: 2}, {
        name: "Pink Poly",
        id: 64,
        weapon: 4,
        rarity: 1,
        seas: 2
    }, {name: "Orange Poly", id: 65, weapon: 4, rarity: 1, seas: 2}, {
        name: "Green Poly",
        id: 66,
        weapon: 4,
        rarity: 1,
        seas: 2
    }, {name: "Blue Poly", id: 67, weapon: 4, rarity: 1, seas: 2}, {
        name: "War Torn",
        id: 68,
        weapon: 4,
        rarity: 2,
        seas: 2
    }, {name: "Pink Drip", id: 69, weapon: 4, rarity: 1, seas: 2}, {
        name: "Blue Drip",
        id: 70,
        weapon: 4,
        rarity: 1,
        seas: 2
    }, {name: "Sepia", id: 71, weapon: 4, rarity: 0, seas: 2}, {
        name: "Olive",
        id: 72,
        weapon: 4,
        rarity: 0,
        seas: 2
    }, {name: "Spruce", id: 73, weapon: 4, rarity: 0, seas: 2}, {
        name: "Dijon",
        id: 74,
        weapon: 4,
        rarity: 0,
        seas: 2
    }, {name: "Red Splat", id: 75, weapon: 4, rarity: 1, seas: 2}, {
        name: "Purple Splat",
        id: 76,
        weapon: 4,
        rarity: 1,
        seas: 2
    }, {name: "Orange Splat", id: 77, weapon: 4, rarity: 1, seas: 2}, {
        name: "Green Splat",
        id: 78,
        weapon: 4,
        rarity: 1,
        seas: 2
    }, {name: "Yellow Poly", id: 79, weapon: 4, rarity: 1, seas: 2}, {
        name: "Red Poly",
        id: 80,
        weapon: 4,
        rarity: 1,
        seas: 2
    }, {name: "Green Poly", id: 81, weapon: 4, rarity: 1, seas: 2}, {
        name: "Blue Poly",
        id: 82,
        weapon: 4,
        rarity: 1,
        seas: 2
    }, {name: "Sandstorm", id: 83, weapon: 4, rarity: 0, seas: 2}, {
        name: "Fabrica",
        id: 84,
        weapon: 4,
        rarity: 2,
        seas: 2
    }, {name: "Picnic", id: 85, weapon: 4, rarity: 0, seas: 2}, {
        name: "Picasso",
        id: 86,
        weapon: 4,
        rarity: 0,
        seas: 2
    }, {name: "Cracked", id: 87, weapon: 4, rarity: 2, seas: 2}, {
        name: "Fire Stream",
        id: 88,
        weapon: 4,
        rarity: 2,
        seas: 2
    }, {name: "Ripped Sun", id: 89, weapon: 4, rarity: 2, seas: 2}, {
        name: "Bliss Flow",
        id: 90,
        weapon: 4,
        rarity: 2,
        seas: 2
    }, {name: "Snowy", id: 91, weapon: 4, rarity: 0, seas: 2}, {
        name: "Ducky",
        id: 92,
        weapon: 4,
        rarity: 0,
        seas: 2
    }, {name: "Graphite", id: 93, weapon: 4, rarity: 0, seas: 2}, {
        name: "Porcelain",
        id: 94,
        weapon: 4,
        rarity: 0,
        seas: 2
    }, {name: "Danger", id: 95, weapon: 4, rarity: 0, seas: 2}, {
        name: "Paint Spill",
        id: 96,
        weapon: 4,
        rarity: 2,
        seas: 2
    }, {name: "Goop", id: 97, weapon: 4, rarity: 2, seas: 2}, {
        name: "Cerise",
        id: 98,
        weapon: 4,
        rarity: 0,
        seas: 2
    }, {name: "Orange Drip", id: 99, weapon: 4, rarity: 0, seas: 2}, {
        name: "Red Drip",
        id: 100,
        weapon: 4,
        rarity: 0,
        seas: 2
    }, {name: "Green Drip", id: 101, weapon: 4, rarity: 0, seas: 2}, {
        name: "Polymer",
        id: 102,
        weapon: 4,
        rarity: 2,
        seas: 2
    }, {name: "Andromeda", id: 103, weapon: 4, rarity: 3, glow: !0, seas: 2}, {
        name: "Liberty",
        id: 104,
        weapon: 4,
        rarity: 3,
        seas: 2
    }, {name: "Dragon Breath", id: 105, weapon: 4, rarity: 4, glow: !0, seas: 2}, {
        name: "Parabellum",
        creator: "Floatingpoint",
        id: 106,
        weapon: 4,
        rarity: 2,
        seas: 2
    }, {name: "Poly Fade", id: 107, weapon: 4, rarity: 2, seas: 2}, {
        name: "Picnic",
        id: 31,
        weapon: 5,
        rarity: 1,
        seas: 2
    }, {name: "Picasso", id: 32, weapon: 5, rarity: 0, seas: 2}, {
        name: "Cracked",
        id: 33,
        weapon: 5,
        rarity: 2,
        seas: 2
    }, {name: "Fire Stream", id: 34, weapon: 5, rarity: 2, seas: 2}, {
        name: "Ripped Sun",
        id: 35,
        weapon: 5,
        rarity: 2,
        seas: 2
    }, {name: "Bliss Flow", id: 36, weapon: 5, rarity: 2, seas: 2}, {
        name: "Snowy",
        id: 37,
        weapon: 5,
        rarity: 0,
        seas: 2
    }, {name: "Ducky", id: 38, weapon: 5, rarity: 0, seas: 2}, {
        name: "Graphite",
        id: 39,
        weapon: 5,
        rarity: 0,
        seas: 2
    }, {name: "Porcelain", id: 40, weapon: 5, rarity: 0, seas: 2}, {
        name: "Danger",
        id: 41,
        weapon: 5,
        rarity: 0,
        seas: 2
    }, {name: "Paint Spill", id: 42, weapon: 5, rarity: 2, seas: 2}, {
        name: "Slime Spill",
        id: 43,
        weapon: 5,
        rarity: 2,
        seas: 2
    }, {name: "Cerise", id: 44, weapon: 5, rarity: 0, seas: 2}, {
        name: "Orange Drip",
        id: 45,
        weapon: 5,
        rarity: 0,
        seas: 2
    }, {name: "Red Drip", id: 46, weapon: 5, rarity: 0, seas: 2}, {
        name: "Green Drip",
        id: 47,
        weapon: 5,
        rarity: 0,
        seas: 2
    }, {name: "Overheated", id: 48, weapon: 5, rarity: 3, glow: !0, seas: 2}, {
        name: "Royal",
        id: 49,
        weapon: 5,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {name: "Nordic", id: 50, weapon: 5, rarity: 4, glow: !0, seas: 2}, {
        name: "Boneclaw",
        id: 51,
        weapon: 5,
        rarity: 2,
        seas: 2
    }, {name: "Blue Digital", id: 52, weapon: 5, rarity: 1, seas: 2}, {
        name: "Green Digital",
        id: 53,
        weapon: 5,
        rarity: 1,
        seas: 2
    }, {name: "Purple Digital", id: 54, weapon: 5, rarity: 1, seas: 2}, {
        name: "Red Digital",
        id: 55,
        weapon: 5,
        rarity: 1,
        seas: 2
    }, {name: "Cascade", id: 56, weapon: 5, rarity: 2, seas: 2}, {
        name: "Pink Poly",
        id: 57,
        weapon: 5,
        rarity: 1,
        seas: 2
    }, {name: "Orange Poly", id: 58, weapon: 5, rarity: 1, seas: 2}, {
        name: "Green Poly",
        id: 59,
        weapon: 5,
        rarity: 1,
        seas: 2
    }, {name: "Blue Poly", id: 60, weapon: 5, rarity: 1, seas: 2}, {
        name: "War Torn",
        id: 61,
        weapon: 5,
        rarity: 2,
        seas: 2
    }, {name: "Pink Drip", id: 62, weapon: 5, rarity: 1, seas: 2}, {
        name: "Blue Drip",
        id: 63,
        weapon: 5,
        rarity: 1,
        seas: 2
    }, {name: "Sepia", id: 64, weapon: 5, rarity: 0, seas: 2}, {
        name: "Olive",
        id: 65,
        weapon: 5,
        rarity: 0,
        seas: 2
    }, {name: "Spruce", id: 66, weapon: 5, rarity: 0, seas: 2}, {
        name: "Dijon",
        id: 67,
        weapon: 5,
        rarity: 0,
        seas: 2
    }, {name: "Red Splat", id: 68, weapon: 5, rarity: 1, seas: 2}, {
        name: "Purple Splat",
        id: 69,
        weapon: 5,
        rarity: 1,
        seas: 2
    }, {name: "Orange Splat", id: 70, weapon: 5, rarity: 1, seas: 2}, {
        name: "Green Splat",
        id: 71,
        weapon: 5,
        rarity: 1,
        seas: 2
    }, {name: "Yellow Poly", id: 72, weapon: 5, rarity: 1, seas: 2}, {
        name: "Red Poly",
        id: 73,
        weapon: 5,
        rarity: 1,
        seas: 2
    }, {name: "Green Poly", id: 74, weapon: 5, rarity: 1, seas: 2}, {
        name: "Blue Poly",
        id: 75,
        weapon: 5,
        rarity: 1,
        seas: 2
    }, {name: "Sandstorm", id: 76, weapon: 5, rarity: 0, seas: 2}, {
        name: "Fabrica",
        id: 77,
        weapon: 5,
        rarity: 2,
        seas: 2
    }, {name: "Outlaw", id: 78, weapon: 5, rarity: 3, seas: 2}, {
        name: "Green Poly",
        id: 26,
        weapon: 7,
        rarity: 1,
        seas: 2
    }, {name: "Blue Poly", id: 27, weapon: 7, rarity: 1, seas: 2}, {
        name: "Sandstorm",
        id: 28,
        weapon: 7,
        rarity: 0,
        seas: 2
    }, {name: "Fabrica", id: 29, weapon: 7, rarity: 2, seas: 2}, {
        name: "Zebrik",
        id: 30,
        weapon: 7,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {name: "Picnic", id: 31, weapon: 7, rarity: 0, seas: 2}, {
        name: "Picasso",
        id: 32,
        weapon: 7,
        rarity: 0,
        seas: 2
    }, {name: "Cracked", id: 33, weapon: 7, rarity: 2, seas: 2}, {
        name: "Fire Stream",
        id: 34,
        weapon: 7,
        rarity: 2,
        seas: 2
    }, {name: "Ripped Sun", id: 35, weapon: 7, rarity: 2, seas: 2}, {
        name: "Bliss Flow",
        id: 36,
        weapon: 7,
        rarity: 2,
        seas: 2
    }, {name: "Snowy", id: 37, weapon: 7, rarity: 0, seas: 2}, {
        name: "Ducky",
        id: 38,
        weapon: 7,
        rarity: 0,
        seas: 2
    }, {name: "Graphite", id: 39, weapon: 7, rarity: 0, seas: 2}, {
        name: "Porcelain",
        id: 40,
        weapon: 7,
        rarity: 0,
        seas: 2
    }, {name: "Danger", id: 41, weapon: 7, rarity: 0, seas: 2}, {
        name: "Paint Spill",
        id: 42,
        weapon: 7,
        rarity: 2,
        seas: 2
    }, {name: "Slime Spill", id: 43, weapon: 7, rarity: 2, seas: 2}, {
        name: "Cerise",
        id: 44,
        weapon: 7,
        rarity: 0,
        seas: 2
    }, {name: "Orange Drip", id: 45, weapon: 7, rarity: 0, seas: 2}, {
        name: "Red Drip",
        id: 46,
        weapon: 7,
        rarity: 0,
        seas: 2
    }, {name: "Green Drip", id: 47, weapon: 7, rarity: 0, seas: 2}, {
        name: "Neoran",
        id: 48,
        weapon: 7,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {name: "Fire Breath", id: 49, weapon: 7, rarity: 3, glow: !0, seas: 2}, {
        name: "Boneclaw",
        id: 50,
        weapon: 7,
        rarity: 2,
        seas: 2
    }, {name: "Blue Digital", id: 51, weapon: 7, rarity: 1, seas: 2}, {
        name: "Green Digital",
        id: 52,
        weapon: 7,
        rarity: 1,
        seas: 2
    }, {name: "Purple Digital", id: 53, weapon: 7, rarity: 1, seas: 2}, {
        name: "Red Digital",
        id: 54,
        weapon: 7,
        rarity: 1,
        seas: 2
    }, {name: "Cascade", id: 55, weapon: 7, rarity: 2, seas: 2}, {
        name: "Pink Poly",
        id: 56,
        weapon: 7,
        rarity: 1,
        seas: 2
    }, {name: "Orange Poly", id: 57, weapon: 7, rarity: 1, seas: 2}, {
        name: "Green Poly",
        id: 58,
        weapon: 7,
        rarity: 1,
        seas: 2
    }, {name: "Blue Poly", id: 59, weapon: 7, rarity: 1, seas: 2}, {
        name: "War Torn",
        id: 60,
        weapon: 7,
        rarity: 2,
        seas: 2
    }, {name: "Pink Drip", id: 61, weapon: 7, rarity: 1, seas: 2}, {
        name: "Blue Drip",
        id: 62,
        weapon: 7,
        rarity: 1,
        seas: 2
    }, {name: "Sepia", id: 63, weapon: 7, rarity: 0, seas: 2}, {
        name: "Olive",
        id: 64,
        weapon: 7,
        rarity: 0,
        seas: 2
    }, {name: "Spruce", id: 65, weapon: 7, rarity: 0, seas: 2}, {
        name: "Dijon",
        id: 66,
        weapon: 7,
        rarity: 0,
        seas: 2
    }, {name: "Red Splat", id: 67, weapon: 7, rarity: 1, seas: 2}, {
        name: "Purple Splat",
        id: 68,
        weapon: 7,
        rarity: 1,
        seas: 2
    }, {name: "Orange Splat", id: 69, weapon: 7, rarity: 1, seas: 2}, {
        name: "Green Splat",
        id: 70,
        weapon: 7,
        rarity: 1,
        seas: 2
    }, {name: "Yellow Poly", id: 71, weapon: 7, rarity: 1, seas: 2}, {
        name: "Bloodbath",
        id: 72,
        weapon: 7,
        rarity: 4,
        glow: !0,
        seas: 2
    }, {name: "Red Poly", id: 73, weapon: 7, rarity: 1, seas: 2}, {
        name: "Blue Poly",
        id: 27,
        weapon: 9,
        rarity: 1,
        seas: 2
    }, {name: "Sandstorm", id: 28, weapon: 9, rarity: 0, seas: 2}, {
        name: "Fabrica",
        id: 29,
        weapon: 9,
        rarity: 2,
        seas: 2
    }, {name: "Picnic", id: 30, weapon: 9, rarity: 0, seas: 2}, {
        name: "Picasso",
        id: 31,
        weapon: 9,
        rarity: 0,
        seas: 2
    }, {name: "Cracked", id: 32, weapon: 9, rarity: 2, seas: 2}, {
        name: "Fire Stream",
        id: 33,
        weapon: 9,
        rarity: 2,
        seas: 2
    }, {name: "Ripped Sun", id: 34, weapon: 9, rarity: 2, seas: 2}, {
        name: "Bliss Flow",
        id: 35,
        weapon: 9,
        rarity: 2,
        seas: 2
    }, {name: "Kenzo", id: 36, weapon: 9, rarity: 2, seas: 2}, {
        name: "Snowy",
        id: 37,
        weapon: 9,
        rarity: 0,
        seas: 2
    }, {name: "Ducky", id: 38, weapon: 9, rarity: 0, seas: 2}, {
        name: "Graphite",
        id: 39,
        weapon: 9,
        rarity: 0,
        seas: 2
    }, {name: "Porcelain", id: 40, weapon: 9, rarity: 0, seas: 2}, {
        name: "Danger",
        id: 41,
        weapon: 9,
        rarity: 0,
        seas: 2
    }, {name: "Paint Spill", id: 42, weapon: 9, rarity: 2, seas: 2}, {
        name: "Goop",
        id: 43,
        weapon: 9,
        rarity: 2,
        seas: 2
    }, {name: "Cerise", id: 44, weapon: 9, rarity: 0, seas: 2}, {
        name: "Orange Drip",
        id: 45,
        weapon: 9,
        rarity: 0,
        seas: 2
    }, {name: "Red Drip", id: 46, weapon: 9, rarity: 0, seas: 2}, {
        name: "Green Drip",
        id: 47,
        weapon: 9,
        rarity: 0,
        seas: 2
    }, {name: "Boneclaw", id: 48, weapon: 9, rarity: 2, seas: 2}, {
        name: "Blue Digital",
        id: 49,
        weapon: 9,
        rarity: 1,
        seas: 2
    }, {name: "Green Digital", id: 50, weapon: 9, rarity: 1, seas: 2}, {
        name: "Purple Digital",
        id: 51,
        weapon: 9,
        rarity: 1,
        seas: 2
    }, {name: "Red Digital", id: 52, weapon: 9, rarity: 1, seas: 2}, {
        name: "Cascade",
        id: 53,
        weapon: 9,
        rarity: 2,
        seas: 2
    }, {name: "Pink Poly", id: 54, weapon: 9, rarity: 1, seas: 2}, {
        name: "Orange Poly",
        id: 55,
        weapon: 9,
        rarity: 1,
        seas: 2
    }, {name: "Green Poly", id: 56, weapon: 9, rarity: 1, seas: 2}, {
        name: "Blue Poly",
        id: 57,
        weapon: 9,
        rarity: 1,
        seas: 2
    }, {name: "War Torn", id: 58, weapon: 9, rarity: 2, seas: 2}, {
        name: "Pink Drip",
        id: 59,
        weapon: 9,
        rarity: 1,
        seas: 2
    }, {name: "Blue Drip", id: 60, weapon: 9, rarity: 1, seas: 2}, {
        name: "Sepia",
        id: 61,
        weapon: 9,
        rarity: 0,
        seas: 2
    }, {name: "Olive", id: 62, weapon: 9, rarity: 0, seas: 2}, {
        name: "Spruce",
        id: 63,
        weapon: 9,
        rarity: 0,
        seas: 2
    }, {name: "Dijon", id: 64, weapon: 9, rarity: 0, seas: 2}, {
        name: "Red Splat",
        id: 65,
        weapon: 9,
        rarity: 1,
        seas: 2
    }, {name: "Purple Splat", id: 66, weapon: 9, rarity: 1, seas: 2}, {
        name: "Orange Splat",
        id: 67,
        weapon: 9,
        rarity: 1,
        seas: 2
    }, {name: "Green Splat", id: 68, weapon: 9, rarity: 1, seas: 2}, {
        name: "Yellow Poly",
        id: 69,
        weapon: 9,
        rarity: 1,
        seas: 2
    }, {name: "Red Poly", id: 70, weapon: 9, rarity: 1, seas: 2}, {
        name: "Green Poly",
        id: 71,
        weapon: 9,
        rarity: 1,
        seas: 2
    }, {name: "Coffin", id: 72, weapon: 9, rarity: 3, glow: !0, seas: 2}, {
        name: "Lightning Strike",
        id: 73,
        weapon: 9,
        rarity: 4,
        glow: !0,
        seas: 2
    }, {name: "Boneclaw", id: 25, weapon: 15, rarity: 3, seas: 2}, {
        name: "Blue Digital",
        id: 26,
        weapon: 15,
        rarity: 1,
        seas: 2
    }, {name: "Green Digital", id: 27, weapon: 15, rarity: 1, seas: 2}, {
        name: "Purple Digital",
        id: 28,
        weapon: 15,
        rarity: 1,
        seas: 2
    }, {name: "Red Digital", id: 29, weapon: 15, rarity: 1, seas: 2}, {
        name: "Cascade",
        id: 30,
        weapon: 15,
        rarity: 2,
        seas: 2
    }, {name: "Pink Poly", id: 31, weapon: 15, rarity: 1, seas: 2}, {
        name: "Orange Poly",
        id: 32,
        weapon: 15,
        rarity: 1,
        seas: 2
    }, {name: "Green Poly", id: 33, weapon: 15, rarity: 1, seas: 2}, {
        name: "Blue Poly",
        id: 34,
        weapon: 15,
        rarity: 1,
        seas: 2
    }, {name: "War Torn", id: 35, weapon: 15, rarity: 2, seas: 2}, {
        name: "Spook",
        id: 36,
        weapon: 15,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {name: "Pink Drip", id: 37, weapon: 15, rarity: 1, seas: 2}, {
        name: "Blue Drip",
        id: 38,
        weapon: 15,
        rarity: 1,
        seas: 2
    }, {name: "Sepia", id: 39, weapon: 15, rarity: 0, seas: 2}, {
        name: "Olive",
        id: 40,
        weapon: 15,
        rarity: 0,
        seas: 2
    }, {name: "Spruce", id: 41, weapon: 15, rarity: 0, seas: 2}, {
        name: "Dijon",
        id: 42,
        weapon: 15,
        rarity: 0,
        seas: 2
    }, {name: "Red Splat", id: 43, weapon: 15, rarity: 1, seas: 2}, {
        name: "Purple Splat",
        id: 44,
        weapon: 15,
        rarity: 1,
        seas: 2
    }, {name: "Orange Splat", id: 45, weapon: 15, rarity: 1, seas: 2}, {
        name: "Green Splat",
        id: 46,
        weapon: 15,
        rarity: 1,
        seas: 2
    }, {name: "Yellow Poly", id: 47, weapon: 15, rarity: 1, seas: 2}, {
        name: "Red Poly",
        id: 48,
        weapon: 15,
        rarity: 1,
        seas: 2
    }, {name: "Green Poly", id: 49, weapon: 15, rarity: 1, seas: 2}, {
        name: "Blue Poly",
        id: 50,
        weapon: 15,
        rarity: 1,
        seas: 2
    }, {name: "Sandstorm", id: 51, weapon: 15, rarity: 0, seas: 2}, {
        name: "Fabrica",
        id: 52,
        weapon: 15,
        rarity: 2,
        seas: 2
    }, {name: "Zebrik", id: 53, weapon: 15, rarity: 2, seas: 2}, {
        name: "Picnic",
        id: 54,
        weapon: 15,
        rarity: 0,
        seas: 2
    }, {name: "Picasso", id: 55, weapon: 15, rarity: 0, seas: 2}, {
        name: "Cracked",
        id: 56,
        weapon: 15,
        rarity: 2,
        seas: 2
    }, {name: "Fire Stream", id: 57, weapon: 15, rarity: 2, seas: 2}, {
        name: "Ripped Sun",
        id: 58,
        weapon: 15,
        rarity: 2,
        seas: 2
    }, {name: "Bliss Flow", id: 59, weapon: 15, rarity: 2, seas: 2}, {
        name: "Kenzo",
        id: 60,
        weapon: 15,
        rarity: 3,
        seas: 2
    }, {name: "Snowy", id: 61, weapon: 15, rarity: 0, seas: 2}, {
        name: "Ducky",
        id: 62,
        weapon: 15,
        rarity: 0,
        seas: 2
    }, {name: "Graphite", id: 63, weapon: 15, rarity: 0, seas: 2}, {
        name: "Porcelain",
        id: 64,
        weapon: 15,
        rarity: 0,
        seas: 2
    }, {name: "Danger", id: 65, weapon: 15, rarity: 0, seas: 2}, {
        name: "Paint Spill",
        id: 66,
        weapon: 15,
        rarity: 2,
        seas: 2
    }, {name: "Slime Spill", id: 67, weapon: 15, rarity: 2, seas: 2}, {
        name: "Cerise",
        id: 68,
        weapon: 15,
        rarity: 0,
        seas: 2
    }, {name: "Orange Drip", id: 69, weapon: 15, rarity: 0, seas: 2}, {
        name: "Red Drip",
        id: 70,
        weapon: 15,
        rarity: 0,
        seas: 2
    }, {name: "Green Drip", id: 71, weapon: 15, rarity: 0, seas: 2}, {
        name: "Galaxy Morse",
        id: 72,
        weapon: 15,
        rarity: 4,
        glow: !0,
        seas: 2
    }, {name: "Fire Storm", id: 73, weapon: 15, rarity: 4, glow: !0, seas: 2}, {
        name: "Marked",
        id: 74,
        weapon: 15,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {name: "Frosted", id: 75, weapon: 15, rarity: 4, glow: !0, seas: 2}, {
        name: "Gold Tipped",
        creator: "jonschmiddy",
        id: 76,
        weapon: 15,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {
        name: "Damascus",
        keyW: "Knife",
        tex: 6,
        id: 0,
        type: 3,
        scl: 2.3,
        seas: 2,
        sclMlt: .9,
        yOff: -2,
        rarity: 3
    }, {
        name: "Prism",
        creator: "jonschmiddy",
        keyW: "Knife",
        tex: 7,
        id: 0,
        type: 3,
        scl: 2.3,
        seas: 2,
        sclMlt: .9,
        yOff: -2,
        rarity: 3
    }, {
        name: "Bloodless",
        keyW: "Knife",
        id: 2,
        tex: 1,
        glow: !0,
        type: 3,
        scl: 3,
        seas: 2,
        sclMlt: .9,
        yOff: -2,
        rarity: 4
    }, {
        name: "Steelfang",
        keyW: "Knife",
        flipAnim: !0,
        id: 3,
        type: 3,
        scl: 2.6,
        seas: 2,
        sclMlt: 1,
        yOff: -1,
        xOff: -1.5,
        rarity: 4,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Flamefang",
        keyW: "Knife",
        flipAnim: !0,
        tex: 1,
        glow: !0,
        id: 3,
        type: 3,
        scl: 2.6,
        seas: 2,
        sclMlt: .9,
        yOff: -1,
        xOff: -1.5,
        rarity: 5,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Plasma Dust",
        keyW: "Knife",
        flipAnim: !0,
        tex: 2,
        glow: !0,
        id: 3,
        type: 3,
        scl: 2.6,
        seas: 2,
        sclMlt: .9,
        yOff: -1,
        xOff: -1.5,
        rarity: 5,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Volt Fang",
        keyW: "Knife",
        flipAnim: !0,
        tex: 3,
        glow: !0,
        id: 3,
        type: 3,
        scl: 2.6,
        seas: 2,
        sclMlt: .9,
        yOff: -1,
        xOff: -1.5,
        rarity: 5,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Black Cowboy Hat",
        type: 1,
        keyW: "Head",
        id: 39,
        rarity: 0,
        seas: 2,
        sclMlt: .56,
        sitOff: .6
    }, {
        name: "Brown Cowboy Hat",
        type: 1,
        keyW: "Head",
        id: 39,
        tex: 1,
        rarity: 0,
        seas: 2,
        sclMlt: .56,
        sitOff: .6,
        yOff: -1.2,
        scl: 1.2
    }, {
        name: "Outback Hat",
        type: 1,
        keyW: "Head",
        id: 40,
        rarity: 1,
        seas: 2,
        sclMlt: .56,
        sitOff: .6,
        yOff: -1.2,
        scl: 1.2
    }, {
        name: "Dundee Hat",
        type: 1,
        keyW: "Head",
        id: 40,
        tex: 1,
        rarity: 1,
        seas: 2,
        sclMlt: .56,
        sitOff: .6,
        yOff: -1.2,
        scl: 1.2
    }, {
        name: "Red Hat",
        type: 1,
        keyW: "Head",
        id: 41,
        rarity: 1,
        seas: 2,
        sclMlt: .56,
        sitOff: .6,
        yOff: -1.2,
        scl: 1.2
    }, {
        name: "Blue Hat",
        type: 1,
        keyW: "Head",
        id: 41,
        tex: 1,
        rarity: 0,
        seas: 2,
        sclMlt: .56,
        sitOff: .6,
        yOff: -1.2,
        scl: 1.2
    }, {
        name: "Urban Soldier",
        type: 1,
        keyW: "Head",
        id: 42,
        tex: 0,
        rarity: 1,
        seas: 2,
        sclMlt: .56,
        sitOff: .78,
        yOff: -1.2,
        scl: 1.2
    }, {
        name: "Desert Soldier",
        type: 1,
        keyW: "Head",
        id: 42,
        tex: 1,
        rarity: 1,
        seas: 2,
        sclMlt: .56,
        sitOff: .78,
        yOff: -1.2,
        scl: 1.2
    }, {
        name: "Arctic Soldier",
        type: 1,
        keyW: "Head",
        id: 42,
        tex: 2,
        rarity: 1,
        seas: 2,
        sclMlt: .56,
        sitOff: .78,
        yOff: -1.2,
        scl: 1.2
    }, {
        name: "Ace",
        type: 1,
        keyW: "Head",
        id: 43,
        rarity: 3,
        seas: 2,
        sclMlt: .56,
        sitOff: .7,
        yOff: -1.2,
        scl: 1.2
    }, {
        name: "Pinata",
        type: 1,
        keyW: "Head",
        id: 44,
        rarity: 1,
        seas: 2,
        sclMlt: .56,
        sitOff: .6,
        yOff: -1.2,
        scl: 1.2
    }, {
        name: "Sombrerro",
        type: 1,
        keyW: "Head",
        id: 44,
        tex: 1,
        rarity: 1,
        seas: 2,
        sclMlt: .56,
        sitOff: .6,
        yOff: -1.2,
        scl: 1.2
    }, {
        name: "Swagger",
        type: 1,
        keyW: "Head",
        id: 45,
        rarity: 3,
        seas: 2,
        sclMlt: .56,
        sitOff: 1.8,
        yOff: -2,
        scl: 1.2
    }, {
        name: "Acid Bane",
        id: 11,
        rarity: 3,
        glow: !0,
        type: 2,
        keyW: "Back",
        seas: 2,
        scl: 5,
        sclMlt: 3.4,
        sitOff: -1.3,
        sitOffZ: -.8,
        yOff: -2,
        xOff: -4
    }, {
        name: "Plasma Bones",
        id: 11,
        tex: 1,
        rarity: 3,
        glow: !0,
        type: 2,
        keyW: "Back",
        seas: 2,
        scl: 5,
        sclMlt: 3.4,
        sitOff: -1.3,
        sitOffZ: -.8,
        yOff: -2,
        xOff: -4
    }, {
        name: "Jet Pack",
        id: 13,
        rarity: 2,
        glow: !0,
        type: 2,
        keyW: "Back",
        seas: 2,
        scl: 6,
        sclMlt: 3,
        sitOff: -.5,
        sitOffZ: -.93,
        yOff: -1.3,
        xRot: Math.PI
    }, {
        name: "Red Backpack",
        id: 14,
        rarity: 1,
        type: 2,
        keyW: "Back",
        seas: 2,
        scl: 4,
        sclMlt: 2.3,
        sitOff: -.8,
        sitOffZ: -.8,
        yOff: -1.5,
        xRot: Math.PI
    }, {
        name: "Blue Backpack",
        id: 14,
        tex: 1,
        rarity: 1,
        type: 2,
        keyW: "Back",
        seas: 2,
        scl: 3.5,
        sclMlt: 2.3,
        sitOff: -.8,
        sitOffZ: -.8,
        yOff: -1.5,
        xRot: Math.PI
    }, {
        name: "Police Vest",
        id: 15,
        rarity: 1,
        type: 2,
        keyW: "Back",
        seas: 2,
        scl: 4.5,
        sclMlt: 2.5,
        sitOff: .4,
        sitOffZ: 0,
        yOff: -2,
        xRot: Math.PI
    }, {
        name: "Angelic Wings",
        id: 16,
        rarity: 3,
        glow: !0,
        type: 2,
        keyW: "Back",
        seas: 2,
        scl: 3,
        sclMlt: 3,
        sitOff: -.5,
        sitOffZ: -2,
        xOff: -2,
        yOff: -3
    }, {
        name: "Gradient Pennon",
        id: 16,
        tex: 1,
        rarity: 4,
        glow: !0,
        type: 2,
        keyW: "Back",
        seas: 2,
        scl: 3,
        sclMlt: 3,
        sitOff: -.5,
        sitOffZ: -2,
        xOff: -2,
        yOff: -3
    }, {
        name: "Torn Aileron",
        id: 17,
        rarity: 4,
        glow: !0,
        type: 2,
        keyW: "Back",
        seas: 2,
        scl: 3,
        sclMlt: 3,
        sitOff: 0,
        sitOffZ: -2,
        xOff: -2,
        yOff: -3
    }, {
        name: "Cursed",
        id: 17,
        tex: 1,
        rarity: 3,
        glow: !0,
        type: 2,
        keyW: "Back",
        seas: 2,
        scl: 3,
        sclMlt: 3,
        sitOff: 0,
        sitOffZ: -2,
        xOff: -2,
        yOff: -3
    }, {
        name: "Butterfly",
        id: 19,
        rarity: 2,
        type: 2,
        keyW: "Back",
        seas: 2,
        scl: 3.5,
        sclMlt: 3.3,
        sitOff: -.9,
        sitOffZ: -2.4,
        yOff: -2
    }, {
        name: "Mr. Rabbiton",
        id: 46,
        rarity: 2,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .89,
        sitOff: .9,
        scl: 1.6,
        yOff: -1.2
    }, {
        name: "Madman",
        id: 47,
        rarity: 2,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .95,
        sitOff: .8,
        scl: 1.6,
        yOff: -1.2
    }, {
        name: "Grizz Lee",
        id: 48,
        rarity: 2,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .95,
        sitOff: .8,
        scl: 1.6,
        yOff: -1.2
    }, {
        name: "Claws",
        id: 48,
        tex: 1,
        rarity: 3,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .89,
        sitOff: .9,
        scl: 1.6,
        yOff: -1.2
    }, {
        name: "Simba",
        id: 49,
        rarity: 2,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .89,
        sitOff: .9,
        scl: 1.6,
        yOff: -1.2
    }, {
        name: "Captain Walrus",
        id: 50,
        rarity: 2,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .89,
        sitOff: .9,
        scl: 1.6,
        yOff: -1.2
    }, {
        name: "Monke",
        id: 51,
        rarity: 2,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .89,
        sitOff: .9,
        scl: 1.6,
        yOff: -1.2
    }, {
        name: "Lord Panda",
        id: 52,
        rarity: 3,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .89,
        sitOff: .9,
        scl: 1.6,
        yOff: -1.2
    }, {
        name: "Ray Bam",
        id: 53,
        rarity: 0,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .51,
        sitOff: 1.1,
        scl: 1.4,
        xOff: 1.5,
        yOff: -1.2
    }, {
        name: "Gold Sunnies",
        id: 53,
        tex: 1,
        rarity: 1,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .51,
        sitOff: 1.1,
        scl: 1.4,
        xOff: 1.5,
        yOff: -1.2
    }, {
        name: "Queens Guard",
        id: 54,
        rarity: 0,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .6,
        sitOff: .9,
        scl: .9,
        yOff: -2.1
    }, {
        name: "Snowman",
        id: 55,
        rarity: 2,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .89,
        sitOff: .8,
        xOff: 1.5,
        scl: 1.6,
        yOff: -1.2
    }, {
        name: "Misty",
        id: 56,
        rarity: 2,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .89,
        sitOff: .9,
        scl: 1.6,
        yOff: -1.2
    }, {
        name: "Unicorn",
        id: 57,
        rarity: 3,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .89,
        sitOff: .9,
        scl: 1.6,
        yOff: -1.2
    }, {
        name: "TV Tron LCD",
        id: 32,
        tex: 4,
        rarity: 4,
        type: 1,
        keyW: "Head",
        seas: 2,
        scl: 1,
        sclMlt: .6,
        sitOff: 2.05,
        yOff: -3.2,
        frames: 2,
        frameT: 400
    }, {
        name: "Acidic Bane",
        id: 36,
        rarity: 3,
        glow: !0,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .56,
        sitOff: 1.3,
        xOff: 1.2,
        scl: 1.1,
        yOff: -1.2
    }, {
        name: "Tentacus",
        id: 34,
        tex: 1,
        rarity: 3,
        glow: !0,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .56,
        sitOff: 1.3,
        scl: 1.1,
        yOff: -1.2
    }, {
        name: "Soldier 159",
        id: 35,
        tex: 1,
        rarity: 2,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .56,
        sitOff: 1.3,
        scl: 1.1,
        yOff: -1.2
    }, {
        name: "Soldier 160",
        id: 35,
        tex: 2,
        rarity: 2,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .56,
        sitOff: 1.3,
        scl: 1.1,
        yOff: -1.2
    }, {
        name: "Templar",
        id: 37,
        rarity: 3,
        type: 1,
        glow: !0,
        keyW: "Head",
        seas: 2,
        sclMlt: .56,
        sitOff: 1.3,
        scl: 1.1,
        yOff: -1.2
    }, {
        name: "Phase Blades",
        id: 2,
        tex: 1,
        type: 2,
        seas: 2,
        keyW: "Back",
        glow: !0,
        scl: .00048112055276382,
        sclMlt: .000406279577889448,
        sitOff: -1.3,
        sitOffZ: -.95,
        yOff: -1,
        xOff: -.5,
        rarity: 3
    }, {
        name: "Pot'O'Gold",
        id: 20,
        rarity: 2,
        type: 2,
        keyW: "Back",
        seas: 2,
        sclMlt: 2.5,
        sitOff: -.8,
        sitOffZ: -2,
        yOff: -2,
        xOff: .5,
        scl: 4,
        xRot: Math.PI
    }, {
        name: "Unicorn Backpack",
        id: 21,
        rarity: 3,
        type: 2,
        keyW: "Back",
        seas: 2,
        sclMlt: 2.3,
        sitOff: -.8,
        sitOffZ: -.8,
        yOff: -2,
        xOff: -1.5,
        scl: 3.5,
        xRot: Math.PI
    }, {name: "Flame Talon", weapon: 5, glow: !0, id: 79, seas: 2, rarity: 4}, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        seas: 2,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        weapon: 7,
        rarity: 5
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        seas: 2,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        weapon: 5,
        rarity: 5
    }, {
        name: "Terminal",
        id: 39,
        type: 4,
        rarity: 0,
        seas: 2,
        opacity: .6,
        frames: 2,
        frameT: 250,
        keyW: "Sprays"
    }, {
        name: "Clickbait",
        id: 40,
        type: 4,
        rarity: 2,
        seas: 2,
        opacity: .75,
        frames: 2,
        frameT: 550,
        keyW: "Sprays"
    }, {
        name: "Kunai",
        keyW: "Knife",
        glow: !0,
        pulsT: .0015,
        id: 4,
        type: 3,
        seas: 2,
        rarity: 4,
        scl: 2,
        sclMlt: .75,
        yOff: -1,
        sxOff: 0,
        syOff: -.05,
        szOff: -.1
    }, {
        name: "Wrench",
        keyW: "Knife",
        id: 5,
        type: 3,
        seas: 2,
        rarity: 4,
        scl: 2,
        sclMlt: .8,
        yOff: -2.5,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Clown",
        id: 58,
        rarity: 3,
        type: 1,
        keyW: "Head",
        seas: 2,
        sclMlt: .89,
        sitOff: .9,
        scl: 1.6,
        yOff: -1.2
    }, {
        name: "Wink",
        id: 41,
        type: 4,
        rarity: 1,
        seas: 2,
        opacity: .75,
        frames: 2,
        frameT: 550,
        keyW: "Sprays"
    }, {
        name: "No U",
        id: 42,
        type: 4,
        rarity: 1,
        seas: 2,
        opacity: .75,
        frames: 2,
        frameT: 550,
        keyW: "Sprays"
    }, {
        name: "Coolman",
        id: 43,
        type: 4,
        rarity: 1,
        seas: 2,
        opacity: .75,
        frames: 2,
        frameT: 550,
        keyW: "Sprays"
    }, {
        name: "Paranoid",
        id: 44,
        type: 4,
        rarity: 0,
        seas: 2,
        opacity: .75,
        frames: 2,
        frameT: 1200,
        keyW: "Sprays"
    }, {
        name: "Dab",
        id: 45,
        type: 4,
        rarity: 1,
        seas: 2,
        opacity: .75,
        frames: 2,
        frameT: 400,
        keyW: "Sprays"
    }, {
        name: "Pepereel",
        id: 46,
        type: 4,
        rarity: 1,
        seas: 2,
        opacity: .8,
        movT: -.0025,
        keyW: "Sprays"
    }, {name: "Wanted", id: 47, type: 4, rarity: 0, seas: 2, opacity: .75, keyW: "Sprays"}, {
        name: "Soon&trade;",
        id: 48,
        type: 4,
        rarity: 0,
        seas: 2,
        opacity: .7,
        frames: 2,
        frameT: 550,
        keyW: "Sprays"
    }, {
        name: "Art",
        id: 49,
        type: 4,
        rarity: 2,
        seas: 2,
        opacity: .8,
        frames: 2,
        frameT: 350,
        keyW: "Sprays"
    }, {
        name: "Nautilus",
        id: 50,
        type: 4,
        rarity: 3,
        seas: 2,
        opacity: .85,
        frames: 4,
        frameT: 200,
        keyW: "Sprays"
    }, {
        name: "Baller",
        creator: "???",
        pat: 6,
        tex: "weapons/pat/6",
        sameGlow: !0,
        movT: 2e-4,
        weapon: 1,
        rarity: 5,
        seas: 2
    }, {
        name: "Baller",
        creator: "???",
        pat: 6,
        tex: "weapons/pat/6",
        sameGlow: !0,
        movT: 2e-4,
        weapon: 2,
        rarity: 5,
        seas: 2
    }, {
        name: "Baller",
        creator: "???",
        pat: 6,
        tex: "weapons/pat/6",
        sameGlow: !0,
        movT: 2e-4,
        weapon: 4,
        rarity: 5,
        seas: 2
    }, {
        name: "Baller",
        creator: "???",
        pat: 6,
        tex: "weapons/pat/6",
        sameGlow: !0,
        movT: 2e-4,
        weapon: 5,
        rarity: 5,
        seas: 2
    }, {
        name: "TV Tron HD",
        id: 32,
        tex: 5,
        rarity: 4,
        type: 1,
        keyW: "Head",
        seas: 2,
        scl: 1,
        sclMlt: .6,
        sitOff: 2.05,
        yOff: -3.2,
        frames: 2,
        frameT: 400
    }, {
        name: "Nova Pump",
        limT: "Debug",
        lore: "First Weapon Remodel Placeholder",
        mid: 0,
        midT: 38,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 0
    }, {
        name: "Roadkill",
        mid: 0,
        midT: 1,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 3
    }, {
        name: "Molten Core",
        mid: 0,
        midT: 2,
        pulsT: .0015,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        glow: !0,
        rarity: 4
    }, {
        name: "Mosaik",
        mid: 0,
        midT: 3,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 2
    }, {
        name: "Kiason",
        mid: 0,
        midT: 4,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 2
    }, {
        name: "Monatomic",
        mid: 0,
        midT: 5,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        glow: !0,
        rarity: 3
    }, {
        name: "Crystalline",
        mid: 0,
        midT: 6,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        glow: !0,
        rarity: 4
    }, {
        name: "Blue Digital",
        mid: 0,
        midT: 7,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 0
    }, {
        name: "Green Digital",
        mid: 0,
        midT: 8,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 0
    }, {
        name: "Purple Digital",
        mid: 0,
        midT: 9,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 0
    }, {
        name: "Red Digital",
        mid: 0,
        midT: 10,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 0
    }, {
        name: "Pink Poly",
        mid: 0,
        midT: 11,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Orange Poly",
        mid: 0,
        midT: 12,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Green Poly",
        mid: 0,
        midT: 13,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Blue Poly",
        mid: 0,
        midT: 14,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Pink Drip",
        mid: 0,
        midT: 15,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 2
    }, {
        name: "Blue Drip",
        mid: 0,
        midT: 16,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 2
    }, {
        name: "Sepia",
        mid: 0,
        midT: 17,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Olive",
        mid: 0,
        midT: 18,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 2
    }, {
        name: "Spruce",
        mid: 0,
        midT: 19,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 2
    }, {
        name: "Dijon",
        mid: 0,
        midT: 20,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 2
    }, {
        name: "Red Splat",
        mid: 0,
        midT: 21,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Purple Splat",
        mid: 0,
        midT: 22,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Orange Splat",
        mid: 0,
        midT: 23,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Green Splat",
        mid: 0,
        midT: 24,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Yellow Comb",
        mid: 0,
        midT: 25,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Red Comb",
        mid: 0,
        midT: 26,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Green Comb",
        mid: 0,
        midT: 27,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Blue Comb",
        mid: 0,
        midT: 28,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Sandstorm",
        mid: 0,
        midT: 29,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Picnic",
        mid: 0,
        midT: 30,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Picasso",
        mid: 0,
        midT: 31,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 2
    }, {
        name: "Snowy",
        mid: 0,
        midT: 32,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 2
    }, {
        name: "Hazard",
        mid: 0,
        midT: 33,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 2
    }, {
        name: "Cerise",
        mid: 0,
        midT: 34,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 2
    }, {
        name: "Orange Drip",
        mid: 0,
        midT: 35,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Red Drip",
        mid: 0,
        midT: 36,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {
        name: "Green Drip",
        mid: 0,
        midT: 37,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        seas: 2,
        weapon: 6,
        rarity: 1
    }, {name: "Wasteland", id: 118, creator: "FlowerKid", weapon: 1, rarity: 3, seas: 2}, {
        name: "Turbo",
        id: 119,
        creator: "Floatingpoint",
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Urban Splat", id: 114, creator: "FlowerKid", glow: !0, weapon: 2, rarity: 4, seas: 2}, {
        name: "Cimota",
        id: 108,
        creator: "Cimota",
        glow: !0,
        weapon: 4,
        rarity: 3,
        seas: 2
    }, {name: "Fractal", id: 109, creator: "Cimota", weapon: 4, rarity: 3, seas: 2}, {
        name: "Chrome",
        id: 80,
        creator: "Flowerkid",
        glow: !0,
        weapon: 5,
        rarity: 3,
        seas: 2
    }, {
        name: "World of Light",
        id: 77,
        creator: "Electrode",
        glow: !0,
        weapon: 15,
        rarity: 3,
        seas: 2
    }, {
        name: "Vantablack",
        id: 0,
        shirtCol: 197379,
        sleeveCol: 197379,
        pantsCol: 197379,
        shoeCol: 197379,
        seas: 2,
        type: 5,
        rarity: 5
    }, {name: "Lederhose", id: 120, weapon: 1, rarity: 3, seas: 2}, {
        name: "Emboss",
        id: 121,
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Spineless", id: 122, weapon: 1, rarity: 2, seas: 2}, {
        name: "Gold Plated",
        id: 123,
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {
        name: "Daimyo Spirit",
        creator: "FlowerKid",
        id: 124,
        weapon: 1,
        glow: !0,
        rarity: 4,
        seas: 2
    }, {name: "Heat Stroke", id: 125, weapon: 1, glow: !0, rarity: 3, seas: 2}, {
        name: "Samurai Spirit",
        creator: "FlowerKid",
        id: 78,
        weapon: 15,
        glow: !0,
        rarity: 4,
        seas: 2
    }, {
        name: "Suede Blade",
        keyW: "Knife",
        flipAnim: !0,
        id: 3,
        tex: 4,
        type: 3,
        scl: 2.6,
        seas: 2,
        sclMlt: 1,
        yOff: -1,
        xOff: -1.5,
        rarity: 3,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Aziru",
        creator: "Halloluke0201",
        keyW: "Knife",
        flipAnim: !0,
        glow: !0,
        id: 3,
        tex: 5,
        type: 3,
        scl: 2.6,
        seas: 2,
        sclMlt: 1,
        yOff: -1,
        xOff: -1.5,
        rarity: 4,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {name: "Clockwork", id: 126, seas: 2, weapon: 1, rarity: 3}, {
        name: "Jagdfaust IV",
        mid: 2,
        glow: !0,
        limited: !0,
        scl: .9,
        mScl: 1,
        spnScl: 1.35,
        zOff: -.25,
        seas: 2,
        yOff: .05,
        weapon: 1,
        rarity: 6
    }, {
        name: "Coroller",
        keyW: "Toilet",
        id: 7,
        type: 3,
        seas: 2,
        rarity: 6,
        limited: !0,
        scl: 2,
        sclMlt: .76,
        yOff: -2.5,
        sxOff: .15
    }, {
        name: "Facemask",
        keyW: "Mask",
        limited: !0,
        id: 60,
        rarity: 2,
        type: 1,
        seas: 2,
        sclMlt: .54,
        sitOff: .9,
        scl: 1.6
    }, {
        name: "Spectralon",
        id: 1,
        shirtCol: "#ffffff",
        sleeveCol: "#ffffff",
        pantsCol: "#ffffff",
        shoeCol: "#ffffff",
        seas: 2,
        type: 5,
        rarity: 5
    }, {name: "24/7", id: 127, creator: "Drag", weapon: 1, rarity: 4, glow: !0, seas: 2}, {
        name: "Shattered",
        id: 128,
        creator: "Edibleporg",
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Lunatic", id: 115, creator: "Nxbulah", weapon: 2, rarity: 4, glow: !0, seas: 2}, {
        name: "Auzora",
        id: 116,
        creator: "Cyanide",
        weapon: 2,
        rarity: 2,
        seas: 2
    }, {name: "Botanical", id: 79, creator: "Nxbulah", weapon: 15, rarity: 4, glow: !0, seas: 2}, {
        name: "Krunkette 1",
        id: 51,
        type: 4,
        rarity: 5,
        seas: 2,
        opacity: .7,
        keyW: "Sprays"
    }, {name: "Krunkette 2", id: 52, type: 4, rarity: 4, seas: 2, opacity: .7, keyW: "Sprays"}, {
        name: "Krunkette 3",
        id: 53,
        type: 4,
        rarity: 3,
        seas: 2,
        opacity: .7,
        keyW: "Sprays"
    }, {name: "Lunar", id: 117, creator: "Nxbulah", weapon: 2, rarity: 4, glow: !0, seas: 2}, {
        name: "S&Y",
        id: 81,
        creator: "Cimota",
        weapon: 5,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {
        name: "Quarantine",
        creator: "Floatingpoint",
        midT: 39,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 2
    }, {name: "Scarlet", id: 118, creator: "FlowerKid", weapon: 2, rarity: 5, glow: !0, seas: 2}, {
        name: "Lunar Nitro",
        id: 129,
        creator: "Kitter",
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {
        name: "Sunset Raven",
        creator: "FlowerKid",
        midT: 40,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {name: "Otzarreta", id: 110, creator: "FlowerKid", weapon: 4, rarity: 4, glow: !0, seas: 2}, {
        name: "Wychwood",
        id: 111,
        creator: "FlowerKid",
        weapon: 4,
        rarity: 4,
        glow: !0,
        seas: 2
    }, {name: "Trip", id: 112, creator: "Nxbulah", weapon: 4, rarity: 3, glow: !0, seas: 2}, {
        name: "Retribution",
        id: 130,
        creator: "Jhonxay_Playz",
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Spiritful", id: 80, creator: "Zinoob", weapon: 15, rarity: 3, glow: !0, seas: 2}, {
        name: "Toxix",
        creator: "Kltter",
        midT: 41,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {name: "Spec Ops", id: 131, creator: "floatingpoint", weapon: 1, rarity: 3, seas: 2}, {
        name: "Retro-cade",
        id: 113,
        creator: "Kltter",
        weapon: 4,
        rarity: 2,
        seas: 2
    }, {
        name: "Incognito",
        midT: 42,
        creator: "cimota",
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 3,
        seas: 2
    }, {name: "Crator", id: 132, weapon: 1, rarity: 2, seas: 2}, {
        name: "Scalar",
        creator: "floatingpoint",
        midT: 43,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 3,
        seas: 2
    }, {
        name: "HotRod",
        creator: "Kltter",
        midT: 44,
        glow: !0,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 2
    }, {name: "Insanity", id: 119, weapon: 2, rarity: 4, glow: !0, seas: 2}, {
        name: "Violet",
        id: 133,
        creator: "Jhonxay_Playz",
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Savaged", id: 134, creator: "Vx Bomb", weapon: 1, rarity: 2, seas: 2}, {
        name: "Crimson",
        id: 120,
        creator: "Nxbulah",
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {name: "T3CH", id: 114, creator: "Kltter", weapon: 4, rarity: 3, glow: !0, seas: 2}, {
        name: "SMG Wired",
        id: 115,
        creator: "floatingpoint",
        weapon: 4,
        rarity: 2,
        seas: 2
    }, {name: "AWM Federation", id: 135, creator: "jonschmiddy", weapon: 1, rarity: 2, seas: 2}, {
        name: "Soul",
        id: 121,
        creator: "Zino",
        weapon: 2,
        rarity: 2,
        seas: 2
    }, {name: "RevBG", id: 82, creator: "cimota", weapon: 5, rarity: 2, seas: 2}, {
        name: "Thunder Serpent",
        midT: 0,
        glow: !0,
        noMuz: !0,
        mid: 0,
        weapon: 3,
        spnScl: 1.3,
        scl: .9,
        mScl: .84,
        zOff: 0,
        yOff: 0,
        rarity: 4,
        seas: 2
    }, {name: "Sheikah", id: 136, creator: "FlowerKid", weapon: 1, rarity: 4, glow: !0, seas: 2}, {
        name: "Fairy",
        id: 137,
        creator: "Jhonxay",
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {name: "Trix", id: 83, creator: "Jhonxay", weapon: 5, rarity: 3, glow: !0, seas: 2}, {
        name: "Moonlight",
        creator: "FlowerKid",
        midT: 46,
        glow: !0,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 4,
        seas: 2
    }, {name: "Cassette", id: 116, creator: "Kltter", weapon: 4, rarity: 3, seas: 2}, {
        name: "Damascus",
        id: 122,
        weapon: 2,
        rarity: 3,
        seas: 2
    }, {name: "Toxic Nitro", id: 138, creator: "Kltter", weapon: 1, rarity: 3, glow: !0, seas: 2}, {
        name: "Polly",
        id: 139,
        creator: "Waldo",
        weapon: 1,
        rarity: 1,
        seas: 2
    }, {name: "Nozomu", id: 140, creator: "Jhonxay", weapon: 1, rarity: 2, seas: 2}, {
        name: "Gilded",
        id: 123,
        creator: "Cimota",
        weapon: 2,
        rarity: 2,
        glow: !0,
        seas: 2
    }, {name: "Shinto", id: 124, creator: "Kltter", weapon: 2, rarity: 3, seas: 2}, {
        name: "Lantern",
        id: 125,
        creator: "FlowerKid",
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 2
    }, {
        name: "Diode",
        id: 126,
        creator: "Cimota",
        pulsT: .0015,
        weapon: 2,
        rarity: 4,
        glow: !0,
        seas: 2
    }, {
        name: "Automatis",
        id: 24,
        type: 2,
        keyW: "Back",
        scl: 4.5,
        sclMlt: 3.1,
        spnSpd: .1,
        xOff: -3,
        sitOff: -.9,
        sitOffZ: -.2,
        yOff: -.5,
        rarity: 4,
        seas: 2,
        rAnim: .0015,
        rAnimA: "x"
    }, {
        name: "Osiris' Servant",
        midT: 1,
        glow: !0,
        minGlo: .35,
        noMuz: !0,
        mid: 0,
        weapon: 3,
        pulsT: .0015,
        spnScl: 1.3,
        scl: .9,
        mScl: .84,
        zOff: 0,
        yOff: 0,
        rarity: 5,
        seas: 2
    }, {
        name: "Shatter Wings",
        id: 16,
        tex: 2,
        rarity: 4,
        glow: !0,
        type: 2,
        keyW: "Back",
        seas: 2,
        scl: 3,
        sclMlt: 3,
        sitOff: -.5,
        sitOffZ: -2,
        xOff: -2,
        yOff: -3,
        movT: 3e-4
    }, {
        name: "Shattercore",
        creator: "Xorn XII",
        tex: "weapons/pat/7",
        pat: 7,
        tileS: 3,
        sameGlow: !0,
        movT: -7e-4,
        seas: 2,
        weapon: 1,
        rarity: 5
    }, {
        name: "Outrunner",
        creator: "Kltter",
        id: 128,
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 2
    }, {name: "Draconic", creator: "Wolfgang", id: 129, weapon: 2, rarity: 4, glow: !0, seas: 2}, {
        name: "Orchid Dream",
        creator: "Nxbulah",
        id: 84,
        weapon: 5,
        rarity: 4,
        glow: !0,
        seas: 2
    }, {name: "Hades", creator: "Kltter", id: 85, weapon: 5, rarity: 3, glow: !0, seas: 2}, {
        name: "Aurum",
        id: 86,
        weapon: 5,
        rarity: 2,
        seas: 2
    }, {
        name: "Injection",
        creator: "Cimota",
        id: 74,
        weapon: 7,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 2
    }, {
        name: "Sugarbear",
        id: 2,
        shirtCol: 15956900,
        sleeveCol: 15956900,
        pantsCol: 15956900,
        shoeCol: 15956900,
        seas: 2,
        type: 5,
        rarity: 4
    }, {
        name: "Verb",
        id: 141,
        creator: "FlowerKid",
        weapon: 1,
        rarity: 4,
        glow: !0,
        minGlo: .35,
        pulsT: .0015,
        seas: 2
    }, {
        name: "Easter Egg",
        limT: "Easter",
        keyW: "Sprays",
        id: 60,
        type: 4,
        rarity: 1,
        seas: 2,
        opacity: .75
    }, {
        name: "Egginald",
        limT: "Easter",
        keyW: "Sprays",
        id: 61,
        type: 4,
        rarity: 2,
        seas: 2,
        opacity: .75
    }, {
        name: "Mr Carrot",
        limT: "Easter",
        keyW: "Sprays",
        id: 62,
        type: 4,
        rarity: 2,
        seas: 2,
        opacity: .85,
        frames: 2,
        frameT: 550
    }, {
        name: "Carambit",
        limT: "Easter",
        keyW: "Knife",
        id: 8,
        type: 3,
        seas: 2,
        rarity: 4,
        scl: 2,
        sclMlt: .76,
        xOff: -.5,
        yOff: -2
    }, {
        name: "Carrot Top",
        limT: "Easter",
        keyW: "Hat",
        id: 61,
        rarity: 2,
        type: 1,
        seas: 2,
        sclMlt: .8,
        sitOff: .55,
        scl: 1.6
    }, {
        name: "Mr Chick",
        limT: "Easter",
        keyW: "Hat",
        id: 62,
        rarity: 2,
        type: 1,
        seas: 2,
        sclMlt: .89,
        sitOff: .8,
        xOff: .8,
        scl: 1.6
    }, {
        name: "Bunny",
        limT: "Easter",
        keyW: "Hat",
        id: 63,
        rarity: 2,
        type: 1,
        seas: 2,
        sclMlt: .89,
        sitOff: .8,
        scl: 1.6,
        yOff: -1
    }, {
        name: "Munchie",
        limT: "Easter",
        keyW: "Hat",
        id: 64,
        rarity: 1,
        type: 1,
        seas: 2,
        sclMlt: .5,
        sitOff: 1.6,
        sitOffZ: 1,
        scl: 1.6
    }, {
        name: "Arrowhead",
        limT: "Easter",
        keyW: "Hat",
        id: 65,
        rarity: 1,
        type: 1,
        seas: 2,
        sclMlt: .5,
        sitOff: 1,
        scl: 1.6,
        yOff: -2
    }, {
        name: "Egghead",
        limT: "Easter",
        keyW: "Hat",
        id: 66,
        rarity: 1,
        type: 1,
        seas: 2,
        sclMlt: .7,
        sitOff: .79,
        scl: 1.6
    }, {
        name: "Egg Basket",
        limT: "Easter",
        keyW: "Back",
        id: 25,
        rarity: 2,
        type: 2,
        seas: 2,
        scl: 3,
        sclMlt: 2,
        sitOff: -.8,
        sitOffZ: -.63,
        xOff: -1,
        yOff: -.8,
        xRot: Math.PI
    }, {
        name: "Red Ribbon",
        limT: "Easter",
        keyW: "Back",
        id: 26,
        rarity: 3,
        type: 2,
        seas: 2,
        scl: 3,
        sclMlt: 2,
        sitOff: -1.4,
        sitOffZ: -.63,
        xOff: -2
    }, {
        name: "Carockets",
        limT: "Easter",
        keyW: "Back",
        id: 27,
        rarity: 3,
        type: 2,
        seas: 2,
        scl: 3,
        sclMlt: 2,
        sitOff: -.9,
        sitOffZ: -.63,
        xOff: -.7,
        xRot: Math.PI
    }, {
        name: "Carrot Blades",
        limT: "Easter",
        keyW: "Back",
        id: 28,
        rarity: 3,
        type: 2,
        seas: 2,
        scl: 3,
        sclMlt: 2,
        sitOff: -.9,
        sitOffZ: -.3,
        xOff: -.4,
        yOff: -.6,
        xRot: Math.PI
    }, {
        name: "Chick N' Basket",
        limT: "Easter",
        keyW: "Back",
        id: 29,
        rarity: 3,
        type: 2,
        seas: 2,
        scl: 3,
        sclMlt: 2,
        sitOff: -1.1,
        sitOffZ: -.63,
        xOff: -1,
        xRot: Math.PI
    }, {
        name: "Just N' Egg",
        limT: "Easter",
        keyW: "Back",
        id: 30,
        rarity: 1,
        type: 2,
        seas: 2,
        scl: 3,
        sclMlt: 2.5,
        sitOff: -.5,
        sitOffZ: -.63,
        xOff: -1,
        xRot: Math.PI
    }, {
        name: "Egg Tamer",
        limT: "Easter",
        keyW: "Back",
        id: 31,
        type: 2,
        scl: 3,
        sclMlt: 2.6,
        sitOff: -1.1,
        sitOffZ: -2,
        yOff: -.9,
        xOff: -.3,
        rarity: 5,
        seas: 2,
        rAnim: .0015,
        rAnimA: "x"
    }, {
        name: "Carotine",
        limT: "Easter",
        id: 3,
        shirtCol: 13203507,
        sleeveCol: 3911758,
        pantsCol: 13203507,
        shoeCol: 3911758,
        seas: 2,
        type: 5,
        rarity: 4
    }, {name: "Zig-Zag", limT: "Easter", id: 142, weapon: 1, rarity: 1, seas: 2}, {
        name: "Eco",
        limT: "Easter",
        id: 143,
        weapon: 1,
        rarity: 1,
        seas: 2
    }, {name: "Musk", limT: "Easter", id: 144, weapon: 1, rarity: 1, seas: 2}, {
        name: "Sugar Kiss",
        limT: "Easter",
        id: 145,
        weapon: 1,
        rarity: 1,
        seas: 2
    }, {name: "Candy", limT: "Easter", id: 146, weapon: 1, rarity: 2, seas: 2}, {
        name: "Choc",
        limT: "Easter",
        id: 147,
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {
        name: "Pastel",
        limT: "Easter",
        id: 148,
        creator: "Jonschmiddy",
        weapon: 1,
        rarity: 2,
        seas: 2
    }, {
        name: "BunnyBeam",
        limT: "Easter",
        id: 149,
        creator: "FlowerKid",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 2
    }, {name: "Zig-Zag", limT: "Easter", id: 130, weapon: 2, rarity: 1, seas: 2}, {
        name: "Eco",
        limT: "Easter",
        id: 131,
        weapon: 2,
        rarity: 1,
        seas: 2
    }, {name: "Musk", limT: "Easter", id: 132, weapon: 2, rarity: 1, seas: 2}, {
        name: "Sugar Kiss",
        limT: "Easter",
        id: 133,
        weapon: 2,
        rarity: 1,
        seas: 2
    }, {name: "Candy", limT: "Easter", id: 134, weapon: 2, rarity: 2, seas: 2}, {
        name: "Wiggle",
        limT: "Easter",
        id: 135,
        weapon: 2,
        rarity: 2,
        seas: 2
    }, {name: "Choc", limT: "Easter", id: 136, weapon: 2, rarity: 2, seas: 2}, {
        name: "HyperYolk",
        limT: "Easter",
        id: 137,
        creator: "FlowerKid",
        weapon: 2,
        rarity: 4,
        glow: !0,
        seas: 2
    }, {name: "Farmland", limT: "Easter", id: 138, creator: "Cimota", weapon: 2, rarity: 3, seas: 2}, {
        name: "Horisun",
        limT: "Easter",
        id: 139,
        creator: "Cimota",
        weapon: 2,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 2
    }, {name: "Zig-Zag", limT: "Easter", id: 117, weapon: 4, rarity: 1, seas: 2}, {
        name: "Eco",
        limT: "Easter",
        id: 118,
        weapon: 4,
        rarity: 1,
        seas: 2
    }, {name: "Musk", limT: "Easter", id: 119, weapon: 4, rarity: 1, seas: 2}, {
        name: "Sugar Kiss",
        limT: "Easter",
        id: 120,
        weapon: 4,
        rarity: 1,
        seas: 2
    }, {name: "Candy", limT: "Easter", id: 121, weapon: 4, rarity: 2, seas: 2}, {
        name: "Wiggle",
        limT: "Easter",
        id: 122,
        weapon: 4,
        rarity: 2,
        seas: 2
    }, {name: "Choc", limT: "Easter", id: 123, weapon: 4, rarity: 2, seas: 2}, {
        name: "Festive",
        limT: "Easter",
        id: 124,
        creator: "FlowerKid",
        weapon: 4,
        rarity: 3,
        seas: 2
    }, {
        name: "Zig-Zag",
        limT: "Easter",
        midT: 47,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 2
    }, {
        name: "Eco",
        limT: "Easter",
        midT: 48,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 2
    }, {
        name: "Musk",
        limT: "Easter",
        midT: 49,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 2
    }, {
        name: "Sugar Kiss",
        limT: "Easter",
        midT: 50,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 2
    }, {
        name: "Candy",
        limT: "Easter",
        midT: 51,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 2
    }, {
        name: "Egg Catcher",
        limT: "Easter",
        creator: "FlowerKid",
        midT: 52,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 3,
        seas: 2
    }, {
        name: "Eggcellent",
        limT: "Easter",
        creator: "Cimota",
        midT: 53,
        glow: !0,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 3,
        seas: 2
    }, {name: "Zig-Zag", limT: "Easter", id: 75, weapon: 7, rarity: 1, seas: 2}, {
        name: "Eco",
        limT: "Easter",
        id: 76,
        weapon: 7,
        rarity: 1,
        seas: 2
    }, {name: "Musk", limT: "Easter", id: 77, weapon: 7, rarity: 1, seas: 2}, {
        name: "Sugar Kiss",
        limT: "Easter",
        id: 78,
        weapon: 7,
        rarity: 1,
        seas: 2
    }, {name: "Candy", limT: "Easter", id: 79, weapon: 7, rarity: 1, seas: 2}, {
        name: "Choc",
        limT: "Easter",
        id: 80,
        weapon: 7,
        rarity: 2,
        seas: 2
    }, {
        name: "Sweet Tooth",
        keyW: "Knife",
        limT: "Easter",
        creator: "jonschmiddy",
        flipAnim: !0,
        id: 3,
        tex: 6,
        type: 3,
        scl: 2.6,
        seas: 2,
        sclMlt: 1,
        yOff: -1,
        xOff: -1.5,
        rarity: 4,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Ceretta 92",
        limT: "Easter",
        midT: 2,
        noMuz: !0,
        noEmis: !0,
        mid: 2,
        weapon: 3,
        spnScl: 1.3,
        scl: .9,
        mScl: .84,
        zOff: 0,
        yOff: 0,
        rarity: 5,
        seas: 2
    }, {
        name: "Gold N' Egg",
        limT: "Easter",
        keyW: "Back",
        tex: 1,
        id: 30,
        rarity: 4,
        type: 2,
        seas: 2,
        scl: 3,
        sclMlt: 2.5,
        sitOff: -.5,
        sitOffZ: -.63,
        xOff: -1,
        xRot: Math.PI
    }, {
        name: "Vertigo",
        limT: "Easter",
        keyW: "Hat",
        id: 67,
        rarity: 6,
        type: 1,
        seas: 2,
        sclMlt: .9,
        sitOff: -.8,
        scl: 1.6,
        rAnim: -.0022,
        rAnimA: "y"
    }, {
        name: "U.F.0",
        keyW: "Hat",
        id: 68,
        rarity: 5,
        type: 1,
        seas: 2,
        sclMlt: 1.75,
        sitOff: -.5,
        xOff: -3.6,
        scl: 1.6,
        rAnim: -.0022,
        rAnimA: "y",
        trans: !0,
        glow: !0
    }, {name: "RGB", priceMlt: 4, id: 4, seas: 2, type: 5, rarity: 6, rgb: !0, rgbS: .5}, {
        name: "Raynb0w",
        weapon: 3,
        pat: 1,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        rarity: 5,
        seas: 2
    }, {
        name: "Hackusate",
        mid: 0,
        midT: 41,
        weapon: 10,
        rarity: 5,
        rgb: !0,
        rgbs: .5,
        wire: !0,
        seas: 3
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        weapon: 15,
        rarity: 5,
        seas: 3
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        weapon: 14,
        rarity: 5,
        seas: 3
    }, {
        name: "Coldsnap",
        id: 9,
        shirtCol: 2862847,
        sleeveCol: 16449023,
        pantsCol: 2862847,
        shoeCol: 16449023,
        seas: 3,
        type: 5,
        rarity: 4
    }, {
        name: "Crimson",
        id: 5,
        shirtCol: 16724787,
        sleeveCol: 526344,
        pantsCol: 16724787,
        shoeCol: 526344,
        seas: 3,
        type: 5,
        rarity: 4
    }, {
        name: "Lavender",
        id: 6,
        shirtCol: 11809791,
        sleeveCol: 6501375,
        pantsCol: 11809791,
        shoeCol: 6501375,
        seas: 3,
        type: 5,
        rarity: 4
    }, {name: "Royality", id: 150, creator: "Nxbulah", weapon: 1, rarity: 3, seas: 3}, {
        name: "Firestorm",
        id: 151,
        creator: "Chromatikk",
        weapon: 1,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Sense", id: 152, creator: "Nxbulah", weapon: 1, rarity: 3, glow: !0, seas: 3}, {
        name: "Yürei",
        id: 153,
        creator: "Jhonxay",
        weapon: 1,
        rarity: 2,
        seas: 3
    }, {name: "Unistorm", id: 154, creator: "Skriller33", weapon: 1, rarity: 3, glow: !0, seas: 3}, {
        name: "Vaporride",
        id: 155,
        creator: "jonschmiddy",
        weapon: 1,
        rarity: 2,
        seas: 3
    }, {name: "Alligator", id: 156, creator: "Skriller33", weapon: 1, rarity: 2, seas: 3}, {
        name: "Hakan",
        id: 157,
        creator: "Nxbulah & Kilfy",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Jungle", id: 158, creator: "Skriller33", weapon: 1, rarity: 2, seas: 3}, {
        name: "Void X",
        id: 159,
        creator: "floatingpoint",
        glow: !0,
        weapon: 1,
        rarity: 3,
        seas: 3
    }, {name: "Eira", id: 160, creator: "Nxbulah", weapon: 1, rarity: 3, glow: !0, seas: 3}, {
        name: "Neigh",
        id: 161,
        creator: "_irizu",
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Akkoro",
        id: 162,
        creator: "FlowerKid",
        weapon: 1,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Stickerbomb", id: 163, creator: "Luminae", weapon: 1, rarity: 2, seas: 3}, {
        name: "Combined",
        id: 164,
        creator: "Kltter",
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Wildstyle", id: 165, creator: "FlowerKid", weapon: 1, rarity: 4, glow: !0, seas: 3}, {
        name: "Nova",
        id: 166,
        creator: "FlowerKid",
        weapon: 1,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "The Star", id: 167, creator: "Chromatikk", weapon: 1, rarity: 3, seas: 3}, {
        name: "Lime",
        id: 168,
        weapon: 1,
        rarity: 0,
        seas: 3
    }, {name: "Berry", id: 169, weapon: 1, rarity: 0, seas: 3}, {
        name: "Indigo",
        id: 170,
        weapon: 1,
        rarity: 0,
        seas: 3
    }, {name: "Citrus", id: 171, weapon: 1, rarity: 0, seas: 3}, {
        name: "Tangerine",
        id: 172,
        weapon: 1,
        rarity: 0,
        seas: 3
    }, {name: "Grape", id: 173, weapon: 1, rarity: 0, seas: 3}, {
        name: "Canvas",
        id: 174,
        weapon: 1,
        rarity: 0,
        seas: 3
    }, {name: "Libra", id: 175, weapon: 1, rarity: 0, seas: 3}, {
        name: "Psychedelic",
        id: 176,
        weapon: 1,
        rarity: 0,
        seas: 3
    }, {name: "Violette", id: 177, weapon: 1, rarity: 0, seas: 3}, {
        name: "Marv",
        id: 178,
        weapon: 1,
        rarity: 0,
        seas: 3
    }, {name: "Basel", id: 179, weapon: 1, rarity: 0, seas: 3}, {
        name: "Tiger Blood",
        id: 180,
        weapon: 1,
        rarity: 1,
        seas: 3
    }, {name: "Scalamandre", id: 181, weapon: 1, rarity: 1, seas: 3}, {
        name: "Tiger Maine",
        id: 182,
        weapon: 1,
        rarity: 1,
        seas: 3
    }, {name: "Leopard", id: 183, weapon: 1, rarity: 1, seas: 3}, {
        name: "Metallic Swirl",
        id: 184,
        weapon: 1,
        rarity: 2,
        seas: 3
    }, {name: "Tessilate", id: 185, weapon: 1, rarity: 2, seas: 3}, {
        name: "Bubblegum",
        id: 186,
        weapon: 1,
        rarity: 2,
        seas: 3
    }, {name: "Peppermint", id: 187, weapon: 1, rarity: 1, seas: 3}, {
        name: "Spearmint",
        id: 188,
        weapon: 1,
        rarity: 1,
        seas: 3
    }, {name: "Obsydian", id: 189, weapon: 1, rarity: 2, seas: 3}, {
        name: "Pink Panther",
        id: 190,
        weapon: 1,
        rarity: 1,
        seas: 3
    }, {name: "Amber", id: 191, weapon: 1, rarity: 1, seas: 3}, {
        name: "Clover",
        id: 192,
        weapon: 1,
        rarity: 0,
        seas: 3
    }, {name: "Multicam", id: 193, weapon: 1, rarity: 1, seas: 3}, {
        name: "Aquaric",
        id: 194,
        weapon: 1,
        rarity: 1,
        seas: 3
    }, {name: "Heather", id: 195, weapon: 1, rarity: 1, seas: 3}, {
        name: "Carbonfibre",
        id: 196,
        weapon: 1,
        rarity: 2,
        seas: 3
    }, {name: "Cobra", id: 197, weapon: 1, rarity: 2, seas: 3}, {
        name: "Python",
        id: 198,
        weapon: 1,
        rarity: 2,
        seas: 3
    }, {name: "Lost", id: 199, weapon: 1, rarity: 1, seas: 3}, {
        name: "Blue Maze",
        id: 200,
        weapon: 1,
        rarity: 0,
        seas: 3
    }, {name: "Yellow Maze", id: 201, weapon: 1, rarity: 0, seas: 3}, {
        name: "Morgana",
        id: 202,
        weapon: 1,
        rarity: 1,
        seas: 3
    }, {name: "Sagittarius", id: 140, creator: "Chromatikk", weapon: 2, rarity: 4, seas: 3}, {
        name: "VAX",
        id: 141,
        creator: "KItter",
        weapon: 2,
        rarity: 2,
        glow: !0,
        seas: 3
    }, {name: "Wims", id: 142, creator: "Nxbulah", weapon: 2, rarity: 3, glow: !0, seas: 3}, {
        name: "Amaterasu",
        id: 143,
        creator: "KItter",
        weapon: 2,
        rarity: 3,
        seas: 3
    }, {name: "Kanagawa", id: 144, creator: "FlowerKid", weapon: 2, rarity: 2, seas: 3}, {
        name: "AKS",
        id: 145,
        creator: "KItter",
        weapon: 2,
        rarity: 2,
        seas: 3
    }, {name: "Fragternity", id: 146, creator: "FlowerKid", weapon: 2, rarity: 4, glow: !0, seas: 3}, {
        name: "Eurasian",
        id: 147,
        creator: "Cimota",
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Ifrit",
        id: 148,
        creator: "FlowerKid",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Fantasy", id: 149, creator: "Luminae", weapon: 2, rarity: 3, glow: !0, seas: 3}, {
        name: "Apocalypse",
        id: 150,
        creator: "Lxckless",
        weapon: 2,
        rarity: 5,
        glow: !0,
        seas: 3
    }, {name: "Cheetah", id: 151, creator: "Skriller33", weapon: 2, rarity: 2, seas: 3}, {
        name: "Krunkodore",
        id: 152,
        creator: "KItter",
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Creature",
        id: 153,
        creator: "Jonschmiddy",
        weapon: 2,
        rarity: 3,
        frames: 4,
        frameT: 250,
        seas: 3
    }, {name: "Disco", id: 154, creator: "Cimota", weapon: 2, rarity: 3, glow: !0, seas: 3}, {
        name: "Komics",
        id: 155,
        creator: "Nxbulah",
        weapon: 2,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {name: "Toxic Nitro", id: 156, creator: "KItter", weapon: 2, rarity: 3, glow: !0, seas: 3}, {
        name: "Swarm",
        id: 157,
        creator: "Kilfy",
        weapon: 2,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {name: "Letos", id: 159, creator: "Nxbulah", weapon: 2, rarity: 4, glow: !0, seas: 3}, {
        name: "Machinehead",
        id: 160,
        creator: "jonschmiddy",
        weapon: 2,
        rarity: 4,
        frames: 4,
        frameT: 100,
        seas: 3
    }, {name: "Atheris", id: 161, creator: "Skriller33", weapon: 2, rarity: 3, glow: !0, seas: 3}, {
        name: "Akhenaten",
        id: 162,
        creator: "Nxbulah",
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Futuristic",
        id: 163,
        creator: "Zinoob",
        weapon: 2,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Raiju", id: 164, creator: "Kilfy", weapon: 2, rarity: 5, glow: !0, seas: 3}, {
        name: "Plague",
        id: 165,
        creator: "BigBBaniel",
        weapon: 2,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {
        name: "Frostywolf",
        id: 166,
        creator: "Skriller33",
        weapon: 2,
        rarity: 4,
        glow: !0,
        frames: 2,
        frameT: 250,
        seas: 3
    }, {
        name: "Abducted",
        id: 167,
        creator: "Luminae",
        weapon: 2,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Lime", id: 168, weapon: 2, rarity: 0, seas: 3}, {
        name: "Berry",
        id: 169,
        weapon: 2,
        rarity: 0,
        seas: 3
    }, {name: "Indigo", id: 170, weapon: 2, rarity: 0, seas: 3}, {
        name: "Citrus",
        id: 171,
        weapon: 2,
        rarity: 0,
        seas: 3
    }, {name: "Tangerine", id: 172, weapon: 2, rarity: 0, seas: 3}, {
        name: "Grape",
        id: 173,
        weapon: 2,
        rarity: 0,
        seas: 3
    }, {name: "Canvas", id: 174, weapon: 2, rarity: 0, seas: 3}, {
        name: "Libra",
        id: 175,
        weapon: 2,
        rarity: 0,
        seas: 3
    }, {name: "Psychedelic", id: 176, weapon: 2, rarity: 0, seas: 3}, {
        name: "Violette",
        id: 177,
        weapon: 2,
        rarity: 0,
        seas: 3
    }, {name: "Marv", id: 178, weapon: 2, rarity: 0, seas: 3}, {
        name: "Basel",
        id: 179,
        weapon: 2,
        rarity: 0,
        seas: 3
    }, {name: "Tiger Blood", id: 180, weapon: 2, rarity: 1, seas: 3}, {
        name: "Scalamandre",
        id: 181,
        weapon: 2,
        rarity: 1,
        seas: 3
    }, {name: "Tiger Maine", id: 182, weapon: 2, rarity: 1, seas: 3}, {
        name: "Leopard",
        id: 183,
        weapon: 2,
        rarity: 1,
        seas: 3
    }, {name: "Metallic Swirl", id: 184, weapon: 2, rarity: 2, seas: 3}, {
        name: "Tessilate",
        id: 185,
        weapon: 2,
        rarity: 2,
        seas: 3
    }, {name: "Bubblegum", id: 186, weapon: 2, rarity: 2, seas: 3}, {
        name: "Peppermint",
        id: 187,
        weapon: 2,
        rarity: 1,
        seas: 3
    }, {name: "Spearmint", id: 188, weapon: 2, rarity: 1, seas: 3}, {
        name: "Obsydian",
        id: 189,
        weapon: 2,
        rarity: 2,
        seas: 3
    }, {name: "Pink Panther", id: 190, weapon: 2, rarity: 1, seas: 3}, {
        name: "Amber",
        id: 191,
        weapon: 2,
        rarity: 1,
        seas: 3
    }, {name: "Clover", id: 192, weapon: 2, rarity: 0, seas: 3}, {
        name: "Multicam",
        id: 193,
        weapon: 2,
        rarity: 1,
        seas: 3
    }, {name: "Aquaric", id: 194, weapon: 2, rarity: 1, seas: 3}, {
        name: "Heather",
        id: 195,
        weapon: 2,
        rarity: 1,
        seas: 3
    }, {name: "Carbonfibre", id: 196, weapon: 2, rarity: 2, seas: 3}, {
        name: "Cobra",
        id: 197,
        weapon: 2,
        rarity: 2,
        seas: 3
    }, {name: "Python", id: 198, weapon: 2, rarity: 2, seas: 3}, {
        name: "Lost",
        id: 199,
        weapon: 2,
        rarity: 1,
        seas: 3
    }, {name: "Blue Maze", id: 200, weapon: 2, rarity: 0, seas: 3}, {
        name: "Yellow Maze",
        id: 201,
        weapon: 2,
        rarity: 0,
        seas: 3
    }, {name: "Morgana", id: 202, weapon: 2, rarity: 1, seas: 3}, {
        name: "Aquarium",
        id: 125,
        creator: "Skriller33",
        weapon: 4,
        rarity: 2,
        seas: 3
    }, {name: "Traveller", id: 126, creator: "KItter", weapon: 4, rarity: 3, glow: !0, seas: 3}, {
        name: "Abraxas",
        id: 127,
        creator: "Cimota",
        weapon: 4,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Krunkstruct", id: 128, creator: "Cimota", weapon: 4, rarity: 2, glow: !0, seas: 3}, {
        name: "Bloodmoon",
        id: 129,
        creator: "Nxbulah",
        weapon: 4,
        rarity: 2,
        glow: !0,
        seas: 3
    }, {name: "Doodle", id: 130, creator: "Luminae", weapon: 4, rarity: 3, glow: !0, seas: 3}, {
        name: "WildClaw",
        id: 131,
        creator: "FlowerKid",
        weapon: 4,
        rarity: 5,
        glow: !0,
        seas: 3
    }, {
        name: "Carcinogen",
        id: 132,
        creator: "Floatingpoint",
        weapon: 4,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Spinner", id: 133, creator: "Cimota", weapon: 4, rarity: 3, glow: !0, seas: 3}, {
        name: "Green Waves",
        id: 134,
        creator: "Zinoob",
        weapon: 4,
        rarity: 2,
        seas: 3
    }, {name: "Purple Waves", id: 135, creator: "Zinoob", weapon: 4, rarity: 2, seas: 3}, {
        name: "Goddess",
        id: 136,
        creator: "FlowerKid",
        weapon: 4,
        rarity: 2,
        glow: !0,
        seas: 3
    }, {name: "Bahamut", id: 137, creator: "Kilfy", weapon: 4, rarity: 5, glow: !0, seas: 3}, {
        name: "Occult",
        id: 138,
        creator: "floatingpoint",
        weapon: 4,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Merlin", id: 139, creator: "Cimota", weapon: 4, rarity: 3, glow: !0, seas: 3}, {
        name: "Kittle",
        id: 140,
        creator: "Kltter",
        weapon: 4,
        rarity: 2,
        glow: !0,
        seas: 3
    }, {name: "TV Strike", id: 141, creator: "Kltter", weapon: 4, rarity: 3, glow: !0, seas: 3}, {
        name: "Composite",
        id: 142,
        creator: "Floatingpoint",
        weapon: 4,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {name: "Taurine", id: 143, creator: "Chromatikk", weapon: 4, rarity: 3, glow: !0, seas: 3}, {
        name: "Vandal",
        id: 144,
        creator: "Nxbulah",
        weapon: 4,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {
        name: "Amethyst",
        id: 145,
        creator: "Luminae",
        weapon: 4,
        rarity: 3,
        frames: 4,
        frameT: 250,
        seas: 3
    }, {name: "Northern", id: 146, creator: "Luminae", weapon: 4, rarity: 3, glow: !0, seas: 3}, {
        name: "Agent",
        id: 147,
        creator: "Kltter",
        weapon: 4,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Lester", id: 148, creator: "Kltter", weapon: 4, rarity: 3, glow: !0, seas: 3}, {
        name: "Lime",
        id: 149,
        weapon: 4,
        rarity: 0,
        seas: 3
    }, {name: "Berry", id: 150, weapon: 4, rarity: 0, seas: 3}, {
        name: "Indigo",
        id: 151,
        weapon: 4,
        rarity: 0,
        seas: 3
    }, {name: "Citrus", id: 152, weapon: 4, rarity: 0, seas: 3}, {
        name: "Tangerine",
        id: 153,
        weapon: 4,
        rarity: 0,
        seas: 3
    }, {name: "Grape", id: 154, weapon: 4, rarity: 0, seas: 3}, {
        name: "Canvas",
        id: 155,
        weapon: 4,
        rarity: 0,
        seas: 3
    }, {name: "Libra", id: 156, weapon: 4, rarity: 0, seas: 3}, {
        name: "Psychedelic",
        id: 157,
        weapon: 4,
        rarity: 0,
        seas: 3
    }, {name: "Violette", id: 158, weapon: 4, rarity: 0, seas: 3}, {
        name: "Marv",
        id: 159,
        weapon: 4,
        rarity: 0,
        seas: 3
    }, {name: "Basel", id: 160, weapon: 4, rarity: 0, seas: 3}, {
        name: "Tiger Blood",
        id: 161,
        weapon: 4,
        rarity: 1,
        seas: 3
    }, {name: "Scalamandre", id: 162, weapon: 4, rarity: 1, seas: 3}, {
        name: "Tiger Maine",
        id: 163,
        weapon: 4,
        rarity: 1,
        seas: 3
    }, {name: "Leopard", id: 164, weapon: 4, rarity: 1, seas: 3}, {
        name: "Metallic Swirl",
        id: 165,
        weapon: 4,
        rarity: 2,
        seas: 3
    }, {name: "Tessilate", id: 166, weapon: 4, rarity: 2, seas: 3}, {
        name: "Bubblegum",
        id: 167,
        weapon: 4,
        rarity: 2,
        seas: 3
    }, {name: "Peppermint", id: 168, weapon: 4, rarity: 1, seas: 3}, {
        name: "Spearmint",
        id: 169,
        weapon: 4,
        rarity: 1,
        seas: 3
    }, {name: "Obsydian", id: 170, weapon: 4, rarity: 2, seas: 3}, {
        name: "Pink Panther",
        id: 171,
        weapon: 4,
        rarity: 1,
        seas: 3
    }, {name: "Amber", id: 172, weapon: 4, rarity: 1, seas: 3}, {
        name: "Clover",
        id: 173,
        weapon: 4,
        rarity: 0,
        seas: 3
    }, {name: "Multicam", id: 174, weapon: 4, rarity: 1, seas: 3}, {
        name: "Aquaric",
        id: 175,
        weapon: 4,
        rarity: 1,
        seas: 3
    }, {name: "Heather", id: 176, weapon: 4, rarity: 1, seas: 3}, {
        name: "Carbonfibre",
        id: 177,
        weapon: 4,
        rarity: 2,
        seas: 3
    }, {name: "Cobra", id: 178, weapon: 4, rarity: 2, seas: 3}, {
        name: "Python",
        id: 179,
        weapon: 4,
        rarity: 2,
        seas: 3
    }, {name: "Lost", id: 180, weapon: 4, rarity: 1, seas: 3}, {
        name: "Blue Maze",
        id: 181,
        weapon: 4,
        rarity: 0,
        seas: 3
    }, {name: "Yellow Maze", id: 182, weapon: 4, rarity: 0, seas: 3}, {
        name: "Morgana",
        id: 183,
        weapon: 4,
        rarity: 1,
        seas: 3
    }, {
        name: "Lineride",
        midT: 54,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        pulsT: .0015,
        creator: "Kltter",
        weapon: 6,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {
        name: "Halogen",
        midT: 55,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "floatingpoint",
        weapon: 6,
        rarity: 2,
        glow: !0,
        seas: 3
    }, {
        name: "Adventurine",
        midT: 56,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Nxbulah",
        weapon: 6,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Surreal",
        midT: 57,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Nxbulah",
        weapon: 6,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {
        name: "Red Supersport",
        midT: 58,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Kltter",
        weapon: 6,
        rarity: 3,
        seas: 3
    }, {
        name: "Pink Supersport",
        midT: 59,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Kltter",
        weapon: 6,
        rarity: 3,
        seas: 3
    }, {
        name: "Exponentiat",
        midT: 60,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Cimota",
        glow: !0,
        weapon: 6,
        rarity: 2,
        seas: 3
    }, {
        name: "Ethereal",
        midT: 61,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Nxbulah",
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Spectate",
        midT: 62,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Cimota",
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Sunburst",
        midT: 63,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "FlowerKid",
        weapon: 6,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {
        name: "Hydrofluric",
        midT: 64,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Cimota",
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Mech Rainbow",
        midT: 65,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Luminae",
        weapon: 6,
        rarity: 2,
        glow: !0,
        seas: 3
    }, {
        name: "Midnight",
        midT: 66,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Luminae",
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Lime",
        midT: 67,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Berry",
        midT: 68,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Indigo",
        midT: 69,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Citrus",
        midT: 70,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Tangerine",
        midT: 71,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Grape",
        midT: 72,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Canvas",
        midT: 73,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Libra",
        midT: 74,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Psychedelic",
        midT: 75,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Violette",
        midT: 76,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Marv",
        midT: 77,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Basel",
        midT: 78,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Tiger Blood",
        midT: 79,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 3
    }, {
        name: "Scalamandre",
        midT: 80,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 3
    }, {
        name: "Tiger Maine",
        midT: 81,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 3
    }, {
        name: "Leopard",
        midT: 82,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 3
    }, {
        name: "Metallic Swirl",
        midT: 83,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 3
    }, {
        name: "Tessilate",
        midT: 84,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 3
    }, {
        name: "Bubblegum",
        midT: 85,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 3
    }, {
        name: "Peppermint",
        midT: 86,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 3
    }, {
        name: "Spearmint",
        midT: 87,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 3
    }, {
        name: "Obsydian",
        midT: 88,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 3
    }, {
        name: "Pink Panther",
        midT: 89,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 3
    }, {
        name: "Amber",
        midT: 90,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 3
    }, {
        name: "Clover",
        midT: 91,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Multicam",
        midT: 92,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 3
    }, {
        name: "Aquaric",
        midT: 93,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 3
    }, {
        name: "Heather",
        midT: 94,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 3
    }, {
        name: "Carbonfibre",
        midT: 95,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 3
    }, {
        name: "Cobra",
        midT: 96,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 3
    }, {
        name: "Python",
        midT: 97,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 3
    }, {
        name: "Lost",
        midT: 98,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 3
    }, {
        name: "Blue Maze",
        midT: 99,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Yellow Maze",
        midT: 100,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 3
    }, {
        name: "Morgana",
        midT: 101,
        mid: 0,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 3
    }, {name: "Excalibur", id: 87, creator: "Nxbulah", weapon: 5, rarity: 3, seas: 3}, {
        name: "Zeus",
        id: 88,
        creator: "Kltter",
        weapon: 5,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Luminous", id: 89, creator: "Nxbulah", weapon: 5, rarity: 4, glow: !0, seas: 3}, {
        name: "Depth",
        id: 90,
        creator: "jonschmiddy",
        weapon: 5,
        rarity: 2,
        seas: 3
    }, {
        name: "Absinthe",
        id: 91,
        creator: "Cimota",
        weapon: 5,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Scoria",
        id: 92,
        creator: "Cimota",
        weapon: 5,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Krunkitis",
        id: 93,
        creator: "Electrode_",
        weapon: 5,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {name: "Pearlescent", id: 94, creator: "Cimota", weapon: 5, rarity: 2, seas: 3}, {
        name: "Zap",
        id: 95,
        creator: "Kilfy",
        weapon: 5,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Midas", id: 96, creator: "FlowerKid", weapon: 5, rarity: 3, glow: !0, seas: 3}, {
        name: "Sea Wanderer",
        id: 97,
        creator: "Nxbulah",
        weapon: 5,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Crystallize",
        id: 98,
        creator: "Cimota",
        weapon: 5,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Lime", id: 99, weapon: 5, rarity: 0, seas: 3}, {
        name: "Berry",
        id: 100,
        weapon: 5,
        rarity: 0,
        seas: 3
    }, {name: "Indigo", id: 101, weapon: 5, rarity: 0, seas: 3}, {
        name: "Citrus",
        id: 102,
        weapon: 5,
        rarity: 0,
        seas: 3
    }, {name: "Tangerine", id: 103, weapon: 5, rarity: 0, seas: 3}, {
        name: "Grape",
        id: 104,
        weapon: 5,
        rarity: 0,
        seas: 3
    }, {name: "Canvas", id: 105, weapon: 5, rarity: 0, seas: 3}, {
        name: "Libra",
        id: 106,
        weapon: 5,
        rarity: 0,
        seas: 3
    }, {name: "Psychedelic", id: 107, weapon: 5, rarity: 0, seas: 3}, {
        name: "Violette",
        id: 108,
        weapon: 5,
        rarity: 0,
        seas: 3
    }, {name: "Marv", id: 109, weapon: 5, rarity: 0, seas: 3}, {
        name: "Basel",
        id: 110,
        weapon: 5,
        rarity: 0,
        seas: 3
    }, {name: "Tiger Blood", id: 111, weapon: 5, rarity: 1, seas: 3}, {
        name: "Scalamandre",
        id: 112,
        weapon: 5,
        rarity: 1,
        seas: 3
    }, {name: "Tiger Maine", id: 113, weapon: 5, rarity: 1, seas: 3}, {
        name: "Leopard",
        id: 114,
        weapon: 5,
        rarity: 1,
        seas: 3
    }, {name: "Metallic Swirl", id: 115, weapon: 5, rarity: 2, seas: 3}, {
        name: "Tessilate",
        id: 116,
        weapon: 5,
        rarity: 2,
        seas: 3
    }, {name: "Bubblegum", id: 117, weapon: 5, rarity: 2, seas: 3}, {
        name: "Peppermint",
        id: 118,
        weapon: 5,
        rarity: 1,
        seas: 3
    }, {name: "Spearmint", id: 119, weapon: 5, rarity: 1, seas: 3}, {
        name: "Obsydian",
        id: 120,
        weapon: 5,
        rarity: 2,
        seas: 3
    }, {name: "Pink Panther", id: 121, weapon: 5, rarity: 1, seas: 3}, {
        name: "Amber",
        id: 122,
        weapon: 5,
        rarity: 1,
        seas: 3
    }, {name: "Clover", id: 123, weapon: 5, rarity: 0, seas: 3}, {
        name: "Multicam",
        id: 124,
        weapon: 5,
        rarity: 1,
        seas: 3
    }, {name: "Aquaric", id: 125, weapon: 5, rarity: 1, seas: 3}, {
        name: "Heather",
        id: 126,
        weapon: 5,
        rarity: 1,
        seas: 3
    }, {name: "Carbonfibre", id: 127, weapon: 5, rarity: 2, seas: 3}, {
        name: "Cobra",
        id: 128,
        weapon: 5,
        rarity: 2,
        seas: 3
    }, {name: "Python", id: 129, weapon: 5, rarity: 2, seas: 3}, {
        name: "Lost",
        id: 130,
        weapon: 5,
        rarity: 1,
        seas: 3
    }, {name: "Blue Maze", id: 131, weapon: 5, rarity: 0, seas: 3}, {
        name: "Yellow Maze",
        id: 132,
        weapon: 5,
        rarity: 0,
        seas: 3
    }, {name: "Morgana", id: 133, weapon: 5, rarity: 1, seas: 3}, {
        name: "Playmat",
        creator: "Skriller33",
        id: 67,
        rarity: 4,
        type: 4,
        frames: 4,
        frameT: 250,
        keyW: "Spray",
        seas: 3
    }, {
        name: "Anti-cheat",
        creator: "Bodeneinheit",
        id: 68,
        rarity: 4,
        type: 4,
        frames: 4,
        frameT: 450,
        keyW: "Spray",
        seas: 3
    }, {name: "Vince OP", creator: "Bodeneinheit", id: 69, rarity: 2, type: 4, keyW: "Spray", seas: 3}, {
        name: "200 IQ",
        creator: "krunchiez",
        id: 70,
        rarity: 1,
        type: 4,
        keyW: "Spray",
        seas: 3
    }, {name: "Alien", creator: "MBR7CLeo", id: 71, rarity: 1, type: 4, keyW: "Spray", seas: 3}, {
        name: "Krunkitis",
        creator: "NvrRshABlyat",
        id: 72,
        rarity: 2,
        type: 4,
        keyW: "Spray",
        seas: 3
    }, {name: "SMH", creator: "OneEyedOwl", id: 73, rarity: 1, type: 4, keyW: "Spray", seas: 3}, {
        name: "Race",
        creator: "ReDeagle",
        id: 74,
        rarity: 1,
        type: 4,
        keyW: "Spray",
        seas: 3
    }, {name: "Fair Trades", creator: "Seasefire", id: 75, rarity: 2, type: 4, keyW: "Spray", seas: 3}, {
        name: "Lucky",
        creator: "TrGPoTaTo",
        id: 76,
        rarity: 0,
        type: 4,
        keyW: "Spray",
        seas: 3
    }, {name: "Arrow", creator: "TrGPoTaTo", id: 77, rarity: 0, type: 4, keyW: "Spray", seas: 3}, {
        name: "Dream",
        creator: "Nxbulah",
        id: 78,
        rarity: 3,
        type: 4,
        keyW: "Spray",
        seas: 3
    }, {
        name: "Sonar",
        id: 81,
        creator: "Cimota",
        weapon: 7,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Icevein",
        id: 82,
        creator: "FlowerKid",
        weapon: 7,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Demonvein",
        id: 83,
        creator: "FlowerKid",
        weapon: 7,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Tartrazine",
        id: 84,
        creator: "Cimota",
        weapon: 7,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Diopside",
        id: 85,
        creator: "Cimota",
        weapon: 7,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Lime", id: 86, weapon: 7, rarity: 0, seas: 3}, {
        name: "Berry",
        id: 87,
        weapon: 7,
        rarity: 0,
        seas: 3
    }, {name: "Indigo", id: 88, weapon: 7, rarity: 0, seas: 3}, {
        name: "Citrus",
        id: 89,
        weapon: 7,
        rarity: 0,
        seas: 3
    }, {name: "Tangerine", id: 90, weapon: 7, rarity: 0, seas: 3}, {
        name: "Grape",
        id: 91,
        weapon: 7,
        rarity: 0,
        seas: 3
    }, {name: "Canvas", id: 92, weapon: 7, rarity: 0, seas: 3}, {
        name: "Libra",
        id: 93,
        weapon: 7,
        rarity: 0,
        seas: 3
    }, {name: "Psychedelic", id: 94, weapon: 7, rarity: 0, seas: 3}, {
        name: "Violette",
        id: 95,
        weapon: 7,
        rarity: 0,
        seas: 3
    }, {name: "Marv", id: 96, weapon: 7, rarity: 0, seas: 3}, {
        name: "Basel",
        id: 97,
        weapon: 7,
        rarity: 0,
        seas: 3
    }, {name: "Tiger Blood", id: 98, weapon: 7, rarity: 1, seas: 3}, {
        name: "Scalamandre",
        id: 99,
        weapon: 7,
        rarity: 1,
        seas: 3
    }, {name: "Tiger Maine", id: 100, weapon: 7, rarity: 1, seas: 3}, {
        name: "Leopard",
        id: 101,
        weapon: 7,
        rarity: 1,
        seas: 3
    }, {name: "Metallic Swirl", id: 102, weapon: 7, rarity: 2, seas: 3}, {
        name: "Tessilate",
        id: 103,
        weapon: 7,
        rarity: 2,
        seas: 3
    }, {name: "Bubblegum", id: 104, weapon: 7, rarity: 2, seas: 3}, {
        name: "Peppermint",
        id: 105,
        weapon: 7,
        rarity: 1,
        seas: 3
    }, {name: "Spearmint", id: 106, weapon: 7, rarity: 1, seas: 3}, {
        name: "Obsydian",
        id: 107,
        weapon: 7,
        rarity: 2,
        seas: 3
    }, {name: "Pink Panther", id: 108, weapon: 7, rarity: 1, seas: 3}, {
        name: "Amber",
        id: 109,
        weapon: 7,
        rarity: 1,
        seas: 3
    }, {name: "Clover", id: 110, weapon: 7, rarity: 0, seas: 3}, {
        name: "Multicam",
        id: 111,
        weapon: 7,
        rarity: 1,
        seas: 3
    }, {name: "Aquaric", id: 112, weapon: 7, rarity: 1, seas: 3}, {
        name: "Heather",
        id: 113,
        weapon: 7,
        rarity: 1,
        seas: 3
    }, {name: "Carbonfibre", id: 114, weapon: 7, rarity: 2, seas: 3}, {
        name: "Cobra",
        id: 115,
        weapon: 7,
        rarity: 2,
        seas: 3
    }, {name: "Python", id: 116, weapon: 7, rarity: 2, seas: 3}, {
        name: "Lost",
        id: 117,
        weapon: 7,
        rarity: 1,
        seas: 3
    }, {name: "Blue Maze", id: 118, weapon: 7, rarity: 0, seas: 3}, {
        name: "Yellow Maze",
        id: 119,
        weapon: 7,
        rarity: 0,
        seas: 3
    }, {name: "Morgana", id: 120, weapon: 7, rarity: 1, seas: 3}, {
        name: "Ballistic Knife",
        id: 9,
        rarity: 4,
        type: 3,
        sxOff: .4,
        scl: 1.4,
        yOff: -2,
        keyW: "Melee",
        seas: 3
    }, {
        name: "Samurai Sword",
        id: 10,
        rarity: 4,
        type: 3,
        sxRot: -.3,
        syOff: .1,
        szOff: -.1,
        scl: .8,
        yOff: -1,
        xOff: -1,
        keyW: "Melee",
        seas: 3
    }, {
        name: "Acid Razer",
        id: 11,
        rarity: 5,
        type: 3,
        sxOff: .02,
        sclMlt: 1.1,
        scl: 2,
        yOff: -2,
        glow: !0,
        pulsT: .1,
        keyW: "Melee",
        seas: 3
    }, {
        name: "Lumus",
        tex: 1,
        id: 11,
        rarity: 5,
        sxOff: .02,
        sclMlt: 1.1,
        glow: !0,
        scl: 2,
        yOff: -2,
        pulsT: .1,
        type: 3,
        keyW: "Melee",
        seas: 3
    }, {
        name: "Heated Crowbar",
        id: 12,
        rarity: 5,
        type: 3,
        scl: .8,
        yOff: -1,
        xOff: -.5,
        keyW: "Melee",
        glow: !0,
        pulsT: .0015,
        seas: 3,
        snd: !0
    }, {
        name: "Disintegrator",
        mid: 0,
        glow: !0,
        limited: !0,
        pulsT: .03,
        seas: 3,
        weapon: 2,
        rarity: 6
    }, {name: "Artifact XY", id: 0, weapon: 12, rarity: 4, glow: !0, pulsT: .0015, seas: 3}, {
        name: "Anti-Matter",
        mid: 4,
        glow: !0,
        limited: !0,
        pulsT: .0015,
        scl: .9,
        mScl: 1,
        spnScl: 1.35,
        zOff: -.25,
        seas: 3,
        yOff: .05,
        weapon: 1,
        rarity: 6
    }, {
        name: "Good Ol' Days",
        mid: 3,
        scl: .9,
        mScl: 1,
        spnScl: 1.35,
        zOff: -.25,
        seas: 3,
        yOff: .05,
        weapon: 1,
        rarity: 5
    }, {
        name: "Blonde Beard",
        id: 69,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Brown Beard",
        tex: 1,
        id: 69,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {name: "Aged Beard", id: 70, rarity: 1, type: 1, keyW: "Hat", sclMlt: .5, sitOff: .8, seas: 3}, {
        name: "Bandito",
        id: 71,
        rarity: 4,
        glow: !0,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Purple Beanie",
        id: 72,
        rarity: 0,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        yOff: -1.5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Red Beanie",
        tex: 1,
        id: 72,
        rarity: 0,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        yOff: -1.5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Blue Pom-Pom",
        id: 73,
        rarity: 0,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        yOff: -1.5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Green Pom-Pom",
        tex: 1,
        id: 73,
        rarity: 0,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        yOff: -1.5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Love-Cap",
        id: 74,
        rarity: 0,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        yOff: -1.5,
        xOff: 1,
        sitOff: .8,
        seas: 3
    }, {
        name: "Lucky-Cap",
        tex: 1,
        id: 74,
        rarity: 0,
        type: 1,
        keyW: "Hat",
        yOff: -1.5,
        xOff: -1,
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Chef",
        id: 75,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        yOff: -1.5,
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {name: "Hypno", id: 76, rarity: 3, type: 1, keyW: "Hat", sclMlt: .5, sitOff: .8, seas: 3}, {
        name: "Hotdogger",
        id: 77,
        rarity: 2,
        type: 1,
        keyW: "Hat",
        noHead: !0,
        sclMlt: .7,
        sitOff: .71,
        seas: 3
    }, {
        name: "Sunflower",
        id: 78,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        yOff: -1,
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Lavender",
        tex: 1,
        id: 78,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        yOff: -1,
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Cirangle",
        id: 79,
        rarity: 3,
        glow: !0,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        yOff: -4,
        sitOff: .8,
        seas: 3
    }, {
        name: "Django",
        id: 80,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        yOff: -1.5,
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Cattleman",
        tex: 1,
        id: 80,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        yOff: -1.5,
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Chosen One",
        id: 81,
        rarity: 4,
        type: 1,
        keyW: "Hat",
        yOff: -1,
        sclMlt: .62,
        sitOff: -.35,
        rAnim: -.004,
        rAnimA: "y",
        seas: 3
    }, {
        name: "Sailor",
        id: 82,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        yOff: -1.5,
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Planetarium",
        id: 83,
        rarity: 5,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: -.68,
        rAnim: -.0016,
        rAnimA: "y",
        seas: 3
    }, {
        name: "Acid Reaper",
        id: 84,
        rarity: 4,
        glow: !0,
        noHead: !0,
        type: 1,
        keyW: "Hat",
        xOff: .5,
        yOff: -.5,
        sclMlt: .5,
        sitOff: 1.05,
        seas: 3
    }, {
        name: "Ushanka",
        id: 85,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        yOff: -1.5,
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {name: "Private", id: 86, rarity: 1, type: 1, keyW: "Hat", sclMlt: .5, sitOff: .8, seas: 3}, {
        name: "Sergeant",
        id: 87,
        rarity: 2,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Undead",
        id: 88,
        rarity: 4,
        glow: !0,
        noHead: !0,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Witch",
        id: 89,
        rarity: 2,
        type: 1,
        keyW: "Hat",
        yOff: -1.5,
        sclMlt: .5,
        xOff: 1,
        sitOff: .8,
        seas: 3
    }, {
        name: "Farmer",
        id: 90,
        rarity: 0,
        type: 1,
        keyW: "Hat",
        yOff: -1,
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Helper",
        tex: 1,
        id: 90,
        rarity: 0,
        type: 1,
        keyW: "Hat",
        yOff: -1,
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Purple Bandana",
        id: 91,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Red Bandana",
        tex: 1,
        id: 91,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Rave Glasses",
        id: 92,
        rarity: 3,
        glow: !0,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        spnScl: 1.6,
        xOff: 2,
        yOff: -2,
        sitOff: 1,
        seas: 3
    }, {
        name: "Blue Headband",
        id: 93,
        rarity: 0,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        yOff: -1,
        sitOff: 1,
        seas: 3
    }, {
        name: "Red Headband",
        tex: 1,
        id: 93,
        rarity: 0,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        yOff: -1,
        sitOff: 1,
        seas: 3
    }, {
        name: "Shlem",
        id: 94,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        yOff: -1,
        sitOff: .9,
        seas: 3
    }, {
        name: "Headshot",
        id: 95,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        yOff: -1,
        sitOff: .9,
        xOff: .5,
        yOff: -1,
        seas: 3
    }, {
        name: "Big Apple",
        id: 96,
        rarity: 2,
        type: 1,
        keyW: "Hat",
        noHead: !0,
        sclMlt: .56,
        sitOff: .75,
        seas: 3
    }, {
        name: "Green Alien",
        id: 97,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        noHead: !0,
        sclMlt: .65,
        spnScl: 1.2,
        sitOff: .62,
        seas: 3
    }, {
        name: "Purple Alien",
        tex: 1,
        id: 97,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        noHead: !0,
        sclMlt: .65,
        spnScl: 1.2,
        sitOff: .62,
        seas: 3
    }, {
        name: "Banananana",
        id: 98,
        rarity: 2,
        type: 1,
        keyW: "Hat",
        noHead: !0,
        sclMlt: .6,
        sitOff: .71,
        seas: 3
    }, {
        name: "Coolman",
        id: 99,
        rarity: 2,
        type: 1,
        keyW: "Hat",
        noHead: !0,
        sclMlt: .56,
        sitOff: .75,
        seas: 3
    }, {
        name: "Green Headset",
        id: 100,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        yOff: -1.5,
        sitOff: .9,
        seas: 3
    }, {
        name: "Red Headset",
        tex: 1,
        id: 100,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        yOff: -1.5,
        sclMlt: .5,
        sitOff: .9,
        seas: 3
    }, {
        name: "Bot 1",
        id: 101,
        rarity: 4,
        glow: !0,
        frames: 4,
        frameT: 250,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .9,
        seas: 3
    }, {
        name: "Mustache",
        id: 102,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        spnScl: 1.4,
        yOff: -1,
        xOff: 3,
        sitOff: .9,
        seas: 3
    }, {
        name: "Bane",
        id: 103,
        rarity: 3,
        glow: !0,
        type: 1,
        keyW: "Hat",
        yOff: -1,
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Ducky",
        id: 104,
        rarity: 2,
        type: 1,
        noHead: !0,
        keyW: "Hat",
        sclMlt: .8,
        spnScl: 1.4,
        xOff: .5,
        yOff: -1,
        sitOff: .75,
        seas: 3
    }, {
        name: "Pot",
        id: 105,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .8,
        xOff: -1.5,
        yOff: -.5,
        seas: 3
    }, {
        name: "Boom Boxer",
        id: 106,
        rarity: 4,
        glow: !0,
        type: 1,
        keyW: "Hat",
        sclMlt: .6,
        sitOff: .8,
        yOff: -1,
        seas: 3
    }, {
        name: "Santa",
        id: 107,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .9,
        xOff: -1,
        yOff: -1,
        seas: 3
    }, {
        name: "Splinter",
        id: 108,
        rarity: 4,
        glow: !0,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .7,
        seas: 3
    }, {
        name: "Wizard",
        id: 109,
        rarity: 2,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .7,
        yOff: -1,
        seas: 3
    }, {name: "Hackusate", id: 203, weapon: 2, rarity: 5, rgb: !0, rgbs: .5, wire: !0, seas: 3}, {
        name: "Hackusate",
        id: 184,
        weapon: 4,
        rarity: 5,
        rgb: !0,
        rgbs: .5,
        wire: !0,
        seas: 3
    }, {name: "Hackusate", id: 121, weapon: 7, rarity: 5, rgb: !0, rgbs: .5, wire: !0, seas: 3}, {
        name: "Hackusate",
        id: 74,
        weapon: 9,
        rarity: 5,
        rgb: !0,
        rgbs: .5,
        wire: !0,
        seas: 3
    }, {
        name: "Flag",
        id: 32,
        rarity: 1,
        type: 2,
        keyW: "Body",
        sclMlt: 2,
        sitOff: -1.3,
        sitOffZ: -.6,
        seas: 3
    }, {
        name: "KrunkBoy",
        id: 33,
        rarity: 3,
        frames: 4,
        frameT: 500,
        type: 2,
        keyW: "Body",
        sclMlt: 2.2,
        spnScl: 4,
        xRot: 2,
        sitOff: -.7,
        sitOffZ: -.6,
        seas: 3
    }, {
        name: "Skeleton Grip",
        id: 34,
        rarity: 2,
        type: 2,
        keyW: "Body",
        sclMlt: 2.2,
        spnScl: 2.4,
        sitOff: -.7,
        sitOffZ: -.65,
        seas: 3
    }, {
        name: "Spider Grip",
        tex: 1,
        id: 34,
        rarity: 2,
        type: 2,
        keyW: "Body",
        sclMlt: 2.2,
        spnScl: 2.4,
        xOff: -1,
        sitOff: -.7,
        sitOffZ: -.65,
        seas: 3
    }, {
        name: "Sir HotDog",
        id: 35,
        rarity: 2,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        xRot: 2,
        xOff: -1.5,
        yOff: -.5,
        spnScl: 2.6,
        sitOff: -.1,
        sitOffZ: -.65,
        seas: 3
    }, {
        name: "Green Kite",
        id: 36,
        rarity: 0,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        spnScl: 2.6,
        sitOff: -1.1,
        sitOffZ: -.65,
        seas: 3
    }, {
        name: "Lantern",
        id: 37,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        type: 2,
        keyW: "Body",
        sclMlt: 2.6,
        spnScl: 3.4,
        yOff: .5,
        xOff: -3,
        xRot: 2,
        sitOff: -.75,
        sitOffZ: -.75,
        seas: 3
    }, {
        name: "Hellbound",
        id: 38,
        rarity: 3,
        glow: !0,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        spnScl: 2.6,
        xOff: -3,
        yOff: -1,
        sitOff: -1.1,
        sitOffZ: -.6,
        seas: 3
    }, {
        name: "Nuke",
        id: 39,
        rarity: 3,
        glow: !0,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        spnScl: 3,
        xOff: -3,
        xRot: 2,
        sitOff: -1.1,
        sitOffZ: -.6,
        seas: 3
    }, {
        name: "Roman Shield",
        id: 40,
        rarity: 2,
        type: 2,
        keyW: "Body",
        sclMlt: 2.6,
        spnScl: 2.6,
        xOff: -2,
        xRot: 2,
        sitOff: -.85,
        sitOffZ: -.6,
        seas: 3
    }, {
        name: "Krunky Safe",
        id: 41,
        rarity: 1,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        spnScl: 2.6,
        xRot: 2,
        xOff: -2,
        sitOff: -1.1,
        sitOffZ: -.6,
        seas: 3
    }, {
        name: "Yellow Scuba",
        id: 43,
        rarity: 1,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        spnScl: 2.6,
        sitOff: -1.1,
        sitOffZ: -.6,
        xOff: -2,
        seas: 3
    }, {
        name: "Blue Scuba",
        tex: 1,
        id: 43,
        rarity: 1,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        spnScl: 2.6,
        sitOff: -1.1,
        sitOffZ: -.6,
        xOff: -2,
        seas: 3
    }, {
        name: "Agares",
        id: 44,
        rarity: 4,
        glow: !0,
        type: 2,
        keyW: "Body",
        sclMlt: 2.2,
        spnScl: 2.4,
        xOff: -1,
        zOff: 1,
        sitOff: -.9,
        sitOffZ: -.6,
        trans: !0,
        seas: 3
    }, {
        name: "Red Ski",
        id: 45,
        rarity: 1,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        spnScl: 2.6,
        xOff: -1,
        sitOff: -.9,
        sitOffZ: -.6,
        seas: 3
    }, {
        name: "Green Ski",
        tex: 1,
        id: 45,
        rarity: 1,
        type: 2,
        keyW: "Body",
        spnScl: 2.6,
        xOff: -1,
        sclMlt: 2.4,
        sitOff: -.9,
        sitOffZ: -.6,
        seas: 3
    }, {
        name: "Black Widow",
        id: 46,
        rarity: 5,
        glow: !0,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        spnScl: 2.6,
        xOff: 1,
        xRot: 2.5,
        sitOff: -.9,
        sitOffZ: -.6,
        seas: 3
    }, {
        name: "Viking",
        id: 48,
        rarity: 3,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        spnScl: 2.6,
        xOff: -2,
        zOff: -1,
        xRot: 2,
        sitOff: -.9,
        sitOffZ: -.6,
        seas: 3
    }, {
        name: "Kruncade",
        id: 50,
        rarity: 3,
        frames: 2,
        frameT: 250,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        xRot: 2,
        xOff: -1.5,
        yOff: -.5,
        spnScl: 2.6,
        sitOff: -1,
        sitOffZ: -.6,
        seas: 3
    }, {
        name: "Fully Loaded",
        id: 51,
        rarity: 3,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        sitOff: -1.1,
        sitOffZ: -.6,
        xOff: -2,
        spnScl: 2.6,
        seas: 3
    }, {
        name: "1 Year Cape",
        id: 52,
        rarity: 5,
        side: 2,
        glow: !0,
        type: 2,
        keyW: "Body",
        xRot: 2,
        xOff: -1,
        yOff: .5,
        spnScl: 2.6,
        sclMlt: 2.4,
        sitOff: -.5,
        sitOffZ: -.6,
        seas: 3,
        noSale: !0,
        blackM: !0,
        funds: 100,
        reqT: "1 Year Account Age",
        req: function (e) {
            return (new Date).getTime() - new Date(e.createDate).getTime() >= 31536e6
        }
    }, {
        name: "2 Year Cape",
        tex: 1,
        id: 52,
        rarity: 5,
        side: 2,
        glow: !0,
        type: 2,
        keyW: "Body",
        xRot: 2,
        xOff: -1,
        yOff: .5,
        spnScl: 2.6,
        sclMlt: 2.4,
        sitOff: -.5,
        sitOffZ: -.6,
        seas: 3,
        noSale: !0,
        blackM: !0,
        funds: 100,
        reqT: "2 Year Account Age",
        req: function (e) {
            return (new Date).getTime() - new Date(e.createDate).getTime() >= 63072e6
        }
    }, {
        name: "Arunasura",
        id: 53,
        rarity: 4,
        glow: !0,
        type: 2,
        keyW: "Body",
        xOff: -2.5,
        yOff: -2,
        xRot: -.5,
        spnScl: 2.6,
        sclMlt: 2.4,
        sitOff: -.65,
        sitOffZ: -.6,
        seas: 3
    }, {
        name: "Barong",
        tex: 1,
        id: 53,
        rarity: 4,
        glow: !0,
        type: 2,
        keyW: "Body",
        xOff: -2.5,
        yOff: -2,
        xRot: -.5,
        spnScl: 2.6,
        sclMlt: 2.4,
        sitOff: -.65,
        sitOffZ: -.6,
        seas: 3
    }, {
        name: "Pink Glazed",
        id: 54,
        rarity: 0,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        spnScl: 2.6,
        xOff: -2,
        sitOff: -.5,
        sitOffZ: -.7,
        seas: 3
    }, {
        name: "Blue Glazed",
        tex: 1,
        id: 54,
        rarity: 0,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        spnScl: 2.6,
        xOff: -2,
        sitOff: -.5,
        sitOffZ: -.7,
        seas: 3
    }, {
        name: "Krunk-Bull",
        id: 55,
        rarity: 0,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        spnScl: 2.6,
        xOff: -2,
        sitOff: -1.4,
        sitOffZ: -.7,
        seas: 3
    }, {
        name: "Soul Reaper",
        tex: 1,
        id: 84,
        rarity: 4,
        glow: !0,
        noHead: !0,
        type: 1,
        keyW: "Hat",
        xOff: 1,
        yOff: -.5,
        sclMlt: .5,
        sitOff: 1.05,
        seas: 3
    }, {
        name: "Terra",
        id: 7,
        shirtCol: 1486651,
        sleeveCol: 1842204,
        pantsCol: 1486651,
        shoeCol: 1842204,
        seas: 3,
        type: 5,
        rarity: 4
    }, {
        name: "Amberite",
        id: 8,
        shirtCol: 16765734,
        sleeveCol: 1842204,
        pantsCol: 16765734,
        shoeCol: 1842204,
        seas: 3,
        type: 5,
        rarity: 4
    }, {name: "Moon Juice", id: 205, weapon: 1, rarity: 4, glow: !0, seas: 3}, {
        name: "Shift",
        mid: 0,
        midT: 2,
        creator: "Luminae",
        weapon: 8,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Lepton",
        mid: 0,
        midT: 3,
        creator: "jonschmiddy",
        weapon: 8,
        rarity: 4,
        pulsT: .0015,
        frames: 4,
        frameT: 250,
        seas: 3
    }, {
        name: "Dessolate",
        mid: 0,
        midT: 4,
        creator: "Nxbulah",
        weapon: 8,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Retro Beast",
        mid: 0,
        midT: 5,
        creator: "Luminae",
        weapon: 8,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {name: "Lime", mid: 0, midT: 6, weapon: 8, rarity: 0, seas: 3}, {
        name: "Berry",
        mid: 0,
        midT: 7,
        weapon: 8,
        rarity: 0,
        seas: 3
    }, {name: "Indigo", mid: 0, midT: 8, weapon: 8, rarity: 0, seas: 3}, {
        name: "Citrus",
        mid: 0,
        midT: 9,
        weapon: 8,
        rarity: 0,
        seas: 3
    }, {name: "Tangerine", mid: 0, midT: 10, weapon: 8, rarity: 0, seas: 3}, {
        name: "Grape",
        mid: 0,
        midT: 11,
        weapon: 8,
        rarity: 0,
        seas: 3
    }, {name: "Canvas", mid: 0, midT: 12, weapon: 8, rarity: 0, seas: 3}, {
        name: "Libra",
        mid: 0,
        midT: 13,
        weapon: 8,
        rarity: 0,
        seas: 3
    }, {name: "Psychedelic", mid: 0, midT: 14, weapon: 8, rarity: 0, seas: 3}, {
        name: "Violette",
        mid: 0,
        midT: 15,
        weapon: 8,
        rarity: 0,
        seas: 3
    }, {name: "Marv", mid: 0, midT: 16, weapon: 8, rarity: 0, seas: 3}, {
        name: "Basel",
        mid: 0,
        midT: 17,
        weapon: 8,
        rarity: 0,
        seas: 3
    }, {name: "Tiger Blood", mid: 0, midT: 18, weapon: 8, rarity: 1, seas: 3}, {
        name: "Scalamandre",
        mid: 0,
        midT: 19,
        weapon: 8,
        rarity: 1,
        seas: 3
    }, {name: "Tiger Maine", mid: 0, midT: 20, weapon: 8, rarity: 1, seas: 3}, {
        name: "Leopard",
        mid: 0,
        midT: 21,
        weapon: 8,
        rarity: 1,
        seas: 3
    }, {name: "Metallic Swirl", mid: 0, midT: 22, weapon: 8, rarity: 2, seas: 3}, {
        name: "Tessilate",
        mid: 0,
        midT: 23,
        weapon: 8,
        rarity: 2,
        seas: 3
    }, {name: "Bubblegum", mid: 0, midT: 24, weapon: 8, rarity: 2, seas: 3}, {
        name: "Peppermint",
        mid: 0,
        midT: 25,
        weapon: 8,
        rarity: 1,
        seas: 3
    }, {name: "Spearmint", mid: 0, midT: 26, weapon: 8, rarity: 1, seas: 3}, {
        name: "Obsydian",
        mid: 0,
        midT: 27,
        weapon: 8,
        rarity: 2,
        seas: 3
    }, {name: "Pink Panther", mid: 0, midT: 28, weapon: 8, rarity: 1, seas: 3}, {
        name: "Amber",
        mid: 0,
        midT: 29,
        weapon: 8,
        rarity: 1,
        seas: 3
    }, {name: "Clover", mid: 0, midT: 30, weapon: 8, rarity: 0, seas: 3}, {
        name: "Multicam",
        mid: 0,
        midT: 31,
        weapon: 8,
        rarity: 1,
        seas: 3
    }, {name: "Aquaric", mid: 0, midT: 32, weapon: 8, rarity: 1, seas: 3}, {
        name: "Heather",
        mid: 0,
        midT: 33,
        weapon: 8,
        rarity: 1,
        seas: 3
    }, {name: "Carbonfibre", mid: 0, midT: 34, weapon: 8, rarity: 2, seas: 3}, {
        name: "Cobra",
        mid: 0,
        midT: 35,
        weapon: 8,
        rarity: 2,
        seas: 3
    }, {name: "Python", mid: 0, midT: 36, weapon: 8, rarity: 2, seas: 3}, {
        name: "Lost",
        mid: 0,
        midT: 37,
        weapon: 8,
        rarity: 1,
        seas: 3
    }, {name: "Blue Maze", mid: 0, midT: 38, weapon: 8, rarity: 0, seas: 3}, {
        name: "Yellow Maze",
        mid: 0,
        midT: 39,
        weapon: 8,
        rarity: 0,
        seas: 3
    }, {name: "Morgana", mid: 0, midT: 40, weapon: 8, rarity: 1, seas: 3}, {
        name: "StremZ",
        id: 204,
        creator: "Nxbulah",
        weapon: 2,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Krystal",
        mid: 0,
        midT: 40,
        creator: "KItter",
        weapon: 10,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Corrosive",
        mid: 0,
        midT: 1,
        creator: "Jonschmiddy",
        weapon: 10,
        rarity: 3,
        frames: 4,
        frameT: 250,
        seas: 3
    }, {name: "Kitta", mid: 0, midT: 2, creator: "KItter", weapon: 10, rarity: 2, seas: 3}, {
        name: "Plasma Grime",
        mid: 0,
        midT: 3,
        creator: "Cimota",
        weapon: 10,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Graffiti", mid: 0, midT: 4, creator: "Maple", weapon: 10, rarity: 3, glow: !0, seas: 3}, {
        name: "Lime",
        mid: 0,
        midT: 5,
        weapon: 10,
        rarity: 0,
        seas: 3
    }, {name: "Berry", mid: 0, midT: 6, weapon: 10, rarity: 0, seas: 3}, {
        name: "Indigo",
        mid: 0,
        midT: 7,
        weapon: 10,
        rarity: 0,
        seas: 3
    }, {name: "Citrus", mid: 0, midT: 8, weapon: 10, rarity: 0, seas: 3}, {
        name: "Tangerine",
        mid: 0,
        midT: 9,
        weapon: 10,
        rarity: 0,
        seas: 3
    }, {name: "Grape", mid: 0, midT: 10, weapon: 10, rarity: 0, seas: 3}, {
        name: "Canvas",
        mid: 0,
        midT: 11,
        weapon: 10,
        rarity: 0,
        seas: 3
    }, {name: "Libra", mid: 0, midT: 12, weapon: 10, rarity: 0, seas: 3}, {
        name: "Psychedelic",
        mid: 0,
        midT: 13,
        weapon: 10,
        rarity: 0,
        seas: 3
    }, {name: "Violette", mid: 0, midT: 14, weapon: 10, rarity: 0, seas: 3}, {
        name: "Marv",
        mid: 0,
        midT: 15,
        weapon: 10,
        rarity: 0,
        seas: 3
    }, {name: "Basel", mid: 0, midT: 16, weapon: 10, rarity: 0, seas: 3}, {
        name: "Tiger Blood",
        mid: 0,
        midT: 17,
        weapon: 10,
        rarity: 1,
        seas: 3
    }, {name: "Scalamandre", mid: 0, midT: 18, weapon: 10, rarity: 1, seas: 3}, {
        name: "Tiger Maine",
        mid: 0,
        midT: 19,
        weapon: 10,
        rarity: 1,
        seas: 3
    }, {name: "Leopard", mid: 0, midT: 20, weapon: 10, rarity: 1, seas: 3}, {
        name: "Metallic Swirl",
        mid: 0,
        midT: 21,
        weapon: 10,
        rarity: 2,
        seas: 3
    }, {name: "Tessilate", mid: 0, midT: 22, weapon: 10, rarity: 2, seas: 3}, {
        name: "Bubblegum",
        mid: 0,
        midT: 23,
        weapon: 10,
        rarity: 2,
        seas: 3
    }, {name: "Peppermint", mid: 0, midT: 24, weapon: 10, rarity: 1, seas: 3}, {
        name: "Spearmint",
        mid: 0,
        midT: 25,
        weapon: 10,
        rarity: 1,
        seas: 3
    }, {name: "Obsydian", mid: 0, midT: 26, weapon: 10, rarity: 2, seas: 3}, {
        name: "Pink Panther",
        mid: 0,
        midT: 27,
        weapon: 10,
        rarity: 1,
        seas: 3
    }, {name: "Amber", mid: 0, midT: 28, weapon: 10, rarity: 1, seas: 3}, {
        name: "Clover",
        mid: 0,
        midT: 29,
        weapon: 10,
        rarity: 0,
        seas: 3
    }, {name: "Multicam", mid: 0, midT: 30, weapon: 10, rarity: 1, seas: 3}, {
        name: "Aquaric",
        mid: 0,
        midT: 31,
        weapon: 10,
        rarity: 1,
        seas: 3
    }, {name: "Heather", mid: 0, midT: 32, weapon: 10, rarity: 1, seas: 3}, {
        name: "Carbonfibre",
        mid: 0,
        midT: 33,
        weapon: 10,
        rarity: 2,
        seas: 3
    }, {name: "Cobra", mid: 0, midT: 34, weapon: 10, rarity: 2, seas: 3}, {
        name: "Python",
        mid: 0,
        midT: 35,
        weapon: 10,
        rarity: 2,
        seas: 3
    }, {name: "Lost", mid: 0, midT: 36, weapon: 10, rarity: 1, seas: 3}, {
        name: "Blue Maze",
        mid: 0,
        midT: 37,
        weapon: 10,
        rarity: 0,
        seas: 3
    }, {name: "Yellow Maze", mid: 0, midT: 38, weapon: 10, rarity: 0, seas: 3}, {
        name: "Morgana",
        mid: 0,
        midT: 39,
        weapon: 10,
        rarity: 0,
        seas: 3
    }, {name: "Fireburst", id: 81, creator: "jonschmiddy", weapon: 15, rarity: 2, seas: 3}, {
        name: "Moldavite",
        id: 82,
        creator: "Cimota",
        weapon: 15,
        rarity: 2,
        glow: !0,
        seas: 3
    }, {name: "Wyvern", id: 83, creator: "Nxbulah", weapon: 15, rarity: 4, glow: !0, seas: 3}, {
        name: "Forbidden",
        id: 84,
        creator: "Nxbulah",
        weapon: 15,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {name: "Lxd", id: 85, creator: "Nxbulah", weapon: 15, rarity: 3, glow: !0, seas: 3}, {
        name: "Scribble",
        id: 86,
        creator: "FlowerKid",
        weapon: 15,
        rarity: 2,
        seas: 3
    }, {name: "Peruvia", id: 87, creator: "Nxbulah", weapon: 15, rarity: 3, glow: !0, seas: 3}, {
        name: "Caged",
        id: 88,
        creator: "FlowerKid",
        weapon: 15,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Lime", id: 89, weapon: 15, rarity: 0, seas: 3}, {
        name: "Berry",
        id: 90,
        weapon: 15,
        rarity: 0,
        seas: 3
    }, {name: "Indigo", id: 91, weapon: 15, rarity: 0, seas: 3}, {
        name: "Citrus",
        id: 92,
        weapon: 15,
        rarity: 0,
        seas: 3
    }, {name: "Tangerine", id: 93, weapon: 15, rarity: 0, seas: 3}, {
        name: "Grape",
        id: 94,
        weapon: 15,
        rarity: 0,
        seas: 3
    }, {name: "Canvas", id: 95, weapon: 15, rarity: 0, seas: 3}, {
        name: "Libra",
        id: 96,
        weapon: 15,
        rarity: 0,
        seas: 3
    }, {name: "Psychedelic", id: 97, weapon: 15, rarity: 0, seas: 3}, {
        name: "Violette",
        id: 98,
        weapon: 15,
        rarity: 0,
        seas: 3
    }, {name: "Marv", id: 99, weapon: 15, rarity: 0, seas: 3}, {
        name: "Basel",
        id: 100,
        weapon: 15,
        rarity: 0,
        seas: 3
    }, {name: "Tiger Blood", id: 101, weapon: 15, rarity: 1, seas: 3}, {
        name: "Scalamandre",
        id: 102,
        weapon: 15,
        rarity: 1,
        seas: 3
    }, {name: "Tiger Maine", id: 103, weapon: 15, rarity: 1, seas: 3}, {
        name: "Leopard",
        id: 104,
        weapon: 15,
        rarity: 1,
        seas: 3
    }, {name: "Metallic Swirl", id: 105, weapon: 15, rarity: 2, seas: 3}, {
        name: "Tessilate",
        id: 106,
        weapon: 15,
        rarity: 2,
        seas: 3
    }, {name: "Bubblegum", id: 107, weapon: 15, rarity: 2, seas: 3}, {
        name: "Peppermint",
        id: 108,
        weapon: 15,
        rarity: 1,
        seas: 3
    }, {name: "Spearmint", id: 109, weapon: 15, rarity: 1, seas: 3}, {
        name: "Obsydian",
        id: 110,
        weapon: 15,
        rarity: 2,
        seas: 3
    }, {name: "Pink Panther", id: 111, weapon: 15, rarity: 1, seas: 3}, {
        name: "Amber",
        id: 112,
        weapon: 15,
        rarity: 1,
        seas: 3
    }, {name: "Clover", id: 113, weapon: 15, rarity: 0, seas: 3}, {
        name: "Multicam",
        id: 114,
        weapon: 15,
        rarity: 1,
        seas: 3
    }, {name: "Aquaric", id: 115, weapon: 15, rarity: 1, seas: 3}, {
        name: "Heather",
        id: 116,
        weapon: 15,
        rarity: 1,
        seas: 3
    }, {name: "Carbonfibre", id: 117, weapon: 15, rarity: 2, seas: 3}, {
        name: "Cobra",
        id: 118,
        weapon: 15,
        rarity: 2,
        seas: 3
    }, {name: "Python", id: 119, weapon: 15, rarity: 2, seas: 3}, {
        name: "Lost",
        id: 120,
        weapon: 15,
        rarity: 1,
        seas: 3
    }, {name: "Blue Maze", id: 121, weapon: 15, rarity: 0, seas: 3}, {
        name: "Yellow Maze",
        id: 122,
        weapon: 15,
        rarity: 0,
        seas: 3
    }, {name: "Morgana", id: 123, weapon: 15, rarity: 1, seas: 3}, {
        name: "Timeless",
        creator: "Chromatikk",
        keyW: "Knife",
        flipAnim: !0,
        id: 3,
        tex: 12,
        type: 3,
        scl: 2.6,
        seas: 3,
        sclMlt: 1,
        yOff: -1,
        xOff: -1.5,
        rarity: 3,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Crimson Tiger",
        creator: "Kltter",
        keyW: "Knife",
        flipAnim: !0,
        id: 3,
        tex: 7,
        type: 3,
        scl: 2.6,
        seas: 3,
        sclMlt: 1,
        yOff: -1,
        xOff: -1.5,
        rarity: 3,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Vaporblade",
        creator: "Jonschmiddy",
        keyW: "Knife",
        flipAnim: !0,
        id: 3,
        tex: 8,
        type: 3,
        scl: 2.6,
        seas: 3,
        sclMlt: 1,
        yOff: -1,
        xOff: -1.5,
        rarity: 3,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Verdant",
        creator: "Jonschmiddy",
        keyW: "Knife",
        flipAnim: !0,
        id: 3,
        tex: 9,
        type: 3,
        scl: 2.6,
        seas: 3,
        sclMlt: 1,
        yOff: -1,
        xOff: -1.5,
        rarity: 3,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Zvilpogghua",
        creator: "Jonschmiddy",
        keyW: "Knife",
        flipAnim: !0,
        id: 3,
        tex: 10,
        frames: 4,
        frameT: 250,
        type: 3,
        scl: 2.6,
        seas: 3,
        glow: !0,
        pulsT: .0015,
        sclMlt: 1,
        yOff: -1,
        xOff: -1.5,
        rarity: 4,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Volcanic",
        creator: "BigBBaniel",
        keyW: "Knife",
        flipAnim: !0,
        id: 3,
        tex: 11,
        glow: !0,
        frames: 4,
        frameT: 250,
        type: 3,
        scl: 2.6,
        seas: 3,
        sclMlt: 1,
        yOff: -1,
        xOff: -1.5,
        rarity: 4,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Flintstone",
        creator: "Skriller33",
        keyW: "Knife",
        animInd: 1,
        glow: !0,
        pulsT: .1,
        id: 2,
        tex: 2,
        type: 3,
        scl: 3,
        seas: 3,
        sclMlt: .98,
        yOff: -2,
        rarity: 4
    }, {
        name: "Raynb0w",
        creator: "???",
        keyW: "Knife",
        pat: 1,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        id: 0,
        type: 3,
        scl: 2.3,
        seas: 3,
        sclMlt: .9,
        yOff: -2,
        rarity: 5
    }, {
        name: "C0b4lt",
        creator: "???",
        pat: 5,
        tex: "weapons/pat/5",
        sameGlow: !0,
        movT: 5e-4,
        seas: 3,
        weapon: 16,
        rarity: 5
    }, {
        name: "Shattered Asura",
        id: 53,
        tex: 2,
        rarity: 5,
        glow: !0,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        sitOff: -.65,
        sitOffZ: -.6,
        seas: 3,
        movT: 3e-4
    }, {
        name: "Pellucid",
        creator: "???",
        pat: 8,
        tex: "weapons/pat/8",
        sameGlow: !0,
        movT: 3e-4,
        weapon: 1,
        opac: .6,
        rarity: 5,
        seas: 3
    }, {
        name: "Pellucid",
        creator: "???",
        pat: 8,
        tex: "weapons/pat/8",
        sameGlow: !0,
        movT: 3e-4,
        weapon: 2,
        opac: .6,
        rarity: 5,
        seas: 3
    }, {
        name: "Pellucid",
        creator: "???",
        mid: 0,
        midT: 102,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        sameGlow: !0,
        movT: 3e-4,
        weapon: 6,
        opac: .6,
        rarity: 5,
        seas: 3
    }, {
        name: "Soul Harvest",
        id: 53,
        tex: 3,
        rarity: 5,
        glow: !0,
        type: 2,
        opac: .6,
        keyW: "Body",
        sclMlt: 2.4,
        sitOff: -.65,
        sitOffZ: -.6,
        xOff: -2.5,
        yOff: -2,
        xRot: -.5,
        spnScl: 2.6,
        seas: 3,
        movT: 3e-4
    }, {name: "Hackusate", id: 203, weapon: 1, rarity: 5, rgb: !0, rgbs: .5, wire: !0, seas: 3}, {
        name: "Kortex",
        id: 204,
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Bloodlust", id: 185, creator: "FlowerKid", weapon: 4, rarity: 3, glow: !0, seas: 3}, {
        name: "Hellhound",
        id: 186,
        creator: "Kilfy",
        weapon: 4,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {name: "Explora", id: 187, creator: "Luminae", weapon: 4, rarity: 2, seas: 3}, {
        name: "Outrunner",
        creator: "Kltter",
        mid: 0,
        midT: 103,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        glow: !0,
        pulsT: .0015,
        weapon: 6,
        rarity: 4,
        seas: 3
    }, {
        name: "Stanik",
        mid: 0,
        midT: 41,
        creator: "Cimota",
        weapon: 8,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Eaglx",
        mid: 0,
        midT: 42,
        creator: "Kltter",
        weapon: 8,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Aesthetica",
        mid: 0,
        midT: 43,
        creator: "Luminae",
        weapon: 8,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Aries",
        mid: 0,
        midT: 44,
        creator: "Chromatikk",
        weapon: 8,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Puppet Master",
        id: 110,
        rarity: 4,
        noHead: !0,
        type: 1,
        keyW: "Hat",
        xOff: 1,
        yOff: -.5,
        sclMlt: .5,
        sitOff: 1.05,
        seas: 3,
        blackM: !0,
        hide: !0,
        funds: 2e3,
        reqT: "No Greenskins!",
        req: function () {
            return !1
        }
    }, {
        name: "Nuke Tamer",
        keyW: "Back",
        id: 56,
        type: 2,
        scl: 3,
        sclMlt: 2.6,
        sitOff: -1.1,
        sitOffZ: -2,
        yOff: -.9,
        xOff: -.3,
        rarity: 5,
        seas: 3,
        rAnim: -.002,
        rAnimA: "x",
        noSale: !0,
        blackM: !0,
        funds: 3e3,
        reqT: "Call in 1000 Nukes",
        req: function (e) {
            return e && e.stats && 1e3 <= (e.stats.n || 0)
        }
    }, {
        name: "Floatie",
        id: 0,
        type: 6,
        keyW: "Waist",
        scl: 2.1,
        spnScl: 2.5,
        sclMlt: 1.8,
        yOff: -1.5,
        xOff: .5,
        prevRot: 4,
        rarity: 5,
        seas: 3
    }, {
        name: "Combat Banana",
        keyW: "Knife",
        snd: !0,
        id: 14,
        type: 3,
        scl: 1.7,
        sclMlt: .9,
        yOff: -.5,
        xOff: -1,
        rarity: 4,
        seas: 3
    }, {
        name: "Banana Tail",
        id: 2,
        type: 6,
        keyW: "Waist",
        scl: 2.1,
        spnScl: 2.5,
        sclMlt: 2.5,
        sitOff: 1.9,
        sitOffZ: -3,
        yOff: -1.5,
        xOff: .5,
        prevRot: 4,
        rarity: 4,
        seas: 3
    }, {
        name: "Cyber Midnight",
        id: 207,
        creator: "SplatterSponge",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Delirium", id: 206, creator: "floatingpoint", weapon: 2, rarity: 2, seas: 3}, {
        name: "Mosasaur",
        id: 207,
        creator: "BigBBaniel",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Captane", id: 134, creator: "Nxbulah", weapon: 5, rarity: 4, glow: !0, seas: 3}, {
        name: "Tiger Cascade",
        id: 122,
        creator: "Multihawk",
        weapon: 7,
        rarity: 2,
        seas: 3
    }, {name: "Flamer", mid: 0, midT: 45, creator: "Multihawk", weapon: 8, rarity: 2, seas: 3}, {
        name: "MOS",
        mid: 0,
        midT: 46,
        creator: "Kltter",
        weapon: 8,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Dynamite", mid: 0, midT: 43, creator: "Destroy007", weapon: 10, rarity: 3, seas: 3}, {
        name: "Rye",
        id: 124,
        creator: "Nxbulah",
        weapon: 15,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Isotope Mk2", id: 125, creator: "Multihawk", weapon: 15, rarity: 2, seas: 3}, {
        name: "Izulu",
        id: 208,
        creator: "Kilfy",
        weapon: 1,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Izula",
        id: 209,
        creator: "Kilfy",
        weapon: 1,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Milestone", id: 208, creator: "Kilfy", weapon: 2, rarity: 4, glow: !0, seas: 3}, {
        name: "Antidote XVI",
        keyW: "Knife",
        rarity: 5,
        seas: 3,
        id: 15,
        type: 3,
        scl: 1.25,
        sclMlt: .98,
        yOff: -2,
        alpha: .02,
        opac: 1,
        noSale: !0,
        blackM: !0,
        hide: !0,
        funds: 1e4,
        reqT: "???????",
        req: function () {
            return !1
        }
    }, {name: "Tropic Pop", id: 209, creator: "Exxor", weapon: 2, rarity: 2, seas: 3}, {
        name: "Cyclonic Charge",
        id: 188,
        creator: "Multihawk",
        weapon: 4,
        rarity: 2,
        seas: 3
    }, {
        name: "Disco Kill",
        id: 189,
        creator: "Destroy007",
        weapon: 4,
        rarity: 2,
        glow: !0,
        seas: 3
    }, {name: "Line Breaker", id: 135, creator: "Multihawk", weapon: 5, rarity: 2, seas: 3}, {
        name: "Rev 2058",
        id: 136,
        creator: "Destroy007",
        weapon: 5,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Sarin",
        mid: 0,
        midT: 104,
        creator: "Floatingpoint",
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Nitrox",
        mid: 0,
        midT: 105,
        creator: "Destroy007",
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 3,
        seas: 3
    }, {name: "Fireball", mid: 0, midT: 47, creator: "Destroy007", weapon: 8, rarity: 3, seas: 3}, {
        name: "Noble Guard",
        mid: 0,
        midT: 48,
        creator: "Multihawk",
        weapon: 8,
        rarity: 3,
        seas: 3
    }, {
        name: "Institute",
        mid: 0,
        midT: 49,
        creator: "Floatingpoint",
        weapon: 8,
        rarity: 3,
        seas: 3
    }, {
        name: "Charoite",
        mid: 0,
        midT: 44,
        creator: "Cimota",
        weapon: 10,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Stream Suit",
        limT: "Twitch #1",
        id: 10,
        shirtCol: 6570405,
        sleeveCol: 16448250,
        pantsCol: 6570405,
        shoeCol: 16448250,
        seas: 3,
        type: 5,
        noSpin: !0,
        rarity: 4
    }, {
        name: "USS Krunk",
        keyW: "Waist",
        rarity: 5,
        seas: 3,
        id: 4,
        type: 6,
        scl: 2.1,
        spnScl: 2.5,
        sclMlt: 2.8,
        yOff: -1.5,
        xOff: -1,
        sitOff: 1,
        glow: !0,
        prevRot: 4,
        side: 2,
        alpha: .7,
        trans: !0,
        frames: 2,
        frameT: 300,
        noLegs: !0,
        noSale: !0,
        blackM: !0,
        funds: 1e4,
        reqT: "Level 50 Runner",
        req: function (e) {
            return e && e.stats && 2667778 <= (e.stats.c9 || 0)
        }
    }, {
        name: "USS TTV",
        keyW: "Waist",
        limT: "Twitch #1",
        tex: 1,
        rarity: 5,
        seas: 3,
        id: 4,
        type: 6,
        scl: 2.1,
        spnScl: 2.5,
        sclMlt: 2.8,
        yOff: -1.5,
        xOff: -1,
        sitOff: 1,
        prevRot: 4,
        glow: !0,
        side: 2,
        alpha: .7,
        trans: !0,
        frames: 2,
        frameT: 300,
        noLegs: !0,
        noSpin: !0
    }, {
        name: "TTV",
        keyW: "Sprays",
        limT: "Twitch #1",
        id: 80,
        type: 4,
        rarity: 1,
        seas: 3,
        opacity: .8,
        noSpin: !0
    }, {
        name: "TTV Cape",
        limT: "Twitch #1",
        id: 52,
        tex: 3,
        rarity: 4,
        side: 2,
        glow: !0,
        type: 2,
        keyW: "Body",
        xRot: 3,
        xOff: -1,
        yOff: .5,
        spnScl: 2.6,
        sclMlt: 2.4,
        sitOff: -.5,
        sitOffZ: -.6,
        seas: 3,
        noSpin: !0
    }, {
        name: "TTV Tron",
        limT: "Twitch #1",
        id: 32,
        tex: 6,
        rarity: 3,
        type: 1,
        keyW: "Head",
        seas: 3,
        scl: 1,
        glow: !0,
        sclMlt: .6,
        sitOff: 2.05,
        yOff: -3.2,
        frames: 2,
        frameT: 400,
        noSpin: !0
    }, {
        name: "Krunk TTV",
        limT: "Twitch #1",
        id: 32,
        tex: 7,
        rarity: 3,
        type: 1,
        keyW: "Head",
        seas: 3,
        scl: 1,
        sclMlt: .6,
        sitOff: 2.05,
        yOff: -3.2,
        frames: 4,
        frameT: 400,
        noSpin: !0
    }, {
        name: "Twitched",
        limT: "Twitch #1",
        id: 111,
        rarity: 2,
        type: 1,
        keyW: "Head",
        seas: 3,
        scl: 1,
        sclMlt: .6,
        sitOff: .75,
        yOff: -1,
        noSpin: !0,
        noHead: !0
    }, {
        name: "tRaDeS?",
        keyW: "Sprays",
        limT: "Twitch #1",
        id: 81,
        type: 4,
        rarity: 1,
        seas: 3,
        opacity: .8,
        noSpin: !0
    }, {
        name: "Partner Push",
        keyW: "Sprays",
        limT: "Twitch #1",
        id: 82,
        type: 4,
        rarity: 1,
        seas: 3,
        opacity: .8,
        noSpin: !0
    }, {
        name: "Mic'd Up",
        keyW: "Knife",
        limT: "Twitch #1",
        noSpin: !0,
        rarity: 4,
        seas: 3,
        id: 17,
        type: 3,
        scl: 1,
        sclMlt: .8,
        yOff: -2,
        frames: 2,
        frameT: 500,
        sxOff: .5,
        syOff: -.05,
        szOff: -.1
    }, {
        name: "Zed",
        keyW: "Sprays",
        limT: "Twitch #1",
        id: 84,
        type: 4,
        rarity: 1,
        seas: 3,
        opacity: .8,
        noSpin: !0
    }, {
        name: "Kaarson",
        keyW: "Sprays",
        limT: "Twitch #1",
        id: 86,
        type: 4,
        rarity: 1,
        seas: 3,
        opacity: .8,
        noSpin: !0
    }, {
        name: "TTV Vest",
        limT: "Twitch #1",
        noSpin: !0,
        id: 58,
        rarity: 2,
        type: 2,
        keyW: "Back",
        seas: 3,
        scl: .5,
        sclMlt: .5,
        sitOff: 1.7,
        sitOffZ: 0,
        yOff: -2,
        xRot: Math.PI
    }, {
        name: "Cheerfull",
        limT: "Twitch #1",
        noSpin: !0,
        id: 57,
        rarity: 4,
        glow: !0,
        type: 2,
        keyW: "Back",
        xOff: -2.5,
        yOff: -2,
        xRot: -.5,
        spnScl: 2.6,
        sclMlt: 2.4,
        sitOff: -1.65,
        sitOffZ: -.7,
        seas: 3
    }, {
        name: "Twitcher",
        limT: "Twitch #1",
        noSpin: !0,
        id: 210,
        creator: "Nxbulah",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Streamer",
        limT: "Twitch #1",
        noSpin: !0,
        mid: 0,
        midT: 50,
        creator: "Chromatikk",
        weapon: 8,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "TTV-Cap",
        limT: "Twitch #1",
        noSpin: !0,
        tex: 2,
        id: 74,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        yOff: -1.5,
        xOff: 1,
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Bits",
        limT: "Twitch #1",
        noSpin: !0,
        id: 112,
        rarity: 5,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: -1.5,
        rAnim: -.0016,
        rAnimA: "y",
        seas: 3
    }, {
        name: "Just Vibing",
        limT: "Twitch #1",
        creator: "???",
        pat: 11,
        tex: "weapons/pat/11",
        sameGlow: !0,
        movT: 3e-4,
        movD: 1,
        tileS: 3,
        weapon: 1,
        rarity: 4,
        seas: 3,
        noSpin: !0
    }, {name: "Arae Atlas", id: 210, creator: "Luminae", weapon: 1, rarity: 3, seas: 3}, {
        name: "Rezein",
        id: 211,
        creator: "Nxbulah",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "ThiccChemist", id: 212, creator: "Nxbulah", weapon: 1, rarity: 3, glow: !0, seas: 3}, {
        name: "Radalive",
        id: 213,
        creator: "Kilfy",
        weapon: 1,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {name: "Arctic", id: 211, creator: "Destroy007", weapon: 2, rarity: 2, seas: 3}, {
        name: "Kanashii",
        id: 190,
        creator: "Whippii",
        weapon: 4,
        rarity: 3,
        seas: 3
    }, {name: "Sunset claw", id: 137, creator: "Kilfy", weapon: 5, rarity: 2, seas: 3}, {
        name: "Blazed",
        id: 123,
        creator: "Cimota",
        weapon: 7,
        rarity: 3,
        seas: 3
    }, {name: "Avalan", mid: 0, midT: 51, creator: "Nxbulah", weapon: 8, rarity: 3, seas: 3}, {
        name: "Disruptor",
        mid: 0,
        midT: 52,
        creator: "Multihawk",
        weapon: 8,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Phusion",
        mid: 0,
        midT: 53,
        creator: "Nxbulah",
        weapon: 8,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Midnight Phoenix",
        id: 126,
        creator: "Destroy007",
        weapon: 15,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Ocean", mid: 0, midT: 45, creator: "Skriller33", weapon: 10, rarity: 2, seas: 3}, {
        name: "Thunder God",
        mid: 0,
        midT: 42,
        creator: "Chromatikk",
        weapon: 10,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Upset",
        id: 214,
        creator: "Kilfy",
        weapon: 1,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Fished", id: 212, creator: "Skriller33", weapon: 2, rarity: 2, seas: 3}, {
        name: "Hannya",
        id: 213,
        creator: "Whippii",
        weapon: 2,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Drakon",
        id: 214,
        creator: "Kltter",
        weapon: 2,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "caL", id: 215, creator: "Kilfy", weapon: 2, rarity: 4, glow: !0, pulsT: .0015, seas: 3}, {
        name: "CIRO",
        id: 191,
        creator: "Kltter",
        weapon: 4,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Redolent",
        id: 138,
        creator: "Cimota",
        weapon: 5,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Man vs God", mid: 0, midT: 54, creator: "Chromatikk", weapon: 8, rarity: 3, seas: 3}, {
        name: "Scaze",
        id: 127,
        creator: "Kilfy",
        weapon: 15,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Kinto",
        creator: "Nxbulah",
        keyW: "Knife",
        animInd: 1,
        glow: !0,
        pulsT: .1,
        tex: 4,
        id: 2,
        type: 3,
        scl: 3,
        seas: 3,
        sclMlt: .98,
        yOff: -2,
        rarity: 4
    }, {
        name: "Divine",
        creator: "Destroy007",
        keyW: "Knife",
        animInd: 1,
        glow: !0,
        pulsT: .1,
        tex: 5,
        id: 2,
        type: 3,
        scl: 3,
        seas: 3,
        sclMlt: .98,
        yOff: -2,
        rarity: 4
    }, {
        name: "Diabolo",
        creator: "Destroy007",
        keyW: "Knife",
        animInd: 1,
        glow: !0,
        tex: 6,
        id: 2,
        type: 3,
        scl: 3,
        seas: 3,
        sclMlt: .98,
        yOff: -2,
        rarity: 4
    }, {
        name: "Fadecrusher",
        creator: "Multihawk",
        keyW: "Knife",
        glow: !0,
        pulsT: .0015,
        id: 4,
        tex: 2,
        type: 3,
        seas: 3,
        rarity: 5,
        scl: 2,
        sclMlt: .75,
        yOff: -1,
        sxOff: 0,
        syOff: -.05,
        szOff: -.1
    }, {
        name: "Crimson Edge",
        creator: "Multihawk",
        id: 9,
        tex: 1,
        rarity: 4,
        type: 3,
        sxOff: .4,
        scl: 1.4,
        yOff: -2,
        keyW: "Melee",
        seas: 3
    }, {
        name: "Alter",
        creator: "_irizu",
        glow: !0,
        pulsT: .0015,
        id: 10,
        tex: 1,
        rarity: 5,
        type: 3,
        sxRot: -.3,
        syOff: .1,
        szOff: -.1,
        scl: .8,
        yOff: -1,
        xOff: -1,
        keyW: "Melee",
        seas: 3
    }, {
        name: "Prototype-14",
        id: 0,
        creator: "Multihawk",
        weapon: 14,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Dream Destroyer",
        id: 1,
        creator: "Destroy007",
        weapon: 14,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "E-12",
        id: 2,
        creator: "Cimota",
        weapon: 14,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "T.A.N 9",
        id: 3,
        creator: "Floatingpoint",
        weapon: 14,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Sekigahara",
        id: 215,
        creator: "Flower Kid",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Death Parade",
        id: 216,
        creator: "Flower Kid",
        weapon: 1,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Sentinel-56",
        id: 217,
        creator: "Cimota",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Cryptic J",
        id: 216,
        creator: "Nxbulah & Kilfy",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Voyage",
        id: 192,
        creator: "Cimota",
        weapon: 4,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Iara", id: 193, creator: "Kltter", weapon: 4, rarity: 3, glow: !0, seas: 3}, {
        name: "Insidious",
        mid: 0,
        midT: 106,
        creator: "Cimota",
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Tri-Tech",
        id: 124,
        creator: "Multihawk",
        weapon: 7,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Prototype BWSX",
        id: 0,
        creator: "Floatingpoint",
        weapon: 11,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Hexgen",
        id: 1,
        creator: "Nxbulah",
        weapon: 11,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Scout Mastery",
        mid: 5,
        seas: 3,
        weapon: 1,
        rarity: 5,
        noSale: !0,
        blackM: !0,
        funds: 1e4,
        yOrg: -.2,
        reqT: "Level 100 Hunter",
        req: function (e) {
            return e && e.stats && 1089e4 <= (e.stats.c1 || 0)
        }
    }, {
        name: "Redux",
        id: 10,
        tex: 2,
        rarity: 5,
        type: 3,
        sxRot: -.3,
        syOff: .1,
        szOff: -.1,
        scl: .8,
        yOff: -1,
        xOff: -1,
        keyW: "Melee",
        seas: 3,
        shaderId: 0
    }, {
        name: "Neon Dance",
        id: 52,
        tex: 4,
        rarity: 5,
        side: 2,
        glow: !0,
        type: 2,
        keyW: "Body",
        xRot: 3,
        xOff: -1,
        yOff: .5,
        spnScl: 2.6,
        sclMlt: 2.4,
        sitOff: -.5,
        sitOffZ: -.6,
        seas: 3,
        shaderId: 1
    }, {
        name: "Jason",
        limT: "Twitch #2",
        id: 113,
        rarity: 4,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .5,
        sitOff: 1,
        yOff: -.7,
        xOff: 1,
        trans: !0
    }, {
        name: "Sicko",
        limT: "Twitch #2",
        id: 114,
        glow: !0,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .5,
        sitOff: 1,
        yOff: -.7,
        xOff: 1,
        trans: !0
    }, {
        name: "Succubus",
        limT: "Twitch #2",
        id: 115,
        glow: !0,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .45,
        sitOff: .4,
        yOff: -.7,
        xOff: .2
    }, {
        name: "Socket",
        limT: "Twitch #2",
        noHead: !0,
        id: 116,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        xOff: .2
    }, {
        name: "Crunch",
        limT: "Twitch #2",
        noHead: !0,
        id: 117,
        rarity: 1,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        xOff: .2
    }, {
        name: "Paraseye",
        limT: "Twitch #2",
        noHead: !0,
        id: 118,
        rarity: 2,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .7,
        sitOff: .9,
        yOff: -.7
    }, {
        name: "Puff Puff",
        limT: "Twitch #2",
        noHead: !0,
        id: 119,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .8,
        sitOff: .8,
        yOff: -.7
    }, {
        name: "Moneybags",
        limT: "Twitch #2",
        noHead: !0,
        id: 121,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7
    }, {
        name: "Braindead",
        limT: "Twitch #2",
        noHead: !0,
        id: 122,
        rarity: 2,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .8,
        sitOff: 1,
        yOff: -.7,
        trans: !0
    }, {
        name: "Gobbler",
        limT: "Twitch #2",
        noHead: !0,
        id: 123,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .8,
        sitOff: 1,
        yOff: -.7
    }, {
        name: "Seefood",
        limT: "Twitch #2",
        noHead: !0,
        id: 124,
        glow: !0,
        rarity: 4,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .7,
        sitOff: .9,
        yOff: -.7,
        trans: !0
    }, {
        name: "Mr Doodles",
        limT: "Twitch #2",
        noHead: !0,
        id: 125,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        trans: !0
    }, {
        name: "Drowned",
        limT: "Twitch #2",
        id: 126,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        xOff: 3.7,
        trans: !0
    }, {
        name: "Tentacle",
        limT: "Twitch #2",
        id: 59,
        rarity: 4,
        type: 2,
        keyW: "Body",
        seas: 3,
        sclMlt: 2.4,
        spnScl: 2.6,
        xOff: -1,
        sitOff: -.7,
        sitOffZ: -.65
    }, {
        name: "Observer",
        limT: "Twitch #2",
        id: 60,
        rarity: 5,
        type: 2,
        keyW: "Body",
        seas: 3,
        scl: 3,
        sclMlt: 2.6,
        sitOff: -1.1,
        sitOffZ: -2,
        yOff: -.9,
        xOff: -.3,
        rAnim: -.002,
        rAnimA: "x"
    }, {
        name: "Butcher",
        limT: "Twitch #2",
        id: 61,
        rarity: 2,
        type: 2,
        keyW: "Body",
        seas: 3,
        scl: 4.5,
        spnScl: 3.5,
        sclMlt: 2.55,
        sitOff: -.4,
        yOff: -2,
        prevRot: -.1
    }, {
        name: "Scales",
        limT: "Twitch #2",
        id: 62,
        rarity: 2,
        type: 2,
        keyW: "Body",
        seas: 3,
        scl: 4.5,
        spnScl: 3.5,
        sclMlt: 2.55,
        sitOff: -.4,
        yOff: -1,
        xOff: -1,
        xRot: Math.PI
    }, {
        name: "Pauldrons",
        limT: "Twitch #2",
        id: 64,
        rarity: 2,
        type: 2,
        keyW: "Body",
        seas: 3,
        scl: 4.5,
        sclMlt: 2.3,
        sitOff: -.6,
        yOff: -2,
        xRot: Math.PI
    }, {
        name: "Walpurgis",
        limT: "Twitch #2",
        id: 5,
        rarity: 4,
        type: 6,
        keyW: "Waist",
        seas: 3,
        scl: 2.1,
        spnScl: 3,
        sclMlt: 2.6,
        sitOff: 1.4,
        prevRot: 4,
        xOff: -2,
        noLegs: !0
    }, {
        name: "Scales",
        limT: "Twitch #2",
        id: 7,
        rarity: 3,
        type: 6,
        keyW: "Waist",
        seas: 3,
        scl: 2.1,
        spnScl: 3,
        sitOff: 1,
        sitOffZ: 1,
        sclMlt: 2.6,
        prevRot: 2,
        xOff: -3.5,
        xRot: .6 * Math.PI
    }, {
        name: "Monster V",
        limT: "Twitch #2",
        id: 89,
        type: 4,
        rarity: 1,
        seas: 3,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Monster III",
        limT: "Twitch #2",
        id: 91,
        type: 4,
        rarity: 1,
        seas: 3,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Monster X",
        limT: "Twitch #2",
        id: 92,
        type: 4,
        rarity: 1,
        seas: 3,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Demonic Haze",
        limT: "Twitch #2",
        id: 218,
        creator: "Kilfy",
        weapon: 1,
        rarity: 5,
        glow: !0,
        seas: 3
    }, {
        name: "Vassago",
        limT: "Twitch #2",
        id: 219,
        creator: "Lxckless",
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Cranium", limT: "Twitch #2", id: 220, weapon: 1, rarity: 2, seas: 3}, {
        name: "Ignis",
        limT: "Twitch #2",
        id: 221,
        weapon: 1,
        rarity: 1,
        seas: 3
    }, {
        name: "Poseidon",
        limT: "Twitch #2",
        id: 217,
        creator: "Atomize",
        weapon: 2,
        rarity: 2,
        seas: 3
    }, {
        name: "Overseer",
        limT: "Twitch #2",
        id: 218,
        creator: "Luminae",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Etona",
        limT: "Twitch #2",
        id: 219,
        creator: "Nxbulah",
        weapon: 2,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {
        name: "NeoTitan",
        limT: "Twitch #2",
        id: 220,
        creator: "FlowerKid",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Full Moon",
        limT: "Twitch #2",
        id: 221,
        creator: "Kristai",
        weapon: 2,
        rarity: 4,
        frames: 4,
        frameT: 250,
        seas: 3
    }, {
        name: "Nightmare",
        limT: "Twitch #2",
        id: 222,
        creator: "CreshorTV",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Crimson",
        limT: "Twitch #2",
        id: 223,
        creator: "Chromatikk",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Corruption",
        limT: "Twitch #2",
        id: 224,
        creator: "Chromatikk",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Overwatch",
        limT: "Twitch #2",
        id: 194,
        creator: "Destroy007",
        weapon: 4,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Ignis", limT: "Twitch #2", id: 195, weapon: 4, rarity: 1, seas: 3}, {
        name: "Cranium",
        limT: "Twitch #2",
        id: 196,
        weapon: 4,
        rarity: 2,
        seas: 3
    }, {
        name: "Symbiote",
        limT: "Twitch #2",
        id: 139,
        creator: "Whippii",
        weapon: 5,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {name: "Cranium", limT: "Twitch #2", id: 140, weapon: 5, rarity: 2, seas: 3}, {
        name: "Ignis",
        limT: "Twitch #2",
        id: 141,
        weapon: 5,
        rarity: 1,
        seas: 3
    }, {
        name: "Ignis",
        limT: "Twitch #2",
        mid: 0,
        midT: 107,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 3
    }, {
        name: "Cranium",
        limT: "Twitch #2",
        mid: 0,
        midT: 108,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 3
    }, {
        name: "Toxic Rider",
        limT: "Twitch #2",
        id: 125,
        creator: "Destroy007",
        weapon: 7,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Knightingale",
        limT: "Twitch #2",
        id: 126,
        creator: "FailBucket",
        weapon: 7,
        rarity: 2,
        seas: 3
    }, {name: "Cranium", limT: "Twitch #2", id: 127, weapon: 7, rarity: 2, seas: 3}, {
        name: "Ignis",
        limT: "Twitch #2",
        id: 128,
        weapon: 7,
        rarity: 1,
        seas: 3
    }, {
        name: "Wildlife",
        limT: "Twitch #2",
        mid: 0,
        midT: 55,
        creator: "Destroy007",
        weapon: 8,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Ignis", limT: "Twitch #2", mid: 0, midT: 56, weapon: 8, rarity: 1, seas: 3}, {
        name: "Cranium",
        limT: "Twitch #2",
        mid: 0,
        midT: 57,
        weapon: 8,
        rarity: 2,
        seas: 3
    }, {name: "Ignis", limT: "Twitch #2", mid: 0, midT: 46, weapon: 10, rarity: 1, seas: 3}, {
        name: "Cranium",
        limT: "Twitch #2",
        mid: 0,
        midT: 47,
        weapon: 10,
        rarity: 2,
        seas: 3
    }, {
        name: "Devourer",
        limT: "Twitch #2",
        id: 2,
        creator: "Kilfy",
        weapon: 11,
        rarity: 5,
        glow: !0,
        seas: 3
    }, {name: "Ignis", limT: "Twitch #2", id: 128, weapon: 15, rarity: 1, seas: 3}, {
        name: "Cranium",
        limT: "Twitch #2",
        id: 129,
        weapon: 15,
        rarity: 2,
        seas: 3
    }, {
        name: "Arachnidis",
        limT: "Twitch #2",
        id: 46,
        tex: 1,
        rarity: 5,
        type: 2,
        keyW: "Body",
        sclMlt: 2.4,
        spnScl: 2.6,
        xOff: 1,
        xRot: 2.5,
        sitOff: -.9,
        sitOffZ: -.6,
        seas: 3,
        shaderId: 3
    }, {
        name: "Infinity Cloak",
        limT: "Twitch #2",
        id: 52,
        tex: 5,
        rarity: 5,
        side: 2,
        type: 2,
        keyW: "Body",
        xRot: 2,
        xOff: -1,
        yOff: .5,
        spnScl: 2.6,
        sclMlt: 2.4,
        sitOff: -.5,
        sitOffZ: -.6,
        seas: 3,
        shaderId: 3
    }, {
        name: "Sorable",
        keyW: "Sprays",
        limT: "Twitch #2",
        id: 93,
        type: 4,
        rarity: 1,
        seas: 3,
        opacity: .8
    }, {
        name: "Stremz",
        keyW: "Sprays",
        limT: "Twitch #2",
        id: 94,
        type: 4,
        rarity: 2,
        seas: 3,
        opacity: .8
    }, {
        name: "Void Slicer",
        keyW: "Knife",
        flipAnim: !0,
        id: 3,
        tex: 13,
        type: 3,
        scl: 2.6,
        seas: 3,
        sclMlt: 1,
        yOff: -1,
        xOff: -1.5,
        rarity: 5,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25,
        shaderId: 3
    }, {
        name: "Steel Serpent",
        id: 222,
        creator: "Chromatikk",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Theta Republica",
        id: 223,
        creator: "Floatingpoint",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Cactus Jack",
        id: 225,
        creator: "Kltter",
        weapon: 2,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Jakku", id: 197, creator: "Kltter", weapon: 4, rarity: 3, glow: !0, seas: 3}, {
        name: "Shortcake",
        id: 130,
        creator: "Kristai",
        weapon: 15,
        rarity: 3,
        seas: 3
    }, {
        name: "Resurrection",
        id: 224,
        creator: "Kilfy",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Bopper",
        id: 225,
        creator: "FlowerKid",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Containment",
        id: 226,
        creator: "Atomize",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Sunshine",
        id: 227,
        creator: "CreshorTV",
        weapon: 1,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Tedssyt",
        limT: "Twitch #2",
        id: 228,
        creator: "Cimota",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Onamu", id: 226, creator: "Nxbulah", weapon: 2, rarity: 4, glow: !0, seas: 3}, {
        name: "Pestilence",
        limT: "Twitch #2",
        id: 227,
        creator: "Chromatikk",
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Siktis",
        limT: "Twitch #2",
        id: 198,
        creator: "FlowerKid",
        weapon: 4,
        rarity: 3,
        frames: 4,
        frameT: 250,
        glow: !0,
        seas: 3
    }, {
        name: "Graffitius",
        id: 199,
        creator: "Luminae",
        weapon: 4,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Headhunter Alpha", id: 200, creator: "Multihawk", weapon: 4, rarity: 3, seas: 3}, {
        name: "Tau",
        id: 201,
        creator: "Floatingpoint",
        weapon: 4,
        rarity: 2,
        glow: !0,
        seas: 3
    }, {name: "Kotal", id: 142, creator: "Nxbulah", weapon: 5, rarity: 3, glow: !0, seas: 3}, {
        name: "Imperial",
        mid: 0,
        midT: 109,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Cimota",
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Foria",
        mid: 0,
        midT: 110,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Nxbulah",
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "Watercolours",
        mid: 0,
        midT: 58,
        creator: "Multihawk",
        weapon: 8,
        rarity: 2,
        seas: 3
    }, {
        name: "Luminescence",
        mid: 0,
        midT: 48,
        creator: "FailBucket",
        weapon: 10,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {
        name: "SunBurst Swirl",
        mid: 0,
        midT: 49,
        creator: "Exxor",
        weapon: 10,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Sanctum", id: 3, creator: "Multihawk", weapon: 11, rarity: 4, glow: !0, seas: 3}, {
        name: "Futurai",
        id: 4,
        creator: "Destroy007",
        weapon: 14,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Fish Warfare", id: 5, creator: "Multihawk", weapon: 14, rarity: 2, glow: !0, seas: 3}, {
        name: "Hunter",
        id: 6,
        creator: "Multihawk",
        weapon: 14,
        rarity: 3,
        seas: 3
    }, {
        name: "Kortal",
        id: 131,
        creator: "Destroy007",
        weapon: 15,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Modular", id: 0, creator: "Floatingpoint", weapon: 17, rarity: 3, seas: 3}, {
        name: "Googly",
        limT: "Twitch #2",
        id: 127,
        rarity: 4,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .5,
        sitOff: 1,
        yOff: -.7,
        xOff: 1,
        trans: !0
    }, {
        name: "Despair",
        creator: "Kilfy",
        keyW: "Knife",
        tex: 7,
        id: 2,
        glow: !0,
        type: 3,
        seas: 3,
        scl: 3,
        sclMlt: .9,
        yOff: -2,
        rarity: 5
    }, {name: "Death Rattle", id: 228, creator: "CreshorTV", weapon: 2, rarity: 3, seas: 3}, {
        name: "Cinder",
        id: 202,
        creator: "Kilfy",
        weapon: 4,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {
        name: "Overloaded",
        id: 1,
        creator: "Kilfy",
        weapon: 12,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Happy",
        id: 0,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 3,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Smooch",
        id: 0,
        tex: 1,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 3,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Kawaii",
        id: 0,
        tex: 2,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 3,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Smirk",
        id: 0,
        tex: 3,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 3,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Upset",
        id: 0,
        tex: 4,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 3,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Ravatron",
        id: 130,
        rarity: 5,
        type: 1,
        glow: !0,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        xOff: 3.7,
        trans: !0
    }, {
        name: "Demon Baby",
        noHead: !0,
        id: 131,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .8,
        sitOff: .8,
        yOff: -.7
    }, {
        name: "Soulless",
        noHead: !0,
        id: 132,
        rarity: 4,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .8,
        sitOff: .8,
        yOff: -.7
    }, {
        name: "Krunkuto",
        id: 133,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .5,
        sitOff: 1,
        yOff: -.7,
        xOff: 1,
        trans: !0
    }, {
        name: "5Head",
        noHead: !0,
        id: 134,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        xOff: 3.7
    }, {
        name: "Deadball",
        noHead: !0,
        id: 135,
        rarity: 4,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .8,
        sitOff: .8,
        yOff: -.7
    }, {
        name: "UwU",
        id: 0,
        tex: 5,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 3,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Pierre",
        id: 0,
        tex: 6,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 3,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Voodoo",
        id: 0,
        tex: 7,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 3,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {name: "Heart Cycle", id: 229, creator: "Whippii", weapon: 1, rarity: 3, seas: 3}, {
        name: "Whippii",
        id: 230,
        creator: "Whippii",
        weapon: 1,
        rarity: 3,
        seas: 3
    }, {
        name: "Automaton",
        id: 231,
        creator: "Kilfy",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Soda-Licious", id: 229, creator: "Whippii", weapon: 2, rarity: 3, glow: !0, seas: 3}, {
        name: "TnT",
        midT: 3,
        noMuz: !0,
        mid: 0,
        weapon: 3,
        spnScl: 1.3,
        scl: .9,
        mScl: .84,
        zOff: 0,
        yOff: 0,
        rarity: 3,
        creator: "Destroy007",
        seas: 3
    }, {name: "Acid Bark", id: 143, creator: "CreshorTV", weapon: 5, rarity: 3, glow: !0, seas: 3}, {
        name: "Wharf",
        mid: 0,
        midT: 59,
        creator: "Whippii",
        weapon: 8,
        rarity: 3,
        seas: 3
    }, {
        name: "Railix V",
        id: 4,
        creator: "Kilfy",
        weapon: 11,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Sidious", id: 5, creator: "Nxbulah", weapon: 11, rarity: 3, glow: !0, seas: 3}, {
        name: "Fleece",
        id: 6,
        creator: "Whippii",
        weapon: 11,
        rarity: 3,
        seas: 3
    }, {
        name: "Proton XV",
        id: 2,
        creator: "Cimota",
        weapon: 12,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "VR-4", id: 132, creator: "Floatingpoint", weapon: 15, rarity: 3, glow: !0, seas: 3}, {
        name: "Pip Squeak",
        id: 2,
        creator: "Cimota",
        weapon: 16,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {name: "Turbocharged", id: 1, creator: "ReDeagle", weapon: 16, rarity: 3, seas: 3}, {
        name: "Spock",
        noHead: !0,
        id: 136,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        xOff: 3.7
    }, {
        name: "Miss Package",
        noHead: !0,
        id: 137,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        xOff: 3.7
    }, {
        name: "Lil Jack",
        noHead: !0,
        id: 138,
        rarity: 4,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        xOff: 3.7
    }, {
        name: "Disco Mouse",
        id: 139,
        rarity: 5,
        type: 1,
        glow: !0,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        xOff: 3.7,
        trans: !0
    }, {
        name: "Innocent",
        noHead: !0,
        id: 141,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7
    }, {
        name: "Bot 2",
        id: 101,
        tex: 1,
        rarity: 4,
        glow: !0,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .9,
        seas: 3
    }, {
        name: "Balloon",
        noHead: !0,
        id: 140,
        rarity: 4,
        type: 1,
        keyW: "Hat",
        seas: 3,
        scl: 1,
        sclMlt: .8,
        sitOff: .25,
        yOff: -.7
    }, {
        name: "Disco Shirt",
        id: 67,
        rarity: 4,
        glow: !0,
        type: 2,
        keyW: "Body",
        seas: 3,
        scl: 1,
        sclMlt: .48,
        sitOff: -.6,
        yOff: -1,
        xOff: -1,
        trans: !0
    }, {
        name: "Shuriken",
        keyW: "Knife",
        flipAnim: !0,
        snd: !0,
        id: 19,
        glow: !0,
        type: 3,
        seas: 3,
        scl: 1.5,
        sclMlt: .9,
        yOff: -2,
        rarity: 5,
        sxRot: .3,
        sxOff: .15,
        szOff: -.35,
        syOff: .1,
        noSale: !0,
        blackM: !0,
        funds: 1e4,
        reqT: "10000 Thrown Melee Kills",
        req: function (e) {
            return e && e.stats && 1e4 <= (e.stats.tmk || 0)
        }
    }, {
        name: "Mamba",
        keyW: "Knife",
        id: 20,
        type: 3,
        seas: 3,
        scl: 1,
        sclMlt: .7,
        yOff: -2,
        rarity: 4,
        sxRot: .3,
        sxOff: .05,
        szOff: -.55,
        syOff: .6
    }, {
        name: "Arcturus",
        limT: "Charity",
        noSale: !0,
        mSeas: !0,
        noSpin: !0,
        id: 232,
        creator: "Nxbulah",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {
        name: "Celeste",
        limT: "Charity",
        noSale: !0,
        noSpin: !0,
        id: 230,
        creator: "Nxbulah",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        mSeas: !0,
        seas: 3
    }, {
        name: "Warlock",
        limT: "Charity",
        noSale: !0,
        noSpin: !0,
        rarity: 3,
        mSeas: !0,
        seas: 3,
        id: 142,
        type: 1,
        sclMlt: .5,
        sitOff: 1,
        yOff: -2,
        keyW: "Hat"
    }, {
        name: "Starlight",
        limT: "Charity",
        noSpin: !0,
        noSale: !0,
        rarity: 4,
        mSeas: !0,
        seas: 3,
        id: 68,
        type: 2,
        scl: 1,
        sclMlt: .85,
        sitOff: 0,
        sitOffZ: -.4,
        yOff: -1,
        xOff: -1,
        keyW: "Body"
    }, {
        name: "Magic Wand",
        limT: "Charity",
        noSpin: !0,
        noSale: !0,
        rarity: 3,
        mSeas: !0,
        seas: 3,
        id: 21,
        type: 3,
        sxRot: -.1,
        sxOff: .3,
        szOff: -.1,
        scl: 1.3,
        yOff: -1.5,
        xOff: -1,
        keyW: "Melee"
    }, {
        name: "Star Power",
        limT: "Charity",
        noSpin: !0,
        noSale: !0,
        rarity: 2,
        mSeas: !0,
        seas: 3,
        id: 95,
        type: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Shine Bright",
        limT: "Charity",
        noSpin: !0,
        noSale: !0,
        rarity: 2,
        mSeas: !0,
        seas: 3,
        id: 96,
        type: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {name: "Flow", id: 231, creator: "Luminae", weapon: 2, rarity: 4, glow: !0, seas: 3}, {
        name: "Freshmint",
        id: 232,
        creator: "Destroy007",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 3
    }, {name: "Lykos", id: 233, creator: "Skriller33", weapon: 2, rarity: 4, glow: !0, seas: 3}, {
        name: "Ragnarok",
        id: 203,
        creator: "Failbucket",
        weapon: 4,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Brainstorm", id: 204, creator: "Atomize", weapon: 4, rarity: 2, seas: 3}, {
        name: "FSS Archdaemon",
        id: 129,
        creator: "floatingpoint",
        weapon: 7,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "ZE-14", mid: 0, midT: 60, creator: "Zinoob", weapon: 8, rarity: 3, glow: !0, seas: 3}, {
        name: "Sly",
        mid: 0,
        midT: 61,
        creator: "Whippii",
        weapon: 8,
        rarity: 2,
        seas: 3
    }, {name: "Abyssal", id: 8, creator: "Kilfy", weapon: 11, rarity: 5, glow: !0, seas: 3}, {
        name: "Admiral",
        id: 133,
        creator: "_irizu",
        weapon: 15,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Nebulous", id: 135, creator: "Failbucket", weapon: 15, rarity: 2, seas: 3}, {
        name: "Azeal",
        id: 136,
        creator: "Kilfy",
        weapon: 15,
        rarity: 4,
        glow: !0,
        seas: 3
    }, {name: "Slayer", id: 3, creator: "Multihawk", weapon: 16, rarity: 3, seas: 3}, {
        name: "Skullwood",
        id: 1,
        creator: "Multihawk",
        weapon: 17,
        rarity: 3,
        glow: !0,
        seas: 3
    }, {name: "Big Mouth", id: 2, creator: "Cimota", weapon: 17, rarity: 4, glow: !0, seas: 3}, {
        name: "K.P.D Hat",
        keyW: "Hat",
        id: 143,
        rarity: 4,
        type: 1,
        seas: 3,
        sclMlt: .5,
        sitOff: .6,
        scl: 1.6
    }, {
        name: "K.P.D Uniform",
        id: 11,
        shirtCol: 2369592,
        sleeveCol: 2368548,
        pantsCol: 2369592,
        shoeCol: 2368548,
        seas: 3,
        type: 5,
        rarity: 5
    }, {
        name: "AP Rally",
        keyW: "Waist",
        limT: "Clan Wars",
        region: "Asia",
        rarity: 5,
        seas: 3,
        id: 10,
        type: 6,
        scl: 2.1,
        spnScl: 2.5,
        sclMlt: 2.8,
        yOff: -1.5,
        xOff: -1,
        sitOff: 0,
        prevRot: 4,
        glow: !0,
        noLegs: !0,
        noSpin: !0,
        lowR: !0,
        noSale: !0
    }, {
        name: "Chaffee",
        keyW: "Waist",
        limT: "Clan Wars",
        region: "North America",
        rarity: 5,
        seas: 3,
        id: 9,
        type: 6,
        scl: 2.1,
        spnScl: 2.5,
        sclMlt: 2.8,
        yOff: -1.5,
        xOff: -1,
        sitOff: 0,
        prevRot: 4,
        noLegs: !0,
        noSpin: !0,
        lowR: !0,
        noSale: !0
    }, {
        name: "Magic Carpet",
        keyW: "Waist",
        limT: "Clan Wars",
        region: "Middle East",
        rarity: 5,
        seas: 3,
        id: 8,
        type: 6,
        scl: 2.1,
        spnScl: 3,
        sclMlt: 2.6,
        sitOff: 1.4,
        prevRot: 4,
        xOff: -2,
        noLegs: !0,
        noSpin: !0,
        lowR: !0,
        noSale: !0
    }, {
        name: "Matryoshka",
        limT: "Clan Wars",
        region: "Eastern Europe",
        noSpin: !0,
        id: 129,
        rarity: 5,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: 1,
        rAnim: -.0016,
        rAnimA: "y",
        seas: 3,
        noSale: !0
    }, {
        name: "Baluba",
        limT: "Clan Wars",
        region: "Africa",
        noSpin: !0,
        id: 128,
        rarity: 5,
        type: 1,
        keyW: "Hat",
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        xOff: 3.7,
        seas: 3,
        noSale: !0
    }, {
        name: "Kali",
        limT: "Clan Wars",
        region: "Oceania",
        keyW: "Back",
        noSpin: !0,
        id: 65,
        type: 2,
        scl: 3,
        sclMlt: 2.6,
        sitOff: -1.1,
        sitOffZ: -2,
        yOff: -.9,
        xOff: -.3,
        rarity: 5,
        seas: 3,
        rAnim: -.002,
        rAnimA: "x",
        noSale: !0
    }, {
        name: "Union",
        limT: "Clan Wars",
        region: "Western Europe",
        keyW: "Back",
        noSpin: !0,
        id: 66,
        glow: !0,
        type: 2,
        scl: 3,
        sclMlt: 2.6,
        sitOff: -1.1,
        sitOffZ: -2,
        yOff: -.9,
        xOff: -.3,
        rarity: 5,
        seas: 3,
        rAnim: -.002,
        rAnimA: "x",
        noSale: !0
    }, {
        name: "Macuahuitl",
        limT: "Clan Wars",
        region: "South America",
        noSpin: !0,
        id: 18,
        rarity: 4,
        type: 3,
        sxRot: -.1,
        syOff: 0,
        sxOff: .5,
        szOff: -.2,
        scl: .8,
        yOff: -1,
        xOff: -1,
        keyW: "Melee",
        seas: 3,
        glow: !0,
        noSale: !0
    }, {
        name: "Haunter",
        limT: "Raid",
        noSpin: !0,
        noSale: !0,
        noQuickSell: !0,
        rarity: 2,
        seas: 4,
        id: 97,
        type: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Boo!",
        limT: "Raid",
        noSpin: !0,
        noSale: !0,
        noQuickSell: !0,
        rarity: 2,
        seas: 4,
        id: 98,
        type: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Ghast",
        keyW: "Waist",
        limT: "Raid",
        rarity: 4,
        seas: 4,
        id: 11,
        type: 6,
        glow: !0,
        opac: .9,
        scl: 2.1,
        spnScl: 3,
        color: 3823936,
        sclMlt: .45,
        sitOff: .4,
        prevRot: 4,
        xOff: -2,
        noLegs: !0,
        noSpin: !0,
        noQuickSell: !0,
        lowR: !0,
        noSale: !0
    }, {
        name: "Pumpking",
        keyW: "Hat",
        limT: "Raid",
        id: 144,
        rarity: 4,
        type: 1,
        glow: !0,
        seas: 4,
        scl: 1,
        sclMlt: .6,
        sitOff: .85,
        yOff: -.7,
        xOff: 3.7,
        trans: !0,
        noHead: !0,
        noSale: !0,
        noSpin: !0,
        noQuickSell: !0
    }, {
        name: "Spooky",
        limT: "Raid",
        id: 0,
        tex: 8,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5,
        noSale: !0,
        noSpin: !0,
        noQuickSell: !0
    }, {
        name: "Rune Lord",
        limT: "Raid",
        keyW: "Back",
        id: 69,
        glow: !0,
        type: 2,
        scl: 2.3,
        sclMlt: .8,
        sitOff: -1.1,
        sitOffZ: -2,
        yOff: -.9,
        xOff: -.3,
        rarity: 5,
        seas: 4,
        color: 4235601,
        rAnim: -.002,
        rAnimA: "x",
        noSpin: !0,
        trans: !0,
        emiss: 11075511,
        side: 2,
        noQuickSell: !0
    }, {
        name: "Ghostly",
        limT: "Raid",
        noSpin: !0,
        id: 12,
        sameGlow: !0,
        opac: .9,
        emiss: 11075511,
        color: 3823936,
        seas: 4,
        type: 5,
        rarity: 5,
        noQuickSell: !0
    }, {
        name: "Skelly",
        limT: "Raid",
        noSpin: !0,
        noSale: !0,
        rarity: 2,
        seas: 4,
        id: 99,
        type: 4,
        opacity: .9,
        keyW: "Sprays",
        noQuickSell: !0
    }, {
        name: "Halloween",
        limT: "Raid",
        noSpin: !0,
        noSale: !0,
        rarity: 2,
        seas: 4,
        id: 100,
        type: 4,
        opacity: .9,
        keyW: "Sprays",
        noQuickSell: !0
    }, {
        name: "Ghostly Cowboy",
        limT: "Raid",
        noSale: !0,
        noSpin: !0,
        type: 1,
        keyW: "Head",
        scl: 2.5,
        sitOff: .4,
        glow: !0,
        emiss: 11075511,
        yOff: -3,
        tex: 1,
        id: 0,
        seas: 4,
        rarity: 3,
        noQuickSell: !0,
        opac: .9
    }, {
        name: "Grinner",
        limT: "Raid",
        id: 0,
        tex: 9,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5,
        noSale: !0,
        noSpin: !0,
        noQuickSell: !0
    }, {
        name: "Bats",
        limT: "Raid",
        rarity: 2,
        seas: 4,
        id: 102,
        type: 4,
        opacity: .9,
        keyW: "Sprays",
        noSale: !0,
        noSpin: !0,
        noQuickSell: !0
    }, {
        name: "Ectoplasm",
        limT: "Raid",
        glow: !0,
        opac: .9,
        color: 3823936,
        id: 0,
        weapon: 3,
        rarity: 4,
        seas: 4,
        noSale: !0,
        noSpin: !0,
        noQuickSell: !0
    }, {
        name: "Devil Horns",
        limT: "Raid",
        id: 115,
        tex: 1,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        scl: 1,
        sclMlt: .45,
        sitOff: .4,
        yOff: -.7,
        xOff: .2,
        seas: 4,
        noSale: !0,
        noSpin: !0,
        noQuickSell: !0
    }, {
        name: "Devious",
        keyW: "Waist",
        limT: "Raid",
        rarity: 4,
        seas: 4,
        id: 12,
        type: 6,
        scl: 2.1,
        spnScl: 3,
        sclMlt: .6,
        sitOff: .9,
        sitOffZ: .4,
        prevRot: 2,
        xOff: -2,
        noSpin: !0,
        noQuickSell: !0,
        noSale: !0
    }, {
        name: "Necromancer",
        limT: "Raid",
        rarity: 4,
        id: 142,
        glow: !0,
        tex: 1,
        type: 1,
        color: 3823936,
        opac: .9,
        sclMlt: .5,
        sitOff: 1,
        yOff: -2,
        keyW: "Hat",
        seas: 4,
        noSale: !0,
        noSpin: !0,
        noQuickSell: !0
    }, {
        name: "OMEGASOUL",
        limT: "Raid",
        rarity: 2,
        seas: 4,
        id: 103,
        type: 4,
        opacity: .9,
        keyW: "Sprays",
        noSale: !0,
        noSpin: !0,
        noQuickSell: !0
    }, {
        name: "Crayator Bandana",
        limT: "Canteen",
        noSale: !0,
        noSpin: !0,
        id: 91,
        tex: 2,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Scuffed Bandana",
        limT: "Canteen",
        noSale: !0,
        noSpin: !0,
        id: 91,
        tex: 3,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Loserfruit Bandana",
        limT: "Canteen",
        noSale: !0,
        noSpin: !0,
        id: 91,
        tex: 4,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Strawberry Milk",
        limT: "Canteen",
        noSale: !0,
        noSpin: !0,
        rarity: 2,
        seas: 3,
        id: 104,
        type: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Quacky Bandana",
        limT: "Canteen",
        creator: "Quacky",
        noSale: !0,
        noSpin: !0,
        id: 91,
        tex: 6,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "Zed Bandana",
        limT: "Canteen",
        creator: "Quacky",
        noSale: !0,
        noSpin: !0,
        id: 91,
        tex: 5,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .8,
        seas: 3
    }, {
        name: "AussieAntics",
        limT: "Canteen",
        noSale: !0,
        noSpin: !0,
        rarity: 2,
        seas: 3,
        id: 105,
        type: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Re-tron I",
        id: 145,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .6,
        sitOff: .9,
        yOff: -.7,
        noHead: !0,
        rarity: 4
    }, {
        name: "Re-tron II",
        id: 145,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .6,
        sitOff: .9,
        yOff: -.7,
        noHead: !0,
        rarity: 4
    }, {
        name: "Q-tron I",
        id: 145,
        tex: 2,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .6,
        sitOff: .9,
        yOff: -.7,
        noHead: !0,
        rarity: 4
    }, {
        name: "O-tron I",
        id: 145,
        tex: 3,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .6,
        sitOff: .9,
        yOff: -.7,
        noHead: !0,
        rarity: 4
    }, {
        name: "Hazmat",
        id: 146,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1,
        xOff: .6,
        trans: 1,
        rarity: 4
    }, {
        name: "Scientist",
        id: 146,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1,
        xOff: .6,
        trans: 1,
        rarity: 4
    }, {
        name: "Goblin King",
        id: 147,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 2
    }, {
        name: "Jester",
        id: 148,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.5,
        rarity: 3
    }, {
        name: "Fool",
        id: 148,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.5,
        rarity: 3
    }, {
        name: "Lincoln",
        id: 149,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.5,
        rarity: 2
    }, {
        name: "Umbrella",
        id: 150,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .6,
        sitOff: 1.3,
        yOff: -1.9,
        rarity: 4,
        side: 2,
        rAnim: -.0022,
        rAnimA: "y"
    }, {
        name: "Pickler",
        id: 152,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .6,
        sitOff: .75,
        yOff: -1,
        xOff: -.6,
        noHead: !0,
        rarity: 3
    }, {
        name: "Membi",
        id: 153,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1.5,
        sclMlt: .68,
        sitOff: 1,
        yOff: -1,
        noHead: !0,
        rarity: 3
    }, {
        name: "Rice Hat",
        id: 154,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1,
        rarity: 2
    }, {
        name: "Lemy",
        id: 155,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .6,
        sitOff: .75,
        yOff: -.5,
        xOff: -.4,
        noHead: !0,
        rarity: 3
    }, {
        name: "Limey",
        id: 155,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .6,
        sitOff: .75,
        yOff: -.5,
        xOff: -.4,
        noHead: !0,
        rarity: 3
    }, {
        name: "Shroomy",
        id: 156,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .9,
        sitOff: .05,
        yOff: -.7,
        xOff: -.4,
        noHead: !0,
        rarity: 3
    }, {
        name: "Blonde",
        id: 157,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1,
        rarity: 2
    }, {
        name: "Ranga",
        id: 157,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1,
        rarity: 2
    }, {
        name: "Elvis",
        id: 157,
        tex: 2,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1,
        rarity: 2
    }, {
        name: "Brunet",
        id: 157,
        tex: 3,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1,
        rarity: 2
    }, {
        name: "Fancy",
        id: 158,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.6,
        rarity: 2
    }, {
        name: "Beaver",
        id: 158,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.6,
        rarity: 2
    }, {
        name: "Lucky",
        id: 158,
        tex: 2,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.6,
        rarity: 2
    }, {
        name: "Bane",
        id: 159,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1,
        rarity: 3
    }, {
        name: "Black Cloak",
        id: 160,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1,
        rarity: 2,
        side: 2
    }, {
        name: "White Cloak",
        id: 160,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1,
        rarity: 2,
        side: 2
    }, {
        name: "Methane",
        id: 161,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1,
        xOff: 1,
        rarity: 4,
        trans: !0,
        side: 2,
        glow: !0
    }, {
        name: "Toxins",
        id: 161,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1,
        xOff: 1,
        rarity: 4,
        trans: !0,
        side: 2,
        glow: !0
    }, {
        name: "Loud",
        id: 162,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1,
        rarity: 3
    }, {
        name: "Stupid",
        id: 163,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -5,
        xOff: 1.8,
        rarity: 2,
        trans: !0,
        side: 2
    }, {
        name: "Cuppa",
        id: 164,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 4,
        noHead: !0,
        side: 2,
        frames: 2,
        frameT: 450,
        alpha: .1
    }, {
        name: "Mysterious",
        id: 165,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 3,
        trans: 2,
        glow: !0,
        side: 2
    }, {
        name: "Watchful",
        id: 165,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 3,
        trans: 2,
        glow: !0,
        side: 2
    }, {
        name: "Pope",
        id: 166,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -2.2,
        rarity: 2
    }, {
        name: "Grizzly Hat",
        id: 167,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 3
    }, {
        name: "Bear Hat",
        id: 167,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 3
    }, {
        name: "Propeller Cap",
        id: 168,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -2.5,
        xOff: 1.4,
        rarity: 4,
        side: 2,
        frames: 2,
        frameT: 50,
        trans: !0
    }, {
        name: "Vocal",
        id: 169,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.4,
        rarity: 1
    }, {
        name: "Casual",
        id: 169,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.4,
        rarity: 1
    }, {
        name: "Hat Hat",
        id: 170,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -2.6,
        rarity: 3
    }, {
        name: "Baby",
        id: 171,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1.3,
        sclMlt: .78,
        sitOff: .8,
        yOff: -.7,
        rarity: 3,
        noHead: !0
    }, {
        name: "Sir",
        id: 172,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: .7,
        sclMlt: .48,
        sitOff: 1,
        yOff: -2.5,
        rarity: 3
    }, {
        name: "Lady",
        id: 172,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: .7,
        sclMlt: .48,
        sitOff: 1,
        yOff: -2.5,
        rarity: 3
    }, {
        name: "Grey Hat",
        id: 173,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.4,
        rarity: 1
    }, {
        name: "Black Hat",
        id: 173,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.4,
        rarity: 1
    }, {
        name: "Brown Hat",
        id: 173,
        tex: 2,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.4,
        rarity: 1
    }, {
        name: "King",
        id: 174,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.9,
        rarity: 3
    }, {
        name: "Face Shield",
        id: 175,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        side: 2,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 3
    }, {
        name: "Mossworm",
        id: 176,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -4.5,
        xOff: .8,
        rarity: 3
    }, {
        name: "Science Kid",
        id: 177,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 3
    }, {
        name: "Magic",
        id: 178,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.2,
        rarity: 2
    }, {
        name: "Green Capper",
        id: 179,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.5,
        xOff: 1.4,
        rarity: 1,
        side: 2,
        trans: !0
    }, {
        name: "Sports Capper",
        id: 179,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.5,
        xOff: 1.4,
        rarity: 1,
        side: 2,
        trans: !0
    }, {
        name: "Race Capper",
        id: 179,
        tex: 2,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.5,
        xOff: 1.4,
        rarity: 1,
        side: 2,
        trans: !0
    }, {
        name: "Street Capper",
        id: 179,
        tex: 3,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.5,
        xOff: 1.4,
        rarity: 1,
        side: 2,
        trans: !0,
        alpha: .02
    }, {
        name: "Robob MKI",
        id: 180,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.3,
        rarity: 5,
        trans: !0,
        frames: 2,
        frameT: 200,
        glow: !0,
        noHead: !0,
        side: 2,
        rAnim: .003,
        rAnimT: 1,
        alpha: .02
    }, {
        name: "Robob MKII",
        id: 180,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.3,
        rarity: 5,
        trans: !0,
        frames: 2,
        frameT: 200,
        glow: !0,
        noHead: !0,
        side: 2,
        rAnim: .003,
        rAnimT: 1,
        alpha: .02
    }, {
        name: "Black Bucket",
        id: 181,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 2,
        side: 2
    }, {
        name: "White Bucket",
        id: 181,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 2,
        side: 2
    }, {
        name: "Bomber",
        id: 182,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .78,
        sitOff: .7,
        yOff: -.7,
        xOff: -1,
        rarity: 4,
        noHead: !0,
        trans: !0,
        side: 2,
        frames: 2,
        frameT: 200
    }, {
        name: "Green Present",
        id: 183,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 2,
        alpha: .2
    }, {
        name: "Red Present",
        id: 183,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 2,
        alpha: .2
    }, {
        name: "Red Mask",
        id: 184,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 2
    }, {
        name: "Green Mask",
        id: 184,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 2
    }, {
        name: "Blue Mask",
        id: 184,
        tex: 2,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 2
    }, {
        name: "Pink Mask",
        id: 184,
        tex: 3,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 2
    }, {
        name: "High",
        id: 185,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1.5,
        sclMlt: .68,
        sitOff: .7,
        yOff: -.9,
        xOff: .6,
        rarity: 4,
        side: 2,
        noHead: !0
    }, {
        name: "Noodler",
        id: 186,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .68,
        sitOff: .58,
        yOff: -.7,
        rarity: 3,
        noHead: !0
    }, {
        name: "Sir Krunk V",
        id: 187,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .65,
        sitOff: .65,
        yOff: -.7,
        rarity: 4,
        noHead: !0,
        trans: !0,
        alpha: .02,
        side: 2
    }, {
        name: "Black Bunny",
        id: 188,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -4.5,
        xOff: 3,
        rarity: 3
    }, {
        name: "Grey Bunny",
        id: 188,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -4.5,
        xOff: 3,
        rarity: 3
    }, {
        name: "Pink Bunny",
        id: 188,
        tex: 2,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -4.5,
        xOff: 3,
        rarity: 3
    }, {
        name: "Red Buddy",
        id: 189,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1.6,
        sclMlt: .48,
        sitOff: 1,
        yOff: -4.5,
        xOff: .6,
        rarity: 3
    }, {
        name: "Green Buddy",
        id: 189,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1.6,
        sclMlt: .48,
        sitOff: 1,
        yOff: -4.5,
        xOff: .6,
        rarity: 3
    }, {
        name: "Avo",
        id: 190,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .78,
        sitOff: .35,
        sitOffZ: .6,
        yOff: -.7,
        xOff: -.6,
        rarity: 3,
        noHead: !0
    }, {
        name: "Red Eye",
        id: 191,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 2
    }, {
        name: "Blue Eye",
        id: 191,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 2
    }, {
        name: "Piper",
        id: 192,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -2,
        xOff: .7,
        rarity: 3,
        frames: 2,
        frameT: 200,
        alpha: .01,
        side: 2
    }, {
        name: "Pink Bow",
        id: 193,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -2.1,
        rarity: 1
    }, {
        name: "Yellow Bow",
        id: 193,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -2.1,
        rarity: 1
    }, {
        name: "Swarm",
        id: 194,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .5,
        sitOff: -.5,
        rAnim: .0016,
        rAnimA: "y",
        yOff: -.7,
        rarity: 4
    }, {
        name: "Genius",
        id: 195,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 2,
        sclMlt: .48,
        sitOff: 1,
        yOff: -4.2,
        xOff: .5,
        rarity: 4
    }, {
        name: "Samurai",
        id: 196,
        type: 1,
        creator: "iSpy",
        keyW: "Hat",
        seas: 4,
        scl: .8,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.9,
        rarity: 4
    }, {
        name: "Dark Samurai",
        id: 196,
        tex: 1,
        type: 1,
        creator: "iSpy",
        keyW: "Hat",
        seas: 4,
        scl: .8,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.9,
        rarity: 4
    }, {
        name: "Conscience",
        id: 197,
        type: 1,
        creator: "iSpy",
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.5,
        xOff: -1,
        rarity: 4
    }, {
        name: "Mad",
        id: 198,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.5,
        xOff: -1,
        rarity: 2,
        side: 2,
        trans: !0
    }, {
        name: "Night Doctor",
        id: 199,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        xOff: .7,
        rarity: 4
    }, {
        name: "Plague Doctor",
        id: 199,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        xOff: .7,
        rarity: 4
    }, {
        name: "Red Tinted Goggles",
        id: 200,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 1
    }, {
        name: "Blue Tinted Goggles",
        id: 200,
        tex: 1,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        rarity: 1
    }, {
        name: "Rainbow Afro",
        type: 1,
        keyW: "Head",
        seas: 4,
        scl: 2,
        sclMlt: .9,
        sitOff: 1.4,
        yOff: -4,
        id: 6,
        tex: 2,
        rarity: 3
    }, {
        name: "Amber Skull",
        type: 1,
        id: 12,
        keyW: "Head",
        seas: 4,
        scl: 3,
        glow: !0,
        sclMlt: 1.05,
        sitOff: 2.5,
        sitOffZ: 1.1,
        yOff: -4.5,
        xOff: -4.2,
        tex: 3,
        rarity: 3
    }, {
        name: "Alpha",
        seas: 4,
        id: 36,
        glow: !0,
        type: 1,
        keyW: "Head",
        sclMlt: .56,
        sitOff: 1.3,
        xOff: 1.4,
        scl: 1.1,
        yOff: -1.2,
        tex: 3,
        rarity: 4
    }, {
        name: "Soul Eater",
        seas: 4,
        noHead: !0,
        id: 132,
        type: 1,
        keyW: "Hat",
        scl: 1.5,
        sclMlt: .8,
        sitOff: .8,
        yOff: -.7,
        tex: 1,
        rarity: 4
    }, {
        name: "Papa",
        seas: 4,
        noHead: !0,
        id: 134,
        type: 1,
        keyW: "Hat",
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.9,
        tex: 1,
        rarity: 3
    }, {
        name: "Box Head",
        seas: 4,
        id: 137,
        type: 1,
        keyW: "Hat",
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -.7,
        xOff: -.3,
        tex: 1,
        rarity: 3,
        alpha: .2,
        side: 2
    }, {
        name: "Content Clown",
        id: 1,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Flushed",
        id: 0,
        tex: 10,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Glowup",
        id: 0,
        tex: 11,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Angwy",
        id: 0,
        tex: 12,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Sea Sick",
        id: 0,
        tex: 13,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Gah",
        id: 0,
        tex: 14,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Waaah",
        id: 0,
        tex: 15,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Yikes",
        id: 0,
        tex: 16,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Yummy",
        id: 0,
        tex: 17,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Growl",
        id: 0,
        tex: 18,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5,
        glow: !0
    }, {
        name: "Panda",
        id: 0,
        tex: 19,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Constipated",
        id: 0,
        tex: 20,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Kalm",
        id: 0,
        tex: 21,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Baked",
        id: 0,
        tex: 22,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Chiseled",
        id: 0,
        tex: 23,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Chompers",
        id: 0,
        tex: 24,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Simp",
        id: 0,
        tex: 25,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Nerd",
        id: 0,
        tex: 26,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Ded",
        id: 0,
        tex: 27,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Boosters",
        id: 70,
        type: 2,
        rarity: 4,
        keyW: "Back",
        seas: 4,
        glow: !0,
        frames: 2,
        frameT: 400,
        trans: !0,
        side: 2,
        xOff: -4.6,
        sitOff: -.3,
        sitOffZ: .1,
        sclMlt: .6
    }, {
        name: "Up",
        id: 71,
        type: 2,
        rarity: 3,
        keyW: "Back",
        seas: 4,
        xOff: -3,
        yOff: -7,
        sitOff: -.3,
        sitOffZ: .6,
        sclMlt: .7
    }, {
        name: "Mechacrow",
        id: 72,
        type: 2,
        rarity: 4,
        keyW: "Back",
        seas: 4,
        scl: .5,
        xOff: -6.6,
        yOff: -1,
        glow: !0,
        sitOffZ: .5,
        sitOff: -.3,
        sclMlt: .55
    }, {
        name: "Dynocrow",
        id: 72,
        tex: 1,
        type: 2,
        rarity: 4,
        xOff: -6.6,
        yOff: -1,
        keyW: "Back",
        seas: 4,
        scl: .5,
        glow: !0,
        sitOffZ: .5,
        sitOff: -.3,
        sclMlt: .55
    }, {
        name: "Red Backpack",
        id: 73,
        type: 2,
        rarity: 1,
        keyW: "Back",
        seas: 4,
        scl: .6,
        yOff: -.5,
        xRot: Math.PI,
        sitOff: -.3,
        sclMlt: .5
    }, {
        name: "Blue Backpack",
        id: 73,
        tex: 1,
        type: 2,
        rarity: 1,
        keyW: "Back",
        scl: .6,
        yOff: -.5,
        seas: 4,
        xRot: Math.PI,
        sitOff: -.3,
        sclMlt: .5
    }, {
        name: "Green Backpack",
        id: 73,
        tex: 2,
        type: 2,
        rarity: 1,
        keyW: "Back",
        scl: .6,
        yOff: -.5,
        seas: 4,
        xRot: Math.PI,
        sitOff: -.3,
        sclMlt: .5
    }, {
        name: "Yellow Backpack",
        id: 73,
        tex: 3,
        type: 2,
        rarity: 1,
        keyW: "Back",
        scl: .6,
        yOff: -.5,
        seas: 4,
        xRot: Math.PI,
        sitOff: -.3,
        sclMlt: .5
    }, {
        name: "Dark Armor",
        id: 74,
        type: 2,
        rarity: 3,
        keyW: "Back",
        seas: 4,
        sitOff: -.3,
        sclMlt: .5
    }, {
        name: "Samurai Armor",
        id: 74,
        tex: 1,
        type: 2,
        rarity: 3,
        keyW: "Back",
        seas: 4,
        sitOff: -.3,
        sclMlt: .5
    }, {
        name: "Fender",
        id: 75,
        type: 2,
        rarity: 3,
        keyW: "Back",
        seas: 4,
        side: 2,
        xRot: Math.PI,
        scl: .7,
        yOff: -1,
        trans: !0,
        sitOffZ: .2,
        sclMlt: .6
    }, {
        name: "Gibson",
        id: 75,
        tex: 1,
        type: 2,
        rarity: 3,
        keyW: "Back",
        seas: 4,
        xRot: Math.PI,
        scl: .7,
        yOff: -1,
        side: 2,
        trans: !0,
        sitOffZ: .2,
        sclMlt: .6
    }, {
        name: "Todo List",
        id: 76,
        type: 2,
        rarity: 1,
        keyW: "Back",
        seas: 4,
        scl: .7,
        sitOff: -.3,
        sclMlt: .5
    }, {
        name: "Disco Wings",
        id: 77,
        type: 2,
        rarity: 3,
        keyW: "Back",
        seas: 4,
        scl: .7,
        xOff: -.6,
        yOff: -1.9,
        glow: !0,
        sitOff: .3,
        sclMlt: .7
    }, {
        name: "Crimson Fairy",
        id: 78,
        type: 2,
        rarity: 3,
        keyW: "Back",
        seas: 4,
        glow: !0,
        trans: !0,
        scl: .7,
        yOff: -1.9,
        xOff: -2.2,
        sitOff: -.5,
        sclMlt: .5
    }, {
        name: "Fairy",
        id: 78,
        tex: 1,
        type: 2,
        rarity: 3,
        keyW: "Back",
        seas: 4,
        glow: !0,
        scl: .7,
        yOff: -1.9,
        xOff: -2.2,
        trans: !0,
        sitOff: -.5,
        sclMlt: .5
    }, {
        name: "Sprout",
        id: 79,
        type: 2,
        rarity: 3,
        keyW: "Back",
        seas: 4,
        side: 2,
        scl: .7,
        yOff: -2,
        xOff: -5,
        sitOffZ: .3,
        sclMlt: .7
    }, {
        name: "Milk Chocolate",
        id: 80,
        type: 2,
        rarity: 2,
        keyW: "Back",
        seas: 4,
        scl: .7,
        sitOff: -.4,
        sclMlt: .5
    }, {
        name: "White Chocolate",
        id: 80,
        tex: 1,
        type: 2,
        rarity: 2,
        keyW: "Back",
        scl: .7,
        seas: 4,
        sitOff: -.4,
        sclMlt: .5
    }, {
        name: "Dark Chocolate",
        id: 80,
        tex: 2,
        type: 2,
        rarity: 2,
        keyW: "Back",
        scl: .7,
        seas: 4,
        sitOff: -.4,
        sclMlt: .5
    }, {
        name: "Imagination",
        id: 81,
        type: 2,
        rarity: 5,
        keyW: "Back",
        seas: 4,
        side: 2,
        xOff: -4.6,
        yOff: -2.5,
        sitOff: -2,
        sitOffZ: 1,
        sclMlt: .8,
        movT: -.001,
        movD: 1,
        glow: !0
    }, {
        name: "Sweet N Sour",
        id: 82,
        type: 2,
        rarity: 3,
        keyW: "Back",
        xRot: Math.PI,
        scl: .6,
        yOff: -1.9,
        seas: 4,
        sclMlt: .5
    }, {
        name: "Moonlit",
        id: 83,
        type: 2,
        rarity: 5,
        keyW: "Back",
        xRot: Math.PI,
        scl: .7,
        yOff: -2,
        xOff: -.2,
        seas: 4,
        glow: !0,
        sitOff: -.3,
        sitOffZ: .1,
        sclMlt: .7
    }, {
        name: "Krunkie",
        id: 84,
        type: 2,
        rarity: 1,
        keyW: "Back",
        seas: 4,
        scl: .7,
        xRot: Math.PI,
        sitOff: -.3,
        sclMlt: .5
    }, {
        name: "Bipolar",
        id: 85,
        type: 2,
        rarity: 5,
        keyW: "Back",
        seas: 4,
        scl: .7,
        sitOff: -1,
        sitOffZ: -2.5,
        sclMlt: .8,
        rAnim: .0015,
        rAnimA: "x"
    }, {
        name: "Tehch Deck",
        id: 86,
        type: 2,
        rarity: 2,
        keyW: "Back",
        seas: 4,
        xRot: Math.PI,
        sitOff: -.3,
        sitOffZ: .3,
        sclMlt: .7
    }, {
        name: "Jumbo Jet 1",
        id: 87,
        type: 2,
        rarity: 3,
        keyW: "Back",
        seas: 4,
        frames: 2,
        scl: .6,
        xOff: -.5,
        yOff: -1,
        frameT: 400,
        xRot: Math.PI,
        sitOff: .1,
        sclMlt: .65,
        side: 2
    }, {
        name: "Jumbo Jet 2",
        id: 87,
        tex: 1,
        type: 2,
        rarity: 3,
        keyW: "Back",
        seas: 4,
        scl: .6,
        xOff: -.5,
        yOff: -1,
        frames: 2,
        frameT: 400,
        xRot: Math.PI,
        sitOff: .1,
        sclMlt: .65,
        side: 2
    }, {
        name: "Slidehop 101",
        id: 88,
        type: 2,
        rarity: 2,
        keyW: "Back",
        xRot: Math.PI,
        seas: 4,
        sitOff: -.4,
        sclMlt: .5
    }, {
        name: "Hydrate",
        id: 89,
        type: 2,
        rarity: 1,
        keyW: "Back",
        seas: 4,
        xRot: Math.PI,
        xOff: -.4,
        sitOff: -.3,
        sitOffZ: .1,
        sclMlt: .6
    }, {
        name: "Swipe Left",
        id: 90,
        type: 2,
        rarity: 2,
        keyW: "Back",
        xRot: Math.PI,
        scl: .7,
        seas: 4,
        sitOff: -.3,
        sclMlt: .5
    }, {
        name: "Papilion",
        id: 91,
        type: 2,
        rarity: 4,
        keyW: "Back",
        seas: 4,
        glow: !0,
        xRot: Math.PI,
        side: 2,
        scl: .7,
        xOff: -.8,
        sitOff: -.4,
        sitOffZ: .3,
        sclMlt: .8
    }, {
        name: "Morpho",
        id: 91,
        tex: 1,
        type: 2,
        rarity: 4,
        keyW: "Back",
        xRot: Math.PI,
        seas: 4,
        glow: !0,
        side: 2,
        scl: .7,
        xOff: -.8,
        sitOff: -.4,
        sclMlt: .8,
        sitOffZ: .3
    }, {
        name: "Lil Buddy",
        id: 92,
        type: 2,
        rarity: 2,
        xRot: Math.PI,
        keyW: "Back",
        scl: .7,
        seas: 4,
        sitOff: -.3,
        sclMlt: .5
    }, {
        name: "Dont Shoot",
        id: 93,
        type: 2,
        rarity: 3,
        keyW: "Back",
        seas: 4,
        glow: !0,
        trans: !0,
        frames: 2,
        frameT: 400,
        side: 2,
        scl: .5,
        yOff: -3,
        xOff: -1,
        sclMlt: .6,
        sitOffZ: .2,
        sitOff: -.3
    }, {
        name: "Nano Wings",
        id: 94,
        type: 2,
        rarity: 4,
        creator: "iSpy",
        keyW: "Back",
        xRot: Math.PI,
        scl: .45,
        xOff: -1,
        yOff: -2.2,
        seas: 4,
        glow: !0,
        sclMlt: .5
    }, {
        name: "Skelly",
        id: 95,
        type: 2,
        rarity: 2,
        keyW: "Back",
        seas: 4,
        noChest: !0,
        sclMlt: .5,
        sitOff: -.6
    }, {
        name: "Krunk League",
        id: 96,
        type: 2,
        rarity: 3,
        keyW: "Back",
        seas: 4,
        xRot: Math.PI,
        sclMlt: .6,
        scl: .8,
        xOff: -2,
        sitOffZ: .2,
        sitOff: -.9
    }, {
        name: "Trophy",
        id: 97,
        type: 2,
        rarity: 2,
        keyW: "Back",
        seas: 4,
        xRot: Math.PI,
        sclMlt: .5,
        xOff: -1,
        sitOff: -.7
    }, {
        name: "Robbery",
        id: 98,
        type: 2,
        rarity: 3,
        keyW: "Back",
        seas: 4,
        frames: 2,
        frameT: 400,
        trans: !0,
        side: 2,
        scl: .7,
        xOff: -2,
        xRot: Math.PI,
        sclMlt: .5,
        sitOff: -.5,
        alpha: .2
    }, {
        name: "Krunk Landing",
        id: 99,
        type: 2,
        rarity: 2,
        keyW: "Back",
        xRot: .8 * Math.PI,
        scl: .6,
        xOff: -2,
        yOff: -1,
        seas: 4,
        side: 2,
        sitOff: -.3,
        sclMlt: .5
    }, {
        name: "Croissant",
        id: 100,
        type: 2,
        rarity: 2,
        keyW: "Back",
        xRot: Math.PI,
        scl: .7,
        xOff: -1,
        yOff: -1,
        seas: 4,
        sclMlt: .5,
        sitOff: -.3
    }, {
        name: "Mechladon",
        creator: "cimota",
        id: 7,
        tex: 1,
        type: 2,
        keyW: "Back",
        glow: !0,
        scl: 5,
        sclMlt: 4.5,
        xOff: -3,
        sitOff: -.5,
        sitOffZ: -.4,
        yOff: -3,
        seas: 4,
        rarity: 3
    }, {
        name: "Red All Stars",
        id: 0,
        rarity: 4,
        type: 8,
        yOff: -3,
        xOff: 1,
        keyW: "Shoes",
        seas: 4
    }, {
        name: "Blue All Stars",
        id: 0,
        tex: 1,
        rarity: 4,
        type: 8,
        yOff: -3,
        xOff: 1,
        keyW: "Shoes",
        seas: 4
    }, {
        name: "Squeakers",
        id: 1,
        rarity: 5,
        type: 8,
        yOff: -3,
        xOff: 1,
        keyW: "Shoes",
        snd: !0,
        seas: 4
    }, {
        name: "Bunnies",
        id: 2,
        rarity: 5,
        type: 8,
        yOff: -3,
        xOff: 1,
        keyW: "Shoes",
        snd: !0,
        seas: 4
    }, {name: "Frosted Bite", id: 107, type: 4, rarity: 4, opacity: .8, keyW: "Sprays", seas: 4}, {
        name: "Antidote",
        id: 108,
        type: 4,
        rarity: 3,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {name: "Kanji", id: 109, type: 4, rarity: 1, opacity: .8, keyW: "Sprays", seas: 4}, {
        name: "Clownjuice",
        id: 110,
        type: 4,
        rarity: 3,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {name: "Kill Feed", id: 111, type: 4, rarity: 4, opacity: .8, keyW: "Sprays", seas: 4}, {
        name: "Thirdeye",
        id: 112,
        type: 4,
        rarity: 0,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {name: "Kaboom", id: 113, type: 4, rarity: 1, opacity: .8, keyW: "Sprays", seas: 4}, {
        name: "Krunkie",
        id: 114,
        type: 4,
        rarity: 0,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {name: "Crime Scene", id: 115, type: 4, rarity: 3, opacity: .8, keyW: "Sprays", seas: 4}, {
        name: "Fenris",
        creator: "bodeneinheit",
        id: 116,
        type: 4,
        rarity: 3,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {name: "Sike", id: 117, type: 4, rarity: 1, opacity: .8, keyW: "Sprays", seas: 4}, {
        name: "FFA",
        id: 118,
        type: 4,
        rarity: 1,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {name: "Krunk League", id: 119, type: 4, rarity: 1, opacity: .8, keyW: "Sprays", seas: 4}, {
        name: "Sad Noodle",
        id: 120,
        type: 4,
        rarity: 2,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {name: "Locked n Loaded", id: 121, type: 4, rarity: 3, opacity: .8, keyW: "Sprays", seas: 4}, {
        name: "Milk",
        id: 122,
        type: 4,
        rarity: 0,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {name: "Hunter", id: 123, type: 4, rarity: 3, opacity: .8, keyW: "Sprays", seas: 4}, {
        name: "Cuppa",
        id: 124,
        type: 4,
        rarity: 1,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {name: "Bloodshot", id: 125, type: 4, rarity: 0, opacity: .8, keyW: "Sprays", seas: 4}, {
        name: "Howdy",
        id: 126,
        type: 4,
        rarity: 2,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {name: "Nightmare", id: 127, type: 4, rarity: 2, opacity: .8, keyW: "Sprays", seas: 4}, {
        name: "Rolled",
        creator: "Iniquity",
        id: 128,
        type: 4,
        rarity: 5,
        opacity: .8,
        keyW: "Sprays",
        frames: 4,
        frameT: 400,
        seas: 4
    }, {
        name: "Huh",
        id: 129,
        type: 4,
        rarity: 3,
        opacity: .8,
        keyW: "Sprays",
        frames: 5,
        frameT: 400,
        seas: 4
    }, {name: "Champion", id: 130, type: 4, rarity: 1, opacity: .8, keyW: "Sprays", seas: 4}, {
        name: "Bee Hop",
        id: 131,
        type: 4,
        rarity: 3,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {name: "Cherries", id: 132, type: 4, rarity: 0, opacity: .8, keyW: "Sprays", seas: 4}, {
        name: "Nuke",
        id: 133,
        type: 4,
        rarity: 2,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {name: "S.A.R", id: 134, type: 4, rarity: 4, opacity: .8, keyW: "Sprays", seas: 4}, {
        name: "AK Iris",
        id: 268,
        weapon: 2,
        rarity: 5,
        glow: !0,
        seas: 4,
        shaderId: 4
    }, {
        name: "Annihilation",
        id: 233,
        creator: "Nxbulah",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Kanj", id: 234, creator: "ReDeagle", weapon: 1, rarity: 3, seas: 4}, {
        name: "intergalactic takeaway",
        id: 235,
        creator: "creshorTV",
        weapon: 1,
        rarity: 3,
        seas: 4
    }, {
        name: "3-E",
        id: 236,
        creator: "Whippii",
        weapon: 1,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Bullets",
        id: 237,
        creator: "Chromatikk",
        weapon: 1,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Wasteland Warrior",
        id: 238,
        creator: "creshorTV",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Red Panda Playground", id: 239, creator: "Kristai", weapon: 1, rarity: 3, seas: 4}, {
        name: "Testing",
        id: 240,
        creator: "Kltter",
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Astral Horror",
        id: 241,
        creator: "Kilfy & Nxbulah",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Metro", id: 242, creator: "Luminae", weapon: 1, rarity: 3, glow: !0, seas: 4}, {
        name: "Underworld Worm",
        id: 243,
        creator: "Destroy007",
        weapon: 1,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {name: "Envious", id: 244, creator: "Kilfy", weapon: 1, rarity: 5, glow: !0, seas: 4}, {
        name: "Seishin",
        id: 245,
        creator: "Atomize",
        weapon: 1,
        rarity: 2,
        seas: 4
    }, {
        name: "Reinga",
        id: 246,
        creator: "Chromatikk & Kitter",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Death Goat",
        id: 247,
        creator: "Destroy007",
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Honeycomb", id: 248, weapon: 1, rarity: 1, seas: 4}, {
        name: "Sweety",
        id: 249,
        weapon: 1,
        rarity: 1,
        seas: 4
    }, {name: "Stormy", id: 250, weapon: 1, rarity: 1, seas: 4}, {
        name: "Illusion",
        id: 251,
        weapon: 1,
        rarity: 0,
        seas: 4
    }, {name: "Ducky", id: 252, weapon: 1, rarity: 1, seas: 4}, {
        name: "Emoji",
        id: 253,
        weapon: 1,
        rarity: 2,
        seas: 4
    }, {name: "Autumn", id: 254, weapon: 1, rarity: 1, seas: 4}, {
        name: "Alpes",
        id: 255,
        weapon: 1,
        rarity: 1,
        seas: 4
    }, {name: "Love", id: 256, weapon: 1, rarity: 1, seas: 4}, {
        name: "Rich",
        id: 257,
        weapon: 1,
        rarity: 2,
        seas: 4
    }, {name: "Puzzler", id: 258, weapon: 1, rarity: 1, seas: 4}, {
        name: "Rainbow Sky",
        id: 259,
        weapon: 1,
        rarity: 2,
        seas: 4
    }, {name: "Pirate", id: 260, weapon: 1, rarity: 2, seas: 4}, {
        name: "Tsunami",
        id: 261,
        weapon: 1,
        rarity: 2,
        seas: 4
    }, {name: "Hemp", id: 262, weapon: 1, rarity: 2, seas: 4}, {
        name: "Kyanite",
        id: 263,
        weapon: 1,
        rarity: 3,
        seas: 4
    }, {name: "Kunzite", id: 264, weapon: 1, rarity: 2, seas: 4}, {
        name: "Merlot",
        id: 265,
        weapon: 1,
        rarity: 0,
        seas: 4
    }, {name: "Huckleberry", id: 266, weapon: 1, rarity: 0, seas: 4}, {
        name: "Sketch",
        id: 267,
        weapon: 1,
        rarity: 0,
        seas: 4
    }, {name: "Ion X", id: 234, creator: "Kilfy", weapon: 2, rarity: 4, glow: !0, pulsT: .0015, seas: 4}, {
        name: "Nav",
        id: 235,
        creator: "Kilfy",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Aurora", id: 236, creator: "Kristai", weapon: 2, rarity: 2, glow: !0, seas: 4}, {
        name: "Teknic",
        id: 237,
        creator: "Nxbulah",
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Lore",
        id: 238,
        creator: "Skriller33",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Kaiju", id: 239, creator: "Kilfy", weapon: 2, rarity: 5, glow: !0, seas: 4}, {
        name: "Impostor",
        id: 240,
        creator: "Atomize",
        weapon: 2,
        rarity: 2,
        seas: 4
    }, {
        name: "Dungeon Crawl",
        id: 241,
        creator: "creshorTV",
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Hydrogen", id: 242, creator: "Xyba", weapon: 2, rarity: 3, seas: 4}, {
        name: "Epitome",
        id: 243,
        creator: "creshorTV",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Hokage",
        id: 244,
        creator: "creshorTV",
        weapon: 2,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Synergy",
        id: 245,
        creator: "Nxbulah & Luminae",
        weapon: 2,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {
        name: "Doragons Influence",
        id: 246,
        creator: "Nxbulah",
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Wrong Number",
        id: 247,
        creator: "Kltter",
        weapon: 2,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Honeycomb", id: 248, weapon: 2, rarity: 0, seas: 4}, {
        name: "Sweety",
        id: 249,
        weapon: 2,
        rarity: 0,
        seas: 4
    }, {name: "Stormy", id: 250, weapon: 2, rarity: 2, seas: 4}, {
        name: "Illusion",
        id: 251,
        weapon: 2,
        rarity: 0,
        seas: 4
    }, {name: "Ducky", id: 252, weapon: 2, rarity: 2, seas: 4}, {
        name: "Emoji",
        id: 253,
        weapon: 2,
        rarity: 2,
        seas: 4
    }, {name: "Autumn", id: 254, weapon: 2, rarity: 1, seas: 4}, {
        name: "Alpes",
        id: 255,
        weapon: 2,
        rarity: 1,
        seas: 4
    }, {name: "Love", id: 256, weapon: 2, rarity: 1, seas: 4}, {
        name: "Rich",
        id: 257,
        weapon: 2,
        rarity: 2,
        seas: 4
    }, {name: "Puzzler", id: 258, weapon: 2, rarity: 1, seas: 4}, {
        name: "Rainbow Sky",
        id: 259,
        weapon: 2,
        rarity: 2,
        seas: 4
    }, {name: "Pirate", id: 260, weapon: 2, rarity: 2, seas: 4}, {
        name: "Tsunami",
        id: 261,
        weapon: 2,
        rarity: 1,
        seas: 4
    }, {name: "Hemp", id: 262, weapon: 2, rarity: 2, seas: 4}, {
        name: "Kyanite",
        id: 263,
        weapon: 2,
        rarity: 3,
        seas: 4
    }, {name: "Kunzite", id: 264, weapon: 2, rarity: 2, seas: 4}, {
        name: "Merlot",
        id: 265,
        weapon: 2,
        rarity: 1,
        seas: 4
    }, {name: "Huckleberry", id: 266, weapon: 2, rarity: 1, seas: 4}, {
        name: "Sketch",
        id: 267,
        weapon: 2,
        rarity: 1,
        seas: 4
    }, {name: "BoomBox", id: 206, creator: "Kitter", weapon: 4, rarity: 3, glow: !0, seas: 4}, {
        name: "Koi",
        id: 207,
        creator: "Luminae",
        weapon: 4,
        rarity: 2,
        glow: !0,
        seas: 4
    }, {name: "Reactor", id: 208, creator: "Cimota", weapon: 4, rarity: 4, glow: !0, seas: 4}, {
        name: "Yingyang",
        id: 210,
        creator: "Destroy007",
        weapon: 4,
        rarity: 2,
        glow: !0,
        seas: 4
    }, {name: "Saberstorm", id: 211, creator: "Kilfy", weapon: 4, rarity: 4, glow: !0, seas: 4}, {
        name: "Shogunner",
        id: 212,
        creator: "Chromatikk",
        weapon: 4,
        rarity: 3,
        seas: 4
    }, {
        name: "Project Firefly",
        id: 213,
        creator: "floatingpoint",
        weapon: 4,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "AYSY", id: 214, creator: "Kltter", weapon: 4, rarity: 3, glow: !0, seas: 4}, {
        name: "Serpentine",
        id: 215,
        creator: "KaineDCB",
        weapon: 4,
        rarity: 2,
        glow: !0,
        seas: 4
    }, {name: "Honeycomb", id: 216, weapon: 4, rarity: 0, seas: 4}, {
        name: "Sweety",
        id: 217,
        weapon: 4,
        rarity: 1,
        seas: 4
    }, {name: "Stormy", id: 218, weapon: 4, rarity: 1, seas: 4}, {
        name: "Illusion",
        id: 219,
        weapon: 4,
        rarity: 0,
        seas: 4
    }, {name: "Ducky", id: 220, weapon: 4, rarity: 1, seas: 4}, {
        name: "Emoji",
        id: 221,
        weapon: 4,
        rarity: 2,
        seas: 4
    }, {name: "Autumn", id: 222, weapon: 4, rarity: 1, seas: 4}, {
        name: "Alpes",
        id: 223,
        weapon: 4,
        rarity: 1,
        seas: 4
    }, {name: "Love", id: 224, weapon: 4, rarity: 1, seas: 4}, {
        name: "Rich",
        id: 225,
        weapon: 4,
        rarity: 2,
        seas: 4
    }, {name: "Puzzler", id: 226, weapon: 4, rarity: 1, seas: 4}, {
        name: "Rainbow Sky",
        id: 227,
        weapon: 4,
        rarity: 2,
        seas: 4
    }, {name: "Pirate", id: 228, weapon: 4, rarity: 2, seas: 4}, {
        name: "Tsunami",
        id: 229,
        weapon: 4,
        rarity: 1,
        seas: 4
    }, {name: "Hemp", id: 230, weapon: 4, rarity: 2, seas: 4}, {
        name: "Kyanite",
        id: 231,
        weapon: 4,
        rarity: 3,
        seas: 4
    }, {name: "Kunzite", id: 232, weapon: 4, rarity: 2, seas: 4}, {
        name: "Merlot",
        id: 233,
        weapon: 4,
        rarity: 0,
        seas: 4
    }, {name: "Huckleberry", id: 234, weapon: 4, rarity: 0, seas: 4}, {
        name: "Sketch",
        id: 235,
        weapon: 4,
        rarity: 0,
        seas: 4
    }, {
        name: "Basilisk",
        id: 144,
        creator: "FailBucket",
        weapon: 5,
        rarity: 2,
        glow: !0,
        seas: 4
    }, {name: "Golden Future", id: 145, creator: "Multihawk", weapon: 5, rarity: 2, seas: 4}, {
        name: "Lonely",
        id: 146,
        creator: "creshorTV",
        weapon: 5,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Zephyr", id: 147, creator: "Whippii", weapon: 5, rarity: 2, seas: 4}, {
        name: "Vince",
        id: 148,
        creator: "Kltter",
        weapon: 5,
        rarity: 2,
        glow: !0,
        seas: 4
    }, {
        name: "Fire Starter",
        id: 149,
        creator: "creshorTV",
        weapon: 5,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Flower Power", id: 150, creator: "creshorTV", weapon: 5, rarity: 3, seas: 4}, {
        name: "Living Dead",
        id: 151,
        creator: "Skriller33",
        weapon: 5,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Cyberkitty",
        id: 152,
        creator: "Kltter",
        weapon: 5,
        rarity: 2,
        glow: !0,
        seas: 4
    }, {
        name: "Harcollicegen",
        id: 153,
        creator: "ReDeagle",
        weapon: 5,
        rarity: 2,
        glow: !0,
        seas: 4
    }, {name: "Little Bite", id: 154, creator: "Whippii", weapon: 5, rarity: 3, glow: !0, seas: 4}, {
        name: "El Matador",
        id: 155,
        creator: "Destroy007",
        weapon: 5,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Obsessed", id: 156, creator: "Xyba", weapon: 5, rarity: 2, glow: !0, seas: 4}, {
        name: "Honeycomb",
        id: 157,
        weapon: 5,
        rarity: 0,
        seas: 4
    }, {name: "Sweety", id: 158, weapon: 5, rarity: 1, seas: 4}, {
        name: "Stormy",
        id: 159,
        weapon: 5,
        rarity: 1,
        seas: 4
    }, {name: "Illusion", id: 160, weapon: 5, rarity: 0, seas: 4}, {
        name: "Ducky",
        id: 161,
        weapon: 5,
        rarity: 1,
        seas: 4
    }, {name: "Emoji", id: 162, weapon: 5, rarity: 2, seas: 4}, {
        name: "Autumn",
        id: 163,
        weapon: 5,
        rarity: 1,
        seas: 4
    }, {name: "Alpes", id: 164, weapon: 5, rarity: 1, seas: 4}, {
        name: "Love",
        id: 165,
        weapon: 5,
        rarity: 1,
        seas: 4
    }, {name: "Rich", id: 166, weapon: 5, rarity: 2, seas: 4}, {
        name: "Puzzler",
        id: 167,
        weapon: 5,
        rarity: 1,
        seas: 4
    }, {name: "Rainbow Sky", id: 168, weapon: 5, rarity: 2, seas: 4}, {
        name: "Pirate",
        id: 169,
        weapon: 5,
        rarity: 1,
        seas: 4
    }, {name: "Tsunami", id: 170, weapon: 5, rarity: 1, seas: 4}, {
        name: "Hemp",
        id: 171,
        weapon: 5,
        rarity: 1,
        seas: 4
    }, {name: "Kyanite", id: 172, weapon: 5, rarity: 3, seas: 4}, {
        name: "Kunzite",
        id: 173,
        weapon: 5,
        rarity: 2,
        seas: 4
    }, {name: "Merlot", id: 174, weapon: 5, rarity: 2, seas: 4}, {
        name: "Huckleberry",
        id: 175,
        weapon: 5,
        rarity: 1,
        seas: 4
    }, {name: "Sketch", id: 176, weapon: 5, rarity: 0, seas: 4}, {
        name: "Death Rise",
        mid: 0,
        midT: 111,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "creshorTV",
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Keanu",
        mid: 0,
        midT: 112,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Zinoob",
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Track 73",
        mid: 0,
        midT: 113,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "multihawk",
        weapon: 6,
        rarity: 2,
        seas: 4
    }, {
        name: "Silver Teal",
        mid: 0,
        midT: 114,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "multihawk",
        weapon: 6,
        rarity: 2,
        seas: 4
    }, {
        name: "RY4-S",
        mid: 0,
        midT: 115,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Zinoob",
        weapon: 6,
        rarity: 2,
        glow: !0,
        seas: 4
    }, {
        name: "Spook Town",
        mid: 0,
        midT: 116,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Xyba",
        weapon: 6,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Prehistoric",
        mid: 0,
        midT: 117,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Atomize",
        weapon: 6,
        rarity: 2,
        seas: 4
    }, {
        name: "DragonBorn",
        mid: 0,
        midT: 118,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Kilfy",
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Blossom Revenge",
        mid: 0,
        midT: 119,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Destroy007",
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "One Off",
        mid: 0,
        midT: 120,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "cimota",
        weapon: 6,
        rarity: 3,
        seas: 4
    }, {
        name: "Bloodhound",
        mid: 0,
        midT: 121,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Kilfy",
        weapon: 6,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {
        name: "Cybergum",
        mid: 0,
        midT: 122,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Nxbulah",
        weapon: 6,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "CyberBuddy",
        mid: 0,
        midT: 123,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "multihawk",
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Lotus",
        mid: 0,
        midT: 124,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "Kristai",
        weapon: 6,
        rarity: 2,
        seas: 4
    }, {
        name: "Honeycomb",
        mid: 0,
        midT: 125,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 4
    }, {
        name: "Sweety",
        mid: 0,
        midT: 126,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Stormy",
        mid: 0,
        midT: 127,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Illusion",
        mid: 0,
        midT: 128,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 4
    }, {
        name: "Ducky",
        mid: 0,
        midT: 129,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Emoji",
        mid: 0,
        midT: 130,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 4
    }, {
        name: "Autumn",
        mid: 0,
        midT: 131,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Alpes",
        mid: 0,
        midT: 132,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Love",
        mid: 0,
        midT: 133,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 4
    }, {
        name: "Rich",
        mid: 0,
        midT: 134,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 4
    }, {
        name: "Puzzler",
        mid: 0,
        midT: 135,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Rainbow Sky",
        mid: 0,
        midT: 136,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 4
    }, {
        name: "Pirate",
        mid: 0,
        midT: 137,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 4
    }, {
        name: "Tsunami",
        mid: 0,
        midT: 138,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Hemp",
        mid: 0,
        midT: 139,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Kyanite",
        mid: 0,
        midT: 140,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 3,
        seas: 4
    }, {
        name: "Kunzite",
        mid: 0,
        midT: 141,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 4
    }, {
        name: "Merlot",
        mid: 0,
        midT: 142,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Huckleberry",
        mid: 0,
        midT: 143,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Sketch",
        mid: 0,
        midT: 144,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 0,
        seas: 4
    }, {name: "Orah", mid: 0, midT: 50, creator: "Nxbulah", weapon: 10, rarity: 2, seas: 4}, {
        name: "Lifeline",
        mid: 0,
        midT: 51,
        creator: "creshorTV",
        weapon: 10,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Rockstar",
        mid: 0,
        midT: 52,
        creator: "Destroy007",
        weapon: 10,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "SMILEZ",
        mid: 0,
        midT: 53,
        creator: "Kltter",
        weapon: 10,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Krunk Wet-Cannon",
        mid: 0,
        midT: 54,
        creator: "creshorTV",
        weapon: 10,
        rarity: 2,
        seas: 4
    }, {
        name: "Chameleon",
        mid: 0,
        midT: 55,
        creator: "bodeneinheit",
        weapon: 10,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Vizual",
        mid: 0,
        midT: 56,
        creator: "Zinoob",
        weapon: 10,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Lightning Vein",
        mid: 0,
        midT: 57,
        creator: "Destroy007",
        weapon: 10,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Records", id: 9, creator: "Kltter", weapon: 11, rarity: 3, seas: 4}, {
        name: "Jaw O Death",
        id: 10,
        creator: "Kltter",
        weapon: 11,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Bubblegun", id: 11, creator: "Multihawk", weapon: 11, rarity: 3, seas: 4}, {
        name: "Abominable",
        id: 12,
        creator: "Kilfy",
        weapon: 11,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {name: "Fervor", id: 13, creator: "Cimota", weapon: 11, rarity: 3, glow: !0, seas: 4}, {
        name: "Ultranoir",
        id: 14,
        creator: "floatingpoint",
        weapon: 11,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Vroominator",
        id: 3,
        creator: "creshorTV",
        weapon: 12,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Space Ranger", id: 7, creator: "Exxor", weapon: 14, rarity: 3, glow: !0, seas: 4}, {
        name: "Party Animal",
        id: 8,
        creator: "Destroy007",
        weapon: 14,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Policijia", id: 9, creator: "_irizu", weapon: 14, rarity: 3, seas: 4}, {
        name: "K9X",
        id: 10,
        creator: "_Xyba",
        weapon: 14,
        rarity: 3,
        seas: 4
    }, {name: "Digital Supremacy", id: 137, creator: "Multihawk", weapon: 15, rarity: 2, seas: 4}, {
        name: "Frosting",
        id: 138,
        creator: "creshorTV",
        weapon: 15,
        rarity: 2,
        seas: 4
    }, {name: "Spike", id: 139, creator: "Destroy007", weapon: 15, rarity: 3, glow: !0, seas: 4}, {
        name: "Dragon Koi",
        id: 140,
        creator: "Kilfy",
        weapon: 15,
        rarity: 3,
        seas: 4
    }, {
        name: "Synthetic Void",
        id: 141,
        creator: "Nxbulah",
        weapon: 15,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {name: "World Eater", id: 142, creator: "creshorTV", weapon: 15, rarity: 3, glow: !0, seas: 4}, {
        name: "Anky",
        id: 143,
        creator: "Chromatikk",
        weapon: 15,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Black Cats", id: 144, creator: "Kristai", weapon: 15, rarity: 3, glow: !0, seas: 4}, {
        name: "Dezein",
        id: 145,
        creator: "Nxbulah",
        weapon: 15,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Gate to Hxll",
        id: 146,
        creator: "Nxbulah",
        weapon: 15,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Trick or Treat",
        id: 147,
        creator: "Destroy007",
        weapon: 15,
        rarity: 2,
        glow: !0,
        seas: 4
    }, {name: "Crusade", id: 148, creator: "Atomize", weapon: 15, rarity: 2, seas: 4}, {
        name: "Sentry",
        id: 149,
        creator: "Kilfy",
        weapon: 15,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Scorpio", id: 150, creator: "Kilfy", weapon: 15, rarity: 3, glow: !0, seas: 4}, {
        name: "Thorny",
        id: 151,
        creator: "Xyba",
        weapon: 15,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Irresponsible",
        id: 152,
        creator: "Kcress",
        weapon: 15,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Honeycomb", id: 153, weapon: 15, rarity: 0, seas: 4}, {
        name: "Sweety",
        id: 154,
        weapon: 15,
        rarity: 1,
        seas: 4
    }, {name: "Stormy", id: 155, weapon: 15, rarity: 1, seas: 4}, {
        name: "Illusion",
        id: 156,
        weapon: 15,
        rarity: 0,
        seas: 4
    }, {name: "Ducky", id: 157, weapon: 15, rarity: 1, seas: 4}, {
        name: "Emoji",
        id: 158,
        weapon: 15,
        rarity: 2,
        seas: 4
    }, {name: "Autumn", id: 159, weapon: 15, rarity: 1, seas: 4}, {
        name: "Alpes",
        id: 160,
        weapon: 15,
        rarity: 1,
        seas: 4
    }, {name: "Love", id: 161, weapon: 15, rarity: 0, seas: 4}, {
        name: "Rich",
        id: 162,
        weapon: 15,
        rarity: 2,
        seas: 4
    }, {name: "Puzzler", id: 163, weapon: 15, rarity: 1, seas: 4}, {
        name: "Rainbow Sky",
        id: 164,
        weapon: 15,
        rarity: 2,
        seas: 4
    }, {name: "Pirate", id: 165, weapon: 15, rarity: 2, seas: 4}, {
        name: "Tsunami",
        id: 166,
        weapon: 15,
        rarity: 1,
        seas: 4
    }, {name: "Hemp", id: 167, weapon: 15, rarity: 1, seas: 4}, {
        name: "Kyanite",
        id: 168,
        weapon: 15,
        rarity: 3,
        seas: 4
    }, {name: "Kunzite", id: 169, weapon: 15, rarity: 2, seas: 4}, {
        name: "Merlot",
        id: 170,
        weapon: 15,
        rarity: 1,
        seas: 4
    }, {name: "Huckleberry", id: 171, weapon: 15, rarity: 1, seas: 4}, {
        name: "Sketch",
        id: 172,
        weapon: 15,
        rarity: 0,
        seas: 4
    }, {name: "Slayed", id: 4, creator: "Multihawk", weapon: 16, rarity: 3, seas: 4}, {
        name: "Urus",
        id: 4,
        creator: "Nxbulah",
        weapon: 17,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "KrunkieBoy", id: 5, creator: "Kltter", weapon: 17, rarity: 3, glow: !0, seas: 4}, {
        name: "Block-18",
        id: 6,
        creator: "Cimota",
        weapon: 17,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Avalanche Spirits",
        id: 7,
        creator: "Kilfy",
        weapon: 17,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {
        name: "Th3 Numb3rs",
        id: 8,
        creator: "Exxor",
        weapon: 17,
        rarity: 4,
        frames: 4,
        frameT: 250,
        glow: !0,
        seas: 4
    }, {name: "Submergence", id: 9, creator: "Kilfy", weapon: 17, rarity: 3, glow: !0, seas: 4}, {
        name: "C-300",
        id: 1,
        creator: "cimota",
        weapon: 19,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Pentacore",
        id: 2,
        creator: "Floatingpoint & Luminae",
        weapon: 19,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Ripjaws", mid: 0, midT: 62, creator: "Luminae", weapon: 8, rarity: 3, seas: 4}, {
        name: "Blood Diamond",
        mid: 0,
        midT: 63,
        creator: "Exxor",
        weapon: 8,
        rarity: 2,
        seas: 4
    }, {name: "MKT", mid: 0, midT: 64, creator: "Cimota", weapon: 8, rarity: 2, glow: !0, seas: 4}, {
        name: "Glorious",
        mid: 0,
        midT: 65,
        creator: "Destroy007",
        weapon: 8,
        rarity: 2,
        seas: 4
    }, {name: "Laminar", mid: 0, midT: 66, creator: "Luminae", weapon: 8, rarity: 2, glow: !0, seas: 4}, {
        name: "Prey",
        mid: 0,
        midT: 67,
        creator: "Chromatikk",
        weapon: 8,
        rarity: 2,
        seas: 4
    }, {
        name: "Wind",
        mid: 0,
        midT: 68,
        creator: "Luminae",
        weapon: 8,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Costume Party", mid: 0, midT: 69, creator: "Chromatikk", weapon: 8, rarity: 3, seas: 4}, {
        name: "Ciote",
        mid: 0,
        midT: 70,
        creator: "Luminae",
        weapon: 8,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {name: "Honeycomb", mid: 0, midT: 71, weapon: 8, rarity: 0, seas: 4}, {
        name: "Sweety",
        mid: 0,
        midT: 72,
        weapon: 8,
        rarity: 2,
        seas: 4
    }, {name: "Stormy", mid: 0, midT: 73, weapon: 8, rarity: 1, seas: 4}, {
        name: "Illusion",
        mid: 0,
        midT: 74,
        weapon: 8,
        rarity: 0,
        seas: 4
    }, {name: "Ducky", mid: 0, midT: 75, weapon: 8, rarity: 1, seas: 4}, {
        name: "Emoji",
        mid: 0,
        midT: 76,
        weapon: 8,
        rarity: 2,
        seas: 4
    }, {name: "Autumn", mid: 0, midT: 77, weapon: 8, rarity: 1, seas: 4}, {
        name: "Alpes",
        mid: 0,
        midT: 78,
        weapon: 8,
        rarity: 1,
        seas: 4
    }, {name: "Love", mid: 0, midT: 79, weapon: 8, rarity: 0, seas: 4}, {
        name: "Rich",
        mid: 0,
        midT: 80,
        weapon: 8,
        rarity: 2,
        seas: 4
    }, {name: "Puzzler", mid: 0, midT: 81, weapon: 8, rarity: 1, seas: 4}, {
        name: "Rainbow Sky",
        mid: 0,
        midT: 82,
        weapon: 8,
        rarity: 2,
        seas: 4
    }, {name: "Pirate", mid: 0, midT: 83, weapon: 8, rarity: 1, seas: 4}, {
        name: "Tsunami",
        mid: 0,
        midT: 84,
        weapon: 8,
        rarity: 1,
        seas: 4
    }, {name: "Hemp", mid: 0, midT: 85, weapon: 8, rarity: 2, seas: 4}, {
        name: "Kyanite",
        mid: 0,
        midT: 86,
        weapon: 8,
        rarity: 3,
        seas: 4
    }, {name: "Kunzite", mid: 0, midT: 87, weapon: 8, rarity: 2, seas: 4}, {
        name: "Merlot",
        mid: 0,
        midT: 88,
        weapon: 8,
        rarity: 1,
        seas: 4
    }, {name: "Huckleberry", mid: 0, midT: 89, weapon: 8, rarity: 1, seas: 4}, {
        name: "Sketch",
        mid: 0,
        midT: 90,
        weapon: 8,
        rarity: 0,
        seas: 4
    }, {
        name: "Society",
        id: 130,
        creator: "Cimota",
        weapon: 7,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Loch Ness Monster",
        id: 131,
        creator: "Destroy007",
        weapon: 7,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Centibeast",
        id: 132,
        creator: "Xyba",
        weapon: 7,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Honeycomb", id: 134, weapon: 7, rarity: 0, seas: 4}, {
        name: "Sweety",
        id: 135,
        weapon: 7,
        rarity: 1,
        seas: 4
    }, {name: "Stormy", id: 136, weapon: 7, rarity: 1, seas: 4}, {
        name: "Illusion",
        id: 137,
        weapon: 7,
        rarity: 0,
        seas: 4
    }, {name: "Ducky", id: 138, weapon: 7, rarity: 1, seas: 4}, {
        name: "Emoji",
        id: 139,
        weapon: 7,
        rarity: 2,
        seas: 4
    }, {name: "Autumn", id: 140, weapon: 7, rarity: 1, seas: 4}, {
        name: "Alpes",
        id: 141,
        weapon: 7,
        rarity: 1,
        seas: 4
    }, {name: "Love", id: 142, weapon: 7, rarity: 0, seas: 4}, {
        name: "Rich",
        id: 143,
        weapon: 7,
        rarity: 2,
        seas: 4
    }, {name: "Puzzler", id: 144, weapon: 7, rarity: 1, seas: 4}, {
        name: "Rainbow Sky",
        id: 145,
        weapon: 7,
        rarity: 2,
        seas: 4
    }, {name: "Pirate", id: 146, weapon: 7, rarity: 2, seas: 4}, {
        name: "Tsunami",
        id: 147,
        weapon: 7,
        rarity: 1,
        seas: 4
    }, {name: "Hemp", id: 148, weapon: 7, rarity: 1, seas: 4}, {
        name: "Kyanite",
        id: 149,
        weapon: 7,
        rarity: 3,
        seas: 4
    }, {name: "Kunzite", id: 150, weapon: 7, rarity: 2, seas: 4}, {
        name: "Merlot",
        id: 151,
        weapon: 7,
        rarity: 1,
        seas: 4
    }, {name: "Huckleberry", id: 152, weapon: 7, rarity: 1, seas: 4}, {
        name: "Sketch",
        id: 153,
        weapon: 7,
        rarity: 0,
        seas: 4
    }, {name: "Honeycomb", id: 94, weapon: 9, rarity: 0, seas: 4}, {
        name: "Sweety",
        id: 75,
        weapon: 9,
        rarity: 1,
        seas: 4
    }, {name: "Stormy", id: 76, weapon: 9, rarity: 1, seas: 4}, {
        name: "Illusion",
        id: 77,
        weapon: 9,
        rarity: 0,
        seas: 4
    }, {name: "Ducky", id: 78, weapon: 9, rarity: 1, seas: 4}, {
        name: "Emoji",
        id: 79,
        weapon: 9,
        rarity: 2,
        seas: 4
    }, {name: "Autumn", id: 80, weapon: 9, rarity: 1, seas: 4}, {
        name: "Alpes",
        id: 81,
        weapon: 9,
        rarity: 1,
        seas: 4
    }, {name: "Love", id: 82, weapon: 9, rarity: 0, seas: 4}, {
        name: "Rich",
        id: 83,
        weapon: 9,
        rarity: 2,
        seas: 4
    }, {name: "Puzzler", id: 84, weapon: 9, rarity: 1, seas: 4}, {
        name: "Rainbow Sky",
        id: 85,
        weapon: 9,
        rarity: 2,
        seas: 4
    }, {name: "Pirate", id: 86, weapon: 9, rarity: 2, seas: 4}, {
        name: "Tsunami",
        id: 87,
        weapon: 9,
        rarity: 1,
        seas: 4
    }, {name: "Hemp", id: 88, weapon: 9, rarity: 1, seas: 4}, {
        name: "Kyanite",
        id: 89,
        weapon: 9,
        rarity: 3,
        seas: 4
    }, {name: "Kunzite", id: 90, weapon: 9, rarity: 2, seas: 4}, {
        name: "Merlot",
        id: 91,
        weapon: 9,
        rarity: 1,
        seas: 4
    }, {name: "Huckleberry", id: 92, weapon: 9, rarity: 1, seas: 4}, {
        name: "Sketch",
        id: 93,
        weapon: 9,
        rarity: 0,
        seas: 4
    }, {
        name: "Mallet",
        keyW: "Knife",
        id: 22,
        type: 3,
        scl: 1,
        sclMlt: .9,
        yOff: -2,
        rarity: 4,
        seas: 4
    }, {
        name: "Cast Iron",
        keyW: "Knife",
        creator: "iSpy",
        id: 23,
        type: 3,
        scl: 1,
        sclMlt: .9,
        yOff: -2,
        rarity: 4,
        seas: 4
    }, {
        name: "Furball",
        keyW: "Knife",
        creator: "Whippii",
        flipAnim: !0,
        id: 3,
        tex: 16,
        type: 3,
        glow: !0,
        scl: 2.6,
        seas: 4,
        sclMlt: 1,
        yOff: -1,
        rarity: 3,
        xOff: -1.5,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Psychofang",
        keyW: "Knife",
        creator: "Uvaiz",
        flipAnim: !0,
        id: 3,
        tex: 14,
        type: 3,
        scl: 2.6,
        glow: !0,
        seas: 4,
        sclMlt: 1,
        yOff: -1,
        xOff: -1.5,
        rarity: 5,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Dragonclaw",
        keyW: "Knife",
        creator: "ReDeagle",
        flipAnim: !0,
        id: 3,
        tex: 15,
        type: 3,
        scl: 2.6,
        seas: 4,
        sclMlt: 1,
        yOff: -1,
        rarity: 3,
        sxRot: .3,
        sxOff: .35,
        szOff: -.25
    }, {
        name: "Vectronus",
        creator: "Multihawk",
        id: 9,
        tex: 2,
        rarity: 4,
        type: 3,
        sxOff: .4,
        scl: 1.4,
        yOff: -2,
        keyW: "Melee",
        glow: !0,
        seas: 4
    }, {
        name: "Dark Matter",
        creator: "Kilfy",
        id: 10,
        tex: 3,
        rarity: 5,
        type: 3,
        sxRot: -.3,
        syOff: .1,
        szOff: -.1,
        scl: .8,
        yOff: -1,
        keyW: "Melee",
        seas: 4,
        pulsT: .0015,
        glow: !0
    }, {name: "Silenced", mid: 0, weapon: 11, spnScl: 1, rarity: 5, seas: 4, glow: !0}, {
        name: "Exo-Skeleton",
        creator: "Exxor",
        mid: 0,
        weapon: 4,
        rarity: 5,
        seas: 4,
        pulsT: .0015,
        glow: !0
    }, {
        name: "MP5",
        leftHoldY: -.43,
        rightHoldY: -.8,
        rightHoldZ: -1.3,
        mScl: .00052263417085427,
        mid: 1,
        weapon: 4,
        rarity: 5,
        seas: 4,
        noAttach: !0
    }, {
        name: "Bizon",
        leftHoldY: -.85,
        rightHoldY: -.4,
        rightHoldZ: -1,
        attachYOff: -.05,
        attachZOff: -.95,
        attachScale: 1,
        mScl: .000627161005025124,
        mid: 2,
        weapon: 4,
        rarity: 5,
        seas: 4,
        noSale: !0,
        blackM: !0,
        funds: 1e4,
        reqT: "Level 100 SMG",
        req: function (e) {
            return e && e.stats && 1089e4 <= (e.stats.c2 || 0)
        }
    }, {
        name: "Dusty",
        id: 13,
        shirtCol: 6710886,
        sleeveCol: 2368548,
        pantsCol: 6710886,
        shoeCol: 2368548,
        seas: 4,
        type: 5,
        rarity: 4
    }, {
        name: "Cocoa",
        id: 14,
        shirtCol: 4599073,
        sleeveCol: 1182729,
        pantsCol: 4599073,
        shoeCol: 1182729,
        seas: 4,
        type: 5,
        rarity: 4
    }, {
        name: "Exotic",
        lore: "Adapts to your Skin Color",
        id: 15,
        useSkin: !0,
        noSleeve: !0,
        seas: 4,
        type: 5,
        rarity: 6
    }, {
        name: "Plasma Ball",
        keyW: "Knife",
        id: 20,
        tex: 1,
        type: 3,
        seas: 4,
        scl: 1,
        sclMlt: .7,
        yOff: -2,
        rarity: 5,
        sxRot: .3,
        sxOff: .05,
        szOff: -.55,
        syOff: .6,
        shaderId: 5
    }, {
        name: "Chain Blade",
        id: 25,
        rarity: 5,
        type: 3,
        sxOff: .4,
        frames: 2,
        frameT: 100,
        spnScl: 1.2,
        scl: 1.4,
        yOff: -2,
        keyW: "Melee",
        trans: !0,
        glow: !0,
        seas: 4
    }, {
        name: "Galagis",
        creator: "Nxbulah",
        id: 25,
        tex: 1,
        rarity: 5,
        type: 3,
        spnScl: 1.2,
        sxOff: .4,
        scl: 1.4,
        yOff: -2,
        keyW: "Melee",
        glow: !0,
        seas: 4
    }, {
        name: "Baton",
        id: 26,
        rarity: 4,
        spnScl: 1.2,
        type: 3,
        sxOff: .4,
        scl: 1.4,
        yOff: -2,
        keyW: "Melee",
        seas: 4
    }, {
        name: "Good Ol' Days",
        mid: 1,
        seas: 4,
        weapon: 7,
        rarity: 5,
        noAttach: !0,
        noEmis: !0,
        rightHoldZ: -.4,
        aimY: -.21
    }, {
        name: "Scouts Honor",
        mid: 7,
        scl: .00094830394974876,
        mScl: .0010536710552764,
        zOff: -.25,
        seas: 4,
        yOff: .05,
        weapon: 1,
        rarity: 6,
        noSpin: !0,
        limited: !0
    }, {name: "Good Ol' Days", mid: 1, weapon: 2, rarity: 5, seas: 4, noAttach: !0}, {
        name: "Plasmacrow",
        id: 72,
        tex: 2,
        type: 2,
        rarity: 5,
        keyW: "Back",
        seas: 4,
        scl: .5,
        xOff: -6.6,
        yOff: -1,
        glow: !0,
        sitOffZ: .5,
        sitOff: -.3,
        sclMlt: .55,
        shaderId: 6
    }, {
        name: "Mankini",
        id: 13,
        rarity: 4,
        type: 6,
        keyW: "Waist",
        seas: 4,
        scl: 3.6,
        spnScl: 3.5,
        yOff: -2,
        side: 2,
        sclMlt: 2.6,
        sitOff: 1.4,
        prevRot: 4
    }, {
        name: "Galaxys",
        keyW: "Knife",
        id: 20,
        tex: 2,
        type: 3,
        seas: 4,
        scl: 1,
        sclMlt: .7,
        yOff: -2,
        rarity: 5,
        sxRot: .3,
        sxOff: .05,
        szOff: -.55,
        syOff: .6,
        shaderId: 11
    }, {
        name: "Captain Galaxy",
        id: 52,
        tex: 6,
        rarity: 5,
        side: 2,
        glow: !0,
        type: 2,
        keyW: "Body",
        xRot: 2,
        xOff: -1,
        yOff: .5,
        spnScl: 2.6,
        sclMlt: 2.4,
        sitOff: -.5,
        sitOffZ: -.6,
        seas: 4,
        shaderId: 11
    }, {name: "Discoblaze", mid: 0, midT: 91, weapon: 8, rarity: 5, seas: 4, shaderId: 11}, {
        name: "Woodstock",
        mid: 0,
        midT: 145,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 5,
        seas: 4,
        shaderId: 10
    }, {name: "Woodstock", id: 173, weapon: 15, rarity: 5, seas: 4, shaderId: 10}, {
        name: "Censored",
        id: 14,
        rarity: 4,
        type: 6,
        keyW: "Waist",
        seas: 4,
        scl: 3.6,
        spnScl: 3.5,
        yOff: -2,
        side: 2,
        sclMlt: 2.6,
        sitOff: 1.4,
        prevRot: 4
    }, {name: "Honeycomb", mid: 0, midT: 58, weapon: 10, rarity: 0, seas: 4}, {
        name: "Sweety",
        mid: 0,
        midT: 59,
        weapon: 10,
        rarity: 0,
        seas: 4
    }, {name: "Stormy", mid: 0, midT: 60, weapon: 10, rarity: 2, seas: 4}, {
        name: "Illusion",
        mid: 0,
        midT: 61,
        weapon: 10,
        rarity: 0,
        seas: 4
    }, {name: "Ducky", mid: 0, midT: 62, weapon: 10, rarity: 2, seas: 4}, {
        name: "Emoji",
        mid: 0,
        midT: 63,
        weapon: 10,
        rarity: 2,
        seas: 4
    }, {name: "Autumn", mid: 0, midT: 64, weapon: 10, rarity: 1, seas: 4}, {
        name: "Alpes",
        mid: 0,
        midT: 65,
        weapon: 10,
        rarity: 1,
        seas: 4
    }, {name: "Love", mid: 0, midT: 66, weapon: 10, rarity: 1, seas: 4}, {
        name: "Rich",
        mid: 0,
        midT: 67,
        weapon: 10,
        rarity: 2,
        seas: 4
    }, {name: "Puzzler", mid: 0, midT: 68, weapon: 10, rarity: 1, seas: 4}, {
        name: "Rainbow Sky",
        mid: 0,
        midT: 69,
        weapon: 10,
        rarity: 2,
        seas: 4
    }, {name: "Pirate", mid: 0, midT: 70, weapon: 10, rarity: 2, seas: 4}, {
        name: "Tsunami",
        mid: 0,
        midT: 71,
        weapon: 10,
        rarity: 1,
        seas: 4
    }, {name: "Hemp", mid: 0, midT: 72, weapon: 10, rarity: 2, seas: 4}, {
        name: "Kyanite",
        mid: 0,
        midT: 73,
        weapon: 10,
        rarity: 3,
        seas: 4
    }, {name: "Kunzite", mid: 0, midT: 74, weapon: 10, rarity: 2, seas: 4}, {
        name: "Merlot",
        mid: 0,
        midT: 75,
        weapon: 10,
        rarity: 1,
        seas: 4
    }, {name: "Huckleberry", mid: 0, midT: 76, weapon: 10, rarity: 1, seas: 4}, {
        name: "Sketch",
        mid: 0,
        midT: 77,
        weapon: 10,
        rarity: 1,
        seas: 4
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        seas: 4,
        mid: 0,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        midT: 92,
        weapon: 8,
        rarity: 5
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        seas: 4,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        mid: 0,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        midT: 146,
        weapon: 6,
        rarity: 5
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        seas: 4,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        weapon: 11,
        rarity: 5
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        seas: 4,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        weapon: 19,
        rarity: 5
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        seas: 4,
        mid: 0,
        midT: 78,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        weapon: 10,
        rarity: 5
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        seas: 4,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        weapon: 17,
        rarity: 5
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        seas: 4,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        weapon: 9,
        rarity: 5
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        seas: 4,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        weapon: 12,
        rarity: 5
    }, {
        name: "Raynb0w",
        creator: "???",
        pat: 1,
        seas: 4,
        tex: "weapons/pat/1",
        sameGlow: !0,
        movT: .0015,
        weapon: 16,
        rarity: 5
    }, {
        name: "Bunny",
        id: 0,
        tex: 28,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Puppy",
        id: 0,
        tex: 29,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 2.2,
        xRot: -.5
    }, {
        name: "Panda Streak",
        creator: "Chwoubaka",
        id: 135,
        type: 4,
        rarity: 3,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {
        name: "Parkour!",
        creator: "Chwoubaka",
        id: 136,
        type: 4,
        rarity: 3,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {
        name: "R.K.R",
        creator: "Chwoubaka",
        id: 137,
        type: 4,
        rarity: 3,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {
        name: "Rekt",
        creator: "Chwoubaka",
        id: 138,
        type: 4,
        rarity: 3,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {
        name: "EZ",
        creator: "Chwoubaka",
        id: 139,
        type: 4,
        rarity: 4,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {name: "Krunker", id: 0, keyW: "Sprays", free: !0, type: 4, opacity: .6}, {
        name: "Target",
        id: 1,
        keyW: "Sprays",
        free: !0,
        type: 4,
        opacity: .6
    }, {name: "GG", id: 2, keyW: "Sprays", free: !0, type: 4, opacity: .6}, {
        name: "Pumpkin",
        id: 3,
        keyW: "Sprays",
        free: !0,
        type: 4,
        opacity: .6
    }, {name: "Spooky", id: 4, keyW: "Sprays", free: !0, type: 4, opacity: .6}, {
        name: "Ded",
        id: 5,
        keyW: "Sprays",
        free: !0,
        type: 4,
        opacity: .6
    }, {name: "Sadface", id: 6, keyW: "Sprays", free: !0, type: 4, opacity: .6}, {
        name: "Laugh Cry",
        id: 7,
        keyW: "Sprays",
        free: !0,
        type: 4,
        opacity: .7
    }, {name: "Sid", id: 8, keyW: "Sprays", free: !0, type: 4, opacity: .9}, {
        name: "Vince",
        id: 9,
        keyW: "Sprays",
        free: !0,
        type: 4,
        opacity: .9
    }, {name: "Kiki", id: 10, free: !0, keyW: "Sprays", type: 4, opacity: .6}, {
        name: "Ladder",
        id: 11,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: 1
    }, {name: "Dummy", id: 12, free: !0, keyW: "Sprays", type: 4, opacity: 1}, {
        name: "8 Ball",
        id: 13,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .6
    }, {name: "xD", id: 14, free: !0, keyW: "Sprays", type: 4, opacity: .6}, {
        name: "MMOK",
        id: 15,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .7
    }, {name: "Madman", id: 16, free: !0, keyW: "Sprays", type: 4, opacity: .6}, {
        name: "Terminal",
        id: 17,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .6
    }, {name: "YODO", id: 18, free: !0, keyW: "Sprays", type: 4, opacity: .6}, {
        name: "Crayon",
        id: 19,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .6
    }, {name: "Myth", id: 20, free: !0, keyW: "Sprays", type: 4, opacity: .85}, {
        name: "SpikyJohn",
        id: 21,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .85
    }, {name: "LevelGaming", id: 22, free: !0, keyW: "Sprays", type: 4, opacity: .9}, {
        name: "PolarAce",
        id: 23,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .9
    }, {name: "FrostyWolf", id: 24, free: !0, keyW: "Sprays", type: 4, opacity: .85}, {
        name: "Waspy",
        id: 25,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .85
    }, {name: "KPal", id: 26, free: !0, keyW: "Sprays", type: 4, opacity: .9}, {
        name: "Rain Song",
        id: 27,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .85
    }, {name: "nV", id: 28, free: !0, keyW: "Sprays", type: 4, opacity: .9}, {
        name: "BV Hype",
        id: 29,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .85
    }, {name: "Kaarson", id: 30, free: !0, keyW: "Sprays", type: 4, opacity: .9}, {
        name: "Deal With It",
        id: 31,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .9
    }, {name: "Rice", id: 32, free: !0, keyW: "Sprays", type: 4, opacity: .9}, {
        name: "Lore",
        id: 33,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .95
    }, {name: "Desu Sid", id: 34, free: !0, keyW: "Sprays", type: 4, opacity: .85}, {
        name: "Anomaly",
        id: 35,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .85
    }, {name: "FaZe", id: 36, free: !0, keyW: "Sprays", type: 4, opacity: .9}, {
        name: "Nudah",
        id: 37,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .9
    }, {name: "Misfits", id: 38, free: !0, keyW: "Sprays", type: 4, opacity: .9}, {
        name: "Bill $aber",
        id: 54,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .9
    }, {name: "Fields Food v1", id: 55, free: !0, keyW: "Sprays", type: 4, opacity: .9}, {
        name: "Fields Food v2",
        id: 56,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .9
    }, {name: "Phil", id: 57, free: !0, keyW: "Sprays", type: 4, opacity: .9}, {
        name: "VoKUS",
        id: 58,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .8
    }, {name: "StremZ", id: 59, free: !0, keyW: "Sprays", type: 4, opacity: .9}, {
        name: "Zed",
        id: 63,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .9
    }, {name: "Northern Forces", id: 64, free: !0, keyW: "Sprays", type: 4, opacity: .9}, {
        name: "Sorable",
        id: 65,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .9
    }, {name: "Syctis", id: 66, free: !0, keyW: "Sprays", type: 4, opacity: .9}, {
        name: "Moon Juice",
        id: 79,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .9
    }, {name: "caL", id: 83, free: !0, keyW: "Sprays", type: 4, opacity: .9}, {
        name: "Quacky",
        id: 87,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .9
    }, {
        name: "Verb",
        id: 88,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .9,
        frames: 4,
        frameT: 250
    }, {name: "Fields Food v3", id: 106, free: !0, keyW: "Sprays", type: 4, opacity: .9}, {
        name: "Chwoubaka",
        creator: "Chwoubaka",
        id: 140,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .8
    }, {
        name: "Mile",
        creator: "milerobloxfan",
        id: 141,
        free: !0,
        keyW: "Sprays",
        type: 4,
        opacity: .8
    }, {
        name: "Trigger Mastery",
        leftHoldY: -.57,
        rightHoldY: -1,
        rightHoldZ: -1.4,
        rotOffA: -.013,
        yOrg: -.0018,
        yRot: 1e-9,
        zOrg: -3.5,
        noAttach: !0,
        mid: 2,
        weapon: 2,
        rarity: 5,
        seas: 4,
        noSale: !0,
        blackM: !0,
        funds: 1e4,
        reqT: "Lvl 100 Triggerman",
        req: function (e) {
            return e && e.stats && 1089e4 <= (e.stats.c0 || 0)
        }
    }, {name: "Dismay", id: 268, creator: "Dismay", weapon: 1, rarity: 3, glow: !0, seas: 4}, {
        name: "All Aboard",
        id: 269,
        creator: "Nxbulah",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Hologram",
        midT: 4,
        noMuz: !0,
        mid: 0,
        weapon: 3,
        spnScl: 1.3,
        scl: .9,
        mScl: .84,
        zOff: 0,
        yOff: 0,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        creator: "Destroy007",
        seas: 4
    }, {name: "Toucan", id: 177, creator: "Destroy007", weapon: 5, rarity: 3, glow: !0, seas: 4}, {
        name: "Crystal",
        mid: 0,
        midT: 95,
        creator: "Luminae",
        weapon: 8,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Frozen", mid: 0, midT: 96, creator: "Luminae", weapon: 8, rarity: 3, glow: !0, seas: 4}, {
        name: "Ghen",
        mid: 0,
        midT: 93,
        creator: "Kcress",
        weapon: 8,
        rarity: 2,
        seas: 4
    }, {
        name: "Guardian",
        mid: 0,
        midT: 94,
        creator: "Kilfy",
        weapon: 8,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {name: "Laboratorix", id: 15, creator: "ReDeagle", weapon: 11, rarity: 3, glow: !0, seas: 4}, {
        name: "Paladin",
        id: 3,
        creator: "Destroy007",
        weapon: 19,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Division X",
        id: 4,
        creator: "ReDeagle",
        weapon: 19,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Star Capper",
        limT: "Charity",
        noSale: !0,
        noSpin: !0,
        mSeas: !0,
        id: 179,
        tex: 4,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .48,
        sitOff: 1,
        yOff: -1.5,
        xOff: 1.4,
        rarity: 1,
        side: 2,
        trans: !0,
        alpha: .02
    }, {
        name: "Zero Ground",
        limT: "Charity",
        noSale: !0,
        noSpin: !0,
        mSeas: !0,
        id: 52,
        tex: 7,
        rarity: 4,
        side: 2,
        glow: !0,
        type: 2,
        keyW: "Body",
        xRot: 2,
        xOff: -1,
        yOff: .5,
        spnScl: 2.6,
        sclMlt: 2.4,
        sitOff: -.5,
        sitOffZ: -.6,
        seas: 4
    }, {
        name: "Krunkstar",
        limT: "Charity",
        noSale: !0,
        noSpin: !0,
        mSeas: !0,
        id: 0,
        tex: 2,
        rarity: 4,
        type: 8,
        yOff: -3,
        xOff: 1,
        keyW: "Shoes",
        seas: 4
    }, {
        name: "Telescope",
        limT: "Charity",
        noSale: !0,
        noSpin: !0,
        mSeas: !0,
        id: 269,
        weapon: 1,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Shooting Star",
        limT: "Charity",
        noSale: !0,
        noSpin: !0,
        mSeas: !0,
        id: 270,
        weapon: 2,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "SubStar",
        limT: "Charity",
        noSale: !0,
        noSpin: !0,
        mSeas: !0,
        id: 236,
        weapon: 4,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Neonic", id: 270, creator: "Luminae", weapon: 1, rarity: 3, glow: !0, seas: 4}, {
        name: "Krunker'77",
        id: 271,
        creator: "Exxor",
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Vespidae Mk. III",
        id: 272,
        creator: "floatingpoint",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "OPTILINE", id: 273, creator: "Kltter", weapon: 1, rarity: 3, glow: !0, seas: 4}, {
        name: "Dimension",
        id: 271,
        creator: "Luminae",
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Mecha Zone",
        id: 272,
        creator: "multihawk",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "AL-405", id: 273, creator: "Zinoob", weapon: 2, rarity: 3, glow: !0, seas: 4}, {
        name: "Nightmare Fue",
        id: 274,
        creator: "MDebski",
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "CPU", id: 275, creator: "Destroy007", weapon: 2, rarity: 3, glow: !0, seas: 4}, {
        name: "Hell Tooth",
        creator: "creshorTV",
        weapon: 3,
        midT: 5,
        noMuz: !0,
        mid: 0,
        spnScl: 1.3,
        scl: .9,
        mScl: .84,
        zOff: 0,
        yOff: 0,
        glow: !0,
        pulsT: .0015,
        rarity: 3,
        seas: 4
    }, {name: "BRAINWASH", id: 237, creator: "Kltter", weapon: 4, rarity: 3, glow: !0, seas: 4}, {
        name: "Mecha's Bane",
        id: 238,
        creator: "multihawk",
        weapon: 4,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Natrix", id: 239, creator: "Kltter", weapon: 4, rarity: 2, glow: !0, seas: 4}, {
        name: "Chromatikk",
        id: 240,
        creator: "Dark Soul",
        weapon: 4,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {name: "Controlled", id: 241, creator: "Luminae", weapon: 4, rarity: 3, glow: !0, seas: 4}, {
        name: "Octopod",
        id: 178,
        creator: "bodeneinheit",
        weapon: 5,
        rarity: 2,
        glow: !0,
        seas: 4
    }, {name: "Hades Blaze", id: 179, creator: "MDebski", weapon: 5, rarity: 3, glow: !0, seas: 4}, {
        name: "Malignance",
        mid: 0,
        midT: 97,
        creator: "Whippii",
        weapon: 8,
        rarity: 2,
        seas: 4
    }, {name: "Ginova", id: 16, creator: "MDebski", weapon: 11, rarity: 3, glow: !0, seas: 4}, {
        name: "Kristai",
        id: 17,
        creator: "Golden Moon",
        weapon: 11,
        rarity: 2,
        seas: 4
    }, {
        name: "Pocket Sniper",
        id: 18,
        creator: "Pocket Sniper",
        weapon: 11,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Izon", id: 174, creator: "Nxbulah", weapon: 15, rarity: 4, glow: !0, seas: 4}, {
        name: "Heartbreak",
        id: 10,
        creator: "Kcress",
        weapon: 17,
        rarity: 3,
        seas: 4
    }, {name: "Cadaver", id: 11, creator: "MDebski", weapon: 17, rarity: 4, glow: !0, seas: 4}, {
        name: "Paladin",
        id: 5,
        creator: "Krunk Punk",
        weapon: 19,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {
        name: "Rudolph",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 274,
        creator: "Destroy007",
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Unwrapped",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 275,
        creator: "Kristai",
        weapon: 1,
        rarity: 3,
        seas: 4
    }, {
        name: "Ho-Ho",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 276,
        weapon: 1,
        rarity: 2,
        seas: 4
    }, {
        name: "Dotted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 277,
        weapon: 1,
        rarity: 1,
        seas: 4
    }, {
        name: "Jingles",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 278,
        weapon: 1,
        rarity: 1,
        seas: 4
    }, {
        name: "Candy Cane",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 279,
        weapon: 1,
        rarity: 2,
        seas: 4
    }, {
        name: "Mistletoe",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 280,
        weapon: 1,
        rarity: 2,
        seas: 4
    }, {
        name: "Cookie",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 281,
        weapon: 1,
        rarity: 1,
        seas: 4
    }, {
        name: "Festivity",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 282,
        weapon: 1,
        rarity: 2,
        seas: 4
    }, {
        name: "Wrapper",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 283,
        weapon: 1,
        rarity: 1,
        seas: 4
    }, {
        name: "Gifted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 284,
        weapon: 1,
        rarity: 1,
        seas: 4
    }, {
        name: "Grinchmas",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 276,
        creator: "creshorTV",
        weapon: 2,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Ho-Ho",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 277,
        weapon: 2,
        rarity: 2,
        seas: 4
    }, {
        name: "Dotted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 278,
        weapon: 2,
        rarity: 1,
        seas: 4
    }, {
        name: "Jingles",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 279,
        weapon: 2,
        rarity: 1,
        seas: 4
    }, {
        name: "Candy Cane",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 280,
        weapon: 2,
        rarity: 2,
        seas: 4
    }, {
        name: "Mistletoe",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 281,
        weapon: 2,
        rarity: 2,
        seas: 4
    }, {
        name: "Cookie",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 282,
        weapon: 2,
        rarity: 1,
        seas: 4
    }, {
        name: "Festivity",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 283,
        weapon: 2,
        rarity: 2,
        seas: 4
    }, {
        name: "Wrapper",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 284,
        weapon: 2,
        rarity: 1,
        seas: 4
    }, {
        name: "Gifted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 285,
        weapon: 2,
        rarity: 1,
        seas: 4
    }, {
        name: "ELF",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        midT: 6,
        noMuz: !0,
        mid: 0,
        spnScl: 1.3,
        scl: .9,
        mScl: .84,
        zOff: 0,
        yOff: 0,
        creator: "Destroy007",
        weapon: 3,
        noEmis: !0,
        rarity: 4,
        seas: 4
    }, {
        name: "Ho-Ho",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 242,
        weapon: 4,
        rarity: 2,
        seas: 4
    }, {
        name: "Dotted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 243,
        weapon: 4,
        rarity: 1,
        seas: 4
    }, {
        name: "Jingles",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 244,
        weapon: 4,
        rarity: 1,
        seas: 4
    }, {
        name: "Candy Cane",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 245,
        weapon: 4,
        rarity: 2,
        seas: 4
    }, {
        name: "Mistletoe",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 246,
        weapon: 4,
        rarity: 2,
        seas: 4
    }, {
        name: "Cookie",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 247,
        weapon: 4,
        rarity: 1,
        seas: 4
    }, {
        name: "Festivity",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 248,
        weapon: 4,
        rarity: 2,
        seas: 4
    }, {
        name: "Wrapper",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 249,
        weapon: 4,
        rarity: 1,
        seas: 4
    }, {
        name: "Gifted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 250,
        weapon: 4,
        rarity: 1,
        seas: 4
    }, {
        name: "Ginger Cannon",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 180,
        creator: "Kilfy",
        weapon: 5,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Ho-Ho",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 181,
        weapon: 5,
        rarity: 2,
        seas: 4
    }, {
        name: "Dotted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 182,
        weapon: 5,
        rarity: 1,
        seas: 4
    }, {
        name: "Jingles",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 183,
        weapon: 5,
        rarity: 1,
        seas: 4
    }, {
        name: "Candy Cane",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 184,
        weapon: 5,
        rarity: 2,
        seas: 4
    }, {
        name: "Mistletoe",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 185,
        weapon: 5,
        rarity: 2,
        seas: 4
    }, {
        name: "Cookie",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 186,
        weapon: 5,
        rarity: 1,
        seas: 4
    }, {
        name: "Festivity",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 187,
        weapon: 5,
        rarity: 2,
        seas: 4
    }, {
        name: "Wrapper",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 188,
        weapon: 5,
        rarity: 1,
        seas: 4
    }, {
        name: "Gifted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 189,
        weapon: 5,
        rarity: 1,
        seas: 4
    }, {
        name: "Gift Wrapped",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 147,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        creator: "FailBucket",
        weapon: 6,
        rarity: 3,
        seas: 4
    }, {
        name: "Ho-Ho",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 148,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 4
    }, {
        name: "Dotted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 149,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Jingles",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 150,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Candy Cane",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 151,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 4
    }, {
        name: "Mistletoe",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 152,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 4
    }, {
        name: "Cookie",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 153,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Festivity",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 154,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 2,
        seas: 4
    }, {
        name: "Wrapper",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 155,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Gifted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 156,
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 1,
        seas: 4
    }, {
        name: "Santa's Anarchy",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 154,
        creator: "Destroy007",
        weapon: 7,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Ho-Ho",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 155,
        weapon: 7,
        rarity: 2,
        seas: 4
    }, {
        name: "Dotted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 156,
        weapon: 7,
        rarity: 1,
        seas: 4
    }, {
        name: "Jingles",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 157,
        weapon: 7,
        rarity: 1,
        seas: 4
    }, {
        name: "Candy Cane",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 158,
        weapon: 7,
        rarity: 2,
        seas: 4
    }, {
        name: "Mistletoe",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 159,
        weapon: 7,
        rarity: 2,
        seas: 4
    }, {
        name: "Cookie",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 160,
        weapon: 7,
        rarity: 1,
        seas: 4
    }, {
        name: "Festivity",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 161,
        weapon: 7,
        rarity: 2,
        seas: 4
    }, {
        name: "Wrapper",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 162,
        weapon: 7,
        rarity: 1,
        seas: 4
    }, {
        name: "Gifted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 163,
        weapon: 7,
        rarity: 1,
        seas: 4
    }, {
        name: "Ho-Ho",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 98,
        weapon: 8,
        rarity: 2,
        seas: 4
    }, {
        name: "Dotted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 99,
        weapon: 8,
        rarity: 1,
        seas: 4
    }, {
        name: "Jingles",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 100,
        weapon: 8,
        rarity: 1,
        seas: 4
    }, {
        name: "Candy Cane",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 101,
        weapon: 8,
        rarity: 2,
        seas: 4
    }, {
        name: "Mistletoe",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 102,
        weapon: 8,
        rarity: 2,
        seas: 4
    }, {
        name: "Cookie",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 103,
        weapon: 8,
        rarity: 1,
        seas: 4
    }, {
        name: "Festivity",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 104,
        weapon: 8,
        rarity: 2,
        seas: 4
    }, {
        name: "Wrapper",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 105,
        weapon: 8,
        rarity: 1,
        seas: 4
    }, {
        name: "Gifted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 106,
        weapon: 8,
        rarity: 1,
        seas: 4
    }, {
        name: "Ho-Ho",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 79,
        weapon: 10,
        rarity: 2,
        seas: 4
    }, {
        name: "Dotted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 80,
        weapon: 10,
        rarity: 1,
        seas: 4
    }, {
        name: "Jingles",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 81,
        weapon: 10,
        rarity: 1,
        seas: 4
    }, {
        name: "Candy Cane",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 82,
        weapon: 10,
        rarity: 2,
        seas: 4
    }, {
        name: "Mistletoe",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 83,
        weapon: 10,
        rarity: 2,
        seas: 4
    }, {
        name: "Cookie",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 84,
        weapon: 10,
        rarity: 1,
        seas: 4
    }, {
        name: "Festivity",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 85,
        weapon: 10,
        rarity: 2,
        seas: 4
    }, {
        name: "Wrapper",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 86,
        weapon: 10,
        rarity: 1,
        seas: 4
    }, {
        name: "Gifted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 87,
        weapon: 10,
        rarity: 1,
        seas: 4
    }, {
        name: "Ugly Sweater",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 19,
        creator: "MDebski",
        weapon: 11,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "NutKRacker",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 184,
        creator: "creshorTV",
        weapon: 15,
        rarity: 3,
        seas: 4
    }, {
        name: "Ho-Ho",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 175,
        weapon: 15,
        rarity: 2,
        seas: 4
    }, {
        name: "Dotted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 176,
        weapon: 15,
        rarity: 1,
        seas: 4
    }, {
        name: "Jingles",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 177,
        weapon: 15,
        rarity: 1,
        seas: 4
    }, {name: "Candy Cane", limT: "Christmas", noSale: !0, id: 178, weapon: 15, rarity: 2, seas: 4}, {
        name: "Mistletoe",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 179,
        weapon: 15,
        rarity: 2,
        seas: 4
    }, {
        name: "Cookie",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 180,
        weapon: 15,
        rarity: 1,
        seas: 4
    }, {
        name: "Festivity",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 181,
        weapon: 15,
        rarity: 2,
        seas: 4
    }, {
        name: "Wrapper",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 182,
        weapon: 15,
        rarity: 1,
        seas: 4
    }, {
        name: "Gifted",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 183,
        weapon: 15,
        rarity: 1,
        seas: 4
    }, {
        name: "Christmas Cannon",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 5,
        creator: "MDebski",
        weapon: 16,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Snow Candy",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 12,
        creator: "creshorTV",
        weapon: 17,
        rarity: 3,
        seas: 4
    }, {
        name: "Sleigh Ride",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 6,
        creator: "ReDeagle",
        weapon: 19,
        pulsT: .003,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {
        name: "Merry Krunkmas",
        creator: "Kilfy",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 142,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Candy Cane",
        creator: "Kilfy",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 143,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Mistletoe",
        creator: "Kilfy",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 144,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Snowman",
        creator: "Kilfy",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 145,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "K-Mas",
        creator: "Kilfy",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 146,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Missile Toe",
        creator: "Kilfy",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 147,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Reindeer",
        creator: "xire-fox",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 148,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Santa Krause",
        creator: "xire-fox",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 149,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Penguin",
        creator: "xire-fox",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 150,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Pengu",
        creator: "xire-fox",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 151,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Candy Shooter",
        creator: "xire-fox",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 152,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Polar Bear",
        creator: "xire-fox",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 153,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Foxxy",
        creator: "xire-fox",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 154,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Sweet Tooth",
        creator: "xire-fox",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 155,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Tree Bro",
        creator: "WHITEwing",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 156,
        type: 4,
        rarity: 1,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Santa Belt",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 15,
        rarity: 3,
        type: 6,
        keyW: "Waist",
        seas: 4,
        scl: 3.6,
        spnScl: 3.5,
        yOff: -2,
        side: 2,
        sclMlt: 2.6,
        sitOff: 1.4,
        prevRot: 4
    }, {
        name: "Present Danger",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        mid: 0,
        midT: 0,
        creator: "Exxor & Multihawk",
        weapon: 17,
        rarity: 5,
        glow: !0,
        seas: 4
    }, {
        name: "Candy Caney",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        tex: 1,
        id: 152,
        type: 1,
        keyW: "Hat",
        seas: 4,
        scl: 1,
        sclMlt: .6,
        sitOff: .75,
        yOff: -1,
        xOff: -.6,
        noHead: !0,
        rarity: 3
    }, {
        name: "Santa",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 201,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: 1.11,
        seas: 4
    }, {
        name: "Reindeer",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 202,
        rarity: 3,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: .8,
        seas: 4,
        yOff: -1.5,
        xOff: .5
    }, {
        name: "Clause",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 203,
        rarity: 4,
        type: 1,
        keyW: "Hat",
        sclMlt: .5,
        sitOff: 1.11,
        seas: 4
    }, {
        name: "Present Tamer",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 102,
        type: 2,
        rarity: 5,
        keyW: "Back",
        seas: 4,
        scl: 3,
        sitOff: -1,
        sitOffZ: -2.5,
        sclMlt: 2.4,
        rAnim: .0015,
        rAnimA: "x"
    }, {
        name: "Candy Caner",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 101,
        type: 2,
        rarity: 2,
        keyW: "Back",
        xRot: Math.PI,
        scl: .7,
        xOff: -1,
        yOff: -1,
        seas: 4,
        sclMlt: .5,
        sitOff: -.3
    }, {
        name: "Cane",
        limT: "Christmas",
        noSpin: !0,
        noSale: !0,
        id: 27,
        rarity: 4,
        spnScl: 1.2,
        type: 3,
        sxOff: .4,
        scl: 1.4,
        yOff: -2,
        keyW: "Melee",
        seas: 4
    }, {name: "Polar", id: 285, creator: "ReDeagle", weapon: 1, rarity: 4, glow: !0, seas: 4}, {
        name: "Minimal",
        id: 286,
        creator: "Luminae",
        weapon: 2,
        rarity: 3,
        seas: 4
    }, {
        name: "Ancient Rave",
        id: 287,
        creator: "MDebski",
        weapon: 2,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {
        name: "Burnt Memoir",
        id: 288,
        creator: "Kcress",
        weapon: 2,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Golden Emissary", id: 289, creator: "multihawk", weapon: 2, rarity: 3, seas: 4}, {
        name: "Zander",
        id: 251,
        creator: "Skriller33",
        weapon: 4,
        rarity: 2,
        seas: 4
    }, {name: "Raptor", id: 252, creator: "Kilfy", weapon: 4, rarity: 3, glow: !0, seas: 4}, {
        name: "Pocket Cannon",
        id: 190,
        creator: "Destroy007",
        weapon: 5,
        rarity: 2,
        seas: 4
    }, {name: "Yellow Flash", id: 191, creator: "Whippii", weapon: 5, rarity: 3, glow: !0, seas: 4}, {
        name: "Runic",
        id: 20,
        creator: "Exxor",
        weapon: 11,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {name: "Ganbatte", id: 21, creator: "Whippii", weapon: 11, rarity: 4, glow: !0, seas: 4}, {
        name: "X-Commando",
        id: 11,
        creator: "FailBucket",
        weapon: 14,
        rarity: 3,
        seas: 4
    }, {name: "Relic Hunter", id: 12, creator: "MDebski", weapon: 14, rarity: 2, seas: 4}, {
        name: "K-Racer",
        id: 13,
        creator: "multihawk",
        weapon: 17,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Raid Unob",
        creator: "itsAbsent",
        limT: "Raid",
        noSpin: !0,
        noSale: !0,
        noQuickSell: !0,
        id: 157,
        type: 4,
        rarity: 6,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {name: "Absent", id: 158, keyW: "Sprays", free: !0, type: 4, opacity: .8}, {
        name: "Psych TV",
        creator: "Nxbulah",
        id: 159,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Wild West",
        creator: "ReDeagle",
        id: 160,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Psychogram",
        creator: "Nxbulah",
        id: 161,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Radiated",
        creator: "Kilfy",
        id: 162,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Tactical Nuke",
        creator: "Kilfy",
        id: 163,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Nuclear",
        creator: "Kilfy",
        id: 164,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Nuclear Waste",
        creator: "Kilfy",
        id: 165,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Psycomputer",
        creator: "Nxbulah",
        id: 166,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Speeder 58",
        creator: "Multihawk",
        id: 167,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Constellation",
        id: 286,
        creator: "Luminae",
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Sea Devourer",
        id: 287,
        creator: "MDebski",
        weapon: 1,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {
        name: "Town Defender",
        id: 290,
        creator: "multihawk",
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Widowmaker",
        creator: "creshorTV",
        midT: 7,
        glow: !0,
        noMuz: !0,
        mid: 0,
        weapon: 3,
        spnScl: 1.3,
        scl: .9,
        mScl: .84,
        zOff: 0,
        yOff: 0,
        rarity: 4,
        pulsT: .0015,
        seas: 4
    }, {name: "Krunklair", id: 253, creator: "Kltter", weapon: 4, rarity: 3, glow: !0, seas: 4}, {
        name: "Phantom_Kille",
        id: 192,
        creator: "creshorTV",
        weapon: 5,
        rarity: 3,
        seas: 4
    }, {
        name: "Component-06",
        id: 193,
        creator: "ReFlick",
        weapon: 5,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Korder",
        mid: 0,
        midT: 157,
        creator: "Kltter",
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "ZPVC",
        mid: 0,
        midT: 158,
        creator: "Kltter",
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Retrocade 2.0",
        mid: 0,
        midT: 88,
        creator: "Kltter",
        weapon: 10,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Machina", id: 22, creator: "Kltter", weapon: 11, rarity: 4, glow: !0, seas: 4}, {
        name: "Aikon",
        id: 23,
        creator: "MDebski",
        weapon: 11,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {name: "KIGA", id: 14, creator: "Kltter", weapon: 17, rarity: 3, glow: !0, seas: 4}, {
        name: "Companion",
        id: 15,
        creator: "Kltter",
        weapon: 17,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Psychotab",
        creator: "Nxbulah",
        id: 168,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Winged Skull",
        creator: "MDebski",
        id: 169,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Elegant Death",
        creator: "MDebski",
        id: 170,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Hades",
        creator: "MDebski",
        id: 171,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "So Hot!",
        creator: "MDebski",
        id: 172,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Free ;)",
        creator: "Multihawk",
        id: 173,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Triggy",
        creator: "Bodeneinheit",
        id: 174,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "SharkBait",
        creator: "CreshorTV",
        id: 175,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Speeder 56",
        creator: "Multihawk",
        id: 176,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Precision",
        creator: "ReDeagle",
        id: 177,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Elemental Trio",
        id: 288,
        creator: "Chromatikk",
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Turbo Boost",
        id: 291,
        creator: "Destroy007",
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Golden Fish", id: 254, creator: "Destroy007", weapon: 4, rarity: 3, glow: !0, seas: 4}, {
        name: "14O",
        id: 255,
        creator: "Kltter",
        weapon: 4,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Yucatan", id: 256, creator: "Exxor", weapon: 4, rarity: 3, glow: !0, seas: 4}, {
        name: "Hakka",
        id: 257,
        creator: "MDebski",
        weapon: 4,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Vision", id: 194, creator: "Kltter", weapon: 5, rarity: 3, glow: !0, seas: 4}, {
        name: "Laser Radiation",
        id: 4,
        creator: "Nxbulah",
        weapon: 12,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Time Tracer", id: 7, creator: "Zinoob", weapon: 19, rarity: 4, glow: !0, seas: 4}, {
        name: "Speedy",
        creator: "Bodeneinheit",
        id: 178,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "No Cap",
        creator: "Bodeneinheit",
        id: 179,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Turbo Kill",
        creator: "Kilfy",
        id: 180,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "7HP",
        creator: "Destroy007",
        id: 181,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Sweater",
        creator: "Bodeneinheit",
        id: 182,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Execution",
        creator: "Kilfy",
        id: 183,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Angwy",
        creator: "Bodeneinheit",
        id: 184,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Relaxy",
        creator: "Bodeneinheit",
        id: 185,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "End Lives",
        creator: "Kristai",
        id: 186,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Thicc Thighs",
        creator: "Kristai",
        id: 187,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Shaman's Dream",
        id: 16,
        creator: "MDebski",
        weapon: 17,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Popstar 77",
        mid: 0,
        midT: 159,
        creator: "MDebski",
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Devil's Torment",
        id: 195,
        creator: "Kristai",
        weapon: 5,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "VoidMatter",
        id: 258,
        creator: "Kilfy",
        weapon: 4,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Sherbet", id: 259, creator: "Luminae", weapon: 4, rarity: 3, glow: !0, seas: 4}, {
        name: "Nuclear Winter",
        id: 292,
        creator: "Kilfy",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Thunderclap", id: 289, creator: "ReFlick", weapon: 1, rarity: 3, glow: !0, seas: 4}, {
        name: "Ack",
        creator: "Kcress",
        id: 188,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Controlled",
        creator: "Xire-fox",
        id: 189,
        type: 4,
        rarity: 3,
        seas: 4,
        opacity: .9,
        keyW: "Sprays"
    }, {
        name: "Glubi",
        id: 0,
        tex: 30,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Globi",
        id: 0,
        tex: 31,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "0v3Rload",
        creator: "Nxbulah",
        midT: 8,
        noMuz: !0,
        mid: 0,
        spnScl: 1.3,
        scl: .9,
        mScl: .84,
        zOff: 0,
        yOff: 0,
        weapon: 3,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Crocodile",
        id: 196,
        creator: "Destroy007",
        weapon: 5,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "0vercharged",
        id: 197,
        creator: "MDebski",
        weapon: 5,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {
        name: "Zombie Eliminator",
        mid: 0,
        midT: 107,
        creator: "MDebski",
        weapon: 8,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Neocore Chameleon",
        mid: 0,
        midT: 108,
        creator: "multihawk",
        weapon: 8,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Grantz", id: 24, creator: "MDebski", weapon: 11, rarity: 3, glow: !0, seas: 4}, {
        name: "Zinoob",
        id: 185,
        creator: "Arcadist",
        weapon: 15,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Doppler",
        id: 17,
        creator: "Destroy007",
        weapon: 17,
        rarity: 3,
        glow: !0,
        seas: 4,
        itemShop: 2
    }, {name: "Neon Burst", id: 260, creator: "ReFlick", weapon: 4, rarity: 3, seas: 4, itemShop: 2}, {
        name: "Warden",
        midT: 9,
        mid: 0,
        noMuz: !0,
        spnScl: 1.3,
        scl: .9,
        mScl: .84,
        zOff: 0,
        yOff: 0,
        creator: "Kilfy",
        weapon: 3,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4,
        itemShop: 2
    }, {
        name: "Sentient",
        id: 293,
        creator: "Luminae",
        weapon: 2,
        rarity: 4,
        glow: !0,
        seas: 4,
        itemShop: 2
    }, {
        name: "Jolly",
        id: 0,
        tex: 32,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5,
        frames: 2,
        frameT: 400,
        itemShop: 2
    }, {name: "VSS", mid: 3, glow: !0, seas: 4, weapon: 2, rarity: 5, trans: !0, itemShop: 2}, {
        name: "Dummy Grenade",
        id: 31,
        rarity: 5,
        spnScl: 2.4,
        type: 3,
        yOff: -2,
        keyW: "Melee",
        seas: 4,
        explode: !0,
        itemShop: 2
    }, {
        name: "Night Time Terror",
        id: 290,
        creator: "Chromatikk",
        weapon: 1,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "RabbidTurkey", id: 294, creator: "Kilfy", weapon: 2, rarity: 4, glow: !0, seas: 4}, {
        name: "Exo-Ship",
        id: 295,
        creator: "MDebski",
        weapon: 2,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "CIMOTAKOV", id: 296, creator: "cimota", weapon: 2, rarity: 3, glow: !0, seas: 4}, {
        name: "Dojo",
        mid: 0,
        midT: 160,
        creator: "Kcress",
        scl: .9,
        mScl: 1,
        zOff: .28,
        yOff: -.5,
        weapon: 6,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {
        name: "Sahara Ops",
        mid: 0,
        midT: 89,
        creator: "MDebski",
        weapon: 10,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Xena",
        id: 25,
        creator: "Nxbulah",
        weapon: 11,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Entry to Heaven",
        id: 186,
        creator: "Nxbulah",
        weapon: 15,
        rarity: 4,
        glow: !0,
        itemShop: 2,
        seas: 4
    }, {
        name: "Chemical Zebra",
        id: 187,
        creator: "Destroy007",
        weapon: 15,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Termination",
        id: 18,
        creator: "multihawk",
        weapon: 17,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Tiger Blast",
        id: 8,
        creator: "Destroy007",
        weapon: 19,
        rarity: 3,
        glow: !0,
        itemShop: 2,
        seas: 4
    }, {
        name: "Unhinged",
        creator: "Chwoubaka",
        id: 0,
        tex: 33,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Vexed",
        creator: "Chwoubaka",
        id: 0,
        tex: 34,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Bitey",
        creator: "Chwoubaka",
        id: 0,
        tex: 35,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Chewie",
        creator: "Chwoubaka",
        id: 0,
        tex: 36,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Wasted",
        creator: "Kilfy",
        id: 0,
        tex: 37,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        itemShop: 2,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Confidence",
        creator: "Kilfy",
        id: 0,
        tex: 38,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Cartoon",
        creator: "Kilfy",
        id: 0,
        tex: 39,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        itemShop: 2,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5,
        frames: 2,
        frameT: 400
    }, {
        name: "Bloodrushed",
        creator: "Kilfy",
        id: 0,
        tex: 40,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        itemShop: 2,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Tribal",
        creator: "Kilfy",
        id: 0,
        tex: 41,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        itemShop: 2,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "1Head",
        creator: "ReFlick",
        id: 0,
        tex: 42,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Eddrido",
        creator: "KaineDCB",
        id: 0,
        tex: 43,
        rarity: 4,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Terrifying",
        creator: "Kcress",
        id: 0,
        tex: 44,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        itemShop: 2,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Spoof",
        creator: "RiotAlexis & Elliot4fall",
        id: 0,
        tex: 45,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Karen",
        creator: "RiotAlexis & Elliot4fall",
        id: 0,
        tex: 46,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Wise Man",
        creator: "RiotAlexis & Elliot4fall",
        id: 0,
        tex: 47,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Oopsy",
        creator: "RiotAlexis & Elliot4fall",
        id: 0,
        tex: 48,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Sniffler",
        creator: "Kcress",
        id: 0,
        tex: 49,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        itemShop: 2,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Torn Flesh",
        creator: "Nxbulah",
        id: 0,
        tex: 50,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Arrogant",
        creator: "Pami",
        id: 0,
        tex: 51,
        rarity: 3,
        type: 7,
        keyW: "Face",
        seas: 4,
        sitOff: 1,
        sitOffZ: .005,
        trans: !0,
        yOff: -.7,
        xOff: 1.6,
        xRot: -.5
    }, {
        name: "Captain Scar Face",
        id: 291,
        creator: "MDebski",
        weapon: 1,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {
        name: "Decimator",
        id: 297,
        creator: "Kilfy",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "cracked",
        midT: 12,
        creator: "creshorTV",
        noMuz: !0,
        mid: 0,
        weapon: 3,
        spnScl: 1.3,
        scl: .9,
        mScl: .84,
        zOff: 0,
        yOff: 0,
        rarity: 3,
        seas: 4
    }, {
        name: "Royal Dragon",
        midT: 10,
        creator: "ReFlick",
        noMuz: !0,
        mid: 0,
        weapon: 3,
        spnScl: 1.3,
        scl: .9,
        mScl: .84,
        zOff: 0,
        yOff: 0,
        rarity: 4,
        seas: 4
    }, {
        name: "Namazu",
        midT: 11,
        creator: "Nxbulah",
        noMuz: !0,
        mid: 0,
        weapon: 3,
        spnScl: 1.3,
        scl: .9,
        mScl: .84,
        zOff: 0,
        yOff: 0,
        rarity: 5,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "1980", id: 261, creator: "Luminae", weapon: 4, rarity: 3, glow: !0, seas: 4}, {
        name: "Factory Finish",
        id: 198,
        creator: "Nxbulah",
        weapon: 5,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {name: "Legionnaire", id: 199, creator: "cimota", weapon: 5, rarity: 2, glow: !0, seas: 4}, {
        name: "Cobblestone",
        mid: 0,
        midT: 109,
        creator: "cimota",
        weapon: 8,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Manolo", id: 26, creator: "MDebski", weapon: 11, rarity: 3, glow: !0, seas: 4}, {
        name: "Royale Bow",
        id: 13,
        creator: "Destroy007",
        weapon: 14,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Neon Hunter", id: 14, creator: "MDebski", weapon: 14, rarity: 3, glow: !0, seas: 4}, {
        name: "Confusions",
        id: 188,
        creator: "Kcress",
        weapon: 15,
        rarity: 2,
        glow: !0,
        seas: 4
    }, {name: "C-419", id: 9, creator: "cimota", weapon: 19, rarity: 4, glow: !0, seas: 4}, {
        name: "Trigger-Bot",
        creator: "Multihawk",
        id: 190,
        type: 4,
        rarity: 3,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {
        name: "Hunter-Bot",
        creator: "Multihawk",
        id: 191,
        type: 4,
        rarity: 3,
        opacity: .8,
        keyW: "Sprays",
        seas: 4
    }, {
        name: "Moonfeather",
        id: 103,
        type: 2,
        keyW: "Back",
        particle: 5,
        glow: !0,
        scl: 3.5,
        sclMlt: 3.6,
        xOff: -1.5,
        sitOff: -1.3,
        sitOffZ: -1.4,
        yOff: -2,
        rarity: 6,
        seas: 4,
        hasAnim: !0,
        animS: 1
    }, {
        name: "Mechanically Organic",
        id: 292,
        creator: "Kcress",
        weapon: 1,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "MPIRE", id: 293, creator: "Exxor", weapon: 1, rarity: 3, glow: !0, seas: 4}, {
        name: "DeathBeat",
        id: 298,
        creator: "ReFlick",
        weapon: 2,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "RTF",
        mid: 0,
        midT: 14,
        creator: "Luminae",
        noMuz: !0,
        weapon: 3,
        pulsT: .0015,
        spnScl: 1.3,
        scl: .9,
        mScl: .84,
        zOff: 0,
        yOff: 0,
        rarity: 4,
        glow: !0,
        seas: 4
    }, {
        name: "Toxic Splash",
        id: 200,
        creator: "MDebski",
        weapon: 5,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {
        name: "Interconnected",
        id: 27,
        creator: "multihawk",
        weapon: 11,
        rarity: 3,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Line Hunter",
        id: 6,
        creator: "multihawk",
        weapon: 16,
        rarity: 4,
        glow: !0,
        pulsT: .0015,
        seas: 4
    }, {
        name: "Noble Hitman",
        id: 7,
        creator: "MDebski",
        weapon: 16,
        rarity: 3,
        glow: !0,
        seas: 4
    }, {name: "Winter Delight", id: 8, creator: "Nxbulah", weapon: 16, rarity: 4, glow: !0, seas: 4}, {
        name: "gL!tcH3d",
        id: 19,
        creator: "MDebski",
        weapon: 17,
        rarity: 4,
        glow: !0,
        seas: 4
    }
], module.exports.limited = [];
for (var t = [1, 2, 6, 7, 8], n = 0; n < module.exports.skins.length; n++) module.exports.skins[n].index = n, module.exports.skins[n].type && -1 != t.indexOf(module.exports.skins[n].type) && (null == module.exports.skins[n].sitOff && (module.exports.skins[n].sitOff = 0), null == module.exports.skins[n].sitOffZ && (module.exports.skins[n].sitOffZ = 0), null == module.exports.skins[n].sclMlt && (module.exports.skins[n].sclMlt = 0)), module.exports.skins[n].free && (module.exports.skins[n].limT = "Free", module.exports.skins[n].noSale = !0, module.exports.skins[n].noSpin = !0), module.exports.skins[n].itemShop && (module.exports.skins[n].noSale = 1 == module.exports.skins[n].itemShop, module.exports.skins[n].noSpin = !0, module.exports.skins[n].limited = !0);
for (n = 0; n < module.exports.limited.length; n++) module.exports.limited[n].i = n
},{}],3:[function(require,module,exports){
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
},{"./classes":1,"./data":2,"./weapons":4}],4:[function(require,module,exports){
module.exports = [
    {
        name: "Sniper Rifle",
        src: "weapon_1",
        icon: "icon_1",
        assetIcon: "",
        sound: "weapon_1",
        secondary: !1,
        noSpread: !1,
        projectile: {
            disable: !0,
            mat: "BASIC",
            color: 16777179,
            dmg: 100,
            spd: 2.5,
            lookDir: !0,
            grav: 1e-4,
            scale: 1.4,
            length: 10,
            range: 7e3,
            snd: 0
        },
        akimbo: !1,
        noAim: !1,
        animWhileAim: !0,
        trail: !0,
        flap: {src: "flap_0", rot: 2.1, scl: 1, zOff: .43, xOff: .17, yOff: .53},
        physRang: 0,
        physPow: 0,
        noAo: !0,
        nAuto: !0,
        type: 0,
        scope: !0,
        swapTime: 300,
        aimSpd: 120,
        spdMlt: .95,
        ammo: 3,
        dmg: 100,
        hsMlt: 1.5,
        pierce: .2,
        reload: 1500,
        range: 1e3,
        dropStart: 230,
        dmgDrop: 30,
        scale: .00115608717587935,
        leftHoldY: -.65,
        rightHoldY: -.68,
        leftHoldZ: 2.1,
        rightHoldZ: .75,
        holdW: 1,
        xOff: .8,
        yOff: -.65,
        zOff: -1.8,
        xOrg: 0,
        yOrg: -.55,
        zOrg: -.8,
        cLean: .2,
        cRot: .2,
        cDrop: .1,
        inspectR: .2,
        inspectM: .1,
        muzOff: 8,
        muzMlt: 1.6,
        rate: 900,
        spread: 260,
        zoom: 2.7,
        leanMlt: 1.5,
        recoil: .009,
        recoilR: .05,
        recover: .993,
        recoverY: .997,
        recoverF: .975,
        recoilYM: .55,
        recoilZ: 1.5,
        recoilAnim: {time: 280, aimTime: 500, recoilTweenY: .24},
        jumpYM: .15,
        rumble: .9,
        rumbleDur: 500,
        icnPad: 9
    }, {
        name: "Assault Rifle",
        src: "weapon_2",
        icon: "icon_2",
        assetIcon: "",
        sound: "weapon_2",
        projectile: {
            disable: !0,
            mat: "BASIC",
            color: 16777179,
            dmg: 23,
            spd: 2.6,
            lookDir: !0,
            grav: 11e-5,
            scale: 1.4,
            length: 10,
            range: 3e3,
            snd: 0
        },
        secondary: !1,
        noSpread: !1,
        akimbo: !1,
        noAim: !1,
        noAo: !0,
        nAuto: !1,
        physRang: 0,
        physPow: 0,
        swapWiggle: .3,
        attach: 0,
        attachYOff: -.07,
        attachZOff: -.8,
        zRot: 1,
        type: 0,
        swapTime: 300,
        aimSpd: 130,
        spdMlt: .95,
        ammo: 30,
        rate: 120,
        reload: 1400,
        dmg: 23,
        hsMlt: 1.5,
        pierce: 1,
        range: 700,
        dmgDrop: 5,
        scale: .00095745145728643,
        leftHoldY: -.41,
        rightHoldY: -.6,
        leftHoldZ: .5,
        rightHoldZ: -1.2,
        holdW: .8,
        xOff: .7,
        yOff: -.87,
        zOff: -3.33,
        rotOff: -.08,
        rotOffA: -.035,
        aimOffY: .042,
        yRot: .0018,
        xOrg: 0,
        yOrg: -.59,
        zOrg: -2.14,
        cLean: .2,
        cRot: .1,
        cDrop: .1,
        inspectR: .1,
        inspectM: 1.5,
        caseZOff: -1.7,
        caseYOff: -.2,
        muzOff: 5.1,
        muzOffY: -.05,
        muzMlt: 1.4,
        spread: 100,
        minSpread: 5,
        zoom: 1.6,
        leanMlt: 1.5,
        recoil: .003,
        recoilR: .05,
        recover: .978,
        recoverY: .995,
        recoverF: .975,
        jYMlt: .9,
        recoilYM: .6,
        recoilZ: 4.3,
        recoilZM: -.04,
        aimRecMlt: .65,
        recoilAnim: {time: 160, recoilTweenY: .065, recoilTweenZ: .1},
        jumpYM: .3,
        rumble: .5,
        icnPad: 5
    }, {
        name: "Pistol",
        src: "weapon_3",
        icon: "icon_3",
        assetIcon: "",
        sound: "weapon_3",
        secondary: !0,
        noSpread: !1,
        akimbo: !1,
        noAim: !1,
        noAo: !0,
        transp: !0,
        nAuto: !0,
        projectile: {
            disable: !0,
            mat: "BASIC",
            color: 16777179,
            dmg: 12,
            spd: 2.3,
            lookDir: !0,
            grav: 1e-4,
            scale: 1.4,
            length: 10,
            range: 1600,
            snd: 0
        },
        physRang: 0,
        physPow: 0,
        kill: ["", 75],
        swapWiggle: .3,
        type: 1,
        shine: 10,
        swapTime: 260,
        aimSpd: 110,
        spdMlt: 1.05,
        ammo: 10,
        reload: 700,
        dmg: 20,
        hsMlt: 1.5,
        range: 700,
        dmgDrop: 10,
        scale: .0003158947055276376,
        leftHoldY: -1.1,
        rightHoldY: -.62,
        leftHoldZ: -.3,
        rightHoldZ: -.32,
        rightHoldX: .13,
        holdW: 1.3,
        xOff: 1.2,
        yOff: -.6,
        zOff: -3.7,
        xOrg: 0,
        yRot: -.005,
        yOrg: -.23,
        zOrg: -3.9,
        jYMlt: .1,
        cLean: .3,
        cRot: .3,
        caseZOff: .2,
        caseYOff: 0,
        inspectR: .3,
        inspectM: .8,
        muzOff: 1.5,
        muzOffY: 0,
        muzMlt: .95,
        rate: 150,
        spread: 60,
        zoom: 1.4,
        leanMlt: 1,
        recoil: .006,
        recoilR: .02,
        recover: .98,
        recoverY: .99,
        recoverF: .98,
        recoilYM: .2,
        aimRecMlt: .4,
        recoilZ: 3.8,
        recoilZM: -.4,
        recoilAnim: {time: 200, recoilTweenY: .28, recoilTweenZ: .1},
        rumble: .4,
        icnPad: -15,
        expScale: .8
    }, {
        name: "Submachine Gun",
        src: "weapon_4",
        icon: "icon_4",
        assetIcon: "",
        sound: "weapon_4",
        secondary: !1,
        noSpread: !1,
        nAuto: !1,
        noAim: !1,
        akimbo: !1,
        projectile: {
            disable: !0,
            mat: "BASIC",
            color: 16777179,
            dmg: 18,
            spd: 2.4,
            lookDir: !0,
            grav: 11e-5,
            scale: 1.4,
            length: 10,
            range: 2700,
            snd: 0
        },
        physRang: 0,
        physPow: 0,
        swapWiggle: .5,
        attach: 0,
        attachYOff: -.09,
        attachZOff: -1.1,
        zRot: .75,
        noAo: !0,
        type: 0,
        shine: 50,
        swapTime: 300,
        aimSpd: 110,
        spdMlt: 1.04,
        ammo: 34,
        reload: 1e3,
        dmg: 18,
        hsMlt: 1.5,
        pierce: 1,
        range: 700,
        dmgDrop: 12,
        scale: .000574897587939697,
        leftHoldY: -.4,
        leftHoldX: -.1,
        leftHoldZ: 1.1,
        rightHoldZ: -.95,
        rightHoldY: -.5,
        holdW: .85,
        xOff: .85,
        yOff: -.86,
        zOff: -3,
        xOrg: 0,
        yOrg: -.59,
        zOrg: -2.5,
        cRot: .18,
        cLean: .16,
        inspectR: .2,
        inspectM: 1.2,
        caseYOff: -.15,
        caseZOff: -.4,
        muzOff: 2.15,
        muzOffY: .1,
        rate: 90,
        spread: 70,
        minSpread: 5,
        zoom: 1.65,
        jYMlt: .8,
        leanMlt: 1,
        recoil: .0034,
        recoilY: .77,
        recoilYM: .3,
        recoilR: .065,
        recover: .975,
        recoverY: .996,
        recoverF: .975,
        recoilZ: 4.2,
        recoilZM: -.1,
        aimRecMlt: .6,
        recoilAnim: {time: 190, recoilTweenYM: .05, recoilTweenY: .06, recoilTweenZ: .14},
        expScale: .8,
        rumble: .4,
        icnPad: 0
    }, {
        name: "Revolver",
        src: "weapon_5",
        icon: "icon_5",
        assetIcon: "",
        sound: "weapon_5",
        secondary: !1,
        noSpread: !1,
        akimbo: !1,
        noAim: !1,
        nAuto: !0,
        noAo: !0,
        projectile: {
            disable: !0,
            mat: "BASIC",
            color: 16777179,
            dmg: 66,
            spd: 2.3,
            lookDir: !0,
            grav: 1e-4,
            scale: 1.4,
            length: 10,
            range: 2600,
            snd: 0
        },
        physRang: 0,
        physPow: 0,
        nCase: !0,
        transp: !0,
        kill: ["", 50],
        type: 0,
        swapTime: 200,
        swapWiggle: .4,
        aimSpd: 110,
        spdMlt: 1.04,
        ammo: 6,
        reload: 900,
        dmg: 66,
        hsMlt: 1.5,
        pierce: .85,
        dmgDrop: 10,
        scale: .000515531266331653,
        hDstOff: 1.6,
        leftHoldY: -1.3,
        rightHoldY: -.8,
        leftHoldZ: -.6,
        rightHoldZ: -.72,
        rightHoldX: .1,
        holdW: 1.1,
        rotOff: -.05,
        xOff: .7,
        yOff: -.5,
        zOff: -3.5,
        xOrg: 0,
        yOrg: -.31,
        zOrg: -3.5,
        jYMlt: .4,
        cLean: .2,
        cRot: .1,
        cDrop: .1,
        inspectR: .1,
        inspectM: .3,
        muzOff: 2.75,
        muzOffY: .2,
        muzMlt: .95,
        range: 700,
        rate: 400,
        spread: 100,
        zoom: 1.45,
        leanMlt: 1.6,
        recoil: .013,
        recoilR: .082,
        recover: .982,
        recoverY: .992,
        recoverF: .98,
        recoilYM: .5,
        aimRecMlt: .1,
        recoilZM: .01,
        recoilZ: 4,
        recoilAnim: {time: 350, recoilTweenY: .39, recoilTweenYM: .25},
        expScale: .9,
        rumble: .7,
        icnPad: -10
    }, {
        name: "Shotgun",
        src: "weapon_6",
        icon: "icon_6",
        assetIcon: "",
        sound: "weapon_6",
        secondary: !1,
        noSpread: !1,
        noAim: !1,
        akimbo: !1,
        altSkin: {
            name: "Nova Pump",
            mid: 0,
            blocked: !0,
            noSale: !0,
            midT: 38,
            scl: .9,
            mScl: 1,
            zOff: .28,
            yOff: -.5,
            seas: 2,
            weapon: 6,
            rarity: 0
        },
        noAo: !0,
        nAuto: !0,
        nCase: !0,
        nRing: !0,
        swapWiggle: .4,
        shine: 35,
        type: 0,
        physRang: 35,
        physPow: .09,
        swapTime: 300,
        aimSpd: 120,
        spdMlt: 1,
        ammo: 2,
        reload: 1100,
        dmg: 50,
        hsMlt: 1.5,
        dmgDrop: 50,
        scale: .00082934281407035,
        rightHoldX: .1,
        leftHoldY: -.6,
        rightHoldY: -.6,
        leftHoldZ: .4,
        rightHoldZ: -1.3,
        holdW: 1,
        xOff: .95,
        yOff: -.6,
        zOff: -3.8,
        xOrg: 0,
        yOrg: -.3,
        zOrg: -2.8,
        cLean: .2,
        cRot: .2,
        cDrop: .1,
        jYMlt: .2,
        inspectR: .1,
        muzOff: 6,
        muzMlt: 1.8,
        inspectM: 1.9,
        range: 160,
        rate: 450,
        innac: 110,
        spread: 180,
        shots: 5,
        cSpread: [.03, .02, -.27, .02, .03, -.31, .3, -.01, .01, .28, .01, .02, -.17, -.22, -.3, .31, .32, .28, .3, -.2],
        minSpread: 20,
        zoom: 1.25,
        leanMlt: 1.6,
        recoil: .02,
        recoilR: .015,
        recover: .99,
        recoverF: .97,
        recoilZ: 2.1,
        recoilZM: .2,
        aimRecMlt: .67,
        recoilYM: .65,
        recoilAnim: {time: 340, recoilTweenY: .22},
        jumpYM: .5,
        rumble: .8,
        icnPad: 10,
        expScale: .85
    }, {
        name: "Machine Gun",
        src: "weapon_7",
        icon: "icon_7",
        assetIcon: "",
        sound: "weapon_7",
        secondary: !1,
        akimbo: !1,
        noAim: !1,
        nAuto: !1,
        noSpread: !1,
        projectile: {
            disable: !0,
            mat: "BASIC",
            color: 16777179,
            dmg: 18,
            spd: 2.3,
            lookDir: !0,
            grav: 1e-4,
            scale: 1.4,
            length: 10,
            range: 3e3,
            snd: 0
        },
        physRang: 0,
        physPow: 0,
        type: 0,
        attach: 0,
        swapWiggle: .3,
        attachYOff: -.085,
        attachZOff: -.74,
        zRot: .75,
        noAo: !0,
        swapTime: 700,
        aimSpd: 200,
        spdMlt: .79,
        jumMlt: .85,
        ammo: 60,
        reload: 3300,
        dmg: 18,
        hsMlt: 1.5,
        pierce: 1,
        range: 700,
        dmgDrop: 10,
        jYMlt: .8,
        scale: .0008856008924623108,
        leftHoldY: -.85,
        leftHoldX: .4,
        rightHoldX: -.1,
        rightHoldY: -.79,
        leftHoldZ: 1.1,
        rightHoldZ: -.2,
        holdW: 1.1,
        yRot: -.01,
        xOff: .95,
        yOff: -.75,
        zOff: -2.8,
        xOrg: 0,
        yOrg: -.6,
        zOrg: -1.8,
        cLean: .1,
        cRot: .1,
        cDrop: .1,
        inspectR: .2,
        inspectM: .6,
        caseInd: 2,
        caseZOff: -.5,
        caseYOff: -.1,
        muzOff: 5.5,
        muzOffY: -.14,
        muzMlt: 1.7,
        rate: 130,
        spread: 300,
        minSpread: 10,
        zoom: 1.3,
        leanMlt: 1.6,
        recoil: .0032,
        recoilR: .04,
        recover: .98,
        recoverY: .9975,
        recoverF: .975,
        recoilZ: 3.8,
        recoilYM: .25,
        recoilZ: 3,
        recoilZM: -.1,
        aimRecMlt: .5,
        recoilAnim: {time: 200, recoilTweenY: .045, recoilTweenZ: .12},
        jumpYM: .5,
        expScale: .85,
        rumble: .65,
        icnPad: 10
    }, {
        name: "Semi Auto",
        src: "weapon_8",
        icon: "icon_8",
        assetIcon: "",
        sound: "weapon_8",
        noSpread: !1,
        secondary: !1,
        noAim: !1,
        akimbo: !1,
        projectile: {
            disable: !0,
            mat: "BASIC",
            color: 16777179,
            dmg: 33,
            spd: 2.5,
            lookDir: !0,
            grav: 1e-4,
            scale: 1.4,
            length: 10,
            range: 4e3,
            snd: 0
        },
        physRang: 0,
        physPow: 0,
        altSkin: {name: "Nova Semi", blocked: !0, noSale: !0, mid: 0, midT: 0, seas: 3, weapon: 8, rarity: 0},
        attach: 0,
        attachYOff: -.08,
        attachZOff: -1.55,
        nAuto: !0,
        zRot: .7,
        type: 0,
        noAo: !0,
        swapWiggle: .4,
        swapTime: 300,
        aimSpd: 120,
        spdMlt: 1,
        ammo: 8,
        reload: 1500,
        dmg: 32,
        hsMlt: 1.5625,
        pierce: .2,
        range: 1e3,
        dmgDrop: 0,
        scale: .00093686221105528,
        leftHoldY: -.5,
        rightHoldY: -.45,
        leftHoldZ: .4,
        rightHoldZ: -1.85,
        jYMlt: .6,
        xOff: .8,
        yOff: -.6,
        zOff: -3.5,
        xOrg: 0,
        yOrg: -.395,
        yRot: -.005,
        zOrg: -3.4,
        rotOff: -.02,
        cLean: .2,
        cRot: .2,
        cDrop: .1,
        inspectR: .2,
        inspectM: 1.4,
        muzOff: 4,
        muzOffY: -.05,
        muzMlt: 1.1,
        rate: 120,
        spread: 250,
        caseZOff: -1.3,
        zoom: 2.1,
        recoil: .01,
        recoilR: .08,
        recover: .98,
        recoilY: .36,
        recoverY: .994,
        recoverF: .975,
        recoilYM: .6,
        recoilZ: 2,
        recoilZM: .2,
        aimRecMlt: .8,
        recoilAnim: {time: 250, recoilTweenY: .11, recoilTweenZ: .15},
        jumpYM: .5,
        rumble: .75,
        icnPad: 10
    }, {
        name: "Rocket Launcher",
        src: "weapon_9",
        icon: "icon_9",
        assetIcon: "",
        sound: "weapon_9",
        noSpread: !1,
        noAim: !1,
        secondary: !1,
        akimbo: !1,
        nInsp: !0,
        kill: ["", 75],
        nSkill: !0,
        nAuto: !0,
        nCase: !0,
        nRing: !0,
        noAo: !0,
        projectile: {
            mat: "BASIC",
            color: 16777179,
            explode: 35,
            dmg: 50,
            eDmg: 35,
            spd: .75,
            grav: 8e-5,
            nImp: !0,
            lookDir: !0,
            scale: 1.4,
            length: 10,
            range: 1500
        },
        type: 0,
        swapTime: 400,
        swapWiggle: .4,
        aimSpd: 200,
        spdMlt: .9,
        physRang: 46,
        physPow: .095,
        ammo: 3,
        shots: 0,
        reload: 1500,
        hsMlt: 1.5,
        scale: .00076263407035176,
        leftHoldX: -.1,
        leftHoldY: -.36,
        rightHoldY: -.3,
        leftHoldZ: 1.2,
        rightHoldX: -.15,
        rightHoldZ: -.45,
        holdW: .9,
        jYMlt: .4,
        xOff: .95,
        yOff: -.56,
        zOff: -2.6,
        xOrg: 0,
        yOrg: -.945,
        zOrg: -3,
        zRot: .9,
        cLean: .2,
        cRot: .2,
        cDrop: .1,
        muzOff: 5,
        muzOffY: 0,
        muzMlt: 1.5,
        rate: 350,
        spread: 120,
        minSpread: 15,
        zoom: 1.5,
        leanMlt: 1.4,
        landBob: .8,
        recoil: .008,
        recoilR: .012,
        recover: .99,
        recoverY: .998,
        recoverF: .975,
        recoilZ: 4,
        recoilZM: -.5,
        aimRecMlt: .9,
        recoilAnim: {time: 400, recoilTweenY: .25},
        jumpYM: .3,
        expScale: .7,
        rumble: 1,
        rumbleDur: 750,
        icnPad: 10
    }, {
        name: "Akimbo Uzi",
        src: "weapon_10",
        icon: "icon_10",
        assetIcon: "",
        sound: "weapon_10",
        secondary: !1,
        nAuto: !1,
        noAo: !0,
        physRang: 0,
        physPow: 0,
        altSkin: {name: "Nova Uzi", mid: 0, midT: 0, blocked: !0, noSale: !0, weapon: 10, rarity: 0, seas: 3},
        nInsp: !0,
        noAim: !0,
        akimbo: !0,
        type: 0,
        swapTime: 300,
        aimSpd: 120,
        spdMlt: 1.04,
        ammo: 18,
        reload: 1300,
        dmg: 14,
        hsMlt: 1.5,
        pierce: 1,
        range: 700,
        dmgDrop: 13,
        scale: .9,
        rightHoldY: -.55,
        leftHoldZ: .2,
        leftHoldX: -.1,
        leftHoldY: -.55,
        rightHoldZ: .2,
        rightHoldX: -.1,
        holdW: 1.3,
        xOff: 1.5,
        yOff: -.95,
        zOff: -3.3,
        xOrg: 0,
        yOrg: -.62,
        zOrg: -2.5,
        zLnM: .4,
        cLean: .1,
        cRot: .1,
        cDrop: .2,
        caseYOff: -.15,
        caseZOff: -.4,
        muzOff: 3.6,
        rate: 70,
        spread: 40,
        noSpread: !1,
        movSpread: .1,
        minSpread: 10,
        zoom: 1.5,
        recoil: .0034,
        recoilR: .015,
        leanMlt: .6,
        recover: .978,
        recoverY: .996,
        recoverF: .975,
        recoilZ: 5,
        recoilYM: .7,
        recoilAnim: {recoilTweenY: .01},
        expScale: .7,
        rumble: .4,
        icnPad: -4
    }, {
        name: "Desert Eagle",
        src: "weapon_11",
        icon: "icon_11",
        assetIcon: "",
        sound: "weapon_11",
        noSpread: !1,
        akimbo: !1,
        secondary: !0,
        noAim: !1,
        projectile: {
            disable: !0,
            mat: "BASIC",
            color: 16777179,
            dmg: 50,
            spd: 2.3,
            lookDir: !0,
            grav: 1e-4,
            scale: 1.4,
            length: 10,
            range: 1500,
            snd: 0
        },
        physRang: 0,
        physPow: 0,
        minRec: 15,
        nAuto: !0,
        noAo: !0,
        transp: !0,
        kill: ["", 50],
        type: 1,
        swapTime: 200,
        aimSpd: 110,
        spdMlt: 1,
        ammo: 6,
        reload: 1e3,
        dmg: 50,
        hsMlt: 1.5,
        pierce: .85,
        dmgDrop: 10,
        scale: .94,
        leftHoldY: -.9,
        rightHoldY: -.7,
        leftHoldZ: -.5,
        rightHoldZ: -.5,
        holdW: 1.1,
        xOff: 1,
        yOff: -.5,
        zOff: -4.1,
        xOrg: 0,
        yOrg: -.195,
        zOrg: -3.8,
        cLean: .3,
        cRot: .3,
        inspectR: .35,
        inspectM: .9,
        muzOff: 2,
        muzMlt: 1.1,
        range: 700,
        rate: 400,
        spread: 150,
        jYMlt: .5,
        zoom: 1.4,
        leanMlt: 1.6,
        recoil: .01,
        recoilR: .01,
        recover: .982,
        recoverY: .995,
        recoverF: .98,
        recoilYM: .62,
        aimRecMlt: .23,
        recoilZ: 4.8,
        recoilZM: .2,
        recoilAnim: {time: 240, recoilTweenY: .42},
        rumble: .8,
        icnPad: -10,
        expScale: 1.55
    }, {
        name: "Alien Blaster",
        src: "weapon_12",
        icon: "icon_12",
        assetIcon: "",
        sound: "weapon_12",
        akimbo: !1,
        noSpread: !1,
        noAim: !1,
        noAo: !0,
        physRang: 0,
        physPow: 0,
        secondary: !0,
        nRing: !0,
        nAuto: !0,
        transp: !0,
        nCase: !0,
        minRec: 50,
        kill: ["", 50],
        type: 1,
        swapTime: 200,
        aimSpd: 120,
        spdMlt: 1,
        ammo: 4,
        reload: 1500,
        dmg: 50,
        hsMlt: 1.5,
        pierce: .85,
        dmgDrop: 10,
        scale: 1.1,
        leftHoldY: -1,
        rightHoldY: -.65,
        leftHoldZ: -.2,
        rightHoldZ: -.2,
        holdW: 1,
        xOff: 1.3,
        yOff: -.83,
        zOff: -4.1,
        xOrg: 0,
        yRot: -.01,
        yOrg: -.53,
        zOrg: -3.8,
        cLean: .2,
        cRot: .2,
        cDrop: 0,
        inspectR: .1,
        inspectM: .8,
        muzOff: 2.2,
        muzOffY: .1,
        muzID: 3,
        muzMlt: 1.1,
        jYMlt: .8,
        range: 700,
        rate: 170,
        spread: 150,
        zoom: 1.4,
        leanMlt: 1.6,
        recoil: .006,
        recoilR: .01,
        recover: .98,
        recoverY: .99,
        recoverF: .98,
        recoilYM: .2,
        recoilZ: 2.2,
        aimRecMlt: .3,
        recoilAnim: {time: 200, recoilTweenY: .32},
        rumble: .4,
        icnPad: -8,
        expScale: 1.85
    }, {
        name: "Combat Knife",
        icon: "icon_0",
        assetIcon: "",
        melee: !0,
        noSkins: !0,
        canThrow: !0,
        aimLean: .01,
        holdW: .9,
        swapWiggle: .3,
        sound: "melee",
        insX: .1,
        inspAnim: {arZ: .3, arX: .6, arY: -2.2, apZ: -1.3, apX: -.1, apY: 1, wpZ: -.19, wpY: -.4, wrY: -.2},
        anim: function (e, a, t, n) {
            if (1 == t) {
                e.handAnimInd = -1 * (e.handAnimInd || 1);
                var i = !1;
                e.meleeAnim.anim && (e.meleeAnim.anim.stop(), i = 2 <= e.meleeAnim.armM), e.resetMeleeAnim();
                var s = -1.2, r = .7, o = -.4;
                i ? (s += .1, e.meleeAnim.weaR = s, o += .8, e.meleeAnim.armR = o, r += .2, e.meleeAnim.weaM = r, e.meleeAnim.flipW = Math.PI) : s -= .4, e.meleeAnim.anim = new a.Tween(e.meleeAnim).to({
                    armR: o,
                    lArm: 1,
                    armT: i ? -.2 : -.8,
                    armY: -3,
                    armM: i ? -10 : 13,
                    armE: -2,
                    weaR: s,
                    weaM: r
                }, 220 * (i ? 1.3 : 1)).easing(a.Easing.Cubic.Out).onComplete((function () {
                    e.meleeAnim.anim = new a.Tween(e.meleeAnim).to({
                        armR: 0,
                        armT: 0,
                        armY: 0,
                        lArm: 0,
                        armM: 0,
                        armE: 0,
                        weaR: 0,
                        weaM: 0,
                        flipW: 0
                    }, 350).easing(a.Easing.Cubic.Out).start()
                })).start()
            } else if (2 == t) {
                e.handAnimInd = -1 * (e.handAnimInd || 1), e.meleeAnim.anim && e.meleeAnim.anim.stop(), e.resetMeleeAnim();
                var l = e.handAnimInd ? "lArm" : "";
                l = {};
                1 == e.handAnimInd ? l.lArm = -2.7 : l.rArm = -2.7, e.meleeAnim.anim = new a.Tween(e.meleeAnim).to(l, 10).easing(a.Easing.Linear.None).onComplete((function () {
                    e.meleeAnim.anim = new a.Tween(e.meleeAnim).to({
                        lArm: 0,
                        rArm: 0
                    }, 150).easing(a.Easing.Linear.None).delay(100).start()
                })).start()
            } else 3 == t && (e.meleeAnim.anim && e.meleeAnim.anim.stop(), e.resetMeleeAnim(), e.meleeAnim.armR = -1.3, e.meleeAnim.armM = 1.7, e.meleeAnim.armE = 1.1, e.meleeAnim.armY = 2.9, e.meleeAnim.armT = 1, e.meleeAnim.armS = 1.7, e.meleeAnim.weaR = -.6, e.meleeAnim.anim = new a.Tween(e.meleeAnim).to({
                armY: -9,
                armS: -.1,
                armE: -7.5,
                armM: -1.5,
                lArm: .5,
                weaR: -3
            }, 200 - 200 * (n || 1) + 300).easing(a.Easing.Cubic.Out).onComplete((function () {
                e.meleeAnim.anim = new a.Tween(e.meleeAnim).to({
                    armR: 0,
                    armT: 0,
                    armY: 0,
                    lArm: 0,
                    armM: 0,
                    armS: 0,
                    armE: 0,
                    weaR: 0
                }, 350).easing(a.Easing.Cubic.Out).start()
            })).start())
        },
        type: 2,
        swapTime: 250,
        aimSpd: 100,
        rate: 250,
        dmg: 50,
        dmgDrop: 0,
        range: 15,
        spdMlt: 1.1,
        spread: 100,
        leftHoldY: -.82,
        leftHoldX: 1.5,
        rightHoldX: -1.5,
        rightHoldY: -.82,
        leftHoldZ: -.5,
        rightHoldZ: -.5,
        xOff: 0,
        yOff: -.6,
        zOff: -3.6,
        xOrg: 1e-4,
        yOrg: -.6,
        zOrg: -3.6,
        zRM: .35,
        zoom: 1.2,
        leanMlt: .8,
        recoil: .006,
        recoilR: .01,
        recover: .98,
        recoverF: .98,
        rumble: .4,
        rumbleDur: 150,
        icnPad: -10
    }, {
        name: "Crossbow",
        src: "weapon_14",
        icon: "icon_14",
        assetIcon: "",
        sound: "weapon_14",
        noSpread: !1,
        akimbo: !1,
        secondary: !1,
        noAim: !1,
        nInsp: !0,
        nRing: !0,
        nAuto: !0,
        noAo: !0,
        physRang: 0,
        physPow: 0,
        nCase: !0,
        nMuz: !0,
        attach: 0,
        attachYOff: -.1,
        attachZOff: .75,
        kill: ["", 75],
        type: 0,
        projectile: {
            mat: "BASIC",
            color: 16777179,
            spd: .68,
            dontPred: !0,
            lookDir: !0,
            scale: .7,
            dmg: 200,
            length: 10,
            range: 1500
        },
        swapTime: 200,
        aimSpd: 120,
        spdMlt: 1,
        ammo: 1,
        reload: 900,
        dmg: 100,
        hsMlt: 1.5,
        pierce: 0,
        dmgDrop: 0,
        scale: .0007303348040201011,
        leftHoldY: -.33,
        rightHoldY: -.28,
        leftHoldZ: 2.2,
        leftHoldX: 0,
        rightHoldZ: .9,
        xOff: 1,
        yOff: -1,
        zOff: -1.4,
        xOrg: 0,
        yOrg: -.72,
        zOrg: -.7,
        cLean: .1,
        cRot: .1,
        zRot: .9,
        cDrop: .2,
        holdW: .5,
        muzOff: 2.2,
        muzOffY: .1,
        muzID: 3,
        muzMlt: 1.1,
        jYMlt: .95,
        range: 700,
        rate: 150,
        spread: 120,
        zoom: 1.4,
        leanMlt: .3,
        recoil: .007,
        recoilR: .01,
        recover: .985,
        recoverY: .996,
        recoverF: .98,
        recoilZ: 4,
        recoilAnim: {time: 300, recoilTweenY: .1},
        rumble: .5,
        icnPad: 9
    }, {
        name: "Famas",
        src: "weapon_15",
        icon: "icon_15",
        assetIcon: "",
        sound: "weapon_15",
        akimbo: !1,
        noSpread: !1,
        secondary: !1,
        noAim: !1,
        noAo: !0,
        nAuto: !0,
        projectile: {
            disable: !0,
            mat: "BASIC",
            color: 16777179,
            dmg: 28,
            spd: 2.4,
            lookDir: !0,
            grav: 1e-4,
            scale: 1.4,
            length: 10,
            range: 3e3,
            snd: 0
        },
        physRang: 0,
        physPow: 0,
        burst: {c: 3, r: 90},
        swapWiggle: .6,
        attach: 0,
        attachYOff: -.1,
        attachZOff: -.5,
        zRot: 1,
        type: 0,
        swapTime: 300,
        aimSpd: 130,
        spdMlt: .95,
        ammo: 30,
        rate: 280,
        reload: 1200,
        dmg: 28,
        hsMlt: 1.5,
        pierce: 1,
        range: 900,
        dmgDrop: 5,
        scale: .0008858419597989991,
        leftHoldY: -.45,
        rightHoldY: -.5,
        leftHoldZ: .72,
        rightHoldZ: -.75,
        holdW: 1,
        xOff: 1,
        yOff: -.86,
        yRot: .0018,
        zOff: -3,
        xOrg: 0,
        yOrg: -1.14,
        zOrg: -2,
        cLean: .2,
        cRot: .2,
        cDrop: .1,
        inspectR: .1,
        inspectM: 1.5,
        caseZOff: -1.7,
        caseYOff: -.2,
        muzOff: 4.9,
        muzOffY: -.05,
        muzMlt: 1.4,
        spread: 90,
        minSpread: 5,
        zoom: 1.5,
        leanMlt: 1.5,
        recoil: .003,
        recoilR: .02,
        recover: .978,
        recoverY: .995,
        recoverF: .975,
        jYMlt: .9,
        recoilYM: .32,
        recoilZ: 5.5,
        recoilZM: .05,
        aimRecMlt: .65,
        recoilAnim: {time: 300, recoilTweenY: .06, recoilTweenZ: .1},
        jumpYM: .6,
        rumble: .5,
        expScale: .9,
        icnPad: 9
    }, {
        name: "Sawed Off",
        src: "weapon_16",
        icon: "icon_16",
        assetIcon: "",
        sound: "weapon_6",
        noSpread: !1,
        akimbo: !1,
        noAim: !1,
        noAo: !0,
        nAuto: !0,
        nCase: !0,
        nRing: !0,
        secondary: !0,
        minRec: 20,
        swapWiggle: .4,
        shine: 35,
        type: 1,
        physRang: 36,
        physPow: .1,
        swapTime: 200,
        aimSpd: 100,
        spdMlt: 1,
        ammo: 1,
        reload: 1100,
        dmg: 12,
        hsMlt: 1.5,
        dmgDrop: 12,
        scale: 1,
        rightHoldX: .1,
        leftHoldY: -.5,
        rightHoldY: -.6,
        leftHoldZ: .4,
        rightHoldZ: -1.5,
        holdW: 1,
        xOff: .95,
        yOff: -.65,
        zOff: -3.8,
        xOrg: 0,
        yOrg: -.3,
        zOrg: -2.8,
        cLean: .2,
        cRot: .2,
        cDrop: .1,
        jYMlt: .2,
        inspectR: .1,
        inspectM: 1.9,
        muzOff: 6,
        muzMlt: 1.8,
        range: 210,
        rate: 400,
        innac: 110,
        spread: 120,
        shots: 5,
        cSpread: [.01, .05, -.17, -.22, -.3, .31, .32, .28, .3, -.2],
        minSpread: 20,
        zoom: 1.25,
        leanMlt: 1.6,
        recoil: .02,
        recoilR: .015,
        recover: .99,
        recoverF: .97,
        recoilZ: 2.1,
        recoilZM: .32,
        aimRecMlt: .3,
        recoilYM: 1,
        recoilAnim: {time: 340, recoilTweenY: .35},
        jumpYM: .5,
        rumble: .8,
        icnPad: 10,
        expScale: 1
    }, {
        name: "Auto Pistol",
        src: "weapon_17",
        icon: "icon_17",
        assetIcon: "",
        sound: "weapon_17",
        noSpread: !1,
        akimbo: !1,
        secondary: !0,
        noAim: !1,
        nAuto: !1,
        minRec: 30,
        noAo: !0,
        physRang: 0,
        physPow: 0,
        noHeadShot: !0,
        kill: ["", 50],
        type: 1,
        swapTime: 200,
        aimSpd: 100,
        spdMlt: 1,
        ammo: 15,
        reload: 1e3,
        dmg: 16,
        hsMlt: 1.5,
        pierce: .95,
        dmgDrop: 2,
        scale: .0003158947055276376,
        leftHoldY: -1.1,
        rightHoldY: -.62,
        leftHoldZ: -.3,
        rightHoldZ: -.32,
        rightHoldX: .13,
        holdW: 1.35,
        xOff: 1.2,
        yOff: -.6,
        zOff: -3.7,
        xOrg: 0,
        yRot: -.005,
        yOrg: -.23,
        zOrg: -3.9,
        cLean: .3,
        cRot: .3,
        inspectR: .35,
        inspectM: .9,
        muzOff: 2,
        muzMlt: 1.1,
        range: 700,
        rate: 100,
        spread: 150,
        jYMlt: .5,
        zoom: 1.3,
        leanMlt: 1.6,
        recoil: .004,
        recoilR: .01,
        recover: .98,
        recoverY: .99,
        recoverF: .98,
        recoilYM: .2,
        aimRecMlt: .4,
        recoilZ: 3.8,
        recoilZM: -.4,
        recoilAnim: {time: 200, recoilTweenY: .28},
        rumble: .8,
        icnPad: -10,
        expScale: 1.55
    }, {
        name: "Bomb",
        src: "weapon_18",
        icon: "icon_18",
        assetIcon: "",
        sound: "weapon_18",
        transp: !0,
        bomb: !0,
        equipment: !0,
        nInsp: !0,
        noAim: !0,
        noAo: !0,
        nCase: !0,
        noCross: !0,
        nMuz: !0,
        type: 3,
        aimSpd: 140,
        swapTime: 250,
        spdMlt: .65,
        scale: .63,
        holdW: 1.2,
        zoom: 1,
        rot: [0, Math.PI / 2, -.4],
        leftHoldY: -.3,
        rightHoldY: -.3,
        leftHoldZ: .33,
        rightHoldX: -.82,
        leftHoldX: .82,
        rightHoldZ: .33,
        xOff: 0,
        yOff: -.8,
        zOff: -3.5,
        xOrg: 1e-4,
        yOrg: 1e-4,
        zOrg: 1e-4,
        cLean: 0,
        cRot: 0,
        cDrop: .12,
        jYMlt: .95,
        spread: 120,
        recover: .98,
        recoverF: .98,
        leanMlt: .3,
        icnPad: 9
    }, {
        name: "Blaster",
        src: "weapon_19",
        icon: "icon_19",
        assetIcon: "",
        sound: "weapon_19",
        secondary: !1,
        noSpread: !1,
        akimbo: !1,
        noAim: !1,
        noAo: !0,
        nCase: !0,
        nAuto: !1,
        physRang: 0,
        physPow: 0,
        swapWiggle: .3,
        attach: 0,
        attachYOff: -.07,
        attachZOff: -.73,
        zRot: 1,
        type: 0,
        kill: ["", 75],
        swapTime: 300,
        aimSpd: 130,
        spdMlt: .95,
        ammo: 16,
        rate: 160,
        reload: 1600,
        dmg: 1,
        projectile: {
            mat: "BASIC",
            color: 9109499,
            spd: 1,
            grav: 0,
            nImp: !0,
            lookDir: !0,
            scale: .7,
            dmg: 35,
            length: 10,
            range: 500
        },
        hsMlt: 1.5,
        pierce: 1,
        range: 700,
        dmgDrop: 5,
        scale: .0007946847095477368,
        leftHoldY: -.8,
        rightHoldY: -.6,
        leftHoldZ: 1.2,
        rightHoldZ: -1.25,
        holdW: .75,
        xOff: .7,
        yOff: -.76,
        zOff: -3,
        rotOff: -.05,
        rotOffA: -.02,
        aimOffY: .042,
        yRot: .0018,
        xOrg: 0,
        yOrg: -.52,
        zOrg: -2.3,
        cLean: .2,
        cRot: .2,
        cDrop: .1,
        inspectR: .1,
        inspectM: 1.5,
        caseZOff: -1.7,
        caseYOff: -.2,
        muzID: 3,
        muzOff: 5.1,
        muzOffY: -.08,
        muzMlt: 1.4,
        spread: 100,
        minSpread: 5,
        zoom: 1.6,
        leanMlt: 1.5,
        recoil: .003,
        recoilR: .05,
        recover: .978,
        recoverY: .995,
        recoverF: .975,
        jYMlt: .9,
        recoilYM: .4,
        recoilZ: 5.7,
        recoilZM: -.05,
        aimRecMlt: .7,
        recoilAnim: {time: 300, recoilTweenY: .07, recoilTweenZ: .1},
        jumpYM: .6,
        rumble: .5,
        icnPad: 5
    }, {
        name: "Build Tool",
        src: "weapon_20",
        icon: "icon_20",
        assetIcon: "",
        sound: "weapon_20",
        aimSound: "paper_1",
        swapSnd: "paper_1",
        build: !0,
        equipment: !0,
        nInsp: !0,
        noAim: !1,
        noAo: !0,
        nCase: !0,
        noCross: !0,
        nMuz: !0,
        side: 2,
        type: 3,
        aimSpd: 100,
        aimLean: 1e-6,
        swapTime: 200,
        spdMlt: .9,
        scale: 1.2,
        holdW: 1.3,
        zoom: 1.1,
        rate: 300,
        range: 50,
        rot: [0, Math.PI / 2, -.4],
        leftHoldY: .6,
        rightHoldY: .6,
        leftHoldZ: .1,
        rightHoldX: -2.2,
        leftHoldX: 2.2,
        rightHoldZ: .1,
        xOff: 0,
        yOff: -2.6,
        zOff: -3.5,
        xOrg: 1e-5,
        yOrg: -3.8,
        zOrg: -3.2,
        cLean: 0,
        cRot: 0,
        cDrop: .12,
        jYMlt: .95,
        spread: 120,
        recover: .98,
        recoverF: .98,
        leanMlt: .3,
        icnPad: 9
    }
], module.exports.findWeaponBySrc = function (a) {
    for (var t = 0; t < module.exports.length; ++t) if (module.exports[t].src == "weapon_" + a) return module.exports[t];
    return null
}, module.exports.findIndexBySrc = function (a) {
    for (var t = 0; t < module.exports.length; ++t) if (module.exports[t].src == a) return t;
    return null
};
for (var t = [], n = 0; n < module.exports.length; ++n) module.exports[n].id = n, module.exports[n].melee || module.exports[n].equipment || t.push(n);
module.exports.onlyWeapons = t
},{}],5:[function(require,module,exports){
const data = require("./krunker/data");
const krunker = require("./krunker/krunker");
const weapons = require("./krunker/weapons");
const updates = require("./updates");
const MACKY_UPDATE_KEY = "macky___UPDATE";
const MACKY_UPDATE_EARLY = updates.early;
{
    let index = data.skins.length - 1;
    for (let i = 0; i < updates.length; i++) {
        let update = updates[i];
        for (let n = 0; n < update.skins; n++) {
            data.skins[index][MACKY_UPDATE_KEY] = update.name;
            console.log(data.skins[index]);
            index--;
        }
    }
    while (index >= 0) {
        data.skins[index][MACKY_UPDATE_KEY] = MACKY_UPDATE_EARLY;
        index--;
    }
}

let FILTER = {
    event: null,
    rarity: null,
    weapon: null,
    cosmetic: null,
    update: null,
    text: null,
    page: 1,
    count: 4 * 6,
    animated: true
}

function setEvent(event) {
    FILTER.event = event;
}

function setRarity(rarity) {
    if (isNaN(rarity)) rarity = null;
    FILTER.rarity = rarity;
}

function setWeapon(weapon) {
    if (isNaN(weapon)) weapon = null;
    FILTER.weapon = weapon;
}

function setUpdate(update) {
    FILTER.update = update;
}

function setCosmetic(cosmetic) {
    if (isNaN(cosmetic)) cosmetic = null;
    FILTER.cosmetic = cosmetic;
}

function setText(text) {
    if (text != null && text.length === 0) {
        text = null;
    }
    FILTER.text = text;
}

function testItem(item) {
    if (!!FILTER.event && FILTER.event !== item.limT) {
        return false
    }
    if (FILTER.rarity != null && FILTER.rarity !== item.rarity) {
        return false
    }
    if (FILTER.weapon != null && FILTER.weapon + 1 !== item.weapon) {
        // console.log(FILTER.weapon, item)
        return false
    }
    if (FILTER.cosmetic != null && (FILTER.cosmetic === 0 ? !("weapon" in item) : item.type !== FILTER.cosmetic)) {
        return false
    }
    if (FILTER.update != null && FILTER.update !== item[MACKY_UPDATE_KEY]) {
        return false
    }
    if (FILTER.text != null && !(
        item.name.toLowerCase().includes(FILTER.text.toLowerCase()) ||
        (item.keyW && item.keyW.toLowerCase().includes(FILTER.text.toLowerCase()))
    )) {
        return false
    }
    return true
}

function link(url, text) {
    if (!text) text = url;
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.innerText = text;
    return a;
}

function item(item, doButtons, alwaysShowExtraInfo) {
    let div = document.createElement("div");
    div.classList.add("item");
    rarity(div, item);
    div.append(preview(item));
    div.append(label(item, alwaysShowExtraInfo));
    div.append(season(item, alwaysShowExtraInfo));
    div.append(event(item, alwaysShowExtraInfo));
    if(doButtons !== false) div.append(buttons(item));
    return div;
}

function rarity(div, item) {
    if ("rarity" in item) {
        if (item.rarity === 6 && FILTER.animated) {
            div.classList.add("unob-border");
        } else {
            div.style.borderColor = data.rarities[item.rarity].color;
        }
    } else {
        div.style.borderColor = "#fff";
    }
}

function preview(item) {
    let img = document.createElement("img");
    img.classList.add("item-preview");
    img.src = krunker.preview(item);
    if (FILTER.animated && item.rgb) {
        img.classList.add("rgb-preview");
    }
    return img;
}

function label(item, alwaysShowExtraInfo) {
    let div = document.createElement("p");
    div.classList.add("item-label");
    if(alwaysShowExtraInfo === true) {
        div.classList.add("item-label-always-show");
    }
    div.innerText = item.name;
    return div;
}

function season(item, alwaysShowExtraInfo) {
    let div = document.createElement("div");
    div.classList.add("item-season");
    if(alwaysShowExtraInfo === true) {
        div.classList.add("item-season-always-show");
    }
    div.innerText = `Season ${item.seas || 1}`;
    return div;
}

function event(item, alwaysShowExtraInfo) {
    let text, color;
    if (item.limT) {
        text = item.limT;
        color = data.events[item.limT];
    } else if (item.noSpin || item.limited || item.seas !== 4) {
        text = "Vaulted";
        color = "#6441a5";
    } else {
        return "";
    }
    let div = document.createElement("div");
    div.classList.add("item-event");
    if(alwaysShowExtraInfo === true) {
        div.classList.add("item-event-always-show");
    }
    div.style.backgroundColor = color;
    div.innerText = text;
    return div;
}

function buttons(item) {
    let div = document.createElement("div");
    div.classList.add("item-buttons");
    div.append(link(krunker.price(item), "PRICE"));
    div.append(link(krunker.listing(item), "LISTING"));
    let info = document.createElement("button");
    info.onclick = () => itemInfo(item);
    info.innerText = "INFO";
    div.append(info);
    return div;
}

function itemInfo(i) {
    let params = new URLSearchParams(window.location.search);
    params.set("item", i.index);
    let path = window.location.pathname + "?" + params.toString();
    window.history.pushState({path: path}, '', path);

    Array.prototype.forEach.call(document.getElementsByClassName("item-info"), elem => {
        elem.style.visibility = "visible";
    });
    let name = document.getElementById("item-name");
    name.innerText = i.name;
    let json = document.getElementById("item-json");
    json.innerText = JSON.stringify(i, undefined, "   ");
    document.getElementById("item-price").href = krunker.price(i);
    document.getElementById("item-listing").href = krunker.listing(i);
    document.getElementById("item-viewer").href = krunker.viewer(i);
    document.getElementById("item-preview").href = krunker.preview(i);
    document.getElementById("item-info-preview").innerHTML = "";
    document.getElementById("item-info-preview").append(item(i, false, true));
}

let dropdownEvent = document.getElementById("dropdown-event");
for (let event in data.events) {
    let button = document.createElement("button");
    button.innerText = event;
    button.addEventListener("click", () => {
        FILTER.page = 1;
        setEvent(event);
        refilter();
    });
    if (data.events[event]) {
        button.style.backgroundColor = data.events[event]
        let col = parseInt(data.events[event].slice(1), 16);
        let r = col >> 16;
        let g = (col >> 8) & 0x00FF;
        let b = col & 0x0000FF;
        r = Math.round(r / 2);
        g = Math.round(g / 2);
        b = Math.round(b / 2);
        let darker = "#" + (b | (g << 8) | (r << 16)).toString(16);
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = darker;
        });
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = data.events[event];
        });
    }
    dropdownEvent.append(button)
}
document.getElementById("dropdown-event-all").addEventListener("click", () => {
    FILTER.page = 1;
    setEvent(null);
    refilter();
})

let dropdownRarity = document.getElementById("dropdown-rarity");
for (let i = 0; i < data.rarities.length; i++) {
    let button = document.createElement("button");
    button.innerText = data.rarities[i].name;
    button.style.backgroundColor = data.rarities[i].color;
    let col = parseInt(data.rarities[i].color.slice(1), 16);
    let r = col >> 16;
    let g = (col >> 8) & 0x00FF;
    let b = col & 0x0000FF;
    r = Math.round(r / 2);
    g = Math.round(g / 2);
    b = Math.round(b / 2);
    let darker = "#" + (b | (g << 8) | (r << 16)).toString(16);
    button.addEventListener("click", () => {
        FILTER.page = 1;
        setRarity(i);
        refilter();
    })
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = darker;
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = data.rarities[i].color;
    });
    dropdownRarity.append(button);
}
document.getElementById("dropdown-rarity-all").addEventListener("click", () => {
    FILTER.page = 1;
    setRarity(null);
    refilter();
})

let dropdownWeapon = document.getElementById("dropdown-weapon");
for (let i = 0; i < weapons.length; i++) {
    let button = document.createElement("button");
    button.innerText = weapons[i].name;
    button.addEventListener("click", () => {
        FILTER.page = 1;
        setWeapon(i);
        refilter();
    })
    dropdownWeapon.append(button);
}
document.getElementById("dropdown-weapon-all").addEventListener("click", () => {
    FILTER.page = 1;
    setWeapon(null);
    refilter();
})

let dropdownCosmetic = document.getElementById("dropdown-cosmetic");
for (let i = 0; i < data.types.length; i++) {
    let cosmetic = data.types[i].split("/")[0];
    cosmetic = cosmetic.charAt(0).toUpperCase() + cosmetic.slice(1);
    let button = document.createElement("button");
    button.innerText = cosmetic;
    button.addEventListener("click", () => {
        FILTER.page = 1;
        setCosmetic(i);
        refilter();
    });
    dropdownCosmetic.append(button);
}
document.getElementById("dropdown-cosmetic-all").addEventListener("click", () => {
    FILTER.page = 1;
    setCosmetic(null);
    refilter();
})

let dropdownUpdate = document.getElementById("dropdown-update");
for (let i = 0; i < updates.length; i++) {
    let button = document.createElement("button");
    button.innerText = updates[i].name;
    button.addEventListener("click", () => {
        FILTER.page = 1;
        setUpdate(updates[i].name);
        refilter();
    });
    dropdownUpdate.append(button);
}
document.getElementById("dropdown-update-all").addEventListener("click", () => {
    FILTER.page = 1;
    setUpdate(null);
    refilter();
});
document.getElementById("dropdown-update-early").addEventListener("click", () => {
    FILTER.page = 1;
    setUpdate(MACKY_UPDATE_EARLY);
    refilter();
});

document.getElementById("paginate-left").addEventListener("click", () => {
    if (FILTER.page > 1) {
        FILTER.page--;
        refilter();
    }
});

document.getElementById("paginate-right").addEventListener("click", () => {
    if (FILTER.page < CURRENT_DISPLAYED_SKINS / FILTER.count) {
        FILTER.page++;
        refilter()
    }
});

document.getElementById("search").addEventListener("change", e => {
    FILTER.page = 1;
    setText(e.target.value);
    refilter();
});

document.getElementById("animated").addEventListener("change", e => {
    FILTER.animated = e.target.checked;
    refilter();
});

let itemList = document.getElementById("item-list");

let CURRENT_DISPLAYED_SKINS;

function refilter() {
    let params1 = new URLSearchParams(window.location.search);
    if (params1.get("item") != null) {
        itemInfo(data.skins[parseInt(params1.get("item"))]);
    }
    document.getElementById("dropdown-event-label").innerText = FILTER.event == null ? "All events" : FILTER.event;
    document.getElementById("dropdown-rarity-label").innerText = FILTER.rarity == null ? "All rarities" : data.rarities[FILTER.rarity].name;
    document.getElementById("dropdown-weapon-label").innerText = FILTER.weapon == null ? "All weapons" : weapons[FILTER.weapon].name;
    document.getElementById("dropdown-update-label").innerText = FILTER.update == null ? "All updates" : FILTER.update;
    if (FILTER.cosmetic == null) {
        document.getElementById("dropdown-cosmetic-label").innerText = "All cosmetics";
    } else {
        let cosmetic = data.types[FILTER.cosmetic].split("/")[0];
        document.getElementById("dropdown-cosmetic-label").innerText = cosmetic.charAt(0).toUpperCase() + cosmetic.slice(1);
    }
    document.getElementById("search").value = FILTER.text || "";
    let params = new URLSearchParams(window.location.search);
    if (FILTER.event !== null) params.set("event", FILTER.event);
    else params.delete("event");
    if (FILTER.rarity !== null) params.set("rarity", FILTER.rarity);
    else params.delete("rarity");
    if (FILTER.weapon !== null) params.set("weapon", FILTER.weapon);
    else params.delete("weapon");
    if (FILTER.cosmetic !== null) params.set("cosmetic", FILTER.cosmetic);
    else params.delete("cosmetic");
    if (FILTER.update !== null) params.set("update", FILTER.update);
    else params.delete("update");
    if (FILTER.text !== null) params.set("text", FILTER.text);
    else params.delete("text");
    let path = window.location.pathname + "?" + params.toString();
    window.history.pushState({path: path}, '', path);
    let items = [];
    for (let skin of data.skins) {
        items.push(skin);
    }
    items.sort(compare);
    items = items.filter(testItem);
    CURRENT_DISPLAYED_SKINS = items.length;
    items = items.slice((FILTER.page - 1) * FILTER.count);
    itemList.innerHTML = "";
    let count = 0;
    for (let i of items) {
        if (count >= FILTER.count) break
        itemList.append(item(i));
        count++;
    }
    document.getElementById("paginate-result-count").innerText = `${CURRENT_DISPLAYED_SKINS} results`;
    document.getElementById("paginate-page").innerText = `Page ${FILTER.page}/${Math.ceil(CURRENT_DISPLAYED_SKINS / FILTER.count)}`;
}

function compare(itemA, itemB) {
    function c(a, b, otherwise) {
        if (a === b) {
            return otherwise;
        } else if (typeof b === "number") {
            return b - a
        } else if (typeof a === "string") {
            return a.localeCompare(b)
        } else {
            console.log(a, b)
        }
    }

    return c(itemA.rarity || 0, itemB.rarity || 0, c(itemA.name, itemB.name))
}

let params = new URLSearchParams(window.location.search);
setEvent(params.get("event"));
setRarity(parseInt(params.get("rarity")));
setWeapon(parseInt(params.get("weapon")));
setCosmetic(parseInt(params.get("cosmetic")));
setUpdate(params.get("update"));
setText(params.get("text"));
if (params.get("item") != null) {
    itemInfo(data.skins[parseInt(params.get("item"))]);
}

refilter();
},{"./krunker/data":2,"./krunker/krunker":3,"./krunker/weapons":4,"./updates":6}],6:[function(require,module,exports){
// I manually created and maintained this file

// so far it looks like skins will be added to the end of the list and nowhere else, which means I don't have to list
//  which individual skins were added - just how many were added, then data postprocessor in main.js takes care of it

module.exports = [
    {
        "name": "3.6.2",
        "skins": 10
    }
];

module.exports.early = "<=3.6.1";
},{}]},{},[5]);
