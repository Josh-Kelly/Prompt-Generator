function rollAnimalCharacteristics() {
    const animalCharsRand = Math.floor(Math.random()*attMixArray.length);
    const charNum = animalCharacteristicArray[animalCharsRand];

    if (charNum === animalCharacteristic81100) {
        const attMix1Rand = Math.floor(Math.random()*attMixArray.length);
        const attMix1 = attMixArray[attMix1Rand];

        const attMix2Rand = Math.floor(Math.random()*attMixArray.length);
        const attMix2 = attMixArray[attMix2Rand];


        document.getElementById('animalCharacteristicsText').innerText = '';
        document.getElementById('animalCharacteristicsText').innerText = `A mix of ${attMix1} and ${attMix2}, bipedal and with opposable thumbs.`;
    } else {
        const attMix1Rand = Math.floor(Math.random()*attMixArray.length);
        const attMix1 = attMixArray[attMix1Rand];

        document.getElementById('animalCharacteristicsText').innerText = '';
        document.getElementById('animalCharacteristicsText').innerText = `${attMix1}`;
    }

}

function rollHumanMod() {
    const addModRand = Math.floor(Math.random()*humanModArray.length);
    const addMod = humanModArray[addModRand];

    if (addMod === humanMod81100) {
        const attMix3Rand = Math.floor(Math.random()*attMixArray.length);
        const attMix3 = attMixArray[attMix3Rand];

        document.getElementById('humanModText').innerText = '';
        document.getElementById('humanModText').innerText = `With a bunch of weird modifications based on ${attMix3}`;
    } else {
        const humanModRand = Math.floor(Math.random()*humanModArray.length);
        const humanMod = humanModArray[humanModRand];

        document.getElementById('humanModText').innerText = '';
        document.getElementById('humanModText').innerText = `${humanMod}`;
    }


}

function rollDescriptor1() {
    const descriptor1Rand = Math.floor(Math.random()*basicDescriptionArray.length);
    const descriptor1 = basicDescriptionArray[descriptor1Rand];

    if (descriptor1 === basicDescription2130) {
        const specDelivery1Rand = Math.floor(Math.random()*specDeliveryArray.length);
        const specDelivery1 = specDeliveryArray[specDelivery1Rand];

        const genSpecAttackRand = Math.floor(Math.random()*genSpecAttackArray.length);
        const genSpecAttack = genSpecAttackArray[genSpecAttackRand];


        document.getElementById('descriptorOneText').innerText = '';
        document.getElementById('descriptorOneText').innerText = `${descriptor1}`;

        document.getElementById('additionalOneText').innerText = '';
        document.getElementById('additionalOneText').innerText = `Suggestion from Tables 2-78 and 2-79: ${specDelivery1}, ${genSpecAttack}`;
    } else if (descriptor1 === basicDescription5160) {
        const primeCasterCharRand = Math.floor(Math.random()*primLeadershipCharacteristicArray.length);
        const primeCasterChar = primLeadershipCharacteristicArray[primeCasterCharRand];
    
        const secondCasterCharRand = Math.floor(Math.random()*secondLeadershipCharacteristicArray.length);
        const secondCasterChar = secondLeadershipCharacteristicArray[secondCasterCharRand];

        document.getElementById('descriptorOneText').innerText = '';
        document.getElementById('descriptorOneText').innerText = `${descriptor1}`;

        document.getElementById('additionalOneText').innerText = '';
        document.getElementById('additionalOneText').innerText = `(${primeCasterChar}, ${secondCasterChar})`;
    } else if (descriptor1 === basicDescription6170) {
        const reproCycleRand = Math.floor(Math.random()*reproCycleArray.length);
        const reproCycle = reproCycleArray[reproCycleRand];

        document.getElementById('descriptorOneText').innerText = '';
        document.getElementById('descriptorOneText').innerText = `${descriptor1}`;

        document.getElementById('additionalOneText').innerText = '';
        document.getElementById('additionalOneText').innerText = `${reproCycle}`;
    } else if (descriptor1 === basicDescription7180) {
        const humanoidSpecDefenseRand = Math.floor(Math.random()*specDefenseAbilityArray.length);
        const humanoidSpecDefense = specDefenseAbilityArray[humanoidSpecDefenseRand];

        document.getElementById('descriptorOneText').innerText = '';
        document.getElementById('descriptorOneText').innerText = `${descriptor1}`;

        document.getElementById('additionalOneText').innerText = '';
        document.getElementById('additionalOneText').innerText = `${humanoidSpecDefense}`;
    } else {
        document.getElementById('descriptorOneText').innerText = '';
        document.getElementById('descriptorOneText').innerText = `${descriptor1}`;
    }



}

function rollDescriptor2() {
    const descriptor2Rand = Math.floor(Math.random()*basicDescriptionArray.length);
    const descriptor2 = basicDescriptionArray[descriptor2Rand];

    if (descriptor2 === basicDescription2130) {
        const specDelivery2Rand = Math.floor(Math.random()*specDeliveryArray.length);
        const specDelivery2 = specDeliveryArray[specDelivery2Rand];

        const genSpecAttack2Rand = Math.floor(Math.random()*genSpecAttackArray.length);
        const genSpecAttack2 = genSpecAttackArray[genSpecAttack2Rand];


        document.getElementById('descriptorTwoText').innerText = '';
        document.getElementById('descriptorTwoText').innerText = `${descriptor2}`;

        document.getElementById('additionalTwoText').innerText = '';
        document.getElementById('additionalTwoText').innerText = `Suggestion from Tables 2-78 and 2-79: ${specDelivery2}, ${genSpecAttack2}`;
    } else if (descriptor2 === basicDescription5160) {
        const primeCasterChar2Rand = Math.floor(Math.random()*primLeadershipCharacteristicArray.length);
        const primeCasterChar2 = primLeadershipCharacteristicArray[primeCasterChar2Rand];
    
        const secondCasterChar2Rand = Math.floor(Math.random()*secondLeadershipCharacteristicArray.length);
        const secondCasterChar2 = secondLeadershipCharacteristicArray[secondCasterChar2Rand];

        document.getElementById('descriptorTwoText').innerText = '';
        document.getElementById('descriptorTwoText').innerText = `${descriptor2}`;

        document.getElementById('additionalTwoText').innerText = '';
        document.getElementById('additionalTwoText').innerText = `(${primeCasterChar2}, ${secondCasterChar2})`;
    } else if (descriptor2 === basicDescription6170) {
        const reproCycleRand2 = Math.floor(Math.random()*reproCycleArray.length);
        const reproCycle2 = reproCycleArray[reproCycleRand2];

        document.getElementById('descriptorTwoText').innerText = '';
        document.getElementById('descriptorTwoText').innerText = `${descriptor2}`;

        document.getElementById('additionalTwoText').innerText = '';
        document.getElementById('additionalTwoText').innerText = `${reproCycle2}`;
    } else if (descriptor2 === basicDescription7180) {
        const humanoidSpecDefenseRand2 = Math.floor(Math.random()*specDefenseAbilityArray.length);
        const humanoidSpecDefense2 = specDefenseAbilityArray[humanoidSpecDefenseRand2];

        document.getElementById('descriptorTwoText').innerText = '';
        document.getElementById('descriptorTwoText').innerText = `${descriptor2}`;

        document.getElementById('additionalTwoText').innerText = '';
        document.getElementById('additionalTwoText').innerText = `${humanoidSpecDefense2}`;
    } else {
        document.getElementById('descriptorTwoText').innerText = '';
        document.getElementById('descriptorTwoText').innerText = `${descriptor2}`;
    }
}

function rollRelationToOthers() {
    const relationToOthersRand = Math.floor(Math.random()*relationToOthersArray.length);
    const relationToOthers = relationToOthersArray[relationToOthersRand];

    document.getElementById('relationshipText').innerText = '';
    document.getElementById('relationshipText').innerText = `${relationToOthers}`;
}

function rollLeaderPrimeChars() {
    const primLeadershipCharacteristicRand = Math.floor(Math.random()*primLeadershipCharacteristicArray.length);
    const primLeadershipCharacteristic = primLeadershipCharacteristicArray[primLeadershipCharacteristicRand];

    if (primLeadershipCharacteristic === primLeadershipCharacteristic2130) {
        const leaderSpecAttackRand = Math.floor(Math.random()*genSpecAttackArray.length);
        const leaderSpecAttack = genSpecAttackArray[leaderSpecAttackRand];

        const leaderDeliveryRand = Math.floor(Math.random()*specDeliveryArray.length);
        const leaderDelivery = specDeliveryArray[leaderDeliveryRand];

        document.getElementById('primeCharText').innerText = '';
        document.getElementById('primeCharText').innerText = `${primLeadershipCharacteristic}`;

        document.getElementById('primeCharAdditionalText').innerText = '';
        document.getElementById('primeCharAdditionalText').innerText = `Suggestion from Tables 2-78 and 2-79: ${leaderDelivery}, ${leaderSpecAttack}`;
    
    } else if (primLeadershipCharacteristic === primLeadershipCharacteristic3140) {
        const leaderTransformationRand = Math.floor(Math.random()*feyUnusualTransformationArray.length);
        const leaderTransformation = feyUnusualTransformationArray[leaderTransformationRand];

        document.getElementById('primeCharText').innerText = '';
        document.getElementById('primeCharText').innerText = `${primLeadershipCharacteristic}`;

        document.getElementById('primeCharAdditionalText').innerText = '';
        document.getElementById('primeCharAdditionalText').innerText = `Suggestion from Table 2-25: ${leaderTransformation}`;

    } else if (primLeadershipCharacteristic === primLeadershipCharacteristic4150) {
        const whichTable = Math.floor(Math.random()*2);

        if (whichTable === 0) {
            const feyMagicAbilityRand = Math.floor(Math.random()*feyMagicAbilityArray.length);
            const feyAspect = feyMagicAbilityArray[feyMagicAbilityRand];

            document.getElementById('primeCharText').innerText = '';
            document.getElementById('primeCharText').innerText = `${primLeadershipCharacteristic}`;
    
            document.getElementById('primeCharAdditionalText').innerText = '';
            document.getElementById('primeCharAdditionalText').innerText = `${feyAspect}`;

        } else if (whichTable === 1) {
            const feyBasicFormRand = Math.floor(Math.random()*feyBasicFormArray.length);
            const feyAspect = feyBasicFormArray[feyBasicFormRand];

            document.getElementById('primeCharText').innerText = '';
            document.getElementById('primeCharText').innerText = `${primLeadershipCharacteristic}`;
    
            document.getElementById('primeCharAdditionalText').innerText = '';
            document.getElementById('primeCharAdditionalText').innerText = `${feyAspect}`;
        } else {
            const feyAspect = 'NOT WORKING (line 195)';

            document.getElementById('primeCharText').innerText = '';
            document.getElementById('primeCharText').innerText = `${primLeadershipCharacteristic}`;
    
            document.getElementById('primeCharAdditionalText').innerText = '';
            document.getElementById('primeCharAdditionalText').innerText = `${feyAspect}`;
        }


    } else if (primLeadershipCharacteristic === primLeadershipCharacteristic5160) {
        const whichGiantTableRand = Math.floor(Math.random()*3);

        if (whichGiantTableRand === 0) {
            const giantSpecialAbilityRand = Math.floor(Math.random()*giantSpecialAbilityArray.length);
            const giantAspect = giantSpecialAbilityArray[giantSpecialAbilityRand];

            document.getElementById('primeCharText').innerText = '';
            document.getElementById('primeCharText').innerText = `${primLeadershipCharacteristic}`;
    
            document.getElementById('primeCharAdditionalText').innerText = '';
            document.getElementById('primeCharAdditionalText').innerText = `${giantAspect}`;

        } else if (whichGiantTableRand === 1) {
            const giantOtherFeatureRand = Math.floor(Math.random()*giantOtherFeatureArray.length);
            const giantAspect = giantOtherFeatureArray[giantOtherFeatureRand];

            document.getElementById('primeCharText').innerText = '';
            document.getElementById('primeCharText').innerText = `${primLeadershipCharacteristic}`;
    
            document.getElementById('primeCharAdditionalText').innerText = '';
            document.getElementById('primeCharAdditionalText').innerText = `${giantAspect}`;

        } else if (whichGiantTableRand === 2) {
            const giantSkinDescriptionRand = Math.floor(Math.random()*giantSkinDescriptionArray.length);
            const giantAspect = giantSkinDescriptionArray[giantSkinDescriptionRand];

            document.getElementById('primeCharText').innerText = '';
            document.getElementById('primeCharText').innerText = `${primLeadershipCharacteristic}`;
    
            document.getElementById('primeCharAdditionalText').innerText = '';
            document.getElementById('primeCharAdditionalText').innerText = `${giantAspect}`;
        }

    } else if (primLeadershipCharacteristic === primLeadershipCharacteristic91100) {
        const leaderSpecDefenseRand = Math.floor(Math.random()*specDefenseAbilityArray.length);
        const leaderSpecDefense = specDefenseAbilityArray[leaderSpecDefenseRand];

        document.getElementById('primeCharText').innerText = '';
        document.getElementById('primeCharText').innerText = `${primLeadershipCharacteristic}`;

        document.getElementById('primeCharAdditionalText').innerText = '';
        document.getElementById('primeCharAdditionalText').innerText = `${leaderSpecDefense}`;

    } else {
        document.getElementById('primeCharText').innerText = '';
        document.getElementById('primeCharText').innerText = `${primLeadershipCharacteristic}`;
    }
}

function rollLeaderSecondChars() {
    const secondLeadershipCharacteristicRand = Math.floor(Math.random()*secondLeadershipCharacteristicArray.length);
    const secondLeadershipCharacteristic = secondLeadershipCharacteristicArray[secondLeadershipCharacteristicRand];

    if (secondLeadershipCharacteristic === secondLeadershipCharacteristic6170) {
        const leaderCycleRand = Math.floor(Math.random()*timeCycleArray.length);
        const leaderCycle = timeCycleArray[leaderCycleRand];

        document.getElementById('secondaryCharText').innerText = '';
        document.getElementById('secondaryCharText').innerText = `${secondLeadershipCharacteristic}`;

        document.getElementById('secondCharAdditionalText').innerText = '';
        document.getElementById('secondCharAdditionalText').innerText = `${leaderCycle}`;

    } else {
        document.getElementById('secondCharAdditionalText').innerText = '';
        document.getElementById('secondaryCharText').innerText = '';
        document.getElementById('secondaryCharText').innerText = `${secondLeadershipCharacteristic}`;
    }


}

function rollTheme() {
    const humanoidThemeRand = Math.floor(Math.random()*humanoidThemeArray.length);
    const humanoidTheme = humanoidThemeArray[humanoidThemeRand];

    document.getElementById('themeText').innerText = '';
    document.getElementById('themeText').innerText = `${humanoidTheme}`;
}

