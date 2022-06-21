function rollType() {
        const undeadTypeRand = Math.floor(Math.random()*undeadTypeArray.length);
        const undeadType = undeadTypeArray[undeadTypeRand];

        document.getElementById('typeText').innerText = '';
        document.getElementById('typeText').innerText = `${undeadType}`;

        if (document.getElementById('undeadDiv')) {
                document.getElementById('undeadDiv').innerHTML = '';
        }

        if (undeadType !== type0912 && undeadType !== type1316 && undeadType !== type3336 && undeadType !== type3740 && undeadType !== type5760 && undeadType !== type6164 && undeadType !== type8588 && undeadType !== type8992) {
                const deathCauseButton = document.createElement('button');
                const deathPrepButton = document.createElement('button');
                const cycleBreakButton = document.createElement('button');
                const deathMannerButton = document.createElement('button');
                const quickGenButton = document.createElement('button');

                deathCauseButton.id = 'deathCauseButton';
                deathCauseButton.innerText = 'Cause of Death';
                deathCauseButton.setAttribute("onclick", "rollDeathCause()");

                deathPrepButton.id = 'deathPrepButton';
                deathPrepButton.innerText = 'Preparation for Intelligent Undeath';
                deathPrepButton.setAttribute("onclick", "rollDeathPrep()");

                cycleBreakButton.id = 'cycleBreakButton';
                cycleBreakButton.innerText = 'Break in Life Cycle';
                cycleBreakButton.setAttribute("onclick", "rollCycleBreak()");

                deathMannerButton.id = 'deathMannerButton';
                deathMannerButton.innerText = 'Manner of Death';
                deathMannerButton.setAttribute("onclick", "rollDeathManner()");

                quickGenButton.id = 'quickGenButton';
                quickGenButton.innerText = 'Quick Generate';
                quickGenButton.setAttribute("onclick", "rollDeathCause(), rollDeathPrep(), rollCycleBreak(), rollDeathManner()");

                const undeadDiv = document.createElement('div');


                const deathCauseText = document.createElement('p');
                const deathPrepText = document.createElement('p');
                const cycleBreakText = document.createElement('p');
                const deathMannerText = document.createElement('p');

                undeadDiv.id = 'undeadDiv';
                deathCauseText.id = 'deathCauseText';
                deathPrepText.id = 'deathPrepText';
                cycleBreakText.id = 'cycleBreakText';
                deathMannerText.id = 'deathMannerText';


                document.body.appendChild(undeadDiv);
                document.getElementById('undeadDiv').innerHTML = '';

                document.getElementById('undeadDiv').appendChild(quickGenButton);
                document.getElementById('undeadDiv').appendChild(deathCauseButton);
                document.getElementById('undeadDiv').appendChild(deathCauseText);
                document.getElementById('undeadDiv').appendChild(deathPrepButton);
                document.getElementById('undeadDiv').appendChild(deathPrepText);
                document.getElementById('undeadDiv').appendChild(cycleBreakButton);
                document.getElementById('undeadDiv').appendChild(cycleBreakText);
                document.getElementById('undeadDiv').appendChild(deathMannerButton);
                document.getElementById('undeadDiv').appendChild(deathMannerText);
        }
}
function rollDeathCause() {
        const deathCauseRand = Math.floor(Math.random()*deathCauseArray.length);
        const deathCause = deathCauseArray[deathCauseRand];

        document.getElementById('deathCauseText').innerText = '';
        document.getElementById('deathCauseText').innerText = deathCause;
}

function rollDeathPrep() {
        const prepForDeathRand = Math.floor(Math.random()*prepForDeathArray.length);
        const prepForDeath = prepForDeathArray[prepForDeathRand];

        document.getElementById('deathPrepText').innerText = '';
        document.getElementById('deathPrepText').innerText = prepForDeath;
}

function rollCycleBreak() {
        const cycleBreakRand = Math.floor(Math.random()*cycleBreakArray.length);
        const cycleBreak = cycleBreakArray[cycleBreakRand];

        document.getElementById('cycleBreakText').innerText = '';
        document.getElementById('cycleBreakText').innerText = cycleBreak;
}

function rollDeathManner() {
        const deathMannerRand = Math.floor(Math.random()*deathMannerArray.length);
        const deathManner = deathMannerArray[deathMannerRand];

        document.getElementById('deathMannerText').innerText = '';
        document.getElementById('deathMannerText').innerText = deathManner;
}

