const getTimeLeft = (endTime: number) => {
  const timeLeft = new Date(endTime).getTime() - new Date().getTime();
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toPrecision(2);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24).toPrecision(2);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60).toPrecision(2);
  const seconds = Math.floor((timeLeft / 1000) % 60).toPrecision(2);
  return { days, hours, minutes, seconds };
}

export default getTimeLeft;
