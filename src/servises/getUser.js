const getUsers = async (userName) => {
  const pathApi = `https://api.github.com/users/${userName}`;
  const urlPathApi = new URL(pathApi);
  const respose = await fetch(urlPathApi);
  if (respose.ok) {
    const data = await respose.json();
    return data;
  }
  throw new Error();
};

export default getUsers;
