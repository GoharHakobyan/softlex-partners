export const remove_trailing_slesh = path => {
  const last = path.slice(-1);
  if (last === '/') {
    return path.substring(0, path.length - 1);
  }
  return path;
};
