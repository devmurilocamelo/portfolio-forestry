import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Início" />
            <main className="flex min-h-screen items-center justify-center bg-moss-50 text-bark-900">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold">Portfólio — esqueleto pronto</h1>
                    <p className="mt-2 text-bark-700">
                        Laravel + Inertia + React + TypeScript + Tailwind, rodando.
                    </p>
                </div>
            </main>
        </>
    );
}
