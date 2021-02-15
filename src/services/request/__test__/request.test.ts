import request from "../";

const globalFetchRef = global.fetch;

describe("Request Service", () => {
  beforeEach(() => {
    global.fetch = globalFetchRef;
  });

  it("returns fetch response when ok is true", async () => {
    const mockSuccessResponse = { name: "oddish" };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
      ok: true,
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const r = await request("https://teste-url");

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("https://teste-url");
    expect(r).toEqual({ name: "oddish" });
  });

  it("throws an error when ok is false", async () => {
    const mockFetchPromise = Promise.resolve({
      ok: false,
      status: 404,
      statusText: "Not Found",
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    await expect(request("https://teste-url")).rejects.toThrow("Not Found");
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("https://teste-url");
  });

  it("throws an error when promisse is rejected", async () => {
    const mockFetchPromise = Promise.reject({
      status: 500,
      statusText: "Internal error",
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    await expect(request("https://teste-url")).rejects.toThrow(
      "Internal error"
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("https://teste-url");
  });
});
