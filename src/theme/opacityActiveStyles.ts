import { SxProps, Theme } from "@mui/material";

const opacityActiveStyles: SxProps<Theme> = {
    opacity: 0.8,
    position: "relative",
    "& *": {
        opacity: 1,
        position: "relative",
    },
};

export default opacityActiveStyles;