function generateMission() {

    /*PATRON AND MOTIVATIONS*/
    var tableSelected = document.getElementById("missionTypeSelect").value;

    var patronOrTargetArray = ['abbot (Asian-style monk)', 'abbot (heretic)', 'abbot (European-style)', 'accused person (guilty)', 'accused person (innocent)', 'accused killer (roll a second time for victim\'s identity, if desired)', 'actor (famous)', 'actor (leader of troupe)', 'actor (minor)', 'addict (alcohol)', 'addict (drugs)', 'addict (gambling)', 'addict (love)', 'addict (music)', 'addict (opium or hashish)', 'addict (other)', 'adulterer', 'adulterer (suspected)', 'adventurer (cleric)', 'adventurer (fighter)', 'adventurer (magic-user)', 'adventurer (thief)', 'agent (of deity)', 'agent (of demon)', 'agent (of fate)', 'agent (of guild)', 'agent (of merchant house)', 'agent (of mercy)', 'agent (of sultan)', 'agent (of king)', 'agent (secret diplomat)', 'agent (secret police)', 'agent (spy)', 'alchemist', 'alchemist (with secret formula)', 'almoner (collecting alms)', 'almoner (dispensing alms)', 'almoner (embezzlement suspect)', 'ambassador (commercial or mercantile)', 'ambassador (local political)', 'ambassador (major political)', 'anarchist (at work)', 'anarchist (scheming)', 'anarchist (suspected)', 'anarcho-syndicalist peasant', 'animal trainer (normal animals)', 'animal trainer (unusual animals)', 'anonymous wretch', 'apothecary (illegal or unlicensed)', 'apothecary (legal)', 'apprentice (mundane craft)', 'apprentice (thief or assassin)', 'apprentice (wizard or alchemist)', 'architect (any)', 'architect (castle)', 'architect (dungeons or prison)', 'architect (palace)', 'archivist (births and deaths)', 'archivist (city or town history)', 'archivist (criminal records)', 'archivist (heraldry and lineage)', 'archivist (land rights)', 'archivist (noble family)', 'archivist (temple)', 'arena owner', 'armorer (famous)', 'armorer (skilled)', 'artificer (lenses and glass)', 'artificer (siege engines)', 'artificer (water power or aqueducts)', 'artisan (any)', 'artisan (glass)', 'assassin (currently employed)', 'assassin (unemployed)', 'assistant or supporter (unauthorized)', 'astrologer (charlatan)', 'astrologer (in hiding)', 'astrologer (skillful)', 'auction-house owner', 'author (lascivious verse)', 'author (philosophical)', 'author (satirical)', 'author (spell book or magic tome)', 'bailiff (courtroom)', 'bailiff (sheriff\'s official serving writs, process)', 'baker', 'bandit (highwayman)',
    'bandit (leader)', 'bandit (lone)', 'bandit (popular hero)', 'bandit (with stole treasure)', 'barbarian', 'barber', 'bard (on mission)', 'bard (traveling minstrel)', 'baron (poor)', 'baron (rich)', 'baroness (beautiful)', 'baroness (cruel)', 'baroness (ugly)', 'bazaar owner', 'beadle (major temple)', 'beadle (minor temple)', 'beadle (of heretical temple)', 'beggar (crippled)', 'beggar (normal)', 'beggar (secret identity)', 'beggar (thief)', 'beggar (witness)', 'bird catcher (fabulous and magical birds)', 'bird catcher (falcons)', 'bird catcher (game birds)', 'bird catcher (songbirds)', 'blackmailer (highly successful)', 'blackmailer (knows of crime)', 'blackmailer (of evil target)', 'blackmailer (political secret)', 'blackmailer (sexual information)', 'blackmailer (temple secret)', 'blacksmith', 'blasphemer', 'blind man', 'bodyguard (failed)', 'bodyguard (working)', 'bookseller', 'bounty hunter (congenial)', 'bounty hunter (debtors)', 'bounty hunter (escaped slaves)', 'bounty hunter (killer of criminals)', 'bounty hunter (unlicensed)', 'brigand (highwayman)', 'brigand (leader)', 'brigand (local hero)', 'brigand (seeking vengeance)', 'brigand (unjustly accused)', 'broker (gems)', 'broker (land)', 'broker (loans)', 'broker (ship cargoes)', 'broker (slaves)', 'brothel owner', 'bureaucratic official (cunning)', 'bureaucratic official (diligent)', 'bureaucratic official (loyal)', 'bureaucratic official (pompous)', 'burglar (retired)', 'burglar (working)', 'burned man', 'butcher (poor)', 'butcher (rich)', 'butcher (sinister)', 'butterfly woman', 'buyer (of something)', 'buyer (prospective)', 'captain (barge)', 'captain (fishing boat)', 'captain (infantry)', 'captain (mercenary)', 'captain (pirate)', 'captain (secret police)', 'captain (ship)', 'cartographer (skilled)', 'cartographer (with vital map)', 'cattle breeder', 'cattle owner', 'cattle thief', 'celebrity figure (artistic)', 'celebrity figure (foreign)', 'celebrity figure (genius)', 'celebrity figure (in hiding or disguise)', 'celebrity figure (local)', 'celebrity figure (magic-related)', 'celebrity figure (sport or contest)', 'challenge recipient (cheating)', 'challenge recipient (hiding)', 'chef (skilled)', 'chef (trying hard)', 'circus owner', 'cleric (evil or chaotic)', 'cleric (good or lawful)', 'cleric (rebel or heretic)',
    'clone or simulacrum', 'clown (entertaining)', 'clown (evil)', 'collector (animals)', 'collector (books)', 'collector (insects)', 'collector (magic items)', 'collector (minerals)', 'collector (mundane items)', 'collector (plants)', 'collector (unusual: souls, auras, demons, etc.)', 'commander (secret police)', 'commander (city guard)', 'connoisseur (dangerous experiences)', 'connoisseur (meat)', 'connoisseur (men)', 'connoisseur (music)', 'connoisseur (scents and perfumes)', 'connoisseur (wine)', 'connoisseur (women)', 'conservative', 'contest loser', 'contest winner', 'cook', 'cooper', 'counselor (attorney)', 'counselor (political)', 'counterfeiter', 'courier (documents)', 'courier (gems)', 'courier (illegal substances)', 'courier (political messages)', 'courier (stolen goods)', 'courtesan (high class)', 'courtesan (low class)', 'courtesan (noble)', 'courtesan (witness or has secret)', 'cousin of someone', 'craftsman (general)', 'craftsman (glassblower)', 'craftsman (magical materials)', 'crime boss (cursed)', 'crime boss (second in command)', 'crime boss (taking care of business)', 'crime boss (with personal problems)', 'crime boss (worried)', 'crippled man', 'cutpurse', 'damsel (beautiful and noble)', 'damsel (commoner)', 'damsel (conniving and deceitful)', 'damsel (distressed)', 'damsel (noble birth)', 'damsel (only a disguise)', 'damsel (shockingly ugly)', 'damsel (unchaste)', 'damsel (very intelligent, with a mission)', 'dancer (famous)', 'dancer (salacious)', 'dancer (supernatural capability)', 'deaf-mute', 'defender (of moral virtue)', 'defender (of the peace)', 'defender (of the poor)', 'deity (very minor) in disguise', 'demigod (cursed)', 'demigod (imprisoned)', 'demigod (incorporeal)', 'demonologist', 'dentist', 'dentist (insane)', 'dentist (sinister)', 'deserter (army)', 'deserter (criminal gang)', 'diplomat (any)', 'diplomat (commericial)', 'diplomat (political)', 'disembodied voice', 'doctor (charlatan)', 'doctor (general practice)', 'doctor (mystical)', 'doctor (sinister)', 'doctor (specialist)', 'druid', 'drummer', 'emissary (affairs of the heart)', 'emissary (commercial)', 'emissaraay (false)', 'emissary (political)', 'emissary (religious)', 'emissary (secret)', 'enchanter', 'enchanter (evil)', 'enchanter (insane)', 'enchanter (non-human)', 'enchanter (senile)', 'enchanter (very young)',
    'enchantress (beautiful)', 'enchantress (in love)', 'enchantress (non-human)', 'enchantress (reborn)', 'enchantress (villainous)', 'engineer (aqueducts and water)', 'engineer (castles and temples)', 'engineer (dungeon excavation)', 'engineer (sieges)', 'escapee (monster\'s lair)', 'escapee (prison)', 'escapee (slave camp)', 'escapee (wizard\s lab)', 'executioner', 'executioner (disgraced)', 'executioner (famous)', 'executioner (retired)', 'expert (code breaker)', 'expert(gems)', 'expert(investigator)', 'expert(magical substances)', 'expert(planting rumors)', 'expert(runes)', 'expert(weapons)', 'expert(wilderness tracking)', 'explorer', 'explorer (well known)', 'explorer (with secret knowledge)', 'extortionaist (blackmailer)', 'extortionist (for something other than money)', 'extortionist (magical threats)', 'extorionaist (violent)', 'falconer', 'falconer (unusual birds)', 'farmer (poor)', 'farmer (rich)', 'farmer (with three daughters)', 'father or mother', 'felon (innocent)', 'felon (oppressed)', 'ferryman', 'ferryman (hunchback)', 'filthy peasant', 'fire marshal', 'fisherman (owns boat)', 'fisherman (poor)', 'flower arranger (possibly a monk?)', 'flower-bedecked woman', 'fool (cursed)', 'fool (insane)', 'fool (professional)', 'foreigner (beautiful noblewoman)', 'foreigner (other plane of existence)', 'foreigner (sinister)', 'foreigner (spy)', 'foreigner (stranded)', 'foreigner (with outrageous accent)', 'forester (acorn-grubbing peasant)', 'forester (forest protector)', 'forger (artworks)', 'forger (documents)', 'fortune-teller (annoying doom-prophet)', 'fortune-teller (crone)', 'fortune-teller (fraud)', 'fortune-teller (gypsy)', 'fugitive', 'gambler (deadly games)', 'gambler (notorious cheat)', 'gambler (recent big losses)', 'gambler (recent big winnings)', 'gambler (with lucky charm)', 'gambling den owner', 'ghost (dangerous)', 'ghost (female)', 'ghost (harmless apparition)', 'ghost (unquiet spirit)', 'gladiator (famous)', 'gladiator (slave)', 'gladiatorial trainer', 'glassblower', 'goldsmith (cursed)', 'goldsmith (general)', 'goldsmith (impoverished)', 'goldsmith (rich)', 'goldsmith (skilled)', 'goldsmith (threatened)', 'goldsmith (with rival)', 'governor', 'governor (benevolent)', 'governor (cursed)', 'governor (local)', 'governor (oppressive)', 'governor (with personal problem)', 'grave robber (accused)',
    'grave robber (avaricious)', 'grave robber (necromantic purposes)', 'grave robber (terrified)', 'grave robber (with curse therefrom)', 'grim reaper (yep, no kidding)', 'guardian (archives)', 'guardian (bodyguard)', 'guardian (criminal evidence)', 'guardian (holy book or relic)', 'guardian (of child)', 'guardian (of idea or concept)', 'guardian (of magical item)', 'guardian (of place)', 'guardian (other)', 'guardsman', 'guildman (high ranking)', 'guildmaster (assassin)', 'guildmaster (craft)', 'guildmaster (merchants)', 'guildmaster (profession)', 'guildmaster (thieves)', 'guildsman (loyal and hardworking)', 'guildsman (secret freelancer)', 'gypsy (adventurer)', 'gypsy (beautiful)', 'gypsy (crone)', 'half-breed', 'hangman (loves his job)', 'hangman (retired)', 'hangman (working in his official capacity)', 'harem keeper (cruel)', 'harem keeper (dishonest)', 'harem keeper (dutiful)', 'harem keeper (in his official capacity)', 'harem keeper (justifiably grumpy eunuch)', 'harem keeper (kind)', 'harem owner', 'heir (if someone dies)', 'heir (to a barony)', 'heir (to a fortune)', 'heir (to something interesting)', 'heir (to the throne)', 'heiress (lovable)', 'heiress (of curse)', 'heiress (of hereditary powers)', 'heiress (secret)', 'heiress (sinister)', 'herbalist (with secret knowledge)', 'heretic', 'hester (with political influence)', 'hidden witness', 'historian (ancients and demigods)', 'historian (kings and kingdoms)', 'historian (magic and wizards)', 'historian (of a region)', 'historian (of a single famous person)', 'holy man (fake)', 'holy man (genuine)', 'huntsman (mythical beasts)', 'huntsman (noble)', 'huntsman (people)', 'huntsman (stag and pheasant)', 'illusionist', 'infidel', 'inquisitor (any sort)', 'inquisitor (government)', 'inquisitor (illegal)', 'inquisitor (of powerful temple)', 'investigator (curious amateur)', 'investigator (guild-quality standards)', 'investigator (knows too much)', 'investigator (legitimate)', 'investor (lost money)', 'investor (needs information)', 'investor (suspects funny business)', 'jailor (prison official)', 'jailr (simple turnkey)', 'jester (on the run)', 'jester (sinister)', 'jester (with magical powers)', 'jeweler (workong on a commission)', 'journalist', 'judge (from a past trial)', 'judge (local)', 'judge (of a contest)', 'judge (of a tournament)', 'judge (religious court)',
    'kidnapper (accused but innocent)', 'kidnapper (no longer has victim)', 'kidnapper (still has victim)', 'killer (justified)', 'king (dead)', 'king (dethroned)', 'king (disguised)', 'king (distant foreign realm)', 'king (in hiding)', 'king (in official capacity)', 'king (insane)', 'king (missing)', 'king (of something strange)', 'king\'s body part', 'knave (inconstant in affairs of finance)', 'knave (insonstant in affairs of the heart)', 'knave (inconstant in matters of secrecy)', 'knave (inconstant in matters of truthfulness)', 'knight (cursed)', 'knight (disgraced)', 'knight (evil)', 'knight (paladin)', 'knight (renowned)', 'knight (wandering)', 'lady in waiting (dishonored)', 'lady in waiting (faithful to her lady)', 'lady in waiting (knows terrible secret)', 'lady in waiting (treacherous)', 'landlord (greedy)', 'landlord (under threat of death)', 'landlord (with property problem)', 'lawyer', 'lawyer (carrying out terms of a will)', 'lawyer (for the defense)', 'lawyer (for the prosecution)', 'lawyer (in a civil suit)', 'leader of mob or riots', 'leader of prayer group', 'leader of sting or entrapment operation', 'leader of the autonomous commune', 'leader of the glorious uprising', 'Leader of the pack', 'leader of the posse', 'legislator (corrupt)', 'legislator (getting too close to the truth)', 'legislator (kidnapped)', 'legislator (moral)', 'legislator (radical)', 'legislator (suspicious)', 'legislator (traditionalist)', 'leper (contagious)', 'leper (fake)', 'leper (real)', 'locksmith (accused of crime)', 'locksmith (magical locks)', 'locksmith (skilled)', 'lord', 'lord (of the dance)', 'lord (of the manor)', 'lord (of the skies)', 'lord (of yon great castle)', 'lottery winner', 'love doctor', 'loyal friend of someone', 'madman', 'madman (cyclical madness)', 'madman (dangerous)', 'madman (obsessed)', 'maid', 'maid of honor', 'maiden (abandoned)', 'maiden (chaste)', 'maiden (poor)', 'maiden (rich)', 'maiden (seeking to change that status)', 'majordomo (for wizard)', 'majordomo (great manor)', 'majordomo (large castle of fortress)', 'majordomo (of nobleman\'s city residence)', 'majordomo (small castle)', 'majordomo (small manor)', 'man in strange mask', 'man with red or glowing eyes', 'man with unusual capability', 'man with unusual legs', 'man with unusual pet', 'man with unusual skin', 'man with wooden leg', 'medicine man',
    'member of secret police', 'mercenary (leader)', 'mercenary (soldier)', 'mercenary (wounded)', 'merchant (addictive substances)', 'merchant (caravan member)', 'merchant (caravan owner)', 'merchant (fleet owner)', 'merchant (great)', 'merchant (minor)', 'merchant (ship owner)', 'merchant (silks)', 'merchant (sinister item)', 'merchant (spices)', 'merchant (strange items)', 'merchant (sundry vices)', 'merchant (wine)', 'messenger (commercial)', 'messenger (for military leader)', 'messenger (for wizard)', 'messenger (love affair)', 'messenger (of death)', 'messenger (of deity)', 'messenger (of noble)', 'messenger (of religious leader)', 'messenger (with message for characters)', 'military leader (betrayed)', 'military leader (defeated)', 'military leader (victorious)', 'miller', 'miller (grinds strange or magical substances)', 'miller (with three sons)', 'miller (with unusual cat)', 'mine owner', 'miner (crippled)', 'miner (with secret)', 'minister of defense', 'minister of justice', 'minister of pomp and circumstance', 'minister of the treasury', 'minstrel (poor)', 'minstrel (rich)', 'minstrel (with attendant fans and followers)', 'minstrel (with magic powers or instrument)', 'miser', 'moneylender (victim of a swindle)', 'moneylender (victim of theft)', 'moneylender (with an outstanding debt)', 'monk (European friar)', 'monk (hermit)', 'monk (seeks to avenge dead master)', 'monk (vow of silence)', 'monk\'s severed head, talking, in sandalwood box', 'necromancer', 'noble (cursed)', 'noble (debtor)', 'noble (dishonored)', 'noble (impoverished)', 'noble (in hiding)', 'noble (rich)', 'noble (with disease)', 'noble (with personal problem)', 'noblewoman (lovely)', 'noblewoman (protecting husband)', 'noblewoman (shrewish)', 'nomad (barbarian wanderer)', 'nomad (religious dervish)', 'nomad (savage tribesman)', 'nomad (seeking lost homeland)', 'nomad (semi-civilized herdsman)', 'obvious suspect', 'oddly familiar person', 'operator (gambling den)', 'operator (public baths)', 'operator (scams)', 'opium den owner', 'orchard owner', 'organizer (coronation)', 'organizer (festival)', 'organizer (important wedding)', 'organizer (labor)', 'organizer (political)', 'organizer (religious)', 'outlaw (hunted)', 'outlaw (repentant)', 'outlaw (secret)', 'outlaw (suspected)', 'outlaw (violated taboo)', 'outlaw (working in his job capacity)', 'outraged father',
    'outraged purchaser', 'owner of dangerous property', 'owner of magic item', 'panderer (discreet servant of the nobility)', 'panderer (outlandish garb and manner)', 'panderer (slave owner)', 'pardoner (fake political pardons)', 'pardoner (fraud)', 'pardoner (real criminal pardons for sale)', 'pardoner (pardons have actual effect)', 'partner (in crime)', 'partner (in love)', 'partner in a business', 'patron (of arts)', 'patron (of temple)', 'peasant (farmer)', 'peasant (oppressed)', 'peasant (revolting)', 'peasant (shepherd)', 'peasant (wealthy)', 'performer (biting satire)', 'performer (deadly stunts)', 'performer (feats of memory and observation)', 'perfumer (discredited)', 'perfumer (rich)', 'perfumer (with rival)', 'perfumer (with secret)', 'person of ancient ancestry', 'person of evil ancestry', 'person pure of blood', 'person who changes size', 'person who counted votes for an election', 'person who hears a voice', 'person who returned from a mysterious journey', 'person who returned from the dead', 'person with no apparent face', 'pickpocket', 'pikeman (city guard)', 'pikeman (mercenary)', 'pikeman (unemployed)', 'pilgrim (disguised)', 'pilgrim (false)', 'pilgrim (seeking absolution)', 'pilgrim (seeking better luck)', 'pilgrim (seeking vengeance)', 'pirate (aerial)', 'pirate (captain)', 'pirate (first mate)', 'pirate (in hiding)', 'pirate (sailor)', 'plowman', 'poacher (noble huntsman)', 'poacher (starving peasant)', 'poet (heroic verse)', 'poet (impoverished)', 'poet (insane)', 'poet (lovelorn)', 'poet (satire)', 'poisoner (amateur)', 'poisoner (unemployed)', 'poisoner (working)', 'police authority (guild\'s police)', 'police authority (illegal police)', 'police authority (informal police)', 'police authority (military police)', 'police authority (public police)', 'police authority (vigilanted)', 'polluter (food)', 'polluter (water)', 'poseur (as celebrity)', 'poseur (as guild official)', 'poseur (as military leader)', 'poseur (as political personage)', 'poseur (as religious personage)', 'possessed person', 'potential witness', 'potential witness (financial crime)', 'potential witness (political)', 'potential witness (religious)', 'potion maker', 'preacher (anti-estblishment, political)', 'preacher (new cult)', 'preacher (pro-government)', 'preacher (return to old ways)', 'preacher (sees visions)',
    'preacher (social reformer)', 'priest (defrocked)', 'priest (general)', 'priest (self-sacrificing)', 'priest (sinful)', 'priest (with secret past)', 'priestess (accessible)', 'priestess (inaccessible)', 'priestess (oracle)', 'priestess (saintly)', 'prince (deposed)', 'prince (evil)', 'prince (foolish)', 'prince (general)', 'prince (minor)', 'prince (unworthy)', 'prince (younger son)', 'princess (has lost important item)', 'princess (imprisoned)', 'princess (intriguing for power)', 'princess (kidnapped for marriage)', 'princess (kidnapped for arson)', 'princess (threatened with death)', 'prisoner (guilty)', 'prisoner (innocent)', 'prisoner (secretly held)', 'progidal son (greedy)', 'prodigal son (repentant)', 'professor', 'prophet (accurate)', 'prophet (dangerous)', 'prophet (deranged)', 'prophet (false)', 'prophet (heretical)', 'prostitute (cultist)', 'prostitute (larcenous)', 'prostitute (vengeful)', 'prostitute (heart of gold)', 'racketeer (extortion)', 'racketeer (high finance)', 'racketeer (shipping)', 'ranger', 'ratcatcher', 'rebel (against criminal organization)', 'rebel (political)', 'rebel (religious)', 'rebel (without a particular cause)', 'recipient of strange challenge', 'reeve', 'refugee (from bad event)', 'refugee (from combat)', 'reluctant witness', 'revolutionary', 'rival (bidder)', 'rival (guild)', 'rival (in love affair)', 'rival (merchant)', 'rival (noble)', 'rival (of the party)', 'rival (poet or artist)', 'rival (wizards)', 'royalist', 'rumormonger', 'rumormonger (punished)', 'rumormonger (suspected)', 'rune-scriber', 'sage (astrology)', 'sage (history)', 'sage (magic)', 'sage (mathematics and science)', 'sage (nature)', 'sage (philosopher)', 'sage (religious lore)', 'sailor', 'savage (curious)', 'savage (dangerous)', 'scholar (history)', 'scholar (magic)', 'scholar (natural phenomena)', 'scholar (religious lore)', 'scribe', 'servant (in tavern of inn)', 'servnat (of assassin)', 'servant (of merchant)', 'servant (of military leader)', 'servant (of noble)', 'servant (of priest)', 'servant (of sage)', 'servant (of wizard)', 'shepherd', 'sheriff (corrupt)', 'sheriff (dutiful)', 'sheriff (rural)', 'sheriff (sinister)', 'sheriff (with personal problems)', 'shoemaker (poor)', 'shoemaker (rich)', 'sin eater', 'singer (any sort)', 'singer (cursed)', 'singer (famous)', 'slave (escaped)', 'slave (in general)', 'slaver (specific females)',
    'slaver (specific professionals)', 'slaver (specific race)', 'slaver (works on commission)', 'son or daughter', 'sorcerer (de-magicked)', 'sorcerer (political aspirations)', 'sorcerer (power in amulet)', 'sorcerer (power in familiar)', 'sorcerer (power in fingernails)', 'sorcerer (power in hair)', 'sorcerer (powerful)', 'sorcerer (transformed)', 'sorcerer (weak)', 'speaker for the ancients', 'speaker of foreign language', 'speaker of the dead', 'speaker of the gods', 'speaker of the king', 'spy (for criminal network)', 'spy (for guild or merchant)', 'spy (for noble)', 'spy (for suspicious spouse)', 'spy (for the man)', 'spy (for the priesthood)', 'spy (for wizard)', 'squire (for haughty knight)', 'squire (for missing or kidnapped knight)', 'squire (for poor knight)', 'squire (of dead knight)', 'steward (for a wizard)', 'steward (great manor)', 'large castle)', 'steward (noble\'s city residence)', 'steward (small castle)', 'steward (small manor)', 'stonemason (general)', 'stonemason (knows where something is hidden in the walls)', 'strumpet (married to noble)', 'strumpet (tavern wench)', 'strumpet (thieves\' wench)', 'student', 'subject of a recent prophesy', 'subject of an ancient prophesy (apparently)', 'subject of the inquisition', 'subterranean citizen', 'survivor (assassination attempt)', 'survivor (dungeon expedition)', 'survivor (wilderness expedition)', 'survivor (with dangerous secret)', 'suspected witness', 'swindler (accused)', 'swindler (suspected)', 'swindler (working on scam)', 'swordsman', 'swordsman (duelist)', 'swordsman (legendary)', 'swordsman (mercenary)', 'swordsman (old)', 'swordsmith (discredited)', 'swordsmith (famous)', 'swordsmith (skilled)', 'swordsmith (with a family problem)', 'tailor (poor)', 'tailor (to the nobility)', 'tavern owner', 'tax collector (embezzler)', 'tax collector (oppressive bully)', 'tax collector (working at his job)', 'taxidermist (strange beasts)', 'teamster (camel driver)', 'teamster (caravan leader)', 'teamster (regular wagon driver)', 'teamster (strange beasts of burden)', 'teamster (stranger wagons)', 'the half-a-man', 'theater owner', 'thief (convicted)', 'thief (freelance)', 'thief (guild member)', 'thief (guild master)', 'thief (retired)', 'thief (strange series of items)', 'toll bridge owner', 'toll road operator', 'town drunk', 'trader (cattle)', 'trader (furs)', 'trader (horses)',
    'trader (scrolls and books)', 'trader (strange items and oddments)', 'traditionalist', 'traitor (religious)', 'traitor (secret society)', 'traitor (to city)', 'traitor (to guild)', 'trapper (furs)', 'trapper (live animals)', 'traveler (normal)', 'traveler (of planes and strange dimensions)', 'traveler (stranded)', 'traveler (with rumors or news)', 'trustee (building)', 'trustee (item)', 'trustee (land)', 'trustee (money)', 'twin', 'two-headed man', 'unbelievably lucky person', 'unbelievably unlucky person', 'uncle or aunt of (roll again)', 'undertaker', 'unknown victim', 'unwilling witness', 'usurper (criminal)', 'usurper (guild)', 'usurper (political)', 'usurper (religious)', 'vampire', 'vandal (unintentional)', 'veiled woman', 'vendor (elixirs)', 'vendor (food)', 'vendor (religious charms)', 'vendor (shrunken heads)', 'vengeful eunuch', 'victim (assault)', 'victim (counterfeit)', 'victim (kidnap)', 'victim (murder)', 'victim (of rumors)', 'victim (of slander)', 'victim (of theft)', 'vigilante (against crime)', 'vigilante (political faction)', 'vigilante (religious)', 'viking', 'vintner (awful wine)', 'vintner (fine wines)', 'voodoo priest or practitioner', 'wagoner', 'wanderer', 'warden (prisoner has escaped)', 'warden (with prisoner)', 'warlock (dead)', 'warlock (disembodied)', 'warlock (suspicious)', 'warlock (with rival)', 'warlock (with secret agenda)', 'weaver (oppressed)', 'weaver (rich)', 'widow or widower of (roll again)', 'wife or husband of (roll again)', 'witch (accused)', 'witch (crone)', 'witch (working on a task)', 'witch (young and beautiful)', 'witch doctor', 'wizard (cursed)', 'wizard (engaged in research)', 'wizard (enslaved)', 'wizard (flamboyant)', 'wizard (powerful)', 'wizard (sinister)', 'wizard (weak or defeated)', 'wizard (with person crisis)', 'wizard (working on a commissioned task)', 'woman in feathery cloak', 'woman with dancing bear', 'woman with snake eyes', 'woodcutter', 'zealot (political)', 'zealot (religious)', 'zoo owner'];
    
    
    var patronOrTargetArrayLength = patronOrTargetArray.length;
    var patronRand = Math.floor(Math.random()*patronOrTargetArrayLength);
    var secondaryPersonRand = Math.floor(Math.random()*patronOrTargetArray.length);
    var targetRand = Math.floor(Math.random()*patronOrTargetArrayLength);

    var patron = patronOrTargetArray[patronRand];
    var target = patronOrTargetArray[targetRand];
    var secondaryPerson = patronOrTargetArray[secondaryPersonRand];

    var patronMotiveArray = ['cause dishonor for', 'defeat', 'escape from', 'friendship with', 'gain knowledge about (or on behalf of)', 'gain status over', 'gain status with', 'lust for', 'protect livelihood of (or from)', 'protect reputation of (or from)', 'protect wealth of (or from)', 'recociliation with', 'regain favor with', 'regain honor stolen by', 'removal of (by death)', 'removal of (kidnapping)', 'rescue', 'revenge upon (or on behalf of)', 'self-protection from', 'steal from'];
    var patronObjectObstacleArray = ['ancestral enemy', 'business partner', 'business rival', 'concubine', 'detective, investigator, or one who asks too many questions', 'employer', 'former compatriot', 'former employee', 'friend', 'guild or business association', 'offspring', 'parent', 'political compatriot', 'political leader', 'political or justice official', 'religious compatriot', 'spiritual leader', 'spouse', 'temple official', 'temple or religious society'];
    
    var patronMotiveArrayLength = patronMotiveArray.length;
    var patronObjectObstacleArrayLength = patronObjectObstacleArray.length;
    var patronMotiveRand = Math.floor(Math.random()*patronMotiveArrayLength);
    var patronObjectObstacleRand = Math.floor(Math.random()*patronObjectObstacleArrayLength);

    var patronMotive = patronMotiveArray[patronMotiveRand];
    var patronObjectObstacle = patronObjectObstacleArray[patronObjectObstacleRand];

    /*PLAYERS AND MOTIVATIONS */
    var playerMotiveArray = ['ability to move inconspicuously in certain groups or places', 'additional form of movement: swim or breathe water, fly, telepory, etc.', 'better equipment (possibly magical)', 'bonuses to saving throws under certain circumstances', 'cure disease', 'enhanced ability to cast spells', 'enhanced ability to see or hear', 'gain experience points or levels', 'gain forgiveness or pardons for prior actions', 'gain hit points', 'improve physical appearance', 'improve initiative', 'rate of attacks or speed of actions', 'improvement in movement rate', 'improvement or bonus to class ability (turning undead, picking locks, etc.)', 'increased strength of other ability score', 'learn additional language', 'money', 'noble status or improved social status', 'permit travel (casting of teleport, creation of planar gate, opening of dimensional gateway, etc.)', 'permit travel (required documents, safe-passage, etc.)', 'provide needed equipment', 'receive useful information', 'remove a curse (or other problem lingering from a prior adventure)', 'reverse aging', 'to-hit or damage bonus in certain circumstaces'];
    var questInitArray = ['a person offers to trade information about the opportunity in exchange for money', 'a person offers to trade information about the opportunity in exchange for money', 'dream or vision suggests the opportunity in symbols and metaphors', 'friend, relative, or mentor of a character informs party of the opportunity', 'inquiries in taverns lead to a rumor of this potential opportunity', 'inquiries in taverns lead to a rumor of this potential opportunity', 'inquiries in taverns lead to a rumor of this potential opportunity', 'legends or prophecies suggest the opportunity', 'letter or message is intercepted by the players (possibly due to mistaken identity, possibly overheard)', 'letter or message is sent to characters', 'potential employer contacts party to offer the opportunity', 'potential employer contacts party to offer the opportunity', 'potential employer contacts party to offer the opportunity', 'potential employer contacts party to offer the opportunity', 'potential employer contacts party to offer the opportunity', 'potential employer contacts party to offer the opportunity', 'potential employer contacts party to offer the opportunity', 'potential employer contacts party to offer the opportunity', 'potential employer has posted signs with some details of the opportunity', 'potential employer has posted signs with some details of the opportunity', 'recently arrived people bring back word of the opportunity', 'rumors are floating around with some details of the opportunity', 'rumors are floating around with some details of the opportunity', 'sent dream suggests the opportunity in clear terms, but without revealing who sent the dream or why'];

    var playerMotiveArrayLength = playerMotiveArray.length;
    var questInitArrayLength = questInitArray.length;
    var playerMotiveRand = Math.floor(Math.random()*playerMotiveArrayLength);
    var questInitRand = Math.floor(Math.random()*questInitArrayLength);

    var playerMotive = playerMotiveArray[playerMotiveRand];
    var questInit = questInitArray[questInitRand];

    /* MISSIONS */
    var indivMission = ['bribe or negotiate with ', 'bring message to location of ', 'capture or arrest', 'conceal/Smuggle', 'deliver/Transport', 'discover identity of', 'distract, decoy, or deceive', 'entrap or sting', 'extort from', 'find missing', 'get help from', 'guard/protect', 'incriminate or frame', 'kidnap', 'kill/assassinate', 'rescue', 'sabotage efforts of', 'spy upon', 'steal item from', 'waylay'];
    var indivSubject = ['adventurer(s)', 'agent or diplomat', 'cleric or religious leader', 'criminal/outlaw', 'intelligent monster', 'local noble', 'magic-user', 'messenger', 'saboteur', 'secret agent or spy', target, target, target, target, target, target, target, target, target, target];

    var itemMission = ['attack to obtain', 'conceal', 'defend', 'deliver or transport', 'destroy', 'fake existence of', 'find or locate', 'guard or protect', 'hide', 'hijack', 'prevent delivery of', 'prevent sabotage of', 'raid to obtain', 'retake or repossess', 'sabotage', 'salvage from dangerous place', 'smuggle', 'steal from within location', 'steal while in transit', 'swap fake imitation of'];
    var itemSubject = ['body or corpse', 'cargo', 'cattle or livestock', 'clue', 'evidence of crime', 'evidence of innocence', 'gold or jewelery', 'magic item', 'map', 'message or letter', 'monster', 'mysterious sealed container', 'ownership documents', 'religious item', 'ship', 'statue or idol', 'symbol of authority', 'unusual animal (familiar, mascot, pet, prize cow, etc.)', 'vehicles with cargo', 'weapon (siege engine, famous sword, etc.)']

    var locMission = ['assault', 'assault', 'break siege of', 'capture and hold', 'defend from attack', 'defend from attack', 'destroy', 'escape from', 'explore', 'find or locate', 'get supplies to', 'infiltrate and control', 'infiltrate and spy on', 'liberate', 'locate intruder/spy', 'loot', 'loot', 'protect from infiltration', 'reinforce', 'rescue hostages from', 'rescue hostages from', 'retake', 'secretly return something to', 'stage raid upon', 'stage raid upon'];
    var locSubject = ['archaeological dig', 'caravan', 'castle', 'caves', 'cottage', 'dungeon', 'encampment', 'extra-planar area', 'flying structure', 'flying vehicle', 'forest', 'fort', 'fortified building or manor', 'grove', 'oasis', 'prison', 'ruins', 'ship', 'stockade', 'swamp', 'tavern', 'temple', 'village', 'warehouse', 'wharfs or docks'];

    var eventMission = ['destroy results of', 'escape from', 'solve bizarre mystery arising from', 'expose someone involved in', 'expose someone involved in', 'hide evidence of what really happened in a recent', 'infiltrate group involved in', 'infiltrate group involved in', 'investigate events of a recent', 'investigate events of an ancient', 'lead or coordinate', 'plan and execute', 'prevent', 'prevent', 'protect someone involved in', 'protect someone involved in', 'sabotage', 'survive or overcome', 'survive or overcome', 'take leadership in'];
    var eventSubject = ['archaeological dig', 'arena of gladiatorial battle', 'arrest or trial', 'assassination', 'cattle drive through a dangerous area', 'coronation or transfer of power', 'coup d\'etat or rebellion', 'criminal conspiracy', 'disruption of ceremony', 'duel', 'execution or imprisonment', 'exploration/mapping expedition', 'furtive, stealthy raid', 'military assault', 'murder or attempted murder', 'natural disaster', 'swindle', 'theft', 'trailblazing attempt into new area', 'treason and aftermath'];

    /* THE LENGTH OF THE MISSION ARRAYS - build awkwardly, but it allows for the addition of new elements into any array without messing anything else up*/
    var indivMissLength = indivMission.length;
    var indivSubLength = indivSubject.length;
    var indivMissRand = Math.floor(Math.random()*(indivMissLength));
    var indivSubRand = Math.floor(Math.random()*(indivSubLength));

    var itemMissLength = itemMission.length;
    var itemSubLength = itemSubject.length;
    var itemMissRand = Math.floor(Math.random()*(itemMissLength));
    var itemSubRand = Math.floor(Math.random()*(itemSubLength));

    var locMissLength = locMission.length;
    var locSubLength = locSubject.length;
    var locMissRand = Math.floor(Math.random()*(locMissLength));
    var locSubRand = Math.floor(Math.random()*(locSubLength));

    var eventMissLength = eventMission.length;
    var eventSubLength = eventSubject.length;
    var eventMissRand = Math.floor(Math.random()*(eventMissLength));
    var eventSubRand = Math.floor(Math.random()*(eventSubLength));


    switch (tableSelected) {
        case "individual-based":
            var mission = indivMission[indivMissRand];
            var object = indivSubject[indivSubRand];
        break;

        case "item-based":
            var mission = itemMission[itemMissRand];
            var object = itemSubject[itemSubRand];
        break;

        case "location-based":
            var mission = locMission[locMissRand];
            var object = locSubject[locSubRand];
        break;

        case "event-based":
            var mission = eventMission[eventMissRand];
            var object = eventSubject[eventSubRand];
        break;

        case "random":
            missionTypeRand = Math.floor(Math.random()*4);
            if (missionTypeRand === 0) {
                var mission = indivMission[indivMissRand];
                var object = indivSubject[indivSubRand];
            } else if (missionTypeRand === 1) {
                var mission = itemMission[itemMissRand];
                var object = itemSubject[itemSubRand];
            } else if (missionTypeRand === 2) {
                var mission = locMission[locMissRand];
                var object = locSubject[locSubRand];
            } else if (missionTypeRand === 3) {
                var mission = eventMission[eventMissRand];
                var object = eventSubject[eventSubRand];
            } else {
                var mission = 'NOT WORKING';
                var object = 'NOT WORKING';
            }
        break;
    }

    
    let missionDetails = `The players have been hired by a(n) ${patron} who wants them to ${mission} a(n) ${object}. The patron is motivated by a desire to ${patronMotive} a(n) ${patronObjectObstacle}. The players found out about the quest from ${questInit} and have accepted because of ${playerMotive}`;
    document.getElementById("missionText").innerText = missionDetails;
}   