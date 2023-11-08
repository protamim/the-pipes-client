import { useQuery } from "@tanstack/react-query";

const useServices = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const services = await fetch("http://localhost:3000/services");
      return await services.json();
    },
  });
  return { data, isLoading, refetch };
};

export default useServices;
