import {
  CircleMarker,
  LayerGroup,
  Map,
  Marker,
  Polyline,
  TileLayer,
  Tooltip,
} from "react-leaflet";

import L from "leaflet";
import React from "react";
import styled from "styled-components";

const MARKER_RADIUS = 48;

const LeafIcon = L.Icon.extend({
  options: {
    iconAnchor: [MARKER_RADIUS, MARKER_RADIUS],
    popupAnchor: [10, -44],
    iconSize: [MARKER_RADIUS * 2, MARKER_RADIUS * 2],
  },
});

const StyledMap = styled(Map)`
  width: 100vw;
  height: 76vmin;

  .leaflet-tooltip {
    font-size: 18px;
    font-weight: bold;
  }

  .leaflet-marker-icon {
    border-radius: 50%;
    border: 2px solid black;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 680px) {
    .leaflet-tooltip {
      display: none;
    }

    .leaflet-marker-icon {
      margin-left: -${MARKER_RADIUS / 2}px !important;
      margin-top: -${MARKER_RADIUS / 2}px !important;
      width: ${MARKER_RADIUS}px !important;
      height: ${MARKER_RADIUS}px !important;
    }
  }
`;

const access_token =
  "pk.eyJ1Ijoiam9obndhbGxleSIsImEiOiJjajhvZ2x0aGcwM2g5Mnhxazd0d3dzN2VkIn0.75gW-934leS0dstEuhzwsg";
const username = "mapbox";
const style_id = "light-v10";
const tilesize = "512";

const mbAttr =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

const mbUrl = `https://api.mapbox.com/styles/v1/${username}/${style_id}/tiles/${tilesize}/{z}/{x}/{y}@2x?access_token=${access_token}`;

const state = {
  lat: 54.9675,
  lng: -1.6078,
  zoom: 12,
};