function rollDevStages() {
    const firstStageDevRand = Math.floor(Math.random()*firstStageDevArray.length);
    const firstStageDev = firstStageDevArray[firstStageDevRand];

    const secondStageDevRand = Math.floor(Math.random()*secondStageDevArray.length);
    const secondStageDev = secondStageDevArray[secondStageDevRand];

    const thirdStageDevRand = Math.floor(Math.random()*thirdStageDevArray.length);
    const thirdStageDev = thirdStageDevArray[thirdStageDevRand];


    document.getElementById('stageOneText').innerText = '';
    document.getElementById('stageOneText').innerText = `Stage 1: ${firstStageDev}`;

    document.getElementById('stageTwoText').innerText = '';
    document.getElementById('stageTwoText').innerText = `Stage 2: ${secondStageDev}`;


    if (thirdStageDev === thirdStageDev8190) {
        const timeCycleRand = Math.floor(Math.random()*timeCycleArray.length);
        const timeCycle = timeCycleArray[timeCycleRand];

        document.getElementById('stageThreeText').innerText = '';
        document.getElementById('stageThreeText').innerText = `Stage 3: ${thirdStageDev} Time Cycle: ${timeCycle}`;
    } else if (thirdStageDev === thirdStageDev6170) {
        const domesticAnimalRand = Math.floor(Math.random()*attMixArray.length)
        const domesticAnimal = attMixArray[domesticAnimalRand];


        document.getElementById('stageThreeText').innerText = '';
        document.getElementById('stageThreeText').innerText = `Stage 3: ${thirdStageDev} If not, domesticated creature: ${domesticAnimal}`;
    } else {
        document.getElementById('stageThreeText').innerText = '';
        document.getElementById('stageThreeText').innerText = `Stage 3: ${thirdStageDev}`;
    }


}








/*                                                      HUMANOID TABLES                                                        */
const animalCharacteristic0120 = 'roll once on Table 2-2, and make the result bipedal with arms and opposable thumbs';
const animalCharacteristic2140 = 'roll once on Table 2-2, and make the result bipedal with arms and opposable thumbs';
const animalCharacteristic4160 = 'roll once on Table 2-2, and make the result bipedal with arms and opposable thumbs';
const animalCharacteristic6180 = 'roll once on Table 2-2, and make the result bipedal with arms and opposable thumbs';
const animalCharacteristic81100 = 'roll twice on Table 2-2, mix up the attributes of those two animals, and make the result bipedal with arms and opposable thumbs';

const animalCharacteristicArray = [animalCharacteristic0120, animalCharacteristic2140, animalCharacteristic4160, animalCharacteristic6180, animalCharacteristic81100];


const humanMod0120 = 'give it a human head';
const humanMod2140 = 'give it a human upper body (but not head)';
const humanMod4160 = 'give it a human-like body except for the head';
const humanMod6180 = 'give it a human-like head that has animal characteristics in as well';
const humanMod81100 = 'roll again on Table 2-2, using this second roll to determine a bunch of weird modifications to the basic biped you created from the first roll. For example, your bipedal fish-man now gets some attributes of a badger. Go for it.';

const humanModArray = [humanMod0120, humanMod2140, humanMod4160, humanMod6180, humanMod81100];


const basicDescription0110 = 'alliance with related beast-type*';
const basicDescription1120 = 'interesting weapon**';
const basicDescription2130 = 'minor special attack (all creatures in race)*** See Tables 2-78 and 2-79 for ideas';
const basicDescription3140 = 'unusual ability (all creatures in race)****';
const basicDescription4150 = 'unusual leader-types';
const basicDescription5160 = 'contains spell-casters that are not necessarily unusual leader-types (but could be, if you want to play around with Table 2-37)';
const basicDescription6170 = 'unusual reproductive cycle (See morphological changes and phases Table 2-84)';
const basicDescription7180 = 'Minor special defense (all creatures in the race). See Table 2-82 for ideas.';
const basicDescription8190 = 'contains a sub-race which is larger than the norm, and is either more or less intelligent than the normal members of the species. The sub-race might be sterile, or might be capable of interbreeding with the normal members of the species.';
const basicDescription91100 = 'unusual leader-type or Unusual Ability in all members of the race **** (50% chance each)';

const basicDescriptionArray = [basicDescription0110, basicDescription1120, basicDescription2130, basicDescription3140, basicDescription4150, basicDescription5160, basicDescription6170, basicDescription7180, basicDescription8190, basicDescription91100];



const relationToOthers0110 = 'aloof and isolated';
const relationToOthers1120 = 'manipulators, diplomats, and infiltrators (this might be, but isn\'t necessarily, a mastermind race)';
const relationToOthers2130 = 'willing mercenaries, serving other races and possibly with some degree of assimilation into the different cultures of their employers';
const relationToOthers3140 = 'would-be conquerors, tyrants, or overlords; generally at war with anyone or everyone';
const relationToOthers4150 = 'minion race that tends to serve more powerful overlords';
const relationToOthers5160 = 'raiders (also possibly slavers)';
const relationToOthers6170 = 'mastermind race (see Tables 2-38 and 2-39 below)*****';
const relationToOthers7180 = 'slavers (not necessarily raiders - slaves might also be from another humanoid race or monster type rather than humans)';
const relationToOthers8190 = 'most relations are trade-oriented, but the race may have strange approaches to trade (violence, rituals, or honor might factor in, for example). Trading with the creature might be a dangerous venture.';
const relationToOthers91100 = 'generally assist other races and act in coordination with them, provided that the other race is working toward goals that agree with those of the race (or of the leader-types). This would be a race that works from long-range plans, possibly (but definitely not necessarily) a mastermind race.';

const relationToOthersArray = [relationToOthers0110, relationToOthers1120, relationToOthers2130, relationToOthers3140, relationToOthers4150, relationToOthers5160, relationToOthers6170, relationToOthers7180, relationToOthers8190, relationToOthers91100];



const primLeadershipCharacteristic0110 = 'spell-casters (shamans, medicine-men, priests, etc.';
const primLeadershipCharacteristic1120 = 'larger than normal (or can simply absorb more damage, if the result on the next column indicates a smaller leader type';
const primLeadershipCharacteristic2130 = 'different and more powerful special attack based on the abilities of the underlying animal. (see Special Attacks Tables 2-78 and 2-79 for ideas).';
const primLeadershipCharacteristic3140 = 'intrinsic magical ability (see Table 2-25 for Transformations)';
const primLeadershipCharacteristic4150 = 'Has aspects of a fey creature (Table 2-22 or 2-24)';
const primLeadershipCharacteristic5160 = 'Has aspects of a giant (Tables 2-29 to 2-31)';
const primLeadershipCharacteristic6170 = 'Has stronger armor or thicker hide than normal. If the underlying animal has armor and the lesser members of the race don\'t have it, then give the leader-type the armor of the underlying creature.';
const primLeadershipCharacteristic7180 = 'can cause a relativel powerful effect on lesser members of the race, such as increased ferocity or bravery when close to a leadership type';
const primLeadershipCharacteristic8190 = 'shape-changing, either generalized or as a form of lycanthropy';
const primLeadershipCharacteristic91100 = 'has a Special Defense (See Table 2-82 for ideas)';

const primLeadershipCharacteristicArray = [primLeadershipCharacteristic0110, primLeadershipCharacteristic1120, primLeadershipCharacteristic2130, primLeadershipCharacteristic3140, primLeadershipCharacteristic4150, primLeadershipCharacteristic5160, primLeadershipCharacteristic6170, primLeadershipCharacteristic7180, primLeadershipCharacteristic8190, primLeadershipCharacteristic91100];


const secondLeadershipCharacteristic0110 = 'larger head and/or very high intelligence compared to other members of the species';
const secondLeadershipCharacteristic1120 = 'additional limb(s) as suggested by any special attack; otherwise, 2 extra arms';
const secondLeadershipCharacteristic2130 = 'has one more characteristic of the underlying animal than the lesser members of the race';
const secondLeadershipCharacteristic3140 = 'is less like the underlying animals and more like a human than the lesser members of the race';
const secondLeadershipCharacteristic4150 = 'increased ability to move, using strong legs/wings, or magical movement such as teleportation, dimensional travel, etc.';
const secondLeadershipCharacteristic5160 = 'has a different reproductive strategy from other members of the race, which influences the activities of the group they lead';
const secondLeadershipCharacteristic6170 = 'is subject to a time cycle (Table 1-29) which influences the activites of the groups they lead';
const secondLeadershipCharacteristic7180 = 'requires a special food, drink, or drug in order to maintain the physical or mental characteristics of a leader type. This may be a substance produced by normal members of the species (especially in the case of insectile humanoids)';
const secondLeadershipCharacteristic8190 = 'can ride an extremely powerful type of mount, dangerous to non-leader riders, or larger and more intelligent than a type of mount used by normal members of the race';
const secondLeadershipCharacteristic91100 = 'smaller and more graceful than normal members of the species';

const secondLeadershipCharacteristicArray = [secondLeadershipCharacteristic0110, secondLeadershipCharacteristic1120, secondLeadershipCharacteristic2130, secondLeadershipCharacteristic3140, secondLeadershipCharacteristic4150, secondLeadershipCharacteristic5160, secondLeadershipCharacteristic6170, secondLeadershipCharacteristic7180, secondLeadershipCharacteristic8190, secondLeadershipCharacteristic91100];


const humanoidTheme0105 = 'brains, minds, psionics, thinking, abstracts, dogma, creativity, intuition';
const humanoidTheme0610 = 'caverns, gems, minerals, oil, damp, cold, dark';
const humanoidTheme1115 = 'changing, mutating, breeding, hybridization, melding, melting, shape-shifting, misdirection';
const humanoidTheme1620 = 'death, corpses, sarcophagi, ancestors, rot, memory, forgetting';
const humanoidTheme2125 = 'dimensions, folding, moebius shapes, reality-pockets, teleportation, movement, reversal';
const humanoidTheme2630 = 'diplomacy, politics, misdirection, decoys, advice, agreements, delicacy, manners';
const humanoidTheme3135 = 'fire, lava, flames, heat, geysers, glowing';
const humanoidTheme3640 = 'honor, loyalty, pledges, vassalhood, tyranny, slavery';
const humanoidTheme4145 = 'ice, frost, snow, cold, death, slowness';
const humanoidTheme4650 = 'lightning, electricity, flashes, light, power, shattering, cracking, mechanisms, crystal';
const humanoidTheme5155 = 'mist, clouds, invisibility, misdirection, steam';
const humanoidTheme5660 = 'property, slavery, documents and deeds, formalism, rituals';
const humanoidTheme6165 = 'rituals, memory, ancestors, forgetting, formalism, ceremony, cycles, seasons, absolutism';
const humanoidTheme6670 = 'space, airless places, vacuum, voids, stars, planets, moons';
const humanoidTheme7175 = 'summoning, calling, charming, dominating, contests, protection, warding, entrapment';
const humanoidTheme7680 = 'symbols, sigils, runes, writing, pictures, records, lore, fragments, holism';
const humanoidTheme8185 = 'thunder, sound, sonics, waves, shaking, volcanic, clouds, connections, music';
const humanoidTheme8690 = 'vengeance, memory, hearts, murder, absolutism, symbols, hatred';
const humanoidTheme9195 = 'water, depths, drowning, lightlessness, sliminess, mud, unseen growth';
const humanoidTheme96100 = 'winds, air, flying, levitation';

const humanoidThemeArray = [humanoidTheme0105, humanoidTheme0610, humanoidTheme1115, humanoidTheme1620, humanoidTheme2125, humanoidTheme2630, humanoidTheme3135, humanoidTheme3640, humanoidTheme4145, humanoidTheme4650, humanoidTheme5155, humanoidTheme5660, humanoidTheme6165, humanoidTheme6670, humanoidTheme7175, humanoidTheme7680, humanoidTheme8185, humanoidTheme8690, humanoidTheme9195, humanoidTheme96100];



const firstStageDev0110 = 'unevolved form was enslaved and "improved" by a more powerful race';
const firstStageDev1120 = 'evolved in another dimension';
const firstStageDev2130 = 'evolved on a distant moon or planet';
const firstStageDev3140 = 'created or bred by a deity, demigod, or other major power';
const firstStageDev4150 = 'evolved underground';
const firstStageDev5160 = 'evolved underground';
const firstStageDev6170 = 'evolved in water';
const firstStageDev7180 = 'created or bred by a more powerful race (now extinct) to fulfill a specific function in the society of that race - food, slaves, accountants, spell-casters, etc.';
const firstStageDev8190 = 'began as a race of incorporeal spirit-beings, gaining bodies as a result of the events in the second stage (next column)';
const firstStageDev91100 = 'evolved as flying creatures, but unless you want them to retain flight, they lose their flying capabilities during the Second Stage';

const firstStageDevArray = [firstStageDev0110, firstStageDev1120, firstStageDev2130, firstStageDev3140, firstStageDev4150, firstStageDev5160, firstStageDev6170, firstStageDev7180, firstStageDev8190, firstStageDev91100];



const secondStageDev0110 = 'became twisted by a catastrophe that affected most members of the race';
const secondStageDev1120 = 'some sort of interaction with a god or other major power changed the race (or split the race into two groups)';
const secondStageDev2130 = 'needed to escape into another dimension, world, or environment (e.g. chased into and adapated to a subterranean evironment)';
const secondStageDev3140 = 'became powerful and ruled a large area, but were then decimated by war, disease, or rebelling slaves';
const secondStageDev4150 = 'enslaved by a more powerful race, which bred them or magically changed them';
const secondStageDev5160 = 'encountered lost knowledge, which changed them and made them more powerful and intelligent';
const secondStageDev6170 = 'arrived at present location (world, moon, subterranean realms, etc.) via a migration to avoid a natural or magical catastrophe in their original location';
const secondStageDev7180 = 'developed a caste structure with different abilities for the different castes (this can include entering into corporeal bodies of different types)';
const secondStageDev8190 = 'rebellion within the society caused a split within the race (a multiple caste structure, division into powerful leaders and lesser followers, or two hostile sub-races)';
const secondStageDev91100 = 'extinction of a more powerful race allowed this race to grab power and magic, which led to higher intelligence';

const secondStageDevArray = [secondStageDev0110, secondStageDev1120, secondStageDev2130, secondStageDev3140, secondStageDev4150, secondStageDev5160, secondStageDev6170, secondStageDev7180, secondStageDev8190, secondStageDev91100];



const thirdStageDev0110 = 'generally get along with humankind, except when humankind pisses them off';
const thirdStageDev1120 = 'consider humans to be nothing more than slaves or even food';
const thirdStageDev2130 = 'became fragmented into small groups and individuals due to the risk of disease';
const thirdStageDev3140 = 'became fragmented into small groups and individuals because ego and pride make it impossible for them to work together. They hate other members of their own race.';
const thirdStageDev4150 = 'seek revenge or have a particular racial hatred (not necessarily against humanity - it might even be a monster type)';
const thirdStageDev5160 = 'require a particular kind of food, probably either a rare plant or humans';
const thirdStageDev6170 = 'became expert breeders of a monster type (or new hybrid) that accompanies most members of the race. If the physical characteristics of the race were determined using Table 2-2, the animal is probably the underlying animal used to generate the race\'s physical characteristics.';
const thirdStageDev7180 = 'reproductive competition separates the males or females from each other. The separated gender is polygamous (or polyandrous), and the other gender is probably smaller, weaker, and/or less intelligent';
const thirdStageDev8190 = 'entire race is now subject to a Time Cycle (Table 1-29), although not all members of the race are necessarily subject to the same influences at the same times - they may be out of sync with each other. This would be due to events in development stages 1 or 2, but it has become more or less pronounced than earlier.';
const thirdStageDev91100 = 'each member of the race accumulates knowledge or unusual items that make each individual member of the species relatively unique in its capabilities.';

const thirdStageDevArray = [thirdStageDev0110, thirdStageDev1120, thirdStageDev2130, thirdStageDev3140, thirdStageDev4150, thirdStageDev5160, thirdStageDev6170, thirdStageDev7180, thirdStageDev8190, thirdStageDev91100];




