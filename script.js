function checkPassword(why) {
    let dictionnaire = {
        "tableau": "2503",
    };
    const password = document.getElementById('password').value;
    if (dictionnaire[why] === password) {
        document.getElementById('content').style.display = 'block';
        document.getElementById('passwordForm').style.display = 'none';
    } else {
        alert("Mot de passe incorrect.");
    }
}
