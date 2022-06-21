const typeOfPlanar0120 = 'dark angel';
const typeOfPlanar2140 = 'demonic creature';
const typeOfPlanar4160 = 'summoned';
const typeOfPlanar6180 = 'traveler';
const typeOfPlanar81100 = 'visitation';

const typeOfPlanarArray = [typeOfPlanar0120, typeOfPlanar2140, typeOfPlanar4160, typeOfPlanar6180, typeOfPlanar81100];
const typeOfPlanarRand = Math.floor(Math.random()*typeOfPlanarArray.length);
const typeOfPlanar = typeOfPlanarArray[typeOfPlanarRand];

/* DARK ANGEL */
function clearAll() {
document.getElementById('displayDiv').innerHTML = '';
}

function createDarkAngelPage() {
    const hintButton = document.createElement('button');
    const attackButton = document.createElement('button');
    const quickGenButton = document.createElement('button');

    const darkDiv = document.createElement('div');
    const darkHintText = document.createElement('p');
    const darkAttackText = document.createElement('p');

    hintButton.setAttribute("onclick", "rollDemonicHint()");
    hintButton.id = 'hintButton';
    hintButton.innerText = 'Demonic Hint';

    attackButton.setAttribute("onclick", "rollAttacks()");
    attackButton.id = 'attackButton';
    attackButton.innerText = 'Special Attacks';

    quickGenButton.setAttribute("onclick", "rollDemonicHint(), rollAttacks()");
    quickGenButton.id = 'quickGenButton';
    quickGenButton.innerText = 'Quick Generate';

    darkDiv.id = 'darkDiv';
    darkHintText.id = 'darkHintText';
    darkAttackText.id = 'darkAttackText';

    
    document.getElementById('displayDiv').appendChild(darkDiv);
    document.getElementById('darkDiv').appendChild(quickGenButton);
    document.getElementById('darkDiv').appendChild(hintButton);
    document.getElementById('darkDiv').appendChild(darkHintText);
    document.getElementById('darkDiv').appendChild(attackButton);
    document.getElementById('darkDiv').appendChild(darkAttackText);
}

function rollDemonicHint() {
    const demonicHintRand = Math.floor(Math.random()*demonicHintArray.length);
    const demonicHint = demonicHintArray[demonicHintRand];

    document.getElementById('darkHintText').innerHTML = '';
    document.getElementById('darkHintText').innerHTML = `${demonicHint}`;
}

function rollAttacks() {
    const demonicSpecialAttackRand = Math.floor(Math.random()*demonicSpecialAttackArray.length);
    const demonicSpecialAttack = demonicSpecialAttackArray[demonicSpecialAttackRand];

    const attackEffectRand = Math.floor(Math.random()*genSpecAttackArray.length);
    const attackEffect = genSpecAttackArray[attackEffectRand];

    document.getElementById('darkAttackText').innerHTML = '';
    document.getElementById('darkAttackText').innerHTML = `${demonicSpecialAttack}: ${attackEffect}`;
}

/* DEMONIC CREATURE */
function createDemonicPage() {
    document.getElementById('displayDiv').innerHTML = '';

    const basicFormButton = document.createElement('button');
    const demonicAttributeButton = document.createElement('button');
    const quickGenButton = document.createElement('button');

    const demonicDiv = document.createElement('div');
    const basicFormText = document.createElement('p');
    const attributeText = document.createElement('p');

    basicFormButton.setAttribute("onclick", "rollBasicForm()");
    basicFormButton.id = 'basicFormButton';
    basicFormButton.innerText = 'Basic Demon Form';

    demonicAttributeButton.setAttribute("onclick", "rollDemonicAttribute()");
    demonicAttributeButton.id = 'demonicAttributeButton';
    demonicAttributeButton.innerText = 'Demonic Attributes';

    quickGenButton.setAttribute("onclick", "rollBasicForm(), rollDemonicAttribute()");
    quickGenButton.id = 'quickGenButton';
    quickGenButton.innerText = 'Quick Generate';

    demonicDiv.id = 'demonicDiv';
    basicFormText.id = 'basicFormText';
    attributeText.id = 'attributeText';

    document.getElementById('displayDiv').appendChild(demonicDiv);
    document.getElementById('demonicDiv').appendChild(quickGenButton);
    document.getElementById('demonicDiv').appendChild(basicFormButton);
    document.getElementById('demonicDiv').appendChild(basicFormText);
    document.getElementById('demonicDiv').appendChild(demonicAttributeButton);
    document.getElementById('demonicDiv').appendChild(attributeText);
}

function rollBasicForm() {
    const basicRand = Math.floor(Math.random()*demonBasicFormArray.length);
    const basicForm = demonBasicFormArray[basicRand];

    if (basicForm === demonBasicForm0112) {
        const beastAttRand0112 = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt0112 = beastAttArray[beastAttRand0112];

        const demonAttributeRand0112 = Math.floor(Math.random()*demonAttributeArray.length);
        const demonAttribute0112 = demonAttributeArray[demonAttributeRand0112];

        document.getElementById('basicFormText').innerHTML = '';
        document.getElementById('basicFormText').innerHTML = `${beastAtt0112} head, a human body, with a tail, wings, and a Demonic Attribute (${demonAttribute0112}). Roll for however many Special Attacks and Special Defenses as are needed - and add any physical features suggested by those results`;

     } else if (basicForm === demonBasicForm1325) {
        const beastAtt1Rand1325 = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt2Rand1325 = Math.floor(Math.random()*beastAttArray.length);

        const firstBeastAtt1325 = beastAttArray[beastAtt1Rand1325];
        const secBeastAtt1325 = beastAttArray[beastAtt2Rand1325];

        const demonAttributeRand1325 = Math.floor(Math.random()*demonAttributeArray.length);
        const demonAttribute1325 = demonAttributeArray[demonAttributeRand1325];

        document.getElementById('basicFormText').innerHTML = '';
        document.getElementById('basicFormText').innerHTML = `Head of a ${firstBeastAtt1325}, body of a ${secBeastAtt1325}, and ${demonAttribute1325}`;

     } else if (basicForm === demonBasicForm2638) {
        const beastAttRand2638 = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt2638 = beastAttArray[beastAttRand2638];

        const demonAttributeRand2638 = Math.floor(Math.random()*demonAttributeArray.length);
        const demonAttribute2638 = demonAttributeArray[demonAttributeRand2638];

        document.getElementById('basicFormText').innerHTML = '';
        document.getElementById('basicFormText').innerHTML = `Human head and torso with tail, ${beastAtt2638} legs, wings, and ${demonAttribute2638}`;

    } else if (basicForm === demonBasicForm3951) {
        const beastAttRand3951 = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt3951 = beastAttArray[beastAttRand3951];

        const demonAttributeRand3951 = Math.floor(Math.random()*demonAttributeArray.length);
        const demonAttribute3951 = demonAttributeArray[demonAttributeRand3951];

        document.getElementById('basicFormText').innerHTML = '';
        document.getElementById('basicFormText').innerHTML = `Human head and torso with tail, ${beastAtt3951} arms and legs, wings, and ${demonAttribute3951}`;

    } else if (basicForm === demonBasicForm5264) {
        const beastAttRand5264 = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt5264 = beastAttArray[beastAttRand5264];

        const demonAttributeRand5264 = Math.floor(Math.random()*demonAttributeArray.length);
        const demonAttribute5264 = demonAttributeArray[demonAttributeRand5264];

        document.getElementById('basicFormText').innerHTML = '';
        document.getElementById('basicFormText').innerHTML = `Human head, ${beastAtt5264} nody, wings, and ${demonAttribute5264}`;

    } else if (basicForm === demonBasicForm6577) {
        const horrorFormRand6577 = Math.floor(Math.random()*horrorBasicFormArray.length);
        const horrorForm6577 = horrorBasicFormArray[horrorFormRand6577];

        document.getElementById('basicFormText').innerHTML = '';
        document.getElementById('basicFormText').innerHTML = `Physical body of a horror (${horrorForm6577}) but with a human face.`;

    } else if (basicForm === demonBasicForm7889) {
        const beastAtt7889Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt7889 = beastAttArray[beastAtt7889Rand];

        const demonAttribute7889Rand = Math.floor(Math.random()*demonAttributeArray.length);
        const demonAttribute7889 = demonAttributeArray[demonAttribute7889Rand];

        document.getElementById('basicFormText').innerHTML = '';
        document.getElementById('basicFormText').innerHTML = `Resembles a large version of a ${beastAtt7889} but with a Demonic Attribute: ${demonAttribute7889}`;

    } else if (basicForm === demonBasicForm90100) {
        const demonAttribute90100Rand = Math.floor(Math.random()*demonAttributeArray.length);
        const demonAttribute90100 = demonAttributeArray[demonAttribute90100Rand];

        document.getElementById('basicFormText').innerHTML = '';
        document.getElementById('basicFormText').innerHTML = `Re-roll on this table and add "${demonAttribute90100}" to the result`;
    }
}

function rollDemonicAttribute() {
    const demonAttributeRand1 = Math.floor(Math.random()*demonAttributeArray.length);
    const demonAttribute = demonAttributeArray[demonAttributeRand1];

    if (demonAttribute === demonAttribute8185) {
        const attributeRand2 = Math.floor(Math.random()*10);

        if (attributeRand2 <= 8) {
            const demonAttributea = 'Two heads';

            document.getElementById('attributeText').innerText = '';
            document.getElementById('attributeText').innerText = `${demonAttributea}`;

        } else if (attributeRand2 === 9) {
            const demonAttributeb = 'Three heads';

            document.getElementById('attributeText').innerText = '';
            document.getElementById('attributeText').innerText = `${demonAttributeb}`;
        }
    } else {
    document.getElementById('attributeText').innerText = '';
    document.getElementById('attributeText').innerText = `${demonAttribute}`;
    }
}

/* SUMMONED CREATURE */

function createSummonPage() {
    document.getElementById('displayDiv').innerHTML = '';

    const quickGenButton = document.createElement('button');
    const purposeButton = document.createElement('button');
    const physicalFormButton = document.createElement('button');
    const summonIssueButton = document.createElement('button');

    const summonDiv = document.createElement('div');
    const purposeText = document.createElement('p');
    const physicalFormText = document.createElement('p');
    const summonIssueText = document.createElement('p');

    quickGenButton.setAttribute("onclick", "rollPurpose(), rollPhysicalForm(), rollSummonIssue()");
    quickGenButton.id = 'quickGenButton';
    quickGenButton.innerText = 'Quick Generate';

    purposeButton.setAttribute("onclick", "rollPurpose()");
    purposeButton.id = 'purposeButton';
    purposeButton.innerText = 'Summon\'s Purpose';

    physicalFormButton.setAttribute("onclick", "rollPhysicalForm()");
    physicalFormButton.id = 'physicalFormButton';
    physicalFormButton.innerText = 'Physical Form';

    summonIssueButton.setAttribute("onclick", "rollSummonIssue()");
    summonIssueButton.id = 'summonIssueButton';
    summonIssueButton.innerText = 'Issue with Summoned Creature';

    summonDiv.id = 'summonDiv';
    purposeText.id = 'purposeText';
    physicalFormText.id = 'physicalFormText';
    summonIssueText.id = 'summonIssueText';

    document.getElementById('displayDiv').appendChild(summonDiv);
    document.getElementById('summonDiv').appendChild(quickGenButton);
    document.getElementById('summonDiv').appendChild(purposeButton);
    document.getElementById('summonDiv').appendChild(purposeText);
    document.getElementById('summonDiv').appendChild(physicalFormButton);
    document.getElementById('summonDiv').appendChild(physicalFormText);
    document.getElementById('summonDiv').appendChild(summonIssueButton);
    document.getElementById('summonDiv').appendChild(summonIssueText);
}