const undeadTypeArray = [type0104 = 'corporeal, genius, non-reproductive', type0508 = 'corporeal, genius, reproduces through prey', type0912 = 'corporeal, non-intelligent, non-reproductive', type1316 = 'corporeal, non-intelligent, reproduces through prey', type1720 = 'corporeal, semi-intelligent, non-reproductive', type2124 = 'corporeal, semi-intelligent, reproduces through prey', type2528 = 'incorporeal, genius, non-reproductive', type2932 = 'incorporeal, genius, reproduces through prey', type3336 = 'incorporeal, non-intelligent, non-reproductive', type3740 = 'incorporeal, non-intelligent, reproduces through prey', type4144 = 'incorporeal, semi-intelligent, non-reproductive', type4548 = 'incorporeal, semi-intelligent, reproduces through prey', type4952 = 'non-human, corporeal, intelligent, non-reproductive', type5356 = 'non-human, corporeal, intelligent, contagious Undeath', type5760 = 'non-human, corporeal, non-intelligent, contagious Undeath', type6164 = 'non-human, corporeal, non-intelligent, non-reproductive', type6568 = 'non-human, corporeal, semi-intelligent, contagious Undeath', type6972 = 'non-human, corporeal, semi-intelligent, non-reproductive', type7376 = 'non-human, incorporeal, intelligent, contagious Undeath', type7780 = 'semi-corporeal, genius, non-reprodutive', type8184 = 'semi-corporeal. genius, reproduces through prey', type8588 = 'semi-corporeal, non-intelligent, non-reproductive', type8992 = 'semi-corporeal, non-intelligent, reproduces through prey', type9396 = 'semi-corporeal, semi-intelligent, non-reproductive', type97100 = 'semi-corporeal, semi-intelligent, reproduces through prey'];



const deathCauseArray = [deathCause0110 = 'cursed by enemy', deathCause1120 = 'cursed by gods', deathCause2130 = 'disease such as vampirism', deathCause3140 = 'prepared by others for Undeath, at or before death (unwillingly)', deathCause4150 = 'prepared by others for Undeath, at or before death (unwillingly)', deathCause5160 = 'prepared self for Undeath, during life', deathCause6170 = 'rejected from underworld for some reason', deathCause7180 = 'returned partially by actions of others', deathCause8190 = 'returned to gain vengeance for own killing', deathCause91100 = 'returned to guard location or item important to self during life'];


const prepForDeathArray = [prepForDeath0110 = 'actions are taken to ensure that a god will curse the soul with intelligent undeath', prepForDeath1120 = 'corpse/body is preserved/prepared in such a way that the soul (or life force) cannot depart', prepForDeath2130 = 'living body parts incorporated into corpse keep it "alive"', prepForDeath3140 = 'new soul brought into dead body', prepForDeath4150 = 'pact with gods/powers of afterlife to reject soul', prepForDeath5160 = 'physical preparation raises body with echo of former intelligence', prepForDeath6170 = 'physical preparation raises body with full former intelligence', prepForDeath7180 = 'ritual binds soul to a place', prepForDeath8190 = 'soul captured by ritual, kept in the wrong plane of existence', prepForDeath91100 = 'soul captured in item to prevent completion of the death cycle'];


