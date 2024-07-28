import { UserButton } from "@clerk/nextjs";

const Dashboard = () => {
  return (
    <main>
      <h1>Dashboard</h1>
      <p>protected route</p>
      <UserButton />
    </main>
  );
};

export default Dashboard;
