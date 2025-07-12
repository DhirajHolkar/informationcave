// 'use client';

// import { useEffect, useState, Suspense } from 'react';
// import { useParams } from 'next/navigation';
// import { client } from '../../../../sanity';
// import { PortableText } from '@portabletext/react';
// import { PortableTextComponents } from '../../../components/PortableTextComponents';
// import '../../../styles/blogstandard-page.css';

// function BlogPostContent() {
//   const [post, setPost] = useState(null);
//   const {slug} = useParams();

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const query = `
//           *[_type == "blogsStandardDetails" && slug.current == $slug][0] {
//             title,
//             intro,
//             content[] {
//               ...,
//               _type == "image" => {
//                 ...,
//                 asset->{
//                   _id,
//                   url
//                 }
//               }
//             }
//           }
//         `;
//         const fetchedPost = await client.fetch(query, { slug });
//         setPost(fetchedPost);
//       } catch (error) {
//         console.error('Error fetching post:', error);
//       }
//     };

//     if (slug) {
//       fetchPost();
//     }
//   }, [slug]);

//   if (!post) {
//     return <div className='blogsstandard-loading'>Loading post...</div>;
//   }

//   return (
//     <div className="blogstandard-container">
//       <div className="blogstandard-title">{post.title}</div>
//       <p className="blogstandard-intro">{post.intro}</p>

//       <div className="blogstandard-content">
//         <PortableText value={post.content} components={PortableTextComponents} />
//       </div>
//     </div>
//   );
// }

// export default function BlogPostPage() {
//   return (
//     <Suspense fallback={<div>Loading post...</div>}>
//       <BlogPostContent />
//     </Suspense>
//   );
// }













import { client } from '../../../../sanity';
import { PortableText } from '@portabletext/react';
import { PortableTextComponents } from '../../../components/PortableTextComponents';
import '../../../styles/blogstandard-page.css';

export async function generateMetadata({ params }) {
  const { slug } = params;

  const query = `
    *[_type == "blogsStandardDetails" && slug.current == $slug][0] {
      title
    }
  `;
  const post = await client.fetch(query, { slug });

  const baseUrl = 'https://www.informationcave.com'; // ⬅️ Replace with your actual domain, no trailing slash

  return {
    title: post?.title || 'Science Blog',
    description: `Read more about ${post?.title || 'amazing science topics'}.`,
    alternates: {
      canonical: `${baseUrl}/blog-standard-post/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;

  const query = `
    *[_type == "blogsStandardDetails" && slug.current == $slug][0] {
      title,
      intro,
      content[] {
        ...,
        _type == "image" => {
          ...,
          asset->{
            _id,
            url
          }
        }
      }
    }
  `;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return <div className='blogsstandard-loading'>Loading post...</div>;
  }

  return (
    <div className="blogstandard-container">
      <div className="blogstandard-title">{post.title}</div>
      <p className="blogstandard-intro">{post.intro}</p>

      <div className="blogstandard-content">
        <PortableText value={post.content} components={PortableTextComponents} />
      </div>
    </div>
  );
}
