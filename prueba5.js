export function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) {
      estudiantes.pop();
      deathCount--;
    }
  
    estudiantes.push(nuevo);
    return estudiantes;
  }
  
  solution(["Nico", "Zule"], 0, "Santi")
  solution(["Juan", "Juanita", "Daniela"], 1, "Julian")
  solution(["Nath", "Luisa", "Noru"], 2, "Cami")