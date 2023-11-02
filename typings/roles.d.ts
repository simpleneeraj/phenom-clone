export type RolesDataType = {
  name: string;
  slug: string;
  image: {
    small: string;
    large: string;
  };
  content: {
    headings: {
      text: string;
      type: string;
    }[];
    quote: string;
    description: {
      text: string;
      type: string;
    }[];
  };
};
