// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// const TreeNode = ({ node }) => {
//   if (!node) {
//     return <div className="empty-node">null</div>;
//   }

//   return (
//     <div className="tree-node">
//       <div className="node-value">{node.node}</div>
//       <div className="child-nodes">
//         <TreeNode node={node["left-node"]} />
//         <TreeNode node={node["right-node"]} />
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [treeData, setTreeData] = useState({});

//   const fetchTreeData = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/printtree");
//       setTreeData(response.data);
//       console.log(treeData);
//     } catch (error) {
//       console.error("Error fetching tree data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTreeData();
//   }, []);

//   const renderTree = (node, level = 0) => {
//     if (!node) {
//       return null;
//     }

//     return (
//       <div className="tree-level">
//         <div className="tree-row" style={{ paddingLeft: level * 40 }}>
//           <TreeNode node={node} />
//         </div>
//         <div className="tree-row">
//           {renderTree(node["left-node"], level + 1)}
//         </div>
//         <div className="tree-row">
//           {renderTree(node["right-node"], level + 1)}
//         </div>
//       </div>
//     );
//   };

//   if (!treeData || Object.keys(treeData).length === 0) {
//     return <div>Loading tree data...</div>;
//   }

//   return <div className="App">{renderTree(treeData[0][0])}</div>;
// };

// export default App;
import React from "react";
// import Flow from "./components/Flow";
// import TreeComponent from "./components/TreeComponent";
// import TreeDiagram from "./components/TreeDiagram";
import MainPage from "./components/MainPage";

const App = () => {
  return (
    <div>
      {/* <TreeComponent /> */}\
      {/* <TreeDiagram /> */}
      <MainPage />
    </div>
  );
};

export default App;
