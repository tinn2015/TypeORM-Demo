# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

# 操作

## docker 启动 postgres

```shell
docker run --name some-postgres -v /postgres/postgresql:/var/lib/postgresql/data -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres:9.5

```


