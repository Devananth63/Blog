import { Suspense } from 'react'; // Optional, use only if you want to add suspense boundary
import EditBlogForm from '../Components/EditBlogForm';  // Note the capital 'C' in Components


export default function UpdateBlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditBlogForm />
    </Suspense>
  );
}
