let xmlns_svg = "http://www.w3.org/2000/svg";
const svg = document.createElementNS(xmlns_svg, "svg");

let triangle = null;
let circle = null;
let square = null;

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
        let text1 = textCreate(35, 250, horTextClassName, -5);
        let text2 = textCreate(73, 250, horTextClassName, -4);
        let text3 = textCreate(110, 250, horTextClassName, -3);
        let text4 = textCreate(148, 250, horTextClassName, -2);
        let text5 = textCreate(185, 250, horTextClassName, -1);
        let text6 = textCreate(260, 250, horTextClassName, 1);
        let text7 = textCreate(298, 250, horTextClassName, 2);
        let text8 = textCreate(335, 250, horTextClassName, 3);
        let text9 = textCreate(373, 250, horTextClassName, 4);
        let text10 = textCreate(410, 250, horTextClassName, 5);
        let text11 = textCreate(240, 266, verTextClassName, -1);
        let text12 = textCreate(240, 303, verTextClassName, -2);
        let text13 = textCreate(240, 340, verTextClassName, -3);
        let text14 = textCreate(240, 378, verTextClassName, -4);
        let text15 = textCreate(240, 415, verTextClassName, -5);
        let text16 = textCreate(240, 41, verTextClassName, 5);
        let text17 = textCreate(240, 79, verTextClassName, 4);
        let text18 = textCreate(240, 117, verTextClassName, 3);
        let text19 = textCreate(240, 154, verTextClassName, 2);
        let text20 = textCreate(240, 192, verTextClassName, 1);

        let line1 = lineCreate(37.5, 37.5, 215, 235, horLineClassName);
        let line2 = lineCreate(75, 75, 215, 235, horLineClassName);
        let line3 = lineCreate(112.5, 112.5, 215, 235, horLineClassName);
        let line4 = lineCreate(150, 150, 215, 235, horLineClassName);
        let line5 = lineCreate(187.5, 187.5, 215, 235, horLineClassName);
        let line6 = lineCreate(262.5, 262.5, 215, 235, horLineClassName);
        let line7 = lineCreate(300, 300, 215, 235, horLineClassName);
        let line8 = lineCreate(337.5, 337.5, 215, 235, horLineClassName);
        let line9 = lineCreate(375, 375, 215, 235, horLineClassName);
        let line10 = lineCreate(412.5, 412.5, 215, 235, horLineClassName);
        let line11 = lineCreate(215, 235, 37.5, 37.5, horLineClassName);
        let line12 = lineCreate(215, 235, 75, 75, horLineClassName);
        let line13 = lineCreate(215, 235, 112.5, 112.5, horLineClassName);
        let line14 = lineCreate(215, 235, 150, 150, horLineClassName);
        let line15 = lineCreate(215, 235, 187.5, 187.5, horLineClassName);
        let line16 = lineCreate(215, 235, 262.5, 262.5, horLineClassName);
        let line17 = lineCreate(215, 235, 300, 300, horLineClassName);
        let line18 = lineCreate(215, 235, 337.5, 337.5, horLineClassName);
        let line19 = lineCreate(215, 235, 375, 375, horLineClassName);
        let line20 = lineCreate(215, 235, 412.5, 412.5, horLineClassName);

        svg.appendChild(text1);
        svg.appendChild(text2);
        svg.appendChild(text3);
        svg.appendChild(text4);
        svg.appendChild(text5);
        svg.appendChild(text6);
        svg.appendChild(text7);
        svg.appendChild(text8);
        svg.appendChild(text9);
        svg.appendChild(text10);
        svg.appendChild(text11);
        svg.appendChild(text12);
        svg.appendChild(text13);
        svg.appendChild(text14);
        svg.appendChild(text15);
        svg.appendChild(text16);
        svg.appendChild(text17);
        svg.appendChild(text18);
        svg.appendChild(text19);
        svg.appendChild(text20);

        svg.appendChild(line1);
        svg.appendChild(line2);
        svg.appendChild(line3);
        svg.appendChild(line4);
        svg.appendChild(line5);
        svg.appendChild(line6);
        svg.appendChild(line7);
        svg.appendChild(line8);
        svg.appendChild(line9);
        svg.appendChild(line10);
        svg.appendChild(line11);
        svg.appendChild(line12);
        svg.appendChild(line13);
        svg.appendChild(line14);
        svg.appendChild(line15);
        svg.appendChild(line16);
        svg.appendChild(line17);
        svg.appendChild(line18);
        svg.appendChild(line19);
        svg.appendChild(line20);
    }
    else {
        let text1 = textCreate(35, 250, horLineClassName, "-R");
        let text2 = textCreate(129, 250, horLineClassName, "-R/2");
        let text3 = textCreate(316.5, 250, horLineClassName, "R/2");
        let text4 = textCreate(410, 250, horLineClassName, "R");
        let text5 = textCreate(240, 415, verLineClassName, "-R");
        let text6 = textCreate(240, 321.5, verLineClassName, "-R/2");
        let text7 = textCreate(240, 135.5, verLineClassName, "R/2");
        let text8 = textCreate(240, 41, verLineClassName, "R");

        let line1 = lineCreate(215, 235, 414, 414, verLineClassName);
        let line2 = lineCreate(215, 235, 330, 330, verLineClassName);
        let line3 = lineCreate(215, 235, 135.5, 135.5, verLineClassName);
        let line4 = lineCreate(215, 235, 38, 38, verLineClassName);

        let line5 = lineCreate(37, 37, 215, 235, horLineClassName);
        let line6 = lineCreate(131, 131, 215, 235, horLineClassName);
        let line7 = lineCreate(330, 330, 215, 235, horLineClassName);
        let line8 = lineCreate(412, 412, 215, 235, horLineClassName);

        svg.appendChild(text1);
        svg.appendChild(text2);
        svg.appendChild(text3);
        svg.appendChild(text4);
        svg.appendChild(text5);
        svg.appendChild(text6);
        svg.appendChild(text7);
        svg.appendChild(text8);
        svg.appendChild(line1);
        svg.appendChild(line2);
        svg.appendChild(line3);
        svg.appendChild(line4);
        svg.appendChild(line5);
        svg.appendChild(line6);
        svg.appendChild(line7);
        svg.appendChild(line8);
    }

    document.getElementById("info").appendChild(svg);
}

svg_init("init");


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