import video from "./video";

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

test('plays video', () => {
  const spy = jest.spyOn(video, 'play'); // we pass 'get'
  const isPlaying = video.play;

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);
});
