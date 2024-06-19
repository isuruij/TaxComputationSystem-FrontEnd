import React, { useState, useEffect } from "react";
import "./Taxpolicy.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Modal, Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa"; // update icon
import Axios from "axios";

function TaxPolicy() {
  // State to manage tax policies
  const [taxPolicies, setTaxPolicies] = useState([]);
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  // Fetch data from the API URL when the component mounts
  useEffect(() => {
    fetch(`${base_url}/api/superAdmin/policy`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data.data)) {
          setTaxPolicies(data.data);
          console.log(taxPolicies) 
        } else {
          console.error("Expected an array but got", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Update state and handlers
  const [isEditing, setIsEditing] = useState(false);
  const [editingPolicyIndex, setEditingPolicyIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedAmount, setEditedAmount] = useState("");
  const [editedRate, setEditedRate] = useState("");

  // Handle opening the modal for editing
  const handleEditClick = (index) => {
    const policy = taxPolicies[index];
    if (!policy) {
      console.error(`No policy found at index ${index}`);
      return;
    }
    setEditingPolicyIndex(index);
    setEditedTitle(policy.title);
    setEditedAmount(policy.amount);
    setEditedRate(policy.rate);
    setIsEditing(true);
  };

  // Handle updating the policy
  const handleUpdatePolicy = async () => {
    const updatedPolicy = {
      policyId: taxPolicies[editingPolicyIndex].policyId,
      title: editedTitle,
      amount: editedAmount,
      rate: editedRate,
    };

    console.log(updatedPolicy)

    const updatedTaxPolicies = [...taxPolicies];
    updatedTaxPolicies[editingPolicyIndex] = updatedPolicy;
    setTaxPolicies(updatedTaxPolicies);
    setIsEditing(false);
    setEditingPolicyIndex(null);
    setEditedTitle("");
    setEditedAmount("");
    setEditedRate("");

    const base_url = import.meta.env.VITE_APP_BACKEND_URL;
    try {
      console.log("started")
      console.log(updatedTaxPolicies)
      await Axios.patch(
        `${base_url}/api/superAdmin/updatePolicy/`,
        updatedPolicy
      );
      console.log("Policy updated successfully");
    } catch (error) {
      console.error("Error updating policy:", error);
    }
  };

  // Handle closing the modal
  const handleCloseEditing = () => {
    setIsEditing(false);
    setEditingPolicyIndex(null);
    setEditedTitle("");
    setEditedAmount("");
    setEditedRate("");
  };

  return (
    <>
      <div className="outer1 embed-responsive embed-responsive-16by9">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Rate</th>
              <th>Update Policy</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(taxPolicies) && taxPolicies.length > 0 ? (
              taxPolicies.map((policy, index) => (
                <tr key={index}>
                  <td>{policy.title}</td>
                  <td>{policy.amount}</td>
                  <td>{policy.rate}</td>
                  <td>
                    <FaEdit
                      onClick={() => handleEditClick(index)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No policies found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for editing policy */}
      <Modal show={isEditing} onHide={handleCloseEditing}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Policy Title"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Policy Amount"
              value={editedAmount}
              onChange={(e) => setEditedAmount(e.target.value)}
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Policy Rate"
              value={editedRate}
              onChange={(e) => setEditedRate(e.target.value)}
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
    </>
  );
}

export default TaxPolicy;