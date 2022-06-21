function rollMistEffect() {
    const mistEffectRand = Math.floor(Math.random()*mistEffectArray.length);
    const mistEffect = mistEffectArray[mistEffectRand];

    document.getElementById('mistEffectText').innerText = '';
    document.getElementById('mistEffectText').innerText = `${mistEffect}`;
}
function rollReason() {
    const mistReasonRand = Math.floor(Math.random()*mistReasonArray.length);
    const mistReason = mistReasonArray[mistReasonRand];

    document.getElementById('reasonAttackText').innerText = '';
    document.getElementById('reasonAttackText').innerText = `${mistReason}`;
}
function rollDamageType() {
    const damageMistRand = Math.floor(Math.random()*damageMistArray.length);
    const damageMist = damageMistArray[damageMistRand];

    document.getElementById('damageNeedText').innerText = '';
    document.getElementById('damageNeedText').innerText = `${damageMist}`;
}





const mistEffect0104 = 'sucks blood';
const mistEffect0508 = 'sucks away fluid';
const mistEffect0912 = 'suffocates';
const mistEffect1316 = 'causes instanity (no further damage)';
const mistEffect1720 = 'sucks away charisma';
const mistEffect2124 = 'sucks away dexterity';
const mistEffect2528 = 'sucks away diseases (cures them)';
const mistEffect2932 = 'sucks away experience (levels)';
const mistEffect3336 = 'sucks away experience (xp)';
const mistEffect3740 = 'causes rage';
const mistEffect4144 = 'sucks away heat or cold';
const mistEffect4548 = 'sucks away intelligence';
const mistEffect4952 = 'sucks away joy';
const mistEffect5356 = 'sucks away luck';
const mistEffect5760 = 'sucks away magic';
const mistEffect6164 = 'sucks away philosophy or knowledge';
const mistEffect6568 = 'sucks away souls';
const mistEffect6972 = 'sucks away sound';
const mistEffect7376 = 'sucks away spell casting capability';
const mistEffect7780 = 'sucks away strength';
const mistEffect8184 = 'sucks away wisdom';
const mistEffect8588 = 'sucks away youth';
const mistEffect8992 = 'Special Attack using electricity';
const mistEffect9396 = 'Special Attack using mental control such as charm or confusion';
const mistEffect97100 = 'Special Attack using hallucinations';

const mistEffectArray = [mistEffect0104, mistEffect0508, mistEffect0912, mistEffect1316, mistEffect1720, mistEffect2124, mistEffect2528, mistEffect2932, mistEffect3336, mistEffect3740, mistEffect4144, mistEffect4548, mistEffect4952, mistEffect5356, mistEffect5760, mistEffect6164, mistEffect6568, mistEffect6972, mistEffect7376, mistEffect7780, mistEffect8184, mistEffect8588, mistEffect8992, mistEffect9396, mistEffect97100];


const mistReason0104 = 'to feed';
const mistReason0508 = 'strengthens self in terms of attacks';
const mistReason0912 = 'strengthens self in terms of hit points (regeneration or growth)';
const mistReason1316 = 'no reason; effect just happens';
const mistReason1720 = 'stores the stolen power and delivers it elsewhere (to creator, controller, or parent)';
const mistReason2124 = 'stores the stolen power and delivers it elsewhere (to its offspring, to its client, or to use in building something)';
const mistReason2528 = 'siphons the stolen power into another object (for storage, or to activate the other object)';
const mistReason2932 = 'to feed';
const mistReason3336 = 'strengthens self in terms of attacks';
const mistReason3740 = 'strengthens self in terms of hit points (regeneration or growth)';
const mistReason4144 = 'no reason; effect just happens';
const mistReason4548 = 'stores the stolen power and delivers it elsewhere (to creator, controller, or parent)';
const mistReason4952 = 'stores the stolen power and delivers it elsewhere (to its offspring, to its client, or to use in building something)';
const mistReason5356 = 'siphons the stolen power into another object (for storage, or to activate the other object)';
const mistReason5760 = 'to feed';
const mistReason6164 = 'strengthens self in terms of attacks';
const mistReason6568 = 'strengthens self in terms of hit points (regeneration or growth)';
const mistReason6972 = 'no reason; effect just happens';
const mistReason7376 = 'stores the stolen power and delivers it elsewhere (to creator, controller, or parent)';
const mistReason7780 = 'stores the stolen power and delivers it elsewhere (to its offspring, to its client, or to use in building something)';
const mistReason8184 = 'siphons the stolen power into another object (for storage, or to activate the other object)';
const mistReason8588 = 'to feed';
const mistReason8992 = 'strengthens self in terms of attacks';
const mistReason9396 = 'strengthens self in terms of hit points (regeneration or growth)';
const mistReason97100 = 'to feed';

const mistReasonArray = [mistReason0104, mistReason0508, mistReason0912, mistReason1316, mistReason1720, mistReason2124, mistReason2528, mistReason2932, mistReason3336, mistReason3740, mistReason4144, mistReason4548, mistReason4952, mistReason5356, mistReason5760, mistReason6164, mistReason6568, mistReason6972, mistReason7376, mistReason7780, mistReason8184, mistReason8588, mistReason8992, mistReason9396, mistReason97100];


const damageMist0104 = 'central organ is solid or liquid and can be damaged';
const damageMist0508 = 'killed by destroying the machine or item from which mist emerges';
const damageMist0912 = 'disperse the vapor with wind';
const damageMist1316 = 'kill monster that created mist';
const damageMist1720 = 'can be killed with weapons, but they inflict reduced damage';
const damageMist2124 = 'can be damaged only with a particular item linked to the creature';
const damageMist2528 = 'can be damaged only with spells';
const damageMist2932 = 'can be damaged only with magic weapons';
const damageMist3336 = 'can be damaged only by specifically prepared weapons (coated with potion, blessed, etc.)';
const damageMist3740 = 'central organ is solid or liquid and can be damaged';
const damageMist4144 = 'killed by destroying the machine or item from which mist emerges';
const damageMist4548 = 'disperse the vapor with wind';
const damageMist4952 = 'kill monster that created mist';
const damageMist5356 = 'can be killed with weapons, but they inflict reduced damage';
const damageMist5760 = 'can be damaged only with a particular item linked to the creature';
const damageMist6164 = 'can be damaged only with spells';
const damageMist6568 = 'can be damaged only with magic weapons';
const damageMist6972 = 'can be damaged only by specifically prepared weapons (coated with potion, blessed, etc.)';
const damageMist7376 = 'central organ is solid or liquid and can be damaged';
const damageMist7780 = 'killed by destroying the machine or item from which mist emerges';
const damageMist8184 = 'disperse the vapor with wind';
const damageMist8588 = 'kill monster that created mist';
const damageMist8992 = 'can be killed with weapons, but they inflict reduced damage';
const damageMist9396 = 'can be damaged only with a particular item linked to the creature';
const damageMist97100 = 'can be damaged only with spells';

const damageMistArray = [damageMist0104, damageMist0508, damageMist0912, damageMist1316, damageMist1720, damageMist2124, damageMist2528, damageMist2932, damageMist3336, damageMist3740, damageMist4144, damageMist4548, damageMist4952, damageMist5356, damageMist5760, damageMist6164, damageMist6568, damageMist6972, damageMist7376, damageMist7780, damageMist8184, damageMist8588, damageMist8992, damageMist9396, damageMist97100];
