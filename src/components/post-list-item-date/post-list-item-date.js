import "./post-list-item-date.css";

const getDate = () => {
  let today = new Date(),
    d = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate(),
    m =
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1,
    y = today.getFullYear(),
    date = `${d}.${m}.${y}`;
  return date;
};

export default getDate();
