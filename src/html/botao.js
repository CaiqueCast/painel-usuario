document.addEventListener("DOMContentLoaded", function () {
    const updateFormSection = document.getElementById("updateFormSection");
    const updateButton = document.getElementById("updateButton");

    updateButton.addEventListener("click", function () {
        if (updateFormSection.style.display === "none") {
            updateFormSection.style.display = "block";
        } else {
            updateFormSection.style.display = "none";
        }
    });
});
