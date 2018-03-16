public class Vehicle {
  private double speed;
  private int wheels;
  private String name;
  private String model;
  private String color;

	public Vehicle() {
		super();
	}

	public Vehicle(double speed, int wheels, String name, String model, String color) {
		super();
		this.speed = speed;
		this.wheels = wheels;
		this.name = name;
		this.model = model;
		this.color = color;
	}
  public void getNumberOfWheels() {
    return 4;
  }
  public void accelerate() {
    return speed * 2;
  }

	public double getSpeed() {
		return speed;
	}

	public void setSpeed(double speed) {
		this.speed = speed;
	}

	public int getWheels() {
		return wheels;
	}

	public void setWheels(int wheels) {
		this.wheels = wheels;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}
}

public class Car extends Vehicle {

}

public class Bike extends Vehicle {
  @Override
  public void accelerate() {
    return speed * 1;
  }
  @Override
  public void getNumberOfWheels() {
    return 2;
  }

}

public static String whoHasMoreWheels(a, b) {
  if (a>b) {
    return a + 'Has more wheels';
  } else if (b>a) {
    return b + 'Has more wheels';
  } else {
    return 'They have the same amount of wheels';
  }
}

public static void main(String []args) {
  /* Object creation */
  Bike bike = new Bike("Bike");
  Car car = new Car("Car");

  System.out.println("Variable Value :" + whoHasMoreWheels(car, bike); );
  /* You can access instance variable as follows as well */
  System.out.println("Variable Value :" + bike.getSpeed(); );

}
