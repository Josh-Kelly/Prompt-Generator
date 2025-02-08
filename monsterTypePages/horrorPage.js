function weightedRoll(array, elementId) {
  // Calculate total weight
  const totalWeight = array.reduce((sum, item) => sum + item.weight, 0);

  // Generate a random number between 0 and totalWeight
  let randomWeight = Math.floor(Math.random() * totalWeight);

  // Select item based on the random number
  for (let i = 0; i < array.length; i++) {
    randomWeight -= array[i].weight;
    if (randomWeight < 0) {
      document.getElementById(elementId).innerText = array[i].value;
      break;
    }
  }
}

function rollNature() {
  weightedRoll(horrorNatureArray, "horrorNatureText");
}

function rollIntellect() {
  weightedRoll(horrorIntellectArray, "horrorIntellectText");
}

function rollBasicForm() {
  weightedRoll(horrorBasicFormArray, "basicFormText");
}

function rollAttribute() {
  weightedRoll(horrorAttributesArray, "attributeText");
}

function rollSkin() {
  weightedRoll(horrorSkinArray, "skinText");
}

function rollOtherFeature() {
  weightedRoll(horrorOtherFeatureArray, "otherFeatureText");
}

function rollChitinPattern() {
  weightedRoll(chitinColorArray, "chitinColorPatternText");
}

function rollChitinTexture() {
  weightedRoll(chitinTextureArray, "chitinTextureText");
}

function rollSpecialAttacks() {
  /* I've arbitrarily decided that the creature should have 1-3 special attacks. The min and max number can be adjusted below */
  attackNumberRand = Math.floor(Math.random() * 3);

  document.getElementById("specialTextDiv").innerHTML = "";

  let attackTitle = document.createElement("h3");
  attackTitle.id = "attackTitle";
  attackTitle.innerText = "Special Attacks/Abilities:";
  document.getElementById("specialTextDiv").appendChild(attackTitle);

  if (attackNumberRand === 0) {
    const genSpecAttack1Rand = Math.floor(Math.random() * genSpecAttackArray.length);
    const genSpecAttack1 = genSpecAttackArray[genSpecAttack1Rand];

    let attack1 = document.createElement("p");
    attack1.id = "horrorSpecAttack1";
    attack1.innerText = genSpecAttack1;
    document.getElementById("specialTextDiv").appendChild(attack1);
  } else if (attackNumberRand === 1) {
    const genSpecAttack1Rand = Math.floor(Math.random() * genSpecAttackArray.length);
    const genSpecAttack1 = genSpecAttackArray[genSpecAttack1Rand];

    const genSpecAttack2Rand = Math.floor(Math.random() * genSpecAttackArray.length);
    const genSpecAttack2 = genSpecAttackArray[genSpecAttack2Rand];

    let attack1 = document.createElement("p");
    let attack2 = document.createElement("p");

    attack1.id = "horrorSpecAttack1";
    attack2.id = "horrorSpecAttack2";

    attack1.innerText = genSpecAttack1;
    attack2.innerText = genSpecAttack2;

    document.getElementById("specialTextDiv").appendChild(attack1);
    document.getElementById("specialTextDiv").appendChild(attack2);
  } else if (attackNumberRand === 2) {
    const genSpecAttack1Rand = Math.floor(Math.random() * genSpecAttackArray.length);
    const genSpecAttack1 = genSpecAttackArray[genSpecAttack1Rand];

    const genSpecAttack2Rand = Math.floor(Math.random() * genSpecAttackArray.length);
    const genSpecAttack2 = genSpecAttackArray[genSpecAttack2Rand];

    const genSpecAttack3Rand = Math.floor(Math.random() * genSpecAttackArray.length);
    const genSpecAttack3 = genSpecAttackArray[genSpecAttack3Rand];

    let attack1 = document.createElement("p");
    let attack2 = document.createElement("p");
    let attack3 = document.createElement("p");

    attack1.id = "horrorSpecAttack1";
    attack2.id = "horrorSpecAttack2";
    attack3.id = "horrorSpecAttack3";

    attack1.innerText = genSpecAttack1;
    attack2.innerText = genSpecAttack2;
    attack3.innerText = genSpecAttack3;

    document.getElementById("specialTextDiv").appendChild(attack1);
    document.getElementById("specialTextDiv").appendChild(attack2);
    document.getElementById("specialTextDiv").appendChild(attack3);
  }
}

function rollSpecialDefenses() {
  /* I've arbitrarily decided that the creature should have 1-3 special defenses. The min and max number can be adjusted below */
  const defenseNumberRand = Math.floor(Math.random() * 3);
  document.getElementById("specialDefenseTextDiv").innerHTML = "";

  let defenseTitle = document.createElement("h3");
  defenseTitle.id = "defenseTitle";
  defenseTitle.innerText = "Special Defenses:";
  document.getElementById("specialDefenseTextDiv").appendChild(defenseTitle);

  if (defenseNumberRand === 0) {
    const specDefense1Rand = Math.floor(Math.random() * specDefenseAbilityArray.length);
    const specDefense1 = specDefenseAbilityArray[specDefense1Rand];

    let defense1 = document.createElement("p");

    defense1.id = "specDefense1";

    defense1.innerText = specDefense1;

    document.getElementById("specialDefenseTextDiv").appendChild(defense1);
  } else if (defenseNumberRand === 1) {
    const specDefense1Rand = Math.floor(Math.random() * specDefenseAbilityArray.length);
    const specDefense1 = specDefenseAbilityArray[specDefense1Rand];

    const specDefense2Rand = Math.floor(Math.random() * specDefenseAbilityArray.length);
    const specDefense2 = specDefenseAbilityArray[specDefense2Rand];

    let defense1 = document.createElement("p");
    let defense2 = document.createElement("p");

    defense1.id = "specDefense1";
    defense2.id = "specDefense2";

    defense1.innerText = specDefense1;
    defense2.innerText = specDefense2;

    document.getElementById("specialDefenseTextDiv").appendChild(defense1);
    document.getElementById("specialDefenseTextDiv").appendChild(defense2);
  } else if (defenseNumberRand === 2) {
    const specDefense1Rand = Math.floor(Math.random() * specDefenseAbilityArray.length);
    const specDefense1 = specDefenseAbilityArray[specDefense1Rand];

    const specDefense2Rand = Math.floor(Math.random() * specDefenseAbilityArray.length);
    const specDefense2 = specDefenseAbilityArray[specDefense2Rand];

    const specDefense3Rand = Math.floor(Math.random() * specDefenseAbilityArray.length);
    const specDefense3 = specDefenseAbilityArray[specDefense3Rand];

    let defense1 = document.createElement("p");
    let defense2 = document.createElement("p");
    let defense3 = document.createElement("p");

    defense1.id = "specDefense1";
    defense2.id = "specDefense2";
    defense3.id = "specDefense3";

    defense1.innerText = specDefense1;
    defense2.innerText = specDefense2;
    defense3.innerText = specDefense3;

    document.getElementById("specialDefenseTextDiv").appendChild(defense1);
    document.getElementById("specialDefenseTextDiv").appendChild(defense2);
    document.getElementById("specialDefenseTextDiv").appendChild(defense3);
  }
}

// NATURE OF THE HORROR
const horrorNature0130 =
  "horror out of the dark subterranean reaches where water drips in fetid pools of darkness and where mankind is not meant to delve";
const horrorNature3140 =
  "ancient horror that yet survives from the primordial times before the dawn of man, the dawn of history, and the dawn of sanity";
const horrorNature4150 = "horror called forth by blasphemous incantations in dark places";
const horrorNature5160 = 'horror out of a mad wizard\'s lab (an "oopsie" most likely)';
const horrorNature6170 = "horror out of the freezing depths of space";
const horrorNature7180 = "horror out of the realms of nightmare and dreams";
const horrorNature8190 = "horror out of the strange dimensions beyond reality";
const horrorNature91100 = "horror out of time (either immune to time or with powers over time)";

// Assigning weights based on the number at the end of the const name
const horrorNatureArray = [
  { value: horrorNature0130, weight: 3 }, // 3x more likely
  { value: horrorNature3140, weight: 1 }, // 1x more likely
  { value: horrorNature4150, weight: 1 }, // 1x likelihood
  { value: horrorNature5160, weight: 1 }, // 1x likelihood
  { value: horrorNature6170, weight: 1 }, // 1x more likely
  { value: horrorNature7180, weight: 1 }, // 1x more likely
  { value: horrorNature8190, weight: 1 }, // 1x more likely
  { value: horrorNature91100, weight: 1 }, // 1x likelihood
];

// INTELLECT OF THE HORROR
const horrorIntellect0130 = "completely non-intelligent - acts on instinct";
const horrorIntellect3140 = "barely intelligent - can be trained by powerful creatures or brute force over time";
const horrorIntellect4150 = "average intelligence - roughly the same as a human being";
const horrorIntellect5160 = "extremely intelligent - can act as a mastermind, and may have spell-like abilities";
const horrorIntellect6170 = "extremely intelligent - can act as a mastermind, and may have spell-like abilities";
const horrorIntellect7180 = "barely intelligent - can be trained by powerful creatures or brute force over time";
const horrorIntellect8190 = "extremely intelligent - can act as a mastermind, and may have spell-like abilities";
const horrorIntellect91100 = "barely intelligent - can be trained by powerful creatures or brute force over time";

// Assigning weights based on the number at the end of the const name
const horrorIntellectArray = [
  { value: horrorIntellect0130, weight: 3 }, // 3x more likely
  { value: horrorIntellect3140, weight: 1 }, // 1x likelihood
  { value: horrorIntellect4150, weight: 1 }, // 1x likelihood
  { value: horrorIntellect5160, weight: 1 }, // 1x likelihood
  { value: horrorIntellect6170, weight: 1 }, // 1x likelihood
  { value: horrorIntellect7180, weight: 1 }, // 1x likelihood
  { value: horrorIntellect8190, weight: 1 }, // 1x likelihood
  { value: horrorIntellect91100, weight: 1 }, // 1x likelihood
];

// BASIC FORM OF THE HORROR
const horrorBasicForm0105 = "ant";
const horrorBasicForm0610 = "beetle";
const horrorBasicForm1115 = "bipedal";
const horrorBasicForm1620 = "blob";
const horrorBasicForm2125 = "centipede/scorpion";
const horrorBasicForm2630 = "cone/cube";
const horrorBasicForm3135 = "crab/lobster";
const horrorBasicForm3640 = "fish";
const horrorBasicForm4145 = "fly";
const horrorBasicForm4650 = "frog/toad";
const horrorBasicForm5155 = "leech/slug";
const horrorBasicForm5660 = "mantis/stick beetle";
const horrorBasicForm6165 = "moth";
const horrorBasicForm6670 = "octopus/squid";
const horrorBasicForm7175 = "ooze";
const horrorBasicForm7680 = "plant";
const horrorBasicForm8185 = "snake/eel";
const horrorBasicForm8690 = "sphere";
const horrorBasicForm9195 = "spider/longlegs";
const horrorBasicForm96100 = "wasp";

// Assigning weights based on the number at the end of the const name
const horrorBasicFormArray = [
  { value: horrorBasicForm0105, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm0610, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm1115, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm1620, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm2125, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm2630, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm3135, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm3640, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm4145, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm4650, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm5155, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm5660, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm6165, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm6670, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm7175, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm7680, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm8185, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm8690, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm9195, weight: 1 }, // 1x likelihood
  { value: horrorBasicForm96100, weight: 1 }, // 1x likelihood
];

