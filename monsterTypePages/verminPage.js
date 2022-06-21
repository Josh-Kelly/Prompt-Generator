function rollProfile() {
    const firstVerminCombRand = Math.floor(Math.random()*firstVerminCombArray.length);
    const firstVerminComb = firstVerminCombArray[firstVerminCombRand];

    const secondVerminCombRand = Math.floor(Math.random()*secondVerminCombArray.length);
    const secondVerminComb = secondVerminCombArray[secondVerminCombRand];

    document.getElementById('profileText').innerText = '';
    document.getElementById('profileText').innerText = `${firstVerminComb} ${secondVerminComb}`;
}

function rollSpecialFeature() {
    const specFeatureRand = Math.floor(Math.random()*specFeatureArray.length);
    const specFeature = specFeatureArray[specFeatureRand];

    if (specFeature === specFeature8190) {
        const specDeliveryRand = Math.floor(Math.random()*specDeliveryArray.length);
        const specDelivery = specDeliveryArray[specDeliveryRand];

        document.getElementById('specialFeatureText').innerText = '';
        document.getElementById('specialFeatureText').innerText = `${specFeature}: ${specDelivery}`;

    } else if (specFeature === specFeature91100) {
        const specDefenseAbilityRand = Math.floor(Math.random()*specDefenseAbilityArray.length);
        const specDefenseAbility = specDefenseAbilityArray[specDefenseAbilityRand];

        document.getElementById('specialFeatureText').innerText = '';
        document.getElementById('specialFeatureText').innerText = `${specFeature}: ${specDefenseAbility}`;

    } else {
        document.getElementById('specialFeatureText').innerText = '';
        document.getElementById('specialFeatureText').innerText = `${specFeature}`;
        
    }
}

function rollMovement() {
    const movementModeRand = Math.floor(Math.random()*movementModeArray.length);
    const movementMode = movementModeArray[movementModeRand];

    document.getElementById('movementText').innerText = '';
    document.getElementById('movementText').innerText = `${movementMode}`;
}


const firstVerminCombArray = [firstVerminComb0110 = 'blood-sucking', firstVerminComb1120 = 'burrowing', firstVerminComb2130 = 'disease-bearing', firstVerminComb3140 = 'floor-licking', firstVerminComb4150 = 'flying', firstVerminComb5160 = 'paralysis-inducing', firstVerminComb6170 = 'rot-causing', firstVerminComb7180 = 'sleep-inducing', firstVerminComb8190 = 'slightly venemous', firstVerminComb91100 = 'substance-dissolving'];
const firstVerminCombRand = Math.floor(Math.random()*firstVerminCombArray.length);
const firstVerminComb = firstVerminCombArray[firstVerminCombRand];

const secondVerminCombArray = [secondVerminComb0110 = 'bat-like things', secondVerminComb1120 = 'beetles', secondVerminComb2130 = 'bird-like things', secondVerminComb3140 = 'crustaceans', secondVerminComb4150 = 'fish-like things', secondVerminComb5160 = 'little gooey things (jellyfish or ooze-like)', secondVerminComb6170 = 'roaches', secondVerminComb7180 = 'rodents (cat size)', secondVerminComb8190 = 'rodents (larger than cats)', secondVerminComb91100 = 'worms'];
const secondVerminCombRand = Math.floor(Math.random()*secondVerminCombArray.length);
const secondVerminComb = secondVerminCombArray[firstVerminCombRand];

const specFeatureArray = [specFeature0110 = 'can be frightened away (or at least kept at bay) with fire, loud noise, or other stimulus', specFeature1120 = 'stalks prey over a long distance, waiting for the right time to attack', specFeature2130 = 'the little ones are sometimes accompanied by a much bigger one', specFeature3140 = 'fast moving; more difficult to hit than one would expect', specFeature4150 = 'unusual response or immunity to spells, or to spells of a particular type', specFeature5160 = 'acts as if unusually intelligent, due to instict or a hive mind', specFeature6170 = 'implants eggs into victims - but since these are generally weaker creaures, the incubation time should be very long, or it should be hard to get infected, or it should be easy to get cured', specFeature7180 = 'amphibious; they generally live and nest in the water, where it\'s hard to find or kill them, but they hunt on land', specFeature8190 = 'Roll on Special Attacks Table 2-78', specFeature91100 = 'Roll on Special Defenses and Abilities Table 2-82)'];
const specFeatureRand = Math.floor(Math.random()*specFeatureArray.length);
const specFeature = specFeatureArray[specFeatureRand];

