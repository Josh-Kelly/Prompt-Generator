function determineMinionGender() {
    /* DETERMINES THE GENDER OF THE VILLAIN */

    const minionGenderRand = Math.floor(Math.random()*2);
    const minionNomPronounMale = `he`;
    const minionAccPronounMale = `him`;
    const minionGenPronounMale = `his`;

    const minionNomPronounFemale = `she`;
    const minionAccPronounFemale = `her`;
    const minionGenPronounFemale = `her`;

    if (minionGenderRand === 0) {
        minionNomPronoun = minionNomPronounMale;
        minionAccPronoun = minionAccPronounMale;
        minionGenPronoun = minionGenPronounMale;
    } else if (minionGenderRand === 1) {
        minionNomPronoun = minionNomPronounFemale;
        minionAccPronoun = minionAccPronounFemale;
        minionGenPronoun = minionGenPronounFemale;
    } else {
        minionNomPronoun = `GENDER NOT WORKING!`;
        minionAccPronoun = `GENDER NOT WORKING!`;
        minionGenPronoun = `GENDER NOT WORKING`;
    }

    return [minionNomPronoun, minionAccPronoun, minionGenPronoun];
}

function displayMinion() {
    /* Deletes previous content of the main <div> */
    const clearPreviousMinion = document.getElementById(`minionDisplayArea`);
    if (clearPreviousMinion) {
            document.body.removeChild(clearPreviousMinion);
    }

    /* Creates the button to summon a new minion! */
    let buttonMinion = document.createElement(`button`);
    buttonMinion.id = `newMinion!`;
    buttonMinion.setAttribute(`onclick`, `generateMinion()`);
    buttonMinion.setAttribute(`class`, `secondaryButton`);
    buttonMinion.innerText = `Get new minion!`;
    document.body.appendChild(buttonMinion);


    /* Creates a div with an ID of `minionDisplayArea` and appends it to the body element */
    let minionDisplayArea = document.createElement(`div`);
    minionDisplayArea.id = `minionDisplayArea`;
    document.body.appendChild(minionDisplayArea);

    /* Crease a p element with an ID of `minionDisplay` and assigns its innerHTML to the text of the plotType variable */
    let minionDisplay = document.createElement(`p`);
    minionDisplay.id = `minionDisplay`;

    document.getElementById(`minionDisplayArea`).appendChild(minionDisplay);
}

