# Installation

```
- git clone https://github.repository

- docker-compose run --rm backend composer install


- docker-compose run --rm backend php /app/init

- docker-compose up -d

Access it in your browser by opening

api: localhost:22080


```

# Testing

```
yii_test migrate

vendor/bin/codecept run
```