const attMix01 = 'Amoeba(formless): floats in liquids, extends pseudopods, engulfs prey, filled with liquid, reproduces by fission';
const attMix02 = 'Ant:, burrows, caste system, caste-specific body type, pincers, exoskeleton, antennae, filled with acid, insect, segmented body';
const attMix03 = 'Anteater: large claws, digs prey from ground, sucks prey through long mouth, long sticky tongue, long fur';
const attMix04 = 'Ape: primate, human-like face, opposable thumbs, use feet to grip, swings from trees, travel in bands with alpha male organization';
const attMix05 = 'Baboon: baboon face, opposable thumbs, tail, primate, human-like eyes, travels in bands led by an alpha male';
const attMix06 = 'Badger: black and white coloring, burrows with claws, eats bugs, bears live young';
const attMix07 = 'Bat: sonic echolocation, bat wings, suck blood, flies, nocturnal, eats fruit, mammal, hangs upside down in caves to sleep';
const attMix08 = 'Bear: omnivore, hibernates, swims, quadruped, large claws, stays with cubs';
const attMix09 = 'Bear: omnivore, hibernates, swims, quadruped, large claws, stays with cubs';
const attMix10 = 'Beaver: flat tail, chisel-teeth, builds underwater lodge, builds dams, cuts down trees, underwater mammal, bears live young, swims';
const attMix11 = 'Bee: insect, collects pollen, hive organization, caste organization, egg-laying queen, produces honey, stinger, dies after stinging, faceted eyes';
const attMix12 = 'Beetle: carapace, bug legs, mandibles, faceted eyes, often flies, six legs, sheathed wings';
const attMix13 = 'Boar/pig: hoofs, tusks, charges to attack, omnivore, has bristles, quadruped';
const attMix14 = 'Bovine: horns, herd animal, hoofs, charges into combat, quadruped';
const attMix15 = 'Camel: goes for a long time without water, spits, has humps, lives in desert';
const attMix16 = 'Bird: small, bright color, feathers, sings, eats seeds, has beak, sleeps while standing, two legs, wings, lays eggs, makes nests';
const attMix1718 = 'Cat: feline, cat eyes, leaps, plays with prey, climbs trees, dislikes water, quadruped, tail, retractable claws';
const attMix19 = 'Centipede: multi-segmented body, many jointed legs, mandibles, often venomous';
const attMix20 = 'Cat: spotted fur, very fast, feline, cat eyes, quadruped, chases prey';
const attMix21 = 'Chicken: flightless bird, two legs, wings, eats grain and seeds, crested head, lays eggs, flaps into air to attack';
const attMix22 = 'Clam: outer shell opens, soft inside, makes pearls, lives underwater';
const attMix23 = 'Crab: hard carapace, pincer claws, jointed legs, eyestalks, lays eggs, hunts on land and in water, digs into sand';
const attMix24 = 'Crocodile: reptile, swims, lurks below surface, lays eggs, long and toothy mouth, four legs, short side-mounted legs, strong tail, armored hide';
const attMix25 = 'Dinosaur: huge, might have back plates, might have clubbed or spiked tail, might have elephant feet, might have long neck, lays eggs, thick hide, might have armor plates';
const attMix26 = 'Dog: canine, covered in hair, paws, pack-hunter, loyal, used as pet, used for hunting';
const attMix27 = 'Dolphin: aquatic mammal, fish-like body, uses sonar/echolocation, bears live young, holds breath for a long time, friendly to humans';
const attMix28 = 'Dragonfly: large faceted eyes, flies, long dragonfly wings, lays eggs, exoskeleton, multiple legs';
const attMix29 = 'Eagle: avian, flies, dives on prey, makes nests in high places, glides on air currents, hooked beak, talons';
const attMix30 = 'Earwig: mandible-like things on tail, segmented, exoskeleton, multiple legs, lays eggs';
const attMix31 = 'Eel: fish, snake-like shape, glistening skin, may use electrical shock, lays eggs underwater';
const attMix32 = 'Elephant: mammal, tusks, large ears, elephant feet, tramples, large, baggy skin, bears live young';
const attMix33 = 'Fish: bioluminescent, sharp teeth, large mouth, swims, dangles lure to attract prey, lives in deep darkness, lives in deep water, lays eggs, breathes underwater, gills';
const attMix34 = 'Fish: scaled skin, fins and tail, spits to stun prey, lays eggs underwater, gills, breathes underwater';
const attMix35 = 'Fish: scales, fins, fish tail, gills, breathes underwater, lays eggs, swims, travels in groups, teeth, predator';
const attMix3637 = 'Fish: scales, fins, fish tail, gills, breathes underwater, lays eggs, swims, travels in schools';
const attMix38 = 'Fish: scales, fins, fish tail, gills, breathes underwater, lays eggs, swims, travels in schools, attacks in large groups, strips prey down to the bones, small';
const attMix39 = 'Fish: dorsal fin, rough skin, can’t stop swimming or it dies, breathes underwater, gills, voracious predator';
const attMix40 = 'Frog: hops, swallows prey whole, huge back legs, amphibian, lays eggs underwater, starts as tadpole and transforms to new shape';
const attMix41 = 'Gecko: adhesive pads on toes, resembles lizard, scales, climbs, quadruped, eats insects, strikes swiftly';
const attMix42 = 'Giraffe: long neck, spotted hair, tall, long legs, quadruped, herbivore, eats from treetops';
const attMix43 = 'Goat: curled horns, quadruped, eats virtually anything, hoofs, attacks with head butt, some live in mountains with long hair, sure-footed';
const attMix44 = 'Hawk: good vision, dives on prey, flies, wings, feathers, talons, used for hunting, lays eggs';
const attMix45 = 'Bird: tall, long legs, piercing beak, eats fish, bird, lays eggs, flies, feathers';
const attMix46 = 'Horse: equine, used as steed, used as draft animal, mane, hoofs, horse tail, rears up to attack with fore-legs';
const attMix47 = 'Hyena: makes eerie laughing sound, scavenger, travels in groups, quadruped, spotted fur';
const attMix48 = 'Jackal: scavenger, carrion eater, quadruped, canine, long pointed ears, good hearing';
const attMix49 = 'Leech: sucks blood, attaches to prey, lives underwater';
const attMix50 = 'Leopard: cat, jungle predator, spotted fur, jumps from treetops';
const attMix51 = 'Lion: mane, roars, pounces, four legs, claws';
const attMix52 = 'Lizard: scaled skin, side-mounted legs, lays eggs, forked tongue, smells with tongue';
const attMix53 = 'Lobster: crustacean, segmented exoskeleton with overlapping plates, eyestalks, jointed legs, lays eggs underwater';
const attMix54 = 'Maggot: larva, larval stage of flying creature, eats dead flesh';
const attMix5556 = 'Mammoth: elephant body form, hairy, tusks, elephant feet, tramples, very long tusks, quadruped, herbivore';
const attMix57 = 'Monkey: prehensile tail, biped, swings from trees, bears live young, human-looking face';
const attMix58 = 'Mosquito: insect, sucks blood, females suck blood, proboscis, flies, exoskeleton';
const attMix59 = 'Moth: wings, hairy, insect, attracted to light, grows from caterpillar cocoon, eat wool, drink nectar';
const attMix60 = 'Octopus: eight tentacles, cephalopod, suckers on tentacles, no internal skeleton, sharp beak, three hearts, gills, breathe underwater, lay eggs underwater, ink cloud';
const attMix61 = 'Ostrich: bird, flightless bird, lays eggs, runs fast, spreading tail plumage';
const attMix62 = 'Ox: horns, quadruped, herd animal, draft animal, plow animal, hoofs';
const attMix63 = 'Parrot: bird, talks, mimics, lays eggs, bright colors, flies, feathers';
const attMix64 = 'Peacock: bird, lays eggs, resplendent tail plumage, sounds like a cat';
const attMix65 = 'Penguin: bird, lays eggs, swims, flightless, lives in cold regions';
const attMix66 = 'Prairie dog: burrows, lives in large communal warrens, rodent, mammal';
const attMix67 = 'Praying mantis: insect, exoskeleton, faceted eyes, grabs prey with long, barbed arms, camouflage, female eats male after mating, antennae';
const attMix68 = 'Rabbit: long ears, hops, rabbit tail, digs burrows, long back legs';
const attMix69 = 'Rat: hairless tail, carries disease, rodent, scavenger, bears litters of live young, burrows, vermin, eats young under conditions of overcrowding';
const attMix70 = 'Raven: black, feathers, sharp beak, flies, lays eggs, good vision, builds nests, bird';
const attMix71 = 'Rhinoceros: thick hide, one horn, poor vision, charges into combat';
const attMix72 = 'Roach: carapace, flies, lays eggs, insect, vermin, jointed legs';
const attMix73 = 'Saber-tooth tiger: cat, tusk-like teeth, pounces, cat eyes, tail, retractable claws';
const attMix74 = 'Beetle: exoskeleton, sheathed wing, horns on head or thorax, larval stage develops into beetle, eggs laid in food source for larvae to eat';
const attMix7576 = 'Seal: mammal, flippers, sea-creature, streamlined fur, bear live young';
const attMix77 = 'Slug: gastropod, mollusk, eye stalks, moves by rippling muscles, slimy, regeneration (of the eyestalks, at least)';
const attMix78 = 'Snail: house-like shell, slimy and formless body, eyestalks, reproductive organs located in head';
const attMix79 = 'Snake: reptile, serpent, scales, fangs, injects venom, snake eyes, slithers, lays eggs, cold-blooded, hypnotic eyes, hooded head';
const attMix80 = 'Snake: reptile, snake eyes, constricts prey, slithers, lays eggs, lurks in trees, lurks underwater, eats only occasionally and remains torpid in between large meals';
const attMix81 = 'Snake: reptile, snake eyes, poison, constricts, fangs, slithers, lays eggs, hypnotic eyes';
const attMix82 = 'Snake: reptile, snake eyes, poison, fangs, slithers, lays eggs, hypnotic eyes';
const attMix83 = 'Spider: eight legs, stinger, spins webs, leaps, cocoons prey in silk, sucks blood';
const attMix84 = 'Squid: ten tentacles, hard shell, cephalopod, changes color to match surroundings, jet propulsion, ink cloud';
const attMix85 = 'Squirrel: mammal, gathers nuts, stores food, rodent, bushy tail';
const attMix86 = 'Deer: antlers, herd animal, fast runner, hoofs, spindly legs, herbivore';
const attMix87 = 'Stick insect: resembles a stick, exoskeleton, lays eggs, long jointed legs, predator';
const attMix88 = 'Beetle: carapace, jointed bug legs, awful smell when carapace is broken, antennae';
const attMix89 = 'Tapeworm: long, flat, thin, wormlike, parasite, lives inside host organisms';
const attMix90 = 'Tick: insect, lays eggs, drinks blood, carries disease, exoskeleton';
const attMix91 = 'Toad: batrachian, amphibian, lays eggs in water, predator, bulging eyes';
const attMix92 = 'Virus: spreads disease, injects host with RNA that begins replicating viruses inside host’s body, microbial';
const attMix93 = 'Vulture: bird, flies, feathers, lays eggs, talons, two legs, carrion eater';
const attMix94 = 'Walrus: sea-mammal, thick layer of fat, roars, flippers, tusks';
const attMix95 = 'Warthog: quadruped, mammal, ugly face, tusks';
const attMix96 = 'Wasp: thorax, abdomen, insect, stinger, paper-like wings, makes paper hives, lays eggs, flies';
const attMix97 = 'Whale: sea-mammal, flippers, flukes, bears live young, swims, must surface periodically to breathe, predator, sonic echolocation, large, teeth';
const attMix98 = 'Whale: sea-mammal, flippers, flukes, bears live young, swims, must surface periodically to breathe, predator, sonic echolocation, large, blunt head, teeth on lower jaw, deep-water';
const attMix99 = 'Wolf: canine, predator, hunts in packs, howls, quadruped';
const attMix100 = 'Worm: segmented, burrows, five hearts, hermaphroditic, regenerates';

const attMixArray = [attMix01, attMix02, attMix03, attMix04, attMix05, attMix06, attMix06, attMix07, attMix08, attMix09, attMix10, attMix11, attMix12, attMix13, attMix14, attMix15, attMix16, attMix1718, attMix19, attMix20, attMix21, attMix22, attMix23, attMix24, attMix25, attMix26, attMix27, attMix28, attMix29, attMix30, attMix31, attMix32, attMix33, attMix34, attMix35, attMix3637, attMix38, attMix39, attMix40, attMix41, attMix42, attMix43, attMix44, attMix45, attMix46, attMix47, attMix48, attMix49, attMix50, attMix51, attMix52, attMix53, attMix54, attMix5556, attMix57, attMix58, attMix59, attMix60, attMix61, attMix62, attMix63, attMix64, attMix65, attMix66, attMix67, attMix68, attMix69, attMix70, attMix71, attMix72, attMix73, attMix74, attMix7576, attMix77, attMix78, attMix79, attMix80, attMix81, attMix82, attMix83, attMix84, attMix85, attMix86, attMix87, attMix88, attMix89, attMix90, attMix91, attMix92, attMix93, attMix94, attMix95, attMix96, attMix97, attMix98, attMix99, attMix100];