const movementModeArray = [movementMode5160 = 'Delivery and Retrieval. Some mechanism or process in the adventure area delivers the vermin to a location and then retrieves them (or lets them die). This is an analogy to the use of "scrubbing bubbles," or nano-technology. It doesn\'t need to be high-tech or even well explained. Perhaps a chute simply delivers green slime or rats to a particular location, and then spouts corrosive gas into the area when the vermin are assumed to have eaten whatever needs to be eaten. Or perhaps a big suction-hose gathers them up after a period of time.', movementMode6170 = 'Dimensional movement or lairs. Whether or not the vermin have any dimensional powers that manifest in combat, they live and/or move about through some other dimension (not another plane of existence - just another dimension). This might be a feature of the vermin themselves, or it might be an odd feature of the adventure area.', movementMode7180 = 'Elemental association. The vermin move through an elemental plane of some kind. In this cas,e they are probably elemental creatures of some kind, or a hybrid of "pure" elemental matter and normal "mixed" material.', movementMode8190 = 'Through tunnels burrowed in the walls, ceiling, or floors. The standard, in other words.', movementMode91100 = 'the vermin infest moving monsters. Perhaps the vermin are parasites, or perhaps their larvae are dropped from the movement of some other kind of monster (a golem?). This would keep the vermin population moving around.'];
const movementModeRand = Math.floor(Math.random()*movementModeArray.length);
const movementMode = movementModeArray[movementModeRand];

const specDeliveryArray = ['appearance (changes to dangerous appearance)', 'appearance (normal appearance is dangerous)', 'cast like a spell (affects number of hit dice)', 'cast like a spell (area effect)', 'cast like a spell (one target)', 'cast like a spell (radius around monster)', 'constant effect (radius)', 'exhaled cloud', 'exhaled cone', 'exhaled line', 'gaze', 'gives off gas', 'mental power (affects number of hit dice)', 'mental power (area effect)', 'mental power (burst in radius around monster)', 'mental power (one target)', 'ray (eye, eyestalks, or other organ)', 'smell (radius)', 'smell (squirted, cone)', 'smell (squirted, single target)', 'sound (clicks, etc.)(radius around monster)', 'speech (in radius from monster)', 'spit (glob, single target)', 'spit (line)', 'spray (cone)', 'spray (line)', 'squirt liquid (single target)', 'touch'];
const specDeliveryRand = Math.floor(Math.random()*specDeliveryArray.length);
const specDelivery = specDeliveryArray[specDeliveryRand];

