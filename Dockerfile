FROM ruby:3.3-rc-alpine

RUN gem install --no-doc rubicure

ENTRYPOINT ["irb", "-rubicure"]
