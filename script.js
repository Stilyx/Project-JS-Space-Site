const menu = document.querySelector('.menu');
const home = document.querySelector('.home00');
const destination = document.querySelector('.destination01');
const crew = document.querySelector('.crew02');
const technology = document.querySelector('.technology03');
const sectionDescription = document.querySelector('.section-description');
const button = document.querySelector('.explore');
const wallpaper = document.querySelector('.imagebackground');
// Mobile Menu

const navitem = document.querySelector('.nav-content');
menu.addEventListener('click', e => {
  menu.classList.toggle('active');
  navitem.classList.toggle('active');
});

// Nav header
const navArray = ['home', 'destination', 'crew', 'technology'];
const navCategory = document.getElementsByName('nav-options');

navCategory.forEach(nav => {
  nav.addEventListener('click', e => {
    const whoSection = e.target.id;
    switch (whoSection) {
      case navArray[0]:
        sectionDescription.style.display = 'none';
        home.style.display = 'flex';
        destination.style.display = 'none';
        crew.style.display = 'none';
        technology.style.display = 'none';
        wallpaper.style.backgroundImage = "url('images/home-images/space-home-background.jpg')";
        break;
      case navArray[1]:
        sectionDescription.style.display = 'flex';
        sectionDescription.childNodes[1].textContent = '01';
        sectionDescription.childNodes[3].textContent = 'PICK YOUR DESTINATION';
        home.style.display = 'none';
        destination.style.display = 'flex';
        crew.style.display = 'none';
        technology.style.display = 'none';
        wallpaper.style.backgroundImage = "url('images/destination-images/destination-background.png')";
        break;
      case navArray[2]:
        sectionDescription.style.display = 'flex';
        sectionDescription.childNodes[1].textContent = '02';
        sectionDescription.childNodes[3].textContent = 'MEET YOUR CREW';
        home.style.display = 'none';
        destination.style.display = 'none';
        crew.style.display = 'flex';
        technology.style.display = 'none';
        wallpaper.style.backgroundImage = "url('images/crew-images/crew-background.jpg')";

        break;
      case navArray[3]:
        sectionDescription.style.display = 'flex';
        sectionDescription.childNodes[1].textContent = '03';
        sectionDescription.childNodes[3].textContent = 'SPACE LAUNCH 101';
        home.style.display = 'none';
        destination.style.display = 'none';
        crew.style.display = 'none';
        technology.style.display = 'flex';
        wallpaper.style.backgroundImage = "url('images/technology-images/technology-background.jpg')";
        break;
      default:
        sectionDescription.style.display = 'none';
        home.style.display = 'flex';
        destination.style.display = 'none';
        crew.style.display = 'none';
        technology.style.display = 'none';
        wallpaper.style.backgroundImage = "url('images/home-images/space-home-background.jpg')";
        break;
    }
  });
});

// Planets Nav Bar

const navplanets = document.getElementsByName('planets');
const planetImage = document.querySelector('.planet-image');
const planetName = document.querySelector('.planet-name');
const planetDescription = document.querySelector('.planet-description');
const numbers = document.querySelector('.planet-nerd-description');
const distance = document.getElementsByClassName('.km-number');
const days = document.getElementsByClassName('.days-number');
const planets = ['moon', 'mars', 'europa', 'titan'];
const aboutPlanets = [
  'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
  'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
  'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
];
const aboutKM = ['384,400 KM', '225 MIL. KM', '628 MIL. KM', '1.6 BIL. KM'];
const aboutDays = ['3 DAYS', '9 MONTHS', '3 YEARS', '7 YEARS'];

