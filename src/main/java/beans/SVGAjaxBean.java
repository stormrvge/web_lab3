package beans;

import dbutils.CoordinatesDAO;
import dbutils.CoordinatesEntity;
import validator.Validator;

import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class SVGAjaxBean {
    private float x;
    private float y;
    private int r;

    private boolean hit;

    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public int getR() {
        return r;
    }

    public void setR(int r) {
        this.r = r;
    }

    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }


    public boolean clicked() {
        long exec_start = System.nanoTime();

        HttpServletRequest request = (HttpServletRequest)FacesContext.getCurrentInstance().getExternalContext().getRequest();

        if (request.getSession().getAttribute("coordinatesList") == null)
            request.getSession().setAttribute("coordinatesList", new TableData());

        x = Float.parseFloat(request.getParameter("hiddenForm:ajax_x"));
        y = Float.parseFloat(request.getParameter("hiddenForm:ajax_y"));
        r = Integer.parseInt(request.getParameter("hiddenForm:ajax_r"));

        CoordinatesEntity coordinates = new CoordinatesEntity();
        coordinates.setX(x);
        coordinates.setY(y);
        coordinates.setR(r);

        hit = Validator.validate(coordinates);

        FacesContext fCtx = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) fCtx.getExternalContext().getSession(false);
        String sessionId = session.getId();
        coordinates.setSessionId(sessionId);

        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        coordinates.setDate(LocalTime.parse(LocalTime.now().format(timeFormatter)));
        coordinates.setHit(hit);
        coordinates.setExectime((System.nanoTime() - exec_start) / 1000);

        CoordinatesDAO coordinatesDAO = new CoordinatesDAO();
        boolean status = coordinatesDAO.addCoordinates(coordinates);

        if (status) {
            TableData coordinatesList = (TableData) request.getSession().getAttribute("coordinatesList");
            coordinatesList.addToList(coordinates);
            return true;
        }  else return false;
    }
}
