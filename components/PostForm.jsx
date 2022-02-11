import { React, useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import { DataContext } from '../context/DataContext';
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({ notebooks, onPostFormVisible, existingPost }) => {
    const {...outletData} = useContext(DataContext);

    if (existingPost) {
        setPost({ existingPost });
    }

    const [post, setPost] = useState({
        created_at: Date.now(),
        title: '',
        content: '',
        notebooks: notebooks[0]
    });

    const setPostData = (e) => {
        const newPostData = Object.assign({}, post);
        newPostData[e.target.name] = e.target.value;
        setPost(newPostData);
    }

    const setPostDate = (date) => {
        const newPostDate = Object.assign({}, post);
        newPostDate["created_at"] = date;
        setPost(newPostDate);
    }

    const createPost = async (e) => {
        e.preventDefault();

        console.log(JSON.stringify(post))

        const res = await fetch('api/post', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(post)
        })
        outletData.updateOutletData();
        onPostFormVisible(e, false);
    }

    return (
        <div className='bg-white border shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <form onSubmit={createPost} className="p5">
                <div>
                    <DatePicker id="created_at" name="created_at" onChange={(date) => setPostDate(date)} />
                </div>
                <label htmlFor='notebook'>Notebook:</label>
                <div>
                    <select
                        className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="notebooks"
                        onChange={setPostData} >
                        {notebooks.map(notebook =>
                            <option key={notebook.id} value={notebook.id}>
                                {notebook.title}
                            </option>
                        )}
                    </select>
                </div>
                <label htmlFor='title'>Title:</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title" name="title" type="text" onChange={setPostData} required />
                <label htmlFor='content'>Content:</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="content" name="content" type="text" onChange={setPostData} required />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8 mr-4"
                    type="submit">Let it Out</button>
                <button className="bg-neutral-600 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-full mt-8"
                    type="button" onClick={(e) => onPostFormVisible(e, false)}>Keep it in</button>
            </form>
        </div>
    );
};

export default PostForm;
