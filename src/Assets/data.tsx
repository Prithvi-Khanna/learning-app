export type EpisodeType = {
  name: string;
  video: string;
  playbackTime: number;
  completed: boolean;
  isLocked: boolean;
};

export type CourseType = {
  name: string;
  description: string;
  img: string;
  status: string; // in progress = PROG ; completed = COM ; not started = FRESH
  progresPercent: number;
  isLocked: boolean;
  queries: [
    {
      queryId: string;
      query: string;
      replies: [
        {
          replyId: number;
          reply: string;
        },
      ];
    },
  ];
  episodes: Array<EpisodeType>;
};

export const courses = [
  {
    name: 'Digital Shopper Journey 1',
    description: '4 Learning hours left',
    img: 'https://s3-alpha-sig.figma.com/img/922b/7d21/f0333c8c7f23d4f2ab451ed6c3fce161?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvpQ1nyicptjZ-AABnjJMX7D6reA2XYgEmsyqomAkp3UDiow72h5~kEm2zihqEGVqllG1Uv9r-8IOtZoq~JzKmFBfdnoXdllZI2gP2sxQ32IAIToGpsOXp3yU4ZlwbrnnTC6xaQC2HZChNgkF1UnhW3bjvbZVAE-G2ljQRiR5KopTNnRfKw10q9-aFa8k8P0otdz0P1B1QsoFUCPuixYc9pxZ6L7qPCavuPuugq-Tx3W2kafUxcb0~qz8doEgshZcsyarl21EnSJLBcszJNJYx00oinc0ZQ7r6K~A8MGysNAuVrVrHR5~kYe2o6WFxntvmQjbDW8kGQ4z9Gdzi9g8Q__',
    status: 'PROG',
    progresPercent: 0.6,
    isLocked: false,
    queries: [
      {
        queryId: '1',
        query:
          'Wanted to initiate discussion on the book which was an optional reading in this module.',
        replies: [
          {
            replyId: 1,
            reply: 'reply given.',
          },
        ],
      },
      {
        queryId: '2',
        query:
          'book which was an optional reading in this module.',
        replies: [],
      },
    ],
    episodes: [
      {
        name: 'Digital Journeys Explainer',
        video:
          'https://cdn.pixabay.com/video/2024/01/28/198358-907598215_large.mp4',
        playbackTime: 0,
        completed: false,
        isLocked: false,
      },
      {
        name: 'eCommerce Shopping Missions',
        video:
          'https://cdn.pixabay.com/video/2023/05/24/164360-830461265_large.mp4',
        playbackTime: 0,
        completed: true,
        isLocked: false,
      },
      {
        name: 'Additional Readings',
        video:
          'https://cdn.pixabay.com/video/2024/01/28/198358-907598215_large.mp4',
        playbackTime: 0,
        completed: false,
        isLocked: true,
      },
      {
        name: 'Shopping Missions Quiz',
        video:
          'https://cdn.pixabay.com/video/2023/05/24/164360-830461265_large.mp4',
        playbackTime: 0,
        completed: false,
        isLocked: true,
      },
      {
        name: 'Swiggy Case Study',
        video:
          'https://cdn.pixabay.com/video/2024/01/28/198358-907598215_large.mp4',
        playbackTime: 0,
        completed: false,
        isLocked: true,
      },
    ],
  },
  {
    name: 'Digital Shopper Journey 2',
    description: '6 Learning hours left',
    img: 'https://s3-alpha-sig.figma.com/img/922b/7d21/f0333c8c7f23d4f2ab451ed6c3fce161?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvpQ1nyicptjZ-AABnjJMX7D6reA2XYgEmsyqomAkp3UDiow72h5~kEm2zihqEGVqllG1Uv9r-8IOtZoq~JzKmFBfdnoXdllZI2gP2sxQ32IAIToGpsOXp3yU4ZlwbrnnTC6xaQC2HZChNgkF1UnhW3bjvbZVAE-G2ljQRiR5KopTNnRfKw10q9-aFa8k8P0otdz0P1B1QsoFUCPuixYc9pxZ6L7qPCavuPuugq-Tx3W2kafUxcb0~qz8doEgshZcsyarl21EnSJLBcszJNJYx00oinc0ZQ7r6K~A8MGysNAuVrVrHR5~kYe2o6WFxntvmQjbDW8kGQ4z9Gdzi9g8Q__',
    status: 'PROG',
    progresPercent: 0.9,
    isLocked: false,
    queries: [
      {
        queryId: '1',
        query:
          'Wanted to initiate discussion on the book which was an optional reading in this module.',
        replies: [
          {
            replyId: 1,
            reply: '',
          },
        ],
      },
    ],
    episodes: [
      {
        name: 'Digital Journeys Explainer',
        video:
          'https://cdn.pixabay.com/video/2024/01/28/198358-907598215_large.mp4',
        playbackTime: 0,
        completed: false,
        isLocked: false,
      },
    ],
  },
  {
    name: 'Digital Shopper Journey 3',
    description: '42 Learning hours left',
    img: 'https://s3-alpha-sig.figma.com/img/922b/7d21/f0333c8c7f23d4f2ab451ed6c3fce161?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvpQ1nyicptjZ-AABnjJMX7D6reA2XYgEmsyqomAkp3UDiow72h5~kEm2zihqEGVqllG1Uv9r-8IOtZoq~JzKmFBfdnoXdllZI2gP2sxQ32IAIToGpsOXp3yU4ZlwbrnnTC6xaQC2HZChNgkF1UnhW3bjvbZVAE-G2ljQRiR5KopTNnRfKw10q9-aFa8k8P0otdz0P1B1QsoFUCPuixYc9pxZ6L7qPCavuPuugq-Tx3W2kafUxcb0~qz8doEgshZcsyarl21EnSJLBcszJNJYx00oinc0ZQ7r6K~A8MGysNAuVrVrHR5~kYe2o6WFxntvmQjbDW8kGQ4z9Gdzi9g8Q__',
    status: 'COM',
    progresPercent: 0,
    isLocked: true,
    queries: [],
    episodes: [
      {
        name: 'Digital Journeys Explainer',
        video:
          'https://cdn.pixabay.com/video/2024/01/28/198358-907598215_large.mp4',
        playbackTime: 0,
        completed: false,
        isLocked: false,
      },
    ],
  },
  {
    name: 'Digital Shopper Journey 4',
    description: '42 Learning hours left',
    img: 'https://s3-alpha-sig.figma.com/img/922b/7d21/f0333c8c7f23d4f2ab451ed6c3fce161?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvpQ1nyicptjZ-AABnjJMX7D6reA2XYgEmsyqomAkp3UDiow72h5~kEm2zihqEGVqllG1Uv9r-8IOtZoq~JzKmFBfdnoXdllZI2gP2sxQ32IAIToGpsOXp3yU4ZlwbrnnTC6xaQC2HZChNgkF1UnhW3bjvbZVAE-G2ljQRiR5KopTNnRfKw10q9-aFa8k8P0otdz0P1B1QsoFUCPuixYc9pxZ6L7qPCavuPuugq-Tx3W2kafUxcb0~qz8doEgshZcsyarl21EnSJLBcszJNJYx00oinc0ZQ7r6K~A8MGysNAuVrVrHR5~kYe2o6WFxntvmQjbDW8kGQ4z9Gdzi9g8Q__',
    status: 'COM',
    progresPercent: 0,
    isLocked: true,
    queries: [],
    episodes: [
      {
        name: 'Digital Journeys Explainer',
        video:
          'https://cdn.pixabay.com/video/2024/01/28/198358-907598215_large.mp4',
        playbackTime: 0,
        completed: false,
        isLocked: false,
      },
    ],
  },
  {
    name: 'Digital Shopper Journey 5',
    description: '42 Learning hours left',
    img: 'https://s3-alpha-sig.figma.com/img/922b/7d21/f0333c8c7f23d4f2ab451ed6c3fce161?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvpQ1nyicptjZ-AABnjJMX7D6reA2XYgEmsyqomAkp3UDiow72h5~kEm2zihqEGVqllG1Uv9r-8IOtZoq~JzKmFBfdnoXdllZI2gP2sxQ32IAIToGpsOXp3yU4ZlwbrnnTC6xaQC2HZChNgkF1UnhW3bjvbZVAE-G2ljQRiR5KopTNnRfKw10q9-aFa8k8P0otdz0P1B1QsoFUCPuixYc9pxZ6L7qPCavuPuugq-Tx3W2kafUxcb0~qz8doEgshZcsyarl21EnSJLBcszJNJYx00oinc0ZQ7r6K~A8MGysNAuVrVrHR5~kYe2o6WFxntvmQjbDW8kGQ4z9Gdzi9g8Q__',
    status: 'COM',
    progresPercent: 0,
    isLocked: true,
    queries: [
      {
        queryId: '1',
        query:
          'Wanted to initiate discussion on the book which was an optional reading in this module.',
        replies: [
          {
            replyId: 1,
            reply: '',
          },
        ],
      },
    ],
    episodes: [
      {
        name: 'Digital Journeys Explainer',
        video:
          'https://cdn.pixabay.com/video/2024/01/28/198358-907598215_large.mp4',
        playbackTime: 0,
        completed: false,
        isLocked: false,
      },
    ],
  },
  {
    name: 'Digital Shopper Journey 6',
    description: '42 Learning hours left',
    img: 'https://s3-alpha-sig.figma.com/img/922b/7d21/f0333c8c7f23d4f2ab451ed6c3fce161?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvpQ1nyicptjZ-AABnjJMX7D6reA2XYgEmsyqomAkp3UDiow72h5~kEm2zihqEGVqllG1Uv9r-8IOtZoq~JzKmFBfdnoXdllZI2gP2sxQ32IAIToGpsOXp3yU4ZlwbrnnTC6xaQC2HZChNgkF1UnhW3bjvbZVAE-G2ljQRiR5KopTNnRfKw10q9-aFa8k8P0otdz0P1B1QsoFUCPuixYc9pxZ6L7qPCavuPuugq-Tx3W2kafUxcb0~qz8doEgshZcsyarl21EnSJLBcszJNJYx00oinc0ZQ7r6K~A8MGysNAuVrVrHR5~kYe2o6WFxntvmQjbDW8kGQ4z9Gdzi9g8Q__',
    status: 'FRESH',
    progresPercent: 0,
    isLocked: true,
    queries: [
      {
        queryId: '1',
        query:
          'Wanted to initiate discussion on the book which was an optional reading in this module.',
        replies: [
          {
            replyId: 1,
            reply: '',
          },
        ],
      },
    ],
    episodes: [
      {
        name: 'Digital Journeys Explainer',
        video:
          'https://cdn.pixabay.com/video/2024/01/28/198358-907598215_large.mp4',
        playbackTime: 0,
        completed: false,
        isLocked: false,
      },
    ],
  },
  {
    name: 'Digital Shopper Journey 7',
    description: '42 Learning hours left',
    img: 'https://s3-alpha-sig.figma.com/img/922b/7d21/f0333c8c7f23d4f2ab451ed6c3fce161?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvpQ1nyicptjZ-AABnjJMX7D6reA2XYgEmsyqomAkp3UDiow72h5~kEm2zihqEGVqllG1Uv9r-8IOtZoq~JzKmFBfdnoXdllZI2gP2sxQ32IAIToGpsOXp3yU4ZlwbrnnTC6xaQC2HZChNgkF1UnhW3bjvbZVAE-G2ljQRiR5KopTNnRfKw10q9-aFa8k8P0otdz0P1B1QsoFUCPuixYc9pxZ6L7qPCavuPuugq-Tx3W2kafUxcb0~qz8doEgshZcsyarl21EnSJLBcszJNJYx00oinc0ZQ7r6K~A8MGysNAuVrVrHR5~kYe2o6WFxntvmQjbDW8kGQ4z9Gdzi9g8Q__',
    status: 'FRESH',
    progresPercent: 0,
    isLocked: true,
    queries: [
      {
        queryId: '1',
        query:
          'Wanted to initiate discussion on the book which was an optional reading in this module.',
        replies: [
          {
            replyId: 1,
            reply: '',
          },
        ],
      },
    ],
    episodes: [
      {
        name: 'Digital Journeys Explainer',
        video:
          'https://cdn.pixabay.com/video/2024/01/28/198358-907598215_large.mp4',
        playbackTime: 0,
        completed: false,
        isLocked: false,
      },
    ],
  },
  {
    name: 'Digital Shopper Journey 8',
    description: '42 Learning hours left',
    img: 'https://s3-alpha-sig.figma.com/img/922b/7d21/f0333c8c7f23d4f2ab451ed6c3fce161?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvpQ1nyicptjZ-AABnjJMX7D6reA2XYgEmsyqomAkp3UDiow72h5~kEm2zihqEGVqllG1Uv9r-8IOtZoq~JzKmFBfdnoXdllZI2gP2sxQ32IAIToGpsOXp3yU4ZlwbrnnTC6xaQC2HZChNgkF1UnhW3bjvbZVAE-G2ljQRiR5KopTNnRfKw10q9-aFa8k8P0otdz0P1B1QsoFUCPuixYc9pxZ6L7qPCavuPuugq-Tx3W2kafUxcb0~qz8doEgshZcsyarl21EnSJLBcszJNJYx00oinc0ZQ7r6K~A8MGysNAuVrVrHR5~kYe2o6WFxntvmQjbDW8kGQ4z9Gdzi9g8Q__',
    status: 'FRESH',
    progresPercent: 0,
    isLocked: true,
    queries: [
      {
        queryId: '1',
        query:
          'Wanted to initiate discussion on the book which was an optional reading in this module.',
        replies: [
          {
            replyId: 1,
            reply: '',
          },
        ],
      },
    ],
    episodes: [
      {
        name: 'Digital Journeys Explainer',
        video:
          'https://cdn.pixabay.com/video/2024/01/28/198358-907598215_large.mp4',
        playbackTime: 0,
        completed: false,
        isLocked: false,
      },
    ],
  },
  {
    name: 'Digital Shopper Journey 9',
    description: '42 Learning hours left',
    img: 'https://s3-alpha-sig.figma.com/img/922b/7d21/f0333c8c7f23d4f2ab451ed6c3fce161?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvpQ1nyicptjZ-AABnjJMX7D6reA2XYgEmsyqomAkp3UDiow72h5~kEm2zihqEGVqllG1Uv9r-8IOtZoq~JzKmFBfdnoXdllZI2gP2sxQ32IAIToGpsOXp3yU4ZlwbrnnTC6xaQC2HZChNgkF1UnhW3bjvbZVAE-G2ljQRiR5KopTNnRfKw10q9-aFa8k8P0otdz0P1B1QsoFUCPuixYc9pxZ6L7qPCavuPuugq-Tx3W2kafUxcb0~qz8doEgshZcsyarl21EnSJLBcszJNJYx00oinc0ZQ7r6K~A8MGysNAuVrVrHR5~kYe2o6WFxntvmQjbDW8kGQ4z9Gdzi9g8Q__',
    status: 'FRESH',
    progresPercent: 0,
    isLocked: true,
    queries: [
      {
        queryId: '1',
        query:
          'Wanted to initiate discussion on the book which was an optional reading in this module.',
        replies: [
          {
            replyId: 1,
            reply: '',
          },
        ],
      },
    ],
    episodes: [
      {
        name: 'Digital Journeys Explainer',
        video:
          'https://cdn.pixabay.com/video/2024/01/28/198358-907598215_large.mp4',
        playbackTime: 0,
        completed: false,
        isLocked: false,
      },
    ],
  },
];
