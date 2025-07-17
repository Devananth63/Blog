'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import staticBlogs from '../blog/data/blog';
import AdminBlog from './AdminBlog';
import "./BlogList.css"
export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole || '');

    const localBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

    const blogMap = new Map();
    [...staticBlogs, ...localBlogs].forEach((blog) => {
      blogMap.set(blog.slug, blog);
    });

    setBlogs(Array.from(blogMap.values()));
  }, []);

  if (role === 'admin') {
    return <AdminBlog blogs={blogs} />;
  }

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog.slug}>
          <Link href={`/blog/${blog.slug}`}>
            <div className="card-content">
              <img src={blog.image} alt={blog.title} />
              <h3>{blog.title}</h3>
              <p>{blog.content.slice(0, 90)}...</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}



// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import staticBlogs from '../blog/data/blog';
// import AdminBlog from './AdminBlog';
// import "./BlogList.css";

// export default function BlogList() {
//   const [blogs, setBlogs] = useState([]);
//   const [role, setRole] = useState('');

//   useEffect(() => {
//     const storedRole = localStorage.getItem('role');
//     setRole(storedRole || '');

//     const localBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

//     // 🔁 Merge static and local blogs without duplicates (by slug)
//     const blogMap = new Map();
//     staticBlogs.forEach(blog => blogMap.set(blog.slug, blog)); // static first
//     localBlogs.forEach(blog => blogMap.set(blog.slug, blog)); // override if same slug

//     setBlogs(Array.from(blogMap.values())); // merge both sets
//   }, []);

//   if (role === 'admin') {
//     return <AdminBlog blogs={blogs} />;
//   }

//   return (
//     <div className="blog-list">
//       {blogs.map((blog) => (
//         <div className="blog-card" key={blog.slug}>
//           <Link href={`/blog/${blog.slug}`}>
//             <div className="card-content">
//               <img src={blog.image} alt={blog.title} />
//               <h3>{blog.title}</h3>
//               <p>{blog.content.slice(0, 90)}...</p>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }
