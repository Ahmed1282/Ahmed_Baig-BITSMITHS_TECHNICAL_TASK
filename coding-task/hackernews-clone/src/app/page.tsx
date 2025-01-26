'use client';

import { useState, useEffect } from 'react';
import StoryList from './components/StoryList';
import Pagination from './components/Pagination';
import { fetchTopStories } from './utils/fetchStories';

const Home = () => {
  const [storyIds, setStoryIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [stories, setStories] = useState<any[]>([]);

  const storiesPerPage = 10;

  useEffect(() => {
    const fetchStories = async () => {
      const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
      const ids = await res.json();
      setStoryIds(ids);
    };

    fetchStories();
  }, []);

  useEffect(() => {
    const fetchPageStories = async () => {
      const start = (currentPage - 1) * storiesPerPage;
      const end = start + storiesPerPage;
      const pageStories = await fetchTopStories(storyIds.slice(start, end));
      setStories(pageStories);
    };

    if (storyIds.length) fetchPageStories();
  }, [storyIds, currentPage]);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">HackerNews Clone</h1>
      <StoryList stories={stories} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(storyIds.length / storiesPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
