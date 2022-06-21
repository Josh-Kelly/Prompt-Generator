function rollBasicForm() {
    const feyBasicFormRand = Math.floor(Math.random()*feyBasicFormArray.length);
    const feyBasicForm = feyBasicFormArray[feyBasicFormRand];

    document.getElementById('basicFormText').innerText = '';
    document.getElementById('basicFormText').innerText = `${feyBasicForm}`;
}

function rollContract() {
    const feyContractRand = Math.floor(Math.random()*feyContractArray.length);
    const feyContract = feyContractArray[feyContractRand];

    document.getElementById('contractText').innerText = '';
    document.getElementById('contractText').innerText = `${feyContract}`;
}

function rollMagicAbility() {
    let clearTransformation = document.getElementById('transformationDisp');
    if (clearTransformation) {
        document.getElementById('magicAbilityText').removeChild(clearTransformation);
    }
    const feyMagicAbilityRand = Math.floor(Math.random()*feyMagicAbilityArray.length);
    const feyMagicAbility = feyMagicAbilityArray[feyMagicAbilityRand];

    document.getElementById('magicAbilityText').innerText = '';
    document.getElementById('magicAbilityText').innerText = `${feyMagicAbility}`;

    if (feyMagicAbility === feyMagicAbility7180) {
        const feyUnusualTransformationRand = Math.floor(Math.random()*feyUnusualTransformationArray.length);
        const feyUnusualTransformation = feyUnusualTransformationArray[feyUnusualTransformationRand];

        let transformationDisplay = document.createElement('p');
        transformationDisplay.id = 'transformationDisp';
        transformationDisplay.innerText = '';

        transformationDisplay.innerText = feyUnusualTransformation;
        document.getElementById('magicAbilityText').appendChild(transformationDisplay);
    }
}

function rollItemMagic() {
    let clearTransformation2 = document.getElementById('transformationDisp2');
    if (clearTransformation2) {
        document.getElementById('itemMagicText').removeChild(clearTransformation2);
    }

    const feyMagicItemRand = Math.floor(Math.random()*feyMagicItemArray.length);
    const feyMagicItem = feyMagicItemArray[feyMagicItemRand];

    document.getElementById('itemMagicText').innerText = '';
    document.getElementById('itemMagicText').innerText = `${feyMagicItem}`;

    if (feyMagicItem === feyMagicItem91100) {
        const feyUnusualTransformation2Rand = Math.floor(Math.random()*feyUnusualTransformationArray.length);
        const feyUnusualTransformation2 = feyUnusualTransformationArray[feyUnusualTransformation2Rand];

        let transformationDisplay2 = document.createElement('p');
        transformationDisplay2.id = 'transformationDisp2';
        transformationDisplay2.innerText = '';

        transformationDisplay2.innerText = feyUnusualTransformation2;
        document.getElementById('itemMagicText').appendChild(transformationDisplay2);
    }
}

function rollSummonMethod() {
    const feySummonMethodRand = Math.floor(Math.random()*feySummonMethodArray.length);
    const feySummonMethod = feySummonMethodArray[feySummonMethodRand];

    document.getElementById('summonMethodText').innerText = '';
    document.getElementById('summonMethodText').innerText = `${feySummonMethod}`;
}

function rollImmobilize() {
    const feyImmobilizeMethodRand = Math.floor(Math.random()*feyImmobilizeMethodArray.length);
    const feyImmobilizeMethod = feyImmobilizeMethodArray[feyImmobilizeMethodRand];

    document.getElementById('immobilizeText').innerText = '';
    document.getElementById('immobilizeText').innerText = `${feyImmobilizeMethod}`;
}


const feyBasicForm0110 = 'Biped with animal (mammal) head';
const feyBasicForm1120 = 'Biped with animal (mammal) head and legs';
const feyBasicForm2130 = 'Biped with horns and animal legs';
const feyBasicForm3140 = 'Biped shapeshifter (appears human but unusual)';
const feyBasicForm4150 = 'Small human-like creature';
const feyBasicForm5160 = 'Animal form shapeshifter (mammal)';
const feyBasicForm6170 = 'Animal form with unusual feature (size, usually)';
const feyBasicForm7180 = 'Mist form';
const feyBasicForm8190 = 'Incorporated into natural feature such as a rock or plant';
const feyBasicForm91100 = 'Biped or shapeshifter, bird';

const feyBasicFormArray = [feyBasicForm0110, feyBasicForm1120, feyBasicForm2130, feyBasicForm3140, feyBasicForm4150, feyBasicForm5160, feyBasicForm6170, feyBasicForm7180, feyBasicForm8190, feyBasicForm91100];



