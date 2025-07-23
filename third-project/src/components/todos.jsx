// todos.jsx
// import React from "react";


function Todos() {
  const todos = [
    {
      id: 1,
      todo: "Do something nice for someone you care about",
      completed: false,
      userId: 152,
    },
    {
      id: 2,
      todo: "Memorize a poem",
      completed: true,
      userId: 13,
    },
    {
      id: 3,
      todo: "Watch a classic movie",
      completed: true,
      userId: 68,
    },
    {
      id: 4,
      todo: "Watch a documentary",
      completed: false,
      userId: 84,
    },
  ];

  return (
    <div className="container">
      {todos.map((todoItem) => (
        <Card
          key={todoItem.id}
          todoTittle={todoItem.todo}
          userId={todoItem.userId}
        />
      ))}
    </div>
  );
}

function Card({ todoTittle, userId }) {
  return (
    <div className="card">
      <h1>{todoTittle}</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}

export default Todos;
