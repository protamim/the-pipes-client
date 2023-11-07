import { useQuery } from "@tanstack/react-query";


const useServices = () => {
    const {data} = useQuery({
        queryKey: ['services'],
        queryFn: async()=> {
          const services = await fetch('http://localhost:3000/services');
          return await services.json();
        }
      })
    return {data};
};

export default useServices;