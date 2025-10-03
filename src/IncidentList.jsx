import { useState,useContext } from 'react';

import { ThemeContext } from './ThemeContext.js';

import Incident from './Incident.jsx';

function IncidentList({ incidents, onDelete, addInc }) {
  // form state (only for new incident input)
  const [newIncident, setNewIncident] = useState({
    incident_id: '',
    title: '',
    priority: 'Medium',
    status: 'Open',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewIncident((prev) => ({ ...prev, [name]: value }));
  }

  function onAdd(e) {
    e.preventDefault();
    addInc(newIncident);

    // reset form
    setNewIncident({
      incident_id: '',
      title: '',
      priority: 'Medium',
      status: 'Open',
    });
    alert("Successfully Saved.....")
  }


  const theme=useContext(ThemeContext)


  return (
    <>
      <div>
        <form onSubmit={onAdd}>
          <label htmlFor="incident_id">Incident ID :</label>
          <input
            type="text"
            id="incident_id"
            name="incident_id"
            value={newIncident.incident_id}
            placeholder="INC-111111"
            onChange={handleChange}
            required
          />

          <label htmlFor="title">Title :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newIncident.title}
            placeholder="Enter title"
            onChange={handleChange}
            required
          />

          <label htmlFor="priority">Priority :</label>
          <select
            name="priority"
            id="priority"
            value={newIncident.priority}
            onChange={handleChange}
            required
          >
            <option value="Low">1-Low</option>
            <option value="Medium">2-Medium</option>
            <option value="High">3-High</option>
            <option value="Critical">4-Critical</option>
          </select>

          <label htmlFor="status">Status :</label>
          <select
            name="status"
            id="status"
            value={newIncident.status}
            onChange={handleChange}
            required
          >
            <option value="In-progress">In-progress</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
            <option value="Resolved">Resolved</option>
            <option value="On Hold">On Hold</option>
          </select>

          <button type="submit">Save</button>
        </form>
      </div>

      <div>
        {incidents.map((incident) => (
          <Incident
            key={incident.incident_id}
            incident={incident}
            onDelete={() => onDelete(incident.incident_id)}
          />
        ))}
      </div>
    </>
  );
}

export default IncidentList;