const specDefenseAbility01 = 'Alters own form: changed version of the normal shape';
const specDefenseAbility02 = 'Alters own form: complete polymorph';
const specDefenseAbility03 = 'Ambushes from above';
const specDefenseAbility04 = 'Ambushes from burrow, underneath mud, or water';
const specDefenseAbility05 = 'Armor plates';
const specDefenseAbility06 = 'Burrows';
const specDefenseAbility07 = 'Camouflage';
const specDefenseAbility08 = 'Cannot be attacked from behind (multiple eyes, radial symmetry)';
const specDefenseAbility09 = 'Cannot be damaged by metal';
const specDefenseAbility10 = 'Casts one or more defensive spells as natural attribute';
const specDefenseAbility11 = 'Catches or deflects missiles';
const specDefenseAbility12 = 'Chitin';
const specDefenseAbility13 = 'Climbs';
const specDefenseAbility14 = 'Creates illusionary doubles';
const specDefenseAbility15 = 'Creates shield or walls using a type of energy such as electricity, fire, water, air, sound, acid, plant, mental, or magical force.';
const specDefenseAbility16 = 'Damaged only by magic or silver weapons';
const specDefenseAbility17 = 'Different armor class in different places on body';
const specDefenseAbility18 = 'Dispels magic';
const specDefenseAbility19 = 'Fast moving';
const specDefenseAbility20 = 'Flies';
const specDefenseAbility21 = 'Four or more attacks';
const specDefenseAbility22 = 'Grows or shrinks';
const specDefenseAbility23 = 'Half damage from blunt weapons';
const specDefenseAbility24 = 'Half damage from cold';
const specDefenseAbility25 = 'Half damage from cutting weapons';
const specDefenseAbility26 = 'Half damage from fire';
const specDefenseAbility27 = 'Half damage from non-magical weapons';
const specDefenseAbility28 = 'Half damage from piercing weapons';
const specDefenseAbility29 = 'Hard to hit until it attacks';
const specDefenseAbility30 = 'Has an internal organ that can be used in making potions or creating magic items';
const specDefenseAbility31 = 'Has an unusual gland that creates energy of some kind: light, acid, magical force, fire, air, etc.';
const specDefenseAbility32 = 'Has different degrees of spell resistance/physical defense when in different body forms';
const specDefenseAbility33 = 'Has signature body part: gem';
const specDefenseAbility34 = 'Has signature body part: magic horn';
const specDefenseAbility35 = 'Has signature body part: magical eye';
const specDefenseAbility36 = 'Heals self';
const specDefenseAbility37 = 'Illusions distract attackers or divert attacks';
const specDefenseAbility38 = 'Immune to acid';
const specDefenseAbility39 = 'Immune to blunt weapons';
const specDefenseAbility40 = 'Immune to certain spells: acid';
const specDefenseAbility41 = 'Immune to certain spells: charm/sleep/mental control';
const specDefenseAbility42 = 'Immune to certain spells: cold';
const specDefenseAbility43 = 'Immune to certain spells: electrical';
const specDefenseAbility44 = 'Immune to certain spells: fire';
const specDefenseAbility45 = 'Immune to certain spells: transmutations';
const specDefenseAbility46 = 'Immune to cold';
const specDefenseAbility47 = 'Immune to fire';
const specDefenseAbility48 = 'Immune to piercing weapons';
const specDefenseAbility49 = 'Immune to sharp weapons';
const specDefenseAbility50 = 'Immune to slashing weapons';
const specDefenseAbility51 = 'Improved/restored by cold attacks';
const specDefenseAbility52 = 'Improved/restored by electrical attacks';
const specDefenseAbility53 = 'Improved/restored by fire attacks';
const specDefenseAbility54 = 'Incorporeal travel/phases';
const specDefenseAbility55 = 'Ink-cloud type escape';
const specDefenseAbility56 = 'Its eggs are very valuable';
const specDefenseAbility57 = 'Jet propulsion like squid';
const specDefenseAbility58 = 'Leaps';
const specDefenseAbility59 = 'Leaps to attack';
const specDefenseAbility60 = 'Levitates/floats';
const specDefenseAbility61 = 'Minimum intelligence attribute required to inflict spell damage';
const specDefenseAbility62 = 'Minimum strength attribute required to cause physical damage';
const specDefenseAbility63 = 'Owns a signature item: amulet';
const specDefenseAbility64 = 'Owns a signature item: orb';
const specDefenseAbility65 = 'Owns an item it created internally then spat out or secreted; takes time to create another one';
const specDefenseAbility66 = 'Percentile magic resistance';
const specDefenseAbility67 = 'Pulls itself on strands it fires/throws';
const specDefenseAbility68 = 'Reflects all spells';
const specDefenseAbility69 = 'Reflects spells of particular type';
const specDefenseAbility70 = 'Regenerates';
const specDefenseAbility71 = 'Regenerates damage';
const specDefenseAbility72 = 'Rises from dead unless killed by particular substance (holy water, silver weapon, fire, etc)';
const specDefenseAbility73 = 'Secondary attack possible after creature hits with its primary attack';
const specDefenseAbility74 = 'Secondary or rear claws';
const specDefenseAbility75 = 'Shifts planes';
const specDefenseAbility76 = 'Splits or fissions when attacked by bladed weapons';
const specDefenseAbility77 = 'Splits or fissions when attacked by fire';
const specDefenseAbility78 = 'Stalks before attacking';
const specDefenseAbility79 = 'Summons or calls animal allies';
const specDefenseAbility80 = 'Summons or calls more of its own type';
const specDefenseAbility81 = 'Swims';
const specDefenseAbility82 = 'Swings from branches/ceilings';
const specDefenseAbility83 = 'Teleports';
const specDefenseAbility84 = 'Thick hide';
const specDefenseAbility85 = 'Three heads';
const specDefenseAbility86 = 'Time stop/slow of some kind';
const specDefenseAbility87 = 'Transforms self to energy form: acid';
const specDefenseAbility88 = 'Transforms self to energy form: air vortex';
const specDefenseAbility89 = 'Transforms self to energy form: electric';
const specDefenseAbility90 = 'Transforms self to energy form: fire/lava/heat';
const specDefenseAbility91 = 'Transforms self to energy form: ice/snow/pure cold';
const specDefenseAbility92 = 'Transforms self to energy form: magical force';
const specDefenseAbility93 = 'Transforms self to energy form: water vortex';
const specDefenseAbility94 = 'Turns incorporeal';
const specDefenseAbility95 = 'Turns into another type of animal/monster for combat';
const specDefenseAbility96 = 'Two heads';
const specDefenseAbility97 = 'Uses signature type of steed';
const specDefenseAbility98 = 'Uses signature type of vehicle';
const specDefenseAbility99 = 'Victims cannot be raised from dead';
const specDefenseAbility100 = 'Weakness: additional damage from energy form: acid, fire, water, air, earth, magical force';

