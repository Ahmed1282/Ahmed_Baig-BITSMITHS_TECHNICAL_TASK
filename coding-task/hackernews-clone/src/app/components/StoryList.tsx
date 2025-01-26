import Link from 'next/link';

interface Story {
  id: number;
  title: string;
  by: string;
  url: string;
}

const StoryList = ({ stories }: { stories: Story[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stories.map((story) => (
        <div
          key={story.id}
          className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out"
        >
          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {story.title}
          </a>
          <p className="text-sm text-gray-600 mt-2">By: {story.by}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryList;
