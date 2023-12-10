import { useQuery } from "@tanstack/react-query";


const useBooking = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["booking"],
        queryFn: async () => {
          const booking = await fetch("https://b8a11-server-side-protamim.vercel.app/booking");
          return await booking.json();
        },
      });
      return { data, isLoading, refetch };
};

export default useBooking;