const cycleBreak01 = 'Deliberately cursed at death by others for actions during lifetime';
const cycleBreak02 = 'Died after committing crime: Arson';
const cycleBreak03 = 'Died after committing crime: Assault';
const cycleBreak04 = 'Died after committing crime: Bankruptcy';
const cycleBreak05 = 'Died after committing crime: Battery';
const cycleBreak06 = 'Died after committing crime: Begging';
const cycleBreak07 = 'Died after committing crime: Blackmail';
const cycleBreak08 = 'Died after committing crime: Blasphemy';
const cycleBreak09 = 'Died after committing crime: Breach of Contract';
const cycleBreak10 = 'Died after committing crime: Breach of financial duty';
const cycleBreak11 = 'Died after committing crime: Breaking and entering';
const cycleBreak12 = 'Died after committing crime: Bribery';
const cycleBreak13 = 'Died after committing crime: Burglary';
const cycleBreak14 = 'Died after committing crime: Cattle theft or rustling';
const cycleBreak15 = 'Died after committing crime: Consorting with demons';
const cycleBreak16 = 'Died after committing crime: Counterfeiting';
const cycleBreak17 = 'Died after committing crime: Cowardice or desertion';
const cycleBreak18 = 'Died after committing crime: Demonic possession';
const cycleBreak19 = 'Died after committing crime: Desecration';
const cycleBreak20 = 'Died after committing crime: Disrespect to clergy';
const cycleBreak21 = 'Died after committing crime: Disrespect to nobility';
const cycleBreak22 = 'Died after committing crime: Drug possession';
const cycleBreak23 = 'Died after committing crime: Drug smuggling';
const cycleBreak24 = 'Died after committing crime: Drunkenness';
const cycleBreak25 = 'Died after committing crime: Embezzlement';
const cycleBreak26 = 'Died after committing crime: Escaped slave';
const cycleBreak27 = 'Died after committing crime: Extortion';
const cycleBreak28 = 'Died after committing crime: False imprisonment';
const cycleBreak29 = 'Died after committing crime: Fleeing crime scene';
const cycleBreak30 = 'Died after committing crime: Forgery';
const cycleBreak31 = 'Died after committing crime: Forsaking an oath';
const cycleBreak32 = 'Died after committing crime: Gambling';
const cycleBreak33 = 'Died after committing crime: Grave robbery';
const cycleBreak34 = 'Died after committing crime: Harboring a criminal';
const cycleBreak35 = 'Died after committing crime: Harboring a slave';
const cycleBreak36 = 'Died after committing crime: Heresy';
const cycleBreak37 = 'Died after committing crime: Horse theft';
const cycleBreak38 = 'Died after committing crime: Incest';
const cycleBreak39 = 'Died after committing crime: Inciting to riot';
const cycleBreak40 = 'Died after committing crime: Insanity';
const cycleBreak41 = 'Died after committing crime: Kidnapping';
const cycleBreak42 = 'Died after committing crime: Lewdness, private';
const cycleBreak43 = 'Died after committing crime: Lewdness, public';
const cycleBreak44 = 'Died after committing crime: Libel';
const cycleBreak45 = 'Died after committing crime: Manslaughter';
const cycleBreak46 = 'Died after committing crime: Misuse of public funds';
const cycleBreak47 = 'Died after committing crime: Murder';
const cycleBreak48 = 'Died after committing crime: Mutiny';
const cycleBreak49 = 'Died after committing crime: Necromancy';
const cycleBreak50 = 'Died after committing crime: Participating in forbidden meeting';
const cycleBreak51 = 'Died after committing crime: Perjury';
const cycleBreak52 = 'Died after committing crime: Pickpocket';
const cycleBreak53 = 'Died after committing crime: Piracy';
const cycleBreak54 = 'Died after committing crime: Poisoning';
const cycleBreak55 = 'Died after committing crime: Possession of forbidden weapon';
const cycleBreak56 = 'Died after committing crime: Prison escape';
const cycleBreak57 = 'Died after committing crime: Prostitution';
const cycleBreak58 = 'Died after committing crime: Public recklessness';
const cycleBreak59 = 'Died after committing crime: Racketeering';
const cycleBreak60 = 'Died after committing crime: Rape';
const cycleBreak61 = 'Died after committing crime: Receiving stolen goods (fencing)';
const cycleBreak62 = 'Died after committing crime: Robbery';
const cycleBreak63 = 'Died after committing crime: Sabotage';
const cycleBreak64 = 'Died after committing crime: Sale of shoddy goods';
const cycleBreak65 = 'Died after committing crime: Sedition';
const cycleBreak66 = 'Died after committing crime: Slander';
const cycleBreak67 = 'Died after committing crime: Smuggling';
const cycleBreak68 = 'Died after committing crime: Soliciting';
const cycleBreak69 = 'Died after committing crime: Swindling';
const cycleBreak70 = 'Died after committing crime: Theft';
const cycleBreak71 = 'Died after committing crime: Treason';
const cycleBreak72 = 'Died after committing crime: Trespass';
const cycleBreak73 = 'Died after committing crime: Using false measures';
const cycleBreak74 = 'Died after committing crime: Witchcraft';
const cycleBreak75 = 'Died after violating taboo: dietary';
const cycleBreak76 = 'Died after violating taboo: loyalty';
const cycleBreak77 = 'Died after violating taboo: marriage';
const cycleBreak78 = 'Died after violating taboo: sexual';
const cycleBreak79 = 'Died as a glutton';
const cycleBreak80 = 'Died as a miser';
const cycleBreak81 = 'Died as a coward';
const cycleBreak82 = 'Died deliberately';
const cycleBreak83 = 'Died unloved and unmourned';
const cycleBreak84 = 'Died while a slave';
const cycleBreak85 = 'Died while owning slaves';
const cycleBreak86 = 'Died without children';
const cycleBreak87 = 'Died without dying (I don\'t know, but it sounds good)';
const cycleBreak88 = 'Died without fulfilling contract';
const cycleBreak89 = 'Died without fulfilling oath';
const cycleBreak90 = 'Died without honor (marriage or parenthood)';
const cycleBreak91 = 'Died without honor (traitor)';
const cycleBreak92 = 'Died without manhood/womanhood rites';
const cycleBreak93 = 'Died without marrying';
const cycleBreak94 = 'Died without proper preparations for death';
const cycleBreak95 = 'Died without properly honoring ancestors';
const cycleBreak96 = 'Died without tribal initiation';
const cycleBreak97 = 'Eaten after death';
const cycleBreak98 = 'Not buried/burned';
const cycleBreak99 = 'Not given proper death ceremonies';
const cycleBreak100 = 'Not given proper preparations for afterlife';

