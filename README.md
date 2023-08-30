## Installation

```bash
$ npm install
$ tsc
```

## Running the app

```bash
# в отдельном окне терминала
$ node dist/app.js 

# После запуска приложения можно вводить команды для создания, удаления и получения записей.

# Пример получения записей с сортировкой :
# 		get asc(desc) model(brand, year, price)

# Пример удаления записи:
# 		delete 64ed9dd3db9d4b781c446ea6(id записи из mongo)

# Пример создания записи:
# 		create lada vesta 2000 20000