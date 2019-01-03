FROM abiosoft/caddy

RUN ["mkdir", "/usr/local/webstatic"]
WORKDIR /usr/local/webstatic

COPY ./static/ /usr/local/webstatic