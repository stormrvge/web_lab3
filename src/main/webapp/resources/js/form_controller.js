let isXActive = true;
clearButtons();
//document.getElementById("formId:yInput").value = null;

function buttonColor(input) {
    isXActive = true;
    let buttons = document.getElementsByClassName("xButton");

    for (let i = 0; i < buttons.length; i++)
    {
        if (buttons[i].className.includes(" activeButton"))
            buttons[i].className = buttons[i].className.replace(" activeButton", "");
    }

    input.className = input.className + " activeButton";
}

function clearButtons() {
    let buttons = document.getElementsByClassName("xButton");
    isXActive = false;
    document.getElementById("formId:yInput").value = "";

    let checkboxes = document.getElementsByClassName("ui-radiobutton-box ui-widget");
    let checkboxesDots = document.getElementsByClassName("ui-radiobutton-icon ui-icon");

    for (let i = 0; i < checkboxes.length; i++)
    {
        if (checkboxes[i].className.includes(" ui-state-active"))
            checkboxes[i].className = checkboxes[i].className.replace(" ui-state-active", "");
    }

    for (let i = 0; i < checkboxesDots.length; i++)
    {
        if (checkboxesDots[i].className.includes("ui-icon-bullet"))
            checkboxesDots[i].className = checkboxesDots[i].className.replace("ui-icon-bullet", "ui-icon-blank");
    }

    for (let i = 0; i < buttons.length; i++)
    {
        if (buttons[i].className.includes(" activeButton"))
            buttons[i].className = buttons[i].className.replace(" activeButton", "");
    }

    document.getElementsByClassName("x")[0].style.backgroundColor = "#f7f7f7";
    document.getElementsByClassName("y")[0].style.backgroundColor = "#f7f7f7";
    document.getElementsByClassName("r")[0].style.backgroundColor = "#f7f7f7";
    return false;
}

function validateForm() {
    if (!isXActive) {
        document.getElementsByClassName("x")[0].style.backgroundColor = "#ffa6b5";
        return false;
    } else if (isXActive) {
        document.getElementsByClassName("x")[0].style.backgroundColor = "#f7f7f7";
        return true;
    }
}

