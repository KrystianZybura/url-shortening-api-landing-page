import axios from "axios";

export const linksShortenerAPI = async (defaultLink: string) => {
  console.log(typeof defaultLink);
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

  const { id, link, long_url } = await response.data;

  return { id, link, long_url };
};