# Roulettech Take-Home App

Roulettech take-home assignment using React and Django API.

## Run the App

1. Clone the repository.

### Running the server app

- Move into the server directory

```
cd server
```

- Create a virtual environment on Mac

```
virtualenv myenv 
```

- Activate the virtual environment

  ```
  source myenv/bin/activate 
  ```

- Install requirements

```
pip install django djangorestframework django-cors-headers
```

- Run migrations

```
python manage.py makemigrations
python manage.py migrate
```

- Run on port 8000

```
python manage.py runserver
```

### Running the client app

- Move into the client directory

```
cd client
```

- Install dependencies

```
npm install
```

- Create a .env file using .env.sample
- Start the project

```
npm start
```
