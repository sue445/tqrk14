FROM ruby:3.2-alpine

RUN gem install --no-doc rubicure

ENTRYPOINT ["irb", "-rubicure"]
