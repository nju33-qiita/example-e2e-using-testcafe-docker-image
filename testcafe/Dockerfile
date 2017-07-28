FROM testcafe/testcafe

MAINTAINER nju33<nju33.ki@gmail.com>

USER root

COPY . /var/src/test
WORKDIR /var/src/test
RUN set -x \
  && apk update \
  && apk add yarn \
  && yarn

USER user
# ENTRYPOINT []
# CMD ["echo", "1"]
