package beans;

import dbutils.CoordinatesDAO;
import dbutils.CoordinatesEntity;

import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;


public class CommandButtons {

    public boolean submit() {
        long exec_start = System.nanoTime();

        HttpServletRequest request = (HttpServletRequest)FacesContext.getCurrentInstance().getExternalContext().getRequest();

        if (request.getSession().getAttribute("coordinatesList") == null)
            request.getSession().setAttribute("coordinatesList", new CoordinatesList());

/*
        if (request.getSession().getAttribute("xCommandButton") == null)
            request.getSession().setAttribute("xCommandButton", new XCommandButton());

*/


        XCommandButton xCommandButton = (XCommandButton) request.getSession().getAttribute("xCommandButton");
        YInputText yInputText = (YInputText) request.getSession().getAttribute("yInputText");
        RRadioButton rRadioButton = (RRadioButton) request.getSession().getAttribute("rRadioButton");


        CoordinatesEntity coordinates = new CoordinatesEntity();
        coordinates.setX(xCommandButton.getX());
        coordinates.setY(yInputText.getValue());
        coordinates.setR(rRadioButton.getSelectedRadio());

        FacesContext fCtx = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) fCtx.getExternalContext().getSession(false);
        String sessionId = session.getId();
        coordinates.setSessionId(sessionId);

        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        coordinates.setDate(LocalTime.parse(LocalTime.now().format(timeFormatter)));
        coordinates.setHit(false);                                                   // to do hit validator
        coordinates.setExectime((System.nanoTime() - exec_start) / 1000);            // time in microseconds

        CoordinatesDAO coordinatesDAO = new CoordinatesDAO();
        boolean status = coordinatesDAO.addCoordinates(coordinates);

        if (status) {
            CoordinatesList coordinatesList = (CoordinatesList) request.getSession().getAttribute("coordinatesList");
            coordinatesList.addToList(coordinates);
            return true;
        }  else return false;
    }
}
