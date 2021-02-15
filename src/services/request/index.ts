import RequestError from "./request-error";

export default async function request(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw res;
    }

    return await res.json();
  } catch (e) {
    throw new RequestError(e);
  }
}
