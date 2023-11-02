import { el } from "./scripts/elementSelector.js";
import { navCategories, newMailData, month_tr } from "./scripts/constants.js";
import {
  renderCategories,
  renderMails,
  toggleMailModal,
  deleteMail,
  toggleStar,
  toggleCheckbox,
} from "./scripts/ui.js";

// DOM Content Loaded Event Listener (Initial Render) - Render Categories
document.addEventListener("DOMContentLoaded", () => {
  renderCategories(navCategories, el.navList, 1);
  renderMails(newMailData, el.mails);
});

// Hambuger Menu Event Listener
el.hamburgerMenu.addEventListener("click", () => {
  el.nav.classList.toggle("hide");
});

// Create Mail Button Event Listener
el.createMailBtn.addEventListener("click", () => toggleMailModal(true));

// Modal Close Button Event Listener
el.modalCloseBtn.addEventListener("click", () => toggleMailModal(false));

// Modal Form Event Listener
el.modalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const values = e.target;

  const receiver = values.receiver.value;
  const title = values.title.value;
  const message = values.message.value;

  // Values Validation
  if (!receiver || !title || !message) {
    alert("Lütfen tüm alanları doldurunuz.");
    return;
  }

  const newMail = {
    id: Math.floor(Math.random() * 100000),
    sender: "Oktay",
    receiver,
    title,
    message,
    date: `${new Date().getDate()} ${
      month_tr[new Date().getMonth()]
    } ${new Date().getFullYear()}`,
    starred: false,
    checked: false,
  };

  newMailData.unshift(newMail);

  //form reset
  e.target.reset();

  toggleMailModal(false);

  localStorage.setItem("mailData", JSON.stringify(newMailData));

  renderMails(newMailData, el.mails);
});

// Mails Event Listener
el.mails.addEventListener("click", (e) => {
  if (e.target.name === "delete-mail-btn") {
    const mailId = Number(e.target.dataset.id);

    deleteMail(mailId, newMailData);

    renderMails(newMailData, el.mails);
  } else if (e.target.id === "star") {
    const mailId = Number(e.target.parentElement.parentElement.dataset.id);

    toggleStar(mailId, newMailData);

    renderMails(newMailData, el.mails);
  } else if (e.target.name === "mail-checkbox") {
    const mailId = Number(e.target.parentElement.parentElement.dataset.id);

    toggleCheckbox(mailId, newMailData);

    renderMails(newMailData, el.mails);
  }
});

let timer;

const searchMails = (searchValue) => {
  timer = setTimeout(() => {
    const filteredMails = newMailData.filter((mail) => {
      return (
        mail.sender.toLowerCase().includes(searchValue) ||
        mail.title.toLowerCase().includes(searchValue) ||
        mail.message.toLowerCase().includes(searchValue)
      );
    });

    renderMails(filteredMails, el.mails);
  }, 400);
};

// Search Mail Input Event Listener
el.searchMailInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();

  clearTimeout(timer);
  searchMails(searchValue);
});
