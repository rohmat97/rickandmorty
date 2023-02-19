import axios from "axios";

export default function getListCharacters(
  page: number,
  data: any,
  setData: (arg0: any[]) => void,
  setLoading: (arg0: boolean) => void,
  setMaxPage: (arg0: any) => void,
  setError: (arg0: string) => void
) {
  axios
    .get("https://rickandmortyapi.com/api/character/?page=" + page)
    .then((response) => {
      setTimeout(() => {
        setData([...data, ...response.data.results]);
        setLoading(false);
        setMaxPage(response.data.info.pages);
      }, 1500);
    })
    .catch((err) => {
      const error =
        err.response.status === 404
          ? "Resource Not found"
          : "An unexpected error has occurred";
      setError(error);
      setLoading(false);
    });
}