const horrorAttributes0105 = "amphibians";
const horrorAttributes0610 = "bacteria/virus";
const horrorAttributes1115 = "bat";
const horrorAttributes1620 = "beetle";
const horrorAttributes2125 = "burrowing creatures";
const horrorAttributes2630 = "cat";
const horrorAttributes3135 = "crab/lobster";
const horrorAttributes3640 = "fish";
const horrorAttributes4145 = "fluid-sucking organisms";
const horrorAttributes4650 = "fungus";
const horrorAttributes5155 = "human (body form)";
const horrorAttributes5660 = "human (mental)";
const horrorAttributes6165 = "leech/slug";
const horrorAttributes6670 = "moth or butterfly";
const horrorAttributes7175 = "octopus/squid";
const horrorAttributes7680 = "ooze";
const horrorAttributes8185 = "ooze";
const horrorAttributes8690 = "plant";
const horrorAttributes9195 = "snake/eel";
const horrorAttributes96100 = "spider/longlegs";

// Assigning weights based on the number at the end of the const name
const horrorAttributesArray = [
  { value: horrorAttributes0105, weight: 1 }, // 1x likelihood
  { value: horrorAttributes0610, weight: 1 }, // 1x likelihood
  { value: horrorAttributes1115, weight: 1 }, // 1x likelihood
  { value: horrorAttributes1620, weight: 1 }, // 1x likelihood
  { value: horrorAttributes2125, weight: 1 }, // 1x likelihood
  { value: horrorAttributes2630, weight: 1 }, // 1x likelihood
  { value: horrorAttributes3135, weight: 1 }, // 1x likelihood
  { value: horrorAttributes3640, weight: 1 }, // 1x likelihood
  { value: horrorAttributes4145, weight: 1 }, // 1x likelihood
  { value: horrorAttributes4650, weight: 1 }, // 1x likelihood
  { value: horrorAttributes5155, weight: 1 }, // 1x likelihood
  { value: horrorAttributes5660, weight: 1 }, // 1x likelihood
  { value: horrorAttributes6165, weight: 1 }, // 1x likelihood
  { value: horrorAttributes6670, weight: 1 }, // 1x likelihood
  { value: horrorAttributes7175, weight: 1 }, // 1x likelihood
  { value: horrorAttributes7680, weight: 1 }, // 1x likelihood
  { value: horrorAttributes8185, weight: 1 }, // 1x likelihood
  { value: horrorAttributes8690, weight: 1 }, // 1x likelihood
  { value: horrorAttributes9195, weight: 1 }, // 1x likelihood
  { value: horrorAttributes96100, weight: 1 }, // 1x likelihood
];

const horrorSkin0105 = "baggy skin";
const horrorSkin0610 = "bubbly or even effervescent";
const horrorSkin1115 = "carapace/single shell";
const horrorSkin1620 = "chitin plates";
const horrorSkin2125 = "diseased skin";
const horrorSkin2630 = "dry membrane";
const horrorSkin3135 = "feathers, possibly patchy";
const horrorSkin3640 = "hairy";
const horrorSkin4145 = "half chitin, half skin";
const horrorSkin4650 = "pulsing tubes and veins";
const horrorSkin5155 = "rock or gravel adhering to outer surface";
const horrorSkin5660 = "scales";
const horrorSkin6165 = "segmented armor plates";
const horrorSkin6670 = "sleek fur";
const horrorSkin7175 = "slime coated membrane";
const horrorSkin7680 = "spikes";
const horrorSkin8185 = "spongy";
const horrorSkin8690 = "tightly stretched skin";
const horrorSkin9195 = "vermin or worm covered";
const horrorSkin96100 = "warty skin";

// Assigning weights based on the number at the end of the const name
const horrorSkinArray = [
  { value: horrorSkin0105, weight: 1 },
  { value: horrorSkin0610, weight: 1 },
  { value: horrorSkin1115, weight: 1 },
  { value: horrorSkin1620, weight: 1 },
  { value: horrorSkin2125, weight: 1 },
  { value: horrorSkin2630, weight: 1 },
  { value: horrorSkin3135, weight: 1 },
  { value: horrorSkin3640, weight: 1 },
  { value: horrorSkin4145, weight: 1 },
  { value: horrorSkin4650, weight: 1 },
  { value: horrorSkin5155, weight: 1 },
  { value: horrorSkin5660, weight: 1 },
  { value: horrorSkin6165, weight: 1 },
  { value: horrorSkin6670, weight: 1 },
  { value: horrorSkin7175, weight: 1 },
  { value: horrorSkin7680, weight: 1 },
  { value: horrorSkin8185, weight: 1 },
  { value: horrorSkin8690, weight: 1 },
  { value: horrorSkin9195, weight: 1 },
  { value: horrorSkin96100, weight: 1 },
];

const horrorOtherFeature0105 = "blow-holes";
const horrorOtherFeature0610 = "eats abstract food (Table 2-5)";
const horrorOtherFeature1115 =
  "entire creature is disembodied head of some animal type with other bizarre features (possibly huge)";
const horrorOtherFeature1620 = "even longer tentacles";
const horrorOtherFeature2125 = "even more tentacles";
const horrorOtherFeature2630 = "exposed brain or thinking organ";
const horrorOtherFeature3135 = "eyestalks";
const horrorOtherFeature3640 = "fungus blooms on exterior";
const horrorOtherFeature4145 = "has tremendous mental powers";
const horrorOtherFeature4650 = "huge mouth";
const horrorOtherFeature5155 = "invisible; the sight of it might cause insanity or revulsion";
const horrorOtherFeature5660 = "levitates or floats";
const horrorOtherFeature6165 = "long tail";
const horrorOtherFeature6670 = "moves in and out of dimensions, represented by phasing, or incorporeality";
const horrorOtherFeature7175 = "multiple eyes";
const horrorOtherFeature7680 = "multiple mouths";
const horrorOtherFeature8185 = "partially mechanical";
const horrorOtherFeature8690 = "phases or moves in and out of reality";
const horrorOtherFeature9195 = "shaped like a wreath or in a circle";
const horrorOtherFeature96100 = "transparent, with things inside (organs or parasites)";

// Assigning weights based on the number at the end of the const name
const horrorOtherFeatureArray = [
  { value: horrorOtherFeature0105, weight: 1 },
  { value: horrorOtherFeature0610, weight: 1 },
  { value: horrorOtherFeature1115, weight: 1 },
  { value: horrorOtherFeature1620, weight: 1 },
  { value: horrorOtherFeature2125, weight: 1 },
  { value: horrorOtherFeature2630, weight: 1 },
  { value: horrorOtherFeature3135, weight: 1 },
  { value: horrorOtherFeature3640, weight: 1 },
  { value: horrorOtherFeature4145, weight: 1 },
  { value: horrorOtherFeature4650, weight: 1 },
  { value: horrorOtherFeature5155, weight: 1 },
  { value: horrorOtherFeature5660, weight: 1 },
  { value: horrorOtherFeature6165, weight: 1 },
  { value: horrorOtherFeature6670, weight: 1 },
  { value: horrorOtherFeature7175, weight: 1 },
  { value: horrorOtherFeature7680, weight: 1 },
  { value: horrorOtherFeature8185, weight: 1 },
  { value: horrorOtherFeature8690, weight: 1 },
  { value: horrorOtherFeature9195, weight: 1 },
  { value: horrorOtherFeature96100, weight: 1 },
];

const chitinColorArray = [
  { value: "black", weight: 1 },
  { value: "blue", weight: 1 },
  { value: "brown", weight: 1 },
  { value: "diamond pattern", weight: 1 },
  { value: "green", weight: 1 },
  { value: "grey", weight: 1 },
  { value: "moving patterns", weight: 1 },
  { value: "one color for front, different for back", weight: 1 },
  { value: "one color for top, another for bottom", weight: 1 },
  { value: "orange", weight: 1 },
  { value: "pink", weight: 1 },
  { value: "purple", weight: 1 },
  { value: "red", weight: 1 },
  { value: "reflective", weight: 1 },
  { value: "splotchy pattern", weight: 1 },
  { value: "spotted", weight: 1 },
  { value: "striped", weight: 1 },
  { value: "white", weight: 1 },
  { value: "whorled patterns", weight: 1 },
  { value: "yellow", weight: 1 },
];

const chitinTextureArray = [
  { value: "barbed", weight: 1 },
  { value: "basically smooth", weight: 1 },
  { value: "bumpy", weight: 1 },
  { value: "coral-like protrusions", weight: 1 },
  { value: "curved, thorn-like protrusions", weight: 1 },
  { value: "engraved with blasphemous runes", weight: 1 },
  { value: "extremely smooth; color of chitin becomes iridescent as a result", weight: 1 },
  { value: "flexible but as hard as normal chitin/armor", weight: 1 },
  {
    value: "highly regular pattern of protrusions (bumps or small pyramidal shapes) which looks almost factory-generated",
    weight: 1,
  },
  { value: "irregular patterns or patches of stiff hair grows from carapace", weight: 1 },
  { value: "pitted, irregular grooves and cuts", weight: 1 },
  { value: "ridged (possibly sharp)", weight: 1 },
  { value: "smooth", weight: 1 },
  { value: "spiked (long spikes)", weight: 1 },
  { value: "spiked (short spikes)", weight: 1 },
  { value: "sticky", weight: 1 },
  { value: "very smooth (but not to the point of iridescence)", weight: 1 },
  { value: "wavy surface texture", weight: 1 },
  { value: "waxy; not nearly as tough as it looks", weight: 1 },
  { value: "whorled texture, almost patterns", weight: 1 },
];

/* special attack delivery method Table 2-78 */
const specDeliveryArray = [
  { value: "appearance (changes to dangerous appearance)", weight: 1 },
  { value: "appearance (normal appearance is dangerous)", weight: 1 },
  { value: "cast like a spell (affects number of hit dice)", weight: 1 },
  { value: "cast like a spell (area effect)", weight: 1 },
  { value: "cast like a spell (one target)", weight: 1 },
  { value: "cast like a spell (radius around monster)", weight: 1 },
  { value: "constant effect (radius)", weight: 1 },
  { value: "exhaled cloud", weight: 1 },
  { value: "exhaled cone", weight: 1 },
  { value: "exhaled line", weight: 1 },
  { value: "gaze", weight: 1 },
  { value: "gives off gas", weight: 1 },
  { value: "mental power (affects number of hit dice)", weight: 1 },
  { value: "mental power (area effect)", weight: 1 },
  { value: "mental power (burst in radius around monster)", weight: 1 },
  { value: "mental power (one target)", weight: 1 },
  { value: "ray (eye, eyestalks, or other organ)", weight: 1 },
  { value: "smell (radius)", weight: 1 },
  { value: "smell (squirted, cone)", weight: 1 },
  { value: "smell (squirted, single target)", weight: 1 },
  { value: "sound (clicks, etc.)(radius around monster)", weight: 1 },
  { value: "speech (in radius from monster)", weight: 1 },
  { value: "spit (glob, single target)", weight: 1 },
  { value: "spit (line)", weight: 1 },
  { value: "spray (cone)", weight: 1 },
  { value: "spray (line)", weight: 1 },
  { value: "squirt liquid (single target)", weight: 1 },
  { value: "touch", weight: 1 },
];

const specDeliveryRand = Math.floor(Math.random() * specDeliveryArray.length);
const specDelivery = specDeliveryArray[specDeliveryRand];

/* special attack type 2-79 */
const genSpecAttack01 =
  "Acid Damage (affecting action). The attack causes acidic damage to the target, but there's also a special effect involved - if the victim fails some sort of check (morale, saving throw, percentile chance, etc) he takes some action in response to or as a result of the acid (usually either due to panic or pain). The most likely candidates for involuntary responses to acid are panic (running), losing actions (getting acid off your skin), dropping items, or something similar.";
