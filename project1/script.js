var plusbtn = document.querySelector(".plus");
var plusbtn1 = document.querySelector(".X");
var closeBtnArr = document.querySelectorAll(".icon.color-3");


function plusbtnclick() {
    document.querySelector(".dialog").style.display = "flex"
}
plusbtn.addEventListener("click", plusbtnclick)


function closeDialog() {
    document.querySelector(".dialog").style.display = "none"
}
plusbtn1.addEventListener("click", closeDialog)


function closeTicket(e) {
    var box = e.target.parentElement.parentElement;
    console.log(box)
    box.style.display = "none"
}
for (let index = 0; index < closeBtnArr.length; index++) {
    const closeBtn = closeBtnArr[index];
    closeBtn.addEventListener("click", closeTicket)
}
function addTicket() {
    closeDialog()
    var boxes = document.querySelector(".wrapper main")
    var puranaHTML = boxes.innerHTML;
    var boxContent = document.getElementById("box-content");
    var title = document.getElementById("title");
    boxes.innerHTML = puranaHTML + `
    <div class="box">
                <div class="header">
                    <div class="heading">
                    ${title.value}
                    </div>
                    <div class="icon color-1">-</div>
                    <div class="icon">*</div>
                    <div class="icon color-3">x</div>
                </div>
                <main>
                    <textarea row="15" id="boxText">${boxContent.value}</textarea>
                </main>
            </div>`
    title.value = ""
    boxContent.value = ""
    addDelTktLogic();
}
function addDelTktLogic() {

    var closeBtnArr = document.querySelectorAll(".icon.color-3")
    var minimizeIcons = document.querySelectorAll(".icon.color-1")
    function closeTicket(e) {
        var box = e.target.closest(".box");
        console.log(box)
        box.style.display = "none"
    }

    function minimize(e) {
        var box = e.target.closest(".box");
        console.log(box)
        if (box.querySelector("main").style.display !== "none") {
            box.querySelector("main").style.display = "none";
        }
        else {
            box.querySelector("main").style.display = "block";
        }
    }

    for (let index = 0; index < closeBtnArr.length; index++) {
        const closeBtn = closeBtnArr[index];
        closeBtn.addEventListener("click", closeTicket)
    }

    for (let index = 0; index < minimizeIcons.length; index++) {
        const closeBtn = minimizeIcons[index];
        closeBtn.addEventListener("click", minimize)
    }
}
function addGreen() {
    addTicket()
    document.querySelector(".box").style.backgroundColor = "lightgreen";
    document.querySelector("#boxText").style.backgroundColor = "lightgreen";
    console.log("green box selected")
}
function addBlue() {
    addTicket()
    document.querySelector(".box").style.backgroundColor = "lightblue";
    document.querySelector("#boxText").style.backgroundColor = "lightblue";
    console.log("blue box selected")
}
function addRed() {
    addTicket()
    document.querySelector(".box").style.backgroundColor = "red";
    document.querySelector("#boxText").style.backgroundColor = "red";
    console.log("red box selected")
}