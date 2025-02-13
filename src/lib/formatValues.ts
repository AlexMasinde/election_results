export default function formatNumberWithCommas(value: string) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
