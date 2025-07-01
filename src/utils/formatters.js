export const dateFormatter = slot => {
  const dateStr = slot.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return dateStr;
};

export const timeFormatter = slot => {
  const h24 = slot.getHours();
  const h12 = h24 % 12 || 12;
  const mins = slot.getMinutes();
  const End = h24 < 12 ? 'AM' : 'PM';

  //Time formatting
  const timeStr = `${String(h12).padStart(2, '0')}:${String(mins).padStart(
    2,
    '0',
  )} ${End}`;

  return timeStr;
};
