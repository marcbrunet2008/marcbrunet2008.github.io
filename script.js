function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === "2503") {
        document.getElementById('content').style.display = 'block';
        document.getElementById('passwordForm').style.display = 'none';
    } else {
        alert("Mot de passe incorrect.");
    }
}
