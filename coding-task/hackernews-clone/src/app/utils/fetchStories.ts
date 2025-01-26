export const fetchTopStories = async (storyIds: number[]) => {
    const stories = await Promise.all(
      storyIds.slice(0, 30).map(async (id) => {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return res.json();
      })
    );
    return stories;
  };
  