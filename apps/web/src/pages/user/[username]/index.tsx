import { UserLayout } from "components/layouts/UserLayout";

const UserHome = () => {
  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

UserHome.getLayout = (page: React.ReactNode) => <UserLayout>{page}</UserLayout>;

export default UserHome;
