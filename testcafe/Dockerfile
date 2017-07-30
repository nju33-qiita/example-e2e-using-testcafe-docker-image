FROM testcafe/testcafe

MAINTAINER nju33<nju33.ki@gmail.com>

USER root
COPY . /var/src/test
WORKDIR /var/src/test
RUN set -x \
  && apk update \
  && apk add --no-cache curl yarn \
  && curl -O https://noto-website.storage.googleapis.com/pkgs/NotoSansCJKjp-hinted.zip \
  && mkdir -p /usr/share/fonts/NotoSansCJKjp \
  && unzip NotoSansCJKjp-hinted.zip -d /usr/share/fonts/NotoSansCJKjp/ \
  && rm NotoSansCJKjp-hinted.zip \
  && fc-cache -fv \
  && yarn \
  && apk del --purge curl

# USER user
