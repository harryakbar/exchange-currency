import { getUSDBaseCurrency } from "./api";

it('can get USD base currency', async () => {
  expect.assertions(1);

  const { data } = await getUSDBaseCurrency();
  expect(data.base).toEqual('USD');
});
