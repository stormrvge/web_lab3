package validator;

import dbutils.CoordinatesEntity;

public class Validator {

    public static boolean validate(CoordinatesEntity coordinates) {
        float x = (float) coordinates.getX();
        float y = (float) coordinates.getY();
        int r = (int) coordinates.getR();

        if (x < 0 && x >= -r && y > 0 && y <= r) {
            return true;
        }
        else if (x < 0 && y < 0 && x >= (-(y + r) / 2.0) && y >= (-2 * x - r)) {
            return true;
        }
        else if (x > 0 && y < 0 && (x * x + y * y) <= (r * r)) {
            return true;
        }
        else
            return false;
    }
}
