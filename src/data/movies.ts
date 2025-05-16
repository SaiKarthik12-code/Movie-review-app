import type { Movie } from '@/lib/types';

const movies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    description: 'A thief who steals information by entering people\'s dreams takes on the inverse task of planting an idea into a target\'s subconscious.',
    genre: 'Sci-Fi',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    releaseYear: 2010,
    rating: 4.8,
    durationMinutes: 148,
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
  },
  {
    id: '2',
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    genre: 'Drama',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    releaseYear: 1994,
    rating: 4.9,
    durationMinutes: 142,
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  },
  {
    id: '3',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    genre: 'Action',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    releaseYear: 2008,
    rating: 4.9,
    durationMinutes: 152,
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
  },
  {
    id: '4',
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    genre: 'Crime',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    releaseYear: 1994,
    rating: 4.7,
    durationMinutes: 154,
    director: 'Quentin Tarantino',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
  },
  {
    id: '5',
    title: 'Forrest Gump',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
    genre: 'Drama',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    releaseYear: 1994,
    rating: 4.8,
    durationMinutes: 142,
    director: 'Robert Zemeckis',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
  },
  {
    id: '6',
    title: 'The Matrix',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    genre: 'Sci-Fi',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    releaseYear: 1999,
    rating: 4.7,
    durationMinutes: 136,
    director: 'Lana Wachowski, Lilly Wachowski',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
  },
  {
    id: '7',
    title: 'Spirited Away',
    description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
    genre: 'Animation',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    releaseYear: 2001,
    rating: 4.8,
    durationMinutes: 125,
    director: 'Hayao Miyazaki',
    cast: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki'],
  },
  {
    id: '8',
    title: 'Parasite',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    genre: 'Thriller',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    releaseYear: 2019,
    rating: 4.6,
    durationMinutes: 132,
    director: 'Bong Joon Ho',
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
  },
  {
    id: '9',
    title: 'The Grand Budapest Hotel',
    description: 'The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.',
    genre: 'Comedy',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    releaseYear: 2014,
    rating: 4.5,
    durationMinutes: 99,
    director: 'Wes Anderson',
    cast: ['Ralph Fiennes', 'F. Murray Abraham', 'Mathieu Amalric'],
  },
  {
    id: '10',
    title: 'Mad Max: Fury Road',
    description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the help of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
    genre: 'Action',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    releaseYear: 2015,
    rating: 4.7,
    durationMinutes: 120,
    director: 'George Miller',
    cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
  },
   {
    id: '11',
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    genre: 'Sci-Fi',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    releaseYear: 2014,
    rating: 4.8,
    durationMinutes: 169,
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
  },
  {
    id: '12',
    title: 'Whiplash',
    description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
    genre: 'Drama',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    releaseYear: 2014,
    rating: 4.7,
    durationMinutes: 106,
    director: 'Damien Chazelle',
    cast: ['Miles Teller', 'J.K. Simmons', 'Melissa Benoist'],
  },
  {
    id: '13',
    title: 'Coco',
    description: 'Aspiring musician Miguel, confronted with his family\'s ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.',
    genre: 'Animation',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    releaseYear: 2017,
    rating: 4.7,
    durationMinutes: 105,
    director: 'Lee Unkrich, Adrian Molina',
    cast: ['Anthony Gonzalez', 'Gael García Bernal', 'Benjamin Bratt'],
  },
  {
    id: '14',
    title: 'Joker',
    description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
    genre: 'Thriller',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    releaseYear: 2019,
    rating: 4.6,
    durationMinutes: 122,
    director: 'Todd Phillips',
    cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
  },
  {
    id: '15',
    title: 'Avengers: Endgame',
    description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
    genre: 'Action',
    posterUrl: 'https://placehold.co/300x450.png',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    releaseYear: 2019,
    rating: 4.8,
    durationMinutes: 181,
    director: 'Anthony Russo, Joe Russo',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo'],
  }
];

export const getMovies = async (): Promise<Movie[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  return movies;
};

export const getMovieById = async (id: string): Promise<Movie | undefined> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  return movies.find(movie => movie.id === id);
};

export const getMoviesByGenre = async (genre: string): Promise<Movie[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  return movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  const lowerQuery = query.toLowerCase();
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(lowerQuery) ||
    movie.description.toLowerCase().includes(lowerQuery) ||
    movie.genre.toLowerCase().includes(lowerQuery) ||
    (movie.director && movie.director.toLowerCase().includes(lowerQuery)) ||
    (movie.cast && movie.cast.some(actor => actor.toLowerCase().includes(lowerQuery)))
  );
};

export const getGenres = async (): Promise<string[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  const genres = new Set(movies.map(movie => movie.genre));
  return Array.from(genres);
}
