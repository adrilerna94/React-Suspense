'use client';

import { useState, Suspense } from "react";
import { Button } from "@/components/ui";
import Loading from './loading';
import AsteroidsList from './components/AsteroidsList';
import createResource from './createResource';

export default function AsteroidsPage() {
    // const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const [resource, setResource] = useState(null);
    const start_date = "2015-09-07";
    const end_date = "2015-09-08";
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=vTobgSJvWSmIHziifqKgqSG0aYxg7RoscZEDDY20`;

    async function fetchAsteroids() {
        const newResource = createResource(async () => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch asteroids');
            }
            const data = (await response.json()).near_earth_objects[end_date]; // accedemos a la propiedad end_date
            await new Promise((resolve) => setTimeout(resolve, 3000));
            return data;
        });
        setResource(newResource);
    }
    return (
        <div>
            <Button onClick={fetchAsteroids} color="amber"> fetchAsteroids</Button>
        {resource && (
            <Suspense fallback={<Loading />}>
                <AsteroidsList resource= {resource} />
            </Suspense>
        )}
        </div>
    )
}