function rollPurpose() {
    const summonPurposeRand = Math.floor(Math.random()*summonPurposeArray.length);
    const summonPurpose = summonPurposeArray[summonPurposeRand];

    document.getElementById('purposeText').innerText = '';
    document.getElementById('purposeText').innerText = `${summonPurpose}`;
}

function rollPhysicalForm() {
    const summonPhysFormRand = Math.floor(Math.random()*summonPhysFormArray.length);
    const summonPhysForm = summonPhysFormArray[summonPhysFormRand];

    if (summonPhysForm === summonPhysForm2125) {
        const summonOozeRand = Math.floor(Math.random()*oozeShapeArray.length);
        const summonOozeShape = oozeShapeArray[summonOozeRand];

        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `Ooze or slime: ${summonOozeShape}`;

    } else if (summonPhysForm === summonPhysForm2630) {
        const summonDemonAttributeRand2630 = Math.floor(Math.random()*demonAttributeArray.length);
        const summonDemonAttribute2630 = demonAttributeArray[summonDemonAttributeRand2630];

        const summonBeastAttributeRand2630 = Math.floor(Math.random()*beastAttArray.length);
        const summonBeastAttribute2630 = beastAttArray[summonBeastAttributeRand2630];


        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `Resembles a normal animal (${summonBeastAttribute2630}) with a Demonic Attribute: ${summonDemonAttribute2630}`;

    } else if (summonPhysForm === summonPhysForm3135) {
        const summonBeastAttributeRand3135 = Math.floor(Math.random()*beastAttArray.length);
        const summonBeastAttribute3135 = beastAttArray[summonBeastAttributeRand3135];

        const compBeastAquatic3135Rand = Math.floor(Math.random()*compBeastAquaticArray.length);
        const compBeastAquatic3135 = compBeastAquaticArray[compBeastAquatic3135Rand];

        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `${summonBeastAttribute3135} with an Unusual Material Composition: ${compBeastAquatic3135}`;

    } else if (summonPhysForm === summonPhysForm3640) {
        const compConePyramidPillar3640Rand = Math.floor(Math.random()*compConePyramidPillarArray.length);
        const compConePyramidPillar3640 = compConePyramidPillarArray[compConePyramidPillar3640Rand];

        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `Cone or pyramid of Unusual Material Composition: ${compConePyramidPillar3640}`;

    } else if (summonPhysForm === summonPhysForm4145) {
        const compBeastAquatic4145Rand = Math.floor(Math.random()*compBeastAquaticArray.length);
        const compBeastAquatic4145 = compBeastAquaticArray[compBeastAquatic4145Rand];

        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `Human with an Unusual Material Composition: ${compBeastAquatic4145}`;

    } else if (summonPhysForm === summonPhysForm4650) {
        const compConePyramidPillar4650Rand = Math.floor(Math.random()*compConePyramidPillarArray.length);
        const compConePyramidPillar4650 = compConePyramidPillarArray[compConePyramidPillar4650Rand];

        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `Pillar of Unusual Material Composition: ${compConePyramidPillar4650}`;

    } else if (summonPhysForm === summonPhysForm5155) {
        const compPlantBody5155Rand = Math.floor(Math.random()*compPlantBodyArray.length);
        const compPlantBody5155 = compPlantBodyArray[compPlantBody5155Rand];

        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `Sentient plant + Unusual Material Composition: ${compPlantBody5155}`;

    } else if (summonPhysForm === summonPhysForm5660) {
        const compBeastAquatic5660Rand = Math.floor(Math.random()*compBeastAquaticArray.length);
        const compBeastAquatic5660 = compBeastAquaticArray[compBeastAquatic5660Rand];

        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `Aquatic creature (browse table 2-2) with an Unusual Material Composition: ${compBeastAquatic5660}`;

    } else if (summonPhysForm === summonPhysForm6165) {
        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `Appearance of a normal aquatic creature (browse table 2-2)`;

    } else if (summonPhysForm === summonPhysForm6670) {
        const beastAtt6670Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt6670 = beastAttArray[beastAtt6670Rand];

        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `${beastAtt6670} with an unusual skin color`;

    } else if (summonPhysForm === summonPhysForm7175) {
        const firstBeastAtt7175Rand = Math.floor(Math.random()*beastAttArray.length);
        const firstBeastAtt7175 = beastAttArray[firstBeastAtt7175Rand];

        const secBeastAtt7175Rand = Math.floor(Math.random()*beastAttArray.length);
        const secBeastAtt7175 = beastAttArray[secBeastAtt7175Rand];

        const demonAttribute7175Rand = Math.floor(Math.random()*demonAttributeArray.length);
        const demonAttribute7175 = demonAttributeArray[demonAttribute7175Rand];

        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `${firstBeastAtt7175} head, body of a ${secBeastAtt7175}, wings, and a Demonic Attribute: ${demonAttribute7175}. Make it bipedal unless it has a sinuous body like a centipede or a snake.`;

    } else if (summonPhysForm === summonPhysForm7680) {
        const beastAtt7680Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt7680 = beastAttArray[beastAtt7680Rand];

        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `${beastAtt7680}, human body, and tail.`;

    } else if (summonPhysForm === summonPhysForm8185) {
        const beastAtt8185Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt8185 = beastAttArray[beastAtt8185Rand];

        const demonAttribute8185Rand = Math.floor(Math.random()*demonAttributeArray.length);
        const demonAttribute8185 = demonAttributeArray[demonAttribute8185Rand];

        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `Human head and torso with tail, beast arms and legs ${beastAtt8185}, wings, and a Demonic Attribute: ${demonAttribute8185}.`;

    } else if (summonPhysForm === summonPhysForm8690) {
        const beastAtt8690Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt8690 = beastAttArray[beastAtt8690Rand];

        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `Human head and torso with a tail and ${beastAtt8690} legs.`;

    } else if (summonPhysForm === summonPhysForm9195) {
        const beastAtt9195Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt9195 = beastAttArray[beastAtt9195Rand];

        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `Human head, ${beastAtt9195} body.`;

    } else if (summonPhysForm === summonPhysForm96100) {
        const firstBeastAtt96100Rand = Math.floor(Math.random()*beastAttArray.length);
        const firstBeastAtt96100 = beastAttArray[firstBeastAtt96100Rand];

        const secBeastAtt96100Rand = Math.floor(Math.random()*beastAttArray.length);
        const secBeastAtt96100 = beastAttArray[secBeastAtt96100Rand];

        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `Combination of ${firstBeastAtt96100} and ${secBeastAtt96100}.`;

    } else {
        document.getElementById('physicalFormText').innerText = '';
        document.getElementById('physicalFormText').innerText = `${summonPhysForm}`;
    }
}

function rollSummonIssue() {
    const summonIssueRand = Math.floor(Math.random()*summonIssueArray.length);
    const summonIssue = summonIssueArray[summonIssueRand];

    document.getElementById('summonIssueText').innerText = '';
    document.getElementById('summonIssueText').innerText = `${summonIssue}`;
}
/* TRAVELER */

function createTravelerPage() {
    document.getElementById('displayDiv').innerHTML = '';



    const quickGenButton = document.createElement('button');
    quickGenButton.setAttribute("onclick", "rollTravForm(), rollAddFeature(), rollTravMethod(), rollTrade()");
    quickGenButton.id = 'quickGenButton';
    quickGenButton.innerText = 'Quick Generate';



    const travFormButton = document.createElement('button');
    travFormButton.setAttribute("onclick", "rollTravForm()");
    travFormButton.id = 'travFormButton';
    travFormButton.innerText = 'Physical Form';

    const travFormText = document.createElement('p');
    travFormText.id = 'travFormText';



    const addFeatureButton = document.createElement('button');
    addFeatureButton.setAttribute("onclick", "rollAddFeature()");
    addFeatureButton.id = 'addFeatureButton';
    addFeatureButton.innerText = 'Visitor Additional Feature';
    
    const addFeatureText = document.createElement('p');
    addFeatureText.id = 'addFeatureText';
    


    const travMethodButton = document.createElement('button');
    travMethodButton.setAttribute("onclick", "rollTravMethod()");
    travMethodButton.id = 'travMethodButton';
    travMethodButton.innerText = 'Method of Traveling the Planes';

    const travMethodText = document.createElement('p');
    travMethodText.id = 'travMethodText';



    const tradeButton = document.createElement('button');
    tradeButton.setAttribute("onclick", "rollTrade()");
    tradeButton.id = 'tradeButton';
    tradeButton.innerText = 'Trade Goods (if it\'s a trader, your call)';

    const tradeText = document.createElement('p');
    tradeText.id = 'tradeText';



    const travelerDiv = document.createElement('div');
    travelerDiv.id = 'travelerDiv';
    


    document.getElementById('displayDiv').appendChild(travelerDiv);
    document.getElementById('travelerDiv').appendChild(quickGenButton);

    document.getElementById('travelerDiv').appendChild(travFormButton);
    document.getElementById('travelerDiv').appendChild(travFormText);

    document.getElementById('travelerDiv').appendChild(addFeatureButton);
    document.getElementById('travelerDiv').appendChild(addFeatureText);

    document.getElementById('travelerDiv').appendChild(travMethodButton);
    document.getElementById('travelerDiv').appendChild(travMethodText);

    document.getElementById('travelerDiv').appendChild(tradeButton);
    document.getElementById('travelerDiv').appendChild(tradeText);
}