const apogeePerigreeCycle = `Apogee and Perigee (solar, lunar, or other). Perigee is the closest point in the orbit of two celestial objects, and Apogee is the farthest point. Obviously, the orbit has to be elliptical, not circular, in order to have closer and farther points in the orbit. Keep in mind that this near-far relationship could exist between all kinds of celestial objects, not just suns and moons. Comet cycles are based on apogees and perigees, meteors move around with apogees and perigees, and even magical structures could have such a relationship to each other. Magical objects on the earth might activate only when a sun or moon is close; or perhaps the magical objects are huge metal blocks placed in the sky by some forgotten, ancient race, designed for some inscrutable purpose…`;
const calendarCycle = `Calendar Cycles. Many cultures group years into a repeating cycle, treating different years much as Western culture interpreted the zodiacal segments of a single year. The Chinese Calendar, for example, follows a cycle of the Year of the Rat, Year of the Ox, Year of the Tiger, Year of the Rabbit, Year of the Dragon, Year of the Snake, Year of the Horse, Year of the Goat, Year of the Monkey, Year of the Rooster, Year of the Dog, and Year of the Boar. Certain characteristics are attributed to people born in the different years.`;
const celestialCycle = `Celestial Cycles. The zodiac is a division of the sky into twelve regions, each called a “house.” The regions are: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. Each house is associated with behaviors and with a particular metaphorical emblem. A fantasy world might have different zodiacal signs, or a different method of interpreting the movements of the stars. The zodiac is linked to the solar year, not the lunar year.`;
const cometCycle = `Comet Cycles. The appearance of certain predictable comets in the night sky is often given mystical significance. Comet cycles can be a great adventure-generating device because of the long intervals between the comet\`s appearances. Lots of unpredictable things can happen to places, societies, and collective memory while the comet is away. For example: if some form of lycanthropy is linked to the appearance of a comet rather than a full moon, the lycanthropic disease might be transmitted far and wide while dormant, then suddenly appear all over the place when the comet appears in the sky. It would become a sort of celestial retro-virus.`;
const deviceCycle = `Device-Driven Cycle. A cycle might be derived from the operation of a device that divides time into a regular or irregular pattern. For instance, if the cycle is determined by the burning of candles without regard to the length of the candle, the cycle would be irregular. If the candles were scrupulously measured to be identical, the candle-driven cycle would be regular. Devices to measure out time could involve dripping water, candles, hourglasses, water wheels, gears, and many other mechanical arrangements.`;
const equinoxSolstice = `Equinox and Solstice (solar cycle). A solstice is one of the two times of year when the sun is farthest off the celestial equator. These occur at approximately June 22 (the summer solstice) and December 22 (the winter solstice). Summer solstice is the shortest night of the year, and winter solstice is the longest night. The equinox is when the sun crosses the equator and days and nights are of closest to equal length. The equinoxes occur at approximately March 21 (the Vernal Equinox, also the first day of Spring) and September 23 (the Autumnal Equinox). Note that Autumn and Spring are reversed for the northern and southern hemispheres of the earth.`;
const fashionCycle = `Fashion Cycles. The types of clothes and the jewelry people wear comes into and out of fashion periodically, as do haircuts, luxury commodities, philosophies, and religious practices. Magical effects like planar gates could easily be influenced by fashions in behavior or religion. It might be, for example, that a planar gate opens only when a local god has a minimum number of worshippers present at a significant ritual. When it becomes more fashionable for people to worship that god, the chance of the gate opening would suddenly increase.`;
const freezeThawCycle = `Freezing/Thawing Cycle. A particular cycle for a villain\`s activities, or the opening of some sort of portal or dungeon entrance, could be linked to the seasonal freezing and thawing of a barrier that blocks the portal, or of a mechanism that controls it. The builder might have intended the cycle of freezing and thawing, or the seasons might have changed since the original construction. Freezing and thawing also affect the volume of water moving in rivers, and patterns of migration by animals. This is a time cycle that can be used to drive a wide variety of adventures and monsters.`;
const lunarCycle = `Lunar Cycle. Earth\`s lunar cycle from new moon to new moon is 29.5 days, and is called the Synodic Lunar Cycle. Measuring the lunar cycle based on when the moon arrives in the same place in the sky (regardless of phase) is called the Sidereal Cycle and is 27.1 days in length. For gaming purposes, the “average” lunar cycle of 28 days is probably close enough unless the adventure is deeply involved in astrology. The phases of the moon are: new moon, crescent moon, first quarter moon, waxing gibbous moon, full moon, waning gibbous moon, last quarter moon, crescent moon, and then new moon again. The cycle of lunar eclipses is also an excellent fantasy theme, although the cycle of an eclipse is much longer than the cycle of the lunar phases.`;
const morphCycleOne = `Morphological Cycle (one creature). Some creatures have a life cycle in which their form changes radically; butterflies begin as caterpillars, frogs begin as tadpoles, many insects go through a pupae or larval stage. Although this is related to the reproductive cycle of the species, the radical morphological changes allow these creatures to have the right body-form for the right purpose at the right time. The caterpillar form, for example, is well adapted to eating huge quantities of food, whereas the mobility of the butterfly stage allows for finding stronger mates more easily. Intelligent creatures with morphological cycles might open and close portals (or be able to, based on their current phase). For example, a gate might remain closed while eggs gestate in some bizarre inter-dimensional space, or be opened when the creatures are in a predatory body-form and then close again. Only the strong and well fed predators would make it back to the gate, and would then be all together within the gate for the mating cycle to begin.`;
const morphCycleSeries = `Morphological Life Cycle (series of creatures). Just as a particular life form may go through radical morphological changes in order to link up form with function in a series of steps, it is also possible for a species to generate a sequence of life forms, only one of which is the breeder. As an example, envision a life form whose “queen” and “drone” eggs stay dormant for a long period of time, and need to be shifted from a hot incubation environment to a colder hatching environment. One “generation” of workers is a hot-weather creature that cares for the eggs during the incubation phase. As the incubation phase ends, the worker mate among themselves, producing an entirely different form - a flying form well suited for migration. The flying forms transport the eggs to a colder climate in a migration, breed again to create a cold-weather worker caste, and then die. The cold-weather caste hatches rapidly in the cold, and these workers care for the queen and drone eggs. The queens and drones fly back to the hot-weather area to breed and lay eggs of three kinds: queens, drones, and more hot-weather workers. The hot-weather workers hatch quickly to care for the new queen and drone eggs, and the cycle begins again. At some point in such a cycle, it might be that the door to underground hatching chambers must be unsealed, or the migration might take place across different planes of existence, requiring the temporary opening of planar gates.`;
const planetaryCycle = `Planetary Cycles. The proximity of particular planets to the Earth, or their location within a region of the sky (particularly a zodiacal region) can be a usable cycle for the purposes of a fantasy world, possibly having effects on magic, on different kinds of magic, villain motivations, and the opening or closing of planar gates or dungeon entrances.`;
const reproductiveCycle = `Reproductive Cycle. The average human menstrual cycle is 28 days. If the villainess is non-human, the cycle might not be a menstrual cycle, but a cycle of being “in heat” or “in season.” This same pattern might apply to unusual monsters as well as non-human animals. Female dogs stay in heat for about 21-28 days depending on breed (as one example of a heat cycle). Note: the cycle of a male villain\`s activity might be linked to someone else\`s reproductive cycle. The purpose of a dungeon or planar gate that opens and seals based on the reproductive cycle of a tribe or being is fairly obvious, and could (ahem) give birth to interesting adventure scenarios.`;
const magicalPowerCycle = `Rising and Falling Magical Power. The lunar, menstrual, and solar cycles are all associated with the rise and fall of magical capabilities, but a fantasy world may have an independent cycle of rising a falling magical power, not marked by these factors. Fluctuations in magic power might be druidic (some fluctuation in the earth\`s spiritual nature), might be related to arcane magic (a fluctuation in the eldritch energy that can be tapped by spells) or might be related to a fluctuation in divine power (possibly related to planar “distance, a period of dormancy, or divine battles that occupy the attention of the gods from time to time). A wizard\`s personal capability might be linked to the concept of “mana,” personal reserves of magical power that might shift with the tides of time. Monsters might also feel the effects of magical change.`;
const scripturalCycle = `Scriptural Cycle. In Judaism, the Torah (that\`s the five books of Moses, in case you\`re not familiar) is divided into parshas (segments) one of which is read and studied each seven days. The parshas correspond to the Jewish lunar calendar, so that the same parsha is read at the same lunar date every year. The point of completion of the reading, when the Torah scroll is rolled back to the beginning is a major holiday, as is the middle of the Torah (the day of atonement) and the reading on the new year (which precedes the day of atonement by a week). A religious scripture in a fantasy world might also follow a cycle not related to the calendar - planar gates or subterranean chambers might be opened (or open of their own accord) in a cycle driven by the reading of scriptures instead of a calendar cycle. The reading itself might trigger these events, rather than merely corresponding to them.`;
const secondaryEffectCycle = `Secondary Effect Cycle. Any of the various cycles listed in this table might be the cause of some other secondary effect that normally (but does not always) result from the primary cycle. For instance, the hatching patterns of locusts often (but does not always) cause famines. The focus of your adventure might not be the locust hatching, but the resulting famine. The periodic flooding of the Nile river was necessary to good harvests in Ancient Egypt; when that cycle failed due to low rainfall in the African interior, famines and food shortages resulted in Egypt. Adventures premised upon the secondary effects of a primary cycle might focus on the times when the expected result (the flooding of the Nile, or a locust plague) doesn\`t take place. Why didn\`t it? The answer might be valuable, crucial, or financially rewarding.`;
const temperatureCycle = `Temperature Cycles. Variations in temperature can cause all sorts of varying human behaviors, cause changes in economic factors, and can also trigger certain events in the animal and plant kingdoms. Consider such things as a locust-like insect with eggs that lie dormant until particularly hot temperatures arrive.`;
const traumaticStressCycle = `Traumatic Stress Cycle. Individuals who have suffered traumatic stress may re-live the event or its emotional impact, and this often happens on or around the anniversary of the event. The cycle could also be based on any cycle of events that either symbolize or reproduce the conditions and setting of the traumatic event. A fantasy world might have an analogue, in other words, to the way many War veterans react to the sound of helicopters and/or fireworks. `;

const timeCycleArray = [apogeePerigreeCycle, calendarCycle, celestialCycle, cometCycle, deviceCycle, equinoxSolstice, fashionCycle, freezeThawCycle, lunarCycle, morphCycleOne, morphCycleSeries, planetaryCycle, reproductiveCycle, magicalPowerCycle, scripturalCycle, secondaryEffectCycle, temperatureCycle, traumaticStressCycle];



/* special attack delivery method Table 2-78 */
const specDeliveryArray = ['appearance (changes to dangerous appearance)', 'appearance (normal appearance is dangerous)', 'cast like a spell (affects number of hit dice)', 'cast like a spell (area effect)', 'cast like a spell (one target)', 'cast like a spell (radius around monster)', 'constant effect (radius)', 'exhaled cloud', 'exhaled cone', 'exhaled line', 'gaze', 'gives off gas', 'mental power (affects number of hit dice)', 'mental power (area effect)', 'mental power (burst in radius around monster)', 'mental power (one target)', 'ray (eye, eyestalks, or other organ)', 'smell (radius)', 'smell (squirted, cone)', 'smell (squirted, single target)', 'sound (clicks, etc.)(radius around monster)', 'speech (in radius from monster)', 'spit (glob, single target)', 'spit (line)', 'spray (cone)', 'spray (line)', 'squirt liquid (single target)', 'touch'];




