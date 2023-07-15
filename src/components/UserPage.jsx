import { Link } from "react-router-dom";


const UserPage = () => {

  return (
    <>
      {/* nav component */}
      <nav className="flex flex-row items-center justify-between px-4 w-full h-16 border-b-2 shadow-sm">
        <Link to="/" className="">
          <img src="/code.png" className="h-10" />
        </Link>
      </nav>
      {/* end of nav component */}

      <div>
        <h1 className="text-2xl my-6">The profile page of {user.name}</h1>
        <h1>Work in progress</h1>
      </div>
    </>
  );
};
export default UserPage;
