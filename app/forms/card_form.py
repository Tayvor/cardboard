from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import db, Card


class CardForm(FlaskForm):
  scryfall_id = StringField('scryfall_id', validators=[DataRequired()])
  tcgplayer_id = StringField('tcgplayer_id')
  oracle_id = StringField('oracle_id')

  name = StringField('name', validators=[DataRequired()])
  colors = StringField('colors')
  mana_cost = StringField('mana_cost')
  keywords = StringField('keywords')
  power = StringField('power')
  toughness = StringField('toughness')
  rarity = StringField('rarity')

  artist = StringField('artist')
  artist_id = StringField('artist_id')
  illustration_id = StringField('illustration_id')

  set_code = StringField('set_code')
  set_name = StringField('set_name')
  set_id = StringField('set_id')