const genSpecAttack02 =
  "Acid Damage (causes condition). In addition to normal damage and collateral damage the attack causes to equipment, the acid has a chance to put the victim into a particular combat condition - blindness being the most obvious, whether it's permanent or temporary. Other possibilities for such “special” acids might include: damaged sight resulting in combat penalties (but not complete blindness), a loss of charisma points, permanent scarring, or some other chemical reaction (perhaps this sort of acid turns re-grown skin blue, for example).";
const genSpecAttack03 =
  "Acid Damage (hit or miss). The attack causes electrical damage, but a successful saving throw means that the target incurs no damage. In other words, the saving throw functions as a to-hit roll and if it is successful the attack missed. Another way of handling this is to require an attack roll for the attack itself (and then don't allow a saving throw). If the attack hits, items and equipment spattered with the acid are at great risk of damage (this is one of the signature features of acid as an attack form). Also, acid attacks often cause damage for more than one round.";
const genSpecAttack04 =
  "Acid Damage (progressive). The victim takes acid damage, but continues to take damage in later combat rounds (probably a random number of rounds, but possibly a set number of rounds with declining damage each time - it's up to you). The continuing damage would almost certainly prevent spell casting, but might also create penalties on saving throws, attack rolls, and/or movement rate. Also, items spattered with the acid may be ruined. Progressive damage over several rounds (with attendant problems caused by pain) and the high likelihood of damaged equipment are the hallmarks of fantasy acid.";
const genSpecAttack05 =
  "Acid Damage (save for half damage). The target takes half damage if he makes a successful saving throw; items he carries are also at risk of being destroyed by the acid. Generally, acid attacks are highly dangerous to items (even more so than fire attacks) and the effect lingers for more than a single combat round.";
const genSpecAttack06 =
  "Adhesiveness and Friction. The special attack makes things stick to other things, or makes them slippery. This could be a magical power, a mental power, or it might be that the monster spits glue or oil. The obvious use of this power is to stick people in place, prevent them from moving, or make them drop (or unable to release) weapons. However, such an ability could also be used to give the monster extra mobility (if it slides), to haul opponents around (if the glue is at the end of a rope or tentacle), to attach dangerous things to other things, or as part of a characteristic trap the monster sets.";
const genSpecAttack07 =
  "Affect Ground or Rock. This special attack can be used to open holes in the ground, collapse walls, cause the ground to grab people, etc. In many cases, only one particular kind of effect will be possible; the monster might be able to open cracks in the floor but not collapse walls, for example. Turning rock into mud (and back) is one interpretation of this sort of ability, and so is the use of a terrible roar to collapse ceilings.";
const genSpecAttack08 =
  "Affect Metal. The monster can control metal (probably one specific type). This can include causing the metal to animate, affecting it as a magnet, making it rust, heating it up, chilling it to deadly low temperatures, causing it to conduct electricity, shaping it at will, making it brittle, changing its physical properties, causing it to constrict, or some combination thereof.";
const genSpecAttack09 =
  "Affect Stone or Wood. This is likely a form of rapid corrosion, but it could also be the ability to cause tremors in the substance, heat/cool it, warp it, shape it, or otherwise use it to damage people.";
const genSpecAttack10 =
  "Affect Use of a Limb. This special attack can sever, destroy, or immobilize one of the victim's limbs. If the special attack is delivered by touch, this is probably a tentacle, whip, or other “grabbing” type of attack (attacks that sever limbs should be left to the really dangerous and rare monsters). If the attack is delivered at a range (by a gaze attack, for example), this might represent partial paralysis, a partial flesh-to-stone, or a chemical change that doesn't affect the entire body.";
const genSpecAttack11 =
  "Affect Wood. The monster can control living and/or dead wood, cause it to animate, affect it like a magnet, heat it up, chill it, cause it to conduct electricity, cause it to act like a vampiric bloodsucker, shape it at will, or some combination thereof. In many cases, the monster will have a single, specific thing it can do, although some more powerful monsters might have a generalized ability to animate and control wood.";
const genSpecAttack12 =
  "Animate Objects. The monster can animate nearby objects to serve as allies. Consider a few of the following ideas: perhaps the monster makes a specific object and has these around for use - indeed, it may be that the creature can only animate a specific type of pre-prepared object. Some monsters might also be restricted to animating objects made of a certain substance, made during a certain time period, or made by a certain race.";
const genSpecAttack13 =
  "Asphyxiation. This special attack removes or reduces the target's ability to breathe. It could be by pulling the victim underwater, by filling the victim's lungs with fluid, by choking the victim's neck, by suffocating the victim, by removing the victim's memory of how to breathe, by surrounding the victim with dust or smoke, or a variety of other methods. Death is not immediate, and the period of time required for the victim to die can be measured out in several ways: a set number of combat rounds, a random number of combat rounds, a number of combat rounds related to the victim's constitution score, a number of rounds related to the victim's level, or a series of saving throws until the victim finally succumbs. Don't worry if the character seems to be able to hold his breath for an incredibly long time - just assume that he manages to catch a gasp of air somehow during the process - the important thing is to make the attack work well as part of the game, not to simulate exactly how long a person can hold his breath.";
const genSpecAttack14 =
  "Aversion. The special attack creates an aversion to something, often an aversion to animals related to the monster, or to situations involving the monster's normal surroundings. For example, a giant, intelligent beetle's special attack might cause an aversion to beetles or bugs. Or, if the beetle is a subterranean creature, the special attack might cause an aversion to darkness. A table of Aversions is also contained in a later book.";
const genSpecAttack15 =
  "Bleeding and Healing. This sort of special attack either causes ongoing damage (probably from bleeding or bloodsucking, but possibly for other reasons such as caustic materials) or causes damage that doesn't heal in the normal fashion. Ongoing damage is probably for a random number of rounds, rolling damage again each round. A list of possibilities: bleeding caused by jagged wound, bleeding caused by blood-thinning chemical, magical nature of bite/claw, cursed nature of bite/claw, mild poison in bite/ claw/stinger, chemical reaction continues until the catalyst is used up (like acid), or a substance continues burning or producing energy     until it is used up. (Yes, I know the last two are technically the same thing). If the special attack causes damage that doesn't     heal normally, there are a few possibilities: (1) the damage cannot be cured by magical healing and must be regained by normal     rest, (2) the damage can only be cured by magical healing, (3) the damage cannot be cured without a specific spell to neutralize     poison, remove curse, or dispel magic, whichever seems appropriate to the monster's nature.";
const genSpecAttack16 =
  "Body Infestation. This special attack infests the victim's body with a plant or animal growth. The result might be extremely minor: “you have fleas,” problematic, “flea bites are distracting you and causing you to attack at -1,” or quite deadly, “an enormous flea is growing inside you: each round you attack at a cumulative -1 to hit, and on round 10 you die unless cured.” Vermin and fungi are the obvious candidates for this sort of attack, but this sort of attack would also include undead worms, growths that are contagious if the character gets too close to the other characters, and a variety of other possibilities. Conditions that worsen as time goes on work well with this sort of attack.";
const genSpecAttack17 =
  "Bury. The attack buries the victim in some sort of substance, digs him down into the ground, or hauls up dirt and stone to cover him. Possible substances for a burial-type attack might include slime, ashes, gravel, plaster, hardening resin, rock, sand, and even water.";
const genSpecAttack18 =
  "Charisma Loss. The attack drains one or more points of charisma from the victim. The attacker may or may not gain a benefit from the drain (additional hit points, to-hit bonuses, etc) depending upon whether it seems to fit well with the concept. If the victim reaches a charisma score of 0 as a result of successive attacks, one of several things might happen: the victim might die and become a creature similar to the attacker, or might remain alive as the attacker's mental slave. Another possibility is that the victim just dies, and a third possibility is that restoring the lost points becomes harder - what might have returned naturally is now a permanent condition requiring spells or divine intervention to reverse. Note that the drain might be temporary or permanent - this is up to you as a matter of how powerful you want the monster to be.";
const genSpecAttack19 =
  "Cloud Vortex. Similar to the “Elemental” and “Energy” Vortex attacks, this is an attack in which the monster calls forth mist, smoke, steam, vapor, fog, or some other kind of gas in a whirlwind of power. The victim takes some damage from being hurled around, but the distinguishing feature is the effect of the substance being used for the vortex. It might be poisonous, might be choking, might be hot, might be cold, might conduct electricity, might dispel magic, or could have any number of other properties. The cloud probably lingers more than one combat round, possibly trapping its victims within, possibly moving from one victim to another, or possibly just remaining in one place as a potential obstacle during the rest of the combat.";
const genSpecAttack20 =
  "Clumsiness. Victim suffers one or more of the following: a penalty to hit, a penalty to armor class, inability or reduction in spell casting, and/or the chance to drop any items he is holding. Actual dexterity score is not necessarily affected. The way in which the attack causes clumsiness could include overloading one of the victim's emotions (joy, rage, hate, greed, fear); an alchemical reaction (mysterious chemicals in the creature's spittle); the aftereffects of an electrical shock; or a very weak poison, curse, or disease. The duration could range from only a couple of combat rounds to days in length.";
const genSpecAttack21 =
  "Cold Damage (all or none). A blast of cold either hits or misses the target - this can be governed by an all-or-nothing saving throw, or it might be an attack for which the attacker needs to make a to-hit roll. Cold temperature normally wouldn't cause much collateral damage to items or equipment unless it is an unusually magical type of cold (perhaps affecting metal more than other substances, for example).";
const genSpecAttack22 =
  "Cold Damage (manifestation). The special attack brings into being an abstract shape of pure coldness (serpentine, mist, etc). The manifestation causes cold damage (or makes a separate attack) each round for a set duration.";
const genSpecAttack23 =
  "Cold Damage (save for half damage). A blast of cold inflicts hit-point damage, half if the target makes a saving throw or similar avoidance check. Unlike fire, cold damage doesn't usually risk much collateral damage to items and equipment. Cold damage can include such things as blasting particles of ice, or visibility-obscuring snow.";
const genSpecAttack24 =
  "Cold Damage (unusual collateral damage). Cold temperature normally doesn't affect items or substances - at least, not in the traditional “save for half damage” type of attack. Cold attacks causing an unusual type of collateral damage are thus quite memorable, because they're a bit unexpected. A few possibilities include: metal is chilled and causes damage for more than one round; potions or other liquids freeze with some sort of random or unexpected effect; torch fire freezes; leather has a risk of turning brittle and breaking, etc.";
const genSpecAttack25 =
  "Command Plants or Animals. The monster can command nearby plants or animals to serve as his allies. If the monster is a plant-monster, it may have a specific type of slave-plant (possibly a weaker monster-type with different abilities) that it can command or animate. A more powerful monster might be a general plant-lord type, or perhaps it can command any sort of fungus but not other types of plants. Animal-controlling monsters, as with plant-controllers, might be limited to specific types of animals (mammals, reptiles, etc) or might have a particular type of animal they breed, control, or live in symbiosis with. In some cases, animal or plant controllers (especially the ones with a specific type of ally) can turn their victims into that kind of plant or animal.";
const genSpecAttack26 =
  "Constitution Loss. The attack drains one or more points of constitution from the victim. The attacker may or may not gain a benefit from the drain (additional hit points, to-hit bonuses, etc) depending upon whether it seems to fit well with the concept. If the victim reaches a constitution score of 0 as a result of successive attacks, one of several things might happen: the victim might die and become a creature similar to the attacker, or might remain alive as the attacker's mental slave. Another possibility is that the victim just dies, and a third possibility is that restoring the lost points becomes harder - what might have returned naturally is now a permanent condition requiring spells or divine intervention to reverse. Note that the drain might be temporary or permanent - this is up to you as a matter of how powerful you want the monster to be.";
