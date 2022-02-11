import { React, useState, memo, useReducer, useContext } from 'react';
import { PostCard, PostForm, NotebookList } from './index';
import { DataContext, useOutletData } from '../context/DataContext';


const Main = () => {
  const [postFormVisible, setPostFormVisible] = useState(false);
  const { ...outletData } = useOutletData(DataContext);
  const { ...outletState } = outletData.state;
  
  const onPostFormVisible = (e, s) => {
    e.preventDefault();
    setPostFormVisible(s);
  }

  return (
    <>
      {outletData.state.status === 'LOADING' ?
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div> :
        <div className="container mx-auto px-10 mb-8">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 col-span-1">
              {postFormVisible ?
                <PostForm notebooks={outletState.notebooks} onPostFormVisible={onPostFormVisible} actionText={"Create Post: "} /> :
                outletState.posts.map((post, index) => 
                  <PostCard key={index} post={post} notebooks={outletState.notebooks} onPostFormVisible={onPostFormVisible} />
                )}
            </div>
            <div className="lg:col-span-4 col-span-1">
              <div className='lg:sticky relative top-8'>
                <div className='bg-white shadow-lg border rounded-lg p-2 lg:p-4 mb-2 text-center'>
                  {postFormVisible ?
                    <button className="bg-neutral-600 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-full"
                      type="button" onClick={(e) => onPostFormVisible(e, false)}>Keep it in</button> :
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={(e) => onPostFormVisible(e, true)}>New Post</button>
                  }
                </div>
                <NotebookList onPostFormVisible={onPostFormVisible}/>
              </div>
            </div>
          </div>
        </div>}
    </>
  );
};

export default Main;
