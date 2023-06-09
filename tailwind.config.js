// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                veryDark: "#080808",
                background: "#111111",
                primary: "#F0495D",
                slate: colors.slate,
                gray: colors.gray,
                neutral: {
                    ...colors.neutral,
                    800: "#282828",
                    900: "#1d1d1d"
                },
                stone: colors.stone,
                red: {
                    ...colors.red,
                    400: "#FF6073",
                    500: "#F0495D",
                    600: "#e43d51",
                    700: "#d22b3f"
                },
                orange: colors.orange,
                yellow: {
                    ...colors.yellow,
                    400: "#F1D302"
                },
                green: {
                    ...colors.green,
                    500: "#7EF049",
                    600: "#65c53a",
                    700: "#469123",
                    800: "#397a1b",
                    900: "#255908"
                },
                cyan: colors.cyan,
                sky: colors.sky,
                blue: colors.blue
            },
            animation: {
                "spin-slow": "spin 1.5s linear infinite",
            }
        },
    },
    plugins: [],
};
