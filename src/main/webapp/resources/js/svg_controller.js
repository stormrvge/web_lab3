let xmlns_svg = "http://www.w3.org/2000/svg";
const svg = document.createElementNS(xmlns_svg, "svg");

let triangle = null;
let circle = null;
let square = null;

svg_init("init");

function svg_init(value) {
    $(svg).empty();

    let horTextClassName = "svg_numbers horizontal_numbers";
    let verTextClassName = "svg_numbers vertical_numbers";
    let horLineClassName = "svg_horizontal_marks";
    let verLineClassName = "svg_vertical_marks";

    svg.setAttribute("width", "450");
    svg.setAttribute("height", "450");


    let rect = document.createElementNS(xmlns_svg, "rect");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");
    rect.setAttribute("fill", "white");

    let x_line = lineCreate(225, 225, 0, 450, "axis");
    let y_line = lineCreate(0, 450, 225, 225, "axis");
    let arrow1 = lineCreate(450, 435, 225, 235, "arrow");
    let arrow2 = lineCreate(450, 435, 225, 215, "arrow");
    let arrow3 = lineCreate(225, 215, 0, 15, "arrow");
    let arrow4 = lineCreate(225, 235, 0, 15, "arrow");

    if (value === "1") {
        square = document.createElementNS(xmlns_svg, "rect");
        square.setAttribute("width", "38");
        square.setAttribute("height", "38");
        square.setAttribute("fill", "red");
        square.setAttribute("x", "187");
        square.setAttribute("y", "187");

        triangle = document.createElementNS(xmlns_svg, "polygon");
        triangle.setAttribute("points", "205,225 225,225 225,264");
        triangle.setAttribute("fill", "red");

        circle = document.createElementNS(xmlns_svg, "path");
        circle.setAttribute("d", "M225,226 v-13, -25 a40,40 0 0,0 -46, 26 z");
        circle.setAttribute("transform", "rotate(165, 220, 225)");
        circle.setAttribute("fill", "red");
    }

    if (value === "2") {
        square = document.createElementNS(xmlns_svg, "rect");
        square.setAttribute("width", "76");
        square.setAttribute("height", "76");
        square.setAttribute("fill", "red");
        square.setAttribute("x", "149");
        square.setAttribute("y", "149");

        triangle = document.createElementNS(xmlns_svg, "polygon");
        triangle.setAttribute("points", "187,225 225,225 225,300.5");
        triangle.setAttribute("fill", "red");

        circle = document.createElementNS(xmlns_svg, "path");
        circle.setAttribute("d", "M225,225 v-50, -25 a80,80 0 0,0 -85, 66 z");
        circle.setAttribute("transform", "rotate(173, 220, 225)");
        circle.setAttribute("fill", "red");
    }

    if (value === "3") {
        square = document.createElementNS(xmlns_svg, "rect");
        square.setAttribute("width", "112.5");
        square.setAttribute("height", "112.5");
        square.setAttribute("fill", "red");
        square.setAttribute("x", "112");
        square.setAttribute("y", "112");

        triangle = document.createElementNS(xmlns_svg, "polygon");
        triangle.setAttribute("points", "168,225 225,225 225,337.5");
        triangle.setAttribute("fill", "red");

        circle = document.createElementNS(xmlns_svg, "path");
        circle.setAttribute("d", "M225,225 v-87, -25 a120,120 0 0,0 -122, 102 z");
        circle.setAttribute("transform", "rotate(175, 220, 225)");
        circle.setAttribute("fill", "red");
    }

    if (value === "4") {
        square = document.createElementNS(xmlns_svg, "rect");
        square.setAttribute("width", "150");
        square.setAttribute("height", "150");
        square.setAttribute("fill", "red");
        square.setAttribute("x", "75");
        square.setAttribute("y", "75");

        triangle = document.createElementNS(xmlns_svg, "polygon");
        triangle.setAttribute("points", "150,225 225,225 225,375");
        triangle.setAttribute("fill", "red");

        circle = document.createElementNS(xmlns_svg, "path");
        circle.setAttribute("d", "M225,225 v-125, -25 a160,160 0 0,0 -160, 139 z");
        circle.setAttribute("transform", "rotate(176, 220, 225)");
        circle.setAttribute("fill", "red");
    }

    if (value === "5" || value === "init") {
        square = document.createElementNS(xmlns_svg, "rect");
        square.setAttribute("width", "188");
        square.setAttribute("height", "188");
        square.setAttribute("fill", "red");
        square.setAttribute("x", "37");
        square.setAttribute("y", "37");

        triangle = document.createElementNS(xmlns_svg, "polygon");
        triangle.setAttribute("points", "131,225 225,225 225,415");
        triangle.setAttribute("fill", "red");

        circle = document.createElementNS(xmlns_svg, "path");
        circle.setAttribute("d", "M225,225 v-160, -28 a180,170 0 0,0 -197, 180 z");
        circle.setAttribute("transform", "rotate(177.5, 220, 225)");
        circle.setAttribute("fill", "red");
    }


    svg.append(rect);
    svg.appendChild(square);
    svg.appendChild(triangle);
    svg.appendChild(circle);

    svg.appendChild(x_line);
    svg.appendChild(y_line);
    svg.appendChild(arrow1);
    svg.appendChild(arrow2);
    svg.appendChild(arrow3);
    svg.appendChild(arrow4);

    if (value !== "init") {
        let text = [];
        text.push(textCreate(35, 250, horTextClassName, -5));
        text.push(textCreate(73, 250, horTextClassName, -4));
        text.push(textCreate(110, 250, horTextClassName, -3));
        text.push(textCreate(148, 250, horTextClassName, -2));
        text.push(textCreate(185, 250, horTextClassName, -1));
        text.push(textCreate(260, 250, horTextClassName, 1));
        text.push(textCreate(298, 250, horTextClassName, 2));
        text.push(textCreate(335, 250, horTextClassName, 3));
        text.push(textCreate(373, 250, horTextClassName, 4));
        text.push(textCreate(410, 250, horTextClassName, 5));
        text.push(textCreate(240, 266, verTextClassName, -1));
        text.push(textCreate(240, 303, verTextClassName, -2));
        text.push(textCreate(240, 340, verTextClassName, -3));
        text.push(textCreate(240, 378, verTextClassName, -4));
        text.push(textCreate(240, 415, verTextClassName, -5));
        text.push(textCreate(240, 41, verTextClassName, 5));
        text.push(textCreate(240, 79, verTextClassName, 4));
        text.push(textCreate(240, 117, verTextClassName, 3));
        text.push(textCreate(240, 154, verTextClassName, 2));
        text.push(textCreate(240, 192, verTextClassName, 1));

        let lines = [];
        for (let i = 37.5; i <= 412.5; i += 37.5) {
            lines.push(lineCreate(i, i, 215, 235, verLineClassName));
            lines.push(lineCreate(215, 235, i, i, verLineClassName));
        }

        for (let i = 0; i < text.length; i++) {
            svg.appendChild(text[i]);
        }

        for (let i = 0; i < lines.length; i++) {
            svg.appendChild(lines[i]);
        }
    }
    else {
        let text = [];
        text.push(textCreate(35, 250, horLineClassName, "-R"));
        text.push(textCreate(129, 250, horLineClassName, "-R/2"));
        text.push(textCreate(316.5, 250, horLineClassName, "R/2"));
        text.push(textCreate(410, 250, horLineClassName, "R"));
        text.push(textCreate(240, 415, verLineClassName, "-R"));
        text.push(textCreate(240, 321.5, verLineClassName, "-R/2"));
        text.push(textCreate(240, 135.5, verLineClassName, "R/2"));
        text.push(textCreate(240, 41, verLineClassName, "R"));

        let lines = [];
        lines.push(lineCreate(215, 235, 414, 414, verLineClassName));
        lines.push(lineCreate(215, 235, 330, 330, verLineClassName));
        lines.push(lineCreate(215, 235, 135.5, 135.5, verLineClassName));
        lines.push(lineCreate(215, 235, 38, 38, verLineClassName));
        lines.push(lineCreate(37, 37, 215, 235, horLineClassName));
        lines.push(lineCreate(131, 131, 215, 235, horLineClassName));
        lines.push(lineCreate(330, 330, 215, 235, horLineClassName));
        lines.push(lineCreate(412, 412, 215, 235, horLineClassName));

        for (let i = 0; i < text.length; i++) {
            svg.appendChild(text[i]);
        }

        for (let i = 0; i < lines.length; i++) {
            svg.appendChild(lines[i]);
        }
    }

    document.getElementById("info").appendChild(svg);
}

function redraw(input) {
    let selected = input.checkedRadio[0].offsetParent.innerText;

    try {
        svg.removeChild(circle);
        svg.removeChild(square);
        svg.removeChild(triangle);
    } catch (DOMException) {}

    svg_init(selected);
}


function textCreate(x, y, className, value) {
    let text = document.createElementNS(xmlns_svg, "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("class", className);
    text.setAttribute("x", x);
    text.textContent = value;

    return text;
}

function lineCreate(x1, x2, y1, y2, className) {
    let line = document.createElementNS(xmlns_svg, "line");
    line.setAttribute("x1", x1);
    line.setAttribute("x2", x2);
    line.setAttribute("y1", y1);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "black")
    line.setAttribute("stroke-width", "1");
    line.setAttribute("class", className);

    return line;
}