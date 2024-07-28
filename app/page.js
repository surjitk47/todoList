"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTask = <h2> No task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li
          key={i}
          className="flex items-center justify-between bg-gray-500 my-2 p-4"
        >
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-2xl font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-600 px-4 py-2 rounded text-white"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="text-center py-10 text-4xl bg-zinc-800 font-bold text-white  ">
        {" "}
        My Todo List
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Title Here"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your Discription Here"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="text-2xl bg-black text-white px-4 py-2 border-4 border-black m-8">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-4 bg-slate-400 my-4">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
