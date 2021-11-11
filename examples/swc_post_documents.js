import SwaggerClient from "swagger-client";

const request = {
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": "4ad6b720-1b8a-11ec-b573-0254eb6072a0",
  },
  method: "POST",
  url: "https://api.billingo.hu/v3/documents",
  body: JSON.stringify({
    partner_id: 1738463299,
    block_id: 117852,
    bank_account_id: 103735,
    type: "advance",
    fulfillment_date: "2020-05-07",
    due_date: "2020-05-07",
    payment_method: "bankcard",
    language: "hu",
    currency: "HUF",
    electronic: false,
    paid: false,
    items: [
      {
        product_id: 8277923,
        quantity: 1,
      },
    ],
    comment: "here comes the invoice comment",
  }),
};

SwaggerClient.http(request).then(
  (r) => console.log(r),
  (e) => console.log(e)
);
