import React, { useState,useEffect } from "react";
import "./Taxpolicy.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Modal, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa"; // create icon
import { FaEdit } from "react-icons/fa"; // update icon
import { FaTrash } from "react-icons/fa"; // delete icon

import Axios from "axios";
//import Cookies from "js-cookie";

function TaxPolicy() {
  // State to manage tax policies and the modal
  const [taxPolicies, setTaxPolicies] = useState([]);

  // Fetch data from the API URL when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/api/superAdmin/policy")
        .then((response) => {
            // Check if the response is OK (status code in the range 200-299)
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Parse the JSON data
        })
        .then((data) => {
           if (Array.isArray(data.data)) {
        setTaxPolicies(data.data);
      } else {
        console.error("Expected an array but got", data);
      }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}, []);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPolicyTitle, setNewPolicyTitle] = useState("");
  const [newPolicyDescription, setNewPolicyDescription] = useState("");

  // Function to open the create modal
  const handleOpenCreateModal = () => {
    setShowCreateModal(true);
  };

  // Function to handle creating a new tax policy
  const handleCreatePolicy = async () => {
    const newPolicy = {
      title: newPolicyTitle,
      details: newPolicyDescription,
    };

    // Add the new policy to the tax policies array
    setTaxPolicies([...taxPolicies, newPolicy]);

    // Reset inputs and close the modal
    setNewPolicyTitle("");
    setNewPolicyDescription("");
    setShowCreateModal(false);

    const handleOpenDeleteModal = (index) => {
      setPolicyToDelete(taxPolicies[index].id);
      setShowDeleteModal(true);
    };
    const updatedTaxPolicies = taxPolicies.filter((policy) => policy.id !== policyToDelete);

    const base_url = import.meta.env.VITE_APP_BACKEND_URL;

    try {
      // Make the POST request to the backend to save the new policy
      const response = await Axios.post(`${base_url}/api/superAdmin/createPolicy`, newPolicy);
  
      // Handle the response if needed (e.g., showing a success message, updating the state)
      console.log('Policy created successfully:', response.data);

      //  if (response.data.Status === "Success") {
      //   navigate("/UserHomePage");
      // } //else if (res.data.message == "already registered email") {
      //   alert("Email is already registered! Please Enter another one");
      //   setLoading(false);
      // } else {
      //   alert("System Error!");
      //   setLoading(false);
      // }
      
    } catch (error) {
      console.error('Error creating policy:', error);
      // Optionally, handle the error (e.g., show an error message to the user)
    }

  };

  // Function to close the create modal without creating a new policy
  const handleCloseCreateModal = () => {
    // Reset inputs and close the modal
    setNewPolicyTitle("");
    setNewPolicyDescription("");
    setShowCreateModal(false);
  };

  //..........................update...............................
  const [isEditing, setIsEditing] = useState(false);
  const [editingPolicyIndex, setEditingPolicyIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDetails, setEditedDetails] = useState("");

  // Handle opening the modal for editing
  const handleEditClick = (index) => {
    setEditingPolicyIndex(index);
    setEditedTitle(taxPolicies[index].title);
    setEditedDetails(taxPolicies[index].details);
    setIsEditing(true);
  };

  // Handle updating the policy
  const handleUpdatePolicy = () => {
    const updatedTaxPolicies = [...taxPolicies];
    updatedTaxPolicies[editingPolicyIndex].title = editedTitle;
    updatedTaxPolicies[editingPolicyIndex].details = editedDetails.split("\n");
    setTaxPolicies(updatedTaxPolicies);
    setIsEditing(false);
    setEditingPolicyIndex(null);
    setEditedTitle("");
    setEditedDetails("");
  };

  // Handle closing the modal
  const handleCloseEditing = () => {
    setIsEditing(false);
    setEditingPolicyIndex(null);
    setEditedTitle("");
    setEditedDetails("");
  };

  //.......................delete.................................................

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [policyToDelete, setPolicyToDelete] = useState(null);

  // Function to handle opening the delete confirmation modal
  const handleOpenDeleteModal = (index) => {
    setPolicyToDelete(index);
    setShowDeleteModal(true);
  };

  // Function to handle deleting the selected tax policy
  const handleDeletePolicy = async () => {
    // Create a new array with the policy removed
    const updatedTaxPolicies = taxPolicies.filter(
      (_, i) => i !== policyToDelete
    );
    // Update the state with the new array
    setTaxPolicies(updatedTaxPolicies);
    // Close the modal and reset the policy to delete
    setShowDeleteModal(false);
    setPolicyToDelete(null);
    const base_url = import.meta.env.VITE_APP_BACKEND_URL;
    try {
      // Make the POST request to the backend to save the new policy
      const resDelete = await Axios.delete(`${base_url}/api/superAdmin/deletePolicy/${policyToDelete}`);
      const updatedTaxPolicies = taxPolicies.filter((policy) => policy.id !== policyToDelete);
  
      // Handle the response if needed (e.g., showing a success message, updating the state)
      //console.log('Policy created successfully:', response.data);

      // if (response.data.Status === "Success") {
      //  navigate("/UserHomePage");
      //} //else if (res.data.message == "already registered email") {
      //   alert("Email is already registered! Please Enter another one");
      //   setLoading(false);
      // } else {
      //   alert("System Error!");
      //   setLoading(false);
      // }
      
    } catch (error) {
      console.error('Error deleting policy:', error);
      // Optionally, handle the error (e.g., show an error message to the user)
    }    
  };

  // Function to close the delete confirmation modal without deleting
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setPolicyToDelete(null);
  };

  const color1 = "#F3FFF5"; // Custom background color
  const color2 = "white"; // White background color

  return (
    <>
      <div className="outer1 embed-responsive embed-responsive-16by9">
        {/* Table to display tax policies */}
        <table className="table ">
          <thead>
            <tr>
              <th>Title</th>
              <th>Details</th>
              <th>Create New Policy</th>{" "}
              {/*  column for creating a new policy */}
              <th>Update Policy</th> {/*  column for updating a policy */}
              <th>Delete Policy</th> {/*  column for deleting a policy */}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(taxPolicies) && taxPolicies.length > 0 ? (
            
            taxPolicies.map((policy, index) => (
              <tr
                key={index}
                style={{ backgroundColor: index % 2 === 0 ? color1 : color2 }}
              >
                <td>{policy.title}</td>
                <td>
                  <ul>
                    
                      <li> {policy.details}</li>
                    
                  </ul>
                </td>
                <td>
                  {/* Button with plus icon to open the create modal */}
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={handleOpenCreateModal}
                  >
                    <FaPlus style={{ color: "#049370" }} />
                  </button>
                </td>
                {/* Edit column with edit icon */}
                <td>
                  <FaEdit
                    onClick={() => handleEditClick(index)}
                    style={{ cursor: "pointer" }}
                  />
                </td>
                {/* Column for delete action */}
                <td>
                  <FaTrash
                    onClick={() => handleOpenDeleteModal(index)}
                    style={{ cursor: "pointer", color: "red" }}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No policies found.</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>

      {/* Modal for creating a new tax policy */}
      <Modal show={showCreateModal} onHide={handleCloseCreateModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Tax Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Inputs for creating the new tax policy */}
          <div>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Policy Title"
              value={newPolicyTitle}
              onChange={(e) => setNewPolicyTitle(e.target.value)}
            />
            <textarea
              className="form-control"
              placeholder="Policy Description"
              value={newPolicyDescription}
              onChange={(e) => setNewPolicyDescription(e.target.value)}
              rows="4"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreateModal}>
            Cancel
          </Button>
          <Button
            className="Button_cud"
            variant="primary"
            onClick={handleCreatePolicy}
          >
            Create Policy
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for editing policy */}
      <Modal show={isEditing} onHide={handleCloseEditing}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Inputs for editing the policy */}
          <div>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Policy Title"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              className="form-control"
              placeholder="Policy Details (one per line)"
              value={editedDetails}
              onChange={(e) => setEditedDetails(e.target.value)}
              rows="4"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditing}>
            Cancel
          </Button>
          <Button
            className="Button_cud"
            variant="primary"
            onClick={handleUpdatePolicy}
          >
            Update Policy
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for confirming deletion */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this tax policy?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button
            className="Button_cud"
            variant="primary"
            onClick={handleDeletePolicy}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaxPolicy;
