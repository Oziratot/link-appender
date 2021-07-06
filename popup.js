const saveButton = document.getElementById("button");
const link = document.getElementById("link");

saveButton.addEventListener("click", (link) => {
    chrome.storage.sync.set({ link });
})