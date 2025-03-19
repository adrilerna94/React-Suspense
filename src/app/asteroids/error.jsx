'use client'

import { Typography, Card, CardBody, Button } from '@/components/ui';

export default function Error({error, reset}) {
    return (
        <div className="flex flex-col gap-4 mt-4 justify-center items-center">
            <Card>
                <CardBody className="flex flex-col gap-4 justify-center items-center">
                <Typography variant="h1"> Oops, something went wrong!</Typography> 
                <Typography variant="p"> {error.message}</Typography> 
                    <Button onClick={reset}> Try fetch Asteroids Again</Button>
                    </CardBody>
            </Card>
        </div>
    )
}