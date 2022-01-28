import { PostCard, NotebookList } from '../components/';
import { getPosts } from '../services/';

export default function Home({ data }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:colspan-8 colspan-1">
{console.log(data)}
          {data.map((post, index) => (
              <PostCard key={index} props = { post } />
            ))}
        </div>
        <div className="lg:colspan-4 colspan-1">
          <NotebookList />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const posts = await getPosts() || [];
  const allPosts = JSON.stringify(posts, (_key, value) => typeof value === 'bigint' ? value.toString() : value);
  return {
    props: { data: JSON.parse(allPosts) },
  };
}
