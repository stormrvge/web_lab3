package beans;

import javax.annotation.PostConstruct;

public class XCommandButton {
    private float x;

    @PostConstruct
    public void init() {
        x = 0.0F;
    }

    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }
}
