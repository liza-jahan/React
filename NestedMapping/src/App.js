import React from "react";

const users = [
  {
    fullName: "Liza",
    age: 23,
    phones: [{ home: "01729777394" }, { office: "01727077394" }],
  },
  {
    fullName: "Niha",
    age: 12,
    phones: [{ home: "01929777394" }, { office: "01927077394" }],
  },
];

export default function App() {
  return (
    <div>
      <h1>Nested mapping</h1>
      {users.map((user, index) => (
        <article key={index}>
          <h3>Name:{user.fullName}</h3>
          <p>Age: {user.age}</p>
          {
          user.phones.map((phone, index) => <div key={index}>
                <p> {phone.home}</p>
                <p> {phone.office}</p>
              </div>  )
          }
        </article>
      ))}
    </div>
  );
}
