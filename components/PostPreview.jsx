import React from 'react'
import striptags from 'striptags'
import TextTruncate from 'react-text-truncate'

const PostPreview = ({ post = post }) => {
  const untitledPost = post.title.length !== 0

  return (
    <div className='border border-gray-300 p-4 m-4'>
      {untitledPost ?
        <div className='text-xl pt-4'>{post.title}</div> :
        <div className='text-md pt-4 text-gray-400'>untitled</div>
      }
      <div className='text-sm pt-4 text-gray-500'>
        <TextTruncate
          line={1}
          element="span"
          truncateText="..."
          text={striptags(post.content)}
          textTruncateChild={<a href="#">Read on</a>}
        />
      </div>
    </div>
  )
}

export default PostPreview