function generateMinion() {
    determineMinionGender();

    const previousMinion = document.getElementById(`newMinionDisplay`);
    if (previousMinion) {
            document.getElementById(`minionDisplayArea`).removeChild(previousMinion);
    }

    /* GENERATE UNUSUAL MINION/LIEUTENANT Table 1-35 pg. 52*/
    const minionNature0105 = `an animal trainer or monster wrangler`;
    const minionNature0610 = `an assassin`;
    const minionNature1115 = `a barbaric military leader (intelligent) with troops`;
    const minionNature1620 = `a barbaric military leader (stupid) with troops`;
    const minionNature2125 = `an expert on the local area, a brilliant mastermind`;
    const minionNature2630 = `an intelligent peasant (possibly one of several minions)`;
    const minionNature3135 = `a knight`;
    const minionNature3640 = `a magic-user`;
    const minionNature4145 = `an intelligent nobleman, merchant, guild official, or city official`;
    const minionNature4650 = `a stupid nobleman, merchant, guild official, or city official`;
    const minionNature5155 = `a powerful, barbaric warrior`;
    const minionNature5660 = `a powerful, civilized warrior`;
    const minionNature6165 = `a priest`;
    const minionNature6670 = `a soldier`;
    const minionNature7175 = `a sorceress`;
    const minionNature7680 = `a stupid peasant (possibly one of many such minions)`;
    const minionNature8185 = `a suave military leader with troops (cruel and silky)`;
    const minionNature8690 = `a thief`;
    const minionNature9195 = `a thug`;
    const minionNature96100 = `a witch doctor, witch, or druid`;

    const minionNatureArray = [minionNature0105, minionNature0610, minionNature1115, minionNature1620, minionNature2125, minionNature2630, minionNature3135, minionNature3640, minionNature4145, minionNature4650, minionNature5155, minionNature5660, minionNature6165, minionNature6670, minionNature7175, minionNature7680, minionNature8185, minionNature8690, minionNature9195, minionNature96100];
    const minionNatureRand = Math.floor(Math.random()*minionNatureArray.length);
    const minionNature = minionNatureArray[minionNatureRand];


    const unusualCharacteristic0105 = ` is an excellent spy or information gatherer`;
    const unusualCharacteristic0610 = ` is badly scarred`;
    const unusualCharacteristic1115 = ` is blind or deaf`;
    const unusualCharacteristic1620 = ` is crippled or maimed`;
    const unusualCharacteristic2125 = ` is demon-possessed`;
    const unusualCharacteristic2630 = ` is distinguished by a particular piece of clothing the minion always wears`;
    const unusualCharacteristic3135 = ` is distinguished by a particular sigil or badge that the minion always wears`;
    const unusualCharacteristic3640 = ` is distinguished by a strange tattoo or birthmark`;
    const unusualCharacteristic4145 = ` has a relatively powerful magic item`;
    const unusualCharacteristic4650 = ` is highly religious`;
    const unusualCharacteristic5155 = ` is highly superstitious`;
    const unusualCharacteristic5660 = ` is insane (megalomaniacal)`;
    const unusualCharacteristic6165 = ` is insane (schizophrenic)`;
    const unusualCharacteristic6670 = ` is more powerful than the villain, but follows the villain's orders because`;
    const unusualCharacteristic7175 = `se face people routinely forget`;
    const unusualCharacteristic7680 = ` is very charismatic compared to the villain`;
    const unusualCharacteristic8185 = ` is very concerned with personal appearance`;
    const unusualCharacteristic8690 = ` is very honorable (by some particular code, possibly a very warped sense of honor)`;
    const unusualCharacteristic9195 = ` is very rude and arrogant compared to the villain`;
    const unusualCharacteristic96100 = ` is well known in the local area`;

    const unusualCharacteristicArray = [unusualCharacteristic0105, unusualCharacteristic0610, unusualCharacteristic1115, unusualCharacteristic1620, unusualCharacteristic2125, unusualCharacteristic2630, unusualCharacteristic3135, unusualCharacteristic3640, unusualCharacteristic4145, unusualCharacteristic4650, unusualCharacteristic5155, unusualCharacteristic5660, unusualCharacteristic6165, unusualCharacteristic6670, unusualCharacteristic7175, unusualCharacteristic7680, unusualCharacteristic8185, unusualCharacteristic8690, unusualCharacteristic9195, unusualCharacteristic96100];
    const unusualCharacteristicRand = Math.floor(Math.random()*unusualCharacteristicArray.length);
    const unusualCharacteristic = unusualCharacteristicArray[unusualCharacteristicRand];


    const reasonWhyServes0105 = `${minionNomPronoun} is addicted to substance provided by the villain.`;
    const reasonWhyServes0610 = `${minionNomPronoun} is an advisor (privy to villain's plots and has input into his plans).`;
    const reasonWhyServes1115 = `${minionNomPronoun} believes the villain is ${minionGenPronoun} only true friend.`;
    const reasonWhyServes1620 = `${minionNomPronoun} is charmed or enchanted by the villain.`;
    const reasonWhyServes2125 = `${minionNomPronoun} is convinced that villain's brilliant plans will succeed and that ${minionNomPronoun} will be rewarded for helping.`;
    const reasonWhyServes2630 = `${minionNomPronoun} is deceived as to the real nature of the villain's activities.`;
    const reasonWhyServes3135 = `${minionNomPronoun} is a grateful retainer (the villain saved ${minionAccPronoun} from something).`;
    const reasonWhyServes3640 = `${minionNomPronoun} is in love with the villain.`;
    const reasonWhyServes4145 = `${minionNomPronoun} is a loyal henchman (enjoys working with the villain).`;
    const reasonWhyServes4650 = `${minionNomPronoun} is a loyal retainer (pledged to the villain by honor).`;
    const reasonWhyServes5155 = `${minionNomPronoun} is a loyal slave (purchased by the villain).`;
    const reasonWhyServes5660 = `${minionNomPronoun} receives food and shelter.`;
    const reasonWhyServes6165 = `${minionNomPronoun} receives payment.`;
    const reasonWhyServes6670 = `${minionNomPronoun} receives a share of treasure.`;
    const reasonWhyServes7175 = `${minionNomPronoun} is an unwilling minion (villain can ruin ${minionGenPronoun} reputation or bankrupt him at will).`;
    const reasonWhyServes7680 = `${minionNomPronoun} is an unwilling minion (villain holds ${minionGenPronoun} loved ones hostage).`;
    const reasonWhyServes8185 = `${minionNomPronoun} is using the villain for ${minionGenPronoun} own purposes.`;
    const reasonWhyServes8690 = `the villain has control of the minion's soul in some fashion, or holds it captive.`;
    const reasonWhyServes9195 = `${minionNomPronoun} is the villain's loyal kinsman.`;
    const reasonWhyServes96100 = `${minionNomPronoun} worships the villain as a god, messenger of a god, or a holy person.`;

    const reasonWhyServesArray = [reasonWhyServes0105, reasonWhyServes0610, reasonWhyServes1115, reasonWhyServes1620, reasonWhyServes2125, reasonWhyServes2630, reasonWhyServes3135, reasonWhyServes3640, reasonWhyServes4145, reasonWhyServes4650, reasonWhyServes5155, reasonWhyServes5660, reasonWhyServes6165, reasonWhyServes6670, reasonWhyServes7175, reasonWhyServes7680, reasonWhyServes8185, reasonWhyServes8690, reasonWhyServes9195, reasonWhyServes96100];
    const reasonWhyServesRand = Math.floor(Math.random()*reasonWhyServesArray.length);
    const reasonWhyServes = reasonWhyServesArray[reasonWhyServesRand];
    
    let newMinionDisplay = document.createElement(`p`);
    newMinionDisplay.id = `newMinionDisplay`;
    newMinionDisplay.innerHTML = `The minion is ${minionNature} who${unusualCharacteristic} and serves because ${reasonWhyServes}`;
    document.getElementById(`minionDisplayArea`).appendChild(newMinionDisplay);
}