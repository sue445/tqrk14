FROM ruby:alpine3.18 as ruby-builder

ENV RUBY_VERSION 3.3.0-dev

# ref. https://github.com/rbenv/ruby-build/wiki#alpine-linux
RUN apk add build-base gcc6 patch bzip2 libffi-dev openssl-dev ncurses-dev gdbm-dev zlib-dev readline-dev yaml-dev

# other requirements
RUN apk add bash git autoconf

RUN wget https://github.com/rbenv/ruby-build/archive/refs/heads/master.zip -O /tmp/ruby-build-master.zip && \
    cd /tmp && \
    unzip ruby-build-master.zip && \
    rm -f ruby-build-master.zip && \
    PREFIX=/usr/local/ruby-build ./ruby-build-master/install.sh

RUN /usr/local/ruby-build/bin/ruby-build ${RUBY_VERSION} /usr/local/ruby-head

FROM alpine:3.18

# runtime dependencies
RUN apk add --no-cache gcc6 bzip2 libffi-dev openssl-dev ncurses-dev gdbm-dev zlib-dev readline-dev yaml-dev

COPY --from=ruby-builder /usr/local/ruby-head /usr/local/ruby-head

ENV PATH /usr/local/ruby-head/bin:$PATH

RUN gem install --no-doc rubicure

ENTRYPOINT ["irb", "-rubicure"]
