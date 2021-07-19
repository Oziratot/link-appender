const saveButton = document.getElementById("button");
const link = document.getElementById("link");

const savedLink = chrome.storage.get()

saveButton.addEventListener("click", (link) => {
    chrome.storage.sync.set({userLink: `${link}` }, (link) => {
        console.log(link);
    });
})