const genSpecAttack27 =
  "Curse (strategic). A “curse” can be almost anything, but what distinguishes it is that it responds to particular spells that remove … curses. If the party happens to have a “remove curse” spell handy, the special attack's power can easily be negated, unless this is a super-powered curse of some kind. Strategic curses are long-term curses that don't necessarily have much immediate effect in a combat, but have repercussions in the game outside the realm of combat. Some of these are purely cosmetic, and would be reflected only in the role-playing environment: a change in skin color, a long nose (perhaps it grows when you tell a lie!), a change in gender - all of these are excellent curses even though they don't affect the game itself. Other strategic curses are those which restrict decision-making in between combats if they aren't dealt with. Examples of this type of curse include a “quest to obtain the grail,” or “give half your treasure to the evil cult.”";
const genSpecAttack28 =
  "Curse (tactical). A “curse” can be almost anything, but what distinguishes it is that it responds to particular spells that remove … curses. If the party happens to have a “remove curse” spell handy, the special attack's power can easily be negated, unless this is a super-powered curse of some kind. A “tactical” curse is one that focuses on the basic die rolls and mechanisms of the game - “strategic” curses focus more on flavor or other aspects of the game outside the combat rules. Tactical curses will generally accomplish one or more of the following: (1) lower an ability score, (2) cause random actions (running, singing, etc), possibly triggered by a low attack roll or with a risk of onset when the character attempts a particular action, (3) cause a specific sort of action, such as attacking allies or sleeping, when the curse is triggered by a bad die roll or other triggering event, (4) cause a penalty to attack rolls, damage rolls, and/or saving throws, (5) give the character a small chance of sudden death when attempting certain actions like running, attacking, casting a spell, walking into the light, etc, (6) cause a small amount of hit point damage whenever the character undertakes a particular action such as running, etc (see the preceding list), (7) change the character's location when certain events take place, either by teleportation or by uncontrollable or random movement, (8) cause a chance of paralysis or sleep when the character undertakes a particular action (see the preceding list), cause the character to lose a level or a particular number of experience points (9) remove or restrict spell casting ability, (10) reduce the character's movement. Other tactical curses can include transformations such as polymorph or other spell-like effects such as a charm.";
const genSpecAttack29 =
  "Dangerous Barriers. The monster can create barriers such as walls of thorns, walls of fire, bubbles of temporary levitation, banks of whirling blades, or whatever. Here are lists of possible types of barriers and possible types of composition. Types: wall, circle, spiral, shrinking circle, cube, moving wall, short fence, cloud, thread, rope. Composition: fire, cold, ice, frost, earth, water, gas, blades, swords, daggers, spears, thorns, magical force, mental force, mental domination, aversion, disease, poison, insanity, sound, song, screams, nausea, fear, pincers, stingers, claws, confusion.";
const genSpecAttack30 =
  "Death (magic or poison). The special attack uses death magic or poison to cause instant death if the target fails a saving throw. Alternatively, targets with a minimum number of levels or hit dice might be immune to the attack.";
const genSpecAttack31 =
  "Death (progressive attribute score loss). If the target fails a saving throw, the result is likely to be death. The victim loses a point of some particular attribute score (strength, dexterity, constitution, intelligence, wisdom, or charisma) periodically until the score reaches zero and death results. The process can be stopped in different ways depending on the nature of the attack. If it is a curse, it can be removed, if it is a form of poison it can be neutralized, if it is a form of disease it can be cured. If it is none of the above, then there might still be a “folkloric” antidote - an action that negates the attack for no scientific reason. The most obvious example of a folkloric antidote is to kill the attacker before the draining process is complete. Less obvious examples might include stopping to drink lots of water, divesting oneself of all metal objects, etc. Folkloric antidotes might completely stop the draining process or they might just hold it in abeyance.";
const genSpecAttack32 =
  "Death (progressive dexterity loss). If the target fails a saving throw, the result is likely to be death. The victim loses a point of dexterity periodically until dexterity reaches zero and death results. The process can be stopped in different ways depending on the nature of the attack. If it is a curse, it can be removed, if it is a form of poison it can be neutralized, if it is a form of disease it can be cured. If it is none of the above, then there might still be a “folkloric” antidote - an action that negates the attack for no scientific reason. The most obvious example of a folkloric antidote is to kill the attacker before the draining process is complete. Less obvious examples might include stopping to drink lots of water, divesting oneself of all metal objects, etc. Folkloric antidotes might completely stop the draining process or they might just hold it in abeyance.";
const genSpecAttack33 =
  "Dehydrate, Desiccate, Suck Fluids. This special attack sucks blood or dehydrates the victim (possibly all the way into powder). For “standard” bloodsucking, the process starts only with a successful to hit roll and then the attacker causes automatic damage thereafter without rolling to hit. Consider, though, the following ideas: (1) a “ranged” attack of this nature might be pulling bodily fluids out into a mist for the monster to collect later, (2) a failed saving throw might mean that the ongoing damage continues until either the attacker or the defender dies, (3) hit points don't need to be the “measure” of the damage; it might be the character's constitution score or some other number that's used for the measurement, (4) the “vampire” might gain strength (probably hit points) from draining a victim's fluids, (5) if the attack involves a tube or some other physical connection, you might want to consider this as an opportunity to add some interesting tactics to the battle - perhaps the tube has hit points and an armor class to allow the connection to be severed quickly, (6) perhaps the fluid is being replaced with something else like eggs or control-fluid.";
const genSpecAttack34 =
  "Dexterity Loss. The attack drains one or more points of dexterity from the victim. The attacker may or may not gain a benefit from the drain (additional hit points, to-hit bonuses, etc) depending upon whether it seems to fit well with the concept. If the victim reaches a dexterity of 0, one of several things might happen: the victim might die and become a creature similar to the attacker (this is common with undead, but a bit weird when dexterity is the attribute score being drained). One explanation for death at 0 dexterity is that the body's internal systems (circulatory, etc) are no longer working in time with each other.";
const genSpecAttack35 =
  "Dimensional (imprisonment). This type of attack imprisons the victim - to some degree - in another dimension or reality. This can be interpreted a number of different ways. Perhaps suspended animation or catatonia can be caused by some sort of dimensional disjunction. Perhaps the imprisonment leaves an incorporeal echo on the material plane - and it might still be able to use spells or mental powers. Perhaps the imprisonment's only effect is to slow the victim's movement rate (your feet are mired in one dimension, but the rest of you is still free…).";
const genSpecAttack36 =
  "Dimensional (phasing). This type of special attack taps other dimensions of time and space to screw around with the opposition's movement. The victim is affected with some type of dimensional movement (whether because of a disease, a poison, a curse, the opening of a synchronicity with the eighth dimension, a coating of dimensional frictionlessness, or whatever). The effect is most likely some sort of randomization of the victim's movement, although it might also involve moving through solid substances (or even being able to move faster through solids than through air).";
const genSpecAttack37 =
  "Disease. The special attack causes a disease. Diseases can be fatal or non-fatal, can be quick-onset or slow-onset, and can cause all kinds of different symptoms while the disease runs its course. Symptoms could include losing the ability to cast spells, a penalty on saving throws or attack rolls, or whatever other interesting conditions you can dream up.";
const genSpecAttack38 =
  "Drain Experience (experience points). The special attack causes the victim to lose experience points. Most likely, this is either an undead creature or a creature that can affect the victim's memory. A third possibility, related to memory, is a creature with some ability to manipulate time or aging. Brain-creatures, leech-creatures, undead creatures, and dimensional creatures thus tend to be the prime candidates for this sort of power. If you've got a good idea that falls outside those prime candidates, though, go for it.";
const genSpecAttack39 =
  "Drain Experience (level). The special attack causes the victim to lose one (or possibly two) levels of experience. This is generally a feature of undead creatures that suck away the victim's life energy (as opposed to creatures who affect memory, likely sucking away a set number of experience points rather than a level). A monster with this sort of level drain should be associated with life (death) force in some way if it is not undead.";
const genSpecAttack40 =
  "Electrical Damage (affects action). The attack causes electrical damage to the target, but there's also a special effect involved - if the victim fails some sort of check (morale, saving throw, percentile chance, etc) he takes some action in response to or as a result of the shock. Since electricity affects the brain, all kinds of actions are credible here - it's a much broader set of possibilities than what a fire attack might make someone do. Possibilities include: random actions for some number of rounds, loss of bodily coordination (reflected with combat penalties), mental disorientation (affecting spell casting and possibly even in some really cool ways like making the character risk casting the wrong spell), temporary paralysis, etc.";
const genSpecAttack41 =
  "Electrical Damage (causes condition). In addition to the damage caused by the attack, there is a chance that the victim will also have a “condition” lingering after the electrical shock. This is similar to electrical damage that causes an action, but bear with me a moment. Possibilities include: the victim has a static charge built up that will cause damage to the next person he touches (not good if you're the cleric, but actually pretty cool if you're the fighter and some of the enemies aren't immune to electricity); the victim cannot hold an object in his hands without dropping it; the victim is stunned, twitching, or knocked out from the electric shock, etc.";
const genSpecAttack42 =
  "Electrical Damage (hit or miss). The attack causes electrical damage, but a successful saving throw means that the target incurs no damage. In other words, the saving throw functions as a to-hit roll and if it is successful the attack missed. Another way of handling this is to require an attack roll for the attack itself (and then don't allow a saving throw).";
const genSpecAttack43 =
  "Electrical Damage (progressive). The victim takes electrical damage, but continues to take damage in later combat rounds until the series of electrical shocks has run its course. Exactly what effect the continuing damage will have is up to you. It would almost certainly prevent spell casting, but might also create penalties on saving throws, attack rolls, and/or movement rate.";
const genSpecAttack44 =
  "Electrical Damage (save for half damage). The attack causes electrical damage, reduced by half with a successful saving throw. In general, lightning or electrical attacks don't have the same sort of “save or burn” collateral damage as fire attacks - or at least, they're not generally as severe. Electrical attacks are often made unique by the way the electricity moves around. Consider the possibility of the electricity jumping from one target to another, the possibility of it reflecting off a wall or other surface.";
const genSpecAttack45 =
  "Electricity (special). In this case, the electricity involved in the special attack isn't normal electricity - it's more of a special effect for something else. Just as magical fires can do all sorts of things rather than just burn, a strike of magical lightning or a bolt of power can be the “visual candy” for a multitude of different sorts of attacks completely unrelated to real-world electricity. Possible effects include: lowering an ability score, acting randomly, suffering combat penalties, following enemy orders, floating up into the air, losing the ability to act, losing the ability to cast spells, functioning as a lower-level character, running away, suffering saving throw penalties, suffering hallucinations, and suffering from a heightened emotion such as rage or sorrow.";
const genSpecAttack46 =
  "Elemental Vortex. The special attack creates (or animates) a whirlwind of air, fire, water, or earth. In each case, the attack causes damage from a combination of smashing into the target plus the inherent properties of the element being used. Thus, fire would cause additional fire damage, water might drown the victim, air might pick the victim up and move him around, and earth could possibly suffocate the victim but is more likely just going to do more damage with the churning impact. More powerful monsters might create vortices with more interesting results including collateral damage to equipment, moving the target a long way, pulling the target down beneath the water or air, pulling the target into the elemental plane itself, stunning the target for some period of time, causing the target to drop items, etc.";
