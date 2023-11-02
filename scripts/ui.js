// Categories Render
//? categories: Array of Category Objects
//? parentElement: Parent Element to Render Categories

import { el } from "./elementSelector.js";
import { textSlice } from "./uiFunction.js";

//? active: Active Category ID
export const renderCategories = (categories, parentElement, active) => {
  // Clear Parent Element
  parentElement.innerHTML = "";

  categories.forEach((category) => {
    // Create Category Element
    const categoryElement = `
      <li ${active === category.id ? 'class="active"' : ""}>
      <i class="${category.icon}"></i>
      <span>${category.title}</span>
      </li>
      `;

    //! Add Parent Element
    parentElement.insertAdjacentHTML("beforeend", categoryElement);

    //! Add Event Listener
    parentElement.lastElementChild.addEventListener("click", () => {
      renderCategories(categories, el.navList, category.id);
    });
  });
};

// Mail Render
//? mails: Array of Mail Objects
//? parentElement: Parent Element to Render Mails
export function renderMails(mailData, parentElement) {
  // mail yoksa gonksiyonu çalıştırma
  if (!mailData) return;

  // maller dizisini dön >  herbir eleman
  // için bir tane mail html'i oluştur
  const html = mailData.map(
    (mail) => `
        <div data-id="${mail.id}" class="mail">
            <div class="info">
              <input name="mail-checkbox" type="checkbox" ${
                mail.checked ? "checked" : ""
              } />
              <i id="star" class="bi ${
                mail.starred ? "bi-star-fill" : "bi-star"
              }"></i>
              <b>${mail.sender}</b>
            </div>
       
            <div class="content">
              <p class="title">${textSlice(mail.title, 35)} - </p>
              <p class="text">${textSlice(mail.message, 30)}</p>
            </div>
       
            <p class="time">${mail.date}</p>
            
            <button name="delete-mail-btn" class="delete-mail-btn" data-id="${mail.id}">Sil</button>
          </div> 
  `
  );

  // ekrana bas
  parentElement.innerHTML = html.join(" ");
}

export const toggleMailModal = (willOpen) => {
  el.modal.style.display = willOpen ? "flex" : "none";
};

export const deleteMail = (mailId, data) => {
  const mailIndex = data.findIndex((mail) => mail.id === mailId);

  data.splice(mailIndex, 1);

  localStorage.setItem("mailData", JSON.stringify(data));

  renderMails(data, el.mails);
};

export const toggleStar = (mailId, data) => {
  const mailIndex = data.findIndex((mail) => mail.id === mailId);

  data[mailIndex].starred = !data[mailIndex].starred;

  localStorage.setItem("mailData", JSON.stringify(data));

  renderMails(data, el.mails);
};

export const toggleCheckbox = (mailId, data) => {
  const mailIndex = data.findIndex((mail) => mail.id === mailId);

  data[mailIndex].checked = !data[mailIndex].checked;

  localStorage.setItem("mailData", JSON.stringify(data));

  renderMails(data, el.mails);
};
