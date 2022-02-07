import { Key, useState } from 'react';
import { PostCard, PostForm, NotebookList } from '../components/';
import { getPosts, getNotebooks } from './api';

export default function Home({ posts, notebooks }) {

  const [postFormVisible, setPostFormVisible] = useState(true);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {!postFormVisible ? <PostForm props={notebooks}/> : posts.map((post: any, index: Key) => (
              <PostCard key={index} props = { post } />
            ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className='lg:sticky relative top-8'>
            <div className='bg-white shadow-lg border rounded-lg p-0 lg:p-4 mb-2 text-center'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setPostFormVisible(s => !s)}>New Post</button>
            </div>
            <NotebookList props={notebooks} />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const posts = await getPosts() || [];
  const notebooks = await getNotebooks() || [];

  return {
    props: {
      posts: posts,
      notebooks: notebooks
    },
  };
}
