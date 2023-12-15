const screenWidth = screen.width - 100;
const face1 = document.getElementById('face1');
const face2 = document.getElementById('face2');
const bodyElement = document.querySelector('body');
const prevX = screen.width/2;
const maxWidth = screenWidth/2;
const faces = document.getElementById('faces');
const hero = document.getElementById('hero');

face1.style.width = 1/4;
face2.style.width = 1/4;
hero.addEventListener('mousemove', (e) => {
    const xDirection = getMouseDirection(e);
    const face1Width = face1.offsetWidth;
    const face2Width = face2.offsetWidth;

    if(xDirection == "left") {
        moveLeft(face1Width,face2Width);
    } else if (xDirection == "right") {
        moveRight(face1Width, face2Width);
    }
}, false);
function moveLeft(face1Width, face2Width) {
    if(face2Width<maxWidth) {
        face1.style.width = face1Width+18+"px";
        face2.style.width = face2Width-18+"px";
    }

    // change opacity
    var percentage = getPercentage(face1Width, screenWidth/4)/100;
    document.getElementById('text1').style.opacity = percentage-0.2;

    var percentage = getPercentage(face2Width, screenWidth/4)/100;
    document.getElementById('text2').style.opacity = percentage-0.2;

    //Move image left
    let picPos = faces.offsetLeft;
    maxRight = screenWidth/2-300;
    faces.style.left = picPos<maxRight?picPos+8+"px":picPos
}
function moveRight(face1Width, face2Width) {
    if(face1Width<maxWidth) {
        face2.style.width = face2Width+18+"px";
        face1.style.width = face1Width-12+"px";
    }
       // change opacity
       var percentage = getPercentage(face1Width, screenWidth/4)/100;
       document.getElementById('text1').style.opacity = percentage-0.2;

       var percentage = getPercentage(face2Width, screenWidth/4)/100;
       document.getElementById('text2').style.opacity = percentage-0.2;

       //Move Right
       let picPos = faces.offsetLeft;
       maxLeft = 150;
       faces.style.left = picPos>maxLeft?picPos-8+"px":picPos
}
function getPercentage(width, total) {
    return (width*100)/total;
}
function getMouseDirection(e) {
    let dir;
    currentX = e.pageX;
    if (prevX<currentX){
        dir = "right";
    } else {
        dir = "left";
    }
    return dir;
};

