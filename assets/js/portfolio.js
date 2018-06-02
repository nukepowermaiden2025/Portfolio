console.log("The JS is connected");

var cards = [
    {
        name:"Giphy World",
        css:"card-color1",
        imgSrc:"https://media.giphy.com/media/Q8VKl8nT8UhFK/giphy.gif",
        href:"https://nukepowermaiden2025.github.io/GiphyWeek6/",
        description:`Controling gif state with AJAX and jquery.`

    },
    {
        name:"Jarvis Health App",
        css:"card-color2",
        imgSrc:"./assets/images/Jarvis.jpg",
        href:"https://github.com/nukepowermaiden2025/Jarvis",
        description:`Location based Health Analysis with MVC Design Pattern`
    },
    {
        name:"Nellie's Bucket List",
        css:"card-color3",
        imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvlgSeLHqTD1ZmYmYemcSakiZSo1VB6t8KVgMEnG8NJ-6sFDyhw",
        href:"https://nellies-ultimate-bucketlist.herokuapp.com/",
        description:`Creative BucketList with MySQL and Handlebars`
    },
    {
        name:"",
        css:"card-color4",
        imgSrc:"",
        href:"",
        description:""
    },
    {
        name:"",
        css:"card-color5",
        imgSrc:"",
        href:"",
        description:""
    },
    {
        name:"",
        css:"card-color6",
        imgSrc:"",
        href:"",
        description:""
    }

]

$(document).ready(function(){
    $(".render-cards").empty();

    for(let i=0; i < 3; i++){
        $(".render-cards").append(`
        <div id=${cards[i].css} class="card">
            <img class="card-img-top" src=${cards[i].imgSrc} alt=${cards[i].name} image>
            <div class="card-body">
            <h5 class="card-title">${cards[i].name}</h5>
            <p class="card-text">${cards[i].description}</p>
            <a href=${cards[i].href} class="btn btn-secondary btn-sm" role="button" aria-disabled="true">Demo</a>
            </div>
        </div>`);
    };

});
   