const cycleBreakArray = [cycleBreak01, cycleBreak02, cycleBreak03, cycleBreak04, cycleBreak05, cycleBreak06, cycleBreak07, cycleBreak08, cycleBreak09, cycleBreak10, cycleBreak11, cycleBreak12, cycleBreak13, cycleBreak14, cycleBreak15, cycleBreak16, cycleBreak17, cycleBreak18, cycleBreak19, cycleBreak20, cycleBreak21, cycleBreak22, cycleBreak23, cycleBreak24, cycleBreak25, cycleBreak26, cycleBreak27, cycleBreak28, cycleBreak29, cycleBreak30, cycleBreak31, cycleBreak32, cycleBreak33, cycleBreak34, cycleBreak35, cycleBreak36, cycleBreak37, cycleBreak38, cycleBreak39, cycleBreak40, cycleBreak41, cycleBreak42, cycleBreak43, cycleBreak44, cycleBreak45, cycleBreak46, cycleBreak47, cycleBreak48, cycleBreak49, cycleBreak50, cycleBreak51, cycleBreak52, cycleBreak53, cycleBreak54, cycleBreak55, cycleBreak56, cycleBreak57, cycleBreak58, cycleBreak59, cycleBreak60, cycleBreak61, cycleBreak62, cycleBreak63, cycleBreak64, cycleBreak65, cycleBreak66, cycleBreak67, cycleBreak68, cycleBreak69, cycleBreak70, cycleBreak71, cycleBreak72, cycleBreak73, cycleBreak74, cycleBreak75, cycleBreak76, cycleBreak77, cycleBreak78, cycleBreak79, cycleBreak80, cycleBreak81, cycleBreak82, cycleBreak83, cycleBreak84, cycleBreak85, cycleBreak86, cycleBreak87, cycleBreak88, cycleBreak89, cycleBreak90, cycleBreak91, cycleBreak92, cycleBreak93, cycleBreak94, cycleBreak95, cycleBreak96, cycleBreak97, cycleBreak98, cycleBreak99, cycleBreak100];



