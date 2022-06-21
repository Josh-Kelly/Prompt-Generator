function rollSocial() {
    const elementalSocialRand = Math.floor(Math.random()*elementalSocialArray.length);
    const elementalSocial = elementalSocialArray[elementalSocialRand];

    document.getElementById('socialText').innerText = '';
    document.getElementById('socialText').innerText = `Social Stratum: ${elementalSocial}`;
}

function rollShape() {
    const elementalBasicShapeRand = Math.floor(Math.random()*elementalBasicShapeArray.length);
    const elementalBasicShape = elementalBasicShapeArray[elementalBasicShapeRand];

    document.getElementById('shapeText').innerText = '';
    document.getElementById('shapeText').innerText = `Basic Shape: ${elementalBasicShape}`;
}

function rollOrigin() {
    const elementalOriginRand = Math.floor(Math.random()*elementalOriginArray.length);
    const elementalOrigin = elementalOriginArray[elementalOriginRand];

    document.getElementById('originText').innerText = '';
    document.getElementById('originText').innerText = `Elemental Origin: ${elementalOrigin}`;
}

function rollBindingMethod() {
    const elementalBindMethodRand = Math.floor(Math.random()*elementalBindMethodArray.length);
    const elementalBindMethod = elementalBindMethodArray[elementalBindMethodRand];

    document.getElementById('bindingText').innerText = '';
    document.getElementById('bindingText').innerText = `Method of Binding: ${elementalBindMethod}`;
}

function rollHomeConditions() {
    const elementalHomeConditionsRand = Math.floor(Math.random()*elementalHomeConditionsArray.length);
    const elementalHomeConditions = elementalHomeConditionsArray[elementalHomeConditionsRand];

    document.getElementById('conditionsText').innerText = '';
    document.getElementById('conditionsText').innerText = `Conditions in the Elemental Region: ${elementalHomeConditions}`;
}


/*                              TABLE AND VARIABLE                              */
const elementalSocial0140 = 'mindless (normal elementals)';
const elementalSocial4170 = 'servitors (normal elementals and weak djinn)';
const elementalSocial7195 = 'nobility (powerful djinn)';
const elementalSocial96100 = 'quasi-deity or elemental lord';

const elementalSocialArray = [elementalSocial0140, elementalSocial4170, elementalSocial7195, elementalSocial96100];



const elementalBasicShape0105 = 'animal appearance (amphibian)';
const elementalBasicShape0610 = 'animal appearance (bird)';
const elementalBasicShape1115 = 'animal appearance (mammal)';
const elementalBasicShape1620 = 'animal appearance (reptilian)';
const elementalBasicShape2125 = 'aquatic creature appearance';
const elementalBasicShape2630 = 'cone or pyramid of elemental substance';
const elementalBasicShape3135 = 'formless cloud or mass of elemental substance';
const elementalBasicShape3640 = 'horror-type form';
const elementalBasicShape4145 = 'incorporated into item (e.g. lamp)';
const elementalBasicShape4650 = 'insectoid appearance';
const elementalBasicShape5155 = 'pillar of elemental substance';
const elementalBasicShape5660 = 'plant appearance';
const elementalBasicShape6165 = 'serpentine or spiral-shape of elemental substance';
const elementalBasicShape6670 = 'used/incorporated into construct';
const elementalBasicShape7175 = 'used/incorporated into structure for inane qualities';
const elementalBasicShape7680 = 'used/incorporated into structure for movement/sentience';
const elementalBasicShape81100 = 'human appearance with elemental features and attributes (e.g. pillar of fire instead of legs)';
    
const elementalBasicShapeArray = [elementalBasicShape0105, elementalBasicShape0610, elementalBasicShape1115, elementalBasicShape1620, elementalBasicShape2125, elementalBasicShape2630, elementalBasicShape3135, elementalBasicShape3640, elementalBasicShape4145, elementalBasicShape4650, elementalBasicShape5155, elementalBasicShape5660, elementalBasicShape6165, elementalBasicShape6670, elementalBasicShape7175, elementalBasicShape7680, elementalBasicShape81100];



