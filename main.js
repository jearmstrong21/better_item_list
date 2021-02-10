const data = require("./krunker/data");
const krunker = require("./krunker/krunker");
const weapons = require("./krunker/weapons");

let FILTER = {
    event: null,
    rarity: null,
    weapon: null,
    cosmetic: null,
    text: null,
    page: 1,
    count: 4 * 6,
    animated: true
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

function item(item) {
    let div = document.createElement("div");
    div.classList.add("item");
    rarity(div, item);
    div.append(preview(item));
    div.append(label(item));
    div.append(season(item));
    div.append(event(item));
    div.append(buttons(item));
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

function label(item) {
    let div = document.createElement("p");
    div.classList.add("item-label");
    div.innerText = item.name;
    return div;
}

function season(item) {
    let div = document.createElement("div");
    div.classList.add("item-season");
    div.innerText = `Season ${item.seas || 1}`;
    return div;
}

function event(item) {
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

function itemInfo(item) {
    Array.prototype.forEach.call(document.getElementsByClassName("item-info"), elem => {
        elem.style.visibility = "visible";
    });
    let name = document.getElementById("item-name");
    name.innerText = item.name;
    let json = document.getElementById("item-json");
    json.innerText = JSON.stringify(item, undefined, "   ");
    document.getElementById("item-price").href = krunker.price(item);
    document.getElementById("item-listing").href = krunker.listing(item);
    document.getElementById("item-viewer").href = krunker.viewer(item);
    document.getElementById("item-preview").href = krunker.preview(item);
}

let dropdownEvent = document.getElementById("dropdown-event");
for (let event in data.events) {
    let button = document.createElement("button");
    button.innerText = event;
    button.addEventListener("click", () => {
        FILTER.page = 1;
        FILTER.event = event;
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
    FILTER.event = null;
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
        FILTER.rarity = i;
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
    FILTER.rarity = null;
    refilter();
})

let dropdownWeapon = document.getElementById("dropdown-weapon");
for (let i = 0; i < weapons.length; i++) {
    let button = document.createElement("button");
    button.innerText = weapons[i].name;
    button.addEventListener("click", () => {
        FILTER.page = 1;
        FILTER.weapon = i;
        refilter();
    })
    dropdownWeapon.append(button);
}
document.getElementById("dropdown-weapon-all").addEventListener("click", () => {
    FILTER.page = 1;
    FILTER.weapon = null;
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
        FILTER.cosmetic = i;
        refilter()
    });
    dropdownCosmetic.append(button);
}
document.getElementById("dropdown-cosmetic-all").addEventListener("click", () => {
    FILTER.page = 1;
    FILTER.cosmetic = null;
    refilter();
})

let itemList = document.getElementById("item-list");

let CURRENT_DISPLAYED_SKINS;

function refilter() {
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

refilter()

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
    let text = e.target.value;
    if(text.length === 0) {
        text = null;
    }
    FILTER.page = 1;
    FILTER.text = text;
    refilter();
});

document.getElementById("animated").addEventListener("change", e => {
    FILTER.animated = e.target.checked;
    refilter();
})