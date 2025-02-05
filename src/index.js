import splashImage from "./splash.jpeg";

// create navbar

const header = document.createElement('header');
const navBar = document.createElement('nav');

const home = document.createElement('button');
const menu = document.createElement('button');
const about = document.createElement('button');

home.textContent = 'Home';
menu.textContent = 'Menu';
about.textContent = 'About';

navBar.appendChild(home);
navBar.appendChild(menu);
navBar.appendChild(about);

header.appendChild(navBar);
document.body.appendChild(header);

// create content divs

let contentWrapper = document.createElement('div');
document.body.appendChild(contentWrapper);

function writeHome() {
    contentWrapper.innerHTML = '';
    // Home Div

    const homeWrapper = document.createElement('div');
    const homeHeader = document.createElement('h1');
    const homeImage = document.createElement('img');

    homeImage.src = splashImage;
    homeImage.setAttribute('alt', 'Image by Galina Afanaseva from Pixabay');

    contentWrapper.setAttribute('id', 'content');

    homeHeader.innerHTML = 'Crazy Greek';

    homeWrapper.appendChild(homeHeader);
    homeWrapper.appendChild(homeImage);
    contentWrapper.appendChild(homeWrapper);
}

function writeMenu() {
    contentWrapper.innerHTML = '';

    // Menu Div

    const menuWrapper = document.createElement('div');
    const menuHeader = document.createElement('h1');
    const menuList = document.createElement('ul');

    menuHeader.innerHTML = "Menu";

    const menuItems = [
        'Saganaki', 'Gyro', "Feta Salad", "Bread"
    ];

    for (let i=0; i < menuItems.length; i++) {
        menuList.innerHTML += "<li>" + menuItems[i] + "</li>";
    }

    menuWrapper.appendChild(menuHeader);
    menuWrapper.appendChild(menuList);

    contentWrapper.appendChild(menuWrapper);
}

function writeAbout() {
    contentWrapper.innerHTML = '';

    // About Div

    const aboutWrapper = document.createElement('div');
    const aboutHeader = document.createElement('h1');
    const aboutText = document.createElement('p');

    aboutHeader.innerHTML = "Since 1999...";
    aboutText.innerHTML = "...we have been making quality Greek food.";

    aboutWrapper.appendChild(aboutHeader);
    aboutWrapper.appendChild(aboutText);

    contentWrapper.appendChild(aboutWrapper);
}

home.addEventListener('click', writeHome);
menu.addEventListener('click', writeMenu);
about.addEventListener('click', writeAbout);

writeHome();