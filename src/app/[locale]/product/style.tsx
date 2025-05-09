import styled from "@emotion/styled";
import facepaint from "facepaint";

const breakpoints = [767.98, 1199.98];

const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));

export const BoxSlider = styled.div(
  mq({
    ".slick-slider": {
      overflow: "hidden !important",
    },
    ".slick-prev, .slick-next": {
      width: "auto",
      height: "auto",
      zIndex: 1,
      opacity: 0.3,
      transition: "opacity 500ms ease-in-out",
      svg: {
        width: [70, 40],
      },

      "&:before": {
        display: "none",
      },
      "&:hover": {
        opacity: 1,
      },
    },
    ".slick-prev": {
      left: [25, 0],
    },
    ".slick-next": {
      right: [25, 0],
    },
    ".slick-dots": {
      bottom: [32, 16],

      li: {
        width: [12, 8],
        height: [12, 8],
        margin: "0 3px",

        button: {
          width: [12, 8],
          height: [12, 8],
          "&:before": {
            width: [12, 8],
            height: [12, 8],
            backgroundColor: "#00eec6",
            borderRadius: "100px",
            color: "transparent",
            opacity: 0.3,
            transition: "opacity 500ms ease-in-out",
          },
          "&:hover": {
            "&:before": {
              opacity: 1,
            },
          },
        },
        "&.slick-active": {
          width: [80, 60],
          transition: "width 500ms ease-in-out",
          button: {
            "&:before": {
              width: [80, 60],
              transition: "width 500ms ease-in-out, opacity 500ms ease-in-out",
              backgroundColor: "white",
              opacity: 0.8,
            },
            "&:hover": {
              "&:before": {
                opacity: 1,
              },
            },
          },
        },
      },
    },
  })
);

export const UnderlineAnimation = styled.div({
  a: {
    position: "relative",

    "&:after": {
      background: "none repeat scroll 0 0 transparent",
      bottom: -4,
      content: "''",
      display: "block",
      height: "2px",
      left: "50%",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      position: "absolute",
      transition: "width 0.3s ease 0s, left 0.3s ease 0s",
      width: 0,
    },

    "&:hover": {
      "&:after": {
        width: "100%",
        left: 0,
      },
    },
  },
});

export const WrapperExperience = styled.div({
  "&::-webkit-scrollbar": {
    height: 0,
    width: 0,
  },
});

export const BgPurpleGradient = styled.div({
  background: "linear-gradient(105.21deg, #8667A4 0%, #34184F 92.26%)",
});
