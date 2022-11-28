
function submitData (userName, userEmail) {
    return fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`,
          }),
      })
    .then(res => res.json())
    .then(rtnObj => buildUserInDOM(rtnObj))
    .catch(function (error) {
        alert(`you goofed`);
        let errorMessage = document.createElement(`p`);
        errorMessage.textContent = error.message;
        document.body.append(errorMessage);
    })

}
function buildUserInDOM (obj) {
   let newUser = document.createElement('div');
   newUser.id = obj.id;
   document.body.append(newUser);
}