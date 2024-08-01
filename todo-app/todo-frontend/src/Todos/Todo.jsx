import React from 'react';

export const TodoComponent = ({todos}) => {

    const onlyTask = todos ? todos[0] : null;
    console.log(onlyTask);

    return (
        <div>
            <h1>
                {todos && todos.length > 0 ? (
                    todos.map((t, index) => (
                        <li key={index}> {t.text} </li>
                    ))
                ) : (
                    <p>No tasks available</p>
                )}
            </h1>
        </div>
    );
};
