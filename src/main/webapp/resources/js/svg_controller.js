let xmlns_svg = "http://www.w3.org/2000/svg";
const svg = document.createElementNS(xmlns_svg, "svg");
//let svg = document.getElementsByTagName('svg'); //[0]

function svg_init() {
    svg.setAttribute("width", "450");
    svg.setAttribute("height", "450");

    let rect = document.createElementNS(xmlns_svg, "rect");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");
    rect.setAttribute("fill", "white");

    let x_line = document.createElementNS(xmlns_svg, "line");
    x_line.setAttribute("x1", "225");
    x_line.setAttribute("x2", "225");
    x_line.setAttribute("y1", "0");
    x_line.setAttribute("y2", "450");
    x_line.setAttribute("stroke", "black")
    x_line.setAttribute("stroke-width", "1");

    let y_line = document.createElementNS(xmlns_svg, "line");
    y_line.setAttribute("x1", "0");
    y_line.setAttribute("x2", "450");
    y_line.setAttribute("y1", "225");
    y_line.setAttribute("y2", "225");
    y_line.setAttribute("stroke", "black")
    y_line.setAttribute("stroke-width", "1");

    let arrow1 = document.createElementNS(xmlns_svg, "line");
    arrow1.setAttribute("x1", "0");
    arrow1.setAttribute("x2", "15");
    arrow1.setAttribute("y1", "225");
    arrow1.setAttribute("y2", "235");
    arrow1.setAttribute("stroke", "black")
    arrow1.setAttribute("stroke-width", "1");

    let arrow2 = document.createElementNS(xmlns_svg, "line");
    arrow2.setAttribute("x1", "0");
    arrow2.setAttribute("x2", "15");
    arrow2.setAttribute("y1", "225");
    arrow2.setAttribute("y2", "215");
    arrow2.setAttribute("stroke", "black")
    arrow2.setAttribute("stroke-width", "1");

    let arrow3 = document.createElementNS(xmlns_svg, "line");
    arrow3.setAttribute("x1", "450");
    arrow3.setAttribute("x2", "435");
    arrow3.setAttribute("y1", "225");
    arrow3.setAttribute("y2", "235");
    arrow3.setAttribute("stroke", "black")
    arrow3.setAttribute("stroke-width", "1");

    let arrow4 = document.createElementNS(xmlns_svg, "line");
    arrow4.setAttribute("x1", "450");
    arrow4.setAttribute("x2", "435");
    arrow4.setAttribute("y1", "225");
    arrow4.setAttribute("y2", "215");
    arrow4.setAttribute("stroke", "black")
    arrow4.setAttribute("stroke-width", "1");

    let arrow5 = document.createElementNS(xmlns_svg, "line");
    arrow5.setAttribute("x1", "225");
    arrow5.setAttribute("x2", "235");
    arrow5.setAttribute("y1", "0");
    arrow5.setAttribute("y2", "15");
    arrow5.setAttribute("stroke", "black")
    arrow5.setAttribute("stroke-width", "1");

    let arrow6 = document.createElementNS(xmlns_svg, "line");
    arrow6.setAttribute("x1", "225");
    arrow6.setAttribute("x2", "215");
    arrow6.setAttribute("y1", "0");
    arrow6.setAttribute("y2", "15");
    arrow6.setAttribute("stroke", "black")
    arrow6.setAttribute("stroke-width", "1");

    let arrow7 = document.createElementNS(xmlns_svg, "line");
    arrow7.setAttribute("x1", "225");
    arrow7.setAttribute("x2", "215");
    arrow7.setAttribute("y1", "450");
    arrow7.setAttribute("y2", "435");
    arrow7.setAttribute("stroke", "black")
    arrow7.setAttribute("stroke-width", "1");

    let arrow8 = document.createElementNS(xmlns_svg, "line");
    arrow8.setAttribute("x1", "225");
    arrow8.setAttribute("x2", "235");
    arrow8.setAttribute("y1", "450");
    arrow8.setAttribute("y2", "435");
    arrow8.setAttribute("stroke", "black")
    arrow8.setAttribute("stroke-width", "1");

    svg.append(rect);
    svg.appendChild(x_line);
    svg.appendChild(y_line);
    svg.appendChild(arrow1);
    svg.appendChild(arrow2);
    svg.appendChild(arrow3);
    svg.appendChild(arrow4);
    svg.appendChild(arrow5);
    svg.appendChild(arrow6);
    svg.appendChild(arrow7);
    svg.appendChild(arrow8);
    document.getElementById("info").appendChild(svg);
}

svg_init();

/*
function svg_draw() {
    let svg = document.getElementById("svg_id");
    //let radio = document.getElementById("formId:r_radio")[0].checked;
    //let radio_value = radio.defaultValue;

    if (true) {         //if 1
        let mark_hor1 = document.createElementNS(xmlns_svg, "line");
        mark_hor1.setAttributeNS(null, "x1", "37.5");
        mark_hor1.setAttributeNS(null, "x2", "37.5");
        mark_hor1.setAttributeNS(null, "y1", "215");
        mark_hor1.setAttributeNS(null, "y2", "235");
        mark_hor1.setAttributeNS(null, "stroke", "black");
        mark_hor1.setAttributeNS(null, "class", "svg_horizontal_marks");

        let mark_hor2 = document.createElementNS(xmlns_svg, "line");
        mark_hor2.setAttributeNS(null, "x1", "412.5");
        mark_hor2.setAttributeNS(null, "x2", "412.5");
        mark_hor2.setAttributeNS(null, "y1", "215");
        mark_hor2.setAttributeNS(null, "y2", "235");
        mark_hor2.setAttributeNS(null, "stroke", "black");
        mark_hor2.setAttributeNS(null, "class", "svg_horizontal_marks");

        let mark_ver1 = document.createElementNS(xmlns_svg, "line");
        mark_ver1.setAttributeNS(null, "x1", "215");
        mark_ver1.setAttributeNS(null, "x2", "235");
        mark_ver1.setAttributeNS(null, "y1", "37.5");
        mark_ver1.setAttributeNS(null, "y2", "37.5");
        mark_ver1.setAttributeNS(null, "stroke", "black");
        mark_ver1.setAttributeNS(null, "class", "svg_vertical_marks");

        let mark_ver2 = document.createElementNS(xmlns_svg, "line");
        mark_ver2.setAttributeNS(null, "x1", "215");
        mark_ver2.setAttributeNS(null, "x2", "235");
        mark_ver2.setAttributeNS(null, "y1", "412.5");
        mark_ver2.setAttributeNS(null, "y2", "412.5");
        mark_ver2.setAttributeNS(null, "stroke", "black");
        mark_ver2.setAttributeNS(null, "class", "svg_vertical_marks");

        let text1 = document.createElementNS(xmlns_svg, "text");
        text1.setAttributeNS(null, "x", "35");
        text1.setAttributeNS(null, "y", "250");
        text1.setAttributeNS(null, "class", "svg_numbers");

        let test_text = document.createElementNS(xmlns_svg, "text");
        test_text.setAttributeNS(null, "x", "10");
        test_text.setAttributeNS(null, "y", "10");
        svg.appendChild(test_text);

        svg.appendChild(mark_hor1);
        svg.appendChild(mark_hor2);
        svg.appendChild(mark_ver1);
        svg.appendChild(mark_ver2);
        svg.appendChild(text1);
    }

    console.log("svg script, selected: " + radio_value);
} */

