// Scroll vers la section contact
document.getElementById("contactBtn").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Soumission du formulaire
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Merci ${name}, votre message a bien été envoyé !`);
    e.target.reset();
});