const genSpecAttack47 =
  "Emotion (despondency or sorrow). This special attack induces intense despondency or sorrow in the victim. As is the case with all special attacks involving emotion, creating the details of the special attack is a two-step process concerning (1) who is affected and (2) what happens when someone is affected. Here are some ideas about who might or might not be vulnerable: (1) anyone under a certain number of hit dice is automatically affected but those of higher level are at no risk, (2) anyone under a certain number of hit dice is automatically affected and those of higher level are affected if they fail a saving throw, (3) members of certain races or classes may be immune or might be particularly vulnerable, (4) anyone with intelligence less than a certain number might be automatically affected or might be immune, (5) those who are particularly close to the monster (or the locus of the emotion-effect) have a penalty on the saving throw, or, conversely, everyone beyond a certain distance gets a bonus, (6) the effect begins as a very low chance but increases as the combat progresses (a series of saving throws or some other “check” with increasing penalties). As a list of ideas for the effect of despondency, consider the following: (1) immobilized with sorrow, regret, grief, or ennui; (2) all die rolls are made with a penalty, (3) character departs to go and repair his miserable life, (4) character decides to end it all, and rolls an attack against himself, (5) character blames someone else for his miserable condition, and attacks them instead of the monster, (6) character risks dropping dead from melancholy. One interesting idea is that if the character escapes from this effect, he might be granted a bonus to attack the monster, in revenge. Players adore it when a special attack gets turned around into a bonus for them.";
const genSpecAttack48 =
  "Emotion (fear). The monster has a horrific appearance, changes into a horrific appearance, mentally induces fear, or has some other way of causing fear. Fear can be portrayed in a number of different ways, in terms of the attack's effect, and there are also a number of different ways to determine who is vulnerable to the attack. Here are some ideas about who might or might not be vulnerable: (1) anyone under a certain number of hit dice is automatically affected but those of higher level are at no risk, (2) anyone under a certain number of hit dice is automatically affected and those of higher level are affected if they fail a saving throw, (3) members of certain races or classes may be immune or might be particularly vulnerable, (4) anyone with intelligence less than a certain number might be automatically affected or might be immune, (5) those who are particularly close to the monster (or the locus of the fear-effect) have a penalty on the saving throw, or, conversely, everyone beyond a certain distance gets a bonus, (6) the fear effect begins as a very low chance but increases as the combat progresses (a series of saving throws or some other “check” with increasing penalties). As a list of ideas for the effect of fear, consider the following: (1) an ability score is vastly reduced until the fear goes away, (2) those affected act randomly according to a table you prepare, (3) those affected suffer combat penalties to hit and/or on damage, (4) those affected follow orders given by the source of fear, (5) those affected are paralyzed with fear, (6) those affected function as a lower-level character, (7) running away (8) chance of death from fear.";
const genSpecAttack49 =
  "Emotion (love or happiness). This special attack induces the emotion of love or happiness in the victim - probably directed toward the monster using the special attack, but possibly as a way of immobilizing the target. As is the case with all special attacks involving emotion, creating the details of the special attack is a two-step process concerning (1) who is affected and (2) what happens when someone is affected. Here are some ideas about who might or might not be vulnerable: (1) anyone under a certain number of hit dice is automatically affected but those of higher level are at no risk, (2) anyone under a certain number of hit dice is automatically affected and those of higher level are affected if they fail a saving throw, (3) members of certain races or classes may be immune or might be particularly vulnerable, (4) anyone with intelligence less than a certain number might be automatically affected or might be immune, (5) those who are particularly close to the monster (or the locus of the emotion-effect) have a penalty on the saving throw, or, conversely, everyone beyond a certain distance gets a bonus, (6) the effect begins as a very low chance but increases as the combat progresses (a series of saving throws or some other “check” with increasing penalties). As a list of ideas for the effect of love/happiness, consider the following: (1) the victim drops everything to grovel before, speak poetry to, or praise the monster (or some other focus including other characters or shiny objects), (2) the victim tries to assist and protect the monster, (3) the victim changes sides and follows the monster's orders.";
const genSpecAttack50 =
  "Emotion (rage). This special attack induces rage, either by taunting, mental manipulation, or temporary insanity. As is the case with all special attacks involving emotion, creating the details of the special attack is a two-step process concerning (1) who is affected and (2) what happens when someone is affected. Here are some ideas about who might be vulnerable: (1) anyone under a certain number of hit dice is automatically affected but those of higher level are at no risk, (2) anyone under a certain number of hit dice is automatically affected and those of higher level are affected if they fail a saving throw, (3) members of certain races or classes may be immune or might be particularly vulnerable, (4) anyone with intelligence less than a certain number might be automatically affected or might be immune, (5) those who are particularly near the monster (or the locus of the rage-effect) have a penalty on the saving throw, or, conversely, everyone beyond a certain distance gets a bonus, (6) the rage effect begins as a very low chance but increases as the combat progresses (a series of saving throws or some other “check” with increasing penalties). As a list of ideas for the effect of rage, consider the following: (1) victim attacks with melee weapons and cannot voluntarily retreat, (2) the rage is a distraction, causing combat penalties and restricting spell casting, (3) the rage gives a bonus on one hand (damage rolls, perhaps) but there is a more dangerous penalty associated with it as well, such as a penalty on saving throws, attack rolls, inability to retreat, inability to do anything more subtle than a frontal assault, etc. (4) the rage is so fierce that the victim is actually paralyzed by it. It is possible that the “rage” is not automatically going to be directed at the monster using the special attack, either: it might cause members of the party to attack each other, or it might be an “attack” that's used to strengthen the monster's minions and allies (in which case, it might be a benefit with no particular downside, like a to-hit bonus).";
const genSpecAttack51 =
  "Energy Vortex. Similar to the “Elemental Vortex,” this is an attack in which the monster calls forth a whirlwind of some kind of “energy,” including electricity, magical force, or mental force. The victim would suffer damage, but the distinguishing feature of this sort of attack is either that the victim is picked up and moved by the attack or is trapped inside it until he escapes or the duration expires (duration might be as long as the monster concentrates on maintaining the effect, which is not good for the victim).";
const genSpecAttack52 =
  "Fire (special). In this case, the fire involved in the special attack isn't normal fire - it's more of a special effect for something else. Magical fires can do all sorts of things rather than just burn, so this is a very broad category. Possible effects include: lowering an ability score, acting randomly, suffering combat penalties, following enemy orders, floating up into the air, losing the ability to act, losing the ability to cast spells, functioning as a lower-level character, running away, suffering saving throw penalties, suffering hallucinations, and suffering from a heightened emotion such as rage or sorrow. The fire doesn't have to be magical - it could just be that this particular monster's fire-breath causes people to flee, for instance. On the other hand, the whole “fire” thing might be little more than a special effect for an attack that's really all about floating the opponent helplessly into the air.";
const genSpecAttack53 =
  "Fire Damage (affects action). The attack causes fire damage to the target, but there's also a special effect involved - if the victim fails some sort of check (morale, saving throw, percentile chance, etc) he reflexively takes some action in response to the fire. These could include: fleeing for a couple of combat rounds, trying to put out the fire, or writhing in pain.";
const genSpecAttack54 =
  "Fire Damage (hit or miss). The attack causes fire damage, but a successful saving throw means that the target incurs no damage. In other words, the saving throw functions as a to-hit roll and if it is successful the attack missed. Another way of handling this is to require an attack roll for the attack itself (and then don't allow a saving throw). Items in the area may take collateral damage (a saving throw or a “hot” effect), but only if the target failed the saving throw - because if the target makes the saving throw, the items were presumably not exposed to the fire in the first place.";
const genSpecAttack55 =
  "Fire Damage (progressive). The victim takes fire damage, but continues to take damage in later combat rounds until the fire has run its course. The attack is most likely made with a burning substance as opposed to a burst of flame - the monster spat burning oil, phosphorus, Greek fire, napalm, or lots of burning coals - or some sort of magically lingering fire. It is the continued burning of the substance that causes the ongoing damage. Exactly what effect the continuing damage will have is up to you. It would almost certainly prevent spell casting, but might also create penalties on saving throws, attack rolls, and/or movement rate.";
const genSpecAttack56 =
  "Fire Damage (save for half damage). The attack causes fire damage, reduced by half with a successful saving throw. Fire may also cause collateral damage to items, depending on how “strong” you want the attack to be. If the fire causes collateral damage, you could reflect this in a variety of ways: (1) require flammable items to make a saving throw or be ruined (or ignite), (2) decide that certain items such as cloth will automatically - no saving throw - smolder (and cause damage to the wearer) unless time is spent extinguishing them, (3) take into account that metal retains heat and build in some process to handle “hot” armor and weapons. The basic form of a fire attack, though, is simply to require a saving throw for vulnerable items - whether or not the target took half damage because he made a saving throw.";
const genSpecAttack57 =
  "Hallucinations or Illusions (basic). The special attack causes hallucinations or illusions for those who are affected. The illusions might be bright colors, things that appear to be changing form, or whatever - what's important isn't the exact nature of the illusion but the effect it has on general combat (more complicated illusions are treated in a different category). The easiest way to come up with basic illusion/hallucination attacks is to determine first what they do, and then figure out what sort of illusion might create that effect. Possible results of a basic hallucination are as follows: (1) lowering an ability score while the hallucination is operating, (2) acting randomly according to some table of actions, (3) suffering combat penalties to hit, (4) following enemy orders or orders generated randomly by a sound-hallucination, (5) losing the ability to take any actions due to fascination, nausea, confusion, etc, (6) functioning as a lower-level character as a general way of reflecting that the character is distracted, (7) running away or moving randomly in response to the hallucinated reality, or (8) suffering saving throw penalties. As a basic example of thinking up the illusion based on the result: a hallucination which causes an attack penalty of -2 might be an illusion which blurs the outlines of the character's sight or shifts his vision slightly to the side of where things actually are. In addition to the combat-type basic illusions, there is another category of basic “camouflage-type” illusions used by ambush-monsters - these illusions don't necessarily create any sort of combat modifier, but they make the monster seem innocuous until it is ready to attack or lead the party toward some attractive-looking goal where the monster has an advantage. These would include monsters that are invisible, monsters that can make themselves look like stone walls or statues, a monster that can make people think it's a treasure chest, etc.";
const genSpecAttack58 =
  "Hallucinations or Illusions (complex). The special attack causes a hallucination or illusion that is too complex to be characterized with a modifier to die rolls or a table of random actions. An illusion of mirror images (giving the monster's opponents the chance to be attacking the “wrong” monster) is one example; another example is a hallucination that might cause damage to the victim, and a third example is a hallucination that creates the image of a deep pit between the monster and the victim. In general, these fall into the following categories: illusions that create false enemies, obscure or change the appearance of the enemies, create illusionary obstacles, create illusionary dangers (the appearance of a spell being cast, fake attacks, or some other type of illusionary assault), or otherwise prevent the victim from getting true information about the tactical situation. Exactly how these are handled is up to you - if the illusion is unusual, you might choose not to follow the “official” method for handling illusions, if your game has one. There is a wide variety of interesting ways to handle illusions, including saving throws, a “check” against intelligence or wisdom, or simply telling the player what the character sees and leaving it to the player to respond. In some cases, depending on the illusion, the way to handle it will be obvious; in other cases, the same illusion treated differently might as well be a different kind of special attack. Feel free to let your imagination roam: what sort of illusion might you create if you were a monster? One last point: there is a big difference between a monster that creates one specific illusion (mirror images, for example) and one that can create all kinds of illusions in response to the circumstances. The latter type of monster is very powerful, and you might want to think of its abilities in terms of spells rather than a general ability to create illusions.";
const genSpecAttack59 =
  "Ice (blasting). This sort of attack is partially about the cold temperature, but there's a “blasting” component to it as well. Such effects could include: knocking the target backward, knocking the target prone, blowing items out of the target's hands, etc.";
