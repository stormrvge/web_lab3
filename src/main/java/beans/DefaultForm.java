package beans;


import javax.annotation.PostConstruct;

public class DefaultForm {
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

    private float x;
    private float y;
    private int r;

    @PostConstruct
    public void init() {
        x = 0.0F;
    }
}
