import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { useTable, useSortBy } from "react-table";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const BAR_COLOR = "rgb(98,158,215)";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 650
  },
  cell: {
    width: "20%"
  }
}));

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function Table({ columns, data }) {
  const classes = useStyles();

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableHeaderProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  // Render the UI for your table
  return (
    <MaUTable size="small" {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render("Header")}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
}

function App() {
  const theme = useTheme();
  const matchesSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMedium = useMediaQuery(theme.breakpoints.up("md"));

  const columns = React.useMemo(
    () => [
      {
        Header: "Bridge",
        accessor: "name",
        width: 0
      },
      {
        Header: "Opened",
        accessor: "opened"
      },
      {
        Header: "Total length (m)",
        accessor: "length",
        show: matchesSmall,
        Cell: ({ cell: { value } }) => {
          const proportion = (100 * value) / 897;

          return (
            <div style={{ display: "flex", flexDirection: "horizontal" }}>
              <div style={{ flex: "0 0 30px", paddingRight: "6px" }}>
                {formatNumber(value)}
              </div>
              <div
                style={{
                  flex: "1 1 auto",
                  height: "16px",
                  backgroundColor: "#dadada",
                  borderRadius: "2px"
                }}
              >
                <div
                  style={{
                    width: `${proportion}%`,
                    height: "100%",
                    backgroundColor: BAR_COLOR,
                    borderRadius: "2px",
                    transition: "all .2s ease-out"
                  }}
                />
              </div>
            </div>
          );
        }
      },
      {
        Header: "Longest span (m)",
        accessor: "span",
        show: matchesMedium,
        Cell: ({ cell: { value } }) => {
          const proportion = (100 * value) / 161;

          return (
            <div style={{ display: "flex", flexDirection: "horizontal" }}>
              <div style={{ flex: "0 0 30px", paddingRight: "6px" }}>
                {formatNumber(value)}
              </div>
              <div
                style={{
                  flex: "1 1 auto",
                  height: "16px",
                  backgroundColor: "#dadada",
                  borderRadius: "2px"
                }}
              >
                <div
                  style={{
                    width: `${proportion}%`,
                    height: "100%",
                    backgroundColor: BAR_COLOR,
                    borderRadius: "2px",
                    transition: "all .2s ease-out"
                  }}
                />
              </div>
            </div>
          );
        }
      },
      {
        Header: "Cost (£)",
        accessor: "cost",
        Cell: ({ cell: { value } }) => {
          const proportion = (100 * value) / 74053000;

          return (
            <div style={{ display: "flex", flexDirection: "horizontal" }}>
              <div style={{ flex: "0 0 auto", paddingRight: "6px" }}>
                {formatNumber(value)}
              </div>
              {matchesSmall && (
                <div
                  style={{
                    flex: "1 1 auto",
                    height: "16px",
                    backgroundColor: "#dadada",
                    borderRadius: "2px"
                  }}
                >
                  <div
                    style={{
                      width: `${proportion}%`,
                      height: "100%",
                      backgroundColor: BAR_COLOR,
                      borderRadius: "2px",
                      transition: "all .2s ease-out"
                    }}
                  />
                </div>
              )}
            </div>
          );
        }
      }
    ],
    [matchesSmall, matchesMedium]
  );

  function createData(name, opened, length, span, cost) {
    return { name, opened, length, span, cost };
  }

  const rows = [
    createData(
      "Gateshead Millenium Bridge",
      2001,
      126,
      105,
      1000 * Math.floor(35743162 / 1000)
    ), // 22 000 000
    createData(
      "Tyne Bridge",
      1928,
      389,
      161,
      1000 * Math.floor(74053333 / 1000)
    ), // 12 000 000
    createData(
      "Swing Bridge",
      1876,
      171,
      85,
      1000 * Math.floor(27203265 / 1000)
    ), // 240 000
    createData(
      "High Level Bridge",
      1849,
      407,
      38,
      1000 * Math.floor(30328584 / 1000)
    ), // 243000
    createData(
      "Queen Elizabeth II Metro Bridge",
      1981,
      352,
      164,
      1000 * Math.floor(22592542 / 1000)
    ), // 6 000 000
    createData(
      "King Edward VII Bridge",
      1906,
      350,
      91,
      1000 * Math.floor(59720430 / 1000)
    ), // 500 000
    createData(
      "Redheugh Bridge",
      1983,
      897,
      160,
      1000 * Math.floor(50882661 / 1000)
    ) // 15 350 000
  ];

  const data = React.useMemo(() => rows, [rows]);

  return (
    <div>
      <CssBaseline />
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
