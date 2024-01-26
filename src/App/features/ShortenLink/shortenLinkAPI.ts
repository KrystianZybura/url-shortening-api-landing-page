import axios from "axios";
import { BitlyApiResponse } from "../../utils/types";

export const linksShortenerAPI = async (defaultLink: string) => {
  const response = await axios.post(
    "https://api-ssl.bitly.com/v4/shorten",
    {
      long_url: defaultLink,
    },
    {
      headers: {
        Authorization: "Bearer ac0ff1e5466a93748cb74d8bdfd737b68f819f26",
        "Content-Type": "application/json",
      },
    }
  );

  const { id, link, long_url } = (await response.data) as BitlyApiResponse;

  return { id, link, long_url };
};
