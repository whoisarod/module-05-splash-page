let emailCollector = document.getElementById("email-collector")
emailCollector.addEventListener("submit", event => {
    event.preventDefault()
    console.log("event is firing");

    let ourFormData = new FormData(event.target)
    let userFirstName = ourFormData.get("fname")
    let updatedHTML = `
        <h2>Congratulations ${userFirstName}!</h2>

        <p>You're on your way to becoming a BBQ Master!</p>
        
        <p class="fine-print">We'll never share your information`

       let ourMainContent = document.getElementById("main-content")
       ourMainContent.innerHTML = updatedHTML
})