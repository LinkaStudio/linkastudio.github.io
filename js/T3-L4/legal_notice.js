const legalAgeBtn = document.querySelector("[legal-age-btn]")
const modalDenyBtn = document.querySelector("[modal-no-btn]");
const modalAgreeBtn = document.querySelector("[modal-yes-btn]");
const ageWarningModal = document.querySelector("[legal-age-modal]");

legalAgeBtn.addEventListener("click", () => {
    
    ageWarningModal.showModal();
});
modalDenyBtn.addEventListener("click", () => {
    //window.location.href = "https://linka-studio.com";
    window.location.href = "about:blank";
});

modalAgreeBtn.addEventListener("click", () => {
    sessionStorage.setItem("legalNotice", "true");
    ageWarningModal.close();
});
window.onload = function () {
    if (sessionStorage.getItem("legalNotice") != "true") {
        ageWarningModal.showModal();
    }
};

