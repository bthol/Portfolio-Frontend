import React from "react";
// import { useState } from "react";

const Form1 = (props) => {
    return (
        <div>
            <form action="" method="GET">
              <label>arg1</label><input type="number" min="0" required></input>
              <label>arg2</label><input type="number" min="0" required></input>
              <button type="submit">submit</button>
            </form>
        </div>
    )
};

export { Form1 };