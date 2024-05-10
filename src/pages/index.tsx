import { useQuery } from "@tanstack/react-query";
import { ping } from "@/services";

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["ping"],
    queryFn: ping,
  });

  return (
    <main>
      <h1 className="text-3xl">hello world</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>its ok</p>}
    </main>
  );
}