const feyContract0110 = 'Bargaining; a gift is offered (souls, gems, etc), and the fey creature might or might not choose to accept the bargain';
const feyContract1120 = 'Genealogy/ancestry; ability to control this type of fey creature was granted to a bloodline in the distant past as a bargain or reward';
const feyContract2130 = 'Knowledge of the creature\'s language, research being required, possibly hard to use or pronounce';
const feyContract3140 = 'Knowledge of the creature\'s true name';
const feyContract4150 = 'Possession of Item; possibly one owned by the creature, possibly a specific wand, possibly something like a token granted by the creature\'s overlord';
const feyContract5160 = 'Riddle answer; the fey creature poses a riddle of some kind';
const feyContract6170 = 'Gift; some particular gift is required to obtain the creature\'s assistance';
const feyContract7180 = 'Specific ritual; a specific ritual which probably needs research is used to bind the creature to service';
const feyContract8190 = 'Specific spell; probably requires specific research for nontraditional fey creatures';
const feyContract91100 = 'Spoken words; possibly a command word, possibly a pleasing limerick, etc.';

const feyContractArray = [feyContract0110, feyContract1120, feyContract2130, feyContract3140, feyContract4150, feyContract5160, feyContract6170, feyContract7180, feyContract8190, feyContract91100];



const feyMagicAbility0110 = 'Ability to charm, enthrall, and even enslave opponents';
const feyMagicAbility1120 = 'Berserk rage or sudden growth, with combat benefits (most likely after suffering some degree of damage, seeing damage to animal companion, having a spell cast upon it, or other anger-evoking stimulus)';
const feyMagicAbility2130 = 'Control of animals (usually of a specific type or species)';
const feyMagicAbility3140 = 'Immobilization of opponents using natural substances or body part';
const feyMagicAbility4150 = 'Melding into stone, trees, or water, and possibly moving while inside the natural feature';
const feyMagicAbility5160 = 'Powerful animal companion (a bear or lion, for example, probably larger and more intelligent than a normal example of the species)';
const feyMagicAbility6170 = 'Shape-shifting';
const feyMagicAbility7180 = 'Transformation of enemies: ';
const feyMagicAbility8190 = 'Uses a characteristic magical item (possibly only usable by this sort of fey creature) to affect opponents. (see Table 2-26 below)';
const feyMagicAbility91100 = 'Vanishing/teleporting when not physically touched or held';

const feyMagicAbilityArray = [feyMagicAbility0110, feyMagicAbility1120, feyMagicAbility2130, feyMagicAbility3140, feyMagicAbility4150, feyMagicAbility5160, feyMagicAbility6170, feyMagicAbility7180, feyMagicAbility8190, feyMagicAbility91100];



const feyUnusualTransformation0103 = 'Add tail, tentacles, whiskers, etc.';
const feyUnusualTransformation0406 = 'Age or become younger';
const feyUnusualTransformation0709 = 'Always hungry';
const feyUnusualTransformation1012 = 'Always thirsty';
const feyUnusualTransformation1315 = 'Causes bodily odor (bad or perfume)';
const feyUnusualTransformation1618 = 'Causes disease';
const feyUnusualTransformation1921 = 'Causes protective adoration for object in hand or next object picked up.';
const feyUnusualTransformation2224 = 'Causes rage or depression';
const feyUnusualTransformation2527 = 'Change form of feet or hands';
const feyUnusualTransformation2830 = 'Cleans people/items of dirt';
const feyUnusualTransformation3133 = 'Confusion (directionally impaired)';
const feyUnusualTransformation3436 = 'Confusion (per spell)';
const feyUnusualTransformation3739 = 'Cures disease';
const feyUnusualTransformation4042 = 'Enlarge or shrink';
const feyUnusualTransformation4345 = 'Geas';
const feyUnusualTransformation4648 = 'Gender';
const feyUnusualTransformation4951 = 'Grants next wish';
const feyUnusualTransformation5254 = 'Grow facial hair';
const feyUnusualTransformation5557 = 'Hair color (often to white or grey)';
const feyUnusualTransformation5860 = 'Heightens one random sense (sight, etc.)';
const feyUnusualTransformation6163 = 'Laugh or cry uncontrollably in next stressful situation';
const feyUnusualTransformation6466 = 'Luck (adds temporary bonus or penalty to attack rolls, damage rolls, or saving throws)';
const feyUnusualTransformation6769 = 'Petrifaction';
const feyUnusualTransformation7072 = 'Polymorph to animal';
const feyUnusualTransformation7375 = 'Reduces/impairs one random sense (sight, hearing, etc)';
const feyUnusualTransformation7678 = 'Removes one random sense (blind, deaf, etc.)';
const feyUnusualTransformation7982 = 'Reverse two randomly determined ability scores';
const feyUnusualTransformation8385 = 'Smoke wisps from ears, nose or mouth';
const feyUnusualTransformation8688 = 'Speech forms bubbles, can\'t be heard until bubble pops';
const feyUnusualTransformation8991 = 'Subject glows like light source';
const feyUnusualTransformation9294 = 'Tattoos patterns onto skin';
const feyUnusualTransformation9597 = 'Turned to wood';
const feyUnusualTransformation98100 = 'Vulnerable to suggestion from other humans';

