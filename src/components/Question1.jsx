import React, { useState } from 'react';
import Dispcomp1 from './Dispcomp1';
import { Link } from 'react-router-dom';

export default function Question1() {
  const [userprofiles, setUserProfiles] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");

  return (
    <div className="p-4">
      <div className="mb-4">
        <Link to="/que1">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2 transition duration-200 ease-in-out">
            Question 1
          </button>
        </Link>
        <Link to="/que2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out">
            Question 2
          </button>
        </Link>
      </div>

      <div className="flex flex-col">
        <label className="mb-1">Name:</label>
        <input
          className="border border-gray-300 rounded p-2 mb-2"
          style={{ width: "25%" }}
          type='text'
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        /><br />
        <label className="mb-1">Age:</label>
        <input
          className="border border-gray-300 rounded p-2 mb-2"
          style={{ width: "25%" }}
          type='text'
          value={age}
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
        /><br />
        <label className="mb-1">Occupation:</label>
        <input
          className="border border-gray-300 rounded p-2 mb-2"
          style={{ width: "25%" }}
          type='text'
          value={occupation}
          placeholder="Enter your occupation"
          onChange={(e) => setOccupation(e.target.value)}
        /><br />
        <button
          className="bg-black text-white px-4 py-2 rounded w-[100px]"
          onClick={() => {
            setUserProfiles((profiles) => [
              ...profiles,
              { name: name, age: age, occupation: occupation }
            ]);
            setName("");
            setAge("");
            setOccupation("");
          }}
        >
          Submit
        </button>
      </div>
      <hr className="my-4" />
      <div>
        <Dispcomp1 data={userprofiles} />
      </div>
    </div>
  );
}
