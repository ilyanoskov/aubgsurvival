import React from 'react';
import Header from '../common/Header';

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="well col-lg-8 col-lg-offset-2 col-sm-8 col-sm-offset-2">
          <h3>General</h3>
          The victim will be considered "killed" only after the hunter says "You
          are my victim and you are killed" to his/her victim. Once having said
          that, the killer needs to get the victim’s personal code, embed it
          into the website and press the “kill” button. The system will then
          automatically generate a new victim for you and the same procedure
          goes with the new victim. <br />
          The deadline of the game is Thursday, 4th of December (5pm). That is,
          the whole process of hunting and killing will be effective till that
          time only. The system will NOT be accepting your “kills” following the
          deadline. If there are two people left in the game before the
          deadline, the game can stop at that moment and you will be notified.
          The winners of the game are the first person to kill and the three
          people with the most kills. <br />
          Prizes will be announced at 18:00 (6pm) on the same day, shortly after
          the end of the game! A system gives you an access to the events,
          scoreboard and rules.
          <br />
          <br /> If there are any misunderstandings or conflicts unresolved
          between the killer and the victim – contact <b>Irida Shyti</b> asap by
          email at ins160@aubg.edu, through Facebook or contact any RA at the
          front desk.
          <h3>Game Execution</h3>
          The process of "killing" should take place only in CLOSED SPACES, like
          lobbies, elevators or halls, so that nobody can "testify" about the
          murder. Possible places for murders are rooms, corridors, lobbies (if
          there is no one but you and your victim), stairs, elevators,
          balconies. (Anywhere on the campus buildings: Skaptoparas, BAC, ABF,
          but NOT in Main Building). <br />A winner is not necessarily the one
          who survived. Whoever has the most number of skills, regardless of
          them being alive or not, has a chance to win. The "killer" cannot
          "kill" the victim in the presence of another person. In case a third
          person watched the crime scene, the target is still in the game. Once
          "killed", the victim is out of the game (but still can be considered
          as a potential winner). People, who fail to comply with the rules will
          be automatically disqualified. A victim cannot run away/scream/call
          for help whenever the "killer" starts saying "you are my victim...."
          <br />
          If someone pops up in the "crime scene" AFTER the killer said "you are
          my victim and you are killed" - the murder still COUNTS. Every
          participant has to kill the victim by himself! If any player is
          suspicious about someone breaking the rules, he/she can always contact
          Irida Shyti or ins160@aubg.edu or through Facebook.
        </div>
      </div>
    );
  }
}

export default About;
