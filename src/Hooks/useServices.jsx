import { useQuery } from "@tanstack/react-query";

const useServices = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const services = await fetch("https://b8a11-server-side-protamim.vercel.app/services");
      return await services.json();
    },
  });
  return { data, isLoading, refetch };
};

export default useServices;
