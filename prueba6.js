function solution(car) {
    if (car.licensePlate === null || car.licensePlate === undefined) {
      car.drivingLicense = false;
    }
    else {
      car.drivingLicense = true;
    }
    return car;
  }
  
  solution({
    color: 'red',
    brand: 'Kia',
  });
  
  // Prueba 2
  solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  });
  
  // Prueba 3
  solution({ licensePlate: 'RGB255' });