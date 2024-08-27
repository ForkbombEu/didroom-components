const createIllustrationStory = (args: { illustrationName: string; size: number; outline: boolean }) => `
    <d-illustration illustration="${args.illustrationName}" />
`;

const meta = {
  title: 'Design System/MEDIA & ICONS/Illustrations',
};

export default meta;

export const CardCloud = {
  args: {
    illustrationName: 'card-cloud',
  },
  render: createIllustrationStory,
};

export const Cards = {
  args: {
    illustrationName: 'cards',
  },
  render: createIllustrationStory,
};

export const Chat = {
  args: {
    illustrationName: 'chat',
  },
  render: createIllustrationStory,
};

export const CircleCheck = {
  args: {
    illustrationName: 'circle-check',
  },
  render: createIllustrationStory,
};

export const EmptyWallet = {
  args: {
    illustrationName: 'empty-wallet',
  },
  render: createIllustrationStory,
};

export const HandCard = {
  args: {
    illustrationName: 'hand-card',
  },
  render: createIllustrationStory,
};

export const HandEllipsis = {
  args: {
    illustrationName: 'hand-ellipsis',
  },
  render: createIllustrationStory,
};

export const LogoHand = {
  args: {
    illustrationName: 'logo-hand',
  },
  render: createIllustrationStory,
};

export const Pidgeon = {
  args: {
    illustrationName: 'pidgeon',
  },
  render: createIllustrationStory,
};
