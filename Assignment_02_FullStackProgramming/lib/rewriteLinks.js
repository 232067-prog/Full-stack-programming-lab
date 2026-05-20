const PATH_MAP = [
  ['../index.html', '/'],
  ['index.html', '/'],
  ['pages/account.html', '/account'],
  ['pages/about.html', '/about'],
  ['pages/cart.html', '/cart'],
  ['pages/category.html', '/category'],
  ['pages/contact.html', '/contact'],
  ['pages/edit-account.html', '/edit-account'],
  ['pages/edit-billing.html', '/edit-billing'],
  ['pages/edit-shipping.html', '/edit-shipping'],
  ['pages/forgot.html', '/forgot'],
  ['pages/login.html', '/login'],
  ['pages/order-details.html', '/order-details'],
  ['pages/order-summary.html', '/order-summary'],
  ['pages/payment.html', '/payment'],
  ['pages/product.html', '/product'],
  ['pages/register.html', '/register'],
  ['pages/terms.html', '/terms'],
  ['account.html', '/account'],
  ['about.html', '/about'],
  ['cart.html', '/cart'],
  ['category.html', '/category'],
  ['contact.html', '/contact'],
  ['edit-account.html', '/edit-account'],
  ['edit-billing.html', '/edit-billing'],
  ['edit-shipping.html', '/edit-shipping'],
  ['forgot.html', '/forgot'],
  ['login.html', '/login'],
  ['order-details.html', '/order-details'],
  ['order-summary.html', '/order-summary'],
  ['payment.html', '/payment'],
  ['product.html', '/product'],
  ['register.html', '/register'],
  ['terms.html', '/terms']
];

export function rewriteLinks(html) {
  let out = html;
  PATH_MAP.forEach(([from, to]) => {
    out = out.split(from).join(to);
  });
  out = out.replace(/src="images\//g, 'src="/images/');
  out = out.replace(/src='images\//g, "src='/images/");
  return out;
}
