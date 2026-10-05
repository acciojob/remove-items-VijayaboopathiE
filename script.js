//your JS code here. If required.
const colorSelect = document.getElementById("colorSelect");

const removeButton = document.querySelector(
    'input[type="button"][value="Select and Remove"]'
);

removeButton.addEventListener("click", function () {

    if (colorSelect.selectedIndex !== -1) {
        colorSelect.remove(colorSelect.selectedIndex);
    }

});