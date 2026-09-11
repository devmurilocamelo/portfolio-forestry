/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/views/**/*.blade.php',
        './resources/js/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Ponto de partida inspirado nas referências (paleta de floresta/vila pixel art).
                // Ajustar quando entrarmos na fase de direção visual de verdade.
                moss: {
                    50: '#f2f7ee',
                    100: '#dfebd3',
                    300: '#a9c98a',
                    500: '#5f8f4e',
                    700: '#3a5e34',
                    900: '#213821',
                },
                bark: {
                    100: '#e8d9bd',
                    300: '#c9a876',
                    500: '#8a5a34',
                    700: '#5c3a22',
                    900: '#33200f',
                },
                roof: {
                    500: '#b5432f',
                    700: '#7c2c1f',
                },
            },
            fontFamily: {
                sans: ['"IBM Plex Sans"', 'sans-serif'],
                pixel: ['"Press Start 2P"', 'monospace'],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
