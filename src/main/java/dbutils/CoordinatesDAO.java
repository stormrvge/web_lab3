package dbutils;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.hibernate.resource.transaction.spi.TransactionStatus;

import javax.faces.context.FacesContext;
import javax.servlet.http.HttpSession;
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

    static public ArrayList<CoordinatesEntity> getSessionCoordinatesList() {
        FacesContext fCtx = FacesContext.getCurrentInstance();
        HttpSession httpSession = (HttpSession) fCtx.getExternalContext().getSession(false);
        String sessionId = httpSession.getId();
        Session session = NewHibernateUtil.getSession();

        Query q = session.createQuery("select u from CoordinatesEntity u where u.sessionId = :sessionId");
        q.setParameter("sessionId", sessionId);
        List<CoordinatesEntity> result = q.list();

        return new ArrayList<>(result);
    }


    static public LinkedList<CoordinatesEntity> getRecentSessionCoordinatesList() {
        FacesContext fCtx = FacesContext.getCurrentInstance();
        HttpSession httpSession = (HttpSession) fCtx.getExternalContext().getSession(false);
        String sessionId = httpSession.getId();
        Session session = NewHibernateUtil.getSession();

        Query q = session.createQuery("select u from CoordinatesEntity u where u.sessionId = :sessionId").setMaxResults(3);
        q.setParameter("sessionId", sessionId);
        List<CoordinatesEntity> result = q.list();
        return new LinkedList<>(result);
    }
}
