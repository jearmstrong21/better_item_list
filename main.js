const data = require("./data");

function item(item) {
    let div = document.createElement("div");
    div.classList.add("item");
    rarity(div, item);
    div.append(preview(item));
    div.append(label(item));
    div.append(season(item));
    div.append(event(item));
    return div;
}

function rarity(div, item) {
    if("rarity" in item) {
        if(item.rarity === 6) {
            div.classList.add("rarity-unobtainable");
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
    img.src = data.preview(item);
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
        console.log(item);
    } else {
        return "";
    }
    let div = document.createElement("div");
    div.classList.add("item-event");
    div.style.backgroundColor = color;
    div.innerText = text;
    return div;
}

let itemContainer = document.getElementById("item-container");
data.skins.sort((a, b) => b.rarity - a.rarity);
for (let i = 0; i < 200; i++) {
    // itemContainer.append(makeItem(data.skins[Math.floor(Math.random() * data.skins.length)]));
    itemContainer.append(item(data.skins[i]));
}