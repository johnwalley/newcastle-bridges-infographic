import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: "white"
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

const tileData = [
  {
    img: require("./assets/historical/swing_bridge_01.jpg"),
    title: "Swing Bridge",
    author: "author",
    cols: 2
  },
  {
    img: require("./assets/historical/swing_bridge_02.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/tyne_bridge_01.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/tyne_bridge_02.jpg"),
    title: "Image",
    author: "author",
    cols: 2
  },
  {
    img: require("./assets/historical/tyne_bridge_03.jpg"),
    title: "Image",
    author: "author",
    cols: 2
  },
  {
    img: require("./assets/historical/redheugh_bridge_01.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/queen_elizabeth_ii_metro_bridge_01.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/high_level_bridge_01.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/high_level_bridge_02.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/high_level_bridge_03.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/tyne_bridge_04.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/old_tyne_bridge_01.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/high_level_bridge_04.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/old_tyne_bridge_02.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/old_tyne_bridge_03.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/high_level_bridge_05.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/high_level_bridge_06.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/old_redheugh_bridge_01.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/tyne_bridge_05.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: require("./assets/historical/king_edward_vii_01.jpg"),
    title: "Image",
    author: "author",
    cols: 1
  }
];

export default function ImageGridList() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMedium = useMediaQuery(theme.breakpoints.up("md"));
  const [lightboxIsOpen, setLightboxIsOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const toggleLightbox = React.useCallback(
    index => {
      setLightboxIsOpen(!lightboxIsOpen);
      setSelectedIndex(index);
    },
    [lightboxIsOpen]
  );

  return (
    <div className={classes.root}>
      <GridList
        cols={matchesSmall ? (matchesMedium ? 5 : 4) : 2}
        spacing={0}
        cellHeight={matchesSmall ? (matchesMedium ? 240 : 180) : 120}
      >
        {tileData.map((tile, i) => (
          <GridListTile key={tile.img} cols={1}>
            <img
              src={tile.img}
              alt={tile.title}
              style={{ cursor: "pointer" }}
              onClick={() => toggleLightbox(i)}
            />
          </GridListTile>
        ))}
      </GridList>

      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal
            styles={{
              blanket: (base, state) => ({ ...base, zIndex: 1100 }),
              positioner: (base, state) => ({ ...base, zIndex: 1110 }),
              dialog: (base, state) => ({ ...base, zIndex: 1120 })
            }}
            onClose={() => {
              setLightboxIsOpen(false);
            }}
          >
            <Carousel
              style={{ zIndex: 1000 }}
              //components={{ FooterCaption }}
              currentIndex={selectedIndex}
              frameProps={{ autoSize: "height" }}
              views={tileData.map(d => ({ source: d.img }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
