docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kyrs17/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kyrs17/app ../..
