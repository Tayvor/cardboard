from flask import Flask
from flask_login import LoginManager
from .models import db, User
from .config import Config

from .api.auth_routes import auth_routes

app = Flask(__name__)

# @app.route('/')
# def hello_world():
#   return '<p>hello world!</p>'

# login manager
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'auth.unauthorized'

@login_manager.user_loader
def load_user(user_id):
  query = db.select(User).filter_by(id=user_id)
  user = db.session.execute(query)
  return user

# configure flask_sqlalchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cards.db'
app.config.from_object(Config)

app.register_blueprint(auth_routes, url_prefix='/api/auth')

db.init_app(app)
# init Migrate with app here