navplanets.forEach(nav => {
  nav.addEventListener('click', e => {
    const whoPlanet = e.target.id;
    switch (whoPlanet) {
      case planets[0]:
        planetImage.childNodes[1].src = 'images/destination-images/moon.png';
        planetName.textContent = 'MOON';
        planetDescription.innerText = aboutPlanets[0];
        numbers.childNodes[1].childNodes[3].innerText = aboutKM[0];
        numbers.childNodes[3].childNodes[3].innerText = aboutDays[0];
        break;
      case planets[1]:
        planetImage.childNodes[1].src = 'images/destination-images/mars.png';
        planetName.innerText = 'MARS';
        planetDescription.innerText = aboutPlanets[1];
        numbers.childNodes[1].childNodes[3].innerText = aboutKM[1];
        numbers.childNodes[3].childNodes[3].innerText = aboutDays[1];
        break;
      case planets[2]:
        planetImage.childNodes[1].src = 'images/destination-images/europa.png';
        planetName.innerText = 'EUROPA';
        planetDescription.innerText = aboutPlanets[2];
        numbers.childNodes[1].childNodes[3].innerText = aboutKM[2];
        numbers.childNodes[3].childNodes[3].innerText = aboutDays[2];
        break;
      case planets[3]:
        planetImage.childNodes[1].src = 'images/destination-images/titan.png';
        planetName.innerText = 'TITAN';
        planetDescription.innerText = aboutPlanets[3];
        numbers.childNodes[1].childNodes[3].innerText = aboutKM[3];
        numbers.childNodes[3].childNodes[3].innerText = aboutDays[3];
        break;
    }
  });
});

//  Crew Nav Bar

const crewDescription = document.querySelector('.crew-description');
const crewImages = document.querySelector('.crewImages');
const crewNav = document.getElementsByName('crew-people');
const crewIds = ['douglas', 'mark', 'victor', 'anousheh'];
const crewCategory = ['COMMANDER', 'MISSION ESPECIALIST', 'PILOT', 'FLIGHT ENGINEER'];
const crewNames = ['DOUGLAS HURLEY', 'MARK SHUTTLEWORTH', 'VICTOR GLOVE', 'ANOUSHESH ANSARI'];
const AboutCrew = [
  'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
  'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
];

crewNav.forEach(crew => {
  crew.addEventListener('click', e => {
    const whocrew = e.target.id;

    switch (whocrew) {
      case crewIds[0]:
        crewDescription.childNodes[1].textContent = crewCategory[0];
        crewDescription.childNodes[3].textContent = crewNames[0];
        crewDescription.childNodes[5].textContent = AboutCrew[0];
        crewImages.childNodes[0].src = 'images/crew-images/douglas.png';

        break;
      case crewIds[1]:
        crewDescription.childNodes[1].textContent = crewCategory[1];
        crewDescription.childNodes[3].textContent = crewNames[1];
        crewDescription.childNodes[5].textContent = AboutCrew[1];
        crewImages.childNodes[0].src = 'images/crew-images/mark.png';
        break;
      case crewIds[2]:
        crewDescription.childNodes[1].textContent = crewCategory[2];
        crewDescription.childNodes[3].textContent = crewNames[2];
        crewDescription.childNodes[5].textContent = AboutCrew[2];
        crewImages.childNodes[0].src = 'images/crew-images/victor.png';
        break;
      case crewIds[3]:
        crewDescription.childNodes[1].textContent = crewCategory[3];
        crewDescription.childNodes[3].textContent = crewNames[3];
        crewDescription.childNodes[5].textContent = AboutCrew[3];
        crewImages.childNodes[0].src = 'images/crew-images/anousheh.png';
        break;
    }
  });
});

// Technology Nav
const TechnologyNav = document.getElementsByName('technologynumber');
const technologyNameText = document.querySelector('.name-technology');
const technologyImage = document.querySelector('.technologyImagechange');
const techonologyText = document.querySelector('.about-technology');
const technologyName = ['LAUNCH VEHICLE', 'SPACEPORT', 'SPACE CAPSULE'];
const aboutTechnology = [
  "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
  "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
];
const technologyId = ['vehicle', 'spaceport', 'capsule'];

TechnologyNav.forEach(tech => {
  tech.addEventListener('click', e => {
    const whotechnology = e.target.id;
    switch (whotechnology) {
      case technologyId[0]:
        technologyNameText.textContent = technologyName[0];
        techonologyText.textContent = aboutTechnology[0];
        technologyImage.childNodes[0].src = 'images/technology-images/vehicle.png';
        break;
      case technologyId[1]:
        technologyNameText.textContent = technologyName[1];
        techonologyText.textContent = aboutTechnology[1];
        technologyImage.childNodes[0].src = 'images/technology-images/spaceport.png';
        break;
      case technologyId[2]:
        technologyNameText.textContent = technologyName[2];
        techonologyText.textContent = aboutTechnology[2];
        technologyImage.childNodes[0].src = 'images/technology-images/capsule.png';
        break;
    }
  });
});
