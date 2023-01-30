(function () {

    function DisplayButton() {
        let randomButton = document.getElementById("RandomButton")
        randomButton.addEventListener("click", function() {
            location.href = './projects.html'
        })

        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")
        
        
        documentBody = document.body

        let mainParagraph = document.createElement("p")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3 container")

        
        let firstString = "This is the "
        let secondString = `${ firstString } coolest website in the universe made using javascript and this is also on GitHub Pages!`
        mainParagraph.textContent = secondString

       

        
        mainContent.appendChild(mainParagraph) 
        
        // add before (before)
        // mainContent.before(mainParagraph) 

        // delete element
        // document.getElementById("RandomButton").remove()

        // documentBody.innerHTML = `
        //     <div class="container">
        //         <h1 class="display-1">Hello WEBD6201</h1>
        //         <p class="mt-5 lead">and... what do you this of this method?</p>
        //     </div>
        // `
    }
    
    function Start() {
        console.log("App Started Successfully!")

        switch (document.title) {
            case "Home - WEBD6201 Demo":
                DisplayButton()
                break
        }
    }

    window.addEventListener("load", Start)
})()