/* special attack type 2-79 */
const genSpecAttack01 = 'Acid Damage (affecting action). The attack causes acidic damage to the target, but there\'s also a special effect involved - if the victim fails some sort of check (morale, saving throw, percentile chance, etc) he takes some action in response to or as a result of the acid (usually either due to panic or pain). The most likely candidates for involuntary responses to acid are panic (running), losing actions (getting acid off your skin), dropping items, or something similar.';
const genSpecAttack02 = 'Acid Damage (causes condition). In addition to normal damage and collateral damage the attack causes to equipment, the acid has a chance to put the victim into a particular combat condition - blindness being the most obvious, whether it\'s permanent or temporary. Other possibilities for such “special” acids might include: damaged sight resulting in combat penalties (but not complete blindness), a loss of charisma points, permanent scarring, or some other chemical reaction (perhaps this sort of acid turns re-grown skin blue, for example).';
const genSpecAttack03 = 'Acid Damage (hit or miss). The attack causes electrical damage, but a successful saving throw means that the target incurs no damage. In other words, the saving throw functions as a to-hit roll and if it is successful the attack missed. Another way of handling this is to require an attack roll for the attack itself (and then don\'t allow a saving throw). If the attack hits, items and equipment spattered with the acid are at great risk of damage (this is one of the signature features of acid as an attack form). Also, acid attacks often cause damage for more than one round.';
const genSpecAttack04 = 'Acid Damage (progressive). The victim takes acid damage, but continues to take damage in later combat rounds (probably a random number of rounds, but possibly a set number of rounds with declining damage each time - it\'s up to you). The continuing damage would almost certainly prevent spell casting, but might also create penalties on saving throws, attack rolls, and/or movement rate. Also, items spattered with the acid may be ruined. Progressive damage over several rounds (with attendant problems caused by pain) and the high likelihood of damaged equipment are the hallmarks of fantasy acid.';
const genSpecAttack05 = 'Acid Damage (save for half damage). The target takes half damage if he makes a successful saving throw; items he carries are also at risk of being destroyed by the acid. Generally, acid attacks are highly dangerous to items (even more so than fire attacks) and the effect lingers for more than a single combat round.';
const genSpecAttack06 = 'Adhesiveness and Friction. The special attack makes things stick to other things, or makes them slippery. This could be a magical power, a mental power, or it might be that the monster spits glue or oil. The obvious use of this power is to stick people in place, prevent them from moving, or make them drop (or unable to release) weapons. However, such an ability could also be used to give the monster extra mobility (if it slides), to haul opponents around (if the glue is at the end of a rope or tentacle), to attach dangerous things to other things, or as part of a characteristic trap the monster sets.';
const genSpecAttack07 = 'Affect Ground or Rock. This special attack can be used to open holes in the ground, collapse walls, cause the ground to grab people, etc. In many cases, only one particular kind of effect will be possible; the monster might be able to open cracks in the floor but not collapse walls, for example. Turning rock into mud (and back) is one interpretation of this sort of ability, and so is the use of a terrible roar to collapse ceilings.';
const genSpecAttack08 = 'Affect Metal. The monster can control metal (probably one specific type). This can include causing the metal to animate, affecting it as a magnet, making it rust, heating it up, chilling it to deadly low temperatures, causing it to conduct electricity, shaping it at will, making it brittle, changing its physical properties, causing it to constrict, or some combination thereof.';
const genSpecAttack09 = 'Affect Stone or Wood. This is likely a form of rapid corrosion, but it could also be the ability to cause tremors in the substance, heat/cool it, warp it, shape it, or otherwise use it to damage people.';
const genSpecAttack10 = 'Affect Use of a Limb. This special attack can sever, destroy, or immobilize one of the victim\'s limbs. If the special attack is delivered by touch, this is probably a tentacle, whip, or other “grabbing” type of attack (attacks that sever limbs should be left to the really dangerous and rare monsters). If the attack is delivered at a range (by a gaze attack, for example), this might represent partial paralysis, a partial flesh-to-stone, or a chemical change that doesn\'t affect the entire body.';
const genSpecAttack11 = 'Affect Wood. The monster can control living and/or dead wood, cause it to animate, affect it like a magnet, heat it up, chill it, cause it to conduct electricity, cause it to act like a vampiric bloodsucker, shape it at will, or some combination thereof. In many cases, the monster will have a single, specific thing it can do, although some more powerful monsters might have a generalized ability to animate and control wood.';
const genSpecAttack12 = 'Animate Objects. The monster can animate nearby objects to serve as allies. Consider a few of the following ideas: perhaps the monster makes a specific object and has these around for use - indeed, it may be that the creature can only animate a specific type of pre-prepared object. Some monsters might also be restricted to animating objects made of a certain substance, made during a certain time period, or made by a certain race.';
const genSpecAttack13 = 'Asphyxiation. This special attack removes or reduces the target\'s ability to breathe. It could be by pulling the victim underwater, by filling the victim\'s lungs with fluid, by choking the victim\'s neck, by suffocating the victim, by removing the victim\'s memory of how to breathe, by surrounding the victim with dust or smoke, or a variety of other methods. Death is not immediate, and the period of time required for the victim to die can be measured out in several ways: a set number of combat rounds, a random number of combat rounds, a number of combat rounds related to the victim\'s constitution score, a number of rounds related to the victim\'s level, or a series of saving throws until the victim finally succumbs. Don\'t worry if the character seems to be able to hold his breath for an incredibly long time - just assume that he manages to catch a gasp of air somehow during the process - the important thing is to make the attack work well as part of the game, not to simulate exactly how long a person can hold his breath.';
const genSpecAttack14 = 'Aversion. The special attack creates an aversion to something, often an aversion to animals related to the monster, or to situations involving the monster\'s normal surroundings. For example, a giant, intelligent beetle\'s special attack might cause an aversion to beetles or bugs. Or, if the beetle is a subterranean creature, the special attack might cause an aversion to darkness. A table of Aversions is also contained in a later book.';
const genSpecAttack15 = 'Bleeding and Healing. This sort of special attack either causes ongoing damage (probably from bleeding or bloodsucking, but possibly for other reasons such as caustic materials) or causes damage that doesn\'t heal in the normal fashion. Ongoing damage is probably for a random number of rounds, rolling damage again each round. A list of possibilities: bleeding caused by jagged wound, bleeding caused by blood-thinning chemical, magical nature of bite/claw, cursed nature of bite/claw, mild poison in bite/ claw/stinger, chemical reaction continues until the catalyst is used up (like acid), or a substance continues burning or producing energy     until it is used up. (Yes, I know the last two are technically the same thing). If the special attack causes damage that doesn\'t     heal normally, there are a few possibilities: (1) the damage cannot be cured by magical healing and must be regained by normal     rest, (2) the damage can only be cured by magical healing, (3) the damage cannot be cured without a specific spell to neutralize     poison, remove curse, or dispel magic, whichever seems appropriate to the monster\'s nature.';
const genSpecAttack16 = 'Body Infestation. This special attack infests the victim\'s body with a plant or animal growth. The result might be extremely minor: “you have fleas,” problematic, “flea bites are distracting you and causing you to attack at -1,” or quite deadly, “an enormous flea is growing inside you: each round you attack at a cumulative -1 to hit, and on round 10 you die unless cured.” Vermin and fungi are the obvious candidates for this sort of attack, but this sort of attack would also include undead worms, growths that are contagious if the character gets too close to the other characters, and a variety of other possibilities. Conditions that worsen as time goes on work well with this sort of attack.';
const genSpecAttack17 = 'Bury. The attack buries the victim in some sort of substance, digs him down into the ground, or hauls up dirt and stone to cover him. Possible substances for a burial-type attack might include slime, ashes, gravel, plaster, hardening resin, rock, sand, and even water.';
const genSpecAttack18 = 'Charisma Loss. The attack drains one or more points of charisma from the victim. The attacker may or may not gain a benefit from the drain (additional hit points, to-hit bonuses, etc) depending upon whether it seems to fit well with the concept. If the victim reaches a charisma score of 0 as a result of successive attacks, one of several things might happen: the victim might die and become a creature similar to the attacker, or might remain alive as the attacker\'s mental slave. Another possibility is that the victim just dies, and a third possibility is that restoring the lost points becomes harder - what might have returned naturally is now a permanent condition requiring spells or divine intervention to reverse. Note that the drain might be temporary or permanent - this is up to you as a matter of how powerful you want the monster to be.';
const genSpecAttack19 = 'Cloud Vortex. Similar to the “Elemental” and “Energy” Vortex attacks, this is an attack in which the monster calls forth mist, smoke, steam, vapor, fog, or some other kind of gas in a whirlwind of power. The victim takes some damage from being hurled around, but the distinguishing feature is the effect of the substance being used for the vortex. It might be poisonous, might be choking, might be hot, might be cold, might conduct electricity, might dispel magic, or could have any number of other properties. The cloud probably lingers more than one combat round, possibly trapping its victims within, possibly moving from one victim to another, or possibly just remaining in one place as a potential obstacle during the rest of the combat.';
const genSpecAttack20 = 'Clumsiness. Victim suffers one or more of the following: a penalty to hit, a penalty to armor class, inability or reduction in spell casting, and/or the chance to drop any items he is holding. Actual dexterity score is not necessarily affected. The way in which the attack causes clumsiness could include overloading one of the victim\'s emotions (joy, rage, hate, greed, fear); an alchemical reaction (mysterious chemicals in the creature\'s spittle); the aftereffects of an electrical shock; or a very weak poison, curse, or disease. The duration could range from only a couple of combat rounds to days in length.';
const genSpecAttack21 = 'Cold Damage (all or none). A blast of cold either hits or misses the target - this can be governed by an all-or-nothing saving throw, or it might be an attack for which the attacker needs to make a to-hit roll. Cold temperature normally wouldn\'t cause much collateral damage to items or equipment unless it is an unusually magical type of cold (perhaps affecting metal more than other substances, for example).';
const genSpecAttack22 = 'Cold Damage (manifestation). The special attack brings into being an abstract shape of pure coldness (serpentine, mist, etc). The manifestation causes cold damage (or makes a separate attack) each round for a set duration.';
const genSpecAttack23 = 'Cold Damage (save for half damage). A blast of cold inflicts hit-point damage, half if the target makes a saving throw or similar avoidance check. Unlike fire, cold damage doesn\'t usually risk much collateral damage to items and equipment. Cold damage can include such things as blasting particles of ice, or visibility-obscuring snow.';
const genSpecAttack24 = 'Cold Damage (unusual collateral damage). Cold temperature normally doesn\'t affect items or substances - at least, not in the traditional “save for half damage” type of attack. Cold attacks causing an unusual type of collateral damage are thus quite memorable, because they\'re a bit unexpected. A few possibilities include: metal is chilled and causes damage for more than one round; potions or other liquids freeze with some sort of random or unexpected effect; torch fire freezes; leather has a risk of turning brittle and breaking, etc.';
const genSpecAttack25 = 'Command Plants or Animals. The monster can command nearby plants or animals to serve as his allies. If the monster is a plant-monster, it may have a specific type of slave-plant (possibly a weaker monster-type with different abilities) that it can command or animate. A more powerful monster might be a general plant-lord type, or perhaps it can command any sort of fungus but not other types of plants. Animal-controlling monsters, as with plant-controllers, might be limited to specific types of animals (mammals, reptiles, etc) or might have a particular type of animal they breed, control, or live in symbiosis with. In some cases, animal or plant controllers (especially the ones with a specific type of ally) can turn their victims into that kind of plant or animal.';
const genSpecAttack26 = 'Constitution Loss. The attack drains one or more points of constitution from the victim. The attacker may or may not gain a benefit from the drain (additional hit points, to-hit bonuses, etc) depending upon whether it seems to fit well with the concept. If the victim reaches a constitution score of 0 as a result of successive attacks, one of several things might happen: the victim might die and become a creature similar to the attacker, or might remain alive as the attacker\'s mental slave. Another possibility is that the victim just dies, and a third possibility is that restoring the lost points becomes harder - what might have returned naturally is now a permanent condition requiring spells or divine intervention to reverse. Note that the drain might be temporary or permanent - this is up to you as a matter of how powerful you want the monster to be.';
const genSpecAttack27 = 'Curse (strategic). A “curse” can be almost anything, but what distinguishes it is that it responds to particular spells that remove … curses. If the party happens to have a “remove curse” spell handy, the special attack\'s power can easily be negated, unless this is a super-powered curse of some kind. Strategic curses are long-term curses that don\'t necessarily have much immediate effect in a combat, but have repercussions in the game outside the realm of combat. Some of these are purely cosmetic, and would be reflected only in the role-playing environment: a change in skin color, a long nose (perhaps it grows when you tell a lie!), a change in gender - all of these are excellent curses even though they don\'t affect the game itself. Other strategic curses are those which restrict decision-making in between combats if they aren\'t dealt with. Examples of this type of curse include a “quest to obtain the grail,” or “give half your treasure to the evil cult.”';
const genSpecAttack28 = 'Curse (tactical). A “curse” can be almost anything, but what distinguishes it is that it responds to particular spells that remove … curses. If the party happens to have a “remove curse” spell handy, the special attack\'s power can easily be negated, unless this is a super-powered curse of some kind. A “tactical” curse is one that focuses on the basic die rolls and mechanisms of the game - “strategic” curses focus more on flavor or other aspects of the game outside the combat rules. Tactical curses will generally accomplish one or more of the following: (1) lower an ability score, (2) cause random actions (running, singing, etc), possibly triggered by a low attack roll or with a risk of onset when the character attempts a particular action, (3) cause a specific sort of action, such as attacking allies or sleeping, when the curse is triggered by a bad die roll or other triggering event, (4) cause a penalty to attack rolls, damage rolls, and/or saving throws, (5) give the character a small chance of sudden death when attempting certain actions like running, attacking, casting a spell, walking into the light, etc, (6) cause a small amount of hit point damage whenever the character undertakes a particular action such as running, etc (see the preceding list), (7) change the character\'s location when certain events take place, either by teleportation or by uncontrollable or random movement, (8) cause a chance of paralysis or sleep when the character undertakes a particular action (see the preceding list), cause the character to lose a level or a particular number of experience points (9) remove or restrict spell casting ability, (10) reduce the character\'s movement. Other tactical curses can include transformations such as polymorph or other spell-like effects such as a charm.';
const genSpecAttack29 = 'Dangerous Barriers. The monster can create barriers such as walls of thorns, walls of fire, bubbles of temporary levitation, banks of whirling blades, or whatever. Here are lists of possible types of barriers and possible types of composition. Types: wall, circle, spiral, shrinking circle, cube, moving wall, short fence, cloud, thread, rope. Composition: fire, cold, ice, frost, earth, water, gas, blades, swords, daggers, spears, thorns, magical force, mental force, mental domination, aversion, disease, poison, insanity, sound, song, screams, nausea, fear, pincers, stingers, claws, confusion.';
const genSpecAttack30 = 'Death (magic or poison). The special attack uses death magic or poison to cause instant death if the target fails a saving throw. Alternatively, targets with a minimum number of levels or hit dice might be immune to the attack.';
const genSpecAttack31 = 'Death (progressive attribute score loss). If the target fails a saving throw, the result is likely to be death. The victim loses a point of some particular attribute score (strength, dexterity, constitution, intelligence, wisdom, or charisma) periodically until the score reaches zero and death results. The process can be stopped in different ways depending on the nature of the attack. If it is a curse, it can be removed, if it is a form of poison it can be neutralized, if it is a form of disease it can be cured. If it is none of the above, then there might still be a “folkloric” antidote - an action that negates the attack for no scientific reason. The most obvious example of a folkloric antidote is to kill the attacker before the draining process is complete. Less obvious examples might include stopping to drink lots of water, divesting oneself of all metal objects, etc. Folkloric antidotes might completely stop the draining process or they might just hold it in abeyance.';
const genSpecAttack32 = 'Death (progressive dexterity loss). If the target fails a saving throw, the result is likely to be death. The victim loses a point of dexterity periodically until dexterity reaches zero and death results. The process can be stopped in different ways depending on the nature of the attack. If it is a curse, it can be removed, if it is a form of poison it can be neutralized, if it is a form of disease it can be cured. If it is none of the above, then there might still be a “folkloric” antidote - an action that negates the attack for no scientific reason. The most obvious example of a folkloric antidote is to kill the attacker before the draining process is complete. Less obvious examples might include stopping to drink lots of water, divesting oneself of all metal objects, etc. Folkloric antidotes might completely stop the draining process or they might just hold it in abeyance.';
const genSpecAttack33 = 'Dehydrate, Desiccate, Suck Fluids. This special attack sucks blood or dehydrates the victim (possibly all the way into powder). For “standard” bloodsucking, the process starts only with a successful to hit roll and then the attacker causes automatic damage thereafter without rolling to hit. Consider, though, the following ideas: (1) a “ranged” attack of this nature might be pulling bodily fluids out into a mist for the monster to collect later, (2) a failed saving throw might mean that the ongoing damage continues until either the attacker or the defender dies, (3) hit points don\'t need to be the “measure” of the damage; it might be the character\'s constitution score or some other number that\'s used for the measurement, (4) the “vampire” might gain strength (probably hit points) from draining a victim\'s fluids, (5) if the attack involves a tube or some other physical connection, you might want to consider this as an opportunity to add some interesting tactics to the battle - perhaps the tube has hit points and an armor class to allow the connection to be severed quickly, (6) perhaps the fluid is being replaced with something else like eggs or control-fluid.';
const genSpecAttack34 = 'Dexterity Loss. The attack drains one or more points of dexterity from the victim. The attacker may or may not gain a benefit from the drain (additional hit points, to-hit bonuses, etc) depending upon whether it seems to fit well with the concept. If the victim reaches a dexterity of 0, one of several things might happen: the victim might die and become a creature similar to the attacker (this is common with undead, but a bit weird when dexterity is the attribute score being drained). One explanation for death at 0 dexterity is that the body\'s internal systems (circulatory, etc) are no longer working in time with each other.';
const genSpecAttack35 = 'Dimensional (imprisonment). This type of attack imprisons the victim - to some degree - in another dimension or reality. This can be interpreted a number of different ways. Perhaps suspended animation or catatonia can be caused by some sort of dimensional disjunction. Perhaps the imprisonment leaves an incorporeal echo on the material plane - and it might still be able to use spells or mental powers. Perhaps the imprisonment\'s only effect is to slow the victim\'s movement rate (your feet are mired in one dimension, but the rest of you is still free…).';
const genSpecAttack36 = 'Dimensional (phasing). This type of special attack taps other dimensions of time and space to screw around with the opposition\'s movement. The victim is affected with some type of dimensional movement (whether because of a disease, a poison, a curse, the opening of a synchronicity with the eighth dimension, a coating of dimensional frictionlessness, or whatever). The effect is most likely some sort of randomization of the victim\'s movement, although it might also involve moving through solid substances (or even being able to move faster through solids than through air).';
const genSpecAttack37 = 'Disease. The special attack causes a disease. Diseases can be fatal or non-fatal, can be quick-onset or slow-onset, and can cause all kinds of different symptoms while the disease runs its course. Symptoms could include losing the ability to cast spells, a penalty on saving throws or attack rolls, or whatever other interesting conditions you can dream up.';
const genSpecAttack38 = 'Drain Experience (experience points). The special attack causes the victim to lose experience points. Most likely, this is either an undead creature or a creature that can affect the victim\'s memory. A third possibility, related to memory, is a creature with some ability to manipulate time or aging. Brain-creatures, leech-creatures, undead creatures, and dimensional creatures thus tend to be the prime candidates for this sort of power. If you\'ve got a good idea that falls outside those prime candidates, though, go for it.';
const genSpecAttack39 = 'Drain Experience (level). The special attack causes the victim to lose one (or possibly two) levels of experience. This is generally a feature of undead creatures that suck away the victim\'s life energy (as opposed to creatures who affect memory, likely sucking away a set number of experience points rather than a level). A monster with this sort of level drain should be associated with life (death) force in some way if it is not undead.';
const genSpecAttack40 = 'Electrical Damage (affects action). The attack causes electrical damage to the target, but there\'s also a special effect involved - if the victim fails some sort of check (morale, saving throw, percentile chance, etc) he takes some action in response to or as a result of the shock. Since electricity affects the brain, all kinds of actions are credible here - it\'s a much broader set of possibilities than what a fire attack might make someone do. Possibilities include: random actions for some number of rounds, loss of bodily coordination (reflected with combat penalties), mental disorientation (affecting spell casting and possibly even in some really cool ways like making the character risk casting the wrong spell), temporary paralysis, etc.';
const genSpecAttack41 = 'Electrical Damage (causes condition). In addition to the damage caused by the attack, there is a chance that the victim will also have a “condition” lingering after the electrical shock. This is similar to electrical damage that causes an action, but bear with me a moment. Possibilities include: the victim has a static charge built up that will cause damage to the next person he touches (not good if you\'re the cleric, but actually pretty cool if you\'re the fighter and some of the enemies aren\'t immune to electricity); the victim cannot hold an object in his hands without dropping it; the victim is stunned, twitching, or knocked out from the electric shock, etc.';
const genSpecAttack42 = 'Electrical Damage (hit or miss). The attack causes electrical damage, but a successful saving throw means that the target incurs no damage. In other words, the saving throw functions as a to-hit roll and if it is successful the attack missed. Another way of handling this is to require an attack roll for the attack itself (and then don\'t allow a saving throw).';
const genSpecAttack43 = 'Electrical Damage (progressive). The victim takes electrical damage, but continues to take damage in later combat rounds until the series of electrical shocks has run its course. Exactly what effect the continuing damage will have is up to you. It would almost certainly prevent spell casting, but might also create penalties on saving throws, attack rolls, and/or movement rate.';
const genSpecAttack44 = 'Electrical Damage (save for half damage). The attack causes electrical damage, reduced by half with a successful saving throw. In general, lightning or electrical attacks don\'t have the same sort of “save or burn” collateral damage as fire attacks - or at least, they\'re not generally as severe. Electrical attacks are often made unique by the way the electricity moves around. Consider the possibility of the electricity jumping from one target to another, the possibility of it reflecting off a wall or other surface.';
const genSpecAttack45 = 'Electricity (special). In this case, the electricity involved in the special attack isn\'t normal electricity - it\'s more of a special effect for something else. Just as magical fires can do all sorts of things rather than just burn, a strike of magical lightning or a bolt of power can be the “visual candy” for a multitude of different sorts of attacks completely unrelated to real-world electricity. Possible effects include: lowering an ability score, acting randomly, suffering combat penalties, following enemy orders, floating up into the air, losing the ability to act, losing the ability to cast spells, functioning as a lower-level character, running away, suffering saving throw penalties, suffering hallucinations, and suffering from a heightened emotion such as rage or sorrow.';
const genSpecAttack46 = 'Elemental Vortex. The special attack creates (or animates) a whirlwind of air, fire, water, or earth. In each case, the attack causes damage from a combination of smashing into the target plus the inherent properties of the element being used. Thus, fire would cause additional fire damage, water might drown the victim, air might pick the victim up and move him around, and earth could possibly suffocate the victim but is more likely just going to do more damage with the churning impact. More powerful monsters might create vortices with more interesting results including collateral damage to equipment, moving the target a long way, pulling the target down beneath the water or air, pulling the target into the elemental plane itself, stunning the target for some period of time, causing the target to drop items, etc.';
const genSpecAttack47 = 'Emotion (despondency or sorrow). This special attack induces intense despondency or sorrow in the victim. As is the case with all special attacks involving emotion, creating the details of the special attack is a two-step process concerning (1) who is affected and (2) what happens when someone is affected. Here are some ideas about who might or might not be vulnerable: (1) anyone under a certain number of hit dice is automatically affected but those of higher level are at no risk, (2) anyone under a certain number of hit dice is automatically affected and those of higher level are affected if they fail a saving throw, (3) members of certain races or classes may be immune or might be particularly vulnerable, (4) anyone with intelligence less than a certain number might be automatically affected or might be immune, (5) those who are particularly close to the monster (or the locus of the emotion-effect) have a penalty on the saving throw, or, conversely, everyone beyond a certain distance gets a bonus, (6) the effect begins as a very low chance but increases as the combat progresses (a series of saving throws or some other “check” with increasing penalties). As a list of ideas for the effect of despondency, consider the following: (1) immobilized with sorrow, regret, grief, or ennui; (2) all die rolls are made with a penalty, (3) character departs to go and repair his miserable life, (4) character decides to end it all, and rolls an attack against himself, (5) character blames someone else for his miserable condition, and attacks them instead of the monster, (6) character risks dropping dead from melancholy. One interesting idea is that if the character escapes from this effect, he might be granted a bonus to attack the monster, in revenge. Players adore it when a special attack gets turned around into a bonus for them.'
const genSpecAttack48 = 'Emotion (fear). The monster has a horrific appearance, changes into a horrific appearance, mentally induces fear, or has some other way of causing fear. Fear can be portrayed in a number of different ways, in terms of the attack\'s effect, and there are also a number of different ways to determine who is vulnerable to the attack. Here are some ideas about who might or might not be vulnerable: (1) anyone under a certain number of hit dice is automatically affected but those of higher level are at no risk, (2) anyone under a certain number of hit dice is automatically affected and those of higher level are affected if they fail a saving throw, (3) members of certain races or classes may be immune or might be particularly vulnerable, (4) anyone with intelligence less than a certain number might be automatically affected or might be immune, (5) those who are particularly close to the monster (or the locus of the fear-effect) have a penalty on the saving throw, or, conversely, everyone beyond a certain distance gets a bonus, (6) the fear effect begins as a very low chance but increases as the combat progresses (a series of saving throws or some other “check” with increasing penalties). As a list of ideas for the effect of fear, consider the following: (1) an ability score is vastly reduced until the fear goes away, (2) those affected act randomly according to a table you prepare, (3) those affected suffer combat penalties to hit and/or on damage, (4) those affected follow orders given by the source of fear, (5) those affected are paralyzed with fear, (6) those affected function as a lower-level character, (7) running away (8) chance of death from fear.';
const genSpecAttack49 = 'Emotion (love or happiness). This special attack induces the emotion of love or happiness in the victim - probably directed toward the monster using the special attack, but possibly as a way of immobilizing the target. As is the case with all special attacks involving emotion, creating the details of the special attack is a two-step process concerning (1) who is affected and (2) what happens when someone is affected. Here are some ideas about who might or might not be vulnerable: (1) anyone under a certain number of hit dice is automatically affected but those of higher level are at no risk, (2) anyone under a certain number of hit dice is automatically affected and those of higher level are affected if they fail a saving throw, (3) members of certain races or classes may be immune or might be particularly vulnerable, (4) anyone with intelligence less than a certain number might be automatically affected or might be immune, (5) those who are particularly close to the monster (or the locus of the emotion-effect) have a penalty on the saving throw, or, conversely, everyone beyond a certain distance gets a bonus, (6) the effect begins as a very low chance but increases as the combat progresses (a series of saving throws or some other “check” with increasing penalties). As a list of ideas for the effect of love/happiness, consider the following: (1) the victim drops everything to grovel before, speak poetry to, or praise the monster (or some other focus including other characters or shiny objects), (2) the victim tries to assist and protect the monster, (3) the victim changes sides and follows the monster\'s orders.';
const genSpecAttack50 = 'Emotion (rage). This special attack induces rage, either by taunting, mental manipulation, or temporary insanity. As is the case with all special attacks involving emotion, creating the details of the special attack is a two-step process concerning (1) who is affected and (2) what happens when someone is affected. Here are some ideas about who might be vulnerable: (1) anyone under a certain number of hit dice is automatically affected but those of higher level are at no risk, (2) anyone under a certain number of hit dice is automatically affected and those of higher level are affected if they fail a saving throw, (3) members of certain races or classes may be immune or might be particularly vulnerable, (4) anyone with intelligence less than a certain number might be automatically affected or might be immune, (5) those who are particularly near the monster (or the locus of the rage-effect) have a penalty on the saving throw, or, conversely, everyone beyond a certain distance gets a bonus, (6) the rage effect begins as a very low chance but increases as the combat progresses (a series of saving throws or some other “check” with increasing penalties). As a list of ideas for the effect of rage, consider the following: (1) victim attacks with melee weapons and cannot voluntarily retreat, (2) the rage is a distraction, causing combat penalties and restricting spell casting, (3) the rage gives a bonus on one hand (damage rolls, perhaps) but there is a more dangerous penalty associated with it as well, such as a penalty on saving throws, attack rolls, inability to retreat, inability to do anything more subtle than a frontal assault, etc. (4) the rage is so fierce that the victim is actually paralyzed by it. It is possible that the “rage” is not automatically going to be directed at the monster using the special attack, either: it might cause members of the party to attack each other, or it might be an “attack” that\'s used to strengthen the monster\'s minions and allies (in which case, it might be a benefit with no particular downside, like a to-hit bonus).';
const genSpecAttack51 = 'Energy Vortex. Similar to the “Elemental Vortex,” this is an attack in which the monster calls forth a whirlwind of some kind of “energy,” including electricity, magical force, or mental force. The victim would suffer damage, but the distinguishing feature of this sort of attack is either that the victim is picked up and moved by the attack or is trapped inside it until he escapes or the duration expires (duration might be as long as the monster concentrates on maintaining the effect, which is not good for the victim).';
const genSpecAttack52 = 'Fire (special). In this case, the fire involved in the special attack isn\'t normal fire - it\'s more of a special effect for something else. Magical fires can do all sorts of things rather than just burn, so this is a very broad category. Possible effects include: lowering an ability score, acting randomly, suffering combat penalties, following enemy orders, floating up into the air, losing the ability to act, losing the ability to cast spells, functioning as a lower-level character, running away, suffering saving throw penalties, suffering hallucinations, and suffering from a heightened emotion such as rage or sorrow. The fire doesn\'t have to be magical - it could just be that this particular monster\'s fire-breath causes people to flee, for instance. On the other hand, the whole “fire” thing might be little more than a special effect for an attack that\'s really all about floating the opponent helplessly into the air.';
const genSpecAttack53 = 'Fire Damage (affects action). The attack causes fire damage to the target, but there\'s also a special effect involved - if the victim fails some sort of check (morale, saving throw, percentile chance, etc) he reflexively takes some action in response to the fire. These could include: fleeing for a couple of combat rounds, trying to put out the fire, or writhing in pain.'
const genSpecAttack54 = 'Fire Damage (hit or miss). The attack causes fire damage, but a successful saving throw means that the target incurs no damage. In other words, the saving throw functions as a to-hit roll and if it is successful the attack missed. Another way of handling this is to require an attack roll for the attack itself (and then don\'t allow a saving throw). Items in the area may take collateral damage (a saving throw or a “hot” effect), but only if the target failed the saving throw - because if the target makes the saving throw, the items were presumably not exposed to the fire in the first place.';
const genSpecAttack55 = 'Fire Damage (progressive). The victim takes fire damage, but continues to take damage in later combat rounds until the fire has run its course. The attack is most likely made with a burning substance as opposed to a burst of flame - the monster spat burning oil, phosphorus, Greek fire, napalm, or lots of burning coals - or some sort of magically lingering fire. It is the continued burning of the substance that causes the ongoing damage. Exactly what effect the continuing damage will have is up to you. It would almost certainly prevent spell casting, but might also create penalties on saving throws, attack rolls, and/or movement rate.';
const genSpecAttack56 = 'Fire Damage (save for half damage). The attack causes fire damage, reduced by half with a successful saving throw. Fire may also cause collateral damage to items, depending on how “strong” you want the attack to be. If the fire causes collateral damage, you could reflect this in a variety of ways: (1) require flammable items to make a saving throw or be ruined (or ignite), (2) decide that certain items such as cloth will automatically - no saving throw - smolder (and cause damage to the wearer) unless time is spent extinguishing them, (3) take into account that metal retains heat and build in some process to handle “hot” armor and weapons. The basic form of a fire attack, though, is simply to require a saving throw for vulnerable items - whether or not the target took half damage because he made a saving throw.';
const genSpecAttack57 = 'Hallucinations or Illusions (basic). The special attack causes hallucinations or illusions for those who are affected. The illusions might be bright colors, things that appear to be changing form, or whatever - what\'s important isn\'t the exact nature of the illusion but the effect it has on general combat (more complicated illusions are treated in a different category). The easiest way to come up with basic illusion/hallucination attacks is to determine first what they do, and then figure out what sort of illusion might create that effect. Possible results of a basic hallucination are as follows: (1) lowering an ability score while the hallucination is operating, (2) acting randomly according to some table of actions, (3) suffering combat penalties to hit, (4) following enemy orders or orders generated randomly by a sound-hallucination, (5) losing the ability to take any actions due to fascination, nausea, confusion, etc, (6) functioning as a lower-level character as a general way of reflecting that the character is distracted, (7) running away or moving randomly in response to the hallucinated reality, or (8) suffering saving throw penalties. As a basic example of thinking up the illusion based on the result: a hallucination which causes an attack penalty of -2 might be an illusion which blurs the outlines of the character\'s sight or shifts his vision slightly to the side of where things actually are. In addition to the combat-type basic illusions, there is another category of basic “camouflage-type” illusions used by ambush-monsters - these illusions don\'t necessarily create any sort of combat modifier, but they make the monster seem innocuous until it is ready to attack or lead the party toward some attractive-looking goal where the monster has an advantage. These would include monsters that are invisible, monsters that can make themselves look like stone walls or statues, a monster that can make people think it\'s a treasure chest, etc.';
const genSpecAttack58 = 'Hallucinations or Illusions (complex). The special attack causes a hallucination or illusion that is too complex to be characterized with a modifier to die rolls or a table of random actions. An illusion of mirror images (giving the monster\'s opponents the chance to be attacking the “wrong” monster) is one example; another example is a hallucination that might cause damage to the victim, and a third example is a hallucination that creates the image of a deep pit between the monster and the victim. In general, these fall into the following categories: illusions that create false enemies, obscure or change the appearance of the enemies, create illusionary obstacles, create illusionary dangers (the appearance of a spell being cast, fake attacks, or some other type of illusionary assault), or otherwise prevent the victim from getting true information about the tactical situation. Exactly how these are handled is up to you - if the illusion is unusual, you might choose not to follow the “official” method for handling illusions, if your game has one. There is a wide variety of interesting ways to handle illusions, including saving throws, a “check” against intelligence or wisdom, or simply telling the player what the character sees and leaving it to the player to respond. In some cases, depending on the illusion, the way to handle it will be obvious; in other cases, the same illusion treated differently might as well be a different kind of special attack. Feel free to let your imagination roam: what sort of illusion might you create if you were a monster? One last point: there is a big difference between a monster that creates one specific illusion (mirror images, for example) and one that can create all kinds of illusions in response to the circumstances. The latter type of monster is very powerful, and you might want to think of its abilities in terms of spells rather than a general ability to create illusions.';
const genSpecAttack59 = 'Ice (blasting). This sort of attack is partially about the cold temperature, but there\'s a “blasting” component to it as well. Such effects could include: knocking the target backward, knocking the target prone, blowing items out of the target\'s hands, etc.'
const genSpecAttack60 = 'Ice (immobilizing). This sort of attack isn\'t all about the temperature; it will probably cause some hit point damage, but the main feature of the attack is that it uses frozen water to immobilize the target. It might be creation of a block of ice (“it froze the air itself!”), or it might be a matter of breathing a storm of ice particles that create a block, wall, or chunk. If the monster is very powerful or highly magical, the ice might have other dangerous properties - suffocation, ongoing damage, or a chance of instant death from hypothermia all being possibilities.';
const genSpecAttack61 = 'Immobilize (by an activity). Although many of the special attacks listed here would have the effect of immobilizing the victim, this entry addresses immobilization-type attacks as a group. Here is a series of activities which could cause a character to be effectively immobilized: dancing, twitching, laughing, vomiting, nausea, confusion, jumping, floating, talking, scratching, begging for mercy, thinking, arguing, holding one\'s breath, hiding, and meditating.';
const genSpecAttack62 = 'Implant Eggs or Young. This special attack implants the victim with eggs or larvae, or in some way makes him into a host for the attacker\'s reproduction - which can include a magical transformation into the same sort of creature (possibly independent, possibly a slave of the attacker). There are several possible variables to work with when designing this sort of special attack. First, the trigger - it might be that a successful hit automatically begins the process, it might be that there is a saving throw required after each hit, it might be that each hit has a percentage chance of causing the effect, or it might be that the “egg-laying” effect only happens when the victim is dead, knocked unconscious, or rendered helpless by the attack. Secondly, the remedy - the process would be counteracted differently depending on whether the “eggs” are considered a poison, a curse, or a disease. Thirdly, the gestation period - it might run from only a couple of combat rounds to more than a week in duration (giving the adventurers much more time to find a remedy back in the civilized world). Fourthly, the effects during gestation - perhaps the victim remains unconscious or in suspended animation until the eggs hatch (or his body alters, or the implanted creature eats its way out, or whatever), perhaps he can wake up and function normally until his sudden demise as a character, or perhaps you can think of one or two “stages” of the process in which the victim becomes weaker or changes as a result of being used as a host organism.';
const genSpecAttack63 = 'Insanity (strategic). “Strategic” insanity, as opposed to “tactical” insanity, is a form of insanity in which the effects aren\'t bundled up in the game rules, but are reflected in the roleplaying and in the non-combat side of the game. Examples include various phobias, aversions, and manias. Hysterical blindness is another good example - a condition that can suddenly appear when the character is under stress.';
const genSpecAttack64 = 'Insanity and Confusion (tactical). The special attack drives the victim temporarily or permanently insane. The characteristic example of this sort of attack is confusion, which causes victims to act according to a random table.'
const genSpecAttack65 = 'Intelligence Loss. The attack drains one or more points of intelligence from the victim. The attacker may or may not gain a benefit from the drain (additional hit points, to-hit bonuses, etc) depending upon whether it seems to fit well with the concept. If the victim reaches an intelligence of 0 as a result of successive attacks, one of several things might happen: the victim might die and become a creature similar to the attacker or become a mindless host for the attacker\'s larval offspring (mind-leeches, or whatever). Another possibility is that the victim just dies, and a third possibility is that restoring the lost points becomes harder - what might have returned naturally is now a permanent condition requiring spells or divine intervention to reverse. Note that the drain might be temporary or permanent - this is up to you as a matter of how powerful you want the monster to be.';
const genSpecAttack66 = 'Light, Dark, and Shadow. The monster uses light, darkness, or shadow as a special attack. Consider some of the following: (1) a floating weapon or dangerous coalescence of light or darkness, which attacks once brought into being, (2) creates darkness to effectively blind the enemy, (3) blasts of damaging light, (4) the monster can compress and concentrate light or darkness to make some interesting form of attack.';
const genSpecAttack67 = 'Luck. This special attack gives the victim bad luck (reflected with die roll penalties). The question is: what sort of bad luck? Is it just a curse that makes you inflict less damage, or is it a wide-ranging effect that doesn\'t just make you miss opponents but also means you always get a fly in your beer at the local tavern? In addition to whatever specific die roll modifier this attack causes, some monsters might deliver bad luck in very specific categories: the beautiful woman type monster might deliver a curse of bad luck with the opposite gender; the earth-elemental type monster might deliver bad luck involving gemstones; the dryad-like creature might give bad luck outdoors, or involving wooden items.';
const genSpecAttack68 = 'Magic Drain (items). The special attack drains magic items of their power (and might or might not give the monster additional power as a result). Items can be drained temporarily or permanently, and they can also be drained in a way that gives them a chance to fail when used as opposed to being completely “dead.”';
const genSpecAttack69 = 'Magic Drain (spells). The special attack removes, to some degree or other, a spell caster\'s ability to cast spells. The attack might remove a single spell from the caster\'s mental inventory, it might remove all spells, it might remove particular spells, it might remove spells of a certain level or higher (or lower), or it might lower the caster\'s effective level of experience. Alternatively, the attack might cause all the caster\'s spells to function sub-normally, or create a chance of failure when the caster tries to cast a spell. In the case of powerful monsters, draining spell power from a caster might also strengthen the monster; giving it extra hit dice, hit points, or a combat bonus. In the case of extremely powerful monsters, whatever spell was drained might actually go to the monster and give it the ability to cast that spell.';
const genSpecAttack70 = 'Magic or Mental Force (slam). The special attack uses magical force or telekinesis to smash the victim into something, or smash something into the victim. This includes hitting the victim with magic force alone (i.e., no actual object). This is a broad category: the attacker might or might not need to make a to-hit roll, and the defender might or might not have the chance to avoid the blow with a saving throw or other means of lessening the damage. More powerful versions of this attack might do one or more of the following: push back the victim, hurl back the victim, make the victim drop items in hand, stun the victim, knock the victim unconscious, or even have a chance to kill the victim outright.';
const genSpecAttack71 = 'Memory (steal ability). This special attack allows the monster to use some ability or skill known by the target. The most obvious example of this is casting a spell, but combat bonuses or other advantages could be targeted by such an attack. Even the victim\'s target number for saving throws, for example, could be “stolen” if it is more favorable than the monster\'s normal target number. It is also possible for a memory-affecting special attack to target only the magically related memories of a target, stripping away spells or spell casting abilities but leaving combat and other skills unaffected. This more specific type of memory attack would generally be found in creatures with some relation to wizardly magic (e.g., created in a wizard\'s lab, bred to fight wizards, etc), a relation to divine or unholy power (e.g., the monster is a remnant of some ancient divine retribution, is a parasite of divine power, etc), or feeds specifically on magic power.';
const genSpecAttack72 = 'Memory Drain (experience). Memory-draining special attacks are generally targeted at the victim\'s level or experience points. The attack would either remove (temporarily or permanently, depending on how you decide to design it) one or two levels of experience or a set number of experience points.';
const genSpecAttack73 = 'Movement Inhibited (external). Some sort of very weak binding or entangling inhibits the victim\'s movements. Victim suffers one or more of the following: a penalty to hit, a penalty to armor class, and/or reduction in spell casting ability (perhaps only “easy” spells, perhaps a chance of spell failure, perhaps an increase in casting time). There is probably also some reduction in the victim\'s movement rate. The nature of the binding force can include: filaments of magical energy, thickened air, vacuum power or wind, clothing becoming brittle or cumbersome, etc.';
const genSpecAttack74 = 'Movement Prevented (external). Some sort of binding or entangling prevents the victim from moving. The severity of the attack can range from complete helplessness to merely being held in one place (but otherwise able to take actions). The nature of the binding force can include: filaments of magical energy, thickened air, a coagulated blob of magical glue, a natural adhesive, swarms of infinitesimal spirits holding the victim in place, the stones of the floor grabbing his ankles, a spider web, or animated vines or tentacles.';
const genSpecAttack75 = 'Open Planar Gate. The monster can open a gate into some other reality. This could be an escape mechanism, a way of summoning allies, or a way of blasting the area with weirdness from the other plane. Even a fairly mundane little mole-like critter becomes interesting if it can burrow into the tenth dimension and come out behind you. Indeed, if it can open a gate through time, it might be able to come out and attack you simultaneously from two different places (of course, then it would disappear for a few moments since it used itself as a special attack a few moments earlier…). If a planar gate is used to summon allies (again, keep in mind that even minor monsters - like a planar ant - might be able to summon more of their own kind). If the gate is an escape mechanism, perhaps it\'s possible for the adventurers to follow the monster into some strange and alien realm where it makes its home - and possibly has a different bodily form.';
const genSpecAttack76 = 'Paralysis. The special attack causes paralysis for a random number of combat rounds, minutes, or hours. A very powerful monster might cause permanent paralysis as a form of curse, poison, or disease.';
const genSpecAttack77 = 'Poison (lethal). Lethal poisons cause death, but death is not necessarily immediate. A slow-onset poison might cause some sort of debilitating effects during the onset period (such as the victim being incapacitated with pain, or becoming unconscious), or it might simply cause a progressive weakness that isn\'t reflected in terms of the game\'s numbers… until the character drops dead.';
const genSpecAttack78 = 'Poison (non-lethal). Non-lethal poisons can have a variety of effects: some might be temporary effects until the effects of the poison have worn off, but others might be permanent debilities until some sort of magic has been used to reverse the damage caused by the poison.';
const genSpecAttack79 = 'Raise, Create, or Summon Undead. Undead monsters aren\'t the only ones who can use undead monsters as allies or minions. More importantly, not all undead must necessarily be undead - a statement which obviously requires clarification. Animated bodies need not be the result of black magic (which is the case for, say, the standard zombie). But what about bodies animated or controlled by a plant - is this technically an undead zombie? Will it necessarily work in exactly the same way as an undead zombie just because it\'s a moving human corpse? If your answer is “no,” then you\'ve just opened up the realm of the plant-undead, the virally-controlled undead, the mechanically-controlled undead, the psionically-controlled undead … all kinds of creepy minions and transformations that can be used to develop monsters and their abilities.';
const genSpecAttack80 = 'Senses (overstimulate). The five senses are sight, hearing, touch, taste, and smell, and each of them could be overstimulated by a monster by means of a special attack. I don\'t necessarily mean that the monster is hideously ugly, sounds awful, feels awful, tastes awful or smells awful, although if one of those trips off an inspiration, then run with it. What\'s meant here is that the monster affects one of the victim\'s senses to make it too powerful for effective use. For example, if the special attack affects the victim\'s sense of smell, all smells might become so powerful that the victim falls prey to nausea. If the attack affects sight, the victim might be overcome by light sensitivity or have vision so microscopic that he can\'t perceive what\'s happening around him. Since there is a wide variety of possibly “effects” stemming from sensory overstimulation, here is a quick list of possibilities to get the mind working: (1) temporarily lowering an ability score (or all ability scores), (2) acting randomly, (3) suffering combat penalties, (4) losing the ability to act due to nausea, fascination, or confusion, (5) functioning as a lower-level character, (6) running away or moving randomly, (7) suffering saving throw penalties, (8) dropping any items held in hand.';
const genSpecAttack81 = 'Senses (remove capability). The five senses are sight, hearing, touch, taste, and smell. Only sight and hearing have much effect in game terms, so I\'ve just lumped them all together into one entry on this table. The special attack causes blindness (or makes lots of things invisible), or it causes deafness (or keeps sound from functioning in the are) - alternatively, it removes the sense of touch, taste or smell from the target (or negates feeling, taste or smells within the area of effect).';
const genSpecAttack82 = 'Size and Density. The special attack changes the size or density of the victim (and a beneficial form of it might also be usable to help allies if the monster is a leader-type). Growing and shrinking allies and enemies respectively is a fairly obvious use of this sort of ability, and it\'s easy to generate a set of modifiers as required. Manipulating density and weight is a bit more open ended. Can the monster make people weightless so they can levitate or be levitated? How about too heavy to move? Perhaps the effect only works on metal or some other substance.';
const genSpecAttack83 = 'Sleep and Catatonia. The special attack causes magical sleep, normal sleep, catatonia, or suspended animation. In some cases the effect might be automatic against targets with a lower number of hit dice (or levels), or it might permit a saving throw. It could also affect only those with intelligence or wisdom lower than a target number, or affect only a certain total number of hit dice within an area. Onset is probably immediate, but it would also be possible that there\'s an intermediate, “sleepy” phase in which the victim is still functioning with combat penalties before actually falling into the magical sleep. Powerful sleep-type attacks might induce this “sleepy” condition even if the victim makes a successful saving throw. In some cases, particular dreams, or dreams sent by the attacker, might be an important part of the attack in addition to putting the victim to sleep.';
const genSpecAttack84 = 'Slow. This sort of special attack slows down the victim, probably to half speed at everything, but possibly only in terms of movement or attack speed - it depends on how the monster does it. The effect might just be magic which slows down opponents, it might be related to manipulation of time or other dimensions, or it might be that the monster produces an external cause like glue or webs that slow people down.';
const genSpecAttack85 = 'Sound (action-causing). The monster speaks or makes sounds that compel certain actions in the unfortunate listener. This isn\'t control by the monster, because the monster can\'t fine-tune anything, but in many ways the effect is the same. Examples include: approaching the monster, becoming paralyzed, running away, removing armor, attacking, hiding, etc.'
const genSpecAttack86 = 'Sound (control). Many folkloric monsters use sound to control others - whether by means of song, speech, or spell. There are many ways to represent different degrees of mental control, and many ways to determine whether a person is affected. For example, degrees of mental control include: (1) victim follows all commands like a puppet, (2) victim sees the controller as his friend but will not put himself into mortal danger, (3) controller can only command the victim to perform certain actions, but other actions don\'t fall within the scope of the magic - for example, a monster that can “call” the victim to a certain place, but can\'t order the victim to attack its enemies. In terms of ways to determine if a target is affected, here is another list of possibilities: (1) anyone under a certain number of hit dice is automatically affected but those of higher level are at no risk, (2) anyone under a certain number of hit dice is automatically affected and those of higher level are affected if they fail a saving throw, (3) members of certain races or classes may be immune or might be particularly vulnerable, (4) anyone with intelligence less than a certain number might be automatically affected or might be immune, depending on the nature of the sound/persuasion being used, (5) anyone within hearing gets a saving throw, (6) those who are particularly close to the sound have a penalty on the saving throw, or, conversely, everyone beyond a certain distance gets a bonus. The duration of sound-control attacks is another factor that can be used to create different types of challenges: in some cases, the control might end as soon as the sound ends, but in other cases the control might be established irrevocably.';
const genSpecAttack87 = 'Sound (distraction). The monster uses speech, sound, or song to distract or immobilize its enemies. It may be that the sound itself is so discordant or so beautiful that it creates the distraction, or it could be that the sound evokes such a strong emotional response that the victim acts strangely or fights poorly. To run through these variables: if the sound or speech evokes an emotion, these could include joy, rage, hate, greed, fear, or adoration. The effects of such sound attacks could include: (1) temporarily lowering an ability score, (2) acting randomly, (3) suffering combat penalties, (4) following enemy orders, (5) losing the ability to act, (6) losing the ability to cast spells, (7) functioning as a lower-level character, (8) running away, (9) suffering saving throw penalties, (10) suffering hallucinations - or a combination of more than one of the above.';
const genSpecAttack88 = 'Sound Damage (save for half damage). Sonic damage is a little hokey, but every once in a while it works (particularly with monsters based on real-world animals that use echolocation or are known for producing a characteristic sound. Sonic damage ordinarily wouldn\'t cause collateral damage to items or equipment, but glass is a natural candidate for being damaged in this way. I recommend avoiding the concept of sonic damage - sound works much better for mental control, combat penalties, preventing spell casting, and other such special effects than it does with the concept of taking actual hit point damage. At all costs, avoid thinking of sound damage in terms of vibration and frequency, and start thinking of it in terms of song and screech - or you\'ll make a serious misstep in terms of the “feel” of a fantasy game. This is even true if the monster is from the “voids between the stars” or from an alternate high-tech universe.';
const genSpecAttack89 = 'Spell-like Abilities. The monster has a set group of abilities that function as spells, probably with a limited number of castings per day, per hour, per minute, or whatever. Unlike true spells, it may be that all monsters of this type have exactly the same spelllike abilities and can\'t change them from day to day (to my mind, this is what distinguishes “spell-like” from “spell,” but what\'s important here isn\'t to create clean categories, it\'s to muddle things together for maximum creative boost). Spell like abilities are normally, but not necessarily, best when all the abilities are obviously related to something about the monster. A monster from the elemental plane of fire should have mostly fire type abilities, and (interestingly) it is the non-fire abilities that will tend to make it stand out in the players\' minds. If a fire-genie has several fire abilities but can also use mind-control, that\'s very distinctive. But if it has too many non fire-related abilities, it may fail to be memorable.';
const genSpecAttack90 = 'Spells. The monster uses spells, or can use its special attack to deliver spells from a list identical to a magic-user of some defined level. Different monsters of the same type might have a different “selection” of spells.';
const genSpecAttack91 = 'Strange Chemical (affects items). The special attack releases or creates a chemical that affects non-living substances. The affected substance might be wood, leather, paper, fires, metal, water, air, potions, magical ink, hair - the choices are pretty wideranging. The chemical reaction either destroys the substance, makes it multiply, or changes it into something else - and the interesting part might be the side effect of the reaction, too. Many chemical reactions give off energy, suck energy out of the air, create gases, and do all kinds of strange things. Most likely, the chemical reaction will change the liquid/gas/solid composition of a substance, or change it into another form (iron to rust, leather to powder, wood to stone, etc).';
const genSpecAttack92 = 'Strange Chemical (affects person). The attack creates a chemical reaction of some kind - either the chemical is sprayed onto the victim or the attacker\'s gaze causes chemicals in the victim\'s body to change, or whatever. This is a huge category of possibilities, because a “chemical reaction” can explain any result whatsoever, especially if you throw in words like “enzymes,” and even more especially if the monster is from another plane of existence, another time, or from the “voids between the worlds.” On the other hand, traditionally folkloric monsters like griffons or dragons shouldn\'t have quasi-scientific explanations for what they do - use magic. Quasi-science is best for weirder monsters. Possibilities for strange chemical reactions include: lowering an ability score, acting randomly, suffering combat penalties, following enemy orders, floating up into the air, losing the ability to act, losing the ability to cast spells, functioning as a lower-level character, running away, suffering saving throw penalties, suffering hallucinations, and suffering from a heightened emotion such as rage or sorrow. Another way of looking at it is to think in terms of transformations: these could include skin turning into metal (or getting crusted with metal), gases that might be given off, medical symptoms (hemophilia), and factors such as weight, density, friction, adhesion, or release of energy.';
const genSpecAttack93 = 'Strength Loss. The attack drains one or more points of strength from the victim. The attacker may or may not gain a benefit from the drain (additional hit points, to-hit bonuses, etc) depending upon whether it seems to fit well with the concept. If the victim reaches a strength score of 0 as a result of successive attacks, one of several things might happen: the victim might die and become a creature similar to the attacker, might just die, or might just lose the ability to naturally restore the lost strength points. Note that the drain might be temporary or permanent - this is up to you as a matter of how powerful you want the monster to be.';
const genSpecAttack94 = 'Stun. The attack uses some kind of “special effect” to stun its victims. Possibilities include noise, electric shock, an ugly appearance, mystical rays, visions of the future, hallucinations, powerful emotions, a floating symbol, light, and the old standby … a powerful physical impact.';
const genSpecAttack95 = 'Stupidity. The victim does not actually lose points of intelligence or wisdom, but his thinking is impaired enough to cause penalties on various actions. Spell casting is probably prevented entirely, but a weak version of this sort of attack might only prevent casting “harder” spells - or all spell casting might be subject to a chance of failure. This sort of attack could also lead to combat penalties: inability to use both a weapon and a shield at the same time, perhaps a to-hit penalty, etc. The way in which the attack causes stupidity could include distraction by overloading one of the victim\'s emotions (joy, rage, hate, greed, fear); an alchemical reaction (mysterious chemicals in the creature\'s spittle); the aftereffects of an electrical shock; some sort of mental numbing; sapping away the thoughts themselves; or a very weak poison, curse, or disease. The duration could range from only a couple of combat rounds to days in length.';
const genSpecAttack96 = 'Telekinesis and Teleportation. These special attacks are used to move enemies into bad places and smack them with things. Powerful monsters will be able to use the power more flexibly: for example, a brain-lord might be able to choose how far and when he wants to teleport himself of a target, but a brain-munchkin might teleport a specific distance at random intervals with no ability to teleport an enemy at all.';
const genSpecAttack97 = 'Transformation (basic polymorph). The special attack turns the victim into an animal or some other form (such as an object). Stronger, smarter, or more magical creatures might have the ability to choose what form they will polymorph victims into, while other monsters might only have the ability to turn people specifically into frogs. The duration of the transformation is fairly important - does it end when the attacker is killed, does it end after a set duration, or is it permanent? Another consideration is whether the victim retains his own mind (and the player if left controlling a rabbit) or whether the change is more than just a change in outer form. In some cases, the attack might be part of a one-two punch; if the monster controls all wolves, and can turn people into wolves, the attack can be used to turn enemies into allies - giving the other party members the dilemma of whether to attack their polymorphed-and-controlled ally.';
const genSpecAttack98 = 'Transformation (basic substance). This special attack changes one substance into another or changes the state of matter. (See Table 2-81)';
const genSpecAttack99 = 'Weakness. Victim suffers one or more of the following: a penalty to hit, a penalty to damage, and/or the chance to drop any items he is holding. Actual strength score is not necessarily affected. The way in which the attack causes weakness could include overloading one of the victim\'s emotions (joy, rage, hate, greed, fear); an alchemical reaction (mysterious chemicals in the creature\'s spittle); the aftereffects of an electrical shock; sapping of willpower; or a very weak poison, curse, or disease. The duration could range from only a couple of combat rounds to days in length.';
const genSpecAttack100 = 'Wisdom Loss. The attack drains one or more points of wisdom from the victim. The attacker may or may not gain a benefit from the drain (additional hit points, to-hit bonuses, etc) depending upon whether it seems to fit well with the concept. If the victim reaches a wisdom score of 0 as a result of successive attacks, one of several things might happen: the victim might die and become a creature similar to the attacker, or might remain alive as the attacker\'s mental slave. Another possibility is that the victim just dies, and a third possibility is that restoring the lost points becomes harder - what might have returned naturally is now a permanent condition requiring spells or divine intervention to reverse. Note that the drain might be temporary or permanent - this is up to you as a matter of how powerful you want the monster to be.';

