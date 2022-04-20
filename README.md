# state-management


## Deployment

To deploy this project run

```bash
  yarn start
```
or
```bash
  npm start
```

## API Reference

#### Get all items

```http
  GET https://d6a4-116-104-88-91.ap.ngrok.io/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key|

#### Get item

```http
  GET https://d6a4-116-104-88-91.ap.ngrok.io//${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
