import { NextResponse } from "next/server";
import { planets } from "../planetsData";

export async function GET() {
    // datos de planetas del Sistema Solar
    try {
      /*
       ⚡!planets.length ➡️ significa que la longitud NO es mayor o igual a 1,
       🟰 planets.length === 0.

       Ejemplos
        const planets1 = []; // Array vacío
        const planets2 = ["Earth", "Mars"]; // Array con elementos

        console.log(!planets1.length); // true, porque 0 → false → !false = true
        console.log(!planets2.length); // false, porque 2 → true → !true = false
        0 ➡️ falsy !false 🟰 true
        1 ➡️ truthy !true 🟰 false


      */
      if(!planets.length){
        return NextResponse.json(
          { message: "No planets found"},
          { status: 404},
        );
      }
      return NextResponse.json(
        { planets },
        { status: 200},
      );

    } catch (error) {

      return NextResponse.json(
        {message: "Internal Server Error"},
        {status: 500},
      );
    }
}