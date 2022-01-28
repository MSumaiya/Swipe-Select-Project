import { makeStyles } from "@material-ui/core/styles";

const SwipeComponentStyle = makeStyles(() => ({
  editBoxPrimaryStyle: {
    display: "flex",
    flexDirection: "column",
  },
  editBoxSecondaryStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
  },
  editBoxTirtiaryStyle: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  updateBoxPrimaryStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bolder",
    color: "#474747",
  },
  active:{
    color: "#005e51",
    fontSize: 40,
  }
}));
export default SwipeComponentStyle;
