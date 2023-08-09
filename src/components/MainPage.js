import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainPage.css";
import Popup from "./Popup";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
const MainPage = () => {
  // assigning constants
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const handleAddOpen = () => setAddOpen(true);
  const handleAddClose = () => setAddOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [treeData, setTreeData] = useState([]);
  const [adddata, setAddData] = useState("");
  const [deletedata, setDeletedata] = useState("");
  const [selectedNode, setSelectedNode] = useState(null);

  // fetching the tree data
  const fetchTreeData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/printtree");
      setTreeData(response.data);
    } catch (error) {
      console.error("Error fetching tree data:", error);
    }
  };
  useEffect(() => {
    fetchTreeData();
  }, []);

  //add node

  const [canAddNode, setCanAddNode] = useState(false);
  const handleNodeClick = (nodeValue) => {
    setSelectedNode(nodeValue);
  };

  useEffect(() => {
    setCanAddNode(selectedNode !== null);
  }, [selectedNode]);

  const handleAddNode = async () => {
    try {
      const response = await axios.post("http://localhost:3001/add", {
        value: parseInt(adddata),
      });
      setAddData("");
    } catch (error) {
      console.error("Error adding node:", error);
    }

    fetchTreeData();
  };

  // deleting the node
  const deleteNode = async () => {
    try {
      const response = await axios.delete("http://localhost:3001/delete", {
        data: {
          value: parseInt(deletedata),
        },
      });
      fetchTreeData();
      setDeletedata("");
    } catch (error) {
      console.error("Error deleting node:", error);
    }
  };

  const clearAll = async () => {
    try {
      const response = await axios.delete("http://localhost:3001/clear");
      console.log(response);
      fetchTreeData();
      window.location.reload();
    } catch (error) {
      console.error("Error clearing all:", error);
    }
  };

  // selecting the way of traversal
  const [selectedTraversal, setSelectedTraversal] = useState("inorder");
  const [selectedData, setSelectedData] = useState([]);
  const fetchSelectedData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/${selectedTraversal}`
      );
      setSelectedData(response.data);
    } catch (error) {
      console.error("Error fetching selected data:", error);
    }
  };

  const handleTraversalChange = (event) => {
    setSelectedTraversal(event.target.value);
  };

  useEffect(() => {
    fetchSelectedData();
  }, [selectedTraversal]);

  // searching a node

  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const searchNode = async () => {
    try {
      const response = await axios.get("http://localhost:3001/find", {
        params: {
          value: parseInt(searchValue),
        },
      });
      setSearchResult(response.data);
    } catch (error) {
      console.error("Error searching node:", error);
    }
  };

  const clearSearch = () => {
    setSearchValue("");
    setSearchResult(null);
  };
  //styling
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };
  return (
    <Box>
      <Typography
        sx={{ textAlign: "center", margin: "30px" }}
        variant="h4"
        gutterBottom
      >
        Binary Search Tree React App
      </Typography>
      <Box className="top-box">
        <Button variant="contained" onClick={handleAddOpen}>
          Add Node
        </Button>
        <Modal
          open={addOpen}
          onClose={handleAddClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Node
            </Typography>
            <TextField
              sx={{ width: "150px" }}
              value={adddata}
              onChange={(e) => setAddData(e.target.value)}
              type="text"
            />
            <Button
              sx={{
                paddingLeft: "10px",
              }}
              variant="contained"
              onClick={handleAddNode}
              disabled={!canAddNode}
            >
              Add
            </Button>
          </Box>
        </Modal>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography>Delete Node</Typography>
            <TextField
              sx={{ width: "150px" }}
              value={deletedata}
              onChange={(e) => setDeletedata(e.target.value)}
              type="text"
            />
            <Button
              sx={{
                ":hover": { backgroundColor: "red" },
              }}
              variant="contained"
              onClick={deleteNode}
            >
              Delete
            </Button>
          </Box>
        </Modal>
        <Button
          sx={{ ":hover": { backgroundColor: "red" } }}
          variant="contained"
          onClick={handleOpen}
        >
          Delete Node
        </Button>
        <Select value={selectedTraversal} onChange={handleTraversalChange}>
          <MenuItem value="inorder">In-Order Traversal</MenuItem>
          <MenuItem value="preorder">Pre-Order Traversal</MenuItem>
          <MenuItem value="postorder">Post-Order Traversal</MenuItem>
        </Select>

        <Button
          variant="contained"
          sx={{
            ":hover": { backgroundColor: "red" },
          }}
          onClick={clearAll}
        >
          ClearAll
        </Button>
      </Box>
      <Box className="mid-box">
        <Paper
          sx={{
            padding: "10px",
            width: "auto",
            height: "auto",
            minWidth: "200px",
            minHeight: "200px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{ textAlign: "center", margin: "10px", color: "green" }}
          >
            Elements in Tree
          </Typography>
          {treeData.map((nodeValue) => (
            <Box
              key={nodeValue}
              className={`node ${
                selectedNode === nodeValue ? "selected" : ""
              } ${searchResult?.value === nodeValue ? "searched" : ""}`}
              onClick={() => handleNodeClick(nodeValue)}
              style={{
                textAlign: "center",
                display: "inline-block",
                alignItems: "center",
                height: 30,
                width: 30,
                borderRadius: "5px",
                // backgroundColor: "grey",
                border: "1px solid grey",
                margin: 5,
              }}
            >
              {nodeValue}
            </Box>
          ))}
        </Paper>

        <Paper
          sx={{
            padding: "10px",
            width: "auto",
            height: "auto",
            minWidth: "200px",
            minHeight: "200px",
            maxWidth: "400px",
            alignItems: "center",
            textAlign: "center",
          }}
          className="traversal"
        >
          <Typography
            sx={{ textAlign: "center", margin: "10px", color: "green" }}
          >
            Selected Traversal Data
          </Typography>
          {selectedData.map((value, index) => (
            <span key={index}>{value},</span>
          ))}
        </Paper>
      </Box>

      <Box className="bottom-box">
        <TextField
          placeholder="Search Node"
          sx={{ width: "150px" }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
        />
        <Button
          variant="contained"
          sx={{ color: "white" }}
          onClick={searchNode}
        >
          Search
        </Button>
        <Button variant="contained" onClick={clearSearch}>
          Clear
        </Button>
      </Box>
      {searchResult && (
        <Popup searchResult={searchResult} onClose={clearSearch} />
      )}
    </Box>
  );
};

export default MainPage;
