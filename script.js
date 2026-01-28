let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let groups = JSON.parse(localStorage.getItem("groups")) || [];

const contactForm = document.getElementById("contactForm");

contactForm.onsubmit = e => {
  e.preventDefault();
  const selectedGroups = [...document.querySelectorAll(".grp:checked")].map(g => g.value);

  contacts.push({
    id: Date.now(),
    lastName: lastName.value,
    firstName: firstName.value,
    mobile: mobile.value,
    home: home.value,
    email: email.value,
    address: address.value,
    birth: birth.value,
    note: note.value,
    groups: selectedGroups
  });

  save();
  contactForm.reset();
};

function addGroup() {
  if (!groupName.value) return;
  groups.push(groupName.value);
  groupName.value = "";
  save();
}

function deleteGroup(name) {
  groups = groups.filter(g => g !== name);
  contacts.forEach(c => c.groups = c.groups.filter(g => g !== name));
  save();
}

function renderContacts() {
  contactsDiv.innerHTML = "";
  const filter = filterGroup.value;

  contacts
    .filter(c => !filter || c.groups.includes(filter))
    .forEach(c => {
      const div = document.createElement("div");
      div.className = "contact";
      div.innerHTML = `
        <strong>${c.lastName} ${c.firstName}</strong><br>
        📱 ${c.mobile}<br>
        ✉️ ${c.email}<br>
        Csoportok: ${c.groups.join(", ")}
        <button onclick="removeContact(${c.id})">Törlés</button>
      `;
      contactsDiv.appendChild(div);
    });
}

function removeContact(id) {
  contacts = contacts.filter(c => c.id !== id);
  save();
}

function renderGroups() {
  groupList.innerHTML = "";
  groupCheckboxes.innerHTML = "";
  filterGroup.innerHTML = `<option value="">Összes</option>`;

  groups.forEach(g => {
    groupList.innerHTML += `
      <li class="group">${g}
        <button onclick="deleteGroup('${g}')">✖</button>
      </li>`;

    groupCheckboxes.innerHTML += `
      <label><input type="checkbox" class="grp" value="${g}"> ${g}</label><br>`;

    filterGroup.innerHTML += `<option value="${g}">${g}</option>`;
  });
}

function save() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
  localStorage.setItem("groups", JSON.stringify(groups));
  renderGroups();
  renderContacts();
}

const contactsDiv = document.getElementById("contacts");
const groupList = document.getElementById("groupList");
const groupCheckboxes = document.getElementById("groupCheckboxes");
const filterGroup = document.getElementById("filterGroup");

save();
