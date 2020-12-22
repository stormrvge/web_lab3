svg_init("init");

const centerPosX = svg.getAttribute("height") / 2;
const centerPosY = svg.getAttribute("width") / 2;
let pixel_step;

function redraw(input) {
    let r_value = input.checkedRadio[0].offsetParent.innerText;

    try {
        svg.removeChild(circle);
        svg.removeChild(square);
        svg.removeChild(triangle);
    } catch (DOMException) {}

    svg_init(r_value);
}

let mouseClicked = function (mouse) {
    let r_check = getR();

    if (parseFloat(r_check) >= 1 && parseFloat(r_check) <= 5) {
        pixel_step = 37.5;

        let point = fromPixelsToPoints(mouse.offsetX, mouse.offsetY);
        let mouseXPos = centerPosX + (point.getX() * pixel_step);
        let mouseYPos = centerPosY - (point.getY() * pixel_step);

        let marker = new Marker();
        marker.XPos = mouseXPos - (marker.Width / 2);
        marker.YPos = mouseYPos - marker.Height;
        marker.pixel_step = pixel_step;
        marker.XPoint = point.getX();
        marker.YPoint = point.getY();

        document.getElementById("hiddenForm:ajax_x").value = marker.XPoint;
        document.getElementById("hiddenForm:ajax_y").value = marker.YPoint;
        document.getElementById("hiddenForm:ajax_r").value = getR();

        document.getElementById("hiddenForm:hidden_button").click();

        setTimeout(function() {
            let hits_column = $('.table_hit').toArray();
            let last_el = hits_column.pop();
            let answer = last_el.innerHTML;

            let circle = document.createElementNS(xmlns_svg, "circle");
            circle.setAttribute("cx", (marker.XPos + 2.5).toString());
            circle.setAttribute("cy", (marker.YPos + 2.5).toString());
            circle.setAttribute("r", "5");

            if (answer === "true")
                circle.setAttribute("style", "fill:green");
            else if (answer === "false")
                circle.setAttribute("style", "fill:red");

            svg.appendChild(circle);
        }, 200);
    }
}
svg.addEventListener("click", mouseClicked, false);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
}

let Marker = function () {
    this.XPos = 0;
    this.YPos = 0;
    this.XPoint = 0;
    this.YPoint = 0;
    this.hit = false;
    this.r = 0;
    this.Width = 6;
    this.Height = 6;
}

function fromPixelsToPoints(x, y) {
    let pointX = round((x - centerPosX) / pixel_step, 0.5);
    let pointY = ((y - centerPosY) / -pixel_step);

    return new Point(pointX, pointY);
}

function getR() {
    return PF('r_radio').getJQ().find(':checked').val() || "0";
}

function round(value, step) {
    step || (step = 1.0);
    let inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}