const feyUnusualTransformationArray = [feyUnusualTransformation0103, feyUnusualTransformation0406, feyUnusualTransformation0709, feyUnusualTransformation1012, feyUnusualTransformation1315, feyUnusualTransformation1618, feyUnusualTransformation1921, feyUnusualTransformation2224, feyUnusualTransformation2527, feyUnusualTransformation2830, feyUnusualTransformation3133, feyUnusualTransformation3436, feyUnusualTransformation3739, feyUnusualTransformation4042, feyUnusualTransformation4345, feyUnusualTransformation4648, feyUnusualTransformation4951, feyUnusualTransformation5254, feyUnusualTransformation5557, feyUnusualTransformation5860, feyUnusualTransformation6163, feyUnusualTransformation6466, feyUnusualTransformation6769, feyUnusualTransformation7072, feyUnusualTransformation7375, feyUnusualTransformation7678, feyUnusualTransformation7982, feyUnusualTransformation8385, feyUnusualTransformation8688, feyUnusualTransformation8991, feyUnusualTransformation9294, feyUnusualTransformation9597, feyUnusualTransformation98100];



const feyMagicItem0110 = 'Charm opponents (friendship, influence, control or geas)';
const feyMagicItem1120 = 'Allow fey creature to escape (teleport, undetectability, or illusionary misdirection)';
const feyMagicItem2130 = 'Change location of opponents (rearrange locations, teleport, turn around, blow backwards, etc).';
const feyMagicItem3140 = 'Disorient or confuse opponents (including symptoms of drunkenness or intoxication)';
const feyMagicItem4150 = 'Curse opponents (often the curse is for bad luck)';
const feyMagicItem5160 = 'Protect fey creature from a particular weapon type, non-magic weapons, spells, a type of spell, or a particular type of metal.';
const feyMagicItem6170 = 'Summoning animals, or allies of its own kind';
const feyMagicItem7180 = 'Create aging effects, temporary or permanent';
const feyMagicItem8190 = 'Creates a water effect, to push opponents back, drown them, of hold them at bay.';
const feyMagicItem91100 = 'Transform opponents: ';

const feyMagicItemArray = [feyMagicItem0110, feyMagicItem1120, feyMagicItem2130, feyMagicItem3140, feyMagicItem4150, feyMagicItem5160, feyMagicItem6170, feyMagicItem7180, feyMagicItem8190, feyMagicItem91100];



