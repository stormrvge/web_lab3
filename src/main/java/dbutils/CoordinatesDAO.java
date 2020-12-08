package dbutils;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.resource.transaction.spi.TransactionStatus;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class CoordinatesDAO {

    public boolean addCoordinates(CoordinatesEntity coordinates) {
        Transaction transaction = null;
        Session session = NewHibernateUtil.getSession().getSessionFactory().openSession();
        try {
            transaction = session.beginTransaction();
            session.save(coordinates);
            transaction.commit();

            if (session.getTransaction().getStatus() == TransactionStatus.COMMITTED) {
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }

    public void deleteSessionCoordinates(String session_id) {
        Transaction transaction = null;
        Session session = NewHibernateUtil.getSession().getSessionFactory().openSession();
        try {
            transaction = session.beginTransaction();
            session.createSQLQuery("DELETE FROM CoordinatesEntity WHERE sessionId =" + session_id);
            transaction.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static public ArrayList<CoordinatesEntity> getCoordinatesList() {
        Session session = NewHibernateUtil.getSession();
        List<CoordinatesEntity> result = (List<CoordinatesEntity>) session.createQuery("FROM CoordinatesEntity ").list();

        return new ArrayList<>(result);
    }

    // If user opens table before first request he sees all sql table. (fix)
    static public ArrayList<CoordinatesEntity> getSessionCoordinatesList() {
        Session session = NewHibernateUtil.getSession();
        List<CoordinatesEntity> result = (List<CoordinatesEntity>) session
                .createQuery("from CoordinatesEntity WHERE sessionId = sessionId").list();

        return new ArrayList<>(result);
    }

    // If user opens table before first request he sees all sql table. (fix)
    static public LinkedList<CoordinatesEntity> getRecentSessionCoordinatesList() {
        Session session = NewHibernateUtil.getSession();
        List<CoordinatesEntity> result = (List<CoordinatesEntity>) session
                .createQuery("from CoordinatesEntity WHERE sessionId = sessionId").setMaxResults(3).list();

        return new LinkedList<>(result);
    }
}
