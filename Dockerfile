FROM ruby:3.3.0-preview1-alpine

RUN gem install --no-doc rubicure

ENTRYPOINT ["irb", "-rubicure"]
