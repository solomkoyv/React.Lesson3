import "./post-list-item-date.css";

const getDate = () => {
  let today = new Date(),
    d = today.getDate(),
    m = today.getMonth() + 1,
    y = today.getFullYear();

  const format = x => {
    return x < 10 ? "0" + x : x;
  };
  return `${format(d)}.${format(m)}.${y}`;
};

export default getDate();
