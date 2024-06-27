import React, { useState, useEffect } from "react";
import "./Taxpolicy.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Modal, Button } from "react-bootstrap";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa"; // update and delete icons
import Axios from "axios";

function TaxPolicy() {
  const [taxPolicies, setTaxPolicies] = useState([]);
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

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
        } else {
          console.error("Expected an array but got", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [editingPolicyIndex, setEditingPolicyIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedAmount, setEditedAmount] = useState("");
  const [editedRate, setEditedRate] = useState("");

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

  const handleUpdatePolicy = async () => {
    const updatedPolicy = {
      policyId: taxPolicies[editingPolicyIndex].policyId,
      title: editedTitle,
      amount: editedAmount,
      rate: editedRate,
    };

    const updatedTaxPolicies = [...taxPolicies];
    updatedTaxPolicies[editingPolicyIndex] = updatedPolicy;
    setTaxPolicies(updatedTaxPolicies);
    setIsEditing(false);
    setEditingPolicyIndex(null);
    setEditedTitle("");
    setEditedAmount("");
    setEditedRate("");

    try {
      await Axios.patch(
        `${base_url}/api/superAdmin/updatePolicy/`,
        updatedPolicy
      );
      window.location.reload();
    } catch (error) {
      console.error("Error updating policy:", error);
    }
  };

  const handleCreatePolicy = async () => {
    const newPolicy = {
      title: editedTitle,
      amount: editedAmount,
      rate: editedRate,
    };

    try {
      const response = await Axios.post(
        `${base_url}/api/superAdmin/createPolicy`,
        newPolicy
      );
      window.location.reload();
    } catch (error) {
      console.error("Error creating policy:", error);
    }
    setIsCreating(false);
    setEditedTitle("");
    setEditedAmount("");
    setEditedRate("");
  };

  const handleDeleteClick = async (index) => {
    const policyId = taxPolicies[index].policyId;
    console.log("Deleting policy with ID:", policyId);
    try {
      await Axios.delete(`${base_url}/api/superAdmin/deletePolicy`, {
        data: { policyId },
      });
      setTaxPolicies(taxPolicies.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting policy:", error);
    }
  };

  const handleCloseEditing = () => {
    setIsEditing(false);
    setIsCreating(false);
    setEditingPolicyIndex(null);
    setEditedTitle("");
    setEditedAmount("");
    setEditedRate("");
  };

  return (
    <>
      <div
        style={{
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
          borderRadius: "10px",
          padding: "10px",
          marginBottom: "10px",
          marginTop: "5px",
          marginLeft: "0.5%",
          backgroundColor: "#F3FFF5",
          width: "77vw",
        }}
      >
        <table className="table">
          <thead>
            <tr>
              <th>
                Policy
                <FaPlus
                  onClick={() => setIsCreating(true)}
                  style={{ cursor: "pointer" }}
                />
              </th>
              <th>Amount</th>
              <th>Rate</th>
              <th>Update Policy</th>
              <th>Delete Policy</th>
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
                  <td>
                    {policy.optional ? (
                      <FaTrash
                        onClick={() => handleDeleteClick(index)}
                        style={{ cursor: "pointer", color: "red" }}
                      />
                    ) : (
                      <label>cannot delete</label>
                    )}
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

      {/* Modal for creating or editing policy */}
      <Modal show={isEditing || isCreating} onHide={handleCloseEditing}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEditing ? "Edit Policy" : "Create Policy"}
          </Modal.Title>
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
            onClick={isEditing ? handleUpdatePolicy : handleCreatePolicy}
          >
            {isEditing ? "Update Policy" : "Create Policy"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaxPolicy;