const genSpecAttackArray = [genSpecAttack01, genSpecAttack02, genSpecAttack03, genSpecAttack04, genSpecAttack05, genSpecAttack06, genSpecAttack07, genSpecAttack08, genSpecAttack09, genSpecAttack10, genSpecAttack11, genSpecAttack12, genSpecAttack13, genSpecAttack14, genSpecAttack15, genSpecAttack16, genSpecAttack17, genSpecAttack18, genSpecAttack19, genSpecAttack20, genSpecAttack21, genSpecAttack22, genSpecAttack23, genSpecAttack24, genSpecAttack25, genSpecAttack26, genSpecAttack27, genSpecAttack28, genSpecAttack29, genSpecAttack30, genSpecAttack31, genSpecAttack32, genSpecAttack33, genSpecAttack34, genSpecAttack35, genSpecAttack36, genSpecAttack37, genSpecAttack38, genSpecAttack39, genSpecAttack40, genSpecAttack41, genSpecAttack42, genSpecAttack43, genSpecAttack44, genSpecAttack45, genSpecAttack46, genSpecAttack47, genSpecAttack48, genSpecAttack49, genSpecAttack50, genSpecAttack51, genSpecAttack52, genSpecAttack53, genSpecAttack54, genSpecAttack55, genSpecAttack56, genSpecAttack57, genSpecAttack58, genSpecAttack59, genSpecAttack60, genSpecAttack61, genSpecAttack62, genSpecAttack63, genSpecAttack64, genSpecAttack65, genSpecAttack66, genSpecAttack67, genSpecAttack68, genSpecAttack69, genSpecAttack70, genSpecAttack71, genSpecAttack72, genSpecAttack73, genSpecAttack74, genSpecAttack75, genSpecAttack76, genSpecAttack77, genSpecAttack78, genSpecAttack79, genSpecAttack80, genSpecAttack81, genSpecAttack82, genSpecAttack83, genSpecAttack84, genSpecAttack85, genSpecAttack86, genSpecAttack87, genSpecAttack88, genSpecAttack89, genSpecAttack90, genSpecAttack91, genSpecAttack92, genSpecAttack93, genSpecAttack94, genSpecAttack95, genSpecAttack96, genSpecAttack97, genSpecAttack98, genSpecAttack99, genSpecAttack100];




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