const genSpecAttack60 =
  "Ice (immobilizing). This sort of attack isn't all about the temperature; it will probably cause some hit point damage, but the main feature of the attack is that it uses frozen water to immobilize the target. It might be creation of a block of ice (“it froze the air itself!”), or it might be a matter of breathing a storm of ice particles that create a block, wall, or chunk. If the monster is very powerful or highly magical, the ice might have other dangerous properties - suffocation, ongoing damage, or a chance of instant death from hypothermia all being possibilities.";
const genSpecAttack61 =
  "Immobilize (by an activity). Although many of the special attacks listed here would have the effect of immobilizing the victim, this entry addresses immobilization-type attacks as a group. Here is a series of activities which could cause a character to be effectively immobilized: dancing, twitching, laughing, vomiting, nausea, confusion, jumping, floating, talking, scratching, begging for mercy, thinking, arguing, holding one's breath, hiding, and meditating.";
const genSpecAttack62 =
  "Implant Eggs or Young. This special attack implants the victim with eggs or larvae, or in some way makes him into a host for the attacker's reproduction - which can include a magical transformation into the same sort of creature (possibly independent, possibly a slave of the attacker). There are several possible variables to work with when designing this sort of special attack. First, the trigger - it might be that a successful hit automatically begins the process, it might be that there is a saving throw required after each hit, it might be that each hit has a percentage chance of causing the effect, or it might be that the “egg-laying” effect only happens when the victim is dead, knocked unconscious, or rendered helpless by the attack. Secondly, the remedy - the process would be counteracted differently depending on whether the “eggs” are considered a poison, a curse, or a disease. Thirdly, the gestation period - it might run from only a couple of combat rounds to more than a week in duration (giving the adventurers much more time to find a remedy back in the civilized world). Fourthly, the effects during gestation - perhaps the victim remains unconscious or in suspended animation until the eggs hatch (or his body alters, or the implanted creature eats its way out, or whatever), perhaps he can wake up and function normally until his sudden demise as a character, or perhaps you can think of one or two “stages” of the process in which the victim becomes weaker or changes as a result of being used as a host organism.";
const genSpecAttack63 =
  "Insanity (strategic). “Strategic” insanity, as opposed to “tactical” insanity, is a form of insanity in which the effects aren't bundled up in the game rules, but are reflected in the roleplaying and in the non-combat side of the game. Examples include various phobias, aversions, and manias. Hysterical blindness is another good example - a condition that can suddenly appear when the character is under stress.";
const genSpecAttack64 =
  "Insanity and Confusion (tactical). The special attack drives the victim temporarily or permanently insane. The characteristic example of this sort of attack is confusion, which causes victims to act according to a random table.";
const genSpecAttack65 =
  "Intelligence Loss. The attack drains one or more points of intelligence from the victim. The attacker may or may not gain a benefit from the drain (additional hit points, to-hit bonuses, etc) depending upon whether it seems to fit well with the concept. If the victim reaches an intelligence of 0 as a result of successive attacks, one of several things might happen: the victim might die and become a creature similar to the attacker or become a mindless host for the attacker's larval offspring (mind-leeches, or whatever). Another possibility is that the victim just dies, and a third possibility is that restoring the lost points becomes harder - what might have returned naturally is now a permanent condition requiring spells or divine intervention to reverse. Note that the drain might be temporary or permanent - this is up to you as a matter of how powerful you want the monster to be.";
const genSpecAttack66 =
  "Light, Dark, and Shadow. The monster uses light, darkness, or shadow as a special attack. Consider some of the following: (1) a floating weapon or dangerous coalescence of light or darkness, which attacks once brought into being, (2) creates darkness to effectively blind the enemy, (3) blasts of damaging light, (4) the monster can compress and concentrate light or darkness to make some interesting form of attack.";
const genSpecAttack67 =
  "Luck. This special attack gives the victim bad luck (reflected with die roll penalties). The question is: what sort of bad luck? Is it just a curse that makes you inflict less damage, or is it a wide-ranging effect that doesn't just make you miss opponents but also means you always get a fly in your beer at the local tavern? In addition to whatever specific die roll modifier this attack causes, some monsters might deliver bad luck in very specific categories: the beautiful woman type monster might deliver a curse of bad luck with the opposite gender; the earth-elemental type monster might deliver bad luck involving gemstones; the dryad-like creature might give bad luck outdoors, or involving wooden items.";
const genSpecAttack68 =
  "Magic Drain (items). The special attack drains magic items of their power (and might or might not give the monster additional power as a result). Items can be drained temporarily or permanently, and they can also be drained in a way that gives them a chance to fail when used as opposed to being completely “dead.”";
const genSpecAttack69 =
  "Magic Drain (spells). The special attack removes, to some degree or other, a spell caster's ability to cast spells. The attack might remove a single spell from the caster's mental inventory, it might remove all spells, it might remove particular spells, it might remove spells of a certain level or higher (or lower), or it might lower the caster's effective level of experience. Alternatively, the attack might cause all the caster's spells to function sub-normally, or create a chance of failure when the caster tries to cast a spell. In the case of powerful monsters, draining spell power from a caster might also strengthen the monster; giving it extra hit dice, hit points, or a combat bonus. In the case of extremely powerful monsters, whatever spell was drained might actually go to the monster and give it the ability to cast that spell.";
const genSpecAttack70 =
  "Magic or Mental Force (slam). The special attack uses magical force or telekinesis to smash the victim into something, or smash something into the victim. This includes hitting the victim with magic force alone (i.e., no actual object). This is a broad category: the attacker might or might not need to make a to-hit roll, and the defender might or might not have the chance to avoid the blow with a saving throw or other means of lessening the damage. More powerful versions of this attack might do one or more of the following: push back the victim, hurl back the victim, make the victim drop items in hand, stun the victim, knock the victim unconscious, or even have a chance to kill the victim outright.";
const genSpecAttack71 =
  "Memory (steal ability). This special attack allows the monster to use some ability or skill known by the target. The most obvious example of this is casting a spell, but combat bonuses or other advantages could be targeted by such an attack. Even the victim's target number for saving throws, for example, could be “stolen” if it is more favorable than the monster's normal target number. It is also possible for a memory-affecting special attack to target only the magically related memories of a target, stripping away spells or spell casting abilities but leaving combat and other skills unaffected. This more specific type of memory attack would generally be found in creatures with some relation to wizardly magic (e.g., created in a wizard's lab, bred to fight wizards, etc), a relation to divine or unholy power (e.g., the monster is a remnant of some ancient divine retribution, is a parasite of divine power, etc), or feeds specifically on magic power.";
const genSpecAttack72 =
  "Memory Drain (experience). Memory-draining special attacks are generally targeted at the victim's level or experience points. The attack would either remove (temporarily or permanently, depending on how you decide to design it) one or two levels of experience or a set number of experience points.";
const genSpecAttack73 =
  "Movement Inhibited (external). Some sort of very weak binding or entangling inhibits the victim's movements. Victim suffers one or more of the following: a penalty to hit, a penalty to armor class, and/or reduction in spell casting ability (perhaps only “easy” spells, perhaps a chance of spell failure, perhaps an increase in casting time). There is probably also some reduction in the victim's movement rate. The nature of the binding force can include: filaments of magical energy, thickened air, vacuum power or wind, clothing becoming brittle or cumbersome, etc.";
const genSpecAttack74 =
  "Movement Prevented (external). Some sort of binding or entangling prevents the victim from moving. The severity of the attack can range from complete helplessness to merely being held in one place (but otherwise able to take actions). The nature of the binding force can include: filaments of magical energy, thickened air, a coagulated blob of magical glue, a natural adhesive, swarms of infinitesimal spirits holding the victim in place, the stones of the floor grabbing his ankles, a spider web, or animated vines or tentacles.";
const genSpecAttack75 =
  "Open Planar Gate. The monster can open a gate into some other reality. This could be an escape mechanism, a way of summoning allies, or a way of blasting the area with weirdness from the other plane. Even a fairly mundane little mole-like critter becomes interesting if it can burrow into the tenth dimension and come out behind you. Indeed, if it can open a gate through time, it might be able to come out and attack you simultaneously from two different places (of course, then it would disappear for a few moments since it used itself as a special attack a few moments earlier…). If a planar gate is used to summon allies (again, keep in mind that even minor monsters - like a planar ant - might be able to summon more of their own kind). If the gate is an escape mechanism, perhaps it's possible for the adventurers to follow the monster into some strange and alien realm where it makes its home - and possibly has a different bodily form.";
const genSpecAttack76 =
  "Paralysis. The special attack causes paralysis for a random number of combat rounds, minutes, or hours. A very powerful monster might cause permanent paralysis as a form of curse, poison, or disease.";
const genSpecAttack77 =
  "Poison (lethal). Lethal poisons cause death, but death is not necessarily immediate. A slow-onset poison might cause some sort of debilitating effects during the onset period (such as the victim being incapacitated with pain, or becoming unconscious), or it might simply cause a progressive weakness that isn't reflected in terms of the game's numbers… until the character drops dead.";
const genSpecAttack78 =
  "Poison (non-lethal). Non-lethal poisons can have a variety of effects: some might be temporary effects until the effects of the poison have worn off, but others might be permanent debilities until some sort of magic has been used to reverse the damage caused by the poison.";
const genSpecAttack79 =
  "Raise, Create, or Summon Undead. Undead monsters aren't the only ones who can use undead monsters as allies or minions. More importantly, not all undead must necessarily be undead - a statement which obviously requires clarification. Animated bodies need not be the result of black magic (which is the case for, say, the standard zombie). But what about bodies animated or controlled by a plant - is this technically an undead zombie? Will it necessarily work in exactly the same way as an undead zombie just because it's a moving human corpse? If your answer is “no,” then you've just opened up the realm of the plant-undead, the virally-controlled undead, the mechanically-controlled undead, the psionically-controlled undead … all kinds of creepy minions and transformations that can be used to develop monsters and their abilities.";
const genSpecAttack80 =
  "Senses (overstimulate). The five senses are sight, hearing, touch, taste, and smell, and each of them could be overstimulated by a monster by means of a special attack. I don't necessarily mean that the monster is hideously ugly, sounds awful, feels awful, tastes awful or smells awful, although if one of those trips off an inspiration, then run with it. What's meant here is that the monster affects one of the victim's senses to make it too powerful for effective use. For example, if the special attack affects the victim's sense of smell, all smells might become so powerful that the victim falls prey to nausea. If the attack affects sight, the victim might be overcome by light sensitivity or have vision so microscopic that he can't perceive what's happening around him. Since there is a wide variety of possibly “effects” stemming from sensory overstimulation, here is a quick list of possibilities to get the mind working: (1) temporarily lowering an ability score (or all ability scores), (2) acting randomly, (3) suffering combat penalties, (4) losing the ability to act due to nausea, fascination, or confusion, (5) functioning as a lower-level character, (6) running away or moving randomly, (7) suffering saving throw penalties, (8) dropping any items held in hand.";
const genSpecAttack81 =
  "Senses (remove capability). The five senses are sight, hearing, touch, taste, and smell. Only sight and hearing have much effect in game terms, so I've just lumped them all together into one entry on this table. The special attack causes blindness (or makes lots of things invisible), or it causes deafness (or keeps sound from functioning in the are) - alternatively, it removes the sense of touch, taste or smell from the target (or negates feeling, taste or smells within the area of effect).";
const genSpecAttack82 =
  "Size and Density. The special attack changes the size or density of the victim (and a beneficial form of it might also be usable to help allies if the monster is a leader-type). Growing and shrinking allies and enemies respectively is a fairly obvious use of this sort of ability, and it's easy to generate a set of modifiers as required. Manipulating density and weight is a bit more open ended. Can the monster make people weightless so they can levitate or be levitated? How about too heavy to move? Perhaps the effect only works on metal or some other substance.";
