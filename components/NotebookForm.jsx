import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";

const updateNotebook = async ({ notebook }) => {
  const res = await fetch(`http://localhost:3000/api`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: {notebook}
  })
  return res.json;
}

const NotebookForm = ({ notebook }) => {

  return (
    <div className='container grid grid-cols-1 mx-auto p-8'>
      <div className='bg-white border shadow-lg rounded-lg mx-auto lg:pb-8 pb-12 mb-8 '>
        <form key={notebook.id} onSubmit={updateNotebook(JSON.stringify(notebook))} className="p-5">
          <label htmlFor='title'>Title</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" autoComplete='title' defaultValue={notebook.title} required />
          <label htmlFor='description'>Description</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" autoComplete='description' defaultValue={notebook.description} required />
          <button key={notebook.id} type="submit">Update Notebook</button>
        </form>
      </div>
    </div>);
};

export default NotebookForm;


