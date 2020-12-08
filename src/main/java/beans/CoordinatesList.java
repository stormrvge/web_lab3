package beans;

import dbutils.CoordinatesDAO;
import dbutils.CoordinatesEntity;


import javax.annotation.PostConstruct;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.LinkedList;

public class CoordinatesList implements Serializable {
    private ArrayList<CoordinatesEntity> coordinateList = new ArrayList<>();
    private LinkedList<CoordinatesEntity> lastCoordinatesList = new LinkedList<>();
    //TO DO ARRAYLIST FOR LAST 3 COORDINATES


    @PostConstruct
    private void postConstruct() {
        coordinateList = CoordinatesDAO.getSessionCoordinatesList();
        lastCoordinatesList = CoordinatesDAO.getRecentSessionCoordinatesList();
    }


    public void addToList(CoordinatesEntity coordinatesEntity) {
        coordinateList.add(coordinatesEntity);
        lastCoordinatesList.removeFirst();
        lastCoordinatesList.addLast(coordinatesEntity);
    }

    public ArrayList<CoordinatesEntity> getCoordinateList() {
        return coordinateList;
    }

    public LinkedList<CoordinatesEntity> getLastCoordinatesList() {
        return lastCoordinatesList;
    }
}
