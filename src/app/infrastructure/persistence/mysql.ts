import * as repo from 'mysql-ts-repo-design'

export const connection = repo.mysql.connect(
    process.env.LOCAL_MYSQL_HOST,
    process.env.LOCAL_MYSQL_USER,
    process.env.LOCAL_MYSQL_DATABASE,
    process.env.LOCAL_MYSQL_PASSWORD)