const giantPossession0105 = 'Giant\'s soul is held in an item, and he can\'t be permanently killed without destroying the item';
const giantPossession0610 = 'Guards a prison or incarcerates victims';
const giantPossession1115 = 'Guards a ruin, bridge, road, or temple; not because it is a magical location, but for no particular reason other than territoriality (this is a common theme in Arthurian folklore). Japanese giants often guard isolated temples.';
const giantPossession1620 = 'Guards magical location (unwillingly)';
const giantPossession2125 = 'Guards magical location (willingly)';
const giantPossession2630 = 'Guards magical location that doesn\'t want him to do so';
const giantPossession3135 = 'Has magical beard or hair';
const giantPossession3640 = 'Has magical pet or animal captive';
const giantPossession4145 = 'Keeps heads or trophies from victims';
const giantPossession4650 = 'Keeps one or more maidens. Or, at least, these ladies start as maidens - some of them apparently marry the giants later on, since giants often have kindly human wives with questionable loyalty to their violent husbands. The precise dynamic of these relationships is often left rather unclear in children\'s fairy tales.';
const giantPossession5155 = 'Keeps polymorphed victims in cages';
const giantPossession5660 = 'Keeps souls (trapped in bottles or in animal shape)';
const giantPossession6165 = 'Magic item (sapient) is slave';
const giantPossession6670 = 'Magical item gives the giant some sort of unusual power. Boots are common, but to the point of being clichéd for use in an adventure.';
const giantPossession7175 = 'Maintains a herd or collection of magical, marvelous, or prize-winning animals';
const giantPossession7680 = 'Owns a castle and acts as a feudal lord, with peasants and perhaps even villages slaving to pay him tribute and taxes.';
const giantPossession8185 = 'Owns a very valuable piece of art or jewelry stolen long ago from a kings or noble';
const giantPossession8690 = 'Slaver (raider)';
const giantPossession9195 = 'Slaver (trades life of important victims for slaves)';
const giantPossession96100 = 'Steals and keeps ability to sleep from victims';

