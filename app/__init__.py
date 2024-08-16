import os
from flask import Flask, request, redirect
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_cors import CORS
from flask_wtf.csrf import generate_csrf
from .models import db, User
from .config import Config
from .seeds import seed_commands
from .api.auth_routes import auth_routes


app = Flask(__name__, static_folder='../react-vite/dist', static_url_path='/')


# login manager
login_manager = LoginManager(app)
login_manager.login_view = 'auth.unauthorized'


@login_manager.user_loader
def load_user(user_id):
  query = db.select(User).filter_by(id=user_id)
  user = db.session.execute(query)
  return user


# connect seed commands
app.cli.add_command(seed_commands)


# configure flask_sqlalchemy
app.config.from_object(Config)


# connect blueprints
app.register_blueprint(auth_routes, url_prefix='/api/auth')


# initialize database with flask app, and flask-migrate
db.init_app(app)
Migrate(app, db)


# security
CORS(app)


# redirect any http requests to https
@app.before_request
def https_redirect():
  if os.environ.get('FLASK_ENV') == 'production':
    if request.headers.get('X-Forwarded-Proto') == 'http':
      url = request.url.replace('http://', 'https://', 1)
      code = 301
      return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
  response.set_cookie(
    'csrf_token',
    generate_csrf(),
    secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
    samesite='Strict' if os.environ.get('FLASK_ENV') == 'production' else None,
    httponly=True
  )
  return response


# direct favicon and index.html request to public directory for react builds
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
  if path == 'favicon.ico':
    return app.send_from_directory('public', 'favicon.ico')
  return app.send_static_file('index.html')


# error handler
@app.errorhandler(404)
def not_found(e):
  return app.send_static_file('index.html')
