import {React, useState, useContext} from 'react';
import { PostCard, PostForm, NotebookList } from './index';
import { DataContext } from '../context/DataContext';


const Main = ({props}) => {
    const [postFormVisible, setPostFormVisible] = useState(true);

    const onPostFormVisible = (e) => {
      e.preventDefault();
      setPostFormVisible(s => !s);
    }

    //const {posts, notebooks, postsByNotebook} = useContext(DataContext);
  // let props = {
  //   posts,
  //   notebooks,
  //   onPostFormVisible
  // }

  return (
    <> 
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {/* {!postFormVisible ? <PostForm props={posts, notebooks} /> : posts.map((post, index) => (
            <PostCard key={index} props={post, props.notebooks} />
          ))} */}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className='lg:sticky relative top-8'>
            <div className='bg-white shadow-lg border rounded-lg p-0 lg:p-4 mb-2 text-center'>
              {postFormVisible ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={(e) => onPostFormVisible(e)}>New Post</button> : 
              <button className="bg-neutral-600 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-full"
                    type="button" onClick={(e) => onPostFormVisible(e)}>Keep it in</button>}
            </div>
            {/* <NotebookList props={notebooks} /> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Main;
