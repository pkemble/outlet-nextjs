import React from "react";

const CreateNotebookForm = ({ notebook }) => {
  
  const createNotebook = async (e) => {
    e.preventDefault();
    
    const newNotebook = {
      title: e.target.title.value,
      description: e.target.description.value,
    };

    const res = await fetch(`/api/notebook`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(newNotebook)
    })
      window.location.reload(false);
  };

  return (
    <div className='container grid grid-cols-1 mx-auto p-2'>
      <div className='bg-white border shadow-lg rounded-lg mx-auto lg:pb-8 pb-12 mb-8 '>
        <form onSubmit={createNotebook} className="p-5">
          <label htmlFor='title'>Title</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" autoComplete='title' required />
          <label htmlFor='description'>Description</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" autoComplete='description' required />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8" type="submit">Create Notebook</button>
        </form>
      </div>
    </div>);
};

export default CreateNotebookForm;