const giantPossessionArray = [giantPossession0105, giantPossession0610, giantPossession1115, giantPossession1620, giantPossession2125, giantPossession2630, giantPossession3135, giantPossession3640, giantPossession4145, giantPossession4650, giantPossession5155, giantPossession5660, giantPossession6165, giantPossession6670, giantPossession7175, giantPossession7680, giantPossession8185, giantPossession8690, giantPossession9195, giantPossession96100];



const giantSkinDescription0110 = 'armored hide/plates';
const giantSkinDescription1120 = 'baggy';
const giantSkinDescription2130 = 'fur';
const giantSkinDescription3140 = 'hairy';
const giantSkinDescription4150 = 'lumpy';
const giantSkinDescription5160 = 'pimpled';
const giantSkinDescription6170 = 'scarred (battle)';
const giantSkinDescription7180 = 'scarred (ritual)';
const giantSkinDescription8190 = 'stretched tight';
const giantSkinDescription91100 = 'warty';

const giantSkinDescriptionArray = [giantSkinDescription0110, giantSkinDescription1120, giantSkinDescription2130, giantSkinDescription3140, giantSkinDescription4150, giantSkinDescription5160, giantSkinDescription6170, giantSkinDescription7180, giantSkinDescription8190, giantSkinDescription91100];



const giantOtherFeature0110 = 'bald';
const giantOtherFeature1120 = 'claws';
const giantOtherFeature2130 = 'elephantine feature';
const giantOtherFeature3140 = 'long hair';
const giantOtherFeature4150 = 'misshapen body';
const giantOtherFeature5160 = 'misshapen face';
const giantOtherFeature6170 = 'multiple eyes';
const giantOtherFeature7180 = 'odd skin color';
const giantOtherFeature8190 = 'roll beast-type attribute on Table 2-2';
const giantOtherFeature91100 = 'tusks';

const giantOtherFeatureArray = [giantOtherFeature0110, giantOtherFeature1120, giantOtherFeature2130, giantOtherFeature3140, giantOtherFeature4150, giantOtherFeature5160, giantOtherFeature6170, giantOtherFeature7180, giantOtherFeature8190, giantOtherFeature91100];



const giantSpecialAbility0110 = 'a spell-like delivery of a Special Attack (Table 2-79)';
const giantSpecialAbility1120 = 'affect weather';
const giantSpecialAbility2130 = 'animate objects or plants';
const giantSpecialAbility3140 = 'blacksmith giant, probably with some control over fire or metal';
const giantSpecialAbility4150 = 'hurl rocks';
const giantSpecialAbility5160 = 'imprison souls in a particular form or item or in the body of a particular type of animal';
const giantSpecialAbility6170 = 'prodigious fisherman, possibly by means of charms that can be used against the giant\'s enemies as well';
const giantSpecialAbility7180 = 'shapeshift into some form of animal';
const giantSpecialAbility8190 = 'shrink to human size and form when desired';
const giantSpecialAbility91100 = 'summon animal allies (probably some evil or feral sort of animal';

const giantSpecialAbilityArray = [giantSpecialAbility0110, giantSpecialAbility1120, giantSpecialAbility2130, giantSpecialAbility3140, giantSpecialAbility4150, giantSpecialAbility5160, giantSpecialAbility6170, giantSpecialAbility7180, giantSpecialAbility8190, giantSpecialAbility91100];




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



const reproCycle0110 = 'Egg-laying mating type transforms into warriors or workers in an ongoing, non-seasonal cycle. It happens all the time so that there is a constant supply of eggs, egg-layers, warriors, and workers at all times.';
const reproCycle1120 = 'Eggs are laid on land by predominantly aquatic creature, hatch into a feeding-type that lives on land until it transforms into a predominantly aquatic creature that mates in water but lays the eggs on land.';
const reproCycle2130 = 'First phase is a larval eater, and it cocoons or transforms into a traveler-mating form that lays eggs.';
const reproCycle3140 = 'First phase is a swimmer form, which cocoons or transforms into a land-based hunter or grazer which mates and lays eggs (in water).';
const reproCycle4150 = 'First phase is egg-layer, eggs hatch into food-finder, food-finder transforms into mating form (traveler and possibly fighter for mates), mating form transforms into egg-layer.';
const reproCycle5160 = 'First phase is egg-layer, second phase combines foodfinder, warrior, and mating form, second phase cocoons or otherwise transforms into the egg-layer type.';
const reproCycle6170 = 'First phase is the egg-layer, second phase is made up of three separate morphological forms: food finders, warriors, and mating form of one gender. Warriors transform into egg-layers in the right season, providing the other gender for the mating form to compete over.';
const reproCycle7180 = 'First phase is the egg-layer, second phase is made up of two morphological types; neuter workers and a hermaphrodite warrior-mating form. These warriors probably fight a lot, since otherwise a hermaphrodite form would create lots of population. A failure of this fighting cycle could lead to a horde forming, which could be a nice adventure hook. Perhaps the hordes are periodic, too.';
const reproCycle8190 = 'Hermaphrodite form lays eggs and then dies; half the eggs hatch into a traveler-defender form that goes out to build nests for the other half of the eggs. Second half of the clutch hatches into more hermaphrodite egg-layers.';
const reproCycle91100 = 'Mating form lays eggs and dies; eggs hatch into a traveler-defender form which goes out to build new nests or hives, then cocoons or transforms into the mating form. One gender probably builds nests, and the other gender probably picks nice nests and fights over them in competition (health, fighting ability, plumage, etc). Genders might look utterly different, here.';

const reproCycleArray = [reproCycle0110, reproCycle1120, reproCycle2130, reproCycle3140, reproCycle4150, reproCycle5160, reproCycle6170, reproCycle7180, reproCycle8190, reproCycle91100];

