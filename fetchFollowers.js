const url = "https://api.github.com/users/bradtraversy/followers?per_page=100";

const fetchFollowers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchFollowers;