const genSpecAttack83 =
  "Sleep and Catatonia. The special attack causes magical sleep, normal sleep, catatonia, or suspended animation. In some cases the effect might be automatic against targets with a lower number of hit dice (or levels), or it might permit a saving throw. It could also affect only those with intelligence or wisdom lower than a target number, or affect only a certain total number of hit dice within an area. Onset is probably immediate, but it would also be possible that there's an intermediate, “sleepy” phase in which the victim is still functioning with combat penalties before actually falling into the magical sleep. Powerful sleep-type attacks might induce this “sleepy” condition even if the victim makes a successful saving throw. In some cases, particular dreams, or dreams sent by the attacker, might be an important part of the attack in addition to putting the victim to sleep.";
const genSpecAttack84 =
  "Slow. This sort of special attack slows down the victim, probably to half speed at everything, but possibly only in terms of movement or attack speed - it depends on how the monster does it. The effect might just be magic which slows down opponents, it might be related to manipulation of time or other dimensions, or it might be that the monster produces an external cause like glue or webs that slow people down.";
const genSpecAttack85 =
  "Sound (action-causing). The monster speaks or makes sounds that compel certain actions in the unfortunate listener. This isn't control by the monster, because the monster can't fine-tune anything, but in many ways the effect is the same. Examples include: approaching the monster, becoming paralyzed, running away, removing armor, attacking, hiding, etc.";
const genSpecAttack86 =
  "Sound (control). Many folkloric monsters use sound to control others - whether by means of song, speech, or spell. There are many ways to represent different degrees of mental control, and many ways to determine whether a person is affected. For example, degrees of mental control include: (1) victim follows all commands like a puppet, (2) victim sees the controller as his friend but will not put himself into mortal danger, (3) controller can only command the victim to perform certain actions, but other actions don't fall within the scope of the magic - for example, a monster that can “call” the victim to a certain place, but can't order the victim to attack its enemies. In terms of ways to determine if a target is affected, here is another list of possibilities: (1) anyone under a certain number of hit dice is automatically affected but those of higher level are at no risk, (2) anyone under a certain number of hit dice is automatically affected and those of higher level are affected if they fail a saving throw, (3) members of certain races or classes may be immune or might be particularly vulnerable, (4) anyone with intelligence less than a certain number might be automatically affected or might be immune, depending on the nature of the sound/persuasion being used, (5) anyone within hearing gets a saving throw, (6) those who are particularly close to the sound have a penalty on the saving throw, or, conversely, everyone beyond a certain distance gets a bonus. The duration of sound-control attacks is another factor that can be used to create different types of challenges: in some cases, the control might end as soon as the sound ends, but in other cases the control might be established irrevocably.";
const genSpecAttack87 =
  "Sound (distraction). The monster uses speech, sound, or song to distract or immobilize its enemies. It may be that the sound itself is so discordant or so beautiful that it creates the distraction, or it could be that the sound evokes such a strong emotional response that the victim acts strangely or fights poorly. To run through these variables: if the sound or speech evokes an emotion, these could include joy, rage, hate, greed, fear, or adoration. The effects of such sound attacks could include: (1) temporarily lowering an ability score, (2) acting randomly, (3) suffering combat penalties, (4) following enemy orders, (5) losing the ability to act, (6) losing the ability to cast spells, (7) functioning as a lower-level character, (8) running away, (9) suffering saving throw penalties, (10) suffering hallucinations - or a combination of more than one of the above.";
const genSpecAttack88 =
  "Sound Damage (save for half damage). Sonic damage is a little hokey, but every once in a while it works (particularly with monsters based on real-world animals that use echolocation or are known for producing a characteristic sound. Sonic damage ordinarily wouldn't cause collateral damage to items or equipment, but glass is a natural candidate for being damaged in this way. I recommend avoiding the concept of sonic damage - sound works much better for mental control, combat penalties, preventing spell casting, and other such special effects than it does with the concept of taking actual hit point damage. At all costs, avoid thinking of sound damage in terms of vibration and frequency, and start thinking of it in terms of song and screech - or you'll make a serious misstep in terms of the “feel” of a fantasy game. This is even true if the monster is from the “voids between the stars” or from an alternate high-tech universe.";
const genSpecAttack89 =
  "Spell-like Abilities. The monster has a set group of abilities that function as spells, probably with a limited number of castings per day, per hour, per minute, or whatever. Unlike true spells, it may be that all monsters of this type have exactly the same spelllike abilities and can't change them from day to day (to my mind, this is what distinguishes “spell-like” from “spell,” but what's important here isn't to create clean categories, it's to muddle things together for maximum creative boost). Spell like abilities are normally, but not necessarily, best when all the abilities are obviously related to something about the monster. A monster from the elemental plane of fire should have mostly fire type abilities, and (interestingly) it is the non-fire abilities that will tend to make it stand out in the players' minds. If a fire-genie has several fire abilities but can also use mind-control, that's very distinctive. But if it has too many non fire-related abilities, it may fail to be memorable.";
const genSpecAttack90 =
  "Spells. The monster uses spells, or can use its special attack to deliver spells from a list identical to a magic-user of some defined level. Different monsters of the same type might have a different “selection” of spells.";
const genSpecAttack91 =
  "Strange Chemical (affects items). The special attack releases or creates a chemical that affects non-living substances. The affected substance might be wood, leather, paper, fires, metal, water, air, potions, magical ink, hair - the choices are pretty wideranging. The chemical reaction either destroys the substance, makes it multiply, or changes it into something else - and the interesting part might be the side effect of the reaction, too. Many chemical reactions give off energy, suck energy out of the air, create gases, and do all kinds of strange things. Most likely, the chemical reaction will change the liquid/gas/solid composition of a substance, or change it into another form (iron to rust, leather to powder, wood to stone, etc).";
const genSpecAttack92 =
  "Strange Chemical (affects person). The attack creates a chemical reaction of some kind - either the chemical is sprayed onto the victim or the attacker's gaze causes chemicals in the victim's body to change, or whatever. This is a huge category of possibilities, because a “chemical reaction” can explain any result whatsoever, especially if you throw in words like “enzymes,” and even more especially if the monster is from another plane of existence, another time, or from the “voids between the worlds.” On the other hand, traditionally folkloric monsters like griffons or dragons shouldn't have quasi-scientific explanations for what they do - use magic. Quasi-science is best for weirder monsters. Possibilities for strange chemical reactions include: lowering an ability score, acting randomly, suffering combat penalties, following enemy orders, floating up into the air, losing the ability to act, losing the ability to cast spells, functioning as a lower-level character, running away, suffering saving throw penalties, suffering hallucinations, and suffering from a heightened emotion such as rage or sorrow. Another way of looking at it is to think in terms of transformations: these could include skin turning into metal (or getting crusted with metal), gases that might be given off, medical symptoms (hemophilia), and factors such as weight, density, friction, adhesion, or release of energy.";
const genSpecAttack93 =
  "Strength Loss. The attack drains one or more points of strength from the victim. The attacker may or may not gain a benefit from the drain (additional hit points, to-hit bonuses, etc) depending upon whether it seems to fit well with the concept. If the victim reaches a strength score of 0 as a result of successive attacks, one of several things might happen: the victim might die and become a creature similar to the attacker, might just die, or might just lose the ability to naturally restore the lost strength points. Note that the drain might be temporary or permanent - this is up to you as a matter of how powerful you want the monster to be.";
const genSpecAttack94 =
  "Stun. The attack uses some kind of “special effect” to stun its victims. Possibilities include noise, electric shock, an ugly appearance, mystical rays, visions of the future, hallucinations, powerful emotions, a floating symbol, light, and the old standby … a powerful physical impact.";
const genSpecAttack95 =
  "Stupidity. The victim does not actually lose points of intelligence or wisdom, but his thinking is impaired enough to cause penalties on various actions. Spell casting is probably prevented entirely, but a weak version of this sort of attack might only prevent casting “harder” spells - or all spell casting might be subject to a chance of failure. This sort of attack could also lead to combat penalties: inability to use both a weapon and a shield at the same time, perhaps a to-hit penalty, etc. The way in which the attack causes stupidity could include distraction by overloading one of the victim's emotions (joy, rage, hate, greed, fear); an alchemical reaction (mysterious chemicals in the creature's spittle); the aftereffects of an electrical shock; some sort of mental numbing; sapping away the thoughts themselves; or a very weak poison, curse, or disease. The duration could range from only a couple of combat rounds to days in length.";
const genSpecAttack96 =
  "Telekinesis and Teleportation. These special attacks are used to move enemies into bad places and smack them with things. Powerful monsters will be able to use the power more flexibly: for example, a brain-lord might be able to choose how far and when he wants to teleport himself of a target, but a brain-munchkin might teleport a specific distance at random intervals with no ability to teleport an enemy at all.";
const genSpecAttack97 =
  "Transformation (basic polymorph). The special attack turns the victim into an animal or some other form (such as an object). Stronger, smarter, or more magical creatures might have the ability to choose what form they will polymorph victims into, while other monsters might only have the ability to turn people specifically into frogs. The duration of the transformation is fairly important - does it end when the attacker is killed, does it end after a set duration, or is it permanent? Another consideration is whether the victim retains his own mind (and the player if left controlling a rabbit) or whether the change is more than just a change in outer form. In some cases, the attack might be part of a one-two punch; if the monster controls all wolves, and can turn people into wolves, the attack can be used to turn enemies into allies - giving the other party members the dilemma of whether to attack their polymorphed-and-controlled ally.";
const genSpecAttack98 =
  "Transformation (basic substance). This special attack changes one substance into another or changes the state of matter. (See Table 2-81)";
const genSpecAttack99 =
  "Weakness. Victim suffers one or more of the following: a penalty to hit, a penalty to damage, and/or the chance to drop any items he is holding. Actual strength score is not necessarily affected. The way in which the attack causes weakness could include overloading one of the victim's emotions (joy, rage, hate, greed, fear); an alchemical reaction (mysterious chemicals in the creature's spittle); the aftereffects of an electrical shock; sapping of willpower; or a very weak poison, curse, or disease. The duration could range from only a couple of combat rounds to days in length.";
const genSpecAttack100 =
  "Wisdom Loss. The attack drains one or more points of wisdom from the victim. The attacker may or may not gain a benefit from the drain (additional hit points, to-hit bonuses, etc) depending upon whether it seems to fit well with the concept. If the victim reaches a wisdom score of 0 as a result of successive attacks, one of several things might happen: the victim might die and become a creature similar to the attacker, or might remain alive as the attacker's mental slave. Another possibility is that the victim just dies, and a third possibility is that restoring the lost points becomes harder - what might have returned naturally is now a permanent condition requiring spells or divine intervention to reverse. Note that the drain might be temporary or permanent - this is up to you as a matter of how powerful you want the monster to be.";

