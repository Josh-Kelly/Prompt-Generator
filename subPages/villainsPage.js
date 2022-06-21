
let plot;


function determineGender() {
        /* DETERMINES THE GENDER OF THE VILLAIN */

        const genderRand = Math.floor(Math.random()*2);
        const nomPronounMale = `he`;
        const accPronounMale = `him`;
        const genPronounMale = `his`;

        const nomPronounFemale = `she`;
        const accPronounFemale = `her`;
        const genPronounFemale = `her`;

        if (genderRand === 0) {
                nomPronoun = nomPronounMale;
                accPronoun = accPronounMale;
                genPronoun = genPronounMale;
        } else if (genderRand === 1) {
                nomPronoun = nomPronounFemale;
                accPronoun = accPronounFemale;
                genPronoun = genPronounFemale;
        } else {
                nomPronoun = `GENDER NOT WORKING!`;
                accPronoun = `GENDER NOT WORKING!`;
                genPronoun = `GENDER NOT WORKING`;
        }

        return [nomPronoun, accPronoun, genPronoun];
}


function displayPlotType() {
        /* Deletes previous content of the main <div> */
        const clearPreviousPlotType = document.getElementById(`plotTypeDisplayArea`);
        if (clearPreviousPlotType) {
                document.body.removeChild(clearPreviousPlotType);
        }
        const previousConvertButton = document.getElementById(`newConvertPlot!`);
        if (previousConvertButton) {
                document.body.removeChild(previousConvertButton);
        }
        const previousConcealButton = document.getElementById(`newConcealPlot!`);
        if (previousConcealButton) {
                document.body.removeChild(previousConcealButton);
        }
        const previousDesecrationButton = document.getElementById(`newDesecrationPlot!`);
        if (previousDesecrationButton) {
                document.body.removeChild(previousDesecrationButton);
        }
        const previousDestroyCommunityButton = document.getElementById(`newDestroyCommunityPlot!`);
        if (previousDestroyCommunityButton) {
                document.body.removeChild(previousDestroyCommunityButton);
        }
        const previousDestroyGoodButton = document.getElementById(`newDestroyGoodPlot!`);
        if (previousDestroyGoodButton) {
                document.body.removeChild(previousDestroyGoodButton);
        }
        const previousEconomicPowerButton = document.getElementById(`newEconomicPowerPlot!`);
        if (previousEconomicPowerButton) {
                document.body.removeChild(previousEconomicPowerButton);
        }
        const previousCatastropheButton = document.getElementById(`newCatastrophePlot!`);
        if (previousCatastropheButton) {
                document.body.removeChild(previousCatastropheButton);
        }
        const previousFoodButton = document.getElementById(`newFoodPlot!`);
        if (previousFoodButton) {
                document.body.removeChild(previousFoodButton);
        }
        const previousGainFavorButton = document.getElementById(`newGainFavorPlot!`);
        if (previousGainFavorButton) {
                document.body.removeChild(previousGainFavorButton);
        }
        const increasePersonalButton = document.getElementById(`newIncreasePersonalPlot!`);
        if (increasePersonalButton) {
                document.body.removeChild(increasePersonalButton);
        }
        const gainPoliticalButton = document.getElementById(`newGainPoliticalPlot!`);
        if (gainPoliticalButton) {
                document.body.removeChild(gainPoliticalButton);
        }
        const randomActsButton = document.getElementById(`newRandomActsPlot!`);
        if (randomActsButton) {
                document.body.removeChild(randomActsButton);
        }
        const reputationButton = document.getElementById(`newReputationPlot!`);
        if (reputationButton) {
                document.body.removeChild(reputationButton);
        }
        const subversionButton = document.getElementById(`newSubversionPlot!`);
        if (subversionButton) {
                document.body.removeChild(subversionButton);
        }
        const supportEvilButton = document.getElementById(`newSupportEvilPlot!`);
        if (supportEvilButton) {
                document.body.removeChild(supportEvilButton);
        }
        
        determineGender(); /* Runs the function that randomly determines the gender of the villain */


        /* PLOT TYPE VARIABLES TABLE 1-11 pg. 27 */
        const concealment = `The villain is trying to conceal ${accPronoun}self, to conceal ${genPronoun} past acts, conceal ${genPronoun} organization, conceal evidence, etc.`;
        const conversion = `The villain is trying to convert others to ${genPronoun} way of thinking (as opposed to subversion, which involved using them without changing their minds)`;
        const desecration = `The villain seeks to desecrate a location, an item, or an event (desecration could be targeted on religion or against a tradition).`;
        const destroyCommunity = `The villain is trying to kill, economically destroy, or otherwise irreparably damage a particular community (possibly a sub-community or organization). ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} could have various motives, ranging from annoyance to following the orders of a greater villain.`;
        const destroyGoodAlignedGroup = `The villain seeks to destroy the good-aligned group, either because their morals offend ${accPronoun}, or as the first step in a larger plan.`;
        const economicPower = `The villain is working on gaining wealth, either as an end in itself or to fund the next step in a larger plan.`;
        const evokeCatastrophicEvent = `The villain is trying to set off a natural, magical, psychic, or political disaster. This might be an end in itself, or the first step in some other plan.`;
        const food = `The villain seeks to get food for ${accPronoun}self, a monster, or for ${genPronoun} organization. Basic subsistence is the primary goal of many lesser villains, while reliable food sources for minions can be the objective of more powerful leaders.`;
        const gainFavorOfOtherVillain = `The villain wants to impress someone. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} might be trying to impress ${genPronoun} boss, trying to gain an ally, or showing someone that ${nomPronoun}\`s worthy of employment as a minion.`;
        const increasePersonalCapability = `The villain is trying to increase ${genPronoun} inherent person power. This might include gaining levels of experience, useful information, magic items, etc.`;
        const politicalPower = `The villain seeks to gain direct or indirect political power at some level of government.`;
        const randomActs = `The villain acts randomly in villainous ways.`;
        const reputation = `The villain is trying to enhance ${genPronoun} own reputation, either as an invincible villain or as a good person (which would be an infiltration tactic).`;
        const subversionToVillainsPurpose = `The villain is trying to mislead people into supporting ${genPronoun} nefarious enterprises`;
        const supportEvilGroupSecretly = `The villain is working behind the scenes to help other evil groups.`;

        const plotTypeArray = [concealment, conversion, desecration, destroyCommunity, destroyGoodAlignedGroup, economicPower, evokeCatastrophicEvent, food, gainFavorOfOtherVillain, increasePersonalCapability, politicalPower, randomActs, reputation, subversionToVillainsPurpose, supportEvilGroupSecretly];
        const plotTypeRand = Math.floor(Math.random()*plotTypeArray.length);

        let plotType = plotTypeArray[plotTypeRand];

        if (plotType === `The villain is trying to conceal ${accPronoun}self, to conceal ${genPronoun} past acts, conceal ${genPronoun} organization, conceal evidence, etc.`) {
                let buttonConceal = document.createElement(`button`);
                buttonConceal.id = `newConcealPlot!`;
                buttonConceal.setAttribute(`onclick`, `displayConcealPlot()`);
                buttonConceal.setAttribute(`class`, `secondaryButton`);
                buttonConceal.innerText = `Get new conceal plot!`;
                document.body.appendChild(buttonConceal);
        } else if (plotType === `The villain is trying to convert others to ${genPronoun} way of thinking (as opposed to subversion, which involved using them without changing their minds)`) {
                let buttonConvert = document.createElement(`button`);
                buttonConvert.id = `newConvertPlot!`;
                buttonConvert.setAttribute(`onclick`, `displayConvertPlot()`);
                buttonConvert.setAttribute(`class`, `secondaryButton`);
                buttonConvert.innerText = `Get new conversion plot!`;
                document.body.appendChild(buttonConvert);
        } else if (plotType === `The villain seeks to desecrate a location, an item, or an event (desecration could be targeted on religion or against a tradition).`) {
                let buttonDesecrate = document.createElement(`button`);
                buttonDesecrate.id = `newDesecrationPlot!`;
                buttonDesecrate.setAttribute(`onclick`, `displayDesecrationPlot()`);
                buttonDesecrate.setAttribute(`class`, `secondaryButton`);
                buttonDesecrate.innerText = `Get new desecration plot!`;
                document.body.appendChild(buttonDesecrate);
        } else if (plotType === `The villain is trying to kill, economically destroy, or otherwise irreparably damage a particular community (possibly a sub-community or organization). ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} could have various motives, ranging from annoyance to following the orders of a greater villain.`) {
                let buttonDestroyCommunity = document.createElement(`button`);
                buttonDestroyCommunity.id = `newDestroyCommunityPlot!`;
                buttonDestroyCommunity.setAttribute(`onclick`, `displayDestroyCommunityPlot()`);
                buttonDestroyCommunity.setAttribute(`class`, `secondaryButton`);
                buttonDestroyCommunity.innerText = `Get new destroy community plot!`;
                document.body.appendChild(buttonDestroyCommunity);
        } else if (plotType === `The villain seeks to destroy the good-aligned group, either because their morals offend ${accPronoun}, or as the first step in a larger plan.`) {
                let buttonDestroyGood = document.createElement(`button`);
                buttonDestroyGood.id = `newDestroyGoodPlot!`;
                buttonDestroyGood.setAttribute(`onclick`, `displayDestroyGoodPlot()`);
                buttonDestroyGood.setAttribute(`class`, `secondaryButton`);
                buttonDestroyGood.innerText = `Get new destroy Good-aligned group plot!`;
                document.body.appendChild(buttonDestroyGood);
        } else if (plotType === `The villain is working on gaining wealth, either as an end in itself or to fund the next step in a larger plan.`) {
                let buttonEconomicPower = document.createElement(`button`);
                buttonEconomicPower.id = `newEconomicPowerPlot!`;
                buttonEconomicPower.setAttribute(`onclick`, `displayEconomicPowerPlot()`);
                buttonEconomicPower.setAttribute(`class`, `secondaryButton`);
                buttonEconomicPower.innerText = `Get new economic power plot!`;
                document.body.appendChild(buttonEconomicPower);
        } else if (plotType === `The villain is trying to set off a natural, magical, psychic, or political disaster. This might be an end in itself, or the first step in some other plan.`) {
                let buttonCatastrophe = document.createElement(`button`);
                buttonCatastrophe.id = `newCatastrophePlot!`;
                buttonCatastrophe.setAttribute(`onclick`, `displayCatastrophePlot()`);
                buttonCatastrophe.setAttribute(`class`, `secondaryButton`);
                buttonCatastrophe.innerText = `Evoke new catastrophic plot!`;
                document.body.appendChild(buttonCatastrophe);
        } else if (plotType === `The villain seeks to get food for ${accPronoun}self, a monster, or for ${genPronoun} organization. Basic subsistence is the primary goal of many lesser villains, while reliable food sources for minions can be the objective of more powerful leaders.`) {
                let buttonFood = document.createElement(`button`);
                buttonFood.id = `newFoodPlot!`;
                buttonFood.setAttribute(`onclick`, `displayFoodPlot()`);
                buttonFood.setAttribute(`class`, `secondaryButton`);
                buttonFood.innerText = `Get new food plot!`;
                document.body.appendChild(buttonFood);
        } else if (plotType === `The villain wants to impress someone. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} might be trying to impress ${genPronoun} boss, trying to gain an ally, or showing someone that ${nomPronoun}\`s worthy of employment as a minion.`) {
                let buttonGainFavor = document.createElement(`button`);
                buttonGainFavor.id = `newGainFavorPlot!`;
                buttonGainFavor.setAttribute(`onclick`, `displayGainFavorPlot()`);
                buttonGainFavor.setAttribute(`class`, `secondaryButton`);
                buttonGainFavor.innerText = `Get new gain favor plot!`;
                document.body.appendChild(buttonGainFavor);
        } else if (plotType === `The villain is trying to increase ${genPronoun} inherent person power. This might include gaining levels of experience, useful information, magic items, etc.`) {
                let buttonIncreasePersonal = document.createElement(`button`);
                buttonIncreasePersonal.id = `newIncreasePersonalPlot!`;
                buttonIncreasePersonal.setAttribute(`onclick`, `displayIncreasePersonalPlot()`);
                buttonIncreasePersonal.setAttribute(`class`, `secondaryButton`);
                buttonIncreasePersonal.innerText = `Get new increase personal capability plot!`;
                document.body.appendChild(buttonIncreasePersonal);
        } else if (plotType === `The villain seeks to gain direct or indirect political power at some level of government.`) {
                let buttonGainPolitical = document.createElement(`button`);
                buttonGainPolitical.id = `newGainPoliticalPlot!`;
                buttonGainPolitical.setAttribute(`onclick`, `displayGainPoliticalPlot()`);
                buttonGainPolitical.setAttribute(`class`, `secondaryButton`);
                buttonGainPolitical.innerText = `Get new gain political power plot!`;
                document.body.appendChild(buttonGainPolitical);
        } else if (plotType === `The villain acts randomly in villainous ways.`) {
                let buttonRandomActs = document.createElement(`button`);
                buttonRandomActs.id = `newRandomActsPlot!`;
                buttonRandomActs.setAttribute(`onclick`, `displayRandomActsPlot()`);
                buttonRandomActs.setAttribute(`class`, `secondaryButton`);
                buttonRandomActs.innerText = `Get new random acts plot!`;
                document.body.appendChild(buttonRandomActs);
        } else if (plotType === `The villain is trying to enhance ${genPronoun} own reputation, either as an invincible villain or as a good person (which would be an infiltration tactic).`) {
                let buttonReputation = document.createElement(`button`);
                buttonReputation.id = `newReputationPlot!`;
                buttonReputation.setAttribute(`onclick`, `displayReputationPlot()`);
                buttonReputation.setAttribute(`class`, `secondaryButton`);
                buttonReputation.innerText = `Get new reputation plot!`;
                document.body.appendChild(buttonReputation);
        } else if (plotType === `The villain is trying to mislead people into supporting ${genPronoun} nefarious enterprises`) {
                let buttonSubversion = document.createElement(`button`);
                buttonSubversion.id = `newSubversionPlot!`;
                buttonSubversion.setAttribute(`onclick`, `displaySubversionPlot()`);
                buttonSubversion.setAttribute(`class`, `secondaryButton`);
                buttonSubversion.innerText = `Get new subversion plot!`;
                document.body.appendChild(buttonSubversion);
        } else if (plotType === `The villain is working behind the scenes to help other evil groups.`) {
                let buttonSupportEvil = document.createElement(`button`);
                buttonSupportEvil.id = `newSupportEvilPlot!`;
                buttonSupportEvil.setAttribute(`onclick`, `displaySupportEvilPlot()`);
                buttonSupportEvil.setAttribute(`class`, `secondaryButton`);
                buttonSupportEvil.innerText = `Get new support evil plot!`;
                document.body.appendChild(buttonSupportEvil);
        }

        /* Creates a div with an ID of `plotTypeDisplayArea` and appends it to the body element */

        let plotTypeDisplayArea = document.createElement(`div`);
        plotTypeDisplayArea.id = `plotTypeDisplayArea`;
        document.body.appendChild(plotTypeDisplayArea);

        /* Crease a p element with an ID of `plotTypeDisplay` and assigns its innerHTML to the text of the plotType variable */
        let plotTypeDisplay = document.createElement(`p`);
        plotTypeDisplay.id = `plotTypeDisplay`;
        plotTypeDisplay.innerHTML = plotType;

        /* Clears the plotTypeDisplayArea div`s innerHTML and then appends the newest plotType variable text as the new innerHTML */
        document.getElementById(`plotTypeDisplayArea`).appendChild(plotTypeDisplay);

}

