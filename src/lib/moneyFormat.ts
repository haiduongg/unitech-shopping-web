export default function moneyFormat(number: number) {
  const formater = number.toLocaleString('vi', {
    style: 'currency',
    currency: 'VND',
  });
  return formater;
}
