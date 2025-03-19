import { NextResponse } from "next/server";
import { planets } from "../../planetsData";


export async function GET(req, { params }) {
    const { name } = await params;

    // Normalizamos input
    const normalizedInput = name.toLowerCase().replaceAll(" ", "");
    // buscamos planet por nombre normalizando los datos
    const planet = planets.find(p => p.name.toLowerCase().replaceAll(" ", "") === normalizedInput);
    if (!planet) {
        return NextResponse.json(
            { message: `Planet ${name} Not Found`},
            { status: 404},
        );
    }
    return NextResponse.json(
        { planet },
        { status: 200},
    );
}