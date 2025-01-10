import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        public: ["Public Sans", "sans-serif"],
      },

      boxShadow: {
        custom: "10px 10px 25px -10px rgba(54, 83, 107, 0.25)"
      }
    },
  },
  plugins: [],
});
