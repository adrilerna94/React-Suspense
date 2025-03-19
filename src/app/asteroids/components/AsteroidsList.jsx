'use client';

import { Card, CardBody, Typography, Button } from "@/components/ui";

import Link from "next/link";

export default function AsteroidsList({ resource }) {
    const asteroids = resource.read();

    return (
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {asteroids.map((a) => (
            <Card key={a.id} className="relative bg-white/25 backdrop-blur-xl border border-white/20 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105">
  
              {/* Contenido */}
              <CardBody className="text-center p-6">
                <Typography
                  variant="h5"
                  className="font-bold text-white text-2xl sm:text-3xl"
                >
                  {a.name}
                </Typography>
                <Typography
                  variant="h5"
                  className="font-bold text-white text-2xl sm:text-3xl"
                >
                  {a.absolute_magnitude_h}
                </Typography>
                <Link href={a.nasa_jpl_url} target="_blank" rel="noopener noreferrer">
                    <Button color="blue" className="w-full text-lg font-semibold py-3">
                        {a.name} Details
                    </Button>
                </Link>
              </CardBody>
            </Card>
        ))}
      </div>
    );
}