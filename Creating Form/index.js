let loginform = document.getElementById('form');

loginform.addEventListener("submit" , (e) =>{
    e.preventDefault()
    {
        alert("your form has been successfully submitted !");
        window.location.reload()
    }
});