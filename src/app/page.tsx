import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect root path to /en
  redirect('/en');
  
  // This won't be reached due to the redirect
  return null;
}
