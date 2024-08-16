from flask import Blueprint, request
from app.models import User, db
from app.forms import LoginForm, SignUpForm
from flask_login import current_user, login_user, logout_user

auth_routes = Blueprint('auth', __name__)


@auth_routes.get('/')
def authenticate():
  if current_user.is_authenticated:
    return current_user.to_dict()

  return {'errors': {'message': 'Unauthorized'}}, 401


@auth_routes.post('/signup')
def sign_up():
  form = SignUpForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    user = User(
      username = form.data['username'],
      email = form.data['email'],
      password = form.data['password']
    )
    db.session.add(user)
    db.session.commit()
    login_user(user)
    return user.to_dict()

  return form.errors, 401


@auth_routes.post('/login')
def login():
  print('hello from login route')
  form = LoginForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    query = db.select(User).filter_by(User.email==form.data['email'])
    user = db.session.execute(query)
    login_user(user)
    return user.to_dict()

  return form.errors, 401


@auth_routes.get('/logout')
def logout():
  logout_user()
  return {'message': 'User logged out.'}


# @auth_routes.get('/unauthorized')
# def unauthorized():
#     """
#     Returns unauthorized JSON when flask-login authentication fails
#     """
#     return {'errors': {'message': 'Unauthorized'}}, 401
