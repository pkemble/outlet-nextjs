import { React, useState } from 'react';
import { PostPreview, PostForm, NotebookList } from './index';
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
        <div class="flex justify-center items-center">
          <div class="spinner-border animate-spin inline-block w-14 h-14 border-4 rounded-full border-b-black border-t-grey-500" role="status" />
        </div> :
        <div className="lg:container mx-auto px-10 mb-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 sm:flex sm:flex-col-reverse">
            <div className="lg:col-span-8">
              {postFormVisible ?
                <PostForm notebooks={outletState.notebooks} onPostFormVisible={onPostFormVisible} actionText={"Create Post: "} /> :
                outletState.posts.map((post, index) =>
                  // <PostCard key={index} post={post} notebooks={outletState.notebooks} onPostFormVisible={onPostFormVisible} />
                  <PostPreview key={index} post={post} notebooks={outletState.notebooks} onPostFormVisible={onPostFormVisible} />
                )}
            </div>
            <div className="lg:col-span-4">
              <div className='lg:sticky relative top-8'>
                <div className='bg-white shadow-lg border rounded-lg p-2 lg:p-4 mb-2 text-center'>
                  {postFormVisible ?
                    <button className="bg-neutral-600 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-full"
                      type="button" onClick={(e) => onPostFormVisible(e, false)}>Keep it in</button> :
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={(e) => onPostFormVisible(e, true)}>New Post</button>
                  }
                </div>
                <NotebookList onPostFormVisible={onPostFormVisible} />
              </div>
            </div>
          </div>
        </div>}
    </>
  );
};

export default Main;
