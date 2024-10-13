
import React from 'react';

export default function Dispcomp1({ data }) {
  return (
    <div className="mt-4">
      {data.length === 0 ? (
        <p className="text-gray-500">No users available</p>
      ) : (
        <div className="space-y-4">
          {data.map((l, index) => (
            <div key={index} className="border border-gray-300 rounded p-4">
              <ul>
                <li>
                  <div className="font-semibold">Name: <span className="font-normal">{l.name}</span></div>
                  <div className="font-semibold">Age: <span className="font-normal">{l.age}</span></div>
                  <div className="font-semibold">Occupation: <span className="font-normal">{l.occupation}</span></div>
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
