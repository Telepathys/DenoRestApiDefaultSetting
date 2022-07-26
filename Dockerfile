FROM denoland/deno
COPY ./src/ $DENO_DIR
ENTRYPOINT ["deno"]
CMD ["run","--allow-net","/deno-dir/index.ts"]
EXPOSE 8080