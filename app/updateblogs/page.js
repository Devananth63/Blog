import { Suspense } from 'react'; // Optional, use only if you want to add suspense boundary
import EditBlogForm from '../../Components/EditBlogForm';  // Correct path

export default function UpdateBlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditBlogForm />
    </Suspense>
  );
}
