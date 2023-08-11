# Binary Search Tree
In this application, I have implemented the Binary Search Tree algorithm, a fundamental data structure that adheres to a specific ordering of elements. A Binary Search Tree maintains a distinct order, where the value of each left child node is smaller than its parent node, and the value of each right child node is greater. This hierarchical structure continues recursively throughout the left and right subtrees of the root node.

Within this application, users can perform essential operations on the Binary Search Tree, enhancing their control over the data. These operations include node addition and deletion and the ability to obtain and display the tree's elements using different traversal methods.

There are three primary types of traversal techniques available:

**In-order Traversal:** This approach explores the left subtree first, followed by the parent node, and finally, the right subtree.

**Pre-order Traversal:** Here, the parent node is visited first, followed by its left and then right subtrees.

**Post-order Traversal:** The left and right subtrees are explored before visiting the parent node.

Empowered by a collection of powerful technologies and tools, including React.js, Node.js, Material UI, CSS, and JavaScript, this application delivers an immersive and user-friendly experience. The utilization of these tools ensures a smooth and responsive interface for managing, visualizing, and interacting with Binary Search Tree data.

By providing this application, users can gain a deeper understanding of Binary Search Tree concepts and experience firsthand the practical aspects of working with this versatile data structure. 

**Prerequisites:**

•	Node.js

•	npm

**Initial installation:**

•	Install React.js (npx create-react-app BinarySearchTree-Frontend)

•	Server initialization Node (npm init -y)

Installation on the local machine:

[BinarySearchTree-Frontend](https://github.com/VamshiGangadhar/BinarySearchTree-Frontend.git)


[BinarySearchTree-Backend](https://github.com/VamshiGangadhar/BinarySearchTree-Server.git)

Initially create a folder and clone the repositories to the local machine

**Commands:**

•	git clone  [https://github.com/VamshiGangadhar/BinarySearchTree-Frontend.git](https://github.com/VamshiGangadhar/BinarySearchTree-Frontend.git)

•	git clone  [https://github.com/VamshiGangadhar/BinarySearchTree-Server.git](https://github.com/VamshiGangadhar/BinarySearchTree-Server.git)

After getting the folders into the local machine install the dependencies

**Commands:**

•	cd BinarySearchTree-Frontend

•	npm install

•	cd BinarySearchTree-Server

•	npm install

By this, we install all the dependencies required to run the project. The dependencies installed can be known through package.json file. Now we can run the application.

**Running the application:**

•	npm start (inside BinarySearchTree-Frontend)

•	npm start (inside BinarySearchTree-Server)

![image](https://github.com/VamshiGangadhar/BinarySearchTree-Frontend/assets/80575671/38fb769b-dc5c-4394-b115-1470a5afaaf1)

Figure 1 MainPage of the app

After creating the React app create a component folder in src folder.

Component created – MainPage.js, Popup.js

MainPage.js contains all the operational content and the content to be displayed on the webpage, then render this component on to the main page
State Variables

•	open and addOpen: Booleans that control the visibility of the delete node and add node modals.

•	treeData: An array storing the tree elements fetched from the server.

•	adddata: A string storing the value to be added as a new node.

•	deletedata: A string storing the value to be deleted.

•	selectedNode: Holds the value of the selected node in the tree.

•	canAddNode: Determines if a node can be added based on whether a node is selected.

•	selectedTraversal: Stores the selected traversal mode (inorder, preorder, postorder).

•	selectedData: Holds the data of nodes based on the selected traversal.

•	searchValue: A string storing the value to be searched in the tree.

•	searchResult: Contains the result of the search operation.

**useEffect and Functions**

•	useEffect with fetchTreeData: Fetches the tree data from the server on component mount.
•	useEffect with setCanAddNode: Checks if a node is selected to enable the "Add Node" button.
•	handleAddNode: Adds a node to the tree and refreshes the tree data.
•	deleteNode: Deletes a node from the tree and refreshes the tree data.
•	clearAll: Clears all nodes from the tree and reloads the page.
•	fetchSelectedData: Fetches data based on the selected traversal mode.
•	searchNode: Searches for a node in the tree and sets the search result.
•	clearSearch: Clears the search result and search input.

**Usage:**

**Adding the node:**

Click "ADD NODE": Start by clicking the "ADD NODE" button available on the main interface. Enter Node Value: A new window, known as a modal, will pop up. Here, you'll find a space to enter the value of the node you want to add. And then click on ADD.

![image](https://github.com/VamshiGangadhar/BinarySearchTree-Frontend/assets/80575671/55bed770-b097-410c-b05c-1e7096453f09)

Figure 2: add node

Deleting the node:

Click "DELETE NODE": Start by clicking the "DELETE NODE" button on the main screen.Enter Node Value: A box will pop up. Type in the value of the node you want to delete. And then click on delete.

![image](https://github.com/VamshiGangadhar/BinarySearchTree-Frontend/assets/80575671/5e656a91-8dd9-466c-a3c4-666f68511b48)

Figure 3: delete node

**Traversals:**

**In-order traversal:**

For printing in-order traversal, we have to select the drop-down menu and select the in-order option the we can find the traversal in the Selected Traversal Data box.

![image](https://github.com/VamshiGangadhar/BinarySearchTree-Frontend/assets/80575671/a0a884ea-d625-45a4-83ab-73a11b1865cf)

Figure 4: In-order traversal

**Pre-order traversal:**

For printing pre-order traversal, we have to select the drop-down menu and select the pre-order option the we can find the traversal in the Selected Traversal Data box.

![image](https://github.com/VamshiGangadhar/BinarySearchTree-Frontend/assets/80575671/5c9bde78-8bf8-4538-a84a-fd94f7d0f105)

Figure 5: Pre-order traversal

**Post-order traversal:**

For printing post-order traversal, we have to select the drop-down menu and select the post-order option the we can find the traversal in the Selected Traversal Data box.

![image](https://github.com/VamshiGangadhar/BinarySearchTree-Frontend/assets/80575671/eb922614-9bbb-4f2a-98f4-97572c4b5167)

Figure 6: post-order traversal

**Searching the node:**

If we want to search the node then we have to enter the node value and click on search then we can find the popup opened and details of the particular node

![image](https://github.com/VamshiGangadhar/BinarySearchTree-Frontend/assets/80575671/21445861-1541-45eb-b134-48c71a3828c8)

Figure 7: Search node

Complete Project Video Link - [Project Video](https://drive.google.com/file/d/1WW-65VpmwOKyx2Iamw8rZ_lQTX95SJXS/view?usp=sharing)
