function solution(arraySecreto) {
    if (typeof (arraySecreto.shift()) === "string") {
      return true
    } else{
      return false
    }
  }

console.log(solution(["Huevo", "Gallina", "Vaca"]));
console.log(solution([1, "Gallina", "Vaca"]));