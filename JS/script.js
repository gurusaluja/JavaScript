
    var date = new Date();
    hour = date.getHours();

    function setConfig(url) {
        if (document.body) {
            document.getElementById('col').style.backgroundImage = `url('${url}')`;
            document.getElementById('col').style.backgroundRepeat = "no-repeat";
            document.getElementById('col').style.backgroundSize = "100% 100%";
        }
    }
    //console.log(hour);
    //8PM to 5AM
    if (hour / 20 < 5 || hour < 5) {
        setConfig("Images/Night.jpg");
    }
    //5AM to 6AM
    if (hour >= 5 && hour < 6) {
        setConfig("Images/Sunrise.jpg");
    }
    //6AM to 10AM
    else if (hour >= 6 && hour < 10) {
        setConfig("Images/Morning.jpg");
    }
    //10AM to 4PM
    else if (hour >= 10 && hour < 16) {
        setConfig("Images/noon.jpg");
    }
    //4PM to 6PM
    else if (hour >= 16 && hour < 18) {
        setConfig("Images/sunset.jpg");
    }
    //6PM to 8PM
    else if (hour >= 18 && hour < 20) {
        setConfig("Images/Evening.jpg");
    }

    /*var gitB = document.getElementById("tool");
    gitB.innerHTML = `<div class="tooltip"><span class="tooltiptext">Click here to get GIT Repository</span></div>`;*/

    document.getElementById('col').addEventListener("onmouseover", document.getElementById('col').reload);
    /* function load()
     {
         setTimeout("window.open(self.location, '_self');", 5000);
         
         //setTimeout("document.getElementById('col').reload();", 5000);
     }*/

    //var global;
    function gitdata() {
        function printRepoCount() {
            var responseObj = JSON.parse(this.responseText);
            //global = responseObj;
            var gitId = document.getElementById("GitRepo");
            if (gitId.innerHTML == "") {
                for (var iteration = 0; iteration < responseObj.length; iteration++) {
                    gitId.innerHTML += `<div class="tooltip"><a href=${responseObj[iteration]["html_url"]}>${responseObj[iteration]["name"]}</a><span class="tooltiptext">${responseObj[iteration]["description"]}</span></div><br>`;
                }
            } else {
                gitId.innerHTML = "";
            }
        }
        var request = new XMLHttpRequest();
        request.onload = printRepoCount;
        request.open('get', 'https://api.github.com/users/gurusaluja/repos', true);
        request.send();
    }

    function showDescription(projectName) {
        var elementMSG;
        if (projectName === "FRM") {
            elementMSG = `<br>
                    <em>Date</em> : Start - 2014 End - 2016 <br>
                    <em>Group</em> : Individual <br>
                    <em>Description</em>
                    <p>This is basically Inventory Management System for Fertilizer Retail Shop with O’ From supported. Front-End Design by VB 6 and VB.Net and Back-End MS Access.</p>`;
        } else if (projectName === "MMRMI") {
            elementMSG = `<br>
                    <em>Date</em> : Start - 2015 End - 2015 <br>
                    <em>Group</em> : Individual <br>
                    <em>Description</em>
                    <p>This is for Rice Mill Industry for maintaining the spare parts, transportation and other IN/OUT Material. Front-End Design by VB 6 and Back-End MS Access.</p>`;
        } else if (projectName === "AA") {
            elementMSG = `<br>
                    <em>Date</em> : Start - 2017 End - 2017 <br>
                    <em>Group</em> : 2 People <br>
                    <em>Description</em>
                    <p>This is an Android application for laundry booking and searching laundry services with help of nearby location using Google MAPS API. Front-End Design by Android Studio and Back-End PHP.</p>`;
        } else if (projectName === "ME") {
            elementMSG = `<br>
                    <em>Date</em> : Start - 2018 End – 2018 <br>
                    <em>Group</em> : 2 People <br>
                    <em>Description</em>
                    <p>This is for Encryption the message using AES (For key size Select), Elliptic Curve (for Random Curve generation) and Diffie-Hellman (for Key Exchange). It is implemented in java</p>`;
        } else if (projectName === "KIDDIS") {
            elementMSG = `<br>
                    <em>Date</em> : Start - 2017 End - 2017 <br>
                    <em>Group</em> : Individual <br>
                    <em>Description</em>
                    <p>This is Journal Paper which is classify that weather kidney is in risk stage and normal stage and how much other diseases affects kidney disease by using classification techniques. The implementation for this done in R.</p>`;
        } else if (projectName === "SMRL") {
            elementMSG = `<br>
                    <em>Date</em> : Start - 2018 End – 2019 <br>
                    <em>Group</em> : Individual <br>
                    <em>Description</em>
                    <p>This is also Journal Paper. This is for prediction for the stock market price using Q-Learning Application for calculating probability of profit or loss for stock and LSTM is used to predict the price. This is implementing in Python with tensorflow and keras packages.</p>`;
        } else if (projectName === "TC") {
            elementMSG = `<br>
                    <em>Date</em> : Start - 2019 End – Current <br>
                    <em>Group</em>: Individual <br>
                    <em>Description</em>
                    <p>This is also Journal Paper in which I’m currently working on. This is for travel agent chatbot for answering the user with famous place and famous about that place. In this seq2seq model implemented with LSTM and Google MAPS API as well as Wikipedia API is used to train the model. This will work in both offline as well as online.</p>`;
        }
        checkAssign(elementMSG, projectName);
    }

    function checkAssign(elementMSG, elementID) {
        if (document.getElementById(elementID).innerHTML == "") {
            document.getElementById(elementID).innerHTML = elementMSG;
        } else {
            document.getElementById(elementID).innerHTML = "";
        }
    }