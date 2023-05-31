import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["unsplash-images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (data?.results?.length < 1) {
    return (
      <section className="image-container">
        <h4>No result found</h4>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>an error occured</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {data.results.map((item) => {
        const url = item?.urls?.regular;

        return <img src={url} alt={item.id} key={item.id} className="img" />;
      })}
    </section>
  );
};

export default Gallery;
