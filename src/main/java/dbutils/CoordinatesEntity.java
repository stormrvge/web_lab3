package dbutils;

import javax.inject.Named;
import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalTime;

@Named
@Entity
@Table(name = "coordinates", schema = "public", catalog = "web_lab3")
public class CoordinatesEntity implements Serializable {
    private double x;
    private double y;
    private double r;
    private boolean hit;
    private LocalTime date;
    private long exectime;
    private String sessionId;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cid", updatable = false, nullable = false)
    private Integer cid;

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }


    @Basic
    @Column(name = "x", nullable = false, precision = 0)
    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    @Basic
    @Column(name = "y", nullable = false, precision = 0)
    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    @Basic
    @Column(name = "r", nullable = false, precision = 0)
    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    @Basic
    @Column(name = "hit", nullable = false)
    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }

    @Basic
    @Column(name = "date", nullable = false)
    public LocalTime getDate() {
        return date;
    }

    public void setDate(LocalTime date) {
        this.date = date;
    }

    @Basic
    @Column(name = "exectime", nullable = false)
    public long getExectime() {
        return exectime;
    }

    public void setExectime(long exectime) {
        this.exectime = exectime;
    }

    @Basic
    @Column(name = "session_id", nullable = false, length = 64)
    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CoordinatesEntity that = (CoordinatesEntity) o;

        if (Double.compare(that.x, x) != 0) return false;
        if (Double.compare(that.y, y) != 0) return false;
        if (Double.compare(that.r, r) != 0) return false;
        if (hit != that.hit) return false;
        if (exectime != that.exectime) return false;
        if (cid != that.cid) return false;
        if (date != null ? !date.equals(that.date) : that.date != null) return false;
        if (sessionId != null ? !sessionId.equals(that.sessionId) : that.sessionId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        temp = Double.doubleToLongBits(x);
        result = (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(y);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(r);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (hit ? 1 : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (int) (exectime ^ (exectime >>> 32));
        result = 31 * result + (sessionId != null ? sessionId.hashCode() : 0);
        result = 31 * result + cid;
        return result;
    }

    public void save() {
        CoordinatesDAO coordDAO = new CoordinatesDAO();
        coordDAO.addCoordinates(this);
    }
}
