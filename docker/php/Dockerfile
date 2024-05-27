FROM php:8.3.3-fpm

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y zlib1g-dev g++ libicu-dev zip libzip-dev libpng-dev

RUN docker-php-ext-install intl pdo_mysql
