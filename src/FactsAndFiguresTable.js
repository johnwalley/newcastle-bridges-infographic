import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { useTable, useSortBy } from "react-table";
import { setState } from "expect/build/jestMatchersObject";

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
  const [width, setWidth] = React.useState(0);
  const classes = useStyles();

  React.useEffect(() => {
    function handleResize() {
      setWidth(document.documentElement.clientWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return _ => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
        show: width > 680,
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
        show: width > 680,
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
        Header: "Cost - inflation adjusted (£)",
        accessor: "cost",
        Cell: ({ cell: { value } }) => {
          const proportion = (100 * value) / 74053333;

          return (
            <div style={{ display: "flex", flexDirection: "horizontal" }}>
              <div style={{ flex: "0 0 auto", paddingRight: "6px" }}>
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
      }
    ],
    [document.documentElement.clientWidth]
  );

  function createData(name, opened, length, span, cost) {
    return { name, opened, length, span, cost };
  }

  const rows = [
    createData("Gateshead Millenium Bridge", 2001, 126, 105, 35743162), // 22 000 000
    createData("Tyne Bridge", 1928, 389, 161, 74053333), // 12 000 000
    createData("Swing Bridge", 1876, 171, 85, 27203265), // 240 000
    createData("High Level Bridge", 1849, 407, 38, 30328584), // 243000
    createData("Queen Elizabeth II Metro Bridge", 1981, 352, 164, 22592542), // 6 000 000
    createData("King Edward VII Bridge", 1906, 350, 91, 59720430), // 500 000
    createData("Redheugh Bridge", 1983, 897, 160, 50882661) // 15 350 000
  ];

  const data = React.useMemo(() => rows, []);

  return (
    <div>
      <CssBaseline />
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
