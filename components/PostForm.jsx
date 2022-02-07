import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({ props }) => {

    const [post, setPostDate] = useState({post: created_at});
    const [postTitle, setPostTitle] = useState({ post: title });
    const [postContent, setPostContent] = useState({ post: content });
    const [postNotebook, setPostNotebook] = useState({ post: notebook_id });
    
    const createPost = async (e) => {
        e.preventDefault();

        const post = {
            notebook_id: e.target.notebook.value,
            title: e.target.title.value,
            content: e.target.content.value
        }

        console.log(post);

        const res = await fetch('api/post', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(post)
        })
    }

    return (
        <div className='bg-white border shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <form onSubmit={createPost} className="p5">
                <DatePicker />
                <label htmlFor='notebook'>Notebook:</label>
                <select id="notebook">{props.map((notebook, index) =>
                    <option key={notebook.id} value={notebook.id}>
                        {notebook.title}
                    </option>
                )}
                </select>
                <label htmlFor='title'>Title:</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title" type="text" onChange={setPost({post: value})} required />
                <label htmlFor='content'>Content:</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="content" type="text" required />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8"
                    type="submit">LetOut</button>
            </form>
        </div>
    );
};

export default PostForm;
