import React from 'react';

const users = [
  {
    fullName: 'Shiham',
    age: 25,
    phone: [{ personal: '01765380015' }, { gmail: 's36651786@gmail.com' }],
  },
  {
    fullName: 'fahima',
    age: 25,
    phone: [
      { personal: '01766768415' },
      { gmail: 'fahimaakterlabu520@gmail.com' },
    ],
  },
  {
    fullName: 'shiham-two',
    age: '25',
    phone: [{ personal: '01998992331' }, { gmail: 'shiham36651786@gmail.com' }],
  },
];

function UserMapping() {
  return (
    <div>
      <h1>
        {users.map((user, index) => (
          <article key={index}>
            <h2>Full name : {user.fullName}</h2>
            <p>Age : {user.age}</p>

            {user.phone.map((cell, index) => (
              <div key={index}>
                <p>{cell.personal}</p>
                <p>{cell.gmail}</p>
              </div>
            ))}
          </article>
        ))}
      </h1>
    </div>
  );
}

export default UserMapping;
