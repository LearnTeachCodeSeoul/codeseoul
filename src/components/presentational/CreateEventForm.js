import React from 'react';

const CreateEventForm = props => {
  const { onChangeHandler, createEvent, event } = props;
  const { name, description, directions, startTime, endTime } = event;
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
        <input type="date" name="date" onChange={e => onChangeHandler(e)} />
        <input
          type="time"
          name="startTime"
          min="00:00"
          max="24:00"
          onChange={e => onChangeHandler(e)}
          value={startTime}
        />
        <input
          type="time"
          name="endTime"
          min="00:00"
          max="24:00"
          onChange={e => onChangeHandler(e)}
          value={endTime}
        />
        <button onClick={createEvent}>Create Event</button>
      </form>
    </div>
  );
};

export default CreateEventForm;
