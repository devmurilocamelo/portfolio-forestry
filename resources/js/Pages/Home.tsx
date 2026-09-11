import { Head } from '@inertiajs/react';
import Hero from '@/Components/Hero';

export default function Home() {
    return (
        <>
            <Head title="Início" />
            <main className="min-h-screen bg-ink">
                <Hero />
            </main>
        </>
    );
}