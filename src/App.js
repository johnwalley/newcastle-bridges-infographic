import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import SimpleTable from "./SimpleTable";
import FactsAndFiguresTable from "./FactsAndFiguresTable";
import SimpleMap from "./SimpleMap";
import "./App.css";

const bridges = [
  {
    id: "gateshead_millennium_bridge",
    name: "Gateshead Millennium Bridge",
    position: [54.969964, -1.599182],
    content: (
      <>
        The <strong>Gateshead Millennium Bridge</strong> is a pedestrian and
        cyclist tilt bridge spanning the River Tyne in North East England
        between Gateshead's Quays arts quarter on the south bank, and the
        Quayside of Newcastle upon Tyne on the north bank. Opened for public use
        in 2001, the award-winning structure was conceived and designed by
        architect WilkinsonEyre and structural engineer Gifford.[1] The bridge
        is sometimes referred to as the 'Blinking Eye Bridge'[2] or the 'Winking
        Eye Bridge'[3] due to its shape and its tilting method. In terms of
        height, the Gateshead Millennium Bridge is slightly shorter than the
        neighbouring Tyne Bridge, and stands as the sixteenth tallest structure
        in the city.
      </>
    ),
    direction: "right",
    offset: [24, 0]
  },
  {
    id: "tyne_bridge",
    name: "Tyne Bridge",
    position: [54.968104, -1.606167],
    content: (
      <>
        The <strong>Tyne Bridge</strong> is a through arch bridge over the River
        Tyne in North East England, linking Newcastle upon Tyne and Gateshead.
        The bridge was designed by the engineering firm Mott, Hay and
        Anderson,[2] who later designed the Forth Road Bridge, and was built by
        Dorman Long and Co. of Middlesbrough.[3] The bridge was officially
        opened on 10 October 1928 by King George V and has since become a
        defining symbol of Tyneside. It is ranked as the tenth tallest structure
        in the city.
      </>
    ),
    direction: "top",
    offset: [0, -24]
  },
  {
    id: "swing_bridge",
    name: "Swing Bridge",
    position: [54.967575, -1.607586],
    content: (
      <>
        The <strong>Swing Bridge</strong> is a swing bridge over the River Tyne,
        England, connecting Newcastle upon Tyne and Gateshead, and lying between
        the Tyne Bridge and the High Level Bridge. It is a Grade II* listed
        structure.[1] The Swing Bridge stands on the site of the Old Tyne
        Bridges of 1270 and 1781, and probably of the Roman Pons Aelius.[2] The
        previous bridge on the site was demolished in 1868 to enable larger
        ships to move upstream to William Armstrong's works.[3] The hydraulic
        Swing Bridge was designed and paid for by Armstrong, with work beginning
        in 1873. It was first used for road traffic on 15 June 1876 and opened
        for river traffic on 17 July 1876.[4] At the time of construction it was
        the largest swing bridge ever built. The construction cost was
        £240,000.[5] The hydraulic power still used to move the bridge is today
        derived from electrically driven pumps. These feed a hydraulic
        accumulator sunk into a 60 ft (18 m) shaft below the bridge; the water
        is then released under pressure which runs the machinery to turn the
        bridge. The mechanism used for this is still the same machinery
        originally installed by Armstrong.[4] It has an 281 ft (85.6 m)
        cantilevered span with a central axis of rotation able to move through
        360° to allow vessels to pass on either side of it.[6] The busiest year
        of operation was 1924 when the bridge was rotated 6,000 times unlike
        current use where it is only required to turn occasionally to allow
        yachts and pleasure craft to pass by and on the first Wednesday of each
        month as a maintenance exercise.[7] The Bridge featured in the final
        episode and climax of the educational series Geordie Racer from Look and
        Read when the villains became stranded on the bridge after a robbery.[8]
        The bridge was renovated in 2018 at a cost of £200,000. The restoration
        involved 25,000 hours of work and 10,000 screws were used in repairs.[7]
      </>
    ),
    direction: "right",
    offset: [24, 0]
  },
  {
    id: "high_level_bridge",
    name: "High Level Bridge",
    position: [54.967008, -1.608637],
    content: (
      <>
        The <strong>Gateshead Millennium Bridge</strong> is a pedestrian and
        cyclist tilt bridge spanning the River Tyne in North East England
        between Gateshead's Quays arts quarter on the south bank, and the
        Quayside of Newcastle upon Tyne on the north bank. Opened for public use
        in 2001, the award-winning structure was conceived and designed by
        architect WilkinsonEyre and structural engineer Gifford.[1] The bridge
        is sometimes referred to as the 'Blinking Eye Bridge'[2] or the 'Winking
        Eye Bridge'[3] due to its shape and its tilting method. In terms of
        height, the Gateshead Millennium Bridge is slightly shorter than the
        neighbouring Tyne Bridge, and stands as the sixteenth tallest structure
        in the city.
      </>
    ),
    direction: "left",
    offset: [-24, 0]
  },
  {
    id: "queen_elizabeth_ii_metro_bridge",
    name: "Queen Elizabeth II Metro Bridge",
    position: [54.964493, -1.613873],
    content: (
      <>
        The <strong>Gateshead Millennium Bridge</strong> is a pedestrian and
        cyclist tilt bridge spanning the River Tyne in North East England
        between Gateshead's Quays arts quarter on the south bank, and the
        Quayside of Newcastle upon Tyne on the north bank. Opened for public use
        in 2001, the award-winning structure was conceived and designed by
        architect WilkinsonEyre and structural engineer Gifford.[1] The bridge
        is sometimes referred to as the 'Blinking Eye Bridge'[2] or the 'Winking
        Eye Bridge'[3] due to its shape and its tilting method. In terms of
        height, the Gateshead Millennium Bridge is slightly shorter than the
        neighbouring Tyne Bridge, and stands as the sixteenth tallest structure
        in the city.
      </>
    ),
    direction: "right",
    offset: [24, 0]
  },
  {
    id: "king_edward_vii_bridge",
    name: "King Edward VII Bridge",
    position: [54.963213, -1.616214],
    content: (
      <>
        The <strong>King Edward VII Bridge</strong> spans the River Tyne between
        Newcastle upon Tyne and Gateshead, in North East England. The railway
        bridge is a Grade II listed structure.[1] It has been described as
        "Britain’s last great railway bridge".[2] The bridge was designed and
        engineered by Charles A. Harrison, the Chief Civil Engineer of the North
        Eastern Railway, and built by the Cleveland Bridge & Engineering
        Company. The bridge has four lattice steel spans resting on concrete
        piers. Its length is 1,150 ft (350 m) and it is 112 ft (34 m) above high
        water mark. It cost more than £500,000.[3] The bridge was opened by King
        Edward VII and Queen Alexandra on 10 July 1906, despite being
        unfinished. General traffic began using it on 1 October 1906.[4] Before
        it was completed, trains used the older High Level Bridge to reach
        Newcastle railway station and had to reverse out of the station. The
        bridge added four railway tracks and a direct line through the station
        easing congestion.
      </>
    ),
    direction: "left",
    offset: [-24, 0]
  },
  {
    id: "redheugh_bridge",
    name: "Redheugh Bridge",
    position: [54.962073, -1.618839],
    content: (
      <>
        The <strong>Redheugh Bridge</strong> is a road bridge spanning the River
        Tyne west of Newcastle upon Tyne city centre on the north bank and
        Gateshead town centre on the south bank, in North East England. It
        currently carries the A189 road.
      </>
    ),
    direction: "right",
    offset: [24, 0]
  }
];

function App() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("Tyne Bridge");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = name => {
    setOpen(true);
    setName(name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const bridge = bridges.find(d => d.name === name);

  const styles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

  const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  return (
    <div className="App">
      <SimpleMap onClick={name => handleClickOpen(name)} />
      <header className="App-header">
        <Typography variant="h6">Facts and Figures</Typography>
      </header>
      <FactsAndFiguresTable />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {name}
        </DialogTitle>
        <DialogContent>
          <img
            src={require(`./assets/${
              bridge.id ? bridge.id + ".jpeg" : "tyne_bridge.jpeg"
            }`)}
            style={{ width: "100%" }}
          />
          <DialogContentText>{bridge.content}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
