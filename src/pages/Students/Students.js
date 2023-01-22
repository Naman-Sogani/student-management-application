import React, { useState } from "react";
import StudentForm from "./StudentForm";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { Paper, makeStyles, Toolbar, Button } from "@material-ui/core";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useStateValue } from "../../StateProvider";
import Controls from "../../controls/Controls";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../../components/Popup";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { red } from "@material-ui/core/colors";
import { addUser, deleteUser } from "../../features/Users";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  newButton: {
    position: "absolute",
    right: "0px"
  }
}));

export default function Students() {
  const userList = useSelector(state => state.users.value);
  const dispatch = useDispatch();
  const classes = useStyles();
  // const [{ registerBasket }, dispatch] = useStateValue();
  const [openPopup, setOpenPopup] = useState(false);

  const actionHandler = params => {
    console.log(params.data.id);
    dispatch(
      deleteUser({
        id: params.data.id
      })
    );
  };

  const columns = [
    {
      headerName: "Name",
      field: "fullName",
      sortable: true,
      checkboxSelection: true,
      filter: true,
      floatingFilter: true,
      flex: 0.5
    },
    {
      headerName: "Age",
      field: "age",
      sortable: true,
      filter: true,
      floatingFilter: true,
      flex: 0.5
    },
    {
      headerName: "Courses",
      field: "courseId",
      filter: true,
      floatingFilter: true,
      flex: 0.5
    },
    {
      headerName: "Batches",
      field: "batchId",
      filter: true,
      floatingFilter: true,
      flex: 0.5
    },
    {
      headerName: "Action",
      field: "id",
      cellRendererFramework: params => (
        <div>
          <Controls.Button
            variant="text"
            onClick={() => actionHandler(params)}
            text="Delete"
          />
        </div>
      )
    }
  ];

  return (
    <>
      <Paper
        className={classes.pageContent}
        style={{ height: "500px" }}
        elevation="8"
      >
        <div
          className="ag-theme-alpine"
          style={{ height: "400px", width: "100%" }}
        >
          <Toolbar>
            <Controls.Button
              text="Register New"
              variant="outlined"
              startIcon={<AddIcon />}
              className={classes.newButton}
              onClick={() => setOpenPopup(true)}
            />
          </Toolbar>
          <AgGridReact rowData={userList} columnDefs={columns} />

          {/* <AgGridReact rowData={registerBasket} columnDefs={columns} /> */}
        </div>
      </Paper>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Student Form"
      >
        <StudentForm />
      </Popup>
    </>
  );
}
