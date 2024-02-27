
import { useQuery } from "react-query";
import AllRecentWork from "./AllRecentWork";

const RecentWork = () => {
  const { data, error, isLoading } = useQuery("workHistory", async () => {
    const response = await fetch("https://my-portfolio-server-eight-beta.vercel.app/work-history");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // console.log(data);
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold mt-16 text-green-700">RecentWork</h1>
      <div className="grid lg:grid-cols-3 mg:grid-cols-3 grid-cols-1 gap-4 ">
        {data.map((allWork) => (
          <AllRecentWork data={allWork}></AllRecentWork>
        ))}
      </div>
    </div>
  );
};

export default RecentWork;
