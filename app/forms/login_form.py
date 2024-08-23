from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import db, User


def verify_password(form, field):
  password = field.data
  username = form.data['username']
  query = db.select(User).filter_by(username=username)
  result = db.session.execute(query).one()
  user = result[0]

  if not user:
    raise ValidationError('No such user exists.')
  if not user.check_password(password):
    raise ValidationError('Password was incorrect.')


class LoginForm(FlaskForm):
  username = StringField('username', validators=[DataRequired()])
  password = StringField('password', validators=[DataRequired(), verify_password])
