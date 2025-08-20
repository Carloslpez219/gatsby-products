export function formatPrice(value) {
  if (!value && value !== 0) return "";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
