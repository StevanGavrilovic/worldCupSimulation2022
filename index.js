"use strict";

const main = () => {
  let teamOneScore;
  let teamTwoScore;
  let teamThreeScore;
  let teamFourScore;
  let euqaleScoreTeamOne;
  let euqaleScoreTeamTwo;
  let penalsTeamOne;
  let penalsTeamTwo;

  let GrupaA = [];
  let GrupaB = [];
  let GrupaC = [];
  let GrupaD = [];
  let GrupaE = [];
  let GrupaF = [];
  let GrupaG = [];
  let GrupaH = [];

  const allGroup = [];

  // ELIMINATION GROUPS

  let groupA = [];
  let groupB = [];
  let groupC = [];
  let groupD = [];
  let groupE = [];
  let groupF = [];
  let groupG = [];
  let groupH = [];

  let eliminationGroupOne = [];
  let eliminationGroupTwo = [];
  let quaterFinalOne = [];
  let quaterFinalTwo = [];
  let finalGameTeams = [];
  let winer = [];

  let gameOne;
  let gameTwo;

  let katar = { teamName: "Katar", teamRang: 51 };
  let ekvador = { teamName: "Ekvador", teamRang: 33 };
  let senegal = { teamName: "Senegal", teamRang: 24 };
  let holandija = { teamName: "Holandija", teamRang: 20 };
  let engleska = { teamName: "Egleska", teamRang: 5 };
  let iran = { teamName: "Iran", teamRang: 29 };
  let sad = { teamName: "SAD", teamRang: 15 };
  let ukrajina = { teamName: "Ukrajina", teamRang: 27 };
  let argentina = { teamName: "Argentina", teamRang: 4 };
  let saudijskaArabija = { teamName: "Saudijska Arabija", teamRang: 49 };
  let meksiko = { teamName: "Meksiko", teamRang: 9 };
  let poljska = { teamName: "Poljska", teamRang: 17 };
  let francuska = { teamName: "Francuska", teamRang: 3 };
  let peru = { teamName: "Peru", teamRang: 18 };
  let danska = { teamName: "Danska", teamRang: 11 };
  let tunis = { teamName: "Tunis", teamRang: 25 };
  let spanija = { teamName: "Španija", teamRang: 7 };
  let noviZeland = { teamName: "Novi Zeland", teamRang: 27 };
  let nemacka = { teamName: "Nemačka", teamRang: 12 };
  let japan = { teamName: "Japan", teamRang: 23 };
  let belgija = { teamName: "Belgija", teamRang: 2 };
  let kanada = { teamName: "Kanada", teamRang: 38 };
  let maroko = { teamName: "Maroko", teamRang: 31 };
  let hrvatska = { teamName: "Hrvatska", teamRang: 16 };
  let brazil = { teamName: "Brazil", teamRang: 1 };
  let srbija = { teamName: "Srbija", teamRang: 25 };
  let svajcarska = { teamName: "Švajcarska", teamRang: 14 };
  let kamerun = { teamName: "Kamerun", teamRang: 37 };
  let portugal = { teamName: "Portugal", teamRang: 8 };
  let gana = { teamName: "Gana", teamRang: 29 };
  let urugvaj = { teamName: "Urugvaj", teamRang: 13 };
  let juznaKoreja = { teamName: "Južna Koreja", teamRang: 26 };

  GrupaA.push(katar, ekvador, senegal, holandija);
  GrupaB.push(engleska, iran, sad, ukrajina);
  GrupaC.push(argentina, saudijskaArabija, meksiko, poljska);
  GrupaD.push(francuska, peru, danska, tunis);
  GrupaE.push(spanija, noviZeland, nemacka, japan);
  GrupaF.push(belgija, kanada, maroko, hrvatska);
  GrupaG.push(brazil, srbija, svajcarska, kamerun);
  GrupaH.push(portugal, gana, urugvaj, juznaKoreja);

  allGroup.push(GrupaA, GrupaB, GrupaC, GrupaD, GrupaE, GrupaF, GrupaG, GrupaH);

  let showGroupTable = function (group) {
    for (let teams of Object.values(group)) {
      let {
        teamName: ime,
        teamRang: rang,
        pobede: pobede,
        neresene: neresene,
        porazi: porazi,
        datiGolovi: datiGolovi,
        primljeniGolovi: primljeniGolovi,
        bodovi: bodovi,
      } = teams;
      console.table(
        `${ime} (${rang})  ${pobede} ${neresene} ${porazi} ${datiGolovi}:${primljeniGolovi} ${bodovi}`
      );
    }
  };

  let addTeamProperties = function (group) {
    return group.forEach(function (team) {
      team.pobede = 0;
      team.neresene = 0;
      team.porazi = 0;
      team.datiGolovi = 0;
      team.primljeniGolovi = 0;
      team.bodovi = 0;
    });
  };
  // prettier-ignore
  let giveProperty = function (...allGroup) {
    allGroup.forEach((groups) => {
      groups.forEach((teams) => addTeamProperties(teams));
    });
  };
  giveProperty(allGroup);

  let goals = function (team1, team2, team3, team4) {
    team1.datiGolovi += teamOneScore;
    team1.primljeniGolovi += teamTwoScore;
    team2.datiGolovi += teamTwoScore;
    team2.primljeniGolovi += teamOneScore;

    team1.bodovi = team1.pobede;
    team2.bodovi = team2.pobede;

    team1.bodovi *= 3;
    team2.bodovi *= 3;

    if (team1.neresene > 0) team1.bodovi += team1.neresene;
    if (team2.neresene > 0) team2.bodovi += team2.neresene;

    team3.datiGolovi += teamThreeScore;
    team3.primljeniGolovi += teamFourScore;
    team4.datiGolovi += teamFourScore;
    team4.primljeniGolovi += teamThreeScore;

    team3.bodovi = team3.pobede;
    team4.bodovi = team4.pobede;

    team3.bodovi *= 3;
    team4.bodovi *= 3;

    if (team3.neresene > 0) team3.bodovi += team3.neresene;
    if (team4.neresene > 0) team4.bodovi += team4.neresene;
  };

  let game = function (team1, team2, team3, team4, group) {
    teamOneScore = Math.floor(Math.random() * 6);
    teamTwoScore = Math.floor(Math.random() * 6);
    teamThreeScore = Math.floor(Math.random() * 6);
    teamFourScore = Math.floor(Math.random() * 6);

    gameOne = `${team1.teamName} ${teamOneScore} : ${teamTwoScore} ${team2.teamName}`;
    gameTwo = `${team3.teamName} ${teamThreeScore} : ${teamFourScore} ${team4.teamName}`;

    if (teamOneScore > teamTwoScore) {
      team1.pobede++;
      team2.porazi++;
    } else if (teamOneScore === teamTwoScore) {
      team1.neresene++;
      team2.neresene++;
    } else {
      team2.pobede++;
      team1.porazi++;
    }
    if (teamThreeScore > teamFourScore) {
      team3.pobede++;
      team4.porazi++;
    } else if (teamThreeScore === teamFourScore) {
      team3.neresene++;
      team4.neresene++;
    } else {
      team4.pobede++;
      team3.porazi++;
    }
    goals(team1, team2, team3, team4);

    console.log(
      `Grupa ${group}:
       ${gameOne}
       ${gameTwo}`
    );
  };

  // prettier-ignore
  let grupPlayMatches = function ([...grupa], group) {
      game(...grupa, group);
  };

  console.log("Grupna faza - I kolo:");
  // prettier-ignore
  grupPlayMatches(GrupaA, "A");
  grupPlayMatches(GrupaB, "B");
  grupPlayMatches(GrupaC, "C");
  grupPlayMatches(GrupaD, "D");
  grupPlayMatches(GrupaE, "E");
  grupPlayMatches(GrupaF, "F");
  grupPlayMatches(GrupaG, "G");
  grupPlayMatches(GrupaH, "H");

  // prettier-ignore

  // prettier-ignore

  console.log("");
  console.log("Grupna faza - II kolo:");
  grupPlayMatches(GrupaA, "A");
  grupPlayMatches(GrupaB, "B");
  grupPlayMatches(GrupaC, "C");
  grupPlayMatches(GrupaD, "D");
  grupPlayMatches(GrupaE, "E");
  grupPlayMatches(GrupaF, "F");
  grupPlayMatches(GrupaG, "G");
  grupPlayMatches(GrupaH, "H");

  // prettier-ignore

  let sortGroups = function (group, grupa) {
    group.sort((a, b) => b.bodovi - a.bodovi);

    if (
      group[0].bodovi === group[1].bodovi ||
      group[2].bodovi === group[3].bodovi
    ) {
      group
        .sort((a, b) => a.primljeniGolovi - b.primljeniGolovi)
        .sort((a, b) => b.bodovi - a.bodovi);
    }
    console.log(grupa);

    showGroupTable(group);
  };

  let sliceTeam = function (team) {
    return team.slice(0, 2).map((el) => el.teamName);
  };

  console.log("");
  console.log("Grupna faza - III kolo:");

  grupPlayMatches(GrupaA, "A");
  grupPlayMatches(GrupaB, "B");
  grupPlayMatches(GrupaC, "C");
  grupPlayMatches(GrupaD, "D");
  grupPlayMatches(GrupaE, "E");
  grupPlayMatches(GrupaF, "F");
  grupPlayMatches(GrupaG, "G");
  grupPlayMatches(GrupaH, "H");

  console.log("");
  sortGroups(GrupaA, "Grupa A tabela:");

  console.log("");
  sortGroups(GrupaB, "Grupa B tabela:");

  console.log("");
  sortGroups(GrupaC, "Grupa C tabela:");

  console.log("");
  sortGroups(GrupaD, "Grupa D tabela:");

  console.log("");
  sortGroups(GrupaE, "Grupa E tabela:");

  console.log("");
  sortGroups(GrupaF, "Grupa F tabela:");

  console.log("");
  sortGroups(GrupaG, "Grupa G tabela:");

  console.log("");
  sortGroups(GrupaH, "Grupa H tabela:");

  groupA = sliceTeam(GrupaA);
  groupB = sliceTeam(GrupaB);
  groupC = sliceTeam(GrupaC);
  groupD = sliceTeam(GrupaD);
  groupE = sliceTeam(GrupaE);
  groupF = sliceTeam(GrupaF);
  groupG = sliceTeam(GrupaG);
  groupH = sliceTeam(GrupaH);

  let overtime = function (
    teamOneScore,
    teamTwoScore,
    team1,
    team2,
    eliminationGroup
  ) {
    euqaleScoreTeamOne = Math.floor(Math.random() * 7);
    euqaleScoreTeamTwo = Math.floor(Math.random() * 6);
    penalsTeamOne = Math.floor(Math.random() * 6);
    penalsTeamTwo = Math.floor(Math.random() * 6);

    gameOne = `${team1} ${teamOneScore} : ${teamTwoScore} ${team2}`;

    if (teamOneScore === teamTwoScore) {
      `${team1} ${(teamOneScore += euqaleScoreTeamOne)} : ${(teamTwoScore +=
        euqaleScoreTeamTwo)} ${team2}`;
      console.log("Produzetci");

      if (teamOneScore > teamTwoScore) {
        eliminationGroup.push(team1);
        console.log(`${team1} ${teamOneScore} : ${teamTwoScore} ${team2}`);
      } else if (teamOneScore < teamTwoScore) {
        eliminationGroup.push(team2);
        console.log(`  ${team1} ${teamOneScore} : ${teamTwoScore} ${team2}`);
      } else {
        console.log("Penali:") &&
          `${team1} ${(teamOneScore += penalsTeamOne)} : ${(teamTwoScore +=
            penalsTeamTwo)} ${team2}` &&
          eliminationGroup.push(team2) &&
          console.log(gameOne);
      }
    }
  };

  let eliminationGame = function (
    team1,
    team2,
    team3,
    team4,
    eliminationGroup
  ) {
    euqaleScoreTeamOne = Math.floor(Math.random() * 7);
    euqaleScoreTeamTwo = Math.floor(Math.random() * 7);

    teamOneScore = Math.floor(Math.random() * 6);
    teamTwoScore = Math.floor(Math.random() * 6);
    teamThreeScore = Math.floor(Math.random() * 6);
    teamFourScore = Math.floor(Math.random() * 6);

    gameOne = `${team1} ${teamOneScore} : ${teamTwoScore} ${team2}`;
    gameTwo = `${team3} ${teamThreeScore} : ${teamFourScore} ${team4}`;

    teamOneScore > teamTwoScore && eliminationGroup.push(team1);
    teamOneScore < teamTwoScore && eliminationGroup.push(team2);
    teamThreeScore > teamFourScore && eliminationGroup.push(team3);
    teamThreeScore < teamFourScore && eliminationGroup.push(team4);

    console.log(gameOne);
    console.log(gameTwo);

    overtime(teamOneScore, teamTwoScore, team1, team2, eliminationGroup);
    overtime(teamThreeScore, teamFourScore, team3, team4, eliminationGroup);
  };

  console.log("");
  console.log("Eliminaciona faza - 1/16 finala:");

  eliminationGame(
    groupA[0],
    groupB[1],
    groupA[1],
    groupB[0],
    eliminationGroupOne
  );

  eliminationGame(
    groupC[0],
    groupD[1],
    groupC[1],
    groupD[0],
    eliminationGroupOne
  );

  eliminationGame(
    groupE[0],
    groupF[1],
    groupE[1],
    groupF[0],
    eliminationGroupTwo
  );
  eliminationGame(
    groupG[0],
    groupH[1],
    groupG[1],
    groupH[0],
    eliminationGroupTwo
  );

  console.log("");
  console.log("Eliminaciona faza - 1/4 finala:");

  eliminationGame(
    eliminationGroupOne[0],
    eliminationGroupOne[1],
    eliminationGroupOne[2],
    eliminationGroupOne[3],
    quaterFinalOne
  );
  eliminationGame(
    eliminationGroupTwo[0],
    eliminationGroupTwo[1],
    eliminationGroupTwo[2],
    eliminationGroupTwo[3],
    quaterFinalTwo
  );

  console.log("");
  console.log("Polufinale:");

  eliminationGame(
    quaterFinalOne[0],
    quaterFinalOne[1],
    quaterFinalTwo[0],
    quaterFinalTwo[1],
    finalGameTeams
  );

  let finalGame = function (team1, team2, eliminationGroup) {
    euqaleScoreTeamOne = Math.floor(Math.random() * 7);
    euqaleScoreTeamTwo = Math.floor(Math.random() * 7);

    teamOneScore = Math.floor(Math.random() * 6);
    teamTwoScore = Math.floor(Math.random() * 6);

    gameOne = `${team1} ${teamOneScore} : ${teamTwoScore} ${team2}`;

    teamOneScore > teamTwoScore && eliminationGroup.push(team1);
    teamOneScore < teamTwoScore && eliminationGroup.push(team2);

    console.log(gameOne);
    overtime(teamOneScore, teamTwoScore, team1, team2, eliminationGroup);
  };

  console.log("");
  console.log("Finale:");

  finalGame(finalGameTeams[0], finalGameTeams[1], winer);

  console.log("");
  console.log(`Pobednik`);

  let showWinner = function (winer) {
    console.log(`!!! ${winer} !!!`);
  };
  showWinner(winer);
};

main();
