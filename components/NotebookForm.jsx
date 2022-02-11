import axios from "axios";
import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const NotebookForm = ({ notebook }) => {
  const { ...outletData } = useContext(DataContext);

  const updateNotebook = async (e) => {
    e.preventDefault();

    const n_update = {
      id: notebook.id,
      title: e.target.title.value,
      description: e.target.description.value,
      ceated_at: Date.now()
    };

    await axios.post(`/api/notebook`, n_update)
      .finally(outletData.updateOutletData());
  };

  return (
    <div className='container grid grid-cols-1 mx-auto p-2'>
      <div className='bg-white border shadow-lg rounded-lg mx-auto lg:pb-8 pb-12 mb-8 '>
        <form key={notebook.id} onSubmit={updateNotebook} className="p-5">
          <label htmlFor='title'>Title</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" autoComplete='title' defaultValue={notebook.title} required />
          <label htmlFor='description'>Description</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" autoComplete='description' defaultValue={notebook.description} required />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8" key={notebook.id} type="submit">Update Notebook</button>
        </form>
      </div>
    </div>);
};

export default NotebookForm;


