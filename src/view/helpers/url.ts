export const getLastSegment = (url: string): string | undefined =>
  url
    .split("/")
    .filter((e) => Boolean(e))
    .pop();

export const getFirstSegment = (url: string): string | undefined =>
  url
    .split("/")
    .filter((e) => Boolean(e))
    .shift();
