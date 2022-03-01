const paginate = (followers) => {
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    return followers.slice(
      index * itemsPerPage,
      index * itemsPerPage + itemsPerPage
    );
  });

  return newFollowers;
};

export default paginate;

/*
Idea is given a list of followers return an array of array chunks.
We can then use return by array chunk.

followers is still the full list

Technique
const newFollowers = Array.from({ length: numberOfPages });
console.log(newFollowers); // [null,null,null,null,null,null,null,null,null,null,null,null]
null values here are basically placeholders for the chunks of arrays to be produced below.

Now the second argument to Array.from is the map function and it's index parameter that 
can be applied to every item in the list. Within this function it allows us to iterate for 
every null and populate with chunks from followers using slice method providing
start and end values.
*/
