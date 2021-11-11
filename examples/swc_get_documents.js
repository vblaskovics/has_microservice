import SwaggerClient from 'swagger-client';

const request = {
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': '4ad6b720-1b8a-11ec-b573-0254eb6072a0'
  },
  method: 'GET',
  url: 'https://api.billingo.hu/v3/documents?page=1&per_page=25&start_date=2021-09-01&end_date=2021-10-08&start_number=1&end_number=10&start_year=2021&end_year=2021&type=invoice',
};

SwaggerClient.http(request).then(r => console.log(r)); 