const elementalOrigin0105 = 'air';
const elementalOrigin0610 = 'earth';
const elementalOrigin1115 = 'fire';
const elementalOrigin1620 = 'water';
const elementalOrigin2125 = 'death';
const elementalOrigin2630 = 'sound';
const elementalOrigin3135 = 'electricity';
const elementalOrigin3640 = 'light/dark';
const elementalOrigin4145 = 'shadow';
const elementalOrigin4650 = 'poison';
const elementalOrigin5155 = 'acid';
const elementalOrigin5660 = 'smoke';
const elementalOrigin6165 = 'ice';
const elementalOrigin6670 = 'steam';
const elementalOrigin7175 = 'lava';
const elementalOrigin7680 = 'life';
const elementalOrigin8185 = 'sand';
const elementalOrigin8690 = 'probability or entropy';
const elementalOrigin9195 = 'plant life';
const elementalOrigin96100 = 'thought or cognition';
    
const elementalOriginArray = [elementalOrigin0105, elementalOrigin0610, elementalOrigin1115, elementalOrigin1620, elementalOrigin2125, elementalOrigin2630, elementalOrigin3135, elementalOrigin3640, elementalOrigin4145, elementalOrigin4650, elementalOrigin5155, elementalOrigin5660, elementalOrigin6165, elementalOrigin6670, elementalOrigin7175, elementalOrigin7680, elementalOrigin8185, elementalOrigin8690, elementalOrigin9195, elementalOrigin96100];



const elementalBindMethod0110 = 'Bargaining; a sacrifice is offered (souls, gems, etc), and the elemental might or might not choose to accept the bargain';
const elementalBindMethod1120 = 'Genealogy/ancestry; ability to control this type of elemental was granted to a bloodline in the distant past as a bargain or reward';
const elementalBindMethod2130 = 'Knowledge of elemental\'s language, research being required, possibly hard to use or pronounce';
const elementalBindMethod3140 = 'Knowledge of the elemental\'s true name';
const elementalBindMethod4150 = 'Possession of Item; possibly one owned by the elemental, possibly a specific wand, possibly something like a token granted by the elemental\'s overlord';
const elementalBindMethod5160 = 'Riddle answer; elemental poses a riddle of some kind (see Book 3)';
const elementalBindMethod6170 = 'Sacrifice; some particular sacrifice is required to control the elemental';
const elementalBindMethod7180 = 'Specific ritual; a specific ritual which probably needs research is used to bind the elemental.';
const elementalBindMethod8190 = 'Specific spell; probably requires specific research for non-traditional elementals';
const elementalBindMethod91100 = 'Spoken words; possibly a command word, possibly a pleasing haiku, etc.';

const elementalBindMethodArray = [elementalBindMethod0110, elementalBindMethod1120, elementalBindMethod2130, elementalBindMethod3140, elementalBindMethod4150, elementalBindMethod5160, elementalBindMethod6170, elementalBindMethod7180, elementalBindMethod8190, elementalBindMethod91100];



const elementalHomeConditions0110 = 'Castle with hounds, nobles, servants, knights, etc.';
const elementalHomeConditions1120 = 'City of intelligent and semi-intelligent elementals';
const elementalHomeConditions2130 = 'Decadent';
const elementalHomeConditions3140 = 'Highly religious, superstitious';
const elementalHomeConditions4150 = 'Highly traditional, bound by traditions and agreements';
const elementalHomeConditions5160 = 'Infested with vermin';
const elementalHomeConditions6170 = 'Plots against old enemies, handles all interactions with material plane on that basis';
const elementalHomeConditions7180 = 'Prison';
const elementalHomeConditions8190 = 'Underwater-like (free-swimming elementals analogous to undersea creatures)';
const elementalHomeConditions91100 = 'War-torn region';

const elementalHomeConditionsArray = [elementalHomeConditions0110, elementalHomeConditions1120, elementalHomeConditions2130, elementalHomeConditions3140, elementalHomeConditions4150, elementalHomeConditions5160, elementalHomeConditions6170, elementalHomeConditions7180, elementalHomeConditions8190, elementalHomeConditions91100];

