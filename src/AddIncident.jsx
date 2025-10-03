import { useState } from "react";

function AddIncident() {
    const [incident, addIncident] = useState({
        id: "",
        title: "Server_Issue",
        priority: "Medium",
        status: "Closed"
    });

    function handleChange(event) {
        const { name, value } = event.target;
        addIncident(prev => ({ ...prev, [name]: value }));
    }

    function add(e) {
        e.preventDefault(); // prevent page reload
        console.log(incident); // logs all entered values
    }

    return (
        <>
            <form action="" onSubmit={add}>
                <label htmlFor="id">Incident ID :</label>
                <input
                    type="text"
                    id="id"
                    name="id"
                    placeholder="INC-111111"
                    onChange={handleChange}
                    required
                />

                <label htmlFor="title">Title :</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter title"
                    onChange={handleChange}
                    required
                />

                <label htmlFor="priority">Priority :</label>
                <select
                    name="priority"
                    id="priority"
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
        </>
    );
}

export default AddIncident;
