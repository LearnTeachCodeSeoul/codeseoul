import React from 'react';

const MeetupForm = props => {
  const { onChangeHandler, createEvent, event } = props;
  const { name, description, directions } = event;
  return (
    <div id="create-event-form">
      <form>
        <input
          name="name"
          type="text"
          onChange={e => onChangeHandler(e)}
          placeholder="Event Name"
          value={name}
        />
        <textarea
          name="description"
          id="form-event-description"
          cols="30"
          rows="50"
          placeholder="Event Description"
          onChange={e => onChangeHandler(e)}
          value={description}
        />
        <input
          name="directions"
          type="text"
          onChange={e => onChangeHandler(e)}
          placeholder="Directions"
          value={directions}
        />
        <select name="venueId" onChange={e => onChangeHandler(e)}>
          <option value="25507426">WCoding</option>
          <option value="24727562">Seoul Global Center</option>
        </select>
        <button onClick={createEvent}>Create Event</button>
      </form>
    </div>
  );
};

export default MeetupForm;