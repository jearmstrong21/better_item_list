const data = require("./data");

function link(url, text) {
    if(!text) text = url;
    let a = document.createElement("a");
    a.classList.add("button");
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

function buttons(item) {
    let div = document.createElement("div");
    div.classList.add("item-buttons");
    div.append(link(data.price(item), "PRICE"));
    div.append(link(data.listing(item), "LISTING"));
    let info = document.createElement("button");
    info.classList.add("button");
    info.onclick = () => itemInfo(item);
    info.innerText = "INFO";
    div.append(info);
    return div;
}

function itemInfo(item) {
    let info = document.getElementById("item-info");
    info.style.visibility = "visible";
    let name = document.getElementById("item-name");
    name.innerText = item.name;
    let json = document.getElementById("item-json");
    json.innerText = JSON.stringify(item, undefined, "   ");
    let price = document.getElementById("item-price")
    price.innerHTML = "";
    price.append(link(data.price(item), "PRICE"));
    let listing = document.getElementById("item-listing");
    listing.innerHTML = "";
    listing.append(link(data.listing(item), "LISTING"));
    let preview = document.getElementById("item-preview");
    preview.innerHTML = "";
    preview.append(link(data.preview(item), "PREVIEW"));
}

let itemList = document.getElementById("item-list");
data.skins.sort((a, b) => b.rarity - a.rarity);
for (let i = 0; i < 100; i++) {
    itemList.append(item(data.skins[i]));
}