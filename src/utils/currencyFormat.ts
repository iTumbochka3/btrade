const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const currencyFormat = (value: string | number) => USDollar.format(Number(value));

export default currencyFormat;
