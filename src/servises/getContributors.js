const getContributors = async (userName, repo) => {
  const pathApi = `https://api.github.com/repos/${userName}/${repo}/contributors`;
  const urlPathApi = new URL(pathApi);
  const respose = await fetch(urlPathApi);
  if (respose.ok) {
    const data = await respose.json();
    return data;
  }
  throw new Error();
};

export default getContributors;
