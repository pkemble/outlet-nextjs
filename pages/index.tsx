import { PostCard, NotebookList } from '../components/';
import { getPosts, getNotebooks } from './api';

export default function Home({ posts, notebooks }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
              <PostCard key={index} props = { post } />
            ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className='lg:sticky relative top-8'>
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
