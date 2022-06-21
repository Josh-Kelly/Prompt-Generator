function rollBasicForm() {
        const plantBasicFormRand = Math.floor(Math.random()*plantBasicFormArray.length);
        const plantBasicForm = plantBasicFormArray[plantBasicFormRand];

        document.getElementById('basicFormText').innerText = '';
        document.getElementById('basicFormText').innerText = plantBasicForm;

}

function rollSpecificForm() {
        document.getElementById('mobilityDiv').innerHTML = '';
        

        const plantSpectTypeRand = Math.floor(Math.random()*plantSpecTypeArray.length);
        const plantSpecType = plantSpecTypeArray[plantSpectTypeRand];

        if (plantSpecType === plantSpecType0105) {
                const limbAttack0105Rand = Math.floor(Math.random()*limbAttackArray.length);
                const limbAttack0105 = limbAttackArray[limbAttack0105Rand];
        
                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${limbAttack0105}`;

        } else if (plantSpecType === plantSpecType0610) {
                const limbAttack0610Rand = Math.floor(Math.random()*limbAttackArray.length);
                const limbAttack0610 = limbAttackArray[limbAttack0610Rand];

                const augmentAttack0610Rand = Math.floor(Math.random()*augmentAttackArray.length);
                const augmentAttack0610 = augmentAttackArray[augmentAttack0610Rand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${limbAttack0610}; ${augmentAttack0610}`;

        } else if (plantSpecType === plantSpecType1115) {
                const limbAttack1115Rand = Math.floor(Math.random()*limbAttackArray.length);
                const limbAttack1115 = limbAttackArray[limbAttack1115Rand];

                const specialPull1115Rand = Math.floor(Math.random()*specialPullArray.length);
                const specialPull1115 = specialPullArray[specialPull1115Rand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${limbAttack1115}; ${specialPull1115}`;

        } else if (plantSpecType === plantSpecType1620) {
                const augmentAttack1620Rand = Math.floor(Math.random()*augmentAttackArray.length);
                const augmentAttack1620 = augmentAttackArray[augmentAttack1620Rand];

                const specialPull1620Rand = Math.floor(Math.random()*specialPullArray.length);
                const specialPull1620 = specialPullArray[specialPull1620Rand];

                const limbAttack1620Rand = Math.floor(Math.random()*limbAttackArray.length);
                const limbAttack1620 = limbAttackArray[limbAttack1620Rand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${limbAttack1620}; ${augmentAttack1620}, ${specialPull1620}`;

        } else if (plantSpecType === plantSpecType3135) {
                const limbAttack3135Rand = Math.floor(Math.random()*limbAttackArray.length);
                const limbAttack3135 = limbAttackArray[limbAttack3135Rand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${limbAttack3135}`;


                const mobilityButton = document.createElement('button');
                const mobilityText = document.createElement('p');

                mobilityButton.setAttribute("onclick", "rollMobility()");
                mobilityButton.id = 'mobilityButton';
                mobilityButton.innerText = 'Method of Locomotion';

                mobilityText.id = 'mobilityText';

                document.getElementById('mobilityDiv').appendChild(mobilityButton);
                document.getElementById('mobilityDiv').appendChild(mobilityText);

        } else if (plantSpecType === plantSpecType3640) {
                const limbAttack3640Rand = Math.floor(Math.random()*limbAttackArray.length);
                const limbAttack3640 = limbAttackArray[limbAttack3640Rand];

                const augmentAttack3640Rand = Math.floor(Math.random()*augmentAttackArray.length);
                const augmentAttack3640 = augmentAttackArray[augmentAttack3640Rand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${limbAttack3640}, ${augmentAttack3640}`;


                const mobilityButton = document.createElement('button');
                const mobilityText = document.createElement('p');

                mobilityButton.setAttribute("onclick", "rollMobility()");
                mobilityButton.id = 'mobilityButton';
                mobilityButton.innerText = 'Method of Locomotion';

                mobilityText.id = 'mobilityText';

                document.getElementById('mobilityDiv').appendChild(mobilityButton);
                document.getElementById('mobilityDiv').appendChild(mobilityText);

        } else if (plantSpecType === plantSpecType4145) {
                const limbAttack4145Rand = Math.floor(Math.random()*limbAttackArray.length);
                const limbAttack4145 = limbAttackArray[limbAttack4145Rand];

                const specialPull4145Rand = Math.floor(Math.random()*specialPullArray.length);
                const specialPull4145 = specialPullArray[specialPull4145Rand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${limbAttack4145}, ${specialPull4145}`;


                const mobilityButton = document.createElement('button');
                const mobilityText = document.createElement('p');

                mobilityButton.setAttribute("onclick", "rollMobility()");
                mobilityButton.id = 'mobilityButton';
                mobilityButton.innerText = 'Method of Locomotion';

                mobilityText.id = 'mobilityText';

                document.getElementById('mobilityDiv').appendChild(mobilityButton);
                document.getElementById('mobilityDiv').appendChild(mobilityText);

        } else if (plantSpecType === plantSpecType4650) {
                const limbAttackRand = Math.floor(Math.random()*limbAttackArray.length);
                const limbAttack = limbAttackArray[limbAttackRand];

                const specialPullRand = Math.floor(Math.random()*specialPullArray.length);
                const specialPull = specialPullArray[specialPullRand];

                const augmentAttackRand = Math.floor(Math.random()*augmentAttackArray.length);
                const augmentAttack = augmentAttackArray[augmentAttackRand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${limbAttack}, ${specialPull}, ${augmentAttack}`;


                const mobilityButton = document.createElement('button');
                const mobilityText = document.createElement('p');

                mobilityButton.setAttribute("onclick", "rollMobility()");
                mobilityButton.id = 'mobilityButton';
                mobilityButton.innerText = 'Method of Locomotion';

                mobilityText.id = 'mobilityText';

                document.getElementById('mobilityDiv').appendChild(mobilityButton);
                document.getElementById('mobilityDiv').appendChild(mobilityText);

        } else if (plantSpecType === plantSpecType5155) {
                const physDistanceAttackRand = Math.floor(Math.random()*physDistanceAttackArray.length);
                const physDistanceAttack = physDistanceAttackArray[physDistanceAttackRand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${physDistanceAttack}`;
        } else if (plantSpecType === plantSpecType5660) {
                const limbAttackRand = Math.floor(Math.random()*limbAttackArray.length);
                const limbAttack = limbAttackArray[limbAttackRand];

                const physDistanceAttackRand = Math.floor(Math.random()*physDistanceAttackArray.length);
                const physDistanceAttack = physDistanceAttackArray[physDistanceAttackRand];


                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${limbAttack}, ${physDistanceAttack}`;


                const mobilityButton = document.createElement('button');
                const mobilityText = document.createElement('p');

                mobilityButton.setAttribute("onclick", "rollMobility()");
                mobilityButton.id = 'mobilityButton';
                mobilityButton.innerText = 'Method of Locomotion';

                mobilityText.id = 'mobilityText';

                document.getElementById('mobilityDiv').appendChild(mobilityButton);
                document.getElementById('mobilityDiv').appendChild(mobilityText);

        } else if (plantSpecType === plantSpecType6165) {
                const limbAttackRand = Math.floor(Math.random()*limbAttackArray.length);
                const limbAttack = limbAttackArray[limbAttackRand];

                const physDistanceAttackRand = Math.floor(Math.random()*physDistanceAttackArray.length);
                const physDistanceAttack = physDistanceAttackArray[physDistanceAttackRand];

                const augmentAttackRand = Math.floor(Math.random()*augmentAttackArray.length);
                const augmentAttack = augmentAttackArray[augmentAttackRand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${limbAttack}, ${physDistanceAttack}, ${augmentAttack}`;


                const mobilityButton = document.createElement('button');
                const mobilityText = document.createElement('p');

                mobilityButton.setAttribute("onclick", "rollMobility()");
                mobilityButton.id = 'mobilityButton';
                mobilityButton.innerText = 'Method of Locomotion';

                mobilityText.id = 'mobilityText';

                document.getElementById('mobilityDiv').appendChild(mobilityButton);
                document.getElementById('mobilityDiv').appendChild(mobilityText);

        } else if (plantSpecType === plantSpecType6670) {
                const physDistanceAttackRand = Math.floor(Math.random()*physDistanceAttackArray.length);
                const physDistanceAttack = physDistanceAttackArray[physDistanceAttackRand];

                const specEffectRand = Math.floor(Math.random()*specEffectArray.length);
                const specEffect = specEffectArray[specEffectRand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${physDistanceAttack} with a special effect: ${specEffect}`;
        } else if (plantSpecType === plantSpecType7175) {
                const limbAttackRand = Math.floor(Math.random()*limbAttackArray.length);
                const limbAttack = limbAttackArray[limbAttackRand];

                const physDistanceAttackRand = Math.floor(Math.random()*physDistanceAttackArray.length);
                const physDistanceAttack = physDistanceAttackArray[physDistanceAttackRand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${limbAttack}, ${physDistanceAttack}`;


                const mobilityButton = document.createElement('button');
                const mobilityText = document.createElement('p');

                mobilityButton.setAttribute("onclick", "rollMobility()");
                mobilityButton.id = 'mobilityButton';
                mobilityButton.innerText = 'Method of Locomotion';

                mobilityText.id = 'mobilityText';

                document.getElementById('mobilityDiv').appendChild(mobilityButton);
                document.getElementById('mobilityDiv').appendChild(mobilityText);

        } else if (plantSpecType === plantSpecType7680) {
                const limbAttackRand = Math.floor(Math.random()*limbAttackArray.length);
                const limbAttack = limbAttackArray[limbAttackRand];

                const physDistanceAttackRand = Math.floor(Math.random()*physDistanceAttackArray.length);
                const physDistanceAttack = physDistanceAttackArray[physDistanceAttackRand];

                const augmentAttackRand = Math.floor(Math.random()*augmentAttackArray.length);
                const augmentAttack = augmentAttackArray[augmentAttackRand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${limbAttack}, ${physDistanceAttack}, ${augmentAttack}`;


                const mobilityButton = document.createElement('button');
                const mobilityText = document.createElement('p');

                mobilityButton.setAttribute("onclick", "rollMobility()");
                mobilityButton.id = 'mobilityButton';
                mobilityButton.innerText = 'Method of Locomotion';

                mobilityText.id = 'mobilityText';

                document.getElementById('mobilityDiv').appendChild(mobilityButton);
                document.getElementById('mobilityDiv').appendChild(mobilityText);

        } else if (plantSpecType === plantSpecType8185) {
                const specEffectRand = Math.floor(Math.random()*specEffectArray.length);
                const specEffect = specEffectArray[specEffectRand];

                const limbAttackRand = Math.floor(Math.random()*limbAttackArray.length);
                const limbAttack = limbAttackArray[limbAttackRand];

                const specialPullRand = Math.floor(Math.random()*specialPullArray.length);
                const specialPull = specialPullArray[specialPullRand];

                const physDistanceAttackRand = Math.floor(Math.random()*physDistanceAttackArray.length);
                const physDistanceAttack = physDistanceAttackArray[physDistanceAttackRand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `The plant is rooted to the ground, but supercharged with weaponry. It has a melee attack (${limbAttack}), a pulling attack (${specialPull}), and a distance attack (${physDistanceAttack}) with a Special Effect: ${specEffect}`;

        } else if (plantSpecType === plantSpecType8690) {
                const physDistanceAttackRand = Math.floor(Math.random()*physDistanceAttackArray.length);
                const physDistanceAttack = physDistanceAttackArray[physDistanceAttackRand];

                const specEffectRand = Math.floor(Math.random()*specEffectArray.length);
                const specEffect = specEffectArray[specEffectRand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${physDistanceAttack}, ${specEffect}`;


                const mobilityButton = document.createElement('button');
                const mobilityText = document.createElement('p');

                mobilityButton.setAttribute("onclick", "rollMobility()");
                mobilityButton.id = 'mobilityButton';
                mobilityButton.innerText = 'Method of Locomotion';

                mobilityText.id = 'mobilityText';

                document.getElementById('mobilityDiv').appendChild(mobilityButton);
                document.getElementById('mobilityDiv').appendChild(mobilityText);

        } else if (plantSpecType === plantSpecType9195) {
                const physDistanceAttack1Rand = Math.floor(Math.random()*physDistanceAttackArray.length);
                const physDistanceAttack1 = physDistanceAttackArray[physDistanceAttack1Rand];

                const physDistanceAttack2Rand = Math.floor(Math.random()*physDistanceAttackArray.length);
                const physDistanceAttack2 = physDistanceAttackArray[physDistanceAttack2Rand];

                const specEffectRand = Math.floor(Math.random()*specEffectArray.length);
                const specEffect = specEffectArray[specEffectRand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `The plant is rooted to the ground. It has one Physical Distance Attack that causes damage (${physDistanceAttack1}), and it has a second physical Distance Attack (${physDistanceAttack2}) with a Special Effect: ${specEffect}`;
        
        } else if (plantSpecType === plantSpecType96100) {
                const limbAttackRand = Math.floor(Math.random()*limbAttackArray.length);
                const limbAttack = limbAttackArray[limbAttackRand];

                const specEffectRand = Math.floor(Math.random()*specEffectArray.length);
                const specEffect = specEffectArray[specEffectRand];

                const specialPullRand = Math.floor(Math.random()*specialPullArray.length);
                const specialPull = specialPullArray[specialPullRand];

                const physDistanceAttackRand = Math.floor(Math.random()*physDistanceAttackArray.length);
                const physDistanceAttack = physDistanceAttackArray[physDistanceAttackRand];

                const augmentAttackRand = Math.floor(Math.random()*augmentAttackArray.length);
                const augmentAttack = augmentAttackArray[augmentAttackRand];

                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = `${plantSpecType}: ${limbAttack}, ${augmentAttack}, ${specialPull}, ${physDistanceAttack} (${specEffect})`;


                const mobilityButton = document.createElement('button');
                const mobilityText = document.createElement('p');

                mobilityButton.setAttribute("onclick", "rollMobility()");
                mobilityButton.id = 'mobilityButton';
                mobilityButton.innerText = 'Method of Locomotion';

                mobilityText.id = 'mobilityText';

                document.getElementById('mobilityDiv').appendChild(mobilityButton);
                document.getElementById('mobilityDiv').appendChild(mobilityText);

        } else {
                document.getElementById('plantSpecTypeText').innerText = '';
                document.getElementById('plantSpecTypeText').innerText = plantSpecType;
        }



}

function rollReproduction() {
        const plantReproduceCycleRand = Math.floor(Math.random()*plantReproduceCycleArray.length);
        const plantReproduceCycle = plantReproduceCycleArray[plantReproduceCycleRand];

        document.getElementById('reproductionText').innerText = '';
        document.getElementById('reproductionText').innerText = plantReproduceCycle;
}

function rollMobility() {
        document.getElementById('mobilityText').innerText = '';

        const plantMoveMethodRand = Math.floor(Math.random()*plantMoveMethodArray.length);
        const plantMoveMethod = plantMoveMethodArray[plantMoveMethodRand];

        document.getElementById('mobilityText').innerText = '';
        document.getElementById('mobilityText').innerText = plantMoveMethod;
}


const plantBasicForm0105 = 'bamboo';
const plantBasicForm0610 = 'broad leaves';
const plantBasicForm1115 = 'bush or shrub';
const plantBasicForm1620 = 'cone';
const plantBasicForm2125 = 'coral-type growth';
const plantBasicForm2630 = 'fern';
const plantBasicForm3135 = 'grass-like stalks';
const plantBasicForm3640 = 'hanging moss';
const plantBasicForm4145 = 'ivy';
const plantBasicForm4650 = 'lump';
const plantBasicForm5155 = 'mold';
const plantBasicForm5660 = 'mushroom';
const plantBasicForm6165 = 'sphere';
const plantBasicForm6670 = 'thorn-bush';
const plantBasicForm7175 = 'palm tree';
const plantBasicForm7680 = 'pine tree';
const plantBasicForm8185 = 'short tree';
const plantBasicForm8690 = 'tall tree';
const plantBasicForm9195 = 'underground bulbs';
const plantBasicForm96100 = 'vines';

const plantBasicFormArray = [plantBasicForm0105, plantBasicForm0610, plantBasicForm1115, plantBasicForm1620, plantBasicForm2125, plantBasicForm2630, plantBasicForm3135, plantBasicForm3640, plantBasicForm4145, plantBasicForm4650, plantBasicForm5155, plantBasicForm5660, plantBasicForm6165, plantBasicForm6670, plantBasicForm7175, plantBasicForm7680, plantBasicForm8185, plantBasicForm8690, plantBasicForm9195, plantBasicForm96100];


const plantSpecType0105 = 'Limbs or body-part moves, but the rest of the plant is immobile (rooted). The plant is purely a melee fighter. (Roll on Table 2-74: Limb Attacks).';
const plantSpecType0610 = 'Limbs or body part moves, but the rest of the plant is immobile. The plant uses a special attack to augment damage from the limbs: roll on the Limb Attacks Table (2-74) to get ideas for the limbs, and roll on Table 2-61 to get ideas for the nature of the augmenting attack.';
const plantSpecType1115 = 'Limbs or body part moves, but the rest of the plant is immobile. The plant uses a special "pulling" attack to draw prey to the limbs: roll on the Limb Attacks Table (2-74) to get ideas for the limbs, and roll on Table 2-61 to get ideas for the nature of the special pulling attack.';
const plantSpecType1620 = 'Limbs or a body part of the plant move (roll on Table 2-74 for ideas), but the rest of the plant is immobile. The plant not only uses a special "pulling" attack to draw prey towards it, but also has a special attack to augment damage from the limbs. Roll on both columns of Table 2-61 to determine the natuyre of the pulling and augmenting special attacks.';
const plantSpecType2125 = 'No part of the plant moves, but it delivers a poisonous or transformational substance into its near vicinity. Delivery mechanisms include: spores, smells, spiked seed-pods on the ground, blown leaves, and gases. The result of falling prey to these substances include turning into a similar plant, turning into a plant-creature controlled by the plant, turning into a seed-carrier for the plant, or just dying to create fertilizer. Keep in mind that creatures killed for fertilizer might also be caused to rot faster than normal after dying.';
const plantSpecType2630 = 'No part of the plant moves, but it has mental powers. These probably include the telekinetic ability to damage opponents using nearby rocks or equipment, or even picking opponents up. Other possibilities include mental powers that mimic enchantment-type magic - the plant can dominate someone\'s mind to create an ally (who will later be used to fetch fertilizing carcasses to the plant\'s roots).';
const plantSpecType3135 = 'The plant is mobile (see Table 2-60 for ideas about mobility methods). It is purely a melee fighter, using its movement ability solely to get into close enough range for hand-tobranch combat. Roll on the Limb Attacks Table (2-74) to get ideas for how it attacks.';
const plantSpecType3640 = 'The plant is mobile (see Table 2-60 for ideas about mobility methods). In addition to fighting with mobile limbs (see Table 2-74 Limb Attacks), it has an Augmenting Attack from Table 2-61.';
const plantSpecType4145 = 'The plant is mobile (see Table 2-60 for ideas about mobility methods). In addition to fighting with mobile limbs (see Table 2-74 Limb Attacks), it has a pulling attack from Table 2-61.';
const plantSpecType4650 = 'The plant is mobile (see Table 2-60 for ideas about mobility methods). In addition to fighting with mobile limbs (Table 2-74 Limb Attacks), it has a Pulling Attack AND an Augmenting Attack, both from Table 2-61.';
const plantSpecType5155 = 'The plant is entirely immobile, but it has a Physical Distance Attack (see Table 2-62). The Physical Distance Attack causes general damage (hit points or equivalent).';
const plantSpecType5660 = 'The plant is mobile (see Table 2-60 for ideas about mobility methods). In addition to fighting with mobile limbs (see Table 2-74 Limb Attacks), it has a Physical Distance Attack from Table 2-62. The Physical Distance Attack causes general damage (hit points or equivalnet).';
const plantSpecType6165 = 'The plant is mobile (see Table 2-60 for ideas about mobility methods). In addition to fighting with mobile limbs (see Table 2-74 Limb Attacks), it has a Physical Distance Attack (Table 2-61) AND an Augmenting Attack (Table 2-62). The Physical Distance Attack causes general damage (hit points or equivalent).';
const plantSpecType6670 = 'The plant is entirely immobile, but it has a Physical Distance Attack (see Table 2-62). The Physical Distance Attack has a Special Effect (Table 2-62).';
const plantSpecType7175 = 'The plant is mobile (see Table 2-60 for ideas about mobility methods). In addition to fighting with mobile limbs (see Limb Attacks Table), it has a Physical Distance Attack from Table 2-62. The Physical Distance Attack causes general damage (hit points or equivalent).';
const plantSpecType7680 = 'The plant is mobile (see Table 2-60 for ideas about mobility methods). In addition to fighting with mobile limbs (see Limb Attacks Table), it has a Physical Distance Attack (Table 2-62) AND an Augmenting Attack (Table 2-62). The Physical Distance Attack causes general damage (hit points or equivalent).';
const plantSpecType8185 = 'The plant is rooted to the ground, but super-charged with weaponry. It has a melee attack (see Table 2-74 Limb Attacks), a pulling attack (Table 2-61), and a Distance Attack with a Special Effect.';
const plantSpecType8690 = 'The plant moves (Table 2-60) and has a Physical Distance Attack (Table 2-62) with a special effect. However, it does not have a melee attack of any kind.';
const plantSpecType9195 = 'The plant is rooted to the ground. It has one Physical Distance Attack that causes damage (Table 2-62), and it has a second Physical DIstance Attack with a special effect (Table 2-62).';
const plantSpecType96100 = 'The plant is a botanical war machine. It moves (Table 2-60). It has a limb attack (Table 2-74). It has an Augmenting Attack (2-62). It has a Pulling Attack (Table 2-61). It has a Physical Distance Attack, and the Physical Distance Attack has a Special Effect (Table 2-62). Do not trifle with this plant: it will turn you into seeds and fertilizer faster than you can say, "It\'s just a plant, pass me one of the torches.';

const plantSpecTypeArray = [plantSpecType0105, plantSpecType0610, plantSpecType1115, plantSpecType1620, plantSpecType2125, plantSpecType2630, plantSpecType3135, plantSpecType3640, plantSpecType4145, plantSpecType4650, plantSpecType5155, plantSpecType5660, plantSpecType6165, plantSpecType6670, plantSpecType7175, plantSpecType7680, plantSpecType8185, plantSpecType8690, plantSpecType9195, plantSpecType96100];


        /* Movement method cycle */
const moveMethod0110 = 'glides or flies using wing-like growths';
const moveMethod1120 = 'jet propulsion in water';
const moveMethod2130 = 'levitates';
const moveMethod3140 = 'pulls self along with short tendrils';
const moveMethod4150 = 'pulls self along with vines';
const moveMethod5160 = 'rippling movements like a snail or slug';
const moveMethod6170 = 'slithers like a snake';
const moveMethod7180 = 'turns ground to liquid or mud for movement';
const moveMethod81100 = 'walks on legs';

const plantMoveMethodArray = [moveMethod0110, moveMethod1120, moveMethod2130, moveMethod3140, moveMethod4150, moveMethod5160, moveMethod6170, moveMethod7180, moveMethod81100];
const plantMoveMethodRand = Math.floor(Math.random()*plantMoveMethodArray.length);
const plantMoveMethod = plantMoveMethodArray[plantMoveMethodRand];

        /* Attack tables */
                        /* Augmenting Attacks Table 2-61 */
const augmentAttack0110 = 'The plant has the equivalent of a mouth, which could include splitting a large part of itself open (like a Venus Flytrap) or even splitting its whole body open. The mouth is the main source of damage: it might crush its victims or it might have the plant equivalent of teeth, using internal thorns or spines. A mouth with a sludgy interior might slop the victim with digestive juices. Unless the plant is mobile and fast, it will need some sort of motile grabbing limb to get its victims into the mouth.';
const augmentAttack1120 = 'The plant has motile vines or tendrils that inflict an unusual type of additional damage, usually automatic and progressive if the tendrils managae to grab and hold the victim. THe following are ideas for such damage: poison (instantly lethal, progressively lethal, or progressively damaging), heat, cold, acid, electricity, squeezing, and thorns.';
const augmentAttack2130 = 'The plant enfolds its victims and begins to digest them using acidic sap or other digestive substances.';
const augmentAttack3140 = 'The plan enfolds its victims and beings to incorporate them into its own body, changing them to plant matter or lacing them through with tiny digestive tendrils that aren\'t easily removed.';
const augmentAttack4150 = 'The plant\'s motile limbs can cause the victim to become paralyzed or otherwise helpless (go limp from pleasurable narcotic, be electrically stunned, turn rigid from a poisonous substance, etc.).';
const augmentAttack5160 = 'Confusion. A substance on the plant\'s motile limbs acts like a drug, causing victims to move, or even attack, randomly.';
const augmentAttack6170 = 'The plant has a substance (coated with sap or slime) or an injector (thorns) on its body. Motile limbs grab victims and carry them to the body so that these short-range weapons can be used. The substance causes a transformation in the victim. He progressively turns into a "plant zombie" with seeds attached to him, and starts traveling around while shedding the seeds (this is how the plant reproduces).';
const augmentAttack7180 = 'The plants motile limbs stun a victim for short periods of time when they hit (a saving throw might or might not apply). If the limbs cause clubbing-type damage, the stunning is simply caused by the force of the blow. If the limbs cause cutting or piercing type damage, then the stunning is caused by a weak poison in the creature\'s sap.';
const augmentAttack81100 = 'The plant is a dangerous one, with lethal poison on its limb attack. The poison might not be instantly lethal, but it\'s a possibility - especially if the plant is rooted to the ground, since an escaping poison victim won\'t die near the roots. Slow poison; no fertilizer.';

const augmentAttackArray = [augmentAttack0110, augmentAttack1120, augmentAttack2130, augmentAttack3140, augmentAttack4150, augmentAttack5160, augmentAttack6170, augmentAttack7180, augmentAttack81100];
const augmentAttackRand = Math.floor(Math.random()*augmentAttackArray.length);
const augmentAttack = augmentAttackArray[augmentAttackRand];

                        /* Special Pulling Attacks Table 2-61 */
const specialPull0110 = 'Hallucinogenic dust, spores, or smell causes victim to see the plant as something attractive that he wants to touch. An attractive member of the opposite sex or piles of treasure are good examples, although the specific nature of your adventure might suggest other ideas. Roll on Table 2-61 to get ideas about how the plant delivers the substance.';
const specialPull1120 = 'The plant can animate other nearby plants (probably symbiotes) so that they entangle and pull prey toward it.';
const specialPull2130 = 'The plant uses a rudimentary form of magic to enchant its prey. The victim walks toward the plant, and takes no other actions.';
const specialPull3140 = 'The plant uses a rudimentary form of magic to enchant its prey. The victim will eventually be eaten, but first it will try to pull nearby creatures (other characters) toward the plant.';
const specialPull4150 = 'The plant issues a highly attractive narcotic smell, which causes victims to forget what they are doing and move toward the plant.';
const specialPull5160 = 'The plant has an organ (possibly even a human-looking eye) that functions as a gaze attack. The organ might always be visible, or part of the plant might open up to reveal it during combat. Those affected by the attack will move toward the plant.';
const specialPull6170 = 'The plant has a rudimentary teleportation ability. For an interesting twist, try having teleportation be the result of a failed saving throw against a Physical Distance Attack on Table 2-61. That\'s pretty darn weird.';
const specialPull7180 = 'The plant zaps potential victims with a magical ray, hypnotizing or charming them. They proceed to walk zombie-like into the plant\'s clutches.';
const specialPull81100 = 'The plant can grow thin roots (about the width of twine) that crawl out very quickly from the plant\'s central body. If one of these roots manages to catch up with prey, the central plant pumps nutrients into it, letting it thicken to the width of a rope that can haul the victim back by the ankles. This sort of attack makes for a good tactical encounter, since the rootlets can grow around corners and the party might have to divide its efforts between attacking the plant\'s central body or hacking at little rootlets.';

const specialPullArray = [specialPull0110, specialPull1120, specialPull2130, specialPull3140, specialPull4150, specialPull5160, specialPull6170, specialPull7180, specialPull81100];
const specialPullRand = Math.floor(Math.random()*specialPullArray.length);
const specialPull = specialPullArray[specialPullRand];

                        /* Physical Distance Attacks Table 2-62 */
const physDistanceAttack0105 = 'Bomb or grenade-type attack. The plant hurls big seed-pods, spore-sacs, or gas-builds. They might hit the target directly or not, but they also have a burst radius.';
const physDistanceAttack0610 = 'Exhaled cloud (gas or mist)';
const physDistanceAttack1115 = 'Exhaled cone (gas or mist)';
const physDistanceAttack1620 = 'Gas or mist (radial release in all directions';
const physDistanceAttack2125 = 'Gas or mist: exhaled stream at single opponent';
const physDistanceAttack2630 = 'Horrid, massive, vomit-eruption of liquid or goo (short range, but hits anyone in the area)';
const physDistanceAttack3135 = 'Hurls, fires, or spits: needles, thorns, or spikes';
const physDistanceAttack3640 = 'Ray (uses eyelike organ, eyestalks, or other non-eyelike organ';
const physDistanceAttack4145 = 'Smell (directed squirt at a single target)';
const physDistanceAttack4650 = 'Smell (in directed cone)';
const physDistanceAttack5155 = 'Smell (radius)';
const physDistanceAttack5660 = 'Spit (glob or liquid, single target)';
const physDistanceAttack6165 = 'Spit (line of liquid, ooze, or sap)';
const physDistanceAttack6670 = 'Spores (cone)';
const physDistanceAttack7175 = 'Spores (launches a "bag" that explodes)';
const physDistanceAttack7680 = 'Spores (line toward single opponent)';
const physDistanceAttack8185 = 'Spores (radial "burst")';
const physDistanceAttack8690 = 'Spray (cone of liquid, ooze, or sap)';
const physDistanceAttack9195 = 'Spray (line of liquid, ooze, or sap aimed at single opponent)';
const physDistanceAttack96100 = 'Squirt liquid (single target)';

const physDistanceAttackArray = [physDistanceAttack0105, physDistanceAttack0610, physDistanceAttack1115, physDistanceAttack1620, physDistanceAttack2125, physDistanceAttack2630, physDistanceAttack3135, physDistanceAttack3640, physDistanceAttack4145, physDistanceAttack4650, physDistanceAttack5155, physDistanceAttack5660, physDistanceAttack6165, physDistanceAttack6670, physDistanceAttack7175, physDistanceAttack7680, physDistanceAttack8185, physDistanceAttack8690, physDistanceAttack9195, physDistanceAttack96100];
const physDistanceAttackRand = Math.floor(Math.random()*physDistanceAttackArray.length);
const physDistanceAttack = physDistanceAttackArray[physDistanceAttackRand];

const specEffect0105 = 'Acid (damage for a series of rounds, and stronger acids might damage equipment)';
const specEffect0610 = 'Cold. Some sort of chemical reaction in the substance of the distance attack makes it cause damaging cold. For the life of me, I can\'t figure out how this would fit into a plant\'s life cycle, but it\'s an interesting thought, isnt\'t it?';
const specEffect1115 = 'Confusion. THe substance is like a drug, causing victims to move, or even attack, randomly.';
const specEffect1620 = 'Disease causing a transformation in the victim. He progressively turns into a "plant zombie" with seeds attached to him, and starts traveling around while shedding the seeds (this is how the plant reproduces).';
const specEffect2125 = 'Disease causing a trnasformation in the victim: turns into one of these plant creatures (in a matter of days).';
const specEffect2630 = 'Disease causing slow but progressive onset of paralysis (not lethal, but the effects might last for days).';
const specEffect3135 = 'Disease causing the victim to carry spores or seeds. In a matter of days, he turns into a "bag" of spores or seeds, and explodes or otherwise dies. This is how the plant spreads its seeds. There should be a physical sign of the condition so the players know that they need to get the character cured before he dies.';
const specEffect3640 = 'Disease with slow onset of death (measured in several melee rounds, not days).';
const specEffect4145 = 'Double-whammy. The victim gets an uncontrollable hunger to eat fruit from the plant. Not only does this bring him close to the plant, where it can attack him, but the fruit does something very unpleasant as well, if he manages to eat it.';
const specEffect4650 = 'Hallucinations. These could cause a multitude of effects: fear, confused and unpredictable actions, attempts to damage oneself, etc.';
const specEffect5155 = 'Heat. Some sort of chemical reaction is intended to cook the plant\'s food. Powerful versions of this might cause metal armor to inflict damage for more than one combat round.';
const specEffect5660 = 'Lethal poison with rapid or immediate onset of death.';
const specEffect6165 = 'Lethal poison with slow onset (but probably causing immediate and progressive weakness).';
const specEffect6670 = 'Mental control by plant. The substance delivered by the physical distance attack allows the victim to perceive mind-waves emanating from the plant, and he follows its commands. If he makes a saving throw, he might get the interesting result of hearing the commands but not feeling compelled to follow them.';
const specEffect7175 = 'Non-lethal poison causing fear (flight or disorganized retreat).';
const specEffect7680 = 'Non-lethal poison causing lethargy or slowness of action.';
const specEffect8185 = 'Non-lethal poison causes metnal-type paralysis (renders victim utterly blissful, causes victim not to care about movement, causes paralyzing fear, etc.)';
const specEffect8690 = 'Non-lethal poison causing physical paralysis.';
const specEffect9195 = 'Non-lethal poison causing effective paralysis: e.g. nausea or seizures.';
const specEffect96100 = 'Uncontrolled emotion. The effect of the substance on humans is an uncontrolled emotion such as berserker rage, incapacitating sorrow, fits of uncontrolled laughter, or some similar effect.';

const specEffectArray = [specEffect0105, specEffect0610, specEffect1115, specEffect1620, specEffect2125, specEffect2630, specEffect3135, specEffect3640, specEffect4145, specEffect4650, specEffect5155, specEffect5660, specEffect6165, specEffect6670, specEffect7175, specEffect7680, specEffect8185, specEffect8690, specEffect9195, specEffect96100];
const specEffectRand = Math.floor(Math.random()*specEffectArray.length);
const specEffect = specEffectArray[specEffectRand];


        /* Reproductive cycle */
const plantReproduceCycle0120 = 'The plant injects or drops seeds into the water. The seeds become tadpole-like creatures (animal or vegetable, it doesn\'t matter). The tadpoles swim to new locations using their whip-like tentacles. They die, and the internal seed-matter begins to grow as a new plantFormArray.';
const plantReproduceCycle2140 = 'The plant doesn\'t just produce seeds - it produces flying insects (whether these are true animals or plant-insects doesn\'t matter). The insects fly about for a while, die, fall to the ground, and germinate into new plants.';
const plantReproduceCycle4160 = 'By whatever means the plant might also grab hold of adventurers, it grabs birds and small animals such as rabbits and chipmunks. It injects these creatures with seed-larva. Then it releases the small creature, which carries along in its merry way until the larva eat it from within and germinate in its dead carcass.';
const plantReproduceCycle6180 = 'The plant drops a "phase one" seed into the ground. The phase one seed grows into a small, mobile plant that scurries away. The mobile plant proceeds to scatter "phase two" seeds as it travels. The "phase two" seeds grow into the original plant form, which then begins to produce more "phase one" seeds.';
const plantReproduceCycle81100 = 'The plant produces shiny, gem-like seeds. These are picked up by birds, which carry them away to put into nests. When the seeds sprout, they send out little vines that feed upon eggs.';

const plantReproduceCycleArray = [plantReproduceCycle0120, plantReproduceCycle2140, plantReproduceCycle4160, plantReproduceCycle6180, plantReproduceCycle81100];




/* Head attacks Table 2-73 */
const headAttackArray = ['antenna (whip or grab)', 'antenna (piercing)', 'antennae (slashing)', 'antlers', 'facial tentacles (cutting)', 'facial tentacles (grabbing)', 'facial tentacles (piercing)', 'head butt', 'head butt (cutting)', 'head butt (spiked)', 'mouth bite (beak)', 'mouth bite (giant swallowing-mouth)', 'mouth bite (grinding plates)', 'mouth bite (mandibles)', 'mouth bite (teeth or fangs)', 'one horn', 'mouth bite (teeth or fangs)', 'tongue (2-77)', 'tongue (2-77)', 'two horns'];
const headAttackRand = Math.floor(Math.random()*headAttackArray.length);
const headAttack = headAttackArray[headAttackRand];
        /* Limb attacks Table 2-74 */
const limbAttackArray = ['claws', 'pincer arm(s)', 'tentacles', 'pseudopods', 'wing buffet', 'trample', 'talons', 'clubbing limb', 'cutting/scything limb', 'piercing limb', 'whip-limb', 'uses weapon'];
const limbAttackRand = Math.floor(Math.random()*limbAttackArray.length);
const limbAttack = limbAttackArray[limbAttackRand];
        /* Body attacks Table 2-75 */
const bodyAttackArray = ['adheres and dissolves/digests', 'body slam (crushing)', 'body slam (spiked)', 'constricts and crushes', 'constricts and digests', 'constricts and permits extra attack', 'enfolds and crushes', 'enfolds and dissolves/digests', 'enfolds and suffocates', 'engulfs and digests'];
const bodyAttackRand = Math.floor(Math.random()*bodyAttackArray.length);
const bodyAttack = bodyAttackArray[bodyAttackRand];
        /* Tail attacks Table 2-76 */
const tailAttackArray = ['club-ended', 'constricts and crushes', 'constricts and permits extra attacks', 'cutting ridges', 'fires missile(s)', 'pierces', 'spike-ended', 'stinger', 'uses weapon', 'whips/lashes'];
const tailAttackRand = Math.floor(Math.random()*tailAttackArray.length);
const tailAttack = tailAttackArray[tailAttackRand];
        /* Tongue attacks Table 2-77 */
const tongueAttackArray = ['grabs and adheres', 'grabs and crushes', 'grabs and encircles', 'grabs and pulls', 'grabs and rasps', 'grabs and strangles', 'holds and acidic', 'holds and poison', 'pierces', 'pierces and injects acid or poison'];
const tongueAttackRand = Math.floor(Math.random()*tongueAttackArray.length);
const tongueAttack = tongueAttackArray[tongueAttackRand];

        /* special attack delivery method Table 2-78 */
const specDeliveryArray = ['appearance (changes to dangerous appearance)', 'appearance (normal appearance is dangerous)', 'cast like a spell (affects number of hit dice)', 'cast like a spell (area effect)', 'cast like a spell (one target)', 'cast like a spell (radius around monster)', 'constant effect (radius)', 'exhaled cloud', 'exhaled cone', 'exhaled line', 'gaze', 'gives off gas', 'mental power (affects number of hit dice)', 'mental power (area effect)', 'mental power (burst in radius around monster)', 'mental power (one target)', 'ray (eye, eyestalks, or other organ)', 'smell (radius)', 'smell (squirted, cone)', 'smell (squirted, single target)', 'sound (clicks, etc.)(radius around monster)', 'speech (in radius from monster)', 'spit (glob, single target)', 'spit (line)', 'spray (cone)', 'spray (line)', 'squirt liquid (single target)', 'touch'];
const specDeliveryRand = Math.floor(Math.random()*specDeliveryArray.length);
const specDelivery = specDeliveryArray[specDeliveryRand];