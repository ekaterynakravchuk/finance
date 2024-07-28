
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>main page</h1>
      <div className="flex space-x-4">
        <a href="/dashboard" className="text-blue-600">
          dashboard
        </a>
        <a href="/sign-in" className="text-blue-600">
          sign in
        </a>
        <a href="/sign-up" className="text-blue-600">
          sign up
        </a>
      </div>
    </main>
  );
}
