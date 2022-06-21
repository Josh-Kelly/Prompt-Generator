
        /* Type of construct Table 2-7 */
const constructType0120 = 'Elemental-animated or spirit-animated machine or object: An elemental creature or a creature from the spirit-world has been bound into the object, machine, or structure as the force that animates it. The imprisoned/bound creature provides the object with whatever intelligence or cunning it possesses.';
const constructType2140 = 'Magically animated object in its natural shape: Animated chairs, tables, catapults, etc.';
const constructType4160 = 'Magically augmented machine: A machine that doesn\'t operate purely by means of technology, and may not include any mechanical components at all other than hinges and bolts. A basic example is an iron cobra with no inner mechanisms - it is an object specifically designed to be animated. On the more complex side of the spectrum might be a huge lobster-shaped battle robot powered by magical pistons and gears, but with no magic animating the mechanisms driven by those pistons and gears.';
const constructType6180 = 'Spirit-animated substance, in a prepared shape: This includes the classic man-shaped golem, but could be any shape. A spirit could be imprisoned in a garbage pile, and then you\'d have an animated garbage-pile.';
const constructType81100 = 'True machine: This is either a machine with some sort of artificial brain, or a machine with no intelligence whatsoever.';

const constructTypeArray = [constructType0120, constructType2140, constructType4160, constructType6180, constructType81100];


function rollConstructType() {
    const constructTypeRand = Math.floor(Math.random()*constructTypeArray.length);
    const constructType = constructTypeArray[constructTypeRand];

    document.getElementById('typeOfText').innerText = '';
    document.getElementById('typeOfText').innerText = `Construct Type: ${constructType}`;
}




/* danger posed by construct */
const constructDanger0110 = 'Crushing limb or smash';
const constructDanger1120 = 'Enfold and suffocate';
const constructDanger2130 = 'Grab and process';
const constructDanger3140 = 'Liquid spray and process';
const constructDanger4150 = 'Pierce and process';
const constructDanger5160 = 'Piercing appendage';
const constructDanger6170 = 'Pincers';
const constructDanger7180 = 'Swallow and process';
const constructDanger8190 = 'Trample';
const constructDanger91100 = 'Whirling blades or slicing limbs';

const constructDangerArray = [constructDanger0110, constructDanger1120, constructDanger2130, constructDanger3140, constructDanger4150, constructDanger5160, constructDanger6170, constructDanger7180, constructDanger8190, constructDanger91100];


function rollDangerPosed() {
    const constructDangerRand = Math.floor(Math.random()*constructDangerArray.length);
    const constructDanger = constructDangerArray[constructDangerRand];

    document.getElementById('physicalDangerText').innerText = '';
    document.getElementById('physicalDangerText').innerText = `Danger Posed: ${constructDanger}`;
}





/* modern analogues for fantasy devices */
const constructAnalogue0103 = 'Automobile';
const constructAnalogue0406 = 'Bathysphere';
const constructAnalogue0709 = 'Blender or food processor';
const constructAnalogue1012 = 'Bulldozer';
const constructAnalogue1315 = 'Centrifuge';
const constructAnalogue1618 = 'Combine harvester';
const constructAnalogue1921 = 'Crane';
const constructAnalogue2224 = 'Dishwasher';
const constructAnalogue2527 = 'Disk drive (memory holder)';
const constructAnalogue2830 = 'Drier';
const constructAnalogue3133 = 'Eggbeater';
const constructAnalogue3436 = 'Electrical outlet';
const constructAnalogue3739 = 'Elevator';
const constructAnalogue4042 = 'Flamethrower';
const constructAnalogue4345 = 'Forklift';
const constructAnalogue4648 = 'Garbage disposal';
const constructAnalogue4951 = 'Garden hose';
const constructAnalogue5254 = 'Heart monitor';
const constructAnalogue5557 = 'Injection mold';
const constructAnalogue5860 = 'Intercom system';
const constructAnalogue6163 = 'Jackhammer';
const constructAnalogue6466 = 'Lawnmower';
const constructAnalogue6769 = 'Oil refining or distilling';
const constructAnalogue7072 = 'Oven';
const constructAnalogue7375 = 'Power drill';
const constructAnalogue7678 = 'Refrigerator or cold storage';
const constructAnalogue7982 = 'Roomba';
const constructAnalogue8385 = 'Steam cleaner';
const constructAnalogue8688 = 'Steamroller';
const constructAnalogue8991 = 'Stove';
const constructAnalogue9294 = 'Trash compactor';
const constructAnalogue9597 = 'Truck';
const constructAnalogue98100 = 'Windmill';

const constructAnalogueArray = [constructAnalogue0103, constructAnalogue0406, constructAnalogue0709, constructAnalogue1012, constructAnalogue1315, constructAnalogue1618, constructAnalogue1921, constructAnalogue2224, constructAnalogue2527, constructAnalogue2830, constructAnalogue3133, constructAnalogue3436, constructAnalogue3739, constructAnalogue4042, constructAnalogue4345, constructAnalogue4648, constructAnalogue4951, constructAnalogue5254, constructAnalogue5557, constructAnalogue5860, constructAnalogue6163, constructAnalogue6466, constructAnalogue6769, constructAnalogue7072, constructAnalogue7375, constructAnalogue7678, constructAnalogue7982, constructAnalogue8385, constructAnalogue8688, constructAnalogue8991, constructAnalogue9294, constructAnalogue9597, constructAnalogue98100];


