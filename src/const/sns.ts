export const sns = [
  {
    name: 'mixi2',
    href: 'https://mixi.social/@yoiwamoto',
    imagePath: '/assets/mixi2.svg',
  },
  {
    name: 'X',
    href: 'https://x.com/yoiwamoto',
    imagePath: '/assets/x.png',
  },
  {
    name: 'Bluesky',
    href: 'https://yoiwamoto.bsky.social',
    imagePath: '/assets/bluesky.png',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/yo-iwamoto',
    imagePath: '/assets/github.svg',
  },
  {
    name: 'Threads',
    href: 'https://www.threads.net/@yoiwamoto_',
    imagePath: '/assets/threads.svg',
  },
  {
    name: 'Zenn',
    href: 'https://zenn.dev/you_5805',
    imagePath: '/assets/zenn.svg',
  },
] satisfies {
  name: string;
  href: string;
  imagePath?: string;
}[];
