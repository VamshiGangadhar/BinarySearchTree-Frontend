import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import "./Popup.css"; // Keep your custom CSS

const Popup = ({ searchResult, onClose }) => {
  const isNodeFound = searchResult.value !== null;

  return (
    <div className="popup">
      <Paper elevation={3} className="popup-content">
        <Typography variant="h6">Node Information</Typography>
        {isNodeFound ? (
          <>
            <Typography>Value: {searchResult.value}</Typography>
            <Typography>Level: {searchResult.level}</Typography>
            <Typography>
              Parent Nodes: {searchResult.parents.join(", ") || "None"}
            </Typography>
            <Typography>
              Child Nodes: {searchResult.children.join(", ") || "None"}
            </Typography>
          </>
        ) : (
          <Typography>Node not found</Typography>
        )}
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </Paper>
    </div>
  );
};

export default Popup;
