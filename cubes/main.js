const converted = {
    "@use postcss-nested": true,
    "@use postcss-simple-vars": true,
    body: { margin: "0", padding: "0" },
    ".wrapper": {
      display: "flex",
      width: "100vw",
      height: "100vh",
      margin: "0",
      padding: "0",
      alignItems: "center",
      justifyContent: "center",
      background: "#000000",
      "&__content": { height: "450px", width: "280px", position: "relative" }
    },
    "@keyframes rotation": {
      "0%": { transform: "rotateZ(0deg) rotateX(-15deg) rotateY(0deg)" },
      "100%": { transform: "rotateZ(0deg) rotateX(-15deg) rotateY(-360deg)" }
    },
    "@keyframes color-front": {
      "0%, 100%": { opacity: 1 },
      "25%, 75%": { opacity: 0 }
    },
    "@keyframes color-back": {
      "0%, 100%, 25%, 75%": { opacity: 0 },
      "50%": { opacity: 1 }
    },
    "@keyframes color-right": {
      "0%, 50%": { opacity: 0.25 },
      "50%": { opacity: 0 },
      "25%": { opacity: 1 }
    },
    "@keyframes color-left": {
      "0%, 50%, 100%": { opacity: 0 },
      "75%": { opacity: 1 }
    },
    ".cube": {
      "--z-angle": "100px",
      "--color": "#06FFFF",
      "--time": "5s",
      width: "203px",
      height: "203px",
      position: "relative",
      transformStyle: "preserve-3d",
      transformOrigin: "center center",
      transform: "rotateZ(0deg) rotateX(0deg) rotateY(0deg)",
      animation: "rotation var(--time) infinite linear",
      "&__side": {
        position: "absolute",
        width: "203px",
        height: "203px",
        opacity: 0,
        "&:after": {
          content: "''",
          left: "0",
          top: "0",
          width: "3px",
          height: "3px",
          background: "var(--color)",
          position: "absolute",
          borderRadius: "100%",
          boxShadow:
            "0px 40px 0px 0px var(--color), \n                0px 80px 0px 0px var(--color), \n                0px 120px 0px 0px var(--color), \n                0px 160px 0px 0px var(--color),\n                0px 200px 0px 0px var(--color),\n\n                40px 0px 0px 0px var(--color), \n                80px 0px 0px 0px var(--color), \n                120px 0px 0px 0px var(--color), \n                160px 0px 0px 0px var(--color), \n                200px 0px 0px 0px var(--color),\n\n                40px 40px 0px 0px var(--color), \n                80px 40px 0px 0px var(--color), \n                120px 40px 0px 0px var(--color), \n                160px 40px 0px 0px var(--color), \n                200px 40px 0px 0px var(--color),\n\n                40px 80px 0px 0px var(--color), \n                80px 80px 0px 0px var(--color), \n                120px 80px 0px 0px var(--color), \n                160px 80px 0px 0px var(--color), \n                200px 80px 0px 0px var(--color),\n\n                40px 120px 0px 0px var(--color), \n                80px 120px 0px 0px var(--color), \n                120px 120px 0px 0px var(--color), \n                160px 120px 0px 0px var(--color), \n                200px 120px 0px 0px var(--color),\n\n                40px 160px 0px 0px var(--color), \n                80px 160px 0px 0px var(--color), \n                120px 160px 0px 0px var(--color), \n                160px 160px 0px 0px var(--color), \n                200px 160px 0px 0px var(--color),\n\n                40px 200px 0px 0px var(--color), \n                80px 200px 0px 0px var(--color), \n                120px 200px 0px 0px var(--color), \n                160px 200px 0px 0px var(--color), \n                200px 200px 0px 0px var(--color)"
        },
        "&--front": {
          animation: "color-front var(--time) infinite linear",
          transform: "rotateY(0deg) translateZ(var(--z-angle))"
        },
        "&--right": {
          transform: "rotateY(90deg) translateZ(var(--z-angle))",
          animation: "color-right var(--time) infinite linear"
        },
        "&--back": {
          transform: "rotateY(180deg)  translateZ(var(--z-angle))",
          animation: "color-back var(--time) infinite linear"
        },
        "&--left": {
          transform: "rotateY(-90deg)  translateZ(var(--z-angle))",
          animation: "color-left var(--time) infinite linear"
        },
        "&--top": {
          opacity: 1,
          transform: "rotateX(90deg) translateZ(var(--z-angle))"
        },
        "&--bottom": { opacity: 0 }
      }
    },
    ".shadow": {
      position: "absolute",
      top: "258px",
      filter: "blur(1px)",
      ".cube": {
        "&__side:not(.cube__side--top)": {
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) , rgba(0, 0, 0, 0) 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) , rgba(0, 0, 0, 0) 80%)"
        }
      }
    }
  }
  