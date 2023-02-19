import axios from "axios";

export default function getDetailEpisode(
  params: string,
  setepisode: (arg0: any) => void
) {
  axios.get(params).then((succ: any) =>
    setTimeout(() => {
      setepisode(succ.data);
    }, 1000)
  );
}