const deathManner01 = 'burned in fire';
const deathManner02 = 'burned in lava';
const deathManner03 = 'cooked and eaten';
const deathManner04 = 'crushed';
const deathManner05 = 'defeated in dishonorable combat';
const deathManner06 = 'defeated in honorable combat';
const deathManner07 = 'died during a storm';
const deathManner08 = 'died during harvest time';
const deathManner09 = 'died during peacetime';
const deathManner10 = 'died in a swamp';
const deathManner11 = 'died in particular ancient ruins';
const deathManner12 = 'died in the hills';
const deathManner13 = 'died in the mountains';
const deathManner14 = 'died near particular type of flower';
const deathManner15 = 'died near particular type of tree';
const deathManner16 = 'died of disease';
const deathManner17 = 'died of fright';
const deathManner18 = 'died of natural causes';
const deathManner19 = 'died of thirst';
const deathManner20 = 'died while carrying particular weapon';
const deathManner21 = 'died while carrying stolen goods';
const deathManner22 = 'died while wearing particular garment';
const deathManner23 = 'died while wearing particular piece of jewelry';
const deathManner24 = 'drowned';
const deathManner25 = 'executed by asphyxiation';
const deathManner26 = 'executed by cold';
const deathManner27 = 'executed by drowning';
const deathManner28 = 'execution by exposure to elements';
const deathManner29 = 'executed by fire';
const deathManner30 = 'executed by hanging';
const deathManner31 = 'executed by live burial';
const deathManner32 = 'executed by starvation';
const deathManner33 = 'executed by strangulation';
const deathManner34 = 'executed by thirst';
const deathManner35 = 'executed despite having been pardoned';
const deathManner36 = 'fell from a great height';
const deathManner37 = 'frozen/hypothermia';
const deathManner38 = 'heart failure';
const deathManner39 = 'in the saddle';
const deathManner40 = 'killed by a creature that injects eggs';
const deathManner41 = 'killed by a deception';
const deathManner42 = 'killed by a jealous spouse';
const deathManner43 = 'killed by a jester';
const deathManner44 = 'killed by a lover';
const deathManner45 = 'killed by a lynch mob';
const deathManner46 = 'killed by a traitor';
const deathManner47 = 'killed by a trap';
const deathManner48 = 'killed by accident';
const deathManner49 = 'killed by an ancient curse';
const deathManner50 = 'killed by birds';
const deathManner51 = 'killed by blood poisoning';
const deathManner52 = 'killed by a demon';
const deathManner53 = 'killed by dogs/jackals';
const deathManner54 = 'killed by gluttony';
const deathManner55 = 'killed by insect(s)';
const deathManner56 = 'killed by inter-dimensional creature';
const deathManner57 = 'killed by magic';
const deathManner58 = 'killed by magic weapon';
const deathManner59 = 'killed by metal';
const deathManner60 = 'killed by mistake';
const deathManner61 = 'killed by own child';
const deathManner62 = 'killed by own parent';
const deathManner63 = 'killed by a particular type of person';
const deathManner64 = 'killed by a poisonous fungus';
const deathManner65 = 'killed by a poisonous plant';
const deathManner66 = 'killed by pride';
const deathManner67 = 'killed by a priest';
const deathManner68 = 'killed by a relative';
const deathManner69 = 'killed by soldiers during battle';
const deathManner70 = 'killed by some particular monster';
const deathManner71 = 'killed by strange aliens';
const deathManner72 = 'killed by undead';
const deathManner73 = 'killed by wine or drunkenness';
const deathManner74 = 'killed by a wooden object';
const deathManner75 = 'killed for a particular reason';
const deathManner76 = 'killed in a castle';
const deathManner77 = 'killed in a particular place';
const deathManner78 = 'killed in a tavern';
const deathManner79 = 'killed in a particular ritual';
const deathManner80 = 'killed in a tournament or joust';
const deathManner81 = 'killed near a particular thing';
const deathManner82 = 'killed on a particular day of the year';
const deathManner83 = 'killed under a particular zodiacal sign (i.e., a particular month or time';
const deathManner84 = 'killed under moonlight';
const deathManner85 = 'killed underground';
const deathManner86 = 'killed while exploring';
const deathManner87 = 'killed while fishing';
const deathManner88 = 'killed while fleeing';
const deathManner89 = 'killed while hunting';
const deathManner90 = 'killed while leading others badly';
const deathManner91 = 'killed while leading others well';
const deathManner92 = 'murdered';
const deathManner93 = 'sacrificed to a demon';
const deathManner94 = 'sacrificed to a god';
const deathManner95 = 'sacrificed to an ancient horror';
const deathManner96 = 'starved to death';
const deathManner97 = 'strangled';
const deathManner98 = 'struck by lightning';
const deathManner99 = 'struck down by gods';
const deathManner100 = 'tortured to death';

const deathMannerArray = [deathManner01, deathManner02, deathManner03, deathManner04, deathManner05, deathManner06, deathManner07, deathManner08, deathManner09, deathManner10, deathManner11, deathManner12, deathManner13, deathManner14, deathManner15, deathManner16, deathManner17, deathManner18, deathManner19, deathManner20, deathManner21, deathManner22, deathManner23, deathManner24, deathManner25, deathManner26, deathManner27, deathManner28, deathManner29, deathManner30, deathManner31, deathManner32, deathManner33, deathManner34, deathManner35, deathManner36, deathManner37, deathManner38, deathManner39, deathManner40, deathManner41, deathManner42, deathManner43, deathManner44, deathManner45, deathManner46, deathManner47, deathManner48, deathManner49, deathManner50, deathManner51, deathManner52, deathManner53, deathManner54, deathManner55, deathManner56, deathManner57, deathManner58, deathManner59, deathManner60, deathManner61, deathManner62, deathManner63, deathManner64, deathManner65, deathManner66, deathManner67, deathManner68, deathManner69, deathManner70, deathManner71, deathManner72, deathManner73, deathManner74, deathManner75, deathManner76, deathManner77, deathManner78, deathManner79, deathManner80, deathManner81, deathManner82, deathManner83, deathManner84, deathManner85, deathManner86, deathManner87, deathManner88, deathManner89, deathManner90, deathManner91, deathManner92, deathManner93, deathManner94, deathManner95, deathManner96, deathManner97, deathManner98, deathManner99, deathManner100];
