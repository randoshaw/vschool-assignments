form = document.passenger

form.addEventListener("submit", function(e){
    e.preventDefault()
    let firstName = form.FirstName.value;
    let lastName = form.LastName.value;
    let age = form.Age.value;
    let gender = form.gender.value;
    let destination = form.destinations.value;
    let dietList = form.diet;

    const foods = []
    for (let i = 0; i< dietList.length; i++) {
        if (dietList[i].checked) {
            foods.push(dietList[i].value)
        }
    };

    let loggedInfo = {
        firstName,
        lastName,
        age,
        gender,
        destination,
        foods
    };

    let clientInfo = `
        First Name: ${loggedInfo.firstName}
        Last Name: ${loggedInfo.lastName}
        Age: ${loggedInfo.age}
        Gender: ${loggedInfo.gender}
        Destination: ${loggedInfo.destination}
        Dietary Restrictions: ${loggedInfo.foods}
    `
    alert(clientInfo)
        
})