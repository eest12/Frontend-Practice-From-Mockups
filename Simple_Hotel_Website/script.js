/**
 * Handles a change in "select" elements.
 * Either adds or removes the "placeholder" class from the element depending on the value of the selected option.
 * @param {*} e Event
 */
function handleSelectChange(e) {
    if (e.target.value == "") {
        e.target.classList.add("placeholder");
    } else {
        e.target.classList.remove("placeholder");
    }
}

/**
 * Handles an input field on focus.
 * Changes the input type to "date".
 * @param {*} e Event
 */
function handleDateInputFocus(e) {
    e.target.type = "date";
}

/**
 * Handles an input field on blur.
 * Changes the input type to "text", only if it has an empty value.
 * @param {*} e Event
 */
function handleDateInputBlur(e) {
    if (e.target.value == "") {
        e.target.type = "text";
    }
}

// Add event listeners

Array.from(document.getElementsByClassName("form-select")).map(el => {
    el.addEventListener("change", handleSelectChange);
});

Array.from(document.getElementsByClassName("date-input")).map(el => {
    el.addEventListener("focus", handleDateInputFocus);
    el.addEventListener("blur", handleDateInputBlur);
});