const specDefenseAbilityArray = [specDefenseAbility01, specDefenseAbility02, specDefenseAbility03, specDefenseAbility04, specDefenseAbility05, specDefenseAbility06, specDefenseAbility07, specDefenseAbility08, specDefenseAbility09, specDefenseAbility10, specDefenseAbility11, specDefenseAbility12, specDefenseAbility13, specDefenseAbility14, specDefenseAbility15, specDefenseAbility16, specDefenseAbility17, specDefenseAbility18, specDefenseAbility19, specDefenseAbility20, specDefenseAbility21, specDefenseAbility22, specDefenseAbility23, specDefenseAbility24, specDefenseAbility25, specDefenseAbility26, specDefenseAbility27, specDefenseAbility28, specDefenseAbility29, specDefenseAbility30, specDefenseAbility31, specDefenseAbility32, specDefenseAbility33, specDefenseAbility34, specDefenseAbility35, specDefenseAbility36, specDefenseAbility37, specDefenseAbility38, specDefenseAbility39, specDefenseAbility40, specDefenseAbility41, specDefenseAbility42, specDefenseAbility43, specDefenseAbility44, specDefenseAbility45, specDefenseAbility46, specDefenseAbility47, specDefenseAbility48, specDefenseAbility49, specDefenseAbility50, specDefenseAbility51, specDefenseAbility52, specDefenseAbility53, specDefenseAbility54, specDefenseAbility55, specDefenseAbility56, specDefenseAbility57, specDefenseAbility58, specDefenseAbility59, specDefenseAbility60, specDefenseAbility61, specDefenseAbility62, specDefenseAbility63, specDefenseAbility64, specDefenseAbility65, specDefenseAbility66, specDefenseAbility67, specDefenseAbility68, specDefenseAbility69, specDefenseAbility70, specDefenseAbility71, specDefenseAbility72, specDefenseAbility73, specDefenseAbility74, specDefenseAbility75, specDefenseAbility76, specDefenseAbility77, specDefenseAbility78, specDefenseAbility79, specDefenseAbility80, specDefenseAbility81, specDefenseAbility82, specDefenseAbility83, specDefenseAbility84, specDefenseAbility85, specDefenseAbility86, specDefenseAbility87, specDefenseAbility88, specDefenseAbility89, specDefenseAbility90, specDefenseAbility91, specDefenseAbility92, specDefenseAbility93, specDefenseAbility94, specDefenseAbility95, specDefenseAbility96, specDefenseAbility97, specDefenseAbility98, specDefenseAbility99, specDefenseAbility100];
const specDefenseAbilityRand = Math.floor(Math.random()*specDefenseAbilityArray.length);
const specDefenseAbility = specDefenseAbilityArray[specDefenseAbilityRand];