import { getPosts, getNotebooks } from './api';

export default function Home() {
  return (
    <></>
  )
}

// export async function getServerSideProps() {
//   const posts = await getPosts() || [];
//   const notebooks = await getNotebooks() || [];

//   return {
//     props: {
//       posts: posts,
//       notebooks: notebooks
//     },
//   };
// }
