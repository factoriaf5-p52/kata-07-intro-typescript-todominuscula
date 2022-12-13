export function bmiCalculator(height: number, weight: number) {
    // let bmi = weight / ((height / 100) ** 2);
    let bmi = weight / ((height * height) / 10000);
    if (bmi < 18.6) {
      return "Underweight";
    } else if (bmi >= 18.6 && bmi < 24.9) {
      return "Normal (healthy weight)";
    } else {
      return "Overweight";
    }
  }
  console.log(bmiCalculator(180, 74));