console.log("The JS is connected");

var cards = [
    {
        name:"Giphy World",
        css:"card-color1",
        imgSrc:"https://media.giphy.com/media/Q8VKl8nT8UhFK/giphy.gif",
        href:"https://nukepowermaiden2025.github.io/GiphyWeek6/",
        description:`Users can add buttons that will make HTTP request to the GIPHY API upon selection. Clicks control the gifs movement state. Made with AJAX and jquery.  `

    },
    {
        name:"Jarvis Health App",
        css:"card-color2",
        imgSrc:"./assets/images/Jarvis.jpg",
        href:"https://github.com/nukepowermaiden2025/Jarvis",
        description:`Location based Health Analysis developed with Javascript MVC Design Pattern, Passport.js, Zipcodes API.`
    },
    {
        name:"Nellie's Bucket List",
        css:"card-color3",
        imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvlgSeLHqTD1ZmYmYemcSakiZSo1VB6t8KVgMEnG8NJ-6sFDyhw",
        href:"https://nellies-ultimate-bucketlist.herokuapp.com/",
        description:`Creative BucketList with MySQL and Handlebars`
    },
    {
        name:"Mentor Match Machine",
        css:"card-color6",
        imgSrc:"./assets/images/mentor.jpg",
        href:"https://powerful-sands-84010.herokuapp.com/",
        description:"This is an app that will match compatibility of mentors and mentees based on the answers they submit to ten questions. Mentees are automatically signed up to become mentors themselves thus the creation of a 'machine'. The goal is the stimulate an existing culture of mentorship within an organization."
    },
    {
        name:"Bamazon",
        css:"card-color4",
        imgSrc:"./assets/images/screen.jpg",
        href:"https://github.com/nukepowermaiden2025/Bamazon#watch-the-demo",
        description:"A Node CLI retail store application that is built with MySQL and the inquirer.js library."
    },
    {
        name:"Gems Collector",
        css:"card-color5",
        imgSrc:"./assets/images/gems.jpg",
        href:"https://nukepowermaiden2025.github.io/week-4-game/",
        description:"A browser based game application that allows the user contiuous play-time, win or loose. Built with HTML5,CSS3,Javascript."
    }

]

$(document).ready(function(){
    $(".render-cards").empty();

    renderCards(0,3,".render-cards");
    renderCards(3,7,".render-cards2");
});
   
function renderCards(j,n,selectorName){
    for(let i=j; i < n; i++){
        $(`${selectorName}`).append(`
        <div id=${cards[i].css} class="card">
        
            <img class="card-img-bottom" src=${cards[i].imgSrc} alt=${cards[i].name} style="max-width:33vw;max-height:40vh">
            <div class="card-body">
            <h5 class="card-title">${cards[i].name}</h5>
            <p class="card-text">${cards[i].description}</p>
            </div>
            <div class="card-body">
            <a href=${cards[i].href} class="btn btn-outline-dark btn-sm" role="button" aria-disabled="true">Demo</a>
            </div>
        </div>`);
    };
}