const SimpleExample = ({ onClick }) => {
  const bridges = [
    {
      name: "Gateshead Millennium Bridge",
      position: [54.969964, -1.599182],
      icon: new LeafIcon({
        iconUrl: require("./assets/gateshead_millennium_bridge_128x128.jpg"),
        iconRetinaUrl: require("./assets/gateshead_millennium_bridge_256x256.jpg"),
      }),
      content: (
        <p>
          The <strong>Gateshead Millennium Bridge</strong> is a pedestrian and
          cyclist tilt bridge spanning the River Tyne in North East England
          between Gateshead's Quays arts quarter on the south bank, and the
          Quayside of Newcastle upon Tyne on the north bank. Opened for public
          use in 2001, the award-winning structure was conceived and designed by
          architect WilkinsonEyre and structural engineer Gifford.[1] The bridge
          is sometimes referred to as the 'Blinking Eye Bridge'[2] or the
          'Winking Eye Bridge'[3] due to its shape and its tilting method. In
          terms of height, the Gateshead Millennium Bridge is slightly shorter
          than the neighbouring Tyne Bridge, and stands as the sixteenth tallest
          structure in the city.
        </p>
      ),
      direction: "bottom",
      offset: [0, MARKER_RADIUS],
      positionOffset: [0.008, 0.01],
    },
    {
      name: "Tyne Bridge",
      position: [54.968104, -1.606167],
      icon: new LeafIcon({
        iconUrl: require("./assets/tyne_bridge_128x128.jpg"),
        iconRetinaUrl: require("./assets/tyne_bridge_256x256.jpg"),
      }),
      content: (
        <p>
          The <strong>Tyne Bridge</strong> is a through arch bridge over the
          River Tyne in North East England, linking Newcastle upon Tyne and
          Gateshead. The bridge was designed by the engineering firm Mott, Hay
          and Anderson,[2] who later designed the Forth Road Bridge, and was
          built by Dorman Long and Co. of Middlesbrough.[3] The bridge was
          officially opened on 10 October 1928 by King George V and has since
          become a defining symbol of Tyneside. It is ranked as the tenth
          tallest structure in the city.
        </p>
      ),
      direction: "top",
      offset: [0, -MARKER_RADIUS],
      positionOffset: [0.008, 0.0],
    },
    {
      name: "Swing Bridge",
      position: [54.967575, -1.607586],
      icon: new LeafIcon({
        iconUrl: require("./assets/swing_bridge_128x128.jpg"),
        iconRetinaUrl: require("./assets/swing_bridge_256x256.jpg"),
      }),
      content: (
        <p>
          A <strong>swing</strong> bridge is a movable bridge that has as its
          primary structural support a vertical locating pin and support ring,
          usually at or near to its center of gravity, about which the turning
          span can then pivot horizontally as shown in the animated illustration
          to the right. Small swing bridges as found over canals may be pivoted
          only at one end, opening as would a gate, but require substantial
          underground structure to support the pivot. In its closed position, a
          swing bridge carrying a road or railway over a river or canal, for
          example, allows traffic to cross. When a water vessel needs to pass
          the bridge, road traffic is stopped (usually by traffic signals and
          barriers), and then motors rotate the bridge horizontally about its
          pivot point. The typical swing bridge will rotate approximately 90
          degrees, or one-quarter turn; however, a bridge which intersects the
          navigation channel at an oblique angle may be built to rotate only 45
          degrees, or one-eighth turn, in order to clear the channel.
        </p>
      ),
      direction: "right",
      offset: [MARKER_RADIUS, 0],
      positionOffset: [-0.005, 0.015],
    },
    {
      name: "High Level Bridge",
      position: [54.967008, -1.608637],
      icon: new LeafIcon({
        iconUrl: require("./assets/high_level_bridge_128x128.jpg"),
        iconRetinaUrl: require("./assets/high_level_bridge_256x256.jpg"),
      }),
      content: (
        <p>
          The <strong>Gateshead Millennium Bridge</strong> is a pedestrian and
          cyclist tilt bridge spanning the River Tyne in North East England
          between Gateshead's Quays arts quarter on the south bank, and the
          Quayside of Newcastle upon Tyne on the north bank. Opened for public
          use in 2001, the award-winning structure was conceived and designed by
          architect WilkinsonEyre and structural engineer Gifford.[1] The bridge
          is sometimes referred to as the 'Blinking Eye Bridge'[2] or the
          'Winking Eye Bridge'[3] due to its shape and its tilting method. In
          terms of height, the Gateshead Millennium Bridge is slightly shorter
          than the neighbouring Tyne Bridge, and stands as the sixteenth tallest
          structure in the city.
        </p>
      ),
      direction: "left",
      offset: [-MARKER_RADIUS, 0],
      positionOffset: [0.008, -0.01],
    },
    {
      name: "Queen Elizabeth II Metro Bridge",
      label: (
        <>
          Queen Elizabeth II
          <br />
          Metro Bridge
        </>
      ),
      position: [54.964493, -1.613873],
      icon: new LeafIcon({
        iconUrl: require("./assets/queen_elizabeth_ii_metro_bridge_128x128.jpg"),
        iconRetinaUrl: require("./assets/queen_elizabeth_ii_metro_bridge_256x256.jpg"),
      }),
      content: (
        <p>
          The <strong>Queen Elizabeth II Bridge</strong> carries the Tyne and
          Wear Metro between Newcastle upon Tyne and Gateshead over the River
          Tyne in North East England. The line is in tunnels on either side of
          the river and only emerges into open air to cross the bridge.
        </p>
      ),
      direction: "right",
      offset: [MARKER_RADIUS, 0],
      positionOffset: [-0.008, 0.01],
    },
    {
      name: "King Edward VII Bridge",
      position: [54.963213, -1.616214],
      icon: new LeafIcon({
        iconUrl: require("./assets/king_edward_vii_bridge_128x128.jpg"),
        iconRetinaUrl: require("./assets/king_edward_vii_bridge_256x256.jpg"),
      }),
      content: (
        <p>
          The <strong>King Edward VII Bridge</strong> spans the River Tyne
          between Newcastle upon Tyne and Gateshead, in North East England. The
          railway bridge is a Grade II listed structure.[1] It has been
          described as "Britain’s last great railway bridge".[2] The bridge was
          designed and engineered by Charles A. Harrison, the Chief Civil
          Engineer of the North Eastern Railway, and built by the Cleveland
          Bridge & Engineering Company. The bridge has four lattice steel spans
          resting on concrete piers. Its length is 1,150 ft (350 m) and it is
          112 ft (34 m) above high water mark. It cost more than £500,000.[3]
          The bridge was opened by King Edward VII and Queen Alexandra on 10
          July 1906, despite being unfinished. General traffic began using it on
          1 October 1906.[4] Before it was completed, trains used the older High
          Level Bridge to reach Newcastle railway station and had to reverse out
          of the station. The bridge added four railway tracks and a direct line
          through the station easing congestion.
        </p>
      ),
      direction: "bottom",
      offset: [0, MARKER_RADIUS],
      positionOffset: [0.005, -0.014],
    },
    {
      name: "Redheugh Bridge",
      position: [54.962073, -1.618839],
      icon: new LeafIcon({
        iconUrl: require("./assets/redheugh_bridge_128x128.jpg"),
        iconRetinaUrl: require("./assets/redheugh_bridge_256x256.jpg"),
      }),
      direction: "top",
      offset: [0, -MARKER_RADIUS],
      positionOffset: [-0.006, -0.003],
    },
  ];

  return (
    <StyledMap
      bounds={[
        [state.lat - 0.0144, state.lng - 0.014],
        [state.lat + 0.0136, state.lng + 0.014],
      ]}
      zoomControl={false}
      attributionControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      touchZoom={false}
      dragging={true}
      keyboard={false}
    >
      <TileLayer attribution={mbAttr} url={mbUrl} />
      <LayerGroup>
        {bridges.map((d) => (
          <React.Fragment key={d.name}>
            <Marker
              position={[
                d.position[0] + (d.positionOffset ? d.positionOffset[0] : 0.0),
                d.position[1] + (d.positionOffset ? d.positionOffset[1] : 0.0),
              ]}
              icon={d.icon}
              onClick={() => onClick(d.name)}
            >
              <Tooltip
                direction={d.direction || "left"}
                offset={d.offset || [24, 0]}
                opacity={1}
                permanent
                onClick={(e) => console.log(e)}
              >
                {d.label || d.name}
              </Tooltip>
            </Marker>
            <CircleMarker
              center={d.position}
              radius={4}
              stroke={false}
              color="red"
              fillOpacity={1}
            ></CircleMarker>
            <Polyline
              positions={[
                d.position,
                [
                  d.position[0] + (d.positionOffset ? d.positionOffset[0] : 0),
                  d.position[1] + (d.positionOffset ? d.positionOffset[1] : 0),
                ],
              ]}
              color="red"
              weight={1}
            />
          </React.Fragment>
        ))}
      </LayerGroup>
    </StyledMap>
  );
};

export default SimpleExample;
