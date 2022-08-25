import { React, useState, useContext, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { DataContext } from '../context/DataContext';
import "react-datepicker/dist/react-datepicker.css";
import { PostContentEditor } from '.';
import axios from 'axios';

const PostForm = ({ notebooks, onPostFormVisible, actionText, existingPost }) => {
    const { ...outletData } = useContext(DataContext);
    const [post, setPost] = useState({ existingPost });

    useEffect(() => {
        if (existingPost) {
            setPost(existingPost)
        } else {
            existingPost = {};
        }
    }, [existingPost])


    const setPostData = (e) => {
        setPost(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const setPostDate = (date) => {
        setPost(prevState => ({
            ...prevState,
                created_at: date
        }));
    }
    const getContentForSubmit = (e) => {
        setPost(prevState => ({
            ...prevState,
            content: e
        }))
    }

    const sendPostData = async (e) => {
        e.preventDefault();
        console.log(post);

        post.notebook_id = !post.notebook_id ? notebooks[0].id : post.notebook_id

        await axios.post('api/post', post)
            .then(response => {
                outletData.updateOutletData()
                onPostFormVisible(e, false)
            })
            .catch(error => console.log(error));
    }

    const deletePost = async (e) => {
        e.preventDefault();

        await axios.delete(`api/posts/${post.id}`)
        .then(response => {
            outletData.updateOutletData()
            onPostFormVisible(e, false)
        })
        .catch(error => console.error(error));
    }

    return (
        <div className='bg-white border shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <div className='font-bold text-center'>
                <h2>{actionText}</h2>
            </div>
            <form key={post.id || ''} onSubmit={sendPostData} className="p5">
                <label htmlFor='created_at'>Date Created</label>
                <div className="shadow appearance-none border rounded min-w-0 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <DatePicker id="created_at" name="created_at" onChange={(date) => setPostDate(date)} selected={!post.created_at ? Date.now() : Date.parse(post.created_at)} />
                </div>
                <label htmlFor='notebook_id'>Notebook:</label>
                <div>
                    <select
                        className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="notebook_id"
                        onChange={(e) => setPostData(e)}
                        selected={!post.notebook_id ? notebooks[0].id : post.notebook_id } >
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
                    id="title" name="title" type="text" onChange={(e) => setPostData(e)} required defaultValue={post.title} />
                <label htmlFor='content'>Content:</label>
                <PostContentEditor existingPost={existingPost} getContentForSubmit={getContentForSubmit} />
                {/* <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="content" name="content" type="text" onChange={(e) => setPostData(e)} required defaultValue={post.content} /> */}
                {existingPost ?
                    <>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8 mr-4"
                            type="submit">let it update</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-8 mr-4"
                            type="button" onClick={(e) => deletePost(e)}>kill it forever</button>
                    </> :
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8 mr-4"
                        type="submit">let it out</button>}
                <button className="bg-neutral-600 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-full mt-8"
                    type="button" onClick={(e) => onPostFormVisible(e, false)}>keep it in for now</button>
            </form>
        </div>
    );
};

export default PostForm;
