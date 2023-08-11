import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import axios from 'axios';

const TreeDiagram = ({ treeData }) => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/printtree");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  const rootNodeValue = data && data.name;

  const removeNullChildren = (node) => {
    if (node === null) {
      return null;
    }
    const newNode = { ...node };
    if (newNode.children) {
      newNode.children = newNode.children.filter(child => child !== null);
      newNode.children = newNode.children.map(removeNullChildren);
    }
    return newNode;
  };

  const cleanedData = removeNullChildren(data);

  return (
    <div style={{ width: '100%', height: '100vh',maxWidth: '100%', }}>
      {rootNodeValue && (
        <Tree data={cleanedData} orientation="vertical" />
      )}
    </div>
  );
};

export default TreeDiagram;
