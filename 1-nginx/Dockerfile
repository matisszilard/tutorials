FROM docker.io/nginxinc/nginx-unprivileged:1.25.4-alpine

USER root

RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot \
    && chown -R nonroot:nonroot /var

USER nonroot

COPY default.conf /etc/nginx/conf.d/default.conf

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