const genSpecAttackArray = [
  genSpecAttack01,
  genSpecAttack02,
  genSpecAttack03,
  genSpecAttack04,
  genSpecAttack05,
  genSpecAttack06,
  genSpecAttack07,
  genSpecAttack08,
  genSpecAttack09,
  genSpecAttack10,
  genSpecAttack11,
  genSpecAttack12,
  genSpecAttack13,
  genSpecAttack14,
  genSpecAttack15,
  genSpecAttack16,
  genSpecAttack17,
  genSpecAttack18,
  genSpecAttack19,
  genSpecAttack20,
  genSpecAttack21,
  genSpecAttack22,
  genSpecAttack23,
  genSpecAttack24,
  genSpecAttack25,
  genSpecAttack26,
  genSpecAttack27,
  genSpecAttack28,
  genSpecAttack29,
  genSpecAttack30,
  genSpecAttack31,
  genSpecAttack32,
  genSpecAttack33,
  genSpecAttack34,
  genSpecAttack35,
  genSpecAttack36,
  genSpecAttack37,
  genSpecAttack38,
  genSpecAttack39,
  genSpecAttack40,
  genSpecAttack41,
  genSpecAttack42,
  genSpecAttack43,
  genSpecAttack44,
  genSpecAttack45,
  genSpecAttack46,
  genSpecAttack47,
  genSpecAttack48,
  genSpecAttack49,
  genSpecAttack50,
  genSpecAttack51,
  genSpecAttack52,
  genSpecAttack53,
  genSpecAttack54,
  genSpecAttack55,
  genSpecAttack56,
  genSpecAttack57,
  genSpecAttack58,
  genSpecAttack59,
  genSpecAttack60,
  genSpecAttack61,
  genSpecAttack62,
  genSpecAttack63,
  genSpecAttack64,
  genSpecAttack65,
  genSpecAttack66,
  genSpecAttack67,
  genSpecAttack68,
  genSpecAttack69,
  genSpecAttack70,
  genSpecAttack71,
  genSpecAttack72,
  genSpecAttack73,
  genSpecAttack74,
  genSpecAttack75,
  genSpecAttack76,
  genSpecAttack77,
  genSpecAttack78,
  genSpecAttack79,
  genSpecAttack80,
  genSpecAttack81,
  genSpecAttack82,
  genSpecAttack83,
  genSpecAttack84,
  genSpecAttack85,
  genSpecAttack86,
  genSpecAttack87,
  genSpecAttack88,
  genSpecAttack89,
  genSpecAttack90,
  genSpecAttack91,
  genSpecAttack92,
  genSpecAttack93,
  genSpecAttack94,
  genSpecAttack95,
  genSpecAttack96,
  genSpecAttack97,
  genSpecAttack98,
  genSpecAttack99,
  genSpecAttack100,
];

/* Special Defenses and Abilities */
const specDefenseAbility01 = "Alters own form: changed version of the normal shape";
const specDefenseAbility02 = "Alters own form: complete polymorph";
const specDefenseAbility03 = "Ambushes from above";
const specDefenseAbility04 = "Ambushes from burrow, underneath mud, or water";
const specDefenseAbility05 = "Armor plates";
const specDefenseAbility06 = "Burrows";
const specDefenseAbility07 = "Camouflage";
const specDefenseAbility08 = "Cannot be attacked from behind (multiple eyes, radial symmetry)";
const specDefenseAbility09 = "Cannot be damaged by metal";
const specDefenseAbility10 = "Casts one or more defensive spells as natural attribute";
const specDefenseAbility11 = "Catches or deflects missiles";
const specDefenseAbility12 = "Chitin";
const specDefenseAbility13 = "Climbs";
const specDefenseAbility14 = "Creates illusionary doubles";
const specDefenseAbility15 =
  "Creates shield or walls using a type of energy such as electricity, fire, water, air, sound, acid, plant, mental, or magical force.";
const specDefenseAbility16 = "Damaged only by magic or silver weapons";
const specDefenseAbility17 = "Different armor class in different places on body";
const specDefenseAbility18 = "Dispels magic";
const specDefenseAbility19 = "Fast moving";
const specDefenseAbility20 = "Flies";
const specDefenseAbility21 = "Four or more attacks";
const specDefenseAbility22 = "Grows or shrinks";
const specDefenseAbility23 = "Half damage from blunt weapons";
const specDefenseAbility24 = "Half damage from cold";
const specDefenseAbility25 = "Half damage from cutting weapons";
const specDefenseAbility26 = "Half damage from fire";
const specDefenseAbility27 = "Half damage from non-magical weapons";
const specDefenseAbility28 = "Half damage from piercing weapons";
const specDefenseAbility29 = "Hard to hit until it attacks";
const specDefenseAbility30 = "Has an internal organ that can be used in making potions or creating magic items";
const specDefenseAbility31 = "Has an unusual gland that creates energy of some kind: light, acid, magical force, fire, air, etc.";
const specDefenseAbility32 = "Has different degrees of spell resistance/physical defense when in different body forms";
const specDefenseAbility33 = "Has signature body part: gem";
const specDefenseAbility34 = "Has signature body part: magic horn";
const specDefenseAbility35 = "Has signature body part: magical eye";
const specDefenseAbility36 = "Heals self";
const specDefenseAbility37 = "Illusions distract attackers or divert attacks";
const specDefenseAbility38 = "Immune to acid";
const specDefenseAbility39 = "Immune to blunt weapons";
const specDefenseAbility40 = "Immune to certain spells: acid";
const specDefenseAbility41 = "Immune to certain spells: charm/sleep/mental control";
const specDefenseAbility42 = "Immune to certain spells: cold";
const specDefenseAbility43 = "Immune to certain spells: electrical";
const specDefenseAbility44 = "Immune to certain spells: fire";
const specDefenseAbility45 = "Immune to certain spells: transmutations";
const specDefenseAbility46 = "Immune to cold";
const specDefenseAbility47 = "Immune to fire";
const specDefenseAbility48 = "Immune to piercing weapons";
const specDefenseAbility49 = "Immune to sharp weapons";
const specDefenseAbility50 = "Immune to slashing weapons";
const specDefenseAbility51 = "Improved/restored by cold attacks";
const specDefenseAbility52 = "Improved/restored by electrical attacks";
const specDefenseAbility53 = "Improved/restored by fire attacks";
const specDefenseAbility54 = "Incorporeal travel/phases";
const specDefenseAbility55 = "Ink-cloud type escape";
const specDefenseAbility56 = "Its eggs are very valuable";
const specDefenseAbility57 = "Jet propulsion like squid";
const specDefenseAbility58 = "Leaps";
const specDefenseAbility59 = "Leaps to attack";
const specDefenseAbility60 = "Levitates/floats";
const specDefenseAbility61 = "Minimum intelligence attribute required to inflict spell damage";
const specDefenseAbility62 = "Minimum strength attribute required to cause physical damage";
const specDefenseAbility63 = "Owns a signature item: amulet";
const specDefenseAbility64 = "Owns a signature item: orb";
const specDefenseAbility65 = "Owns an item it created internally then spat out or secreted; takes time to create another one";
const specDefenseAbility66 = "Percentile magic resistance";
const specDefenseAbility67 = "Pulls itself on strands it fires/throws";
const specDefenseAbility68 = "Reflects all spells";
const specDefenseAbility69 = "Reflects spells of particular type";
const specDefenseAbility70 = "Regenerates";
const specDefenseAbility71 = "Regenerates damage";
const specDefenseAbility72 = "Rises from dead unless killed by particular substance (holy water, silver weapon, fire, etc)";
const specDefenseAbility73 = "Secondary attack possible after creature hits with its primary attack";
const specDefenseAbility74 = "Secondary or rear claws";
const specDefenseAbility75 = "Shifts planes";
const specDefenseAbility76 = "Splits or fissions when attacked by bladed weapons";
const specDefenseAbility77 = "Splits or fissions when attacked by fire";
const specDefenseAbility78 = "Stalks before attacking";
const specDefenseAbility79 = "Summons or calls animal allies";
const specDefenseAbility80 = "Summons or calls more of its own type";
const specDefenseAbility81 = "Swims";
const specDefenseAbility82 = "Swings from branches/ceilings";
const specDefenseAbility83 = "Teleports";
const specDefenseAbility84 = "Thick hide";
const specDefenseAbility85 = "Three heads";
const specDefenseAbility86 = "Time stop/slow of some kind";
const specDefenseAbility87 = "Transforms self to energy form: acid";
const specDefenseAbility88 = "Transforms self to energy form: air vortex";
const specDefenseAbility89 = "Transforms self to energy form: electric";
const specDefenseAbility90 = "Transforms self to energy form: fire/lava/heat";
const specDefenseAbility91 = "Transforms self to energy form: ice/snow/pure cold";
const specDefenseAbility92 = "Transforms self to energy form: magical force";
const specDefenseAbility93 = "Transforms self to energy form: water vortex";
const specDefenseAbility94 = "Turns incorporeal";
const specDefenseAbility95 = "Turns into another type of animal/monster for combat";
const specDefenseAbility96 = "Two heads";
const specDefenseAbility97 = "Uses signature type of steed";
const specDefenseAbility98 = "Uses signature type of vehicle";
const specDefenseAbility99 = "Victims cannot be raised from dead";
const specDefenseAbility100 = "Weakness: additional damage from energy form: acid, fire, water, air, earth, magical force";

const specDefenseAbilityArray = [
  specDefenseAbility01,
  specDefenseAbility02,
  specDefenseAbility03,
  specDefenseAbility04,
  specDefenseAbility05,
  specDefenseAbility06,
  specDefenseAbility07,
  specDefenseAbility08,
  specDefenseAbility09,
  specDefenseAbility10,
  specDefenseAbility11,
  specDefenseAbility12,
  specDefenseAbility13,
  specDefenseAbility14,
  specDefenseAbility15,
  specDefenseAbility16,
  specDefenseAbility17,
  specDefenseAbility18,
  specDefenseAbility19,
  specDefenseAbility20,
  specDefenseAbility21,
  specDefenseAbility22,
  specDefenseAbility23,
  specDefenseAbility24,
  specDefenseAbility25,
  specDefenseAbility26,
  specDefenseAbility27,
  specDefenseAbility28,
  specDefenseAbility29,
  specDefenseAbility30,
  specDefenseAbility31,
  specDefenseAbility32,
  specDefenseAbility33,
  specDefenseAbility34,
  specDefenseAbility35,
  specDefenseAbility36,
  specDefenseAbility37,
  specDefenseAbility38,
  specDefenseAbility39,
  specDefenseAbility40,
  specDefenseAbility41,
  specDefenseAbility42,
  specDefenseAbility43,
  specDefenseAbility44,
  specDefenseAbility45,
  specDefenseAbility46,
  specDefenseAbility47,
  specDefenseAbility48,
  specDefenseAbility49,
  specDefenseAbility50,
  specDefenseAbility51,
  specDefenseAbility52,
  specDefenseAbility53,
  specDefenseAbility54,
  specDefenseAbility55,
  specDefenseAbility56,
  specDefenseAbility57,
  specDefenseAbility58,
  specDefenseAbility59,
  specDefenseAbility60,
  specDefenseAbility61,
  specDefenseAbility62,
  specDefenseAbility63,
  specDefenseAbility64,
  specDefenseAbility65,
  specDefenseAbility66,
  specDefenseAbility67,
  specDefenseAbility68,
  specDefenseAbility69,
  specDefenseAbility70,
  specDefenseAbility71,
  specDefenseAbility72,
  specDefenseAbility73,
  specDefenseAbility74,
  specDefenseAbility75,
  specDefenseAbility76,
  specDefenseAbility77,
  specDefenseAbility78,
  specDefenseAbility79,
  specDefenseAbility80,
  specDefenseAbility81,
  specDefenseAbility82,
  specDefenseAbility83,
  specDefenseAbility84,
  specDefenseAbility85,
  specDefenseAbility86,
  specDefenseAbility87,
  specDefenseAbility88,
  specDefenseAbility89,
  specDefenseAbility90,
  specDefenseAbility91,
  specDefenseAbility92,
  specDefenseAbility93,
  specDefenseAbility94,
  specDefenseAbility95,
  specDefenseAbility96,
  specDefenseAbility97,
  specDefenseAbility98,
  specDefenseAbility99,
  specDefenseAbility100,
];