function rollConstructAnalogue() {
    const constructAnalogueRand = Math.floor(Math.random()*constructAnalogueArray.length);
    const constructAnalogue = constructAnalogueArray[constructAnalogueRand];

    document.getElementById('modernAnalogueText').innerText = '';
    document.getElementById('modernAnalogueText').innerText = `Modern Analogue: ${constructAnalogue}`;
}





/* reason for creating construct */
const constructPurpose0108 = 'Boosts magic powers of creator';
const constructPurpose0916 = 'Build structures';
const constructPurpose1724 = 'Dig';
const constructPurpose2532 = 'Finder/hunter';
const constructPurpose3340 = 'Guardian';
const constructPurpose4148 = 'Instrument of revenge';
const constructPurpose4956 = 'Life support system or exoskeleton for creator';
const constructPurpose5765 = 'Manufacture items';
const constructPurpose6674 = 'Navigate';
const constructPurpose7583 = 'Produce food';
const constructPurpose8492 = 'Servant';
const constructPurpose93100 = 'Warrior';

const constructPurposeArray = [constructPurpose0108, constructPurpose0916, constructPurpose1724, constructPurpose2532, constructPurpose3340, constructPurpose4148, constructPurpose4956, constructPurpose5765, constructPurpose6674, constructPurpose7583, constructPurpose8492, constructPurpose93100];


function rollConstructPurpose() {
    const constructPurposeRand = Math.floor(Math.random()*constructPurposeArray.length);
    const constructPurpose = constructPurposeArray[constructPurposeRand];

    document.getElementById('intendedPurposeText').innerText = '';
    document.getElementById('intendedPurposeText').innerText = `Intended Purpose: ${constructPurpose}`;
}





/* construct physical resemblance */
const constructResemblance0110 = 'Animal (mammal, reptile, amphibian, bird, etc.)';
const constructResemblance1120 = 'Bizarre machine';
const constructResemblance2130 = 'Bug (beetle, insect, or arachnid)';
const constructResemblance3140 = 'Doll or puppet';
const constructResemblance4150 = 'Large human';
const constructResemblance5160 = 'Mannequin (possibly very lifelike)';
const constructResemblance6170 = 'Plant';
const constructResemblance7180 = 'Scarecrow, jury-rigged appearance, poor construction';
const constructResemblance8190 = 'Sphere or other uncomplicated shape';
const constructResemblance91100 = 'Well-known monster (dragon, griffon, minotaur, etc.)';

const constructResemblanceArray = [constructResemblance0110, constructResemblance1120, constructResemblance2130, constructResemblance3140, constructResemblance4150, constructResemblance5160, constructResemblance6170, constructResemblance7180, constructResemblance8190, constructResemblance91100];


function rollConstructResemblanceTo() {
    const constructResemblanceRand = Math.floor(Math.random()*constructResemblanceArray.length);
    const constructResemblance = constructResemblanceArray[constructResemblanceRand];

    document.getElementById('physicalResemblanceText').innerText = '';
    document.getElementById('physicalResemblanceText').innerText = `Construct's Physical Resemblance: ${constructResemblance}`;
}






/* type of loss of control */
const constructLossControl0110 = 'Base percentage chance checked during each combat round (but not increasing)';
const constructLossControl1120 = 'Base percentage chance that depends on the construct\'s age (would differ for each individual monster but not change during the encounter)';
const constructLossControl2130 = 'Base percentage chance under certain circumstances';
const constructLossControl3140 = 'Base percentage chance when confused in some way';
const constructLossControl4150 = 'Base percentage chance when given a command';
const constructLossControl5160 = 'Base percentage chance when hit with particular magic';
const constructLossControl6170 = 'Construct begins as inactive (out of control) but automatically “activates” into control based on certain actions it observes';
const constructLossControl7180 = 'Construct begins as inactive (out of control) but has cumulative increasing chance of “activating” into control under certain circumstances';
const constructLossControl8190 = 'Construct\'s loss of control (by whatever method) results in the escape of its activating spirit to possess a person';
const constructLossControl91100 = 'Cumulative increasing chance during combat';

const constructLossControlArray = [constructLossControl0110, constructLossControl1120, constructLossControl2130, constructLossControl3140, constructLossControl4150, constructLossControl5160, constructLossControl6170, constructLossControl7180, constructLossControl8190, constructLossControl91100];


function rollControlLoss() {
    const constructLossControlRand = Math.floor(Math.random()*constructLossControlArray.length);
    const constructLossControl = constructLossControlArray[constructLossControlRand];

    document.getElementById('controlLossText').innerText = '';
    document.getElementById('controlLossText').innerText = `Construct's Malfunction: ${constructLossControl}`;
}