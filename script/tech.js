$(".plus").click(function(){
    $('.transform').toggleClass('transform-active-another');
});

var myIndex = 0;

function reset(index){
    myIndex = index;

    resetMany(myIndex);
}

function triggerDisplay(index){
    myIndex = index;

    displayMany(myIndex);
}

// var newDoc = document.getElementsByClassName('plus')[0];
// var details = document.getElementsByClassName('details')[0];
// var vl = document.getElementsByClassName('vl')[0];
// var bText = document.getElementsByClassName('bText')[0];
// var content = document.getElementsByClassName('content')[0];
// var upArrow = document.getElementsByClassName('upArrow')[0];

function displayMany(myIndex){

    var newDoc = document.getElementsByClassName('plus')[myIndex];
    var details = document.getElementsByClassName('details')[myIndex];
    var vl = document.getElementsByClassName('vl')[myIndex];
    var bText = document.getElementsByClassName('bText')[myIndex];
    var content = document.getElementsByClassName('content')[myIndex];
    var upArrow = document.getElementsByClassName('upArrow')[myIndex];


    details.style.display = 'flex';
    vl.style.display = 'flex';
    bText.style.display = 'block';
    content.style.display = 'flex';
    upArrow.style.display = 'flex';
    newDoc.style.display = 'none';
    
    setTimeout(function(){
        setOpacity(myIndex);
    }, 800)
}    

function setOpacity(myIndex){

    var newDoc = document.getElementsByClassName('plus')[myIndex];
    var details = document.getElementsByClassName('details')[myIndex];
    var vl = document.getElementsByClassName('vl')[myIndex];
    var bText = document.getElementsByClassName('bText')[myIndex];
    var content = document.getElementsByClassName('content')[myIndex];
    var upArrow = document.getElementsByClassName('upArrow')[myIndex];


    details.style.opacity = "1.0";
    vl.style.opacity = "1.0"; 
    content.style.opacity = "1.0";
    bText.style.opacity = "1.0";
    upArrow.style.opacity = "1.0";
    newDoc.style.opacity = "1.0";
}

function setDisplayTime(myIndex){

    var newDoc = document.getElementsByClassName('plus')[myIndex];
    var details = document.getElementsByClassName('details')[myIndex];
    var vl = document.getElementsByClassName('vl')[myIndex];
    var bText = document.getElementsByClassName('bText')[myIndex];
    var content = document.getElementsByClassName('content')[myIndex];
    var upArrow = document.getElementsByClassName('upArrow')[myIndex];


    details.style.display = 'none';
    vl.style.display = 'none';
    content.style.display = 'none';
    bText.style.display = 'none';
    upArrow.style.display = 'none';
    newDoc.style.display = 'flex';
}

function resetMany(myIndex){

    var newDoc = document.getElementsByClassName('plus')[myIndex];
    var details = document.getElementsByClassName('details')[myIndex];
    var vl = document.getElementsByClassName('vl')[myIndex];
    var bText = document.getElementsByClassName('bText')[myIndex];
    var content = document.getElementsByClassName('content')[myIndex];
    var upArrow = document.getElementsByClassName('upArrow')[myIndex];

    details.style.opacity = "0";
    vl.style.opacity = "0"; 
    bText.style.opacity = "0";
    content.style.opacity = "0";
    upArrow.style.opacity = "0";

    setTimeout(function(){
        setDisplayTime(myIndex);
    }, 800)
}


var sympo = document.getElementsByClassName('sympo')[0];
var tech = document.getElementsByClassName('tech')[0];
var ntech = document.getElementsByClassName('ntech')[0];

$("#link1").on('click',function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:$('#techCardHolder').position().top},'slow');
});

$("#link2").on('click',function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:$('#workshopCardHolder').position().top},'slow');
});

$("#link3").on('click',function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:$('#ntechCardHolder').position().top},'slow');
});

$("#link4").on('click',function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:$('#myFooter').position().top},'slow');
});

//This is for the banner text
function sympoClick(){
    // sympo.style.display = 'flex';
    // tech.style.display = 'none';
    // ntech.style.display = 'none';

    //cardholder display
    displayWorkshop();
}

function techClick(){
    // sympo.style.display = 'none';
    // tech.style.display = 'flex';
    // ntech.style.display = 'none';

    //important Scroll Top
    // document.documentElement.scrollTop = document.getElementById('techCardHolder').offsetTop;

    //cardholder display
    displaytech();
}

function ntechClick(){
    // sympo.style.display = 'none';
    // tech.style.display = 'none';
    // ntech.style.display = 'flex';


    //cardholder display
    displayntech();
}

//displaying card holder
var techCardHolder = document.getElementById('techCardHolder');
var ntechCardHolder = document.getElementById('ntechCardHolder');
var workshopCardHolder = document.getElementById('workshopCardHolder');
var homePage = document.getElementById('mainPage');

function displayWorkshop(){
    workshopCardHolder.style.display = 'flex';
    ntechCardHolder.style.display = 'none';
    techCardHolder.style.display = 'none';
    homePage.style.display = 'none'
}

function displaytech(){
    workshopCardHolder.style.display = 'none';
    ntechCardHolder.style.display = 'none';
    techCardHolder.style.display = 'flex';
    homePage.style.display = 'none'
}

function displayntech(){
    workshopCardHolder.style.display = 'none';
    ntechCardHolder.style.display = 'flex';
    techCardHolder.style.display = 'none';
    homePage.style.display = 'none'
}

function homeClick(){
    homePage.style.display = 'flex'
    workshopCardHolder.style.display = 'none';
    ntechCardHolder.style.display = 'none';
    techCardHolder.style.display = 'none';
}


