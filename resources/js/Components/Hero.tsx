const trail = [
    { label: 'Início', href: '/', active: true },
    { label: 'Skills', href: '#skills', active: false },
    { label: 'Projetos', href: '#projetos', active: false },
    { label: 'Jardim', href: '/jardim', active: false },
];

export default function Hero() {
    return (
        <section className="bg-ink px-6 py-16 sm:px-10 sm:py-20">
            <div className="mx-auto max-w-3xl">
                <nav className="mb-10 flex items-center gap-1.5">
                    {trail.map((step, i) => (
                        <div key={step.label} className="flex flex-1 items-center gap-1.5">
                            <a
                                href={step.href}
                                className={
                                    'rounded-full border px-3 py-1 font-mono text-xs ' +
                                    (step.active
                                        ? 'border-lantern text-lantern'
                                        : 'border-line text-bark')
                                }
                            >
                                {step.label}
                            </a>
                            {i < trail.length - 1 && (
                                <span className="h-px flex-1 bg-line" />
                            )}
                        </div>
                    ))}
                </nav>

                <p className="mb-3 font-mono text-sm tracking-wide text-signal">
                    $ whoami
                </p>

                <h1 className="mb-4 max-w-lg font-serif text-3xl font-semibold leading-tight text-parchment sm:text-4xl">
                    Murilo — cultivando segurança e código
                </h1>

                <p className="mb-7 max-w-md text-[15px] leading-relaxed text-bark">
                    Apprentice em Desenvolvimento de Sistemas na Scania, construindo
                    uma trilha rumo a Blue Team e SOC — com um jardim digital de
                    notas crescendo junto.
                </p>

                <div className="flex gap-2.5">
                    <a
                        href="#projetos"
                        className="rounded-md bg-moss px-4 py-2 font-mono text-sm text-ink"
                    >
                        Ver projetos
                    </a>
                    <a
                        href="/jardim"
                        className="rounded-md border border-line px-4 py-2 font-mono text-sm text-parchment"
                    >
                        Entrar no jardim
                    </a>
                </div>
            </div>
        </section>
    );
}