function rollTravForm() {
    const travPhysFormRand = Math.floor(Math.random()*travPhysFormArray.length);
    const travPhysForm = travPhysFormArray[travPhysFormRand];

    if (travPhysForm === travPhysForm0610) {
        const plantForm0610Rand = Math.floor(Math.random()*plantFormArray.length);
        const plantFormType0610 = plantFormArray[plantForm0610Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `Plant appearance: ${plantFormType0610}`;

    } else if (travPhysForm === travPhysForm2125) {
        const travOozeRand = Math.floor(Math.random()*oozeShapeArray.length);
        const travOozeShape = oozeShapeArray[travOozeRand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `${travPhysForm}: ${travOozeShape}`;

    } else if (travPhysForm === travPhysForm2630) {
        const beastAtt2630Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt2630 = beastAttArray[beastAtt2630Rand];

        const demonAttribute2630Rand = Math.floor(Math.random()*demonAttributeArray.length);
        const demonAttribute2630 = demonAttributeArray[demonAttribute2630Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `Resembles a normal animal (${beastAtt2630}) with a Demonic Attribute: ${demonAttribute2630}`;

    } else if (travPhysForm === travPhysForm3135) {
        const beastAtt3135Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt3135 = beastAttArray[beastAtt3135Rand];

        const compBeastAquatic3135Rand = Math.floor(Math.random()*compBeastAquaticArray.length);
        const compBeastAquatic3135 = compBeastAquaticArray[compBeastAquatic3135Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `Beast (${beastAtt3135}) with an Unusual Material Composition: ${compBeastAquatic3135}`;

    } else if (travPhysForm === travPhysForm3640) {
        const compConePyramidPillar3640Rand = Math.floor(Math.random()*compConePyramidPillarArray.length);
        const compConePyramidPillar3640 = compConePyramidPillarArray[compConePyramidPillar3640Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `Cone or pyramid of Unusual Material Composition: ${compConePyramidPillar3640}`;

    } else if (travPhysForm === travPhysForm4145) {
        const compBeastAquatic4145Rand = Math.floor(Math.random()*compBeastAquaticArray.length);
        const compBeastAquatic4145 = compBeastAquaticArray[compBeastAquatic4145Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `Human with Unusual Material Composition: ${compBeastAquatic4145}`;

    } else if (travPhysForm === travPhysForm4650) {
        const compConePyramidPillar4650Rand = Math.floor(Math.random()*compConePyramidPillarArray.length);
        const compConePyramidPillar4650 = compConePyramidPillarArray[compConePyramidPillar4650Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `Pillar of Unusual Material Composition: ${compConePyramidPillar4650}`;

    } else if (travPhysForm === travPhysForm5155) {
        const demonicHint5155Rand = Math.floor(Math.random()*demonicHintArray.length);
        const demonicHint5155 = demonicHintArray[demonicHint5155Rand];

        const beastAtt5155Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt5155 = beastAttArray[beastAtt5155Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `Resembles a human but with a Demonic Hint (${demonicHint5155}) and also with an attribute of a normal animal (${beastAtt5155})`;

    } else if (travPhysForm === travPhysForm5660) {
        const compBeastAquatic5660Rand = Math.floor(Math.random()*compBeastAquaticArray.length);
        const compBeastAquatic5660 = compBeastAquaticArray[compBeastAquatic5660Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `Aquatic creature (browse Table 2-2) with an Unusual Material Composition: ${compBeastAquatic5660}`;

    } else if (travPhysForm === travPhysForm6165) {
        const beastAtt6165Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt6165 = beastAttArray[beastAtt6165Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `Appearance of a normal aquatic creature (browse Table 2-2) (${beastAtt6165})`;

    } else if (travPhysForm === travPhysForm6670) {
        const beastAtt6670Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt6670 = beastAttArray[beastAtt6670Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `Beast (${beastAtt6670} with an unusual skin color)`;

    } else if (travPhysForm === travPhysForm7175) {
        const firstBeast7175AttRand = Math.floor(Math.random()*beastAttArray.length);
        const firstBeastAtt7175 = beastAttArray[firstBeast7175AttRand];

        const secBeastAttRand7175 = Math.floor(Math.random()*beastAttArray.length);
        const secBeastAtt7175 = beastAttArray[secBeastAttRand7175];

        const demonAttribute7175Rand = Math.floor(Math.random()*demonAttributeArray.length);
        const demonAttribute7175 = demonAttributeArray[demonAttribute7175Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `${firstBeastAtt7175} head, body of a ${secBeastAtt7175}, wings, and a Demonic Attribute (${demonAttribute7175}). Make it bipedal unless it has a sinuous body like a centipede or snake.`;

    } else if (travPhysForm === travPhysForm7680) {
        const beastAtt7680Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt7680 = beastAttArray[beastAtt7680Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `${beastAtt7680} head, human body, and tail.`;

    } else if (travPhysForm === travPhysForm8185) {
        const beastAtt8185Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt8185 = beastAttArray[beastAtt8185Rand];

        const demonAttribute8185Rand = Math.floor(Math.random()*demonAttributeArray.length);
        const demonAttribute8185 = demonAttributeArray[demonAttribute8185Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `Human head and torso with tail, ${beastAtt8185} arms and legs, wings, and a Demonic Attribute: ${demonAttribute8185}`;

    } else if (travPhysForm === travPhysForm8690) {
        const beastAtt8690Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt8690 = beastAttArray[beastAtt8690Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `Human head and torso with tail, ${beastAtt8690} legs.`;

    } else if (travPhysForm === travPhysForm9195) {
        const beastAtt9195Rand = Math.floor(Math.random()*beastAttArray.length);
        const beastAtt9195 = beastAttArray[beastAtt9195Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `Human head, ${beastAtt9195} body`;

    } else if (travPhysForm === travPhysForm96100) {
        const firstBeastAtt96100Rand = Math.floor(Math.random()*beastAttArray.length);
        const firstBeastAtt96100 = beastAttArray[firstBeastAtt96100Rand];

        const secBeastAtt96100Rand = Math.floor(Math.random()*beastAttArray.length);
        const secBeastAtt96100 = beastAttArray[secBeastAtt96100Rand];

        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `Combination of ${firstBeastAtt96100} and ${secBeastAtt96100}`;

    } else {
        document.getElementById('travFormText').innerText = '';
        document.getElementById('travFormText').innerText = `${travPhysForm}`;
    }
}

function rollAddFeature() {
    const travAddFeatureRand = Math.floor(Math.random()*travAddFeatureArray.length);
    const travAddFeature = travAddFeatureArray[travAddFeatureRand];

    document.getElementById('addFeatureText').innerText = '';
    document.getElementById('addFeatureText').innerText = `${travAddFeature}`;
}

function rollTravMethod() {
    const travMethodRand = Math.floor(Math.random()*modeTravelArray.length);
    const travMethod = modeTravelArray[travMethodRand];

    if (travMethod === modeTravel2638) {
        const travelNameWordOne2638Rand = Math.floor(Math.random()*travelNameWordOneArray.length);
        const travelNameWordOne2638 = travelNameWordOneArray[travelNameWordOne2638Rand];

        const travelNameWordTwo2638Rand = Math.floor(Math.random()*travelNameWordTwoArray.length);
        const travelNameWordTwo2638 = travelNameWordTwoArray[travelNameWordTwo2638Rand];

        const travelNameWordThree2638Rand = Math.floor(Math.random()*travelNameWordThreeArray.length);
        const travelNameWordThree2638 = travelNameWordThreeArray[travelNameWordThree2638Rand];


        document.getElementById('travMethodText').innerText = '';
        document.getElementById('travMethodText').innerText = `Travels by use of ${travMethod}: ${travelNameWordOne2638} ${travelNameWordTwo2638} ${travelNameWordThree2638}`;

    } else if (travMethod === modeTravel3951) {
        const travCycleRand = Math.floor(Math.random()*timeCycleArray.length);
        const travCycle = timeCycleArray[travCycleRand];

        document.getElementById('travMethodText').innerText = '';
        document.getElementById('travMethodText').innerText = `${travMethod}: ${travCycle}`;

    } else if (travMethod === modeTravel6577) {
        const travelNameWordOne6577Rand = Math.floor(Math.random()*travelNameWordOneArray.length);
        const travelNameWordOne6577 = travelNameWordOneArray[travelNameWordOne6577Rand];

        const travelNameWordTwo6577Rand = Math.floor(Math.random()*travelNameWordTwoArray.length);
        const travelNameWordTwo6577 = travelNameWordTwoArray[travelNameWordTwo6577Rand];

        const travelNameWordThree6577Rand = Math.floor(Math.random()*travelNameWordThreeArray.length);
        const travelNameWordThree6577 = travelNameWordThreeArray[travelNameWordThree6577Rand];



        document.getElementById('travMethodText').innerText = '';
        document.getElementById('travMethodText').innerText = `${travMethod}: ${travelNameWordOne6577} ${travelNameWordTwo6577} ${travelNameWordThree6577}`;
    } else {
        document.getElementById('travMethodText').innerText = '';
        document.getElementById('travMethodText').innerText = `${travMethod}`;
    }
}

function rollTrade() {
    const travTradeThisRand = Math.floor(Math.random()*travTradeThisArray.length);
    const travTradeThis = travTradeThisArray[travTradeThisRand];

    const travTradeForThisRand = Math.floor(Math.random()*travTradeForThisArray.length);
    const travTradeForThis = travTradeForThisArray[travTradeForThisRand];

    document.getElementById('tradeText').innerText = '';
    document.getElementById('tradeText').innerText = `The being may be willing to give ${travTradeThis} in return for ${travTradeForThis}`;
}

/* VISITATION */
function createVisitationPage() {
    document.getElementById('displayDiv').innerHTML = '';

    const quickGenButton = document.createElement('button');
    const formButton = document.createElement('button');
    const causationButton = document.createElement('button');

    const visitationDiv = document.createElement('div');
    const formText = document.createElement('p');
    const causationText = document.createElement('p');

    quickGenButton.setAttribute("onclick", "rollForm(), rollCausation()");
    quickGenButton.id = 'quickGenButton';
    quickGenButton.innerText = 'Quick Generate';

    formButton.setAttribute("onclick", "rollForm()");
    formButton.id = 'formButton';
    formButton.innerText = 'Form/Type of Visitation';

    causationButton.setAttribute("onclick", "rollCausation()");
    causationButton.id = 'causationButton';
    causationButton.innerText = 'Cause of Visitation';

    visitationDiv.id = 'visitationDiv';
    formText.id = 'formText';
    causationText.id = 'causationText';

    document.getElementById('displayDiv').appendChild(visitationDiv);
    document.getElementById('visitationDiv').appendChild(quickGenButton);
    document.getElementById('visitationDiv').appendChild(formButton);
    document.getElementById('visitationDiv').appendChild(formText);
    document.getElementById('visitationDiv').appendChild(causationButton);
    document.getElementById('visitationDiv').appendChild(causationText);
}

function rollForm() {
    const visitationFormRand = Math.floor(Math.random()*visitationFormArray.length);
    const visitationForm = visitationFormArray[visitationFormRand];

    document.getElementById('formText').innerText = '';
    document.getElementById('formText').innerText = `${visitationForm}`;
}

function rollCausation() {
    const visitationCauseRand = Math.floor(Math.random()*visitationCauseArray.length);
    const visitationCause = visitationCauseArray[visitationCauseRand];

    document.getElementById('causationText').innerText = '';
    document.getElementById('causationText').innerText = `${visitationCause}`;
}


/* dark angel */
const demonicHint0104 = 'Backward leg joints, like rabbit or deer';
const demonicHint0508 = 'Birthmark or marks on skin';
const demonicHint0912 = 'Cat/serpent eyes, eyes without pupils, eyes without iris, or strangely colored eyes';
const demonicHint1316 = 'Elongated facial features or strange facial bone structure';
const demonicHint1720 = 'Extraordinarily long fingernails or fingers';
const demonicHint2124 = 'Extreme sensitivity to light other than firelight';
const demonicHint2528 = 'Fangs or sharp teeth';
const demonicHint2932 = 'Forked tongue';
const demonicHint3336 = 'Frightens animals, or a particular type of animal such as dogs or cats';
const demonicHint3740 = 'Glass, metal, or other type of matter resonates, vibrates, or hums slightly in the close vicinity of the creature';
const demonicHint4144 = 'Hunched, predatory posture';
const demonicHint4548 = 'Makes people feel uncomfortable for no identifiable reason';
const demonicHint4952 = 'Radiates slight cold';
const demonicHint5356 = 'Radiates slight heat';
const demonicHint5760 = 'Small horns';
const demonicHint6164 = 'Smells of brimstone, or iron, etc.';
const demonicHint6568 = 'Speaks with hiss, speech echoes almost imperceptibly, or other strange form of speech';
const demonicHint6972 = 'Strange hands or feet: claws instead of fingernails, hoofs instead of feet, etc.';
const demonicHint7376 = 'Strange skin color (jet black, red, etc.). This might just be a tinge of color; or it might be quite noticeable.';
const demonicHint7780 = 'Strange skin texture (rough or smooth)';
const demonicHint8184 = 'Tail (small and discrete for concealment)';
const demonicHint8588 = 'Unnatural beauty';
const demonicHint8992 = 'Unnaturally fat';
const demonicHint9396 = 'Unnaturally tall';
const demonicHint97100 = 'Small wings lie closely against back - might be capable of growing into functional wings at will';

const demonicHintArray = [demonicHint0104, demonicHint0508, demonicHint0912, demonicHint1316, demonicHint1720, demonicHint2124, demonicHint2528, demonicHint2932, demonicHint3336, demonicHint3740, demonicHint4144, demonicHint4548, demonicHint4952, demonicHint5356, demonicHint5760, demonicHint6164, demonicHint6568, demonicHint6972, demonicHint7376, demonicHint7780, demonicHint8184, demonicHint8588, demonicHint8992, demonicHint9396, demonicHint97100];
const demonicHintRand = Math.floor(Math.random()*demonicHintArray.length);
const demonicHint = demonicHintArray[demonicHintRand];


const demonicSpecialAttack0104 = 'Appearance (changes to dangerous appearance) - roll for effect on Special Attacks Table 2-79.';
const demonicSpecialAttack0508 = 'Appearance (normal appearance is dangerous) - roll for effect on Special Attacks Table 2-79.';
const demonicSpecialAttack0912 = 'Cast like a spell (affects number of hit dice) - roll for effect on Special Attacks Table 2-79.';
const demonicSpecialAttack1316 = 'Cast like a spell (area effect) - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack1720 = 'Cast like a spell (one target) - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack2124 = 'Cast like a spell (radius around monster) - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack2528 = 'Constant effect (radius) - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack2932 = 'Exhaled cloud - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack3336 = 'Exhaled cone - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack3740 = 'Exhaled line - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack4144 = 'Gaze - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack4548 = 'Mental power (affects number of hit dice) - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack4952 = 'Mental power (area effect) - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack5356 = 'Mental power (burst in radius around monster) - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack5760 = 'Mental power (one target) - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack6164 = 'Smell (radius) - roll for effect on Table 2-79 Special Attack Type'
const demonicSpecialAttack6568 = 'Smell (squirted, cone) - roll for effect on Table 2-79 Special Attack Type'; 
const demonicSpecialAttack6972 = 'Smell (squirted, single target) - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack7376 = 'Sound (clicks, etc) (radius around monster) - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack7780 = 'Speech (in radius from monster) - roll for effect on Table 2-79 Special Attacks';
const demonicSpecialAttack8184 = 'Spit (glob, single target) - roll for effect on Table 2-79 Special Attack Type';
const demonicSpecialAttack8588 = 'Spit (line) - roll for effect on Table 2-79 Special Attacks';
const demonicSpecialAttack8992 = 'Spray (cone) - roll for effect on Table 2-79 Special Attacks';
const demonicSpecialAttack9396 = 'Spray (line) - roll for effect on Table 2-79 Special Attacks';
const demonicSpecialAttack97100 = 'Touch - roll for effect on Table 2-79 Special Attack Type';

const demonicSpecialAttackArray = [demonicSpecialAttack0104, demonicSpecialAttack0508, demonicSpecialAttack0912, demonicSpecialAttack1316, demonicSpecialAttack1720, demonicSpecialAttack2124, demonicSpecialAttack2528, demonicSpecialAttack2932, demonicSpecialAttack3336, demonicSpecialAttack3740, demonicSpecialAttack4144, demonicSpecialAttack4548, demonicSpecialAttack4952, demonicSpecialAttack5356, demonicSpecialAttack5760, demonicSpecialAttack6164, demonicSpecialAttack6568, demonicSpecialAttack6972, demonicSpecialAttack7376, demonicSpecialAttack7780, demonicSpecialAttack8184, demonicSpecialAttack8588, demonicSpecialAttack8992, demonicSpecialAttack9396, demonicSpecialAttack97100];



/* demonic creatures */
const demonBasicForm0112 = 'Animal head (Table 2-2), a human body with a tail, wings, and a Demonic Attribute (Table 2-49 below). Roll for however many Special Attacks (Tables 2-78 and 2-79) and Special Defenses (Table 2-82) as are needed - and add any physical features suggested by those results.';
const demonBasicForm1325 = 'Beast head, body of a different kind of beast, wings, and Demonic Attribute (make it bipedal unless it has a sinuous body like a centipede or snake)';
const demonBasicForm2638 = 'Human head and torso with tail, animal legs (Table 2-2), wings, and Demonic Attribute (Table 2-49)';
const demonBasicForm3951 = 'Human head and torso with tail, beast arms and legs, wings, and Demonic Attribute (Table 2-49)';
const demonBasicForm5264 = 'Human head, animal body (roll on Table 2-2), wings, and Demonic Attribute (Table 2-49 below)';
const demonBasicForm6577 = 'Physical body of a Horror (see Table 2-33) but with a human face (don\'t roll for a Demonic Attribute)';
const demonBasicForm7889 = 'Resembles a large version of a normal animal (Table 2-2), but with a Demonic Attribute (Table 2-49)';
const demonBasicForm90100 = 'Re-roll on this table for the basic body form, adding one additional Demonic Attribute to the resulting form (Table 2-49) Table 2-49: Demonic Attributes Die Roll';

const demonBasicFormArray = [demonBasicForm0112, demonBasicForm1325, demonBasicForm2638, demonBasicForm3951, demonBasicForm5264, demonBasicForm6577, demonBasicForm7889, demonBasicForm90100];




const demonAttribute0105 = 'Additional arms (probably human) or legs (probably beast-type)';
const demonAttribute0610 = 'Body appears scorched or damaged';
const demonAttribute1115 = 'Body is deformed in some way (hunchback, one arm larger than the other, etc)';
const demonAttribute1620 = 'Chitin, armored, scaly, or thick hide skin';
const demonAttribute2125 = 'Covered in sores or boils';
const demonAttribute2630 = 'Crawling with insects, snakes, snails, leeches, or worms';
const demonAttribute3135 = 'Dripping with poison, or slime with strange effect';
const demonAttribute3640 = 'Eyes of flame';
const demonAttribute4145 = 'Grossly fat';
const demonAttribute4650 = 'Incorporeal or mist-like form';
const demonAttribute5155 = 'Long tail with stinger';
const demonAttribute5660 = 'Parts of it mutate from one form to another (at will, in cycles, when hit, every few rounds or minutes, etc).';
const demonAttribute6165 = 'Stands taller than 10ft at the head';
const demonAttribute6670 = 'Surrounded by dangerous gases';
const demonAttribute7175 = 'Surrounded by flame or heat';
const demonAttribute7680 = 'Tremendously long tongue';
const demonAttribute8185 = 'Two heads (01-90) or three heads (91-00)';
const demonAttribute8690 = 'Unnaturally long arms (if any; roll again if not)';
const demonAttribute9195 = 'Unnaturally skinny or emaciated';
const demonAttribute96100 = 'Unusual armor or weapon (made of bone or flame, a whip or hook of some kind, etc).';

const demonAttributeArray = [demonAttribute0105, demonAttribute0610, demonAttribute1115, demonAttribute1620, demonAttribute2125, demonAttribute2630, demonAttribute3135, demonAttribute3640, demonAttribute4145, demonAttribute4650, demonAttribute5155, demonAttribute5660, demonAttribute6165, demonAttribute6670, demonAttribute7175, demonAttribute7680, demonAttribute8185, demonAttribute8690, demonAttribute9195, demonAttribute96100];
const demonAttributeRand = Math.floor(Math.random()*demonAttributeArray.length);
const demonAttribute = demonAttributeArray[demonAttributeRand];


/* summoned creatures */
const summonPurpose0108 = 'Boosts summoner\'s magical power (usually for a specific task)';
const summonPurpose0916 = 'Build structures (usually strongholds)';
const summonPurpose1724 = 'Dig for some prodigious task (often dungeons)';
const summonPurpose2532 = 'Finder, hunter, or assassin';
const summonPurpose3340 = 'Guardian';
const summonPurpose4148 = 'Harvest or plant food';
const summonPurpose4956 = 'Instrument of revenge';
const summonPurpose5765 = 'Manufacture items';
const summonPurpose6674 = 'Navigate';
const summonPurpose7583 = 'Produce food';
const summonPurpose8492 = 'Servant (domestic servant, alchemical assistant, etc)';
const summonPurpose93100 = 'Warrior';

const summonPurposeArray = [summonPurpose0108, summonPurpose0916, summonPurpose1724, summonPurpose2532, summonPurpose3340, summonPurpose4148, summonPurpose4956, summonPurpose5765, summonPurpose6674, summonPurpose7583, summonPurpose8492, summonPurpose93100];



const summonPhysForm0105 = 'Human + unusual skin color';
const summonPhysForm0610 = 'Plant appearance';
const summonPhysForm1115 = 'Roll again for a result on this table, but add wings';
const summonPhysForm1620 = 'Serpentine or spiral-shape of mist-like, other-planar substance';
const summonPhysForm2125 = 'Ooze or slime (see Table 2-41 for ideas)';
const summonPhysForm2630 = 'Resembles a normal animal with a Demonic Attribute (Table 2-49)';
const summonPhysForm3135 = 'Beast (Table 2-2) + Unusual Material Composition (Table 2-52)';
const summonPhysForm3640 = 'Cone or pyramid of Unusual Material Composition (Table 2-52 below)';
const summonPhysForm4145 = 'Human + Unusual Material Composition (Table 2-52 below)';
const summonPhysForm4650 = 'Pillar of Unusual Material Composition (Table 2-52 below)';
const summonPhysForm5155 = 'Sentient plant + Unusual Material Composition (Table 2-52 below)';
const summonPhysForm5660 = 'Aquatic creature (browse through Table 2-2) + Unusual Material Composition (Table 2-52 below)';
const summonPhysForm6165 = 'Appearance of a normal aquatic creature (browse Table 2-2)';
const summonPhysForm6670 = 'Beast (Table 2-2) + unusual skin color';
const summonPhysForm7175 = 'Beast head (Table 2-2), body of a different kind of beast (Table 2-2), wings, and a Demonic Attribute (Table 2-49). Make it bipedal unless it has a sinuous body like a centipede or snake.';
const summonPhysForm7680 = 'Beast head (Table 2-2), human body, and tail';
const summonPhysForm8185 = 'Human head and torso with tail, beast arms and legs (Table 2-2), wings, and a Demonic Attribute (Table 2-49)';
const summonPhysForm8690 = 'Human head and torso with tail, beast legs (Table 2-2)';
const summonPhysForm9195 = 'Human head, beast body (Table 2-2)';
const summonPhysForm96100 = 'Combination of two animals (Table 2-2)';

const summonPhysFormArray = [summonPhysForm0105, summonPhysForm0610, summonPhysForm1115, summonPhysForm1620, summonPhysForm2125, summonPhysForm2630, summonPhysForm3135, summonPhysForm3640, summonPhysForm4145, summonPhysForm4650, summonPhysForm5155, summonPhysForm5660, summonPhysForm6165, summonPhysForm6670, summonPhysForm7175, summonPhysForm7680, summonPhysForm8185, summonPhysForm8690, summonPhysForm9195, summonPhysForm96100];




const compBeastAquatic0103 = 'bone';
const compBeastAquatic0406 = 'brass sphere';
const compBeastAquatic0709 = 'bronze';
const compBeastAquatic1012 = 'bronze, jointed';
const compBeastAquatic1315 = 'bubbles or foam (durable or fragile)';
const compBeastAquatic1618 = 'clay';
const compBeastAquatic1921 = 'congealed mist or smoke';
const compBeastAquatic2224 = 'coral';
const compBeastAquatic2527 = 'dust';
const compBeastAquatic2830 = 'earth or air';
const compBeastAquatic3133 = 'fibers';
const compBeastAquatic3436 = 'filaments';
const compBeastAquatic3739 = 'fire or water';
const compBeastAquatic4042 = 'gel globules';
const compBeastAquatic4345 = 'hair';
const compBeastAquatic4648 = 'ice';
const compBeastAquatic4951 = 'iron';
const compBeastAquatic5254 = 'iron links or rings';
const compBeastAquatic5557 = 'ivory, carved';
const compBeastAquatic5860 = 'jade';
const compBeastAquatic6163 = 'light or darkness';
const compBeastAquatic6466 = 'malachite';
const compBeastAquatic6769 = 'multiple insects';
const compBeastAquatic7072 = 'pearl or mother-of-pearl';
const compBeastAquatic7375 = 'plant matter, fungus';
const compBeastAquatic7678 = 'plant matter, wood-like';
const compBeastAquatic7982 = 'seething liquid';
const compBeastAquatic8385 = 'spongy with or without holes';
const compBeastAquatic8688 = 'squishy organs';
const compBeastAquatic8991 = 'stone, chalk';
const compBeastAquatic9294 = 'stone, obsidian';
const compBeastAquatic9597 = 'stone, very hot or very cold';
const compBeastAquatic98100 = 'stone, with green flecks';

const compBeastAquaticArray = [compBeastAquatic0103, compBeastAquatic0406, compBeastAquatic0709, compBeastAquatic1012, compBeastAquatic1315, compBeastAquatic1618, compBeastAquatic1921, compBeastAquatic2224, compBeastAquatic2527, compBeastAquatic2830, compBeastAquatic3133, compBeastAquatic3436, compBeastAquatic3739, compBeastAquatic4042, compBeastAquatic4345, compBeastAquatic4648, compBeastAquatic4951, compBeastAquatic5254, compBeastAquatic5557, compBeastAquatic5860, compBeastAquatic6163, compBeastAquatic6466, compBeastAquatic6769, compBeastAquatic7072, compBeastAquatic7375, compBeastAquatic7678, compBeastAquatic7982, compBeastAquatic8385, compBeastAquatic8688, compBeastAquatic8991, compBeastAquatic9294, compBeastAquatic9597, compBeastAquatic98100];
const compBeastAquaticRand = Math.floor(Math.random()*compBeastAquaticArray.length);
const compBeastAquatic = compBeastAquaticArray[compBeastAquaticRand];


const compConePyramidPillar0103 = 'bone';
const compConePyramidPillar0406 = 'bronze';
const compConePyramidPillar0709 = 'bubbles or foam (durable or fragile)';
const compConePyramidPillar1012 = 'clay';
const compConePyramidPillar1315 = 'congealed mist or smoke';
const compConePyramidPillar1618 = 'coral';
const compConePyramidPillar1921 = 'dust';
const compConePyramidPillar2224 = 'earth or air';
const compConePyramidPillar2527 = 'fibers';
const compConePyramidPillar2830 = 'filaments';
const compConePyramidPillar3133 = 'fire or water';
const compConePyramidPillar3436 = 'gel globules';
const compConePyramidPillar3739 = 'hair';
const compConePyramidPillar4042 = 'human-like flesh';
const compConePyramidPillar4345 = 'ice';
const compConePyramidPillar4648 = 'iron';
const compConePyramidPillar4951 = 'ivory, carved';
const compConePyramidPillar5254 = 'jade';
const compConePyramidPillar5557 = 'light or darkness';
const compConePyramidPillar5860 = 'malachite';
const compConePyramidPillar6163 = 'multiple insects';
const compConePyramidPillar6466 = 'pearl or mother-of-pearl';
const compConePyramidPillar6769 = 'plant matter, funcus';
const compConePyramidPillar7072 = 'plant matter, mold';
const compConePyramidPillar7375 = 'plant matter, stem-like';
const compConePyramidPillar7678 = 'plant matter, wood-like';
const compConePyramidPillar7982 = 'seething liquid';
const compConePyramidPillar8385 = 'spongy with or without holes';
const compConePyramidPillar8688 = 'squishy organs';
const compConePyramidPillar8991 = 'stone, chalk';
const compConePyramidPillar9294 = 'stone, obsidian';
const compConePyramidPillar9597 = 'stone, very hot or very cold';
const compConePyramidPillar98100 = 'stone, with green flecks';

const compConePyramidPillarArray = [compConePyramidPillar0103, compConePyramidPillar0406, compConePyramidPillar0709, compConePyramidPillar1012, compConePyramidPillar1315, compConePyramidPillar1618, compConePyramidPillar1921, compConePyramidPillar2224, compConePyramidPillar2527, compConePyramidPillar2830, compConePyramidPillar3133, compConePyramidPillar3436, compConePyramidPillar3739, compConePyramidPillar4042, compConePyramidPillar4345, compConePyramidPillar4648, compConePyramidPillar4951, compConePyramidPillar5254, compConePyramidPillar5557, compConePyramidPillar5860, compConePyramidPillar6163, compConePyramidPillar6466, compConePyramidPillar6769, compConePyramidPillar7072, compConePyramidPillar7375, compConePyramidPillar7678, compConePyramidPillar7982, compConePyramidPillar8385, compConePyramidPillar8688, compConePyramidPillar8991, compConePyramidPillar9294, compConePyramidPillar9597, compConePyramidPillar98100];
const compConePyramidPillarRand = Math.floor(Math.random()*compConePyramidPillarArray.length);
const compConePyramidPillar = compConePyramidPillarArray[compConePyramidPillarRand];


const compPlantBody0103 = 'bone';
const compPlantBody0406 = 'bronze';
const compPlantBody0709 = 'bubbles or foam (durable or fragile)';
const compPlantBody1012 = 'clay';
const compPlantBody1315 = 'congealed mist or smoke';
const compPlantBody1618 = 'coral';
const compPlantBody1921 = 'covered with skin';
const compPlantBody2224 = 'dust';
const compPlantBody2527 = 'earth or air';
const compPlantBody2830 = 'fibers';
const compPlantBody3133 = 'filaments';
const compPlantBody3436 = 'fire or water';
const compPlantBody3739 = 'gel globules';
const compPlantBody4042 = 'gold, silver, or copper';
const compPlantBody4345 = 'hair';
const compPlantBody4648 = 'human-like flesh';
const compPlantBody4951 = 'ice';
const compPlantBody5254 = 'iron';
const compPlantBody5557 = 'ivory, carved';
const compPlantBody5860 = 'jade';
const compPlantBody6163 = 'light or darkness';
const compPlantBody6466 = 'malachite';
const compPlantBody6769 = 'multiple insects';
const compPlantBody7072 = 'ooze, translucent or colored';
const compPlantBody7375 = 'pearl or mother-of-pearl';
const compPlantBody7678 = 'plant matter wrong for shape (e.g., tree made of fungus or mold)';
const compPlantBody7982 = 'seething liquid';
const compPlantBody8385 = 'spongy with or without holes';
const compPlantBody8688 = 'squishy organs';
const compPlantBody8991 = 'stone, chalk';
const compPlantBody9294 = 'stone, obsidian';
const compPlantBody9597 = 'stone, very hot or very cold';
const compPlantBody98100 = 'stone, with green flecks';

const compPlantBodyArray = [compPlantBody0103, compPlantBody0406, compPlantBody0709, compPlantBody1012, compPlantBody1315, compPlantBody1618, compPlantBody1921, compPlantBody2224, compPlantBody2527, compPlantBody2830, compPlantBody3133, compPlantBody3436, compPlantBody3739, compPlantBody4042, compPlantBody4345, compPlantBody4648, compPlantBody4951, compPlantBody5254, compPlantBody5557, compPlantBody5860, compPlantBody6163, compPlantBody6466, compPlantBody6769, compPlantBody7072, compPlantBody7375, compPlantBody7678, compPlantBody7982, compPlantBody8385, compPlantBody8688, compPlantBody8991, compPlantBody9294, compPlantBody9597, compPlantBody98100];
const compPlantBodyRand = Math.floor(Math.random()*compPlantBodyArray.length);
const compPlantBody = compPlantBodyArray[compPlantBodyRand];


const summonIssue0110 = 'Bad casting allows intrusion of non-planar conditions such as disease, temperature, poison gas, etc.';
const summonIssue1120 = 'Bad casting leaves an open gate (possibly allowing intrusion of non-planar conditions such as disease, temperature, poison gas, etc.)';
const summonIssue2130 = 'Bad casting summons it in a damaged or weaker form (small, low hit dice, injured, deformed, etc.)';
const summonIssue3140 = 'Bad casting summons it in a different form (uncontrolled)';
const summonIssue4150 = 'Bad casting summons it in a useless form (puddle, glob, etc.)';
const summonIssue5160 = 'Bad casting summons other uncontrolled creatures';
const summonIssue6170 = 'Becomes uncontrolled under certain circumstances';
const summonIssue7180 = 'Can engage in battle of wills with summoner for control';
const summonIssue8190 = 'Demands considerable sacrifices in exchange for its services';
const summonIssue91100 = 'Disappears (returns to home plane) under certain triggering circumstances';

const summonIssueArray = [summonIssue0110, summonIssue1120, summonIssue2130, summonIssue3140, summonIssue4150, summonIssue5160, summonIssue6170, summonIssue7180, summonIssue8190, summonIssue91100];



/* Travelers */

const travPhysForm0105 = 'Human + unusual skin color';
const travPhysForm0610 = 'Plant appearance (see Table 2-59)';
const travPhysForm1115 = 'Roll again for a result on this table, but add wings';
const travPhysForm1620 = 'Serpentine or spiral-shape of mist-like, otherplanar substance';
const travPhysForm2125 = 'Ooze or slime (see Table 2-41 for ideas)';
const travPhysForm2630 = 'Resembles a normal animal (Table 2-2) with a Demonic Attribute (Table 2-49)';
const travPhysForm3135 = 'Beast (Table 2-2) + Unusual Material Composition (Table 2-52)';
const travPhysForm3640 = 'Cone or pyramid of Unusual Material Composition (Table 2-52)';
const travPhysForm4145 = 'Human + Unusual Material Composition (Table 2-52)';
const travPhysForm4650 = 'Pillar of Unusual Material Composition (Table 2-52)';
const travPhysForm5155 = 'Resembles a human but with a Demonic Hint (Table 2-47) and also with an attribute of a normal animal (Table 2-2).';
const travPhysForm5660 = 'Aquatic creature (browse through Table 2-2) + Unusual Material Composition (Table 2-52)';
const travPhysForm6165 = 'Appearance of a normal aquatic creature (browse Table 2-2)';
const travPhysForm6670 = 'Beast (Table 2-2) + unusual skin color';
const travPhysForm7175 = 'Beast head (Table 2-2), body of a different kind of beast (Table 2-2), wings, and a Demonic Attribute (Table 2-49). Make it bipedal unless it has a sinuous body like a centipede or snake.';
const travPhysForm7680 = 'Beast head (Table 2-2), human body, and tail';
const travPhysForm8185 = 'Human head and torso with tail, beast arms and legs (Table 2-2), wings, and a Demonic Attribute (Table 2-49)';
const travPhysForm8690 = 'Human head and torso with tail, beast legs (Table 2-2)';
const travPhysForm9195 = 'Human head, beast body (Table 2-2)';
const travPhysForm96100 = 'Combination of two animals (Table 2-2)';

const travPhysFormArray = [travPhysForm0105, travPhysForm0610, travPhysForm1115, travPhysForm1620, travPhysForm2125, travPhysForm2630, travPhysForm3135, travPhysForm3640, travPhysForm4145, travPhysForm4650, travPhysForm5155, travPhysForm5660, travPhysForm6165, travPhysForm6670, travPhysForm7175, travPhysForm7680, travPhysForm8185, travPhysForm8690, travPhysForm9195, travPhysForm96100];
const travPhysFormRand = Math.floor(Math.random()*travPhysFormArray.length);
const travPhysForm = travPhysFormArray[travPhysFormRand];


const travAddFeature0105 = 'Large eyes or single eye on stalk, whichever fits best with the creature\'s physical form.';
const travAddFeature0610 = 'Large head (if bipedal) or some sort of visible brain-type organ if not.';
const travAddFeature1115 = 'Levitates and probably moves by levitation as well.';
const travAddFeature1620 = 'Long fingers or fingernails (if bipedal). If not bipedal it uses mental power or magical levitation powers to manipulate objects instead of using actual hands.';
const travAddFeature2125 = 'Rides monstrous steed if bipedal. If not bipedal, it is carried on a platform or in a palanquin by unintelligent buglike creatures with whom it communicates mentally. These might be connected to the creature by filaments or tubes.';
const travAddFeature2630 = 'Surrounded by bodyguard minions of a lesser race/type. These need not be planar creatures; they might be assembled from available local humanoids.';
const travAddFeature3135 = 'Uses staff as weapon if bipedal. If not bipedal, then it wears some sort of harness, garment, attachment or mechanism that carries complex devices.';
const travAddFeature3640 = 'Very attractive appearance if it has a humanoid form. Otherwise, it speaks by using a mechanism or arcane apparatus.';
const travAddFeature4145 = 'Has a big, visible brain. The brain might be in the right place but exposed to the air or cased in a transparent medium, or it might be an internal organ inside a transparent creature.';
const travAddFeature4650 = 'Wears twisty, baroque, complicated jewelry.';
const travAddFeature5155 = 'Smokes a hookah or pipe (yes, this includes the oozes).';
const travAddFeature5660 = 'Crawls with small symbiotic creatures that assist it in some way - either as a life support system or servants.';
const travAddFeature6165 = 'Large eyes or single eye on stalk, whichever fits best with the creature\'s physical form.';
const travAddFeature6670 = 'Large head (if bipedal) or some sort of visible brain-type organ if not.';
const travAddFeature7175 = 'Levitates and probably moves by levitation as well.';
const travAddFeature7680 = 'Long fingers or fingernails (if bipedal). If not bipedal it uses mental power or magical levitation powers to manipulate objects instead of using actual hands.';
const travAddFeature8185 = 'Rides monstrous steed if bipedal. If not bipedal, it is carried on a platform or in a palanquin by unintelligent buglike creatures with whom it communicates mentally. These might be connected to the creature by filaments or tubes.';
const travAddFeature8690 = 'Surrounded by bodyguard minions of a lesser race/type. These need not be planar creatures; they might be assembled from available local humanoids.';
const travAddFeature9195 = 'Uses staff as weapon if bipedal. If not bipedal, then it wears some sort of harness, garment, attachment or mechanism that carries complex devices.';
const travAddFeature96100 = 'Very attractive appearance if it has a humanoid form. Otherwise, it speaks by using a mechanism or arcane apparatus.';

const travAddFeatureArray = [travAddFeature0105, travAddFeature0610, travAddFeature1115, travAddFeature1620, travAddFeature2125, travAddFeature2630, travAddFeature3135, travAddFeature3640, travAddFeature4145, travAddFeature4650, travAddFeature5155, travAddFeature5660, travAddFeature6165, travAddFeature6670, travAddFeature7175, travAddFeature7680, travAddFeature8185, travAddFeature8690, travAddFeature9195, travAddFeature96100];
const travAddFeatureRand = Math.floor(Math.random()*travAddFeatureArray.length);
const travAddFeature = travAddFeatureArray[travAddFeatureRand];


const travTradeThis0105 = 'armor';
const travTradeThis0610 = 'artworks';
const travTradeThis1115 = 'dreams';
const travTradeThis1620 = 'drugs';
const travTradeThis2125 = 'food';
const travTradeThis2630 = 'gems';
const travTradeThis3135 = 'gold';
const travTradeThis3640 = 'information';
const travTradeThis4145 = 'longevity';
const travTradeThis4650 = 'magic items';
const travTradeThis5155 = 'magical food';
const travTradeThis5660 = 'maps';
const travTradeThis6165 = 'mercenary service';
const travTradeThis6670 = 'potions';
const travTradeThis7175 = 'prophesies';
const travTradeThis7680 = 'scrolls';
const travTradeThis8185 = 'slaves';
const travTradeThis8690 = 'souls';
const travTradeThis9195 = 'spell-casting';
const travTradeThis96100 = 'transportation';

const travTradeThisArray = [travTradeThis0105, travTradeThis0610, travTradeThis1115, travTradeThis1620, travTradeThis2125, travTradeThis2630, travTradeThis3135, travTradeThis3640, travTradeThis4145, travTradeThis4650, travTradeThis5155, travTradeThis5660, travTradeThis6165, travTradeThis6670, travTradeThis7175, travTradeThis7680, travTradeThis8185, travTradeThis8690, travTradeThis9195, travTradeThis96100];
const travTradeThisRand = Math.floor(Math.random()*travTradeThisArray.length);
const travTradeThis = travTradeThisArray[travTradeThisRand];


const travTradeForThis0105 = 'a simple errand...';
const travTradeForThis0610 = 'artworks';
const travTradeForThis1115 = 'cattle';
const travTradeForThis1620 = 'dreams';
const travTradeForThis2125 = 'drugs';
const travTradeForThis2630 = 'food';
const travTradeForThis3135 = 'gems';
const travTradeForThis3640 = 'gold';
const travTradeForThis4145 = 'heads, hearts, brains, etc.';
const travTradeForThis4650 = 'information';
const travTradeForThis5155 = 'land';
const travTradeForThis5660 = 'magic items';
const travTradeForThis6165 = 'magical food';
const travTradeForThis6670 = 'mercenary service';
const travTradeForThis7175 = 'potions';
const travTradeForThis7680 = 'scrolls';
const travTradeForThis8185 = 'slaves';
const travTradeForThis8690 = 'souls';
const travTradeForThis9195 = 'worthless(?) items';
const travTradeForThis96100 = 'youth';

const travTradeForThisArray = [travTradeForThis0105, travTradeForThis0610, travTradeForThis1115, travTradeForThis1620, travTradeForThis2125, travTradeForThis2630, travTradeForThis3135, travTradeForThis3640, travTradeForThis4145, travTradeForThis4650, travTradeForThis5155, travTradeForThis5660, travTradeForThis6165, travTradeForThis6670, travTradeForThis7175, travTradeForThis7680, travTradeForThis8185, travTradeForThis8690, travTradeForThis9195, travTradeForThis96100];
const travTradeForThisRand = Math.floor(Math.random()*travTradeForThisArray.length);
const travTradeForThis = travTradeForThisArray[travTradeForThisRand];



const modeTravel0112 = 'By use of mental powers';
const modeTravel1325 = 'By use of strange and unknown spells';
const modeTravel2638 = 'By use of vehicle or item (try out Table 2-57)';
const modeTravel3951 = 'Involuntary. This could be according to a Time Cycle (see Table 1-29 in Book One)';
const modeTravel5264 = 'Locating and using existing magical gates';
const modeTravel6577 = 'Using a bodily organ (Try out Table 2-57)';
const modeTravel7890 = 'Using a particular magic item';
const modeTravel91100 = 'Using magical gates it (they) calls into existence';

const modeTravelArray = [modeTravel0112, modeTravel1325, modeTravel2638, modeTravel3951, modeTravel5264, modeTravel6577, modeTravel7890, modeTravel91100];
const modeTravelRand = Math.floor(Math.random()*modeTravelArray.length);
const modeTravel = modeTravelArray[modeTravelRand];




const travelNameWordOne0108 = 'disconjunctive';
const travelNameWordOne0916 = 'metacorporeal';
const travelNameWordOne1724 = 'paracontradictory';
const travelNameWordOne2532 = 'paralocative';
const travelNameWordOne3340 = 'paratransitive';
const travelNameWordOne4148 = 'raider\'s';
const travelNameWordOne4956 = 'relocationary';
const travelNameWordOne5765 = 'transapparitional';
const travelNameWordOne6674 = 'transitive';
const travelNameWordOne7583 = 'transitorial';
const travelNameWordOne8492 = 'xenolocational';
const travelNameWordOne93100 = 'xenotransitive';

const travelNameWordOneArray = [travelNameWordOne0108, travelNameWordOne0916, travelNameWordOne1724, travelNameWordOne2532, travelNameWordOne3340, travelNameWordOne4148, travelNameWordOne4956, travelNameWordOne5765, travelNameWordOne6674, travelNameWordOne7583, travelNameWordOne8492, travelNameWordOne93100];
const travelNameWordOneRand = Math.floor(Math.random()*travelNameWordOneArray.length);
const travelNameWordOne = travelNameWordOneArray[travelNameWordOneRand];

const travelNameWordTwo0108 = 'collar';
const travelNameWordTwo0916 = 'cupboard';
const travelNameWordTwo1724 = 'device';
const travelNameWordTwo2532 = 'flitter';
const travelNameWordTwo3340 = 'galleon';
const travelNameWordTwo4148 = 'galley';
const travelNameWordTwo4956 = 'gate';
const travelNameWordTwo5765 = 'orb';
const travelNameWordTwo6674 = 'platform';
const travelNameWordTwo7583 = 'portal';
const travelNameWordTwo8492 = 'torc';
const travelNameWordTwo93100 = 'yacht';

const travelNameWordTwoArray = [travelNameWordTwo0108, travelNameWordTwo0916, travelNameWordTwo1724, travelNameWordTwo2532, travelNameWordTwo3340, travelNameWordTwo4148, travelNameWordTwo4956, travelNameWordTwo5765, travelNameWordTwo6674, travelNameWordTwo7583, travelNameWordTwo8492, travelNameWordTwo93100];
const travelNameWordTwoRand = Math.floor(Math.random()*travelNameWordTwoArray.length);
const travelNameWordTwo = travelNameWordTwoArray[travelNameWordTwoRand];

const travelNameWordThree0108 = 'appendix';
const travelNameWordThree0916 = 'conceiver';
const travelNameWordThree1724 = 'emotionum';
const travelNameWordThree2532 = 'epilepsy';
const travelNameWordThree3340 = 'gland';
const travelNameWordThree4148 = 'kidney';
const travelNameWordThree4956 = 'node';
const travelNameWordThree5765 = 'plumage';
const travelNameWordThree6674 = 'talent';
const travelNameWordThree7583 = 'thyrum';
const travelNameWordThree8492 = 'whisk';
const travelNameWordThree93100 = 'wings';

const travelNameWordThreeArray = [travelNameWordThree0108, travelNameWordThree0916, travelNameWordThree1724, travelNameWordThree2532, travelNameWordThree3340, travelNameWordThree4148, travelNameWordThree4956, travelNameWordThree5765, travelNameWordThree6674, travelNameWordThree7583, travelNameWordThree8492, travelNameWordThree93100];
const travelNameWordThreeRand = Math.floor(Math.random()*travelNameWordThreeArray.length);
const travelNameWordThree = travelNameWordThreeArray[travelNameWordThreeRand];



/* Visitations */

const visitationForm0104 = 'Associated with pure energy: fire';
const visitationForm0508 = 'Associated with pure energy: cold';
const visitationForm0912 = 'Associated with pure energy: electricity';
const visitationForm1316 = 'Associated with pure energy: magical force';
const visitationForm1720 = 'Associated with pure energy: gravity';
const visitationForm2124 = 'Associated with pure energy: dimensional changes and phasing';
const visitationForm2528 = 'Associated with pure emotion: fear';
const visitationForm2932 = 'Associated with pure emotion: joy';
const visitationForm3336 = 'Associated with pure emotion: hatred';
const visitationForm3740 = 'Associated with pure emotion: lust';
const visitationForm4144 = 'Associated with pure emotion: greed';
const visitationForm4548 = 'Associated with pure emotion: sadness or despair';
const visitationForm4952 = 'Associated with pure emotion: vengeance';
const visitationForm5356 = 'Associated with pure intellect: sanity';
const visitationForm5760 = 'Associated with pure intellect: knowledge';
const visitationForm6164 = 'Associated with pure intellect: comprehension';
const visitationForm6568 = 'Associated with pure energy: sonic';
const visitationForm6972 = 'Associated with pure intellect: music';
const visitationForm7376 = 'Associated with pure energy: death or life';
const visitationForm7780 = 'Associated with pure energy: loss of experience';
const visitationForm8184 = 'Associated with pure energy: age';
const visitationForm8588 = 'Associated with pure energy: spells and magical energy';
const visitationForm8992 = 'Associated with time and/or memory';
const visitationForm9396 = 'Associated with light or darkness';
const visitationForm97100 = 'Extrusion from other dimension';

const visitationFormArray = [visitationForm0104, visitationForm0508, visitationForm0912, visitationForm1316, visitationForm1720, visitationForm2124, visitationForm2528, visitationForm2932, visitationForm3336, visitationForm3740, visitationForm4144, visitationForm4548, visitationForm4952, visitationForm5356, visitationForm5760, visitationForm6164, visitationForm6568, visitationForm6972, visitationForm7376, visitationForm7780, visitationForm8184, visitationForm8588, visitationForm8992, visitationForm9396, visitationForm97100];
const visitationFormRand = Math.floor(Math.random()*visitationFormArray.length);
const visitationForm = visitationFormArray[visitationFormRand];


const visitationCause0104 = 'After-effect of a single magical event';
const visitationCause0508 = 'After-effect of the removal of a piece of reality (and by whom, one asks)';
const visitationCause0912 = 'After-effect or remnant of a single instance of divine vengeance';
const visitationCause1316 = 'Byproduct of the creation of an artifact or relic';
const visitationCause1720 = 'Byproduct of the intersection of two dimensions, or planes of existence';
const visitationCause2124 = 'Caused by a grievous renunciation or violation of authority or tradition in a nearby, related location.';
const visitationCause2528 = 'Caused by the attenuation of the aether, phlogiston, or astral substance at a particular point. Alternatively, it is the attenuation of material matter which causes the visitation';
const visitationCause2932 = 'Created as an abstract “artwork” or decoration by (or for) powerful or magical individuals';
const visitationCause3336 = 'Echo of a planar, magical, divine, or dimensional “waterfall”';
const visitationCause3740 = 'Echo of an event on another plane of existence';
const visitationCause4144 = 'Forms as the byproduct of a sensory organ or device from another reality, like the wake of a periscope.';
const visitationCause4548 = 'Intersection of the ripple effects of two stationary artifacts, patterns, sigils, or structures';
const visitationCause4952 = 'Is the “waste product” of a bizarre process that is operating nearby, or at least relatively so';
const visitationCause5356 = 'Nexus or entrance to the base of a dimensional whirlpool';
const visitationCause5760 = 'Phenomenon linked to a place due to past magical activity';
const visitationCause6164 = 'Remnant of a failed or renounced oath';
const visitationCause6568 = 'Remnant or after-effect of the destruction of an artifact or relic';
const visitationCause6972 = 'Remnant, soul, or spirit of a dead godling or demigod';
const visitationCause7376 = 'Represents the “pre-effect” of something that is going to happen';
const visitationCause7780 = 'Represents the mid-point between two halves of a powerful artifact, relic, or being - where the influence of their connection is the weakest';
const visitationCause8184 = 'Represents the nexus of a powerful being\'s thoughts or emotions'
const visitationCause8588 = 'Result of strange religious practices';
const visitationCause8992 = 'Source of visitation is imprisoned in an object that has been left, abandoned, stored, or which might just be waiting for later retrieval';
const visitationCause9396 = 'Summoned or created as a guardian for something, by the manipulation of strange forces. “Something” might be an entrance, an item, a world, a crypt, etc.';
const visitationCause97100 = 'Wells up from a deep underground source, of an unexplained nature';

const visitationCauseArray = [visitationCause0104, visitationCause0508, visitationCause0912, visitationCause1316, visitationCause1720, visitationCause2124, visitationCause2528, visitationCause2932, visitationCause3336, visitationCause3740, visitationCause4144, visitationCause4548, visitationCause4952, visitationCause5356, visitationCause5760, visitationCause6164, visitationCause6568, visitationCause6972, visitationCause7376, visitationCause7780, visitationCause8184, visitationCause8588, visitationCause8992, visitationCause9396, visitationCause97100];
const visitationCauseRand = Math.floor(Math.random()*visitationCauseArray.length);
const visitationCause = visitationCauseArray[visitationCauseRand];








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
const genSpecAttackRand = Math.floor(Math.random()*genSpecAttackArray.length);
const genSpecAttack = genSpecAttackArray[genSpecAttackRand];


const beastAtt01 = 'Amoeba';
const beastAtt02 = 'Ant';
const beastAtt03 = 'Anteater';
const beastAtt04 = 'Ape';
const beastAtt05 = 'Baboon';
const beastAtt06 = 'Badger';
const beastAtt07 = 'Bat';
const beastAtt08 = 'Bear';
const beastAtt10 = 'Beaver';
const beastAtt11 = 'Bee';
const beastAtt12 = 'Beetle';
const beastAtt13 = 'Boar/pig';
const beastAtt14 = 'Bovine';
const beastAtt15 = 'Camel';
const beastAtt16 = 'Bird';
const beastAtt19 = 'Centipede';
const beastAtt20 = 'Cat';
const beastAtt21 = 'Chicken';
const beastAtt22 = 'Clam';
const beastAtt23 = 'Crab';
const beastAtt24 = 'Crocodile';
const beastAtt25 = 'Dinosaur';
const beastAtt26 = 'Dog';
const beastAtt27 = 'Dolphin';
const beastAtt28 = 'Dragonfly';
const beastAtt29 = 'Eagle';
const beastAtt30 = 'Earwig';
const beastAtt31 = 'Eel';
const beastAtt32 = 'Elephant';
const beastAtt33 = 'Fish';
const beastAtt40 = 'Frog';
const beastAtt41 = 'Gecko';
const beastAtt42 = 'Giraffe';
const beastAtt43 = 'Goat';
const beastAtt44 = 'Hawk';
const beastAtt45 = 'Bird';
const beastAtt46 = 'Horse';
const beastAtt47 = 'Hyena';
const beastAtt48 = 'Jackal';
const beastAtt49 = 'Leech';
const beastAtt50 = 'Leopard';
const beastAtt51 = 'Lion';
const beastAtt52 = 'Lizard';
const beastAtt53 = 'Lobster';
const beastAtt54 = 'Maggot';
const beastAtt5556 = 'Mammoth';
const beastAtt57 = 'Monkey';
const beastAtt58 = 'Mosquito';
const beastAtt59 = 'Moth';
const beastAtt60 = 'Octopus';
const beastAtt61 = 'Ostrich';
const beastAtt62 = 'Ox';
const beastAtt63 = 'Parrot';
const beastAtt64 = 'Peacock';
const beastAtt65 = 'Penguin';
const beastAtt66 = 'Prairie dog';
const beastAtt67 = 'Praying mantis';
const beastAtt68 = 'Rabbit';
const beastAtt69 = 'Rat';
const beastAtt70 = 'Raven';
const beastAtt71 = 'Rhinoceros';
const beastAtt72 = 'Roach';
const beastAtt73 = 'Saber-tooth tiger';
const beastAtt74 = 'Beetle';
const beastAtt7576 = 'Seal';
const beastAtt77 = 'Slug';
const beastAtt78 = 'Snail';
const beastAtt79 = 'Snake';
const beastAtt83 = 'Spider';
const beastAtt84 = 'Squid';
const beastAtt85 = 'Squirrel';
const beastAtt86 = 'Deer';
const beastAtt87 = 'Stick insect';
const beastAtt88 = 'Beetle';
const beastAtt89 = 'Tapeworm';
const beastAtt90 = 'Tick';
const beastAtt91 = 'Toad';
const beastAtt92 = 'Virus';
const beastAtt93 = 'Vulture';
const beastAtt94 = 'Walrus';
const beastAtt95 = 'Warthog';
const beastAtt96 = 'Wasp';
const beastAtt97 = 'Whale';
const beastAtt99 = 'Wolf';
const beastAtt100 = 'Worm';

const beastAttArray = [beastAtt01, beastAtt02, beastAtt03, beastAtt04, beastAtt05, beastAtt06, beastAtt06, beastAtt07, beastAtt08, beastAtt10, beastAtt11, beastAtt12, beastAtt13, beastAtt14, beastAtt15, beastAtt16, beastAtt19, beastAtt20, beastAtt21, beastAtt22, beastAtt23, beastAtt24, beastAtt25, beastAtt26, beastAtt27, beastAtt28, beastAtt29, beastAtt30, beastAtt31, beastAtt32, beastAtt33, beastAtt40, beastAtt41, beastAtt42, beastAtt43, beastAtt44, beastAtt45, beastAtt46, beastAtt47, beastAtt48, beastAtt49, beastAtt50, beastAtt51, beastAtt52, beastAtt53, beastAtt54, beastAtt5556, beastAtt57, beastAtt58, beastAtt59, beastAtt60, beastAtt61, beastAtt62, beastAtt63, beastAtt64, beastAtt65, beastAtt66, beastAtt67, beastAtt68, beastAtt69, beastAtt70, beastAtt71, beastAtt72, beastAtt73, beastAtt74, beastAtt7576, beastAtt77, beastAtt78, beastAtt79, beastAtt83, beastAtt84, beastAtt85, beastAtt86, beastAtt87, beastAtt88, beastAtt89, beastAtt90, beastAtt91, beastAtt92, beastAtt93, beastAtt94, beastAtt95, beastAtt96, beastAtt97, beastAtt99, beastAtt100];
const beastAttRand = Math.floor(Math.random()*beastAttArray.length);
const beastAtt = beastAttArray[beastAttRand];


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


const specDeliveryArray = ['appearance (changes to dangerous appearance)', 'appearance (normal appearance is dangerous)', 'cast like a spell (affects number of hit dice)', 'cast like a spell (area effect)', 'cast like a spell (one target)', 'cast like a spell (radius around monster)', 'constant effect (radius)', 'exhaled cloud', 'exhaled cone', 'exhaled line', 'gaze', 'gives off gas', 'mental power (affects number of hit dice)', 'mental power (area effect)', 'mental power (burst in radius around monster)', 'mental power (one target)', 'ray (eye, eyestalks, or other organ)', 'smell (radius)', 'smell (squirted, cone)', 'smell (squirted, single target)', 'sound (clicks, etc.)(radius around monster)', 'speech (in radius from monster)', 'spit (glob, single target)', 'spit (line)', 'spray (cone)', 'spray (line)', 'squirt liquid (single target)', 'touch'];
const specDeliveryRand = Math.floor(Math.random()*specDeliveryArray.length);
const specDelivery = specDeliveryArray[specDeliveryRand];


const horrorBasicForm0105 = 'ant';
const horrorBasicForm0610 = 'beetle';
const horrorBasicForm1115 = 'bipedal';
const horrorBasicForm1620 = 'blob';
const horrorBasicForm2125 = 'centipede/scorpion';
const horrorBasicForm2630 = 'cone/cube';
const horrorBasicForm3135 = 'crab/lobster';
const horrorBasicForm3640 = 'fish';
const horrorBasicForm4145 = 'fly';
const horrorBasicForm4650 = 'frog/toad';
const horrorBasicForm5155 = 'leech/slug';
const horrorBasicForm5660 = 'mantis/stick beetle';
const horrorBasicForm6165 = 'moth';
const horrorBasicForm6670 = 'octopus/squid';
const horrorBasicForm7175 = 'ooze';
const horrorBasicForm7680 = 'plant';
const horrorBasicForm8185 = 'snake/eel';
const horrorBasicForm8690 = 'sphere';
const horrorBasicForm9195 = 'spider/longlegs';
const horrorBasicForm96100 = 'wasp';

const horrorBasicFormArray = [horrorBasicForm0105, horrorBasicForm0610, horrorBasicForm1115, horrorBasicForm1620, horrorBasicForm2125, horrorBasicForm2630, horrorBasicForm3135, horrorBasicForm3640, horrorBasicForm4145, horrorBasicForm4650, horrorBasicForm5155, horrorBasicForm5660, horrorBasicForm6165, horrorBasicForm6670, horrorBasicForm7175, horrorBasicForm7680, horrorBasicForm8185, horrorBasicForm8690, horrorBasicForm9195, horrorBasicForm96100];
const horrorBasicFormRand = Math.floor(Math.random()*horrorBasicFormArray.length);
const horrorBasicForm = horrorBasicFormArray[horrorBasicFormRand];


const amorphousShape = 'amorphous lump or glob';
const puddleShape = 'amorphous puddle';
const coneShape = 'cone';
const cubeShape = 'cube';
const pillarShape = 'pillar or column';
const sphereShape = 'sphere';
const tubeShape = 'tube or serpent';
const mimicChameleon = 'mimics other objects, or chameleonic';

const oozeShapeArray = [amorphousShape, puddleShape, coneShape, cubeShape, pillarShape, sphereShape, tubeShape, mimicChameleon];



const plantFormArray = ['bamboo', 'broad leaves', 'bush or shrub', 'cone', 'coral-type growth', 'fern', 'grass-like stalks', 'hanging moss', 'ivy', 'lump', 'mold', 'mushroom', 'sphere', 'thorn-bush', 'palm tree', 'pine tree', 'short tree', 'tall tree', 'underground bulbs', 'vines'];
const plantFormRand = Math.floor(Math.random()*plantFormArray.length);
const plantFormType = plantFormArray[plantFormRand];



const apogeePerigreeCycle = `Apogee and Perigee (solar, lunar, or other). Perigee is the closest point in the orbit of two celestial objects, and Apogee is the farthest point. Obviously,the orbit has to be elliptical, not circular, in order to have closer and farther points in the orbit. Keep in mind that this near-far relationship could exist between all kinds of celestial objects, not just suns and moons. Comet cycles are based on apogees and perigees, meteors move around with apogees and perigees, and even magical structures could have such a relationship to each other. Magical objects on the earth might activate only when a sun or moon is close; or perhaps the magical objects are huge metal blocks placed in the sky by some forgotten, ancient race, designed for some inscrutable purpose…`;
const calendarCycle = `Calendar Cycles. Many cultures group years into a repeating cycle, treating different years much as Western culture interpreted the zodiacal segments of a single year. The Chinese Calendar, for example, follows a cycle of the Year of the Rat, Year of the Ox, Year of the Tiger, Year of the Rabbit, Year of the Dragon, Year of the Snake, Year of the Horse, Year of the Goat, Year of the Monkey, Year of the Rooster, Year of the Dog, and Year of the Boar. Certain characteristics are attributed to people born in the different years.`;
const celestialCycle = `Celestial Cycles. The zodiac is a division of the sky into twelve regions, each called a “house.” The regions are: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. Each house is associated with behaviors and with a particular metaphorical emblem. A fantasy world might have different zodiacal signs, or a different method of interpreting the movements of the stars. The zodiac is linked to the solar year, not the lunar year.`;
const cometCycle = `Comet Cycles. The appearance of certain predictable comets in the night sky is often given mystical significance. Comet cycles can be a great adventure-generating device because of the long intervals between the comet\`s appearances. Lots of unpredictable things can happen to places, societies, and collective memory while the comet is away. For example: if some form of lycanthropy is linked to the appearance of a comet rather than a full moon, the lycanthropic disease might be transmitted far and wide while dormant, then suddenly appear all over the place when the comet appears in the sky. It would become a sort of celestial retro-virus.`;
const deviceCycle = `Device-Driven Cycle. A cycle might be derived from the operation of a device that divides time into a regular or irregular pattern. For instance, if the cycle is determined by the burning of candles without regard to the length of the candle, the cycle would be irregular. If the candles were scrupulously measured to be identical, the candle-driven cycle would be regular. Devices to measure out time could involve dripping water, candles, hourglasses, water wheels, gears, and many other mechanical arrangements.`;
const equinoxSolstice = `Equinox and Solstice (solar cycle). A solstice is one of the two times of year when the sun is farthest off the celestial equator. These occur at approximately June 22 (the summer solstice) and December 22 (the winter solstice). Summer solstice is the shortest night of the year, and winter solstice is the longest night. The equinox is when the sun crosses the equator and days and nights are of closest to equal length. The equinoxes occur at approximately March 21 (the Vernal Equinox, also the first day of Spring) and September 23 (the Autumnal Equinox). Note that Autumn and Spring are reversed for the northern and southern hemispheres of the earth.`;
const fashionCycle = `Fashion Cycles. The types of clothes and the jewelry people wear comes into and out of fashion periodically, as do haircuts, luxury commodities, philosophies, and religious practices. Magical effects like planar gates could easily be influenced by fashions in behavior or religion. It might be, for example, that a planar gate opens only when a local god has a minimum number of worshippers present at a significant ritual. When it becomes more fashionable for people to worship that god, the chance of the gate opening would suddenly increase.`;
const freezeThawCycle = `Freezing/Thawing Cycle. A particular cycle for a villain\`s activities, or the opening of some sort of portal or dungeon entrance, could be linked to the seasonal freezing and thawing of a barrier that blocks the portal, or of a mechanism that controls it. The builder might have intended the cycle of freezing and thawing, or the seasons might have changed since the original construction. Freezing and thawing also affect the volume of water moving in rivers, and patterns of migration by animals. This is a time cycle that can be used to drive a wide variety of adventures and monsters.`;
const lunarCycle = `Lunar Cycle. Earth\`s lunar cycle from new moon to new moon is 29.5 days, and is called the Synodic Lunar Cycle. Measuring the lunar cycle based on when the moon arrives in the same place in the sky (regardless of phase) is called the Sidereal Cycle and is 27.1 days in length. For gaming purposes, the “average” lunar cycle of 28 days is probably close enough unless the adventure is deeply involved in astrology. The phases of the moon are: new moon, crescent moon, first quarter moon, waxing gibbous moon, full moon, waning gibbous moon, last quarter moon, crescent moon, and then new moon again. The cycle of lunar eclipses is also an excellent fantasy theme, although the cycle of an eclipse is much longer than the cycle of the lunar phases.`;
const morphCycleOne = `Morphological Cycle (one creature). Some creatures have a life cycle in which their form changes radically; butterflies begin as caterpillars, frogs begin as tadpoles, many insects go through a pupae or larval stage. Although this is related to the reproductive cycle of the species, the radical morphological changes allow these creatures to have the right body-form for the right purpose at the right time. The caterpillar form, for example, is well adapted to eating huge quantities of food, whereas the mobility of the butterfly stage allows for finding stronger mates more easily. Intelligent creatures with morphological cycles might open and close portals (or be able to, based on their current phase). For example, a gate might remain closed while eggs gestate in some bizarre inter-dimensional space, or be opened when the creatures are in a predatory body-form and then close again. Only the strong and well fed predators would make it back to the gate, and would then be all together within the gate for the mating cycle to begin. The possible variations on this pattern are quite numerous.`;
const morphCycleSeries = `Morphological Life Cycle (series of creatures). Just as a particular life form may go through radical morphological changes in order to link up form with function in a series of steps, it is also possible for a species to generate a sequence of life forms, only one of which is the breeder. As an example, envision a life form whose “queen” and “drone” eggs stay dormant for a long period of time, and need to be shifted from a hot incubation environment to a colder hatching environment. One “generation” of workers is a hot-weather creature that cares for the eggs during the incubation phase. As the incubation phase ends, the worker mate among themselves, producing an entirely different form - a flying form well suited for migration. The flying forms transport the eggs to a colder climate in a migration, breed again to create a cold-weather worker caste, and then die. The cold-weather caste hatches rapidly in the cold, and these workers care for the queen and drone eggs. The queens and drones fly back to the hot-weather area to breed and lay eggs of three kinds: queens, drones, and more hot-weather workers. The hot-weather workers hatch quickly to care for the new queen and drone eggs, and the cycle begins again. At some point in such a cycle, it might be that the door to underground hatching chambers must be unsealed, or the migration might take place across different planes of existence, requiring the temporary opening of planar gates.`;
const planetaryCycle = `Planetary Cycles. The proximity of particular planets to the Earth, or their location within a region of the sky (particularly a zodiacal region) can be a usable cycle for the purposes of a fantasy world, possibly having effects on magic, on different kinds of magic, villain motivations, and the opening or closing of planar gates or dungeon entrances.`;
const reproductiveCycle = `Reproductive Cycle. The average human menstrual cycle is 28 days. If the villainess is non-human, the cycle might not be a menstrual cycle, but a cycle of being “in heat” or “in season.” This same pattern might apply to unusual monsters as well as non-human animals. Female dogs stay in heat for about 21-28 days depending on breed (as one example of a heat cycle). The purpose of a dungeon or planar gate that opens and seals based on the reproductive cycle of a tribe or being is fairly obvious, and could (ahem) give birth to interesting adventure scenarios.`;
const magicalPowerCycle = `Rising and Falling Magical Power. The lunar, menstrual, and solar cycles are all associated with the rise and fall of magical capabilities, but a fantasy world may have an independent cycle of rising a falling magical power, not marked by these factors. Fluctuations in magic power might be druidic (some fluctuation in the earth\`s spiritual nature), might be related to arcane magic (a fluctuation in the eldritch energy that can be tapped by spells) or might be related to a fluctuation in divine power (possibly related to planar “distance, a period of dormancy, or divine battles that occupy the attention of the gods from time to time). A wizard\`s personal capability might be linked to the concept of “mana,” personal reserves of magical power that might shift with the tides of time. Monsters might also feel the effects of magical change.`;
const scripturalCycle = `Scriptural Cycle. In Judaism, the Torah (that\`s the five books of Moses, in case you\`re not familiar) is divided into parshas (segments) one of which is read and studied each seven days. The parshas correspond to the Jewish lunar calendar, so that the same parsha is read at the same lunar date every year. The point of completion of the reading, when the Torah scroll is rolled back to the beginning is a major holiday, as is the middle of the Torah (the day of atonement) and the reading on the new year (which precedes the day of atonement by a week). A religious scripture in a fantasy world might also follow a cycle not related to the calendar - planar gates or subterranean chambers might be opened (or open of their own accord) in a cycle driven by the reading of scriptures instead of a calendar cycle. The reading itself might trigger these events, rather than merely corresponding to them.`;
const secondaryEffectCycle = `Secondary Effect Cycle. Any of the various cycles listed in this table might be the cause of some other secondary effect that normally (but does not always) result from the primary cycle. For instance, the hatching patterns of locusts often (but does not always) cause famines. The focus of your adventure might not be the locust hatching, but the resulting famine. The periodic flooding of the Nile river was necessary to good harvests in Ancient Egypt; when that cycle failed due to low rainfall in the African interior, famines and food shortages resulted in Egypt. Adventures premised upon the secondary effects of a primary cycle might focus on the times when the expected result (the flooding of the Nile, or a locust plague) doesn\`t take place. Why didn\`t it? The answer might be valuable, crucial, or financially rewarding.`;
const temperatureCycle = `Temperature Cycles. Variations in temperature can cause all sorts of varying human behaviors, cause changes in economic factors, and can also trigger certain events in the animal and plant kingdoms. Consider such things as a locust-like insect with eggs that lie dormant until particularly hot temperatures arrive.`;
const traumaticStressCycle = `Traumatic Stress Cycle. Individuals who have suffered traumatic stress may re-live the event or its emotional impact, and this often happens on or around the anniversary of the event. The cycle could also be based on any cycle of events that either symbolize or reproduce the conditions and setting of the traumatic event. A fantasy world might have an analogue, in other words, to the way many War veterans react to the sound of helicopters and/or fireworks. `;

const timeCycleArray = [apogeePerigreeCycle, calendarCycle, celestialCycle, cometCycle, deviceCycle, equinoxSolstice, fashionCycle, freezeThawCycle, lunarCycle, morphCycleOne, morphCycleSeries, planetaryCycle, reproductiveCycle, magicalPowerCycle, scripturalCycle, secondaryEffectCycle, temperatureCycle, traumaticStressCycle];
const timeCycleRand = Math.floor(Math.random()*timeCycleArray.length);
const timeCycle = timeCycleArray[timeCycleRand];