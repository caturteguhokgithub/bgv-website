import styled from "@emotion/styled";

export const BoxSlider = styled.div({
  ".slick-prev, .slick-next": {
    width: "auto",
    height: "auto",
    zIndex: 1,
    opacity: 0.3,
    transition: "opacity 500ms ease-in-out",

    "&:before": {
      display: "none",
    },
    "&:hover": {
      opacity: 1,
    },
  },
  ".slick-prev": {
    left: 25,
  },
  ".slick-next": {
    right: 25,
  },
  ".slick-dots": {
    bottom: 32,

    li: {
      width: 16,
      height: 16,
      margin: "0 3px",

      button: {
        width: 16,
        height: 16,
        "&:before": {
          width: 16,
          height: 16,
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
        width: 100,
        transition: "width 500ms ease-in-out",
        button: {
          "&:before": {
            width: 100,
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
});

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
