/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/views/**/*.blade.php',
        './resources/js/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                ink: '#14201C',
                surface: '#1C2C24',
                line: '#33463C',
                moss: '#6B9C5B',
                lantern: '#E3A542',
                signal: '#4FB6A6',
                parchment: '#EDE6D6',
                bark: '#9CA893',
            },
            fontFamily: {
                sans: ['"IBM Plex Sans"', 'sans-serif'],
                serif: ['"Fraunces"', 'serif'],
                mono: ['"IBM Plex Mono"', 'monospace'],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};