//By @nodws
//Feel free to use it on your project, paypal me a beer if you want :D pay@nodws.com
const openButton = document.querySelector("#openMenu");
 
const dialog = document.querySelector("dialog");

openButton.addEventListener("click", () => {
    dialog.showModal();
});
 
dialog.addEventListener("click", ({ target: dialog }) => {
    if (dialog.nodeName === "DIALOG") {
        dialog.close("dismiss");
    }
});
