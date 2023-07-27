FROM rubylang/ruby:master-nightly-focal

RUN gem install --no-doc rubicure

ENTRYPOINT ["irb", "-rubicure"]
