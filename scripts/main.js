let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

/* let myHTML = document.querySelector('html');
myHTML.onclick = function () {
    alert("别戳我！");
}; */

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === "images/icon2.jpg") {
        myImage.setAttribute('src',  "https://roy-tian.github.io/learning-area/extras/getting-started-web/beginner-html-site/images/firefox-icon.png");
    } else {
        myImage.setAttribute('src', 'images/icon2.jpg');
    }
}


let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字。',"firstUser")
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName)
        myHeading.textContent = "hello," + myName
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'hello，' + storedName;
}

myButton.onclick = function () {
    setUserName();
}