const feyImmobilizeMethod0105 = 'Affect ground or rock, causing it to grab or even entomb enemies';
const feyImmobilizeMethod0610 = 'Breathe out magic breath, which freezes using cold temperature or simply paralyzes opponents magically';
const feyImmobilizeMethod1115 = 'Cause all of enemies\' actions to take the opposite effect (raising arm actually lowers it, a step forward takes a step back, etc). This might be overcome, but trying to work everything in reverse would cause incredible clumsiness.';
const feyImmobilizeMethod1620 = 'Cause enemies to become so enraged that they hack away at the ground, each other, and anything else other than the fey creature.';
const feyImmobilizeMethod2125 = 'Cause enemies to begin dancing helplessly';
const feyImmobilizeMethod2630 = 'Cause enemies to follow a glowing light or summoned animal, away from the fey creature or into peril';
const feyImmobilizeMethod3135 = 'Cause enemies to listen to a particular sound, enraptured';
const feyImmobilizeMethod3640 = 'Cause metal or leather armor (one or the other) to constrict and bind the wearer';
const feyImmobilizeMethod4145 = 'Fear effect that immobilizes those affected';
const feyImmobilizeMethod4650 = 'Grow and animate existing vegetation to grab and hold (anything from trees to grass to vines)';
const feyImmobilizeMethod5155 = 'Magically flowing hair reaches out to entangle one or several opponents';
const feyImmobilizeMethod5660 = 'Produce mists that immobilize (as opposed to summoning mists from nowhere)';
const feyImmobilizeMethod6165 = 'Produce plant matter (probably vines) to grab and hold';
const feyImmobilizeMethod6670 = 'Spell-like ability (gestures and so forth) causes enemies\' hair to grow and animate, entangling legs and arms';
const feyImmobilizeMethod7175 = 'Spell-like ability (gestures and so forth) causes enemies\' legs to become rooted to the ground or paralyzed';
const feyImmobilizeMethod7680 = 'Spell-like ability (gestures, etc) makes enemies so clumsy that they cannot stand or use weapons';
const feyImmobilizeMethod8185 = 'Summon insects (or bats, or birds, etc) whose swarming has the effect of keeping enemies from taking actions';
const feyImmobilizeMethod8690 = 'Summon mists that coalesce or reach out';
const feyImmobilizeMethod9195 = 'Summon winds that keep opponents at bay; might even be magical enough to “blow” spell effects back at caster';
const feyImmobilizeMethod96100 = 'Summon winds that raise opponents into air, spinning them around until they are unbelievably dizzy';

const feyImmobilizeMethodArray = [feyImmobilizeMethod0105, feyImmobilizeMethod0610, feyImmobilizeMethod1115, feyImmobilizeMethod1620, feyImmobilizeMethod2125, feyImmobilizeMethod2630, feyImmobilizeMethod3135, feyImmobilizeMethod3640, feyImmobilizeMethod4145, feyImmobilizeMethod4650, feyImmobilizeMethod5155, feyImmobilizeMethod5660, feyImmobilizeMethod6165, feyImmobilizeMethod6670, feyImmobilizeMethod7175, feyImmobilizeMethod7680, feyImmobilizeMethod8185, feyImmobilizeMethod8690, feyImmobilizeMethod9195, feyImmobilizeMethod96100];



const feySummonMethod0110 = 'Ancient Promise. Recital of an ancient promise of assistance is another way to summon a fey creature, but these are generally difficult to discover, and the fey creature is likely to do whatever it can (later on) to make sure the recital isn\'t passed on or used a second time.';
const feySummonMethod1120 = 'Body Part. If the summoner has a lock of the fey creature\'s hair (or some other body part), a particular spoken charm or magic word could be sufficient to call the creature';
const feySummonMethod2130 = 'Creature\'s Name. Knowing the creature\'s name might be enough to summon it, particularly if there is a little rhyme, magic word, dance, or pattern of steps to go along with speaking the name. (For some reason, movement of feet seems to be much more associated with the fey than movement of arms or hands).';
const feySummonMethod3140 = 'Creature\'s Possession. Some fey creatures are linked to a particular possession (pipes, hat, etc) and can be called in virtually any way if the summoner has possession of this item.';
const feySummonMethod4150 = 'Insults and Place. Near the creature\'s home, or in some other specified place like a circle of toadstools, a series of biting insults might call the creature forth … but not necessarily in a good mood.';
const feySummonMethod5160 = 'Musical Tune. Certain tunes, if played absolutely perfectly and without error, might summon the fey creature. In order to keep this method from being used over and over again, it might be a tune that backfires dangerously if not played correctly.';
const feySummonMethod6170 = 'Pattern. Creating the right pattern of crystals, sparkly stones, sticks of wood, branches of fir, etc) might summon forth this sort of fey creature.';
const feySummonMethod7180 = 'Place and Activity. The right combination of a place (ring of mushrooms, stone circle, near the creature\'s home, etc) and an activity (lighting a fire with pine cones, dancing, singing, cooking bacon, etc) might be an irresistible temptation for this sort of fey creature\'s greed or curiosity.';
const feySummonMethod8190 = 'Place, Time, and Speech. It might be possible to summon the fey creature when there is a particular combination of the time (autumn, midsummer, midnight, lunar phase, etc), the right words, and the right place (often a crossroads or a forest glade).';
const feySummonMethod91100 = 'Smells. Cooking a certain combination of (strange) ingredients might summon the fey creature just from a smell the creature finds irresistible.';

const feySummonMethodArray = [feySummonMethod0110, feySummonMethod1120, feySummonMethod2130, feySummonMethod3140, feySummonMethod4150, feySummonMethod5160, feySummonMethod6170, feySummonMethod7180, feySummonMethod8190, feySummonMethod91100];
