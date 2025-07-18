import EditBlogForm from '../components/EditBlogForm'; // Adjust path if needed
import { Suspense } from 'react'; // Optional, use only if you want to add suspense boundary

export default function UpdateBlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}> 
      <EditBlogForm />
    </Suspense>
  );
}
