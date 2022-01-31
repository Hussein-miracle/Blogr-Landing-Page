module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        def : ['1rem', { lineHeight: '1' }]
      },
      colors:{
        footerText: "hsl(240, 2%, 79%)",
        whiteText:"hsl(0, 0%, 100%)",
        footerBg: "hsl(240, 10%, 16%)" ,
        sectionBg1: "hsl(237, 17%, 21%)",
        sectionBg2: "hsl(237, 23%, 32%)",
        ctaText:"hsl(356, 100%, 66%)",
        ctaHoverBg:"hsl(355, 100%, 74%)",
        headings: "hsl(208, 49%, 24%)"
      }
    },
  },
  plugins: [],
}