function displayConcealPlot() {
        const previousConcealFrom = document.getElementById(`concealPlotFromDisplay`);
        const previousConcealMethod = document.getElementById(`concealPlotMethodDisplay`);
        if (previousConcealFrom) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousConcealFrom);
        }

        if (previousConcealMethod) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousConcealMethod);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;
        if (plot === `The villain is trying to conceal ${accPronoun}self, to conceal ${genPronoun} past acts, conceal ${genPronoun} organization, conceal evidence, etc.`) {
                const methodAssassination = `by targeting anyone who could identify ${accPronoun} from past identity ${nomPronoun} wants to keep secret, or is killing those who know about ${genPronoun} plans. In other words, the villain might be trying to conceal ${accPronoun}self or ${genPronoun} activities; these aren\`t always the same. A villain engaged in secret activities might be completely certain ${nomPronoun} can\`t be identified, but still worried that ${genPronoun} plot could be uncovered. Assassinations might be the last resort when a villainous plot is already starting to fall apart. The villain\`s minions might be ${genPronoun} targets, too, if things have gone badly and the villain is concealing ${genPronoun} tracks`;
                const methodEliminatingEvidenceDamageControl = `by trying to eliminate evidence of a plan or crime that failed, and that ${nomPronoun} has written off. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} might be taking several actions at once; killing ${genPronoun} own minions that were involved, killing witnesses, stealing documents and other evidence, etc.`;
                const methodEliminatingEvidenceMoppingUp = `by eliminating evidence of a plan or crime that has succeeeded - covering ${genPronoun} tracks, in other words. If ${nomPronoun} put a usurper on the throne (to choose one example), ${nomPronoun} might still need to kill the minion or dupe who poisoned the true king. Or, ${nomPronoun} might need to change some historical records that could reveal the usurper\`s non-noble pedigree. Most crimes leave evidence behind.`;
                const methodFrameUp = `by framing another person (or monster) for a crime ${nomPronoun} committed ${accPronoun}self. The target might be a minion, an innocent bystander the villain dislikes, or a monster such as a nearby dragon (dragons being excellent fall-guys for arsonists). Remember also: from the villain\`s perspective, the enemy of ${genPronoun} enemy is not ${genPronoun} friend - ${nomPronoun}\`s a potential fall guy.`;
                const methodLairBuildingRural = `by building a concealed lair to hide ${accPronoun}self and ${genPronoun} activities from the group indicated in column 1. This could be the activity of a mindless monster (in which case column 1 is irrelevant), or it might be part of the thought-out plan of a relatively intelligent mastermind.`;
                const methodLairBuildingUrbanOrVillage = `by building a hidden lair within a civilized community. Again, this could be the instinctive action of an unintelligent beast (such as a giant spider nesting in an attic, or a ghoul making tunnels under a cemetary) or might be the first step in a mastermind\`s plan (e.g., an evil priest digging a secret basement complex).`;
                const methodOrganizationFacade = `by creating an organization of innocent-looking minions in plain sight, but with a secret agenda for the group. The organization might be a cover story for existing minions (yes, we are all circus performers!) or it might be a way of recruiting unsuspecting locals to join. In this sort of operation, the villain is primarily trying to conceal the organization\`s secret operations rather than to conceal ${accPronoun}self; ${nomPronoun} might even be a prominent citizen of the town or village where the organization is being created. ${genPronoun.charAt(0).toUpperCase() + genPronoun.slice(1)} plan might include recruiting people away from the local community to a rural “temple” or “lodge,” or the organization\`s base might be located right in the middle of the community (for example, an innocent-looking store that actually fences stolen goods brought in by caravan from the nearby city). To determine the organization\`s secret agenda, you might want to roll again on the Master Table. Note that this sort of plan is almost certainly the agenda of an intelligent villain, even if the operation is run by a minion with lower intelligence.`;
                const methodOrganizationSecret = `by creating a secret organization of minions, meeting in secret with no cover story for their activites. This could be a secret cult, a plan to overthrow the government, or the unification of wererat tribes in the sewer tunnels of a large city. Secret societies can take many forms if you\`re creative.`;
                const methodSecretIdentityEstablishing = `by disguising ${accPronoun}self within the human population, and is building up a new identity for ${accPronoun}self. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} might have forged documents, or an altered body form. In this case, the villain has created a new identity - if ${nomPronoun} has taken someone\`s place, see below for comments.`;
                const methodSecretIdentityLearning = `by replacing a human in the community, and is learning the details of ${genPronoun} new identity. This is not a strategy limited to shape-changing villains; anyone can pretend to be someone from far away. The villain might be making some blunders as ${nomPronoun} impersonates the dead or absent target - ${nomPronoun} might not know, for example, that the king was a vegetaries, or where the merchant hid the key to ${genPronoun} treasure room.`;

                const concealFromArray = [`another villain`, `another villain\`s minions`, `bounty hunters or adventurers`, `foreign authorities or military`, `former victim, group of former allies`, `local authorities or militia`, `local authorities or militia`, `local authorities or militia`];
                const concealMethodArray = [methodAssassination, methodEliminatingEvidenceDamageControl, methodEliminatingEvidenceMoppingUp, methodFrameUp, methodLairBuildingRural, methodLairBuildingUrbanOrVillage, methodOrganizationFacade, methodOrganizationSecret, methodSecretIdentityEstablishing, methodSecretIdentityLearning];
                
                const concealFromRand = Math.floor(Math.random()*concealFromArray.length);
                /* */ const concealFrom = concealFromArray[concealFromRand];

                const concealMethodRand = Math.floor(Math.random()*concealMethodArray.length);
                /* */ const concealMethod = concealMethodArray[concealMethodRand];

                let concealPlotFromDisplay = document.createElement(`div`);
                concealPlotFromDisplay.id = `concealPlotFromDisplay`;
                concealPlotFromDisplay.innerHTML = `${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} is trying to conceal ${genPronoun} plot from ${concealFrom}`;
                document.getElementById(`plotTypeDisplay`).appendChild(concealPlotFromDisplay);

                let concealPlotMethodDisplay = document.createElement(`div`);
                concealPlotMethodDisplay.id = `concealPlotMethodDisplay`;
                concealPlotMethodDisplay.innerHTML = concealMethod;
                document.getElementById(`plotTypeDisplay`).appendChild(concealPlotMethodDisplay);

                /*let plotTypeDisplay = document.createElement(`p`);
                plotTypeDisplay.id = `plotTypeDisplay`;
                plotTypeDisplay.innerHTML = plotType;

                document.getElementById(`plotTypeDisplayArea`).innerHTML = ``;
                document.getElementById(`plotTypeDisplayArea`).appendChild(plotTypeDisplay);*/
        } else {
                alert(`The plot isn\`t concealment!`)
        }
}
function displayConvertPlot() {
        const previousConvertMethod = document.getElementById(`convertMethodDisplay`);
        if (previousConvertMethod) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousConvertMethod);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;
        
        if (plot === `The villain is trying to convert others to ${genPronoun} way of thinking (as opposed to subversion, which involved using them without changing their minds)`) {
                /* CONVERSION METHOD VARIABLES TABLE 1-13 pg. 29 */
                const methodAddiction = ` by using peoples\` addictions to get them to take evil actions`;
                const methodBadAdvice = ` by advising people to engage in evil actions, working from some position of authority ${nomPronoun} has already obtained (e.g. a good priest, a military leader, a city alderman, a prosecutor, etc.). The villain might be giving insidious advice to the population at large (by preaching war, for example), or ${nomPronoun} might be in the position of an advisor to a noble, a guildmaster, or some other powerful person. The \`evil vizier\` of Arabian folklore is a prime example of this sort of villain.`;
                const methodBlackmail = ` by blackmailing people into committing evil actions. These actions might or might not actually change their alignments, depending on how you use alignment in your game.`;
                const methodDebts = `. The villain is a moneylender or has control of money (a local exchequer or military quartermaster, perhaps) and is using peoples\` debts to force them into undertaking evil actions.`;
                const methodDemonicGifts = ` by giving \`gifts\` of a demon\`s assistance. Eventually, the victim becomes reliant or even addicted to such help, and falls into the villain\`s (or the demon\`s) clutches as a helpless pawn.`;
                const methodEnchantment = ` by magically charming people, then persuading or ordering them to commit evil actions.`;
                const methodHostages = ` by taking hostages, compelling their kin or the hostages themselves to perform evil actions in exchange for freedom or good treatment.`;
                const methodMagic = ` by using magical means (using an item, probably) to change the alignment of ${genPronoun} victims. The effect might only work from long-term exposure to the item, or it might be instantaneous.`;
                const methodPersuasion = `. The silver-tongued devil is able to convert people to ${genPronoun} cause by words alone. This might be through religious conversions, or by persuading people to take specifically evil actions. This is the \`temper\` type of villain common in European morality tales (eve and the serpent, Marlowe and Goethe\`s versions of the Doctor Faustus story, etc.)`;
                const methodMoney = ` by simply paying people to take evil actions.`;
                const methodObligationsOfHonor = ` by using peoples\` open-ended promises and oaths as a means of getting evil actions done. The fictionalized magia of the Godfather movies is an excellent example: by doing a favor in exchange for another, unspecified, favor in the future, the villain can force people to undertake tasks they wouldn\`t have agreed to ahead of time if they had known what would be required of them.`;
                const methodMinionsUseAddiction = `. The villain\`s minions use peoples\` addictions to get them to take evil actions. The minions might be supplying people with addictive substances, might be taking over the operations of existing suppliers by force or guile, or might be blackmailing people (assuming drugs are illegal).`;
                const methodMinionsGiveBadAdvice = `. The villain\`s minions advise evil actions from positions of authority they have already obtained (e.g. a good priest, a military leader, a city alderman, a prosecutor, etc.). The minions might be giving insidious advice to the population at large (by preaching war, for example), or they might be in the position of advisors to a noble, guildmasters, or some other powerful person. The villain remains one step removed from the dirty work, possibly more anonymous than someone in a position to be giving advice.`;
                const methodMinionsUseBlackmail = `. The villain\`s minions are blackmailing people into committing evil actions. These actions might or might not actually change their alignments, depending on how you use alignment in your game.`;
                const methodMinionsUseEnchantment = `. The villain\`s minions are magically charming people, then persuading or ordering them to commit evil actions. It might be that the villain ${accPronoun}self doesn\`t have the magical capability to enchant people. If the villain\`s minion is able to use such magic, and the villain isn\`t, keep in mind that the minion might have his own secret agenda.`;
                const methodMinionsUseHostages = `. The villain\`s minions take hostages, compelling their kin or the hostages themselves to perform evil actions in exchange for freedom or good treatment. The weakness of the plan, as always, is that if you want something done right, you need to do it yourself.`;
                const methodMinionsUseMagic = `. The villain\`s minions are directly changing peoples\` moral alignment with the use of magic - whether this is an inherent capability or by the use of a powerful magic item (or even an artifact). As with all minion-type plans, the minions might be slightly incomoetent, or might bei ntelligent enough to have their own agenda.`;
                const methodMinionsUsePersuasion = `. The villain\`s minions persuade people into a religious or moral conversion to evil (or Chaos, depending on the campaign). Most likely the villain has the minion doing the job because the villain lacks the charisma (or the human appearance) to pull it off.`;
                const methodMinionsUseMoney = `. The villain\`s minions pay people to undertake evil actions. This is only different from \`subversion\` in that the actions are presumably heinous enough to cause a possible change in alignment.`;
                const methodMinionsUseObligationsOfHonor = `. The villain has a minion who is a feudal lord, a crime boss, or who holds some other station in which people make open-ended promises to ${accPronoun}. At the villain\`s request or command, the minion is able to take advantage of these open-ended promises to extort actions people would never directly have agreed to.`;

                const convertMethodArray = [methodAddiction, methodBadAdvice, methodBlackmail, methodDebts, methodDemonicGifts, methodEnchantment, methodHostages, methodMagic, methodPersuasion, methodMoney, methodObligationsOfHonor, methodMinionsGiveBadAdvice, methodMinionsUseAddiction, methodMinionsUseBlackmail, methodMinionsUseEnchantment, methodMinionsUseHostages, methodMinionsUseMagic, methodMinionsUseMoney, methodMinionsUseObligationsOfHonor, methodMinionsUsePersuasion];
                const convertMethodRand = Math.floor(Math.random()*convertMethodArray.length);
                const convertMethod = convertMethodArray[convertMethodRand];

                let convertMethodDisplay = document.createElement(`div`);
                convertMethodDisplay.id = `convertMethodDisplay`;
                convertMethodDisplay.innerHTML = `${convertMethod}`;
                document.getElementById(`plotTypeDisplay`).appendChild(convertMethodDisplay);
        } else {
                alert(`The plot isn\`t conversion!`)
        }
}
function displayDesecrationPlot() {
        const previousDesecrationMethod = document.getElementById(`desecrationDisplay`);
        if (previousDesecrationMethod) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousDesecrationMethod);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;
        
        if (plot === `The villain seeks to desecrate a location, an item, or an event (desecration could be targeted on religion or against a tradition).`) {
                desecrationTargetRand = Math.floor(Math.random()*2);
                if (desecrationTargetRand === 0) { /* Determines whether the target is a LOCATION or an EVENT */
                        target = `location`;
                } else if (desecrationTargetRand === 1) {
                        target = `event`
                }
                
                if (target === `location`) {
                        /* DESECRATION VARIABLES TABLES 1-14 THROUGH 1-16 pgs. 30-31 */
                        const conquest = `The villain plans to conquer and occupy the holy site by military assault; using a frontal attack, infiltration, or the help of a traitor.`;
                        const nullFromAfar = `The villain plans to counteract the power of a holy site with activities ${nomPronoun} can perform in another location. Examples might include such things as building a dark mirror-image location as a coutneracting force, or summoning clouds to hang permanently over a sun temple. Possibilities for this are pretty vast.`;
                        const razeToGround = `The villain plans to physically destroy a temple or holy site using an earthquake, burning it, exploding it, or using some other implement of physical destruction other than a frontal assault.`;
                        const seedOfEvil = `The villain plans to desecrate the temple or holy site by planting an unholy object on the premises, probably in a hidden place (but also, possibly, substituting something in plain sight with a duplicate). ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} might replace the eye of an idol with the eye of a demon, perhaps ${nomPronoun} might bury the body of a hanged murderer under the altar, or perhaps a stone soacked in the cursed watcers of La\`aashoon might be used to replace a flagstone.`;
                        const stealRelics = `The villain plans to steal or modify the specific holy item that gives a temple or a holy site its pwoer or significance. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} might be planning to replace it with a worthless forgery, or ${nomPronoun} might plan just to hide it away. This is a good plot to introduce two levels of villain - the one who is supposed to arrange the actual theft, and a more powerful master who plans to use or destroy the relic.`;
                        const targetCongregation = `The villain plans to subvert or convert the temple\`s congregation into attacking the priests or otherwise destroying the temple or holy site.`;
                        const targetPriesthoodGuile = `The villain plans to eliminate or remove the servants of a holy site by trickery, then occupy, desecrate, or destroy the site. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} might do so by impersonating a messenger from the high priesthood calling the priests away to an emergency conclave, perhaps. A nearby \`natural\` disaster might also be used as the decoy.`;
                        const targetPriesthoodStealth = `The villain plans to eliminate the servants of a holy site by stealthy means, allowing ${accPronoun} to occupy, desecrate, or destroy the site at leisure. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} might even keep the site open for business afterwards! This sort of plot might include assassinations, kidnappings, disguised replacements for the missing priests, or many other kinds of nefarious doings.`;
                        const targetPriesthoodSubvert = `The villain plans to subvert the priesthood to evil, and use them to desecrate the temple. For ideas about ${genPronoun} methods, you might want to take a look at the \`Conversion\` and \`Subversion\` tables (Table 1-13 and table 1-32).`;
                        const unholyEvent = `The villain plans to desecrate the temple or holy site by causing some unholy action to take place there. Examples might include a human sacrifice, the speaking of ancient or blasphemous words, summoning a demon within the precincts, or a formal rededication of the temple to an evil deity. Most such plots would require someone to get into the site, althought it might not need to be the villain ${accPronoun}self.`;

                        const desecratePlotArray = [conquest, nullFromAfar, razeToGround, seedOfEvil, stealRelics, targetCongregation, targetPriesthoodGuile, targetPriesthoodStealth, targetPriesthoodSubvert, unholyEvent];
                        const desecratePlotRand = Math.floor(Math.random()*desecratePlotArray.length);
                        const desecratePlot = desecratePlotArray[desecratePlotRand];

                        let desecrationDisplay = document.createElement(`div`);
                        desecrationDisplay.id = `desecrationDisplay`;
                        desecrationDisplay.innerHTML = `${desecratePlot}`;
                        document.getElementById(`plotTypeDisplay`).appendChild(desecrationDisplay);

                } else if (target === `event`) {
                                /* event-based desecration Tables 1-15 and 1-16 pgs. 30-31 */
                                /* This is the type of ceremony the villain intends to desecrate Table 1-15 Left Column*/
                        const religious1 = `Anniversary of event in history of the religion (battle victory, writing of a religious text, appearance of an avatar, etc.).`;
                        const religious2 = `Anniversary of event in the life of a deity.`;
                        const religious3 = `Anniversary of an event in the life of a hero/saint.`;
                        const religious4 = `Astrological conjunctions.`;
                        const religious5 = `Commemoration of a local religious event such as the found of the local temple or even the conversion of the baron\`s grandfather to the sect.`;
                        const religious6 = `Eclipse.`;
                        const religious7 = `End/beginning of the year.`;
                        const religious8 = `Equinox.`;
                        const religious9 = `Full or new moon.`;
                        const religious10 = `Lunar solstice.`;
                        const religious11 = `Particular day ordained by the deity or a scared text.`;
                        const religious12 = `Planting season (often involving some sort of fertility rite, either sexual or involving blood if ancient religions are used as the model).`;
                        const religious13 = `Scriptural progression. If the religion\`s scripture tracks through the year, the end of one chapter or book and the beginning of another might be a significant date. For example, a temple might read from the Book of Autumn, the Book of Summer, the Book of Spring, and the Book of Winter. The changeover from one to the next might involve unusual ceremonies or a festival.`;
                        const religious14 = `Solstice (closest and farthest point from sun).`;
                        const secular1 = `Celebration of the local lord\`s birthday or anniversary.`;
                        const secular2 = `Coronation or other transference of power (at guild or in town government, for example).`;
                        const secular3 = `The opening of a market fair, or a tournament (assuming that these are wrapped up in enough tradition to be considered something that could be \`desecrated\`).`;
                        const religOrSecular1 = `Celebration of a secular event such as the end of a great war or the end of a famine.`;
                        const religOrSecular2 = `Harvest\`s beginning or end.`;
                        const religOrSecular3 = `Rites of passage or coming-of-age ceremonies. Following the model of ancient religions, these are almost always different ceremonies for males and females, and might be on different dates.`;

                        const ceremonyArray = [religious1, religious2, religious3, religious4, religious5, religious6, religious7, religious8, religious9, religious10, religious11, religious12, religious13, religious14, secular1, secular2, secular3, religOrSecular1, religOrSecular2, religOrSecular3];
                        const ceremonyRand = Math.floor(Math.random()*ceremonyArray.length);
                        const ceremonyType = ceremonyArray[ceremonyRand];

                                /* These are potential, particular features that the ceremony involves, and which the villain may wish to particularly disrupt Table 1-16 Right Column*/
                        const ceremonyFeat0105 = `Animal sacrifice (particular animal, chosen ahead of time, fitting certain criteria)`;
                        const ceremonyFeat0610 = `bringing a particular object to a particular place and installing it there`;
                        const ceremonyFeat1115 = `building and maintaining a temporary structure for a period of time`;
                        const ceremonyFeat1620 = `creation of a particular sound`;
                        const ceremonyFeat2125 = `crowning or other rites focusing on a particular person (person chosen ahead of time, must be that person). This would be something like the \`Queen of May,\` or the local baron, or some other person who can\`t simply be replaced`;
                        const ceremonyFeat2630 = `day of fasting`;
                        const ceremonyFeat3135 = `Handing out some sort of food, from free beer to sacks of grain, to a blessed piece of fruit. The food might or might not be prepared or consumed during the ceremony itself`;
                        const ceremonyFeat3640 = `human sacrifice is part of the ceremony (if chaos/evil cult), or animal sacrifice (if sect is lawful/good). Ceremony requires a particular sacrificial victim, chosen ahead of time, fitting certain criteria`;
                        const ceremonyFeat4145 = `opening and entering an underground area normally kept sealed`;
                        const ceremonyFeat4650 = `planting of seeds`;
                        const ceremonyFeat5155 = `reading of a particular prayer`;
                        const ceremonyFeat5660 = `reading of omens, from the shape of clouds to the entrails of a sacrificial beast, to the release of birds to read the future in the pattern of their flight`;
                        const ceremonyFeat6165 = `recitation of articles of authority`;
                        const ceremonyFeat6670 = `re-enactment of an event from the past`;
                        const ceremonyFeat7175 = `re-enactment of an event from the religion\`s mythology`;
                        const ceremonyFeat7680 = `rite of passage is part of the ceremony. Requires presence of the candidates at the very least`;
                        const ceremonyFeat8185 = `sexual activity; most common at fertility rites or rites of passage, but possible in any context depending on the culture or the religion as established in the campaign`;
                        const ceremonyFeat8690 = `submersion in water, or other use of water in a ceremony`;
                        const ceremonyFeat9195 = `traditional dance (the quality of it, or its adherence to particular standards, might be read as an omen)`;
                        const ceremonyFeat96100 = `wild festival in which the normal rules of society are relaxed (this might be a difficult one for a villain to figure out how to desecrate)`;

                        const ceremonyFeaturesArray = [ceremonyFeat0105, ceremonyFeat0610, ceremonyFeat1115, ceremonyFeat1620, ceremonyFeat2125, ceremonyFeat2630, ceremonyFeat3135, ceremonyFeat3640, ceremonyFeat4145, ceremonyFeat4650, ceremonyFeat5155, ceremonyFeat5660, ceremonyFeat6165, ceremonyFeat6670, ceremonyFeat7175, ceremonyFeat7680, ceremonyFeat8185, ceremonyFeat8690, ceremonyFeat9195, ceremonyFeat96100];
                        const ceremonyFeaturesRand = Math.floor(Math.random()*(ceremonyFeaturesArray.length));
                        const ceremonyFeature = ceremonyFeaturesArray[ceremonyFeaturesRand];

                                /* This is the method which the villain intends to use to disrupt the ceremony Table 1-15 pg. 30*/
                        const desecrateMethodArray = [`attacking with violence`, `discrediting it beforehand (legal or political)`, `discrediting it beforehand (religious authority)`, `disrupting it with violence`, `interrupting with objection (legal or political)`, `interrupting with objection (religious authority)`, `kidnapping required officials`, `kidnapping required participants`, `stealing traditional items`, `subverting with counterfeit items or people`];
                        const desecrateMethodRand = Math.floor(Math.random()*(desecrateMethodArray.length));
                        const desecrateMethod = desecrateMethodArray[desecrateMethodRand];

                        let desecrationDisplay = document.createElement(`div`);
                        desecrationDisplay.id = `desecrationDisplay`;
                        desecrationDisplay.innerHTML = `The villain plans to desecrate a(n) ${ceremonyType}, which involves the ${ceremonyFeature}, by ${desecrateMethod}`;
                        document.getElementById(`plotTypeDisplay`).appendChild(desecrationDisplay);

                }
        } else {
                alert(`The plot isn\`t desecration!`)
        }
}
function displayDestroyCommunityPlot() {
        const previousDestroyCommunity = document.getElementById(`destroyCommunityDisplay`);
        if (previousDestroyCommunity) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousDestroyCommunity);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;
        
        if (plot === `The villain is trying to kill, economically destroy, or otherwise irreparably damage a particular community (possibly a sub-community or organization). ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} could have various motives, ranging from annoyance to following the orders of a greater villain.`) {
                /* DESTROY COMMUNITY Tables 1-17 THROUGH 1-19 pgs. 32-35*/
                        /* Method of Destruction - Table 1-17 pg. 32*/
                const angerProtector = `the plan is to cause the community\`s destruction by getting a significant protector of the village to depart, leaving the community at the mercy of predators (including the villain). The protector might be a knight, a powerful cleric, or some other person. The methods might include framing this protector for crimes, spreading rumors about him, or impersonating him while committing crimes. Virtually any sort of activity designed to besmirch a person\`s reputation might be used.`;
                const arson = `the villain plans to burn everything to the ground, either directly or with the help of a firebug minion.`;
                const attack = `the villain has enough military resources to attack and destroy the community - possibly missing just one key factor.`;
                const eviction = `the villain is (legally) evicting members of the community by using ${genPronoun} influence with the legal system, influence with rulers, false facts, framed evidence of crimes, diverting tazes from reaching tax collectors, etc. This is the \`evil landlord\` type of villain who makes an appearance in many of the Brothers Grimm fairy tales.`;
                const harborMenace = `the villain plans to (or has already started to) provide a safe lair for a predatory killer, monster, murderer, trapper, arsonist, etc. The dangerous inhabitant might have been brought in, found and adopted, or actually created by the villain.`;
                const interdictionOrSiege = `the villain plans to use interdiction to destroy the community. This sort of plot could include any sort of interdiction of supply or demand. The \`standard\` use of this plot as an adventure device is a military blockade or siege; bandits cutting off the road to a village, or the siege of a fortification. However, there are many subtler ways to use this sort of plot as well. Blessings or information might be the \`commodity\` that\`s being cut off rather than the more obvious food and trade. The villain might, for example, have manipulated the local high priest into refusing to perform religious ceremonies, or might have captured him. The interdiction might be limited to a particular commodity, such as the iron needed for a blacksmithing operation in a local castle. Causing the iron to rust while it\`s in transit is an example of interdiction bearing no resemblance to a straightforward siege. Let your mind roam free for possibilities - this is a plot with lots of scope for GM creativity.`;
                const murder = `the villain (or a deadly minion) is killing the community one at a time, the old fashioned way. This could be a straightforward psycho killer or other human-hater on the loose, or it could be a much more intricate plot: watch Tim Burton\`s film version of the Legend of Sleep Hollow (the one with Johnny Depp) for a really complex example.`;
                const plague = `the villain plans to spread a plague, or is somehow maintaining an existing plague. This might be done with mundane means such as putting rotting meat into a water supply, it might be a magical plague maintained with the help of a god of disease, or it might be a magic-user casting uniquely-crafted spells.`;
                const poison = `the villain is poisoning something: water, food, air, animals, crops, clothing, etc.`;
                const prepareForBattle = `the villain is hiring or assembling troops (possibly monstrous) for a direct military assault. The troops might not yet be well enough trained, or might not be numerous enough for the invasion to begin.`;
                const provokeInvasionByImpersonation = `the villain seeks to provoke someone else into invading the community. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} is doing so by impersonating members of the community while committing crimes, treason, immoral acts, etc. This could be as large-scale as committing raids against one baron\`s villages under the flag of another baron.`;
                const provokeInvasionByLies = `the villain seeks to provoke an invasion by spreading rumors and lies about the community (e.g. the village is a hideout for bandits, a guild is plotting the overthrow of the king, a village is harbor a traitor, etc.)`;
                const removeSkilledLeader = `the villain wants to remove a skilled leader - not a protector, but someone whose services are vital to the community. Examples might include a well-known swordsmith, a druid who blesses the crops, or someone who gives wise counsel. The means of removal might include violence, provoking the community to exile the leader, or poisoning the leader\`s opinion of the community.`;
                const removeDestroyProtectiveItem = `the villain\`s target is some item that protects the community; ${nomPronoun} plans to steal it, destroy it, or nullify its effects.`;
                const sabotageSourceIncome = `the villain has a cunning plan to destroy the market for the community\`s product. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} might plan to poison the product, sabotage its quality, spread rumors about it, etc.`;
                const sabotageFoodSource = `the villain is eliminating domestic animals or crops, possibly by poison, possibly by slaughter, or perhaps by theft. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} might be calling in predators using some magical capability.`;
                const smuggleBeasts = `the villain is in the process of enticing, luring, or importing monsters into the area. This could be a plot involving changelings, shape-shifters, or some other subtlety - or it might be that the villain\`s making a dragon-calling whistle.`;
                const spreadDissention = `the villain plans to set members of the community violently against each other by spreading lies and rumoprs. This is the Iago-type villain of Shakespeare\`s Othello, who puts the right word in the right ear, spreading hatred and distrust where there was originally friendship and mutual alliance.`;
                const traps = `the villain is setting traps around or in the community. His intention might be to kidnap, or the traps might be lethal.`;
                const wildWestChaos = `the villain is engaging in widespread robbery and burglary, probably with the help of minions. Here, the villain\`s goal is either to take control of the community when law and order break down, or simply to bleed it dry in an orgy of violence and theft.`;
                
                const methodDestructionArray = [angerProtector, arson, attack, eviction, harborMenace, interdictionOrSiege, murder, plague, poison, prepareForBattle, provokeInvasionByImpersonation, provokeInvasionByLies, removeSkilledLeader, removeDestroyProtectiveItem, sabotageFoodSource, sabotageSourceIncome, smuggleBeasts, spreadDissention, traps, wildWestChaos];
                const methodDestructionRand = Math.floor(Math.random()*methodDestructionArray.length);
                const methodDestruction = methodDestructionArray[methodDestructionRand];

                        /* Reason for Destruction - Table 1-18 pg. 33*/
                const destructionReason0105 = `The community has something the villain wants; total destruction might be overkill, but the villain doesn\`t want to (or can\`t for some reason) get what ${nomPronoun} wants through a stealthier approach. Thus `;
                const destructionReason0610 = `The community has upset the villain\`s deity by is actions, so `;
                const destructionReason1115 = `The community irritates the villain because it is aligned with goodness or law, so `;
                const destructionReason1620 = `The community irritates the villain because it is free and spreading concepts of liberty, so `;
                const destructionReason2125 = `The community irritates the villain because it is too happy and cheerful, so `;
                const destructionReason2630 = `The community is owned or ruled by the villain\`s rival, so `;
                const destructionReason3135 = `The community is too close to the villain\`s secret lair, so `;
                const destructionReason3640 = `The community is too close to the villain\`s well-known lair, so `;
                const destructionReason4145 = `The community knows something about the villain\`s past, so `;
                const destructionReason4650 = `The community knows something about the villain\`s weakness or weak spot, so `;
                const destructionReason5155 = `The community offers economic competition to the villain\`s own operations, so `;
                const destructionReason5660 = `Because omens have told the villain to destroy the community, `;
                const destructionReason6165 = `${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} wants vengeance on the community for/because `;
                const destructionReason6670 = `The community is harboring one of the villain\`s enemies or rivals.`;
                const destructionReason7175 = `Villain seeks to bring about the pre-requisites of a prophesy, and one pre-requisite seems to require the destruction of this community.`;
                const destructionReason7680 = `Villain seeks to send a message to others about ${genPronoun} power, or to turn this community into an example.`;
                const destructionReason8185 = `Villain wants the bodies of the dead.`;
                const destructionReason8690 = `Villain wants the location, and all the inhabitants need to be gone.`;
                const destructionReason9195 = `Villain\`s racial hatreds.`;
                const destructionReason96100 = `Villain\`s religious hatreds.`;
        
                const destructionReasonArray = [destructionReason0105, destructionReason0610, destructionReason1115, destructionReason1620, destructionReason2125, destructionReason2630, destructionReason3135, destructionReason3640, destructionReason4145, destructionReason4650, destructionReason5155, destructionReason5660, destructionReason6165, destructionReason6670, destructionReason7175, destructionReason7680, destructionReason8185, destructionReason8690, destructionReason9195, destructionReason96100];
                const destructionReasonRand = Math.floor(Math.random()*destructionReasonArray.length);
                const destructionReason = destructionReasonArray[destructionReasonRand];
        
                

                /* If reason = revenge: Reason for Seeking Revenge - Table 1-19 pg. 34-35 */
                const revengeReason01 = `animals from the community frequently trespass on the villain\`s (or patron\`s) property`;
                const revengeReason02 = `${genPronoun} boss was executed for a crime(s) he committed`;
                const revengeReason03 = `${genPronoun} boss executed for (a) crime(s) he did not commit`;
                const revengeReason04 = `${genPronoun} boss was imprisoned for (a) crime(s) he committed`;
                const revengeReason05 = `the community deliberately foiled villain\`s (or patron\`s) last plan`;
                const revengeReason06 = `the community harbors potential witness against villain (or patron)`;
                const revengeReason07 = `${genPronoun} kinsman contracted food poisoning in the community`;
                const revengeReason08 = `${genPronoun} kinsman mutilated for (a) crime(s)`;
                const revengeReason09 = `${genPronoun} kinsman was beaten for beliefs or teachings`;
                const revengeReason10 = `${genPronoun} kinsman was beaten for disrespect to leaders`;
                const revengeReason11 = `${genPronoun} kinsman was beaten for obnoxiousness to (a) commoner(s)`;
                const revengeReason12 = `${genPronoun} kinsman was executed for beliefs or teachings`;
                const revengeReason13 = `${genPronoun} kinsman was executed for (a) crime(s)`;
                const revengeReason14 = `${genPronoun} kinsman was fined for (a) crime(s) he committed`;
                const revengeReason15 = `${genPronoun} kinsman was imprisoned for beliefs or teachings`;
                const revengeReason16 = `${genPronoun} kinsman was imprisoned for (a) crime(s)`;
                const revengeReason17 = `${genPronoun} kinsman was imprisoned for (a) crime(s) the villain (or patron) committed`;
                const revengeReason18 = `a member of the community foiled villain\`s (or patron\`s) last plan`;
                const revengeReason19 = `a member of the community is relative of one of villain\`s (or patron\`s) rivals`;
                const revengeReason20 = `a member of the community once attacked the villain (or patron) elsewhere`;
                const revengeReason21 = `a member of the community once foiled one of villain\`s (or patron\`s) plans elsewhere`;
                const revengeReason22 = `members of the community frequently trespass on the villain\`s (or patron\`s) property`;
                const revengeReason23 = `members of the community frequently visit the villain (or patron) and annoy ${accPronoun}`;
                const revengeReason24 = `${genPronoun} minion was beaten for beliefs or teachings`;
                const revengeReason25 = `${genPronoun} minion was beaten for disrespect to community leaders`;
                const revengeReason26 = `${genPronoun} minion was beaten for obnoxiousness to (a) commoner(s)`;
                const revengeReason27 = `${genPronoun} minion was executed for beliefs or teachings`;
                const revengeReason28 = `${genPronoun} minion was executed for (a) crime(s) he committed`;
                const revengeReason29 = `${genPronoun} minion was executed for (a) crime(s) he did not commit`;
                const revengeReason30 = `${genPronoun} minion was imprisoned for beliefs or teachings`;
                const revengeReason31 = `${genPronoun} minion was imprisoned for (a) crime(s) he committed`;
                const revengeReason32 = `${genPronoun} minion was mutilated for (a) crime(s)`;
                const revengeReason33 = `${genPronoun} minion was fined for (a) crime(s) he committed`;
                const revengeReason34 = `${nomPronoun} was mocked by adults for poverty or social station`;
                const revengeReason35 = `${nomPronoun} was mocked by adults over appearance`;
                const revengeReason36 = `${nomPronoun} was mocked by children over appearance`;
                const revengeReason37 = `${nomPronoun} was mocked by leaders for ${genPronoun} proposed plans`;
                const revengeReason38 = `${nomPronoun} was mocked by leaders over abilities`;
                const revengeReason39 = `${nomPronoun} was mocked by literati for ${genPronoun} writings or theories`;
                const revengeReason40 = `${nomPronoun} was mocked by opposite sex for amorous advances`;
                const revengeReason41 = `${nomPronoun} was mocked for beliefs or teachings`;
                const revengeReason42 = `one of villain\`s (or patron\`s) rivals lives in the community`;
                const revengeReason43 = `${genPronoun} pet or trained monster was killed by the community`;
                const revengeReason44 = `the community misdirected villain (or patron) as a joke`;
                const revengeReason45 = `the community produces an annoying smell`;
                const revengeReason46 = `the community produces annoying sounds`;
                const revengeReason47 = `the community\`s color scheme grates on the villain\`s (or patron\`s) sensibilities`;
                const revengeReason48 = `the community\`s food preferences disgust the villain (or patron)`;
                const revengeReason49 = `the community\`s mode of speech grates on the villain\`s (or patron\`s) sensibilities`;
                const revengeReason50 = `the villain (or patron) was robbed in the community`;
                const revengeReason51 = `the villain\`s (or patron\`s) boss was robbed in the community`;
                const revengeReason52 = `the villain\`s (or patron\`s) kinsman was attacked by a local pet or domestic animal`;
                const revengeReason53 = `the villain\`s (or patron\`s) minion was attacked by a local pet or domestic animal`;
                const revengeReason54 = `the villain\`s (or patron\`s) minion was robbed in the community (possibly it was the villain\`s (or patron\`s) money)`;
                const revengeReason55 = `the villain (or patron) beaten for beliefs or teachings`;
                const revengeReason56 = `the villain (or patron) beaten for obnoxiousness to commoner`;
                const revengeReason57 = `the villain (or patron) caught a crippling disease while in the community`;
                const revengeReason58 = `the villain (or patron) caught a social disease in the community`;
                const revengeReason59 = `the villain (or patron) caught a bad cough while visiting the community`;
                const revengeReason60 = `the villain (or patron) contracted food poisoning in the community`;
                const revengeReason61 = `the villain (or patron) encountered prolonged bad luck there, considers the place unlucky, and is acting upon that belief`;
                const revengeReason62 = `the villain (or patron) escaped a duel of honor`;
                const revengeReason63 = `the villain (or patron) escaped lynching for beliefs or teachings`;
                const revengeReason64 = `the villain (or patron) lost court case for damages there (justly)`;
                const revengeReason65 = `the villain (or patron) lost court case for damage there (unjustly)`;
                const revengeReason66 = `the villain (or patron) lost heavily at gambling there`;
                const revengeReason67 = `the villain (or patron) narrowly escaped execution for beliefs or teachings`;
                const revengeReason68 = `the villain (or patron) narrowly escaped lynching for (a) crime(s) ${nomPronoun} did not commit`;
                const revengeReason69 = `the villain (or patron) narrowly escaped lynching for (a) crime(s) ${nomPronoun} committed`;
                const revengeReason70 = `the villain (or patron) received bad service there (tavern, guild goods, brothel, etc.)`;
                const revengeReason71 = `the villain (or patron) slipped in excrement and was soiled thereby`;
                const revengeReason72 = `the villain (or patron) was bitten by someone\`s pet`;
                const revengeReason73 = `the villain (or patron) was bruised and embarrassed by an accident with a person`;
                const revengeReason74 = `the villain (or patron) was cheated by a merchant or shopkeeper of the community`;
                const revengeReason75 = `the villain (or patron) was embarrassed by being exposed as a charlatan`;
                const revengeReason76 = `the villain (or patron) was exiled for beliefs or teachings`;
                const revengeReason77 = `the villain (or patron) was exposed as a cheater (cards, dice, etc.)`;
                const revengeReason78 = `the villain (or patron) was exposed as a commoner rather than a nobleman (or whatever secret identity ${nomPronoun} was trying to maintain failed)`;
                const revengeReason79 = `the villain (or patron) was fined for a crime ${nomPronoun} committed`;
                const revengeReason80 = `the villain (or patron) was imprisoned for (a) crime(s) ${nomPronoun} committed`;
                const revengeReason81 = `the villain (or patron) was imprisoned for crime ${nomPronoun} did not commit`;
                const revengeReason82 = `the villain (or patron) was imprisoned for ${genPronoun} beliefs or teachings`;
                const revengeReason83 = `the villain (or patron) was mistakenly overtaxed or overcharged`;
                const revengeReason84 = `the villain (or patron) was mutilated for (a) crime(s) ${nomPronoun} committed`;
                const revengeReason85 = `the villain (or patron) was not paid for ${genPronoun} shoddy work`;
                const revengeReason86 = `the villain (or patron) was not paid or rewarded for services performed there (c.f., Pied Piper)`;
                const revengeReason87 = `the villain (or patron) was overtaxed or overcharged (as far as ${nomPronoun} is concerned)`;
                const revengeReason88 = `the villain (or patron) was raised in the community and bears a grudge`;
                const revengeReason89 = `the villain (or patron) was soiled by a chamber pot or a load of garbage that was being dumped`;
                const revengeReason90 = `the villain (or patron) was trampled or injured by horses owned by the community`;
                const revengeReason91 = `the villain (or patron) was treated rudely by a serviceman or merchant`;
                const revengeReason92100 = `the community accidentally foiled villain\`s (or patron\`s) last plan`;
        
                const revengeReasonArray = [revengeReason01, revengeReason02, revengeReason03, revengeReason04, revengeReason05, revengeReason06, revengeReason07, revengeReason08, revengeReason09, revengeReason10, revengeReason11, revengeReason12, revengeReason13, revengeReason14, revengeReason15, revengeReason16, revengeReason17, revengeReason18, revengeReason19, revengeReason20, revengeReason21, revengeReason22, revengeReason23, revengeReason24, revengeReason25, revengeReason26, revengeReason27, revengeReason28, revengeReason29, revengeReason30, revengeReason31, revengeReason32, revengeReason33, revengeReason34, revengeReason35, revengeReason36, revengeReason37, revengeReason38, revengeReason39, revengeReason40, revengeReason41, revengeReason42, revengeReason43, revengeReason44, revengeReason45, revengeReason46, revengeReason47, revengeReason48, revengeReason49, revengeReason50, revengeReason51, revengeReason52, revengeReason53, revengeReason54, revengeReason55, revengeReason56, revengeReason57, revengeReason58, revengeReason59, revengeReason60, revengeReason61, revengeReason62, revengeReason63, revengeReason64, revengeReason65, revengeReason66, revengeReason67, revengeReason68, revengeReason69, revengeReason70, revengeReason71, revengeReason72, revengeReason73, revengeReason74, revengeReason75, revengeReason76, revengeReason77, revengeReason78, revengeReason79, revengeReason80, revengeReason81, revengeReason82, revengeReason83, revengeReason84, revengeReason85, revengeReason86, revengeReason87, revengeReason88, revengeReason89, revengeReason90, revengeReason91, revengeReason92100];
                const revengeReasonRand = Math.floor(Math.random()*revengeReasonArray.length);
                const revengeReason = revengeReasonArray[revengeReasonRand];

                let destroyCommunityDisplay = document.createElement(`div`);
                destroyCommunityDisplay.id = `destroyCommunityDisplay`;
                
                
                if (destructionReason === `${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} wants vengeance on the community for/because `) {
                        destroyCommunityDisplay.innerHTML = `${destructionReason}${revengeReason} so ${methodDestruction}`;
                        document.getElementById(`plotTypeDisplay`).appendChild(destroyCommunityDisplay);
                } else {
                        destroyCommunityDisplay.innerHTML = `${destructionReason}${methodDestruction}`;
                        document.getElementById(`plotTypeDisplay`).appendChild(destroyCommunityDisplay);
                }
        } else {
                alert(`The plot isn\`t conversion!`)
        }
}
function displayDestroyGoodPlot() {
        const previousDestroyGood = document.getElementById(`destroyGoodDisplay`);
        if (previousDestroyGood) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousDestroyGood);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;
        
        if (plot === `The villain seeks to destroy the good-aligned group, either because their morals offend ${accPronoun}, or as the first step in a larger plan.`) {
                        /*  DESTROY GOOD-ALIGNED GROUP(S) Table 1-20 pg. 36 */
                /* This is the sort of group that the villain is targeting Table 1-20 pg. 36 Left Column */
                const targetGroup0105 = `all followers and worshippers of a particular deity`;
                const targetGroup0610= `all good-aligned individuals in a particular area`;
                const targetGroup1115 = `all powerful good-aligned individuals in a particular area`;
                const targetGroup1620 = `association dominated by leaders of good alignment (ranging from a charitable brotherhood to a guild of merchants whose leaders are staunchly good.)`;
                const targetGroup2125 = `anyone disregarding a particular evil-oriented law (or decree of an evil temple not actually part of the government) such as a requirement to wear an evil symbol or worship an evil idol, refusal to contribute to the army of an evil warlord, etc.`;
                const targetGroup2630 = `anyone returning from a pilgrimage to a particular holy site`;
                const targetGroup3135 = `anyone supporting a good-aligned leader during a time of evil rebellion and riots`;
                const targetGroup3640 = `anyone who was present at a particular religious reitual held in the recent past`;
                const targetGroup4145 = `apprentices or henchmen of a powerful good-aligned individual such as a good wizard. To make this unclear at the outset, the intial targets might be the apprentices of the original apprentices.`;
                const targetGroup4650 = `descendants of those who attended a particular religious event in the forgotten or even ancient past`;
                const targetGroup5155 = `followers of a good-aligned prophet\`s teachings (possibly being identified because they wear a particular holy symbol or amulet.)`;
                const targetGroup5660 = `jury or judge that convicted an evil leader`;
                const targetGroup6165 = `members of a race known to be predominantly of good alignment (dwarves, for instance)`;
                const targetGroup6670 = `members of an underground freedom movement in a tyrannical government (villain might be a member of the secret police or the inquisition)`;
                const targetGroup7175 = `members of underground religious movement in an evil theocratic region or an area in which an evil religion holds considerable authority`;
                const targetGroup7680 = `military order affiliated with good alignment but no particular faith`;
                const targetGroup8185 = `military order attached to a particular faith`;
                const targetGroup8690 = `military order attached to a particular good-aligned temple`;
                const targetGroup9195 = `mnly the priests and higher followers of a particular deity`;
                const targetGroup96100 = `poverty-stricken people of good alignment in a certain area.`;

                const targetGroupArray = [targetGroup0105, targetGroup0610, targetGroup1115, targetGroup1620, targetGroup2125, targetGroup2630, targetGroup3135, targetGroup3640, targetGroup4145, targetGroup4650, targetGroup5155, targetGroup5660, targetGroup6165, targetGroup6670, targetGroup7175, targetGroup7680, targetGroup8185, targetGroup8690, targetGroup9195, targetGroup96100];
                const targetGroupRand = Math.floor(Math.random()*targetGroupArray.length);
                const targetGroup = targetGroupArray[targetGroupRand];


                /* Intended method */
                /* This is the method the villain is using to attempt to destroy the good-aligned group Table 1-20 pg. 36 Right Column */
                const destroyGroupMethod0105 = `alter effects of the group\`s activities, turning the results into something deleterious instead of beneficial (poisoning new wells, appointing cruel masters to run the new orphanage, etc.). Less creative villains might just be sabotaging the projects once finished (burning the orphanage instead of turning it into an evil training ground, for example).`;
                const destroyGroupMethod0610= `animal or non-summoned monster trained (or otherwise prepared by magic, or breeding) to hunt down the targeted members of the community.`;
                const destroyGroupMethod1115 = `arson directed at a building, holy site, or meeting place of the community (likely part of a larger pattern of intimidation.`;
                const destroyGroupMethod1620 = `arson directed at the residences of members of the community.`;
                const destroyGroupMethod2125 = `cause diseases (infection or supernatural).`;
                const destroyGroupMethod2630 = `economic sabotage.`;
                const destroyGroupMethod3135 = `giving dangerous gifts that do something more than what they appear to do. Snakes hidden in gifts are a very simple example.`;
                const destroyGroupMethod3640 = `indirect murders by poison or traps. Generally this will involve enticing community members to a particular location, or targeting a place where the members meet.`;
                const destroyGroupMethod4145 = `infiltration and dissention. The villain has a way to join (or have one of ${genPronoun} minions join) the community, who will then spread lies that will break the community apart. Faked evidence might be involved.`;
                const destroyGroupMethod4650 = `kidnapping and brainwashing.`;
                const destroyGroupMethod5155 = `outside slander. Instead of spreading lies within the community, the villain spreads lies about the community to everyone else. The objective is to cause mob violence or legal oppression that will break or kill the members of the community.`;
                const destroyGroupMethod5660 = `overt attacks on members by the villain ${accPronoun}self.`;
                const destroyGroupMethod6165 = `overt attacks on members of the community by the villain\`s minions.`;
                const destroyGroupMethod6670 = `over attacks on members of the community by the villain\`s minions.`;
                const destroyGroupMethod7175 = `serial robberies (can include robberies of the group\`s caravans, homes, or places of business as well as direct robberies such as muggings).`;
                const destroyGroupMethod7680 = `stealthy murders by the villain ${accPronoun}self.`;
                const destroyGroupMethod8185 = `stealthy murders by the villain ${accPronoun}self.`;
                const destroyGroupMethod8690 = `stealthy murders by the villain\`s minions.`;
                const destroyGroupMethod9195 = `stealthy murders by the villain\`s minions.`;
                const destroyGroupMethod96100 = `a summoned monster (a demon, spectral thing, or extra-planar horror) ordered to hunt down and slay members of the community.`;

                const destroyGroupMethodArray = [destroyGroupMethod0105, destroyGroupMethod0610, destroyGroupMethod1115, destroyGroupMethod1620, destroyGroupMethod2125, destroyGroupMethod2630, destroyGroupMethod3135, destroyGroupMethod3640, destroyGroupMethod4145, destroyGroupMethod4650, destroyGroupMethod5155, destroyGroupMethod5660, destroyGroupMethod6165, destroyGroupMethod6670, destroyGroupMethod7175, destroyGroupMethod7680, destroyGroupMethod8185, destroyGroupMethod8690, destroyGroupMethod9195, destroyGroupMethod96100];
                const destroyGroupMethodRand = Math.floor(Math.random()*destroyGroupMethodArray.length);
                const destroyGroupMethod = destroyGroupMethodArray[destroyGroupMethodRand];

                let destroyGoodDisplay = document.createElement(`div`);
                destroyGoodDisplay.id = `destroyGoodDisplay`;
                destroyGoodDisplay.innerHTML = `The villain seeks to destroy a(n) ${targetGroup} via ${destroyGroupMethod}`;
                document.getElementById(`plotTypeDisplay`).appendChild(destroyGoodDisplay);
        } else {
                alert(`The plot isn\`t destroy good-aligned group!`)
        }
}
function displayEconomicPowerPlot() {
        const previousEconomicPower = document.getElementById(`economicPowerDisplay`); /* Checks to see if there is an element already displaying this kind of plot, and removes it */
        if (previousEconomicPower) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousEconomicPower);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;
        
        if (plot === `The villain is working on gaining wealth, either as an end in itself or to fund the next step in a larger plan.`) {
        /* VILLAINOUS QUEST FOR ECONOMIC POWER Table 1-21 pg. 37*/
                /* `The villain wants ${economicMotive}` */
                const economicMotive0125 = `wealth in and of itself`;
                const economicMotive2650 = `funding for another evil plot not yet started`;
                const economicMotive5175 = `funding for another evil plot that\`s already in the works (the economic connection may often be the clue that leads to a party\`s discovery of the other plot.)`
                const economicMotive76100 = `to raise money on behalf of a greater villain of whom ${nomPronoun} is a minion`;
        
                const economicMotiveArray = [economicMotive0125, economicMotive2650, economicMotive5175, economicMotive76100];
                const economicMotiveRand = Math.floor(Math.random()*economicMotiveArray.length);
                const economicMotive = economicMotiveArray[economicMotiveRand];
        
                        /* The method the villain is using to gain wealth */
                const methodGainWealth0125 = `the villain has a legitimate business, but is destroying ${genPronoun} rivals by nefarious means (use the Destroy Community table for ideas)`;
                const methodGainWealth2650 = `the villain\`s business is to run scams (rigged gambling, counterfeiting, selling non-existing real estate, etc.)`;
                const methodGainWealth5175 = `the villain is selling dangerously flawed merchandise`;
                const methodGainWealth76100 = `the villain is selling stolen merchandise (possibly fencing for another villain, ${genPronoun} own boss, for ${genPronoun} own minions, or the minions of ${genPronoun} boss)`;
        
                const methodGainWealthArray = [methodGainWealth0125, methodGainWealth2650, methodGainWealth5175, methodGainWealth76100];
                const methodGainWealthRand = Math.floor(Math.random()*methodGainWealthArray.length);
                const methodGainWealth = methodGainWealthArray[methodGainWealthRand];

                        /* Particular features of the villain`s method for gaining wealth Table */
                const wealthOtherFactor0125 = `involves non-lethal force, extorion, or other intimidation.`;
                const wealthOtherFactor2650 = `involves minions who have infiltrated the legal system or governing body of the community.`;
                const wealthOtherFactor5175 = `involves murders.`;
                const wealthOtherFactor76100 = `involves magic such as spells, shapechanging, magical counterfeiting, or mental domination.`;
        
                const wealthOtherFactorArray = [wealthOtherFactor0125, wealthOtherFactor2650, wealthOtherFactor5175, wealthOtherFactor76100];
                const wealthOtherFactorRand = Math.floor(Math.random()*wealthOtherFactorArray.length);
                const wealthOtherFactor = wealthOtherFactorArray[wealthOtherFactorRand];

                let economicPowerDisplay = document.createElement(`div`);
                economicPowerDisplay.id = `economicPowerDisplay`;
                economicPowerDisplay.innerHTML = `The villain wants ${economicMotive} and gains it because ${methodGainWealth}, which ${wealthOtherFactor}`;
                document.getElementById(`plotTypeDisplay`).appendChild(economicPowerDisplay);
        } else {
                alert(`The plot isn\`t economic power!`)
        }
}
function displayCatastrophePlot() {
        const previousCatastrophe = document.getElementById(`catastropheDisplay`); /* Checks to see if there is an element already displaying this kind of plot, and removes it */
        if (previousCatastrophe) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousCatastrophe);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;
        
        if (plot === `The villain is trying to set off a natural, magical, psychic, or political disaster. This might be an end in itself, or the first step in some other plan.`) {
                /*EVOKE CATASTROPHIC EVENT Table 1-22 pg. 38*/
                const catastropheTargetArray = [`bridge`, `building`, `city`, `desert area`, `farm`, `forest`, `fortification`, `hill`, `holy site`, `lake or oasis`, `members of a particular bloodline or race`, `part of city (temple quarter, nobles, poor quarter, etc.)`, `political region`, `religious commune (monastery)`, `road`, `specific individual and his vicinity`, `swamp`, `temple`, `town`, `village`];
                const catastropheTargetRand = Math.floor(Math.random()*catastropheTargetArray.length);
                const catastropheTarget = catastropheTargetArray[catastropheTargetRand];
                
                const catastropheReq0105 = `Engineering: Mundane engineering is needed to complete preparations for the catastrophe. This could include construction of a building to the exact proportions needed, undermining a building, etc.`;
                const catastropheReq0610 = `Engineering: Mundane engineering is needed to complete preparations for the catastrophe. This could include construction of a building to the exact proportions needed, undermining a building, etc.`;
                const catastropheReq1115 = `Engineering: Mundane engineering is needed to complete preparations for the catastrophe. This could include construction of a building to the exact proportions needed, undermining a building, etc.`;
                const catastropheReq1620 = `Engineering: Mundane engineering is needed to complete preparations for the catastrophe. This could include construction of a building to the exact proportions needed, undermining a building, etc.`;
                const catastropheReq2125 = `Mystic object: Creation of an object that can magically bring about the catastrophe.`;
                const catastropheReq2630 = `Mystic object: Creation of an object that can magically bring about the catastrophe.`;
                const catastropheReq3135 = `Prayers for Intercession: The prayers and entreaties of enough evil (or subverted) worshippers to gain the attention of an evil deity, who will wreak the catastrophe.`;
                const catastropheReq3640 = `Prayers for Intercession: The prayers and entreaties of enough evil (or subverted) worshippers to gain the attention of an evil deity, who will wreak the catastrophe.`;
                const catastropheReq4145 = `Prayers for Summoning: The prayers and entreaties of enough evil (or subverted) worshippers to summon a power from beyond.`;
                const catastropheReq4650 = `Sacrifice: Enough human sacrifices.`;
                const catastropheReq5155 = `Sacrifice: Enough human sacrifices.`;
                const catastropheReq5660 = `Sacrifice: Enough human sacrifices.`;
                const catastropheReq6165 = `Spatial Alignment: Putting mystic objects into the proper alignment with each other.`;
                const catastropheReq6670 = `Spatial Alignment: Putting mystic objects into the proper alignment with each other.`;
                const catastropheReq7175 = `Substance: Enough blood or other particular substance for a sacrifice or for an engineering project.`;
                const catastropheReq7680 = `Substance: Enough blood or other particular substance for a sacrifice or for an engineering project.`;
                const catastropheReq8185 = `Substance: Enough blood or other particular substance for a sacrifice or for an engineering project.`;
                const catastropheReq8690 = `Substance: Enough blood or other particular substance for a sacrifice or for an engineering project.`;
                const catastropheReq9195 = `The Right Time: The prophecy-appointed time has not arrived, but the ritual is relatively simple. All that\`s needed is for the time to be right.`;
                const catastropheReq96100 = `The Right Time: The prophecy-appointed time has not arrived, but the ritual is relatively simple. All that\`s needed is for the time to be right.`;

                const catastropheReqArray = [catastropheReq0105, catastropheReq0610, catastropheReq1115, catastropheReq1620, catastropheReq2125, catastropheReq2630, catastropheReq3135, catastropheReq3640, catastropheReq4145, catastropheReq4650, catastropheReq5155, catastropheReq5660, catastropheReq6165, catastropheReq6670, catastropheReq7175, catastropheReq7680, catastropheReq8185, catastropheReq8690, catastropheReq9195, catastropheReq96100];
                const catastropheReqRand = Math.floor(Math.random()*catastropheReqArray.length);
                const catastropheReq = catastropheReqArray[catastropheReqRand];

                let catastropheDisplay = document.createElement(`div`);
                catastropheDisplay.id = `catastropheDisplay`;
                catastropheDisplay.innerHTML = `The villain is trying to evoke a catastrophe targeting a(n) ${catastropheTarget}, and requires ${catastropheReq}`;
                document.getElementById(`plotTypeDisplay`).appendChild(catastropheDisplay);
        } else {
                alert(`The plot isn\`t evoke catastrophe!`)
        }
}
function displayFoodPlot() {
        const previousFood = document.getElementById(`foodDisplay`); /* Checks to see if there is an element already displaying this kind of plot, and removes it */
        if (previousFood) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousFood);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;
        
        if (plot === `The villain seeks to get food for ${accPronoun}self, a monster, or for ${genPronoun} organization. Basic subsistence is the primary goal of many lesser villains, while reliable food sources for minions can be the objective of more powerful leaders.`) {
                /* FINDING FOOD PLOTS Table 1-23 pg. 39*/
                const foodActivity0105 = `The villain/monster feeds on people from within civilization, using a secret identity for cover. This sort of villain might be a shape-shifter, a cannibal, or a disguised non-human with enough or a bipedal shape to pass for human after dark.`;
                const foodActivity0610 = `The villain/monster feeds on people from a hidden place in civilization (does not need to resemble a human, but might).`;
                const foodActivity1115 = `The villain/monster has allies nearby that need to be fed. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} (or they) steals people, vegetables and grain, or livestock by means of luring them away or kidnapping them. This sort of approach is taken by a wide variety of creatures ranging from will-o-the-wisps to cattle rustlers.`;
                const foodActivity1620 = `The villain/monster feeds on people or livestock by making stealthy attacks from outside civilization.`;
                const foodActivity2125 = `The villain/monster lures people away from civilization to feed at leisure.`;
                const foodActivity2630 = `The villain/monster feeds on people by attacking them when they leave the boundaries of civilization. (This is virtually the default scenario of a monster lurking in the wilderness.`;
                const foodActivity3135 = `The villain/monster feeds on people who are given as a sacrifice or tribute by a reluctant community.`;
                const foodActivity3640 = `The villain/monster feeds on people who are given as a sacrifice or tribute by willing minions who run the community.`;
                const foodActivity4145 = `The villain/monster feeds on people in a way that leaves them alive for future feedings (e.g. parasite or other). The good source could be souls, blood, morale, ability scores, or even emotions such a jealousy.`;
                const foodActivity4650 = `The villain/monster feeds on people in a way that leaves the alive for future feedings, but not directly. In addition, the villain must process the vital essences before eating them. The \`processing\` is an extra step in the cycle.`;
                const foodActivity5155 = `The villain/monster is growing or raising something dangerous as a crop or livestock outside of civilization.`;
                const foodActivity5660 = `The villain/monster has a dangerous food source inside civilization (grows poison mushrooms or raises giant rats, for example).`;
                const foodActivity6165 = `The villain/monster alters a crop or livestock within civilization to make it usable for his consumption (and probably not for anyone else\`s).`;
                const foodActivity6670 = `The villain/monster has taken over an entire community for use as a food source.`;
                const foodActivity7175 = `The villain/monster has created a community (probably through kidnapping or taking human tribute) as a good source.`;
                const foodActivity7680 = `The villain/monster is inherently dangerous (possibly unintelligent monster) and sneaks into community to eat crops, livestock, or garbage.`;
                const foodActivity8185 = `The villain/monster lures away livestock or steals crops from civilized area.`;
                const foodActivity8690 = `The villain/monster or minions eats carrion - stealing bodies, etc. They might be creating \`accidental\` deaths first.`;
                const foodActivity9195 = `The villain/monster\`s food processing operation outside a community is causing environmental-type damagte in the community (fouled water, poisoned grass, clouds of poison gas, etc.)`;
                const foodActivity96100 = `The villain/monster gets tributes of normal food by using threats of violence, using hostages, taking legal action, etc.`;

                const foodActivityArray = [foodActivity0105, foodActivity0610, foodActivity1115, foodActivity1620, foodActivity2125, foodActivity2630, foodActivity3135, foodActivity3640, foodActivity4145, foodActivity4650, foodActivity5155, foodActivity5660, foodActivity6165, foodActivity6670, foodActivity7175, foodActivity7680, foodActivity8185, foodActivity8690, foodActivity9195, foodActivity96100];
                const foodActivityRand = Math.floor(Math.random()*foodActivityArray.length);
                const foodActivity = foodActivityArray[foodActivityRand];

                let foodDisplay = document.createElement(`div`);
                foodDisplay.id = `foodDisplay`;
                foodDisplay.innerHTML = `${foodActivity}`;
                document.getElementById(`plotTypeDisplay`).appendChild(foodDisplay);
        } else {
                alert(`The plot isn\`t get food!`)
        }
}
function displayGainFavorPlot() {
        const previousGainFavor = document.getElementById(`gainFavorDisplay`); /* Checks to see if there is an element already displaying this kind of plot, and removes it */
        if (previousGainFavor) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousGainFavor);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;
        
        if (plot === `The villain wants to impress someone. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} might be trying to impress ${genPronoun} boss, trying to gain an ally, or showing someone that ${nomPronoun}\`s worthy of employment as a minion.`) {
        /* GAINING FAVOR OF ANOTHER VILLAIN Table 1-24 pg. 40*/
                /* The method by which the villain in question seeks to gain the favor of the other villain */
                const methodGainFavor0110 = `bringing it back to life`;
                const methodGainFavor1120 = `bringing its minions back to life`;
                const methodGainFavor2130 = `offering it economic power`;
                const methodGainFavor3140 = `offering it something that increases its personal capabilities`;
                const methodGainFavor4150 = `providing food`;
                const methodGainFavor5160 = `providing slaves`;
                const methodGainFavor6170 = `rescuing it from prison`;
                const methodGainFavor7180 = `rescuing its minions from prison`;
                const methodGainFavor8190 = `summoning it from another plane of existence`;
                const methodGainFavor91100 = `taking political power on its behalf`;
        
                const methodGainFavorArray = [methodGainFavor0110, methodGainFavor1120, methodGainFavor2130, methodGainFavor3140, methodGainFavor4150, methodGainFavor5160, methodGainFavor6170, methodGainFavor7180, methodGainFavor8190, methodGainFavor91100];
                const methodGainFavorRand = Math.floor(Math.random()*methodGainFavorArray.length);
                const methodGainFavor = methodGainFavorArray[methodGainFavorRand];
        
                
        
                        /* The relationship of the villain in question to the villain whose favor ${nomPronoun} is seeking */
                const villainRelationship0110 = `because ${nomPronoun} is a disgraced follower performing a task set by the more powerful villain as a means of re-admittance to favor.`;
                const villainRelationship1120 = `because ${nomPronoun} is a disgraced follower seeking to regain favor on own initiative.`;
                const villainRelationship2130 = `because ${nomPronoun} wants initiation to a higher, formalized level within the second villain\`s organization (becoming a captain of thieves, for instance, or a fully ordained priest of an evil cult.`;
                const villainRelationship3140 = `because ${nomPronoun} is a minion acting on his own initiative to curry favor.`;
                const villainRelationship4150 = `because ${nomPronoun} is a minion following orders but going the extra mile (possibly going beyond the scope of his authority or allotted task, too).`;
                const villainRelationship5160 = `because ${nomPronoun} wants to obtain a specific task or favor from the second villain. In some cases, often when the second villain is a supernatural creature, the second villain might automatically have to perform the favor if the first villain completes the task.`;
                const villainRelationship6170 = `because ${nomPronoun} is the offspring or younger sibling of the more powerful villain.`;
                const villainRelationship7180 = `because the other villain is/are a powerful minion of his, or many minions, with whom ${nomPronoun} wants to maintain popularity.`;
                const villainRelationship8190 = `because ${nomPronoun} is a prospective minion (initiation or introduction).`;
                const villainRelationship91100 = `because the method of gaining favor must be performed on an ongoing basis, and the second villain can\`t do it alone. In this case, the first villain has considerable power over the second villain, who depends upon the first villain to keep performing the requisite task.`;
        
                const villainRelationshipArray = [villainRelationship0110, villainRelationship1120, villainRelationship2130, villainRelationship3140, villainRelationship4150, villainRelationship5160, villainRelationship6170, villainRelationship7180, villainRelationship8190, villainRelationship91100];
                const villainRelationshipRand = Math.floor(Math.random()*villainRelationshipArray.length);
                const villainRelationship = villainRelationshipArray[villainRelationshipRand];

                let gainFavorDisplay = document.createElement(`div`);
                gainFavorDisplay.id = `gainFavorDisplay`;
                gainFavorDisplay.innerHTML = `The villain wants to gain the favor of another villain by ${methodGainFavor} ${villainRelationship}`;
                document.getElementById(`plotTypeDisplay`).appendChild(gainFavorDisplay);
        } else {
                alert(`The plot isn\`t gain favor!`)
        }
}
function displayIncreasePersonalPlot() {
        const previousFood = document.getElementById(`increasePersonalDisplay`); /* Checks to see if there is an element already displaying this kind of plot, and removes it */
        if (previousFood) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousFood);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;
        
        if (plot === `The villain is trying to increase ${genPronoun} inherent person power. This might include gaining levels of experience, useful information, magic items, etc.`) {
        /* INCREASE PERSONAL CAPABILITY Table 1-25 pg. 40*/
                /* The method by which the villain is attempting to increase his person power... */
                const methodIncreaseCapability0110 = `activate a/the source of power for`;
                const methodIncreaseCapability1120 = `complete a ritual that brings forth`;
                const methodIncreaseCapability2130 = `complete terms of a prophesy that grants`;
                const methodIncreaseCapability3140 = `infiltrate a group to steal`;
                const methodIncreaseCapability4150 = `kidnap a person who knows how to create or tap into`;
                const methodIncreaseCapability5160 = `kidnap a person who knows location of`;
                const methodIncreaseCapability6170 = `petition a demon or other such being for`;
                const methodIncreaseCapability7180 = `research how to activate or use to best advantage`;
                const methodIncreaseCapability8190 = `research how to make`;
                const methodIncreaseCapability91100 = `steal from a person who has`;
        
                const methodIncreaseCapabilityArray = [methodIncreaseCapability0110, methodIncreaseCapability1120, methodIncreaseCapability2130, methodIncreaseCapability3140, methodIncreaseCapability4150, methodIncreaseCapability5160, methodIncreaseCapability6170, methodIncreaseCapability7180, methodIncreaseCapability8190, methodIncreaseCapability91100];
                const methodIncreaseCapabilityRand = Math.floor(Math.random()*methodIncreaseCapabilityArray.length);
                const methodIncreaseCapability = methodIncreaseCapabilityArray[methodIncreaseCapabilityRand];

                /* The object or target of the villain`s efforts */
                const increaseGoal0110 = `a divine source of personal power (summoned minions, improved abilities, etc.`;
                const increaseGoal1120 = `an item that increases villain\`s ability scores (or equivalent).`;
                const increaseGoal2130 = `an item that increases villain\`s hit dice (or equivalent).`
                const increaseGoal3140 = `an item that will bring villain new minions (legendary item, ability to animate dead, item that enchants people, etc.).`;
                const increaseGoal4150 = `an item that will increase villain\`s ability to spy on things (crystal ball, invisibility, divination, etc.).`;
                const increaseGoal5160 = `items that will increase villain\`s movement rate or movement capabilities.`;
                const increaseGoal6170 = `a magic item.`;
                const increaseGoal7180 = `money.`;
                const increaseGoal8190 = `a new source of minions.`;
                const increaseGoal91100 = `spells or a spell book.`;

                const increaseGoalArray = [increaseGoal0110, increaseGoal1120, increaseGoal2130, increaseGoal3140, increaseGoal4150, increaseGoal5160, increaseGoal6170, increaseGoal7180, increaseGoal8190, increaseGoal91100];
                const increaseGoalRand = Math.floor(Math.random()*increaseGoalArray.length);
                const increaseGoal = increaseGoalArray[increaseGoalRand];
                
                let increasePersonalDisplay = document.createElement(`div`);
                increasePersonalDisplay.id = `increasePersonalDisplay`;
                increasePersonalDisplay.innerHTML = `${nomPronoun} needs to ${methodIncreaseCapability} ${increaseGoal}`;
                document.getElementById(`plotTypeDisplay`).appendChild(increasePersonalDisplay);
        } else {
                alert(`The plot isn\`t increase personal power!`)
        }
}
function displayGainPoliticalPlot() {
        const previousGainPolitical = document.getElementById(`gainPoliticalDisplay`); /* Checks to see if there is an element already displaying this kind of plot, and removes it */
        if (previousGainPolitical) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousGainPolitical);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;
        
        if (plot === `The villain seeks to gain direct or indirect political power at some level of government.`) {
        /* GAIN POLITICAL POWER Tables 1-26 THROUGH 1-27 pgs. 41-45*/
                /* Scope of the power the villain seeks Table 1-26 pg. 41*/
                /* The villain seeks to gain power over a(n) ${powerGainScope} */
                const powerGainScope0108 = `a barbarian tribe`;
                const powerGainScope0916 = `a barony`;
                const powerGainScope1724 = `a city`;
                const powerGainScope2532 = `an extra-planar area`;
                const powerGainScope3340 = `a guild`;
                const powerGainScope4148 = `a humanoid tribe`;
                const powerGainScope4956 = `a kingdom`;
                const powerGainScope5765 = `a local region of civilization`;
                const powerGainScope6674 = `a local region of wilderness (with needed resources)`;
                const powerGainScope7583 = `a military unit`;
                const powerGainScope8492 = `a town`;
                const powerGainScope93100 = `a village`;
        
                const powerGainScopeArray = [powerGainScope0108, powerGainScope0916, powerGainScope1724, powerGainScope2532, powerGainScope3340, powerGainScope4148, powerGainScope4956, powerGainScope5765, powerGainScope6674, powerGainScope7583, powerGainScope8492, powerGainScope93100];
                const powerGainScopeRand = Math.floor(Math.random()*powerGainScopeArray.length);
                const powerGainScope = powerGainScopeArray[powerGainScopeRand];
        
                        /* Method of gaining power Table 1-27 pgs. 42-45*/
                        /* The villain`s method of gaining power is ${methodGainPower} */
                const methodGainPower01 = `Assassinate Leader with Accident. Villain is a leader\`s direct heir or is the second in command of a hierarchy, and is planning to assassinate the lader by creating an accident.`;
                const methodGainPower02 = `Assassinate Leader with Assassins. Villain is a leader\`s direct heir or second in command of a hierarchy, and is planning to hire assassins to remove the annoying impediment.`;
                const methodGainPower03 = `Behind the Throne - Criminal Power. Villain is building up a criminal organization to take over effective control of the targeted political organization, turning the existing source of authority into a mere figurehead.`;
                const methodGainPower04 = `Behind the Throne - Magical Domination. Villain is planning to dominate the organization\`s king or boss using magic, turning him into a puppet leader.`;
                const methodGainPower05 = `Behind the Throne - Magical Friendship. Villain is preparing to charm the leader using magic (as opposed to utterly dominating his will).`;
                const methodGainPower06 = `Behind the Throne - Military. Villain has enough forces to influence the leader\`s policies already, and is directing the organization\`s activities behind the scenes to his own advantage. The villain threatens (subtly or not) that if the leader does not accede to the villain\`s demands, the villain will use his troops to usurp authority.`;
                const methodGainPower07 = `Behind the Throne - Minion Shapechanger. Villain\`s minion is using shapechanging of some sort to impersonate a kidnapped rival, or even the leader of the organization.`;
                const methodGainPower08 = `Behind the Throne - Simulacrum. Villain seeks to replace the political leader or a rival for power with a simulacrum ${nomPronoun} controls.`;
                const methodGainPower09 = `Blackmail Rival - Lies. Villain seeks to blackmail a rival with trumped-up facts.`;
                const methodGainPower10 = `Blackmail Rival - Truth. Villain seeks to blackmail a rival with true facts.`;
                const methodGainPower11 = `Build up Favors. Villain is in control of the police or has the power to prosecute crimes. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} is using this power to make various powerful people indebted to ${accPronoun}, so that when ${nomPronoun} makes his move for power they will support ${accPronoun}.`;
                const methodGainPower12 = `Control Food Supply - Contamination. Villain plans to gain control of the food supply by stashing food stocks and then contamination everyone else\`s.`;
                const methodGainPower13 = `Control Food Supply - Dietary Restrictions. Villain plans to gain control of the food supply by creating a hidden stash of a particular type of food, then imposing dietary restrictons on other kinds of food using religion, law, or heavy taxes.`;
                const methodGainPower14 = `Control Legal System - Bribes. Villain is trying to take control of the legal system in the target area by bribing judges. Note: Almost all organizations have some sort of legal system for resolving disputes - this plot works for guilds and other organizations as well as cities and baronies.`;
                const methodGainPower15 = `Control Legal System - Intimidate Judges. Villain is trying to take control of the legal system in the target area by blackmailing or threatening judges. This works well for a villain who is the leader of a criminal underground, but can be used for any size or type of political organization.`;
                const methodGainPower16 = `Control Legal System - Replace Judges. Villain is trying to take control of the legal system in the target area by replacing independent judges with his own minions. His methods could include impeachment, assassination, rigged elections, or subverting/recruiting the existing judges. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} will likely need to use several methods in order to conceal the fact that lots of judges are suddenly stepping down or disappearing under strange circumstances.`;
                const methodGainPower17 = `Control Work Assignments. Villain seeks to control the assignment of jobs, giving them only to his supporters. This works well for a villain who is already in a position of some power - a guildmaster, a treasurer, or a labor leader, for instance. This sort of plot could affect jobs in areas as large as a kingdom or as small as a village, and the nature of the organization could range from royal courts to thieves guilds to religious organizations.`;
                const methodGainPower18 = `Coup d\`Etat. Villain is planning a coup d\`etat from the inside, with the help of allies in the community or organization.`;
                const methodGainPower19 = `Create Power Vacuum - Trap. Villain is creating a trap that will kill much of the leadership (collapsing the town hall, for example), and let ${accPronoun} take charge when there is no one else offering effective leadership.`;
                const methodGainPower20 = `Discredit Superior Officer - False Accusations. Villain plans to spread a rumor to his own leader\`s superior, indicating that his leader is involved in treachery.`;
                const methodGainPower21 = `Discredit Superior Officer - False Accusations to Followers. Villain plans to spread a rumor to the public at large (or to troops, or other followers) that his superior officer is engaged in unsuitable behavior.`;
                const methodGainPower22 = `Discredit Superior Officer - Inciting. Villain plans to set his superior officer up for failure by creating and inciting particular situations the superior officer is supposed to prevent from happening.`;
                const methodGainPower23 = `Discredit Superior Officer - Information. Villain plans to set his suuperior up for failure by giving way vital information about the superior officer\`s operations and plans. This will allow the leader\`s enemies or rivals to continually outwit and outperform the leader (until the villain, as his junior, is asked to take the post).`;
                const methodGainPower24 = `Discredit Superior Officer - Sabotage. Villain plans to set his superior officer up for failure by sabotaging his operations.`;
                const methodGainPower25 = `Dominate Population - Addictions. The villain is using an addictive substance (or an addictive event or experience) to bring members of the population under his thrall.`;
                const methodGainPower26 = `Dominate Population - Mental Domination. The villain is setting up an event that will have a tremendously powerful magical or mental effect, rendering everyone in the vicinity malleable to the villain\`s will.`;
                const methodGainPower27 = `Eliminate Advisor with Assassins. The villain is an advisor to the leader (not second in command), and is eliminating other advisors. Current method for eliminating the next adviser is to have him assassinated.`;
                const methodGainPower28 = `Eliminate Advisor with Frame-Up - Crime. The villain is an advisor to the leader (not second in command), and is eliminating other advisors. Current method for eliminating the next adviser is to frame him for a crime actually committed by the villain.`;
                const methodGainPower29 = `Eliminate Advisor with Frame-Up - Adultery. The villain is an advisor to the leader (not second in command), and is eliminating other advisors. Current method for eliminating the next adviser is to frame him for committing adultery (possibly with the top leader\`s wife).`;
                const methodGainPower30 = `Eliminate Advisor with Frame-Up - Lying. The villain is an advisor to the leader (not second in command), and is eliminating other advisors. Current method for eliminating the next adviser is to frame him for lying to the top leader (or some other serious lie).`;
                const methodGainPower31 = `Eliminate Advisor with Frame-Up - Cowardice. The villain is an advisor to the leader (not second in command), and is eliminating other advisors. Current method for eliminating the next adviser is to frame him for cowardice.`;
                const methodGainPower32 = `Eliminate Current Commander - Frame-Up for Crime. Villain is not yet an heir or second in command, but is working his way up the chain (if ${nomPronoun} has been committing crimes to do so this might be a reason why the party is getting involved). ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} plans to eliminate his current commander by framing him for a crime the villain has already committed.`;
                const methodGainPower33 = `Eliminate Current Commander - Frame-Up for Adultery. Villain is not yet an heir or second in command, but is working his way up the chan (if ${nomPronoun} has been committing crimes to do so this might be a reason why the party is getting involved). ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} plans to eliminate his current commander by framing him for adultery.`;
                const methodGainPower34 = `Eliminate Current Commander - Frame-Up for Cowardice. Villain is not yet an heir or second in command, but is working his way up the chan (if ${nomPronoun} has been committing crimes to do so this might be a reason why the party is getting involved). ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} plans to eliminate his current commander by framing him for cowardice.`;
                const methodGainPower35 = `Eliminate Current Commander - Frame-Up for Dishonor. Villain is not yet an heir or second in command, but is working his way up the chan (if ${nomPronoun} has been committing crimes to do so this might be a reason why the party is getting involved). ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} plans to eliminate his current commander by framing him for some dishonorable act - lying, for instance.`;
                const methodGainPower36 = `Eliminate Current Leader - Insanity. The villain is somehow causing insanity in the leader so ${nomPronoun} can shake up the hierarchy to his own advantage. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} is not necessarily the heir to power, but ${nomPronoun} expects that his position will be significantly advanced by the leader\`s removal.`;
                const methodGainPower37 = `Eliminate Rival - Magical Domination. The villain is planning to magically dominate a rival, turning him into a fall guy, causing him to resign, causing him to advance the villain in the hierarchy, etc.`;
                const methodGainPower38 = `Eliminate Rival - Magical Friendship. The villain is preparing to charm a rival into becoming his friend and ally, although the villain does not have enough power to complete dominate the rival.`;
                const methodGainPower39 = `Fake Miracles. The villain is fooling people into believing that ${nomPronoun} is performing wonders (these are actually staged events, staged attacks, staged healing, etc.). Note that these are not necessarily magical miracles - they might be military \`victories\` against the villain\`s own forces, for instance.`;
                const methodGainPower40 = `False Claim - Dynastic Succession. Villain plans to establish a false (or perhaps even real) claim to power based on the villain\`s family tree. Villain\`s purported ancestors were overthrown by the current leader\`s ancestors. This is probably done with forged documents \`proving\` ancestry or with a last testament and will.`;
                const methodGainPower41 = `False Claim - Family Succession. Villain plans to establish a false (or perhaps even real) claim to power based on the leader\`s family tree (as opposed to the villain\`s). Supposedly, leader\`s ancestor was adopted and named as the heir, while the villain\`s real or purported ancestor actually had the right by primogenitur. Or vice versa. This is probably done with forged documents.`;
                const methodGainPower42 = `False Defense - Leader\`s Base. The villain will stage an attack on a superior officer\`s base of power, and be in the right place at the right time to \`defend\` it from his own attack (the fight might be staged, or might be real), and thereby earn his superior officer\`s gratitude.`;
                const methodGainPower43 = `False Defense - Leader\`s Family. The villain will stage an attack on a superior officer\`s family, and be in the right place at the right time to \`defend\` it from his own attack (the fight might be staged, or might be real), and thereby earn his superior officer\`s gratitude.`;
                const methodGainPower44 = `False Defense - Leader\`s Home Community. The villain will stage an attack on a superior officer\`s home community, while the leader is away, placing ${accPronoun}self in the right place at the right time to \`defend\` the family from his own attack, and thereby earn his superior officer\`s gratitude.`;
                const methodGainPower45 = `False Identity - Higher Authority (minion). Villain\`s minion is posing as the representative of a higher authority (religious, feudal, etc.) and is delivering \`orders\` to the leader. The imposture could be accomplished with shapechanging, forged documents, or sheer bravado.`;
                const methodGainPower46 = `False Identity - Higher Authority (villain). Villain is posing as the representative of a higher authority (religious, feudal, etc.) and is delivering \`orders\` to the leader. The imposture could be accomplished with shapechanging, forged documents, or sheer bravado.`;
                const methodGainPower47 = `Financial Scheme - Debt and Foreclosure. The villain plans to put a rival into monetary debt to the villain. This could be done by a combination of financial scams and with the help of moneylenders who are a front for the villain. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} might also be buying the rival\`s debts from moneylenders. Foreclosure or gaining influence through the threat of foreclosure might be the leverage ${nomPronoun} plans to achieve.`
                const methodGainPower48 = `Financial Scheme - Identity Theft. The villain is trying to create a financial disaster for one of his rivals, such as an equal rival, a superior officer, or even the top leader in the chain of command. His method is to use the opponent\`s identity to borrow money and incur debts in the opponent\`s name. The villain, of course, benefits twice: ${nomPronoun} not only eliminates his rival, but also ${nomPronoun} gets the fraudulently obtained cash.`;
                const methodGainPower49 = `Financial Scheme - Scams. The villain is trying to create a financial disaster for one of his rivals by targeting them directly with financial scams. Probably the villain is trying to pocket the moeny from the scams, too.`;
                const methodGainPower50 = `Financial Scheme - Theft. The villain is trying to create a financial disaster for one of his rivals by stealing the rival\`s money.`;
                const methodGainPower51 = `Impersonation - Heir. The villain plans to pose as a lost or missing heir (possibly one that became lost or missing through the villain\`s efforts).`;
                const methodGainPower52 = `Impersonation - Shapechanging. The villain is using shapechanging of some kind to impersonate a kidnapped rival, or even the leader of the organization.`;
                const methodGainPower53 = `Infiltration - Mental. Villain is in control of guards or other military force, and is corrupting their minds with charm, hypnosis, unbelievable charisma, etc. His goal is to use them as the shock troops for some sort of coup attempt.`;
                const methodGainPower54 = `Infiltration - Purge. The villain is (or has been) infiltrating troops, monsters, etc. into the community where the organization is based, planning for a sudden and coordinated purge of his rivals.`;
                const methodGainPower55 = `Infiltration - Takeover. The villain is (or has been) infiltrating troops, monsters, etc. into the community where the organization is based, planning for a sudden and coordinated takeover of key locations.`;
                const methodGainPower56 = `Kidnap Rival. The villain seeks to kidnap a rival. The goal is to get information, get the hostage to write letters that help the villain, etc.`;
                const methodGainPower57 = `Kidnap Rival\`s Family. The villain seeks to take a rival\`s family or friends hostage to influence the rival\`s actions.`;
                const methodGainPower58 = `Manipulate Omens Against Rival. The villain plans to manipulate omens to suggest that his rival is evil or unsuitable for command.`;
                const methodGainPower59 = `Manipulate Omens For Self. The villain plans to manipulate omens to suggest that ${nomPronoun} (or his minion) is the best choice for something, the rightful leader, the only hope, etc.`;
                const methodGainPower60 = `Marry Heir - Magical Domination. The villain plans to seduce the top leader\`s daughter (or son, as applicable) by using charm, hypnotism, love potions, etc. This part of the plot may already have occurred, putting the player characters into the position of having to stop the marriage or otherwise foil the plot.`;
                const methodGainPower61 = `Marry Heir - Seduction. The villain plans to gain the position of heir to political power by marrying one of the leader\`s children. The villain is using traditional means to do so (presumably this is a villain with tremendous charisma).`;
                const methodGainPower62 = `Military Conquest. The villain has (or is building) enough military power (outside the community) to make a direct military conquest. This is fairly straightforward.`;
                const methodGainPower63 = `Military Interdiction. The villain is using military powers to cut off supplies or exports - this is the classic brigand-villain who starves his enemies into submission and is given power when they surrender. In a more abstract sense, a sinister merchant could use a financial version of this scheme against a guild or another merchant, using thieves, bandits, and pirates to stop their exports and trade.`;
                const methodGainPower64 = `Military Intimidation. The villain is building up a military force inside or outside the organization/community, planning to reach the point where his military power is enough to allow ${accPronoun} to influence policy.`;
                const methodGainPower65 = `Military Takeover - Circumventing Defenses. The villain has military power of his own, but his real project is to circumvent the target\`s defenses. In the case of a fortification, this could include digging a secret tunnel beneath the walls; in other cases, it could be a preparation to poison or incapacitate defenders, hire a traitor to open the gates, etc.`;
                const methodGainPower66 = `Military Takeover - Removing Key People. The villain has military power and is ready to attack. His first step is to remove a few key people of power who represent a military threat to ${accPronoun}. Note: in addition to controlling a government, this plot could also be applied to the takeover of a guild by means of a purge - the strongest guild members and their adventurer friends might be the targets of the purge.`;
                const methodGainPower67 = `Military Takeover - Stealing Key. The villain has military power, but is working on weakening the defenses of the target. His immediate method is to steal a key or password that gives ${accPronoun} access to the defensive item. The item might be magical, or it might be, say, the password that lets people into the area where the catapults are located (so that they can be sabotaged just before the attack).`;
                const methodGainPower68 = `Military Takeover - War of Attrition. The villain has military power, but is working on weakening the defenses of his target by ambushing enemy soldiers or guards before the actual assault, thus reducing their numbers.`;
                const methodGainPower69 = `Minion Seduces Heir. The villain has a minion or an ally who is seducing the heir. The minion could possibly be a supernatural creature, such as a succubus.`;
                const methodGainPower70 = `Mob Charisma. By sheer force of charisma, the villain is whipping the population into a frenzy, preparing to mount a popular takeover in a series of riots.`;
                const methodGainPower71 = `Murder Own Powerful Spouse. The villain is married to the leader already, who is now his only impediment to absolute power.`;
                const methodGainPower72 = `Murder Threats. Villain threatens to kill people in the general population one day at a time until the leader surrenders control. Unless ${nomPronoun} is acting with a secret identity, the villain is either very powerful or very insane to think ${nomPronoun} can hold onto power after taking it this way - but perhaps ${nomPronoun}\`s right. If ${nomPronoun} is not acting with a secret identity, ${nomPronoun} likely has a hidden stronghold to protect ${accPronoun}self from attempts to stop ${accPronoun}.`;
                const methodGainPower73 = `Overt Curse for Control. Villain has cursed the leader, one of the leader\`s main followers, or a member of the leader\`s family. Everyone knows that the villain created the curse. The villain will only remove the curse if the leader steps down in favor of the villain.`;
                const methodGainPower74 = `Party Misdirected. The \`villain\` is the good guy, and the leader is the bad guy, but this is not clear at the outset of the adventure.`;
                const methodGainPower75 = `Pied Piper Strategy - Heirship. The villain controls monsters or predators that are attacking everywhere in the general population. The villain offers to get rid of them if ${nomPronoun} is made the leader\`s heir (${nomPronoun} probably won\`t reveal that ${nomPronoun} started the problem in the first place).`;
                const methodGainPower76 = `Pied Piper Strategy - Position of Authority. The villain controls monsters or predators that are attacking everywhere in the general population. The villain offers to get rid of them if ${nomPronoun} is given a particular position of authority (${nomPronoun} probably won\`t reveal that ${nomPronoun} started the problem in the first place.)`;
                const methodGainPower77 = `Pied Piper Strategy - Marry Heir. The villain controls monsters or predators that are attacking everywhere in the general population. The villain offers to get rid of them if ${nomPronoun} is allowed to marry the leader\`s heir (${nomPronoun} probably won\`t reveal that ${nomPronoun} started the problem in the first place).`;
                const methodGainPower78 = `Pied Piper Strategy - Total Control. The villain controls monsters or predators that are attacking everywhere in the general population. The villain offers to get rid of them if ${nomPronoun} is given control (${nomPronoun} probably won\`t reveal that ${nomPronoun} started the problem in the first place).`;
                const methodGainPower79 = `Prepared Purge. The villain is working on assembling all of ${genPronoun} rivals into a specific, vulnerable location for a single, decisive strike. As the foundation for an adventure, the characters might have been hired as security for the event, as a bodyguard, or might stumble onto the plot before the strike takes place. Conversely, this plot could be used as a backstory to explain why the characters have just entered a community thrown into chaos by a successful purge.`;
                const methodGainPower80 = `Prosecute Rivals. The villain is in control of the police, or has the power to prosecute crimes. ${nomPronoun.charAt(0).toUpperCase() + nomPronoun.slice(1)} is using this power to eliminate ${genPronoun} rivals, investigating them or charging them with crimes.`;
                const methodGainPower81 = `Replace Key Leaders. The villain is replacing key members of the population with shapeshifting minions who will support ${accPronoun} when ${nomPronoun} makes ${genPronoun} bid for power.`;
                const methodGainPower82 = `Rig Election for Ally. The villain is rigging an election to get a friend or ally elected into a position of power. THe position might be a village alderman, the chancellor of the exchequer, judge, master of the revels, etc.`;
                const methodGainPower83 = `Rig Election for Minion. The villain is rigging an election to get one of ${genPronoun} minions elected to a position of power.`;
                const methodGainPower84 = `Rig Election for Self. The villain is rigging an election to get ${accPronoun}self elected into a position of power.`;
                const methodGainPower85 = `Rig Vote Against Rival - Financial. The villain is rigging a vote in favor of a law that will create problems for a rival if the law is passed - it will create oppressive taxes on the rival\`s (but not the villain\`s) main source of income, as one example.`;
                const methodGainPower86 = `Rig Vote Against Rival - Status and Standing. The villain is rigging a vote in favor of a law that will create problems for a rival if the law is passed. It will make the rival ineligible to hold his current office. Examples include votes that discriminate on the basis of race or gender, require minimum financial resources, require that the office holder has never been arrested for drunkenness, etc.`;
                const methodGainPower87 = `Secret Curse for Heirship. The villain has cursed the leader, one of the leader\`s main followers, or a member of the leader\`s family. It is not known who created the curse, but the villain will offer to remove the curse if ${nomPronoun} is declared the rightful heir to power. This is very similar to the Pied Piper strategy.`;
                const methodGainPower88 = `Secret Curse for Position of Authority. The villain has cursed the leader, one of the leader\`s main followers, or a member of the leader\`s family. It is not known who created the curse, but the villain will offer to remove the curse if ${nomPronoun} is granted a position of authority (possibly a very minor one).`;
                const methodGainPower89 = `Secret Curse for Total Control. The villain has cursed the leader, one of the leader\`s main followers, or a member of the leader\`s family. It is not known who created the curse, but the villain will offer to remove the curse if ${nomPronoun} is acclaimed as the new leader (this is unlikely to work if the target is a governmental organization but might work very well in a financial organization such as a guild).`;
                const methodGainPower90 = `Secret Curse to Marry Heir. The villain has cursed the leader, one of the leader\`s main followers, or a member of the leader\`s family. It is not known who created the curse, but the villain will offer to remove the curse if ${nomPronoun} is allowed to marry the heiress.`;
                const methodGainPower91 = `Seize Key Location and Interdict. The villain plans to seize a stronghold that controls supply or access to the targeted area, whereupon ${nomPronoun} will simply demand that the current leader surrender power. This is a preparation for a Military Interdiction, although the key feature is to improve that gambit with possession of the stronghold.`;
                const methodGainPower92 = `Sends Anti-Rival Dreams. The villain has the ability to influence another person\`s dreams, and is broadcasting them to suggest that ${genPronoun} rival is a bad person or otherwise unsuitable. The method used might be a magic item, a minion with this supernatural ability, or possibly influencing dreams is one of the villain\`s own inherent powers.`;
                const methodGainPower93 = `Sends Pro-Villain Dreams. The villain has the ability to influence another person\`s dreams, and is broadcasting them to suggest that ${nomPronoun} or ${genPronoun} minion should be in charge. The method used might be a magic item, a minion with this supernatural ability, or possibly influencing dreams is one of the villain\`s own inherent powers.`;
                const methodGainPower94 = `Take Symbol of Authority. The villain is trying to take control of a particular symbol of authority (a crown, scepter, etc.) that actually conveys the authority ${nomPronoun} seeks. This might be a tradition that has expired, but which could still be a big problem for the existing leader. As an example: \`Whosoever holds the Sword of Karnak is the rightful king of Karnakland...`;
                const methodGainPower95 = `Threat to Unleash Catastrophe. The villain has set things up (and must be able to prove it) so that ${nomPronoun} can unleash a catastrophe. Unless the leader surrenders control by a specific time, the villain will cause the catastrophe to take place.`;
                const methodGainPower96 = `Threaten Food Shortage. The villain controls the area\`s food supply, and threatens to cut it off if ${nomPronoun} is not granted a position of authority. Note that this might be a permissable and legal threat if the villain is a baron who supplies a town with food - or it might be completely illegal if the villain is an orcish chief who has conquered the nearby countryside.`;
                const methodGainPower97 = `Threaten Labor Shortage. Villain is in enough of a position of economic power that ${nomPronoun} can cause a guild or group of laborers to go on strike unless the villain is granted more power. Note that the villain can reverse the appearance of this plot, too, by creating a situation where the strike looks inevitable unless the villain steps in to solve it.`;
                const methodGainPower98 = `Undermine Leader\`s Credibility. Villain is trying to undermine the leader\`s credibility by spreading rumors and lies indicating that hte leader is not the legitimate ruler, or that ${nomPronoun} is incompetent. Presumably, the villain has a way of stepping into power if the leader is removed.`;
                const methodGainPower99 = `Use Fall Guys. The villain is insinuating ${accPronoun}self into the leader\`s confidence by setting up dupes to oppose the leader - then giving information about their activities to ${accPronoun}. The fall guys are either set up anonymously, or they were hired directly by the villain - in which case they have to die in order for the villain\`s plan to remain under cover. A survivor would pose a serious problem for the villain if the survivor knows of the villain\`s involvement. Player characters might get hired as the dupes...`;
                const methodGainPower100 = `Weaken Rival - Destroy Base. The villain is trying to destroy a community that forms the base of ${genPronoun} rival\`s economic or political power. For example, if the rival is a feudal baron, the villain might be targeting the rival\`s fief or fiefdoms.`;
                
                const methodGainPowerArray = [methodGainPower01, methodGainPower02, methodGainPower03, methodGainPower04, methodGainPower05, methodGainPower06, methodGainPower07, methodGainPower08, methodGainPower09, methodGainPower10, methodGainPower11, methodGainPower12, methodGainPower13, methodGainPower14, methodGainPower15, methodGainPower16, methodGainPower17, methodGainPower18, methodGainPower19, methodGainPower20, methodGainPower21, methodGainPower22, methodGainPower23, methodGainPower24, methodGainPower25, methodGainPower26, methodGainPower27, methodGainPower28, methodGainPower29, methodGainPower30, methodGainPower31, methodGainPower32, methodGainPower33, methodGainPower34, methodGainPower35, methodGainPower36, methodGainPower37, methodGainPower38, methodGainPower39, methodGainPower40, methodGainPower41, methodGainPower42, methodGainPower43, methodGainPower44, methodGainPower45, methodGainPower46, methodGainPower47, methodGainPower48, methodGainPower49, methodGainPower50, methodGainPower51, methodGainPower52, methodGainPower53, methodGainPower54, methodGainPower55, methodGainPower56, methodGainPower57, methodGainPower58, methodGainPower59, methodGainPower60, methodGainPower61, methodGainPower62, methodGainPower63, methodGainPower64, methodGainPower65, methodGainPower66, methodGainPower67, methodGainPower68, methodGainPower69, methodGainPower70, methodGainPower71, methodGainPower72, methodGainPower73, methodGainPower74, methodGainPower75, methodGainPower76, methodGainPower77, methodGainPower78, methodGainPower79, methodGainPower80, methodGainPower81, methodGainPower82, methodGainPower83, methodGainPower84, methodGainPower85, methodGainPower86, methodGainPower87, methodGainPower88, methodGainPower89, methodGainPower90, methodGainPower91, methodGainPower92, methodGainPower93, methodGainPower94, methodGainPower95, methodGainPower96, methodGainPower97, methodGainPower98, methodGainPower99, methodGainPower100];
                const methodGainPowerRand = Math.floor(Math.random()*methodGainPowerArray.length);
                const methodGainPower = methodGainPowerArray[methodGainPowerRand];
                
                let gainPoliticalDisplay = document.createElement(`div`);
                gainPoliticalDisplay.id = `gainPoliticalDisplay`;
                gainPoliticalDisplay.innerHTML = `The villain is trying to gain political power at the level of ${powerGainScope} via ${methodGainPower}`;
                document.getElementById(`plotTypeDisplay`).appendChild(gainPoliticalDisplay);
        } else {
                alert(`The plot isn\`t gain political power!`)
        }
}
function displayRandomActsPlot() {
        const previousRandomActs = document.getElementById(`randomActsDisplay`); /* Checks to see if there is an element already displaying this kind of plot, and removes it */
        if (previousRandomActs) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousRandomActs);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;

                /* RANDOM ACTS Tables 1-28 THROUGH 1-29*/
                const natureRandomness0110 = `The villain plays dangerous practical jokes. The villain might be leaving clues along with the jokes, ${nomPronoun} might be a demented jester, or might just be possessed of a grisly sense of humor.`;
                const natureRandomness1140 = `The villain indulges in destruction of property, by such means as arson or mere vandalism.`;
                const natureRandomness4150 = `The villain commits identical but otherwise trivial thefts of a particular sort of object, or from a particular type of person, and/or use of a particular and unusual method of theft (c.f., the Grey Mouser\`s thefts of candles and carpets in Fritz Leiber\`s short stories).`;
                const natureRandomness5180 = `The villain indulges in unplanned assaults committed when the opportunity arises (e.g., villain is a serial killer, a highwayman, an ambusher, or a violent kleptomaniac).`;
                const natureRandomness8190 = `The villain evinces, produces, or casts different magical effects on a certain timetable, at random times, or in particular places (when ${nomPronoun} finds ${accPronoun}self in such a place). Roll on Table 1-29: Time Cycles:`;
                const natureRandomness91100 = `The villain\`s nature changes on a certain timetable, at random times, or in particular places. Examples include lycanthropy, vampirism, Jekyll/Hyde transformations, or moon-madness. Roll on Table 1-29: Time Cycles:`;

                const natureRandomnessArray = [natureRandomness0110, natureRandomness1140, natureRandomness4150, natureRandomness5180, natureRandomness8190, natureRandomness91100];
                const natureRandomnessRand = Math.floor(Math.random()*natureRandomnessArray.length);
                const natureRandomness = natureRandomnessArray[natureRandomnessRand];

        if (plot === `The villain acts randomly in villainous ways.`) {
                if (natureRandomness === natureRandomness8190 || natureRandomness === natureRandomness91100) {
                                /* Time Cycles Table 1-29 */
                        const apogeePerigreeCycle = `Apogee and Perigee (solar, lunar, or other). Perigee is the closest point in the orbit of two celestial objects, and Apogee is the farthest point. Obviously,the orbit has to be elliptical, not circular, in order to have closer and farther points in the orbit. Keep in mind that this near-far relationship could exist between all kinds of celestial objects, not just suns and moons. Comet cycles are based on apogees and perigees, meteors move around with apogees and perigees, and even magical structures could have such a relationship to each other. Magical objects on the earth might activate only when a sun or moon is close; or perhaps the magical objects are huge metal blocks placed in the sky by some forgotten, ancient race, designed for some inscrutable purpose…`;
                        const calendarCycle = `Calendar Cycles. Many cultures group years into a repeating cycle, treating different years much as Western culture interpreted the zodiacal segments of a single year. The Chinese Calendar, for example, follows a cycle of the Year of the Rat, Year of the Ox, Year of the Tiger, Year of the Rabbit, Year of the Dragon, Year of the Snake, Year of the Horse, Year of the Goat, Year of the Monkey, Year of the Rooster, Year of the Dog, and Year of the Boar. Certain characteristics are attributed to people born in the different years.`;
                        const celestialCycle = `Celestial Cycles. The zodiac is a division of the sky into twelve regions, each called a “house.” The regions are: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. Each house is associated with behaviors and with a particular metaphorical emblem. A fantasy world might have different zodiacal signs, or a different method of interpreting the movements of the stars. The zodiac is linked to the solar year, not the lunar year.`;
                        const cometCycle = `Comet Cycles. The appearance of certain predictable comets in the night sky is often given mystical significance. Comet cycles can be a great adventure-generating device because of the long intervals between the comet\`s appearances. Lots of unpredictable things can happen to places, societies, and collective memory while the comet is away. For example: if some form of lycanthropy is linked to the appearance of a comet rather than a full moon, the lycanthropic disease might be transmitted far and wide while dormant, then suddenly appear all over the place when the comet appears in the sky. It would become a sort of celestial retro-virus.`;
                        const deviceCycle = `Device-Driven Cycle. A cycle might be derived from the operation of a device that divides time into a regular or irregular pattern. For instance, if the cycle is determined by the burning of candles without regard to the length of the candle, the cycle would be irregular. If the candles were scrupulously measured to be identical, the candle-driven cycle would be regular. Devices to measure out time could involve dripping water, candles, hourglasses, water wheels, gears, and many other mechanical arrangements.`;
                        const equinoxSolstice = `Equinox and Solstice (solar cycle). A solstice is one of the two times of year when the sun is farthest off the celestial equator. These occur at approximately June 22 (the summer solstice) and December 22 (the winter solstice). Summer solstice is the shortest night of the year, and winter solstice is the longest night. The equinox is when the sun crosses the equator and days and nights are of closest to equal length. The equinoxes occur at approximately March 21 (the Vernal Equinox, also the first day of Spring) and September 23 (the Autumnal Equinox). Note that Autumn and Spring are reversed for the northern and southern hemispheres of the earth.`;
                        const fashionCycle = `Fashion Cycles. The types of clothes and the jewelry people wear comes into and out of fashion periodically, as do haircuts, luxury commodities, philosophies, and religious practices. Magical effects like planar gates could easily be influenced by fashions in behavior or religion. It might be, for example, that a planar gate opens only when a local god has a minimum number of worshippers present at a significant ritual. When it becomes more fashionable for people to worship that god, the chance of the gate opening would suddenly increase.`;
                        const freezeThawCycle = `Freezing/Thawing Cycle. A particular cycle for a villain\`s activities, or the opening of some sort of portal or dungeon entrance, could be linked to the seasonal freezing and thawing of a barrier that blocks the portal, or of a mechanism that controls it. The builder might have intended the cycle of freezing and thawing, or the seasons might have changed since the original construction. Freezing and thawing also affect the volume of water moving in rivers, and patterns of migration by animals. This is a time cycle that can be used to drive a wide variety of adventures and monsters.`;
                        const lunarCycle = `Lunar Cycle. Earth\`s lunar cycle from new moon to new moon is 29.5 days, and is called the Synodic Lunar Cycle. Measuring the lunar cycle based on when the moon arrives in the same place in the sky (regardless of phase) is called the Sidereal Cycle and is 27.1 days in length. For gaming purposes, the “average” lunar cycle of 28 days is probably close enough unless the adventure is deeply involved in astrology. The phases of the moon are: new moon, crescent moon, first quarter moon, waxing gibbous moon, full moon, waning gibbous moon, last quarter moon, crescent moon, and then new moon again. The cycle of lunar eclipses is also an excellent fantasy theme, although the cycle of an eclipse is much longer than the cycle of the lunar phases.`;
                        const morphCycleOne = `Morphological Cycle (one creature). Some creatures have a life cycle in which their form changes radically; butterflies begin as caterpillars, frogs begin as tadpoles, many insects go through a pupae or larval stage. Although this is related to the reproductive cycle of the species, the radical morphological changes allow these creatures to have the right body-form for the right purpose at the right time. The caterpillar form, for example, is well adapted to eating huge quantities of food, whereas the mobility of the butterfly stage allows for finding stronger mates more easily. Intelligent creatures with morphological cycles might open and close portals (or be able to, based on their current phase). For example, a gate might remain closed while eggs gestate in some bizarre inter-dimensional space, or be opened when the creatures are in a predatory body-form and then close again. Only the strong and well fed predators would make it back to the gate, and would then be all together within the gate for the mating cycle to begin. The possible variations on this pattern are quite numerous. If a villain is acting according to such a life cycle, it\`s not necessarily because the villain is one of the morphologically shifting creatures. It might be that the villain knows how to take advantage of the changing life forms of the creatures, or that ${nomPronoun}\`s allied to them but can only take advantage of the alliance when the creatures are in an intelligent form, a dangerous form, a magically powerful form, or what have you. Again, the possibilities are vast.`;
                        const morphCycleSeries = `Morphological Life Cycle (series of creatures). Just as a particular life form may go through radical morphological changes in order to link up form with function in a series of steps, it is also possible for a species to generate a sequence of life forms, only one of which is the breeder. As an example, envision a life form whose “queen” and “drone” eggs stay dormant for a long period of time, and need to be shifted from a hot incubation environment to a colder hatching environment. One “generation” of workers is a hot-weather creature that cares for the eggs during the incubation phase. As the incubation phase ends, the worker mate among themselves, producing an entirely different form - a flying form well suited for migration. The flying forms transport the eggs to a colder climate in a migration, breed again to create a cold-weather worker caste, and then die. The cold-weather caste hatches rapidly in the cold, and these workers care for the queen and drone eggs. The queens and drones fly back to the hot-weather area to breed and lay eggs of three kinds: queens, drones, and more hot-weather workers. The hot-weather workers hatch quickly to care for the new queen and drone eggs, and the cycle begins again. At some point in such a cycle, it might be that the door to underground hatching chambers must be unsealed, or the migration might take place across different planes of existence, requiring the temporary opening of planar gates. A villain\`s motivation in all this could be of many different kinds: ${nomPronoun} might be intercepting the migrations, stealing eggs, using the unique capabilities of one of the life forms in an alliance, etc.`;
                        const planetaryCycle = `Planetary Cycles. The proximity of particular planets to the Earth, or their location within a region of the sky (particularly a zodiacal region) can be a usable cycle for the purposes of a fantasy world, possibly having effects on magic, on different kinds of magic, villain motivations, and the opening or closing of planar gates or dungeon entrances.`;
                        const reproductiveCycle = `Reproductive Cycle. The average human menstrual cycle is 28 days. If the villainess is non-human, the cycle might not be a menstrual cycle, but a cycle of being “in heat” or “in season.” This same pattern might apply to unusual monsters as well as non-human animals. Female dogs stay in heat for about 21-28 days depending on breed (as one example of a heat cycle). Note: the cycle of a male villain\`s activity might be linked to someone else\`s reproductive cycle. The purpose of a dungeon or planar gate that opens and seals based on the reproductive cycle of a tribe or being is fairly obvious, and could (ahem) give birth to interesting adventure scenarios.`;
                        const magicalPowerCycle = `Rising and Falling Magical Power. The lunar, menstrual, and solar cycles are all associated with the rise and fall of magical capabilities, but a fantasy world may have an independent cycle of rising a falling magical power, not marked by these factors. Fluctuations in magic power might be druidic (some fluctuation in the earth\`s spiritual nature), might be related to arcane magic (a fluctuation in the eldritch energy that can be tapped by spells) or might be related to a fluctuation in divine power (possibly related to planar “distance, a period of dormancy, or divine battles that occupy the attention of the gods from time to time). A wizard\`s personal capability might be linked to the concept of “mana,” personal reserves of magical power that might shift with the tides of time. Monsters might also feel the effects of magical change.`;
                        const scripturalCycle = `Scriptural Cycle. In Judaism, the Torah (that\`s the five books of Moses, in case you\`re not familiar) is divided into parshas (segments) one of which is read and studied each seven days. The parshas correspond to the Jewish lunar calendar, so that the same parsha is read at the same lunar date every year. The point of completion of the reading, when the Torah scroll is rolled back to the beginning is a major holiday, as is the middle of the Torah (the day of atonement) and the reading on the new year (which precedes the day of atonement by a week). A religious scripture in a fantasy world might also follow a cycle not related to the calendar - planar gates or subterranean chambers might be opened (or open of their own accord) in a cycle driven by the reading of scriptures instead of a calendar cycle. The reading itself might trigger these events, rather than merely corresponding to them.`;
                        const secondaryEffectCycle = `Secondary Effect Cycle. Any of the various cycles listed in this table might be the cause of some other secondary effect that normally (but does not always) result from the primary cycle. For instance, the hatching patterns of locusts often (but does not always) cause famines. The focus of your adventure might not be the locust hatching, but the resulting famine. The periodic flooding of the Nile river was necessary to good harvests in Ancient Egypt; when that cycle failed due to low rainfall in the African interior, famines and food shortages resulted in Egypt. Adventures premised upon the secondary effects of a primary cycle might focus on the times when the expected result (the flooding of the Nile, or a locust plague) doesn\`t take place. Why didn\`t it? The answer might be valuable, crucial, or financially rewarding.`;
                        const temperatureCycle = `Temperature Cycles. Variations in temperature can cause all sorts of varying human behaviors, cause changes in economic factors, and can also trigger certain events in the animal and plant kingdoms. Consider such things as a locust-like insect with eggs that lie dormant until particularly hot temperatures arrive. In a completely different sort of example, consider than a villain\`s opportunities for villainy might be considerably enhanced if the local community is snowbound, huddled up in cottages instead of wandering about the village with prying eyes that might see what ${nomPronoun}\`s doing…`;
                        const traumaticStressCycle = `Traumatic Stress Cycle. Individuals who have suffered traumatic stress may re-live the event or its emotional impact, and this often happens on or around the anniversary of the event. The cycle could also be based on any cycle of events that either symbolize or reproduce the conditions and setting of the traumatic event. A fantasy world might have an analogue, in other words, to the way many War veterans react to the sound of helicopters and/or fireworks. `;

                        const timeCycleArray = [apogeePerigreeCycle, calendarCycle, celestialCycle, cometCycle, deviceCycle, equinoxSolstice, fashionCycle, freezeThawCycle, lunarCycle, morphCycleOne, morphCycleSeries, planetaryCycle, reproductiveCycle, magicalPowerCycle, scripturalCycle, secondaryEffectCycle, temperatureCycle, traumaticStressCycle];
                        const timeCycleRand = Math.floor(Math.random()*timeCycleArray.length);
                        const timeCycle = timeCycleArray[timeCycleRand];
                        
                        let randomActsDisplay = document.createElement(`div`);
                        randomActsDisplay.id = `randomActsDisplay`;
                        randomActsDisplay.innerHTML = `${natureRandomness} At times determined by ${timeCycle}`;
                        document.getElementById(`plotTypeDisplay`).appendChild(randomActsDisplay);
                } else {
                        let randomActsDisplay = document.createElement(`div`);
                        randomActsDisplay.id = `randomActsDisplay`;
                        randomActsDisplay.innerHTML = `${natureRandomness}`;
                        document.getElementById(`plotTypeDisplay`).appendChild(randomActsDisplay);
                }
        } else {
                alert(`The plot isn\`t random acts!`)
        }
}
function displayReputationPlot() {
        const previousReputation = document.getElementById(`reputationDisplay`); /* Checks to see if there is an element already displaying this kind of plot, and removes it */
        if (previousReputation) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousReputation);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;

        if (plot === `The villain is trying to enhance ${genPronoun} own reputation, either as an invincible villain or as a good person (which would be an infiltration tactic).`) {
                /* INCREASE REPUTATION Table 1-30*/
                const whoseReputationArray = [`the villain\`s own reputation`, `the reputation of the villain\`s boss or master`, `the reputation of one of hte villain\`s minions`, `the reputation of one of the villain\`s allies or partners in crime`];
                const whoseReputationRand = Math.floor(Math.random()*whoseReputationArray.length);
                const whoseReputation = whoseReputationArray[whoseReputationRand];


                        /* Type of reputation intended, and the method by which the villain seeks to increase it Table 1-31*/
                const reputationMethod0105 = `Reputation for Evil - by attacking civilized regions from a nearby lair (banditry or raiding)`;
                const reputationMethod0610 = `Reputation for Evil - by bullying the weak`;
                const reputationMethod1115 = `Reputation for Evil - by carrying off an evil plot - basically any of the plots and plans listed in these tables - but in a spectacular and theatrical fashion.`;
                const reputationMethod1620 = `Reputation for Evil - by claiming responsibility for crimes`;
                const reputationMethod2125 = `Reputation for Evil - by insidious preaching`;
                const reputationMethod2630 = `Reputation for Evil - by laying waste the nearby countryside as an example`;
                const reputationMethod3135 = `Reputation for Evil - by shows of force (minions marching through streets or displays of magical power)`;
                const reputationMethod3640 = `Reputation for Evil - by speaking against (or threatening to destroy) powerful good-aligned individuals... who are probably not present to deny allegations or smite the villain`;
                const reputationMethod4145 = `Reputation for Evil - by telling lies about exploits elsewhere (which the owner of the reputation may or may not actually have performed)`
                const reputationMethod4650 = `Reputation for Goodness - by faking the elimination of a community\`s enemies`;
                const reputationMethod5155 = `Reputation for Goodness - by shows of force (marching minions would need to be disguised as good guys - but disguising your minions as good guys is also an excellent infiltration tactic as long as they don\`t screw up the imposture`;
                const reputationMethod5660 = `Reputation for Goodness - by telling lies about exploits elsewhere`;
                const reputationMethod6165 = `Reputation for Goodness - by using the false or stolen identity of a person with a good reputation`;
                const reputationMethod6670 = `Reputation for Goodness - through charitable acts (painful for villains, but necessary in this case)`;
                const reputationMethod7175 = `Reputation for Goodness - through sanctimonious preaching or lecturing`;
                const reputationMethod76100 = `Reputation for Goodness - using stolen or forged credentials, letters of reference, medals, etc.`;

                const reputationMethodArray = [reputationMethod0105, reputationMethod0610, reputationMethod1115, reputationMethod1620, reputationMethod2125, reputationMethod2630, reputationMethod3135, reputationMethod3640, reputationMethod4145, reputationMethod4650, reputationMethod5155, reputationMethod5660, reputationMethod6165, reputationMethod6670, reputationMethod7175, reputationMethod76100];
                const reputationMethodRand = Math.floor(Math.random()*reputationMethodArray.length);
                const reputationMethod = reputationMethodArray[reputationMethodRand];
                        
                let reputationDisplay = document.createElement(`div`);
                reputationDisplay.id = `reputationDisplay`;
                reputationDisplay.innerHTML = `The villain is trying to achieve a ${reputationMethod}. The reputation gain is on behalf of ${whoseReputation}`;
                document.getElementById(`plotTypeDisplay`).appendChild(reputationDisplay);
        } else {
                alert(`The plot isn\`t reputation!`)
        }
}
function displaySubversionPlot() {
        const previousSubversion = document.getElementById(`subversionDisplay`); /* Checks to see if there is an element already displaying this kind of plot, and removes it */
        if (previousSubversion) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousSubversion);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;

        if (plot === `The villain is trying to mislead people into supporting ${genPronoun} nefarious enterprises`) {
                /*SUBVERSION TO EVIL Table 1-32 pg. 49*/
                const natureOfSubversion0108 = `encouraging charitable donations to a good or neutral seeming temple that actually supports the worship of an evil deity.`;
                const natureOfSubversion0916 = `encouraging charitable donations to an organization whose leaders are secretly engaged in evil tasks.`;
                const natureOfSubversion1724 = `encouraging charitable donations to a group that supports a foolish idea (such as a heavy tax on merchants\` cargo, or on holy symbols, rebellion from royal authority, or the expulsion of foreigners, as examples).`;
                const natureOfSubversion2532 = `encouraging membership in a crusade that will weaken the area\`s defenses.`;
                const natureOfSubversion3340 = `encouraging attendance at a good or neutral seeming temple that actually supports the worship of an evil deity.`;
                const natureOfSubversion4148 = `encouraging membership in a new guild run secretly by evil individuals.`;
                const natureOfSubversion4956 = `encouraging charitable donations to a good-aligned group, but pocketing the proceeds, or a portion of them, for nefarious purposes.`;
                const natureOfSubversion5765 = `encouraging sacrifices to an evil deity that masquerades as a benevolent one.`;
                const natureOfSubversion6674 = `using magic to charm individuals into performing crimes or other evil actions.`;
                const natureOfSubversion7583 = `using bribes as a temptation to lure individuals into performing crimes or other evil acts.`;
                const natureOfSubversion8492 = `using physical threats to force individuals into performing crimes or other evil acts.`;
                const natureOfSubversion93100 = `using blackmail or hostages to force individuals into performing crimes or other evil acts.`;

                const natureOfSubversionArray = [natureOfSubversion0108, natureOfSubversion0916, natureOfSubversion1724, natureOfSubversion2532, natureOfSubversion3340, natureOfSubversion4148, natureOfSubversion4956, natureOfSubversion5765, natureOfSubversion6674, natureOfSubversion7583, natureOfSubversion8492, natureOfSubversion93100];
                const natureOfSubversionRand = Math.floor(Math.random()*natureOfSubversionArray.length);
                const natureOfSubversion = natureOfSubversionArray[natureOfSubversionRand];
                        
                let subversionDisplay = document.createElement(`div`);
                subversionDisplay.id = `subversionDisplay`;
                subversionDisplay.innerHTML = `by ${natureOfSubversion}`;
                document.getElementById(`plotTypeDisplay`).appendChild(subversionDisplay);
        } else {
                alert(`The plot isn\`t subversion!`)
        }
}
function displaySupportEvilPlot() {
        const previousSupportEvil = document.getElementById(`supportEvilDisplay`); /* Checks to see if there is an element already displaying this kind of plot, and removes it */
        if (previousSupportEvil) {
                document.getElementById(`plotTypeDisplay`).removeChild(previousSupportEvil);
        }

        plot = document.getElementById(`plotTypeDisplay`).innerText;

        if (plot === `The villain is working behind the scenes to help other evil groups.`) {
        /* SUPPORT EVIL GROUPS SECRETLY */
                /* Group the villain is supporting Table 1-33 pg. 50 */
                const evilGroupSupported0104 = `all, evil-aligned individuals in a particular area`;
                const evilGroupSupported0508 = `all, followers and worshippers of a particular deity`;
                const evilGroupSupported0912 = `all, powerful, evil-aligned individuals in a particular area`;
                const evilGroupSupported1316 = `an association dominated by leaders of evil alignment (ranging from a secret society to a guild of merchants whose leaders are malicious and base of character)`;
                const evilGroupSupported1720 = `anyone disregarding a particular good-oriented law (or decree of a good temple not actually part of the government) such as a requirement to wear a good-aligned symbol or worship a good deity, refusal to contribute to the army of a good king, etc.`;
                const evilGroupSupported2124 = `anyone returning from a pilgrimage to a particular evil site`;
                const evilGroupSupported2528 = `anyone supporting an evil-aligned warlord during a time of uprisings`;
                const evilGroupSupported2932 = `anyone who was present at a particular unholy ritual held in the recent past`;
                const evilGroupSupported3336 = `bandits operating outside the boundaries of civilization`;
                const evilGroupSupported3740 = `criminal organization predominantly of evil alignment`;
                const evilGroupSupported4144 = `cultists seeking to bring about a natural catastrophe`;
                const evilGroupSupported4548 = `descendants of those who attended a particular unholy event in the forgotten or even ancient past`;
                const evilGroupSupported4952 = `evil tribes or humanoids operating outside the boundaries of civilization`;
                const evilGroupSupported5356 = `followers of an evil-aligned prophet\`s teachings`;
                const evilGroupSupported5760 = `jury or judge that convicted a good-aligned leader`;
                const evilGroupSupported6164 = `members of a race known to be predominantly of evil alignment (goblins, for instance)`;
                const evilGroupSupported6568 = `members of underground religious movement in a good-aligned theocratic region or an area in which a good-aligned religion holds considerable authority`;
                const evilGroupSupported6972 = `military order affiliated with evil alignment but no particular faith`;
                const evilGroupSupported7376 = `military order attached to a particular evil faith`;
                const evilGroupSupported7780 = `military order attached to an evil-aligned temple`;
                const evilGroupSupported8184 = `only the priests and higher followers of a particular evil deity`;
                const evilGroupSupported8588 = `secret society dedicated to overthrowing a benevolent government`;
                const evilGroupSupported8992 = `secret society dedicated to subverting people to evil goals`;
                const evilGroupSupported9396 = `slavers`;
                const evilGroupSupported97100 = `wealthy people (or perhaps poor people) of evil alignment in a certain area`;
        
                const evilGroupSupportedArray = [evilGroupSupported0104, evilGroupSupported0508, evilGroupSupported0912, evilGroupSupported1316, evilGroupSupported1720, evilGroupSupported2124, evilGroupSupported2528, evilGroupSupported2932, evilGroupSupported3336, evilGroupSupported3740, evilGroupSupported4144, evilGroupSupported4548, evilGroupSupported4952, evilGroupSupported5356, evilGroupSupported5760, evilGroupSupported6164, evilGroupSupported6568, evilGroupSupported6972, evilGroupSupported7376, evilGroupSupported7780, evilGroupSupported8184, evilGroupSupported8588, evilGroupSupported8992, evilGroupSupported9396, evilGroupSupported97100];
                const evilGroupSupportedRand = Math.floor(Math.random()*evilGroupSupportedArray.length);
                const evilGroupSupported = evilGroupSupportedArray[evilGroupSupportedRand];
        
                        /* Assistance rendered to the evil group Table 1-34 pg. 51 */
                const assistanceRendered0105 = `To help them, ${nomPronoun} acts as agent for the group when ${genPronoun} help is requested (${genPronoun} identity is know to the higher echelons of the group`;
                const assistanceRendered0610 = `To help them, ${nomPronoun} arrests or sues the group\`s enemies`;
                const assistanceRendered1115 = `To help them, ${nomPronoun} assassinates the group\`s enemies`;
                const assistanceRendered1620 = `To help them, ${nomPronoun} brings victims or prisoners at the request of the top echelons of the group, who know the villain\`s identity`;
                const assistanceRendered2125 = `To help them, ${nomPronoun} brings victims or prisoners, anonymously`;
                const assistanceRendered2630 = `To help them, ${nomPronoun} brings victims or prisoners; the top echelons of the group know the villain\`s identity, but there is no interaction other than the villain\`s gifts`;
                const assistanceRendered3135 = `To help them, ${nomPronoun} provides advice`;
                const assistanceRendered3640 = `To help them, ${nomPronoun} provides healing and/or alchemical potions when needed`;
                const assistanceRendered4145 = `To help them, ${nomPronoun} provides hideouts and secret identities for members of the group`;
                const assistanceRendered4650 = `To help them, ${nomPronoun} provides information form the villain\`s spy network (advance warning if the group\`s headquarters are about to be raided, for example, or maps into their targeted locations`;
                const assistanceRendered5155 = `To help them, ${nomPronoun} provides legal assistance (pardons or favorable verdicts) from a position of power, or pays bribes if not in a position of power`;
                const assistanceRendered5660 = `To help them, ${nomPronoun} provides magical assistance such as charm spells when needed for the group\`s plans`;
                const assistanceRendered6165 = `To help them, ${nomPronoun} provides money (secret benefactor)`;
                const assistanceRendered6670 = `To help them, ${nomPronoun} provides money: top echelons of the group know the villain\`s identity and ask for money or loans when necessary`;
                const assistanceRendered7175 = `To help them, ${nomPronoun} provides monsters as allies when violence breaks out`;
                const assistanceRendered7680 = `To help them, ${nomPronoun} provides weapons and armor`;
                const assistanceRendered8185 = `To help them, ${nomPronoun} seeks recruits for the group using ${genPronoun} own channels of power`;
                const assistanceRendered8690 = `To help them, ${nomPronoun} speaks on behalf of the evil group`;
                const assistanceRendered9195 = `To help them, ${nomPronoun} villain acts as agent for the group, but wears mask when meeting with them or acts through intermediaries - the group does not know the identity of the agent. An example would be acting as a fence or a negotiator`;
                const assistanceRendered96100 = `To help them, ${nomPronoun} villain supports the group with propaganda and rumors, but members of the group do not know who ${nomPronoun} is`;
                
                const assistanceArray = [assistanceRendered0105, assistanceRendered0610, assistanceRendered1115, assistanceRendered1620, assistanceRendered2125, assistanceRendered2630, assistanceRendered3135, assistanceRendered3640, assistanceRendered4145, assistanceRendered4650, assistanceRendered5155, assistanceRendered5660, assistanceRendered6165, assistanceRendered6670, assistanceRendered7175, assistanceRendered7680, assistanceRendered8185, assistanceRendered8690, assistanceRendered9195, assistanceRendered96100];
                const assistanceRand = Math.floor(Math.random()*assistanceArray.length);
                const assistance = assistanceArray[assistanceRand];
                        
                let supportEvilDisplay = document.createElement(`div`);
                supportEvilDisplay.id = `supportEvilDisplay`;
                supportEvilDisplay.innerHTML = `The villain supports ${evilGroupSupported}. ${assistance}`;
                document.getElementById(`plotTypeDisplay`).appendChild(supportEvilDisplay);
        } else {
                alert(`The plot isn\`